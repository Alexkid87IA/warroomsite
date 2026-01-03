// ═══════════════════════════════════════════════════════════════════════════════
// CLAUDE CHAT — Version Simplifiée avec Streaming
// Le RAG est fait côté frontend, cette fonction reçoit directement le contexte
// ═══════════════════════════════════════════════════════════════════════════════

import "jsr:@supabase/functions-js/edge-runtime.d.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

interface Message {
  role: "user" | "assistant";
  content: string;
}

interface ChatRequest {
  messages: Message[];
  systemPrompt?: string;
  stream?: boolean;
}

// System prompt par défaut si aucun n'est fourni
const DEFAULT_SYSTEM_PROMPT = `Tu es l'assistant stratégique de la War Room ADN Production vs Copyright Capital.

CONTEXTE:
- ADN Production (Marseille) vs Copyright Capital SA (Genève)
- Page Facebook "Oye" (1,2M abonnés) piratée sous contrôle exclusif de CC
- Dette réclamée: 142k€ | Préjudice ADN: 1-1,3M€
- Stratégie: Antifragilité (Taleb)

Réponds en français, sois direct et précis.`;

Deno.serve(async (req: Request) => {
  // CORS preflight
  if (req.method === "OPTIONS") {
    return new Response(null, { status: 200, headers: corsHeaders });
  }

  try {
    const { messages, systemPrompt, stream = true }: ChatRequest = await req.json();

    // Vérifier la clé API
    const anthropicApiKey = Deno.env.get("ANTHROPIC_API_KEY");
    if (!anthropicApiKey) {
      return new Response(
        JSON.stringify({ error: "ANTHROPIC_API_KEY not configured. Configurez la clé dans Supabase Edge Functions Secrets." }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const finalSystemPrompt = systemPrompt || DEFAULT_SYSTEM_PROMPT;

    // ─────────────────────────────────────────────────────────────────────────────
    // MODE STREAMING
    // ─────────────────────────────────────────────────────────────────────────────
    
    if (stream) {
      const response = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": anthropicApiKey,
          "anthropic-version": "2023-06-01",
        },
        body: JSON.stringify({
          model: "claude-sonnet-4-5-20250929",
          max_tokens: 4096,
          stream: true,
          system: finalSystemPrompt,
          messages: messages,
        }),
      });

      if (!response.ok) {
        const error = await response.text();
        console.error("Anthropic API error:", error);
        return new Response(
          JSON.stringify({ error: `Erreur API Claude: ${response.status}` }),
          { status: response.status, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }

      // Transformer le stream Anthropic en SSE pour le client
      const encoder = new TextEncoder();
      
      const transformedStream = new ReadableStream({
        async start(controller) {
          const reader = response.body!.getReader();
          const decoder = new TextDecoder();
          let buffer = "";

          try {
            while (true) {
              const { done, value } = await reader.read();
              if (done) {
                // Envoyer le signal de fin
                controller.enqueue(encoder.encode(`data: [DONE]\n\n`));
                break;
              }

              buffer += decoder.decode(value, { stream: true });
              const lines = buffer.split("\n");
              buffer = lines.pop() || "";

              for (const line of lines) {
                if (line.startsWith("data: ")) {
                  const data = line.slice(6);
                  if (data === "[DONE]") continue;
                  
                  try {
                    const parsed = JSON.parse(data);
                    
                    // Extraire le texte du delta
                    if (parsed.type === "content_block_delta" && 
                        parsed.delta?.type === "text_delta") {
                      const text = parsed.delta.text;
                      controller.enqueue(
                        encoder.encode(`data: ${JSON.stringify({ text })}\n\n`)
                      );
                    }
                    
                    // Fin du message
                    if (parsed.type === "message_stop") {
                      controller.enqueue(encoder.encode(`data: [DONE]\n\n`));
                    }
                  } catch {
                    // Ignorer les erreurs de parsing
                  }
                }
              }
            }
          } catch (err) {
            console.error("Stream error:", err);
          } finally {
            controller.close();
          }
        },
      });

      return new Response(transformedStream, {
        headers: {
          ...corsHeaders,
          "Content-Type": "text/event-stream",
          "Cache-Control": "no-cache",
          "Connection": "keep-alive",
        },
      });
    }

    // ─────────────────────────────────────────────────────────────────────────────
    // MODE NON-STREAMING (fallback)
    // ─────────────────────────────────────────────────────────────────────────────
    
    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": anthropicApiKey,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: "claude-sonnet-4-5-20250929",
        max_tokens: 4096,
        system: finalSystemPrompt,
        messages: messages,
      }),
    });

    if (!response.ok) {
      const error = await response.text();
      return new Response(
        JSON.stringify({ error: `Erreur API Claude: ${response.status}` }),
        { status: response.status, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const data = await response.json();
    return new Response(JSON.stringify(data), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });

  } catch (error) {
    console.error("Error:", error);
    return new Response(
      JSON.stringify({ error: error.message || "Internal server error" }),
      { 
        status: 500, 
        headers: { ...corsHeaders, "Content-Type": "application/json" } 
      }
    );
  }
});