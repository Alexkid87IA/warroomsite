// ═══════════════════════════════════════════════════════════════════════════════
// CLAUDE CHAT — Version Streaming + RAG Optimisé
// War Room ADN vs Copyright Capital
// ═══════════════════════════════════════════════════════════════════════════════

import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { createClient } from "npm:@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

// ─────────────────────────────────────────────────────────────────────────────────
// TYPES
// ─────────────────────────────────────────────────────────────────────────────────

interface Message {
  role: "user" | "assistant";
  content: string;
}

interface ChatRequest {
  messages: Message[];
  stream?: boolean;
}

interface Document {
  id: string;
  category: string;
  title: string;
  content: string;
  keywords: string[];
  similarity?: number;
}

// ─────────────────────────────────────────────────────────────────────────────────
// CONFIGURATION RAG OPTIMISÉE
// ─────────────────────────────────────────────────────────────────────────────────

const RAG_CONFIG = {
  // Réduire le nombre de documents pour accélérer
  maxDocuments: 5,           // Était 10, maintenant 5
  matchThreshold: 0.4,       // Était 0.3, plus strict = plus rapide
  maxContentLength: 3000,    // Limite par document (caractères)
  totalContextLimit: 12000,  // Limite totale du contexte
};

// Mots-clés par catégorie (simplifié et optimisé)
const CATEGORY_KEYWORDS: Record<string, string[]> = {
  summary: ["resume", "situation", "litige", "contexte", "general"],
  parties: ["adn", "cc", "copyright", "capital", "alex", "jerome", "jack", "jonathan", "emre", "qui"],
  contracts: ["contrat", "clause", "dette", "penalites", "breach", "remboursement", "argent", "payer"],
  evidence: ["preuve", "document", "email", "negligence", "faute"],
  gmail_negligence: ["gmail", "personnel", "securite", "faute"],
  two_factor: ["2fa", "authentification", "facteurs", "securite"],
  legal: ["juridique", "article", "art", "82", "97", "100", "co", "droit"],
  strategy: ["strategie", "guerre", "objectif", "phase", "taleb"],
  letters: ["lettre", "mise", "demeure", "decembre", "reponse"],
  clarification: ["oye", "page", "facebook", "prejudice", "recuperation"],
};

// ─────────────────────────────────────────────────────────────────────────────────
// FONCTIONS RAG OPTIMISÉES
// ─────────────────────────────────────────────────────────────────────────────────

function detectCategories(query: string): string[] {
  const queryLower = query.toLowerCase();
  const scores: [string, number][] = [];

  for (const [category, keywords] of Object.entries(CATEGORY_KEYWORDS)) {
    let score = 0;
    for (const keyword of keywords) {
      if (queryLower.includes(keyword)) {
        score += keyword.length > 4 ? 2 : 1; // Mots longs = plus de poids
      }
    }
    if (score > 0) {
      scores.push([category, score]);
    }
  }

  // Trier par score et prendre les 3 meilleurs
  scores.sort((a, b) => b[1] - a[1]);
  const topCategories = scores.slice(0, 3).map(([cat]) => cat);
  
  // Si aucune catégorie détectée, retourner les essentielles
  return topCategories.length > 0 ? topCategories : ["summary", "strategy"];
}

async function searchDocuments(
  supabase: ReturnType<typeof createClient>,
  query: string
): Promise<Document[]> {
  
  // 1. Détection des catégories pertinentes
  const relevantCategories = detectCategories(query);
  
  // 2. Recherche par catégorie (plus rapide que sémantique pour notre cas)
  const { data: results, error } = await supabase
    .from('documents')
    .select('id, category, title, content, keywords')
    .in('category', relevantCategories)
    .limit(RAG_CONFIG.maxDocuments);

  if (error) {
    console.error('Search error:', error);
    return [];
  }

  return results || [];
}

function buildOptimizedContext(documents: Document[]): string {
  if (documents.length === 0) {
    return "";
  }

  let context = "";
  let totalLength = 0;

  for (const doc of documents) {
    // Limiter la taille de chaque document
    let content = doc.content;
    if (content.length > RAG_CONFIG.maxContentLength) {
      content = content.substring(0, RAG_CONFIG.maxContentLength) + "...";
    }

    // Vérifier la limite totale
    if (totalLength + content.length > RAG_CONFIG.totalContextLimit) {
      break;
    }

    context += `\n### ${doc.title}\n${content}\n`;
    totalLength += content.length;
  }

  return context;
}

// ─────────────────────────────────────────────────────────────────────────────────
// SYSTEM PROMPT OPTIMISÉ (plus court = plus rapide)
// ─────────────────────────────────────────────────────────────────────────────────

const SYSTEM_PROMPT = `Tu es l'assistant stratégique de la War Room ADN Production vs Copyright Capital.

CONTEXTE RAPIDE:
- ADN Production (Marseille) vs Copyright Capital SA (Genève)
- Page Facebook "Oye" (1,2M abonnés) piratée sous contrôle exclusif de CC
- Dette réclamée: 142k€ | Préjudice ADN: 1-1,3M€
- Stratégie: Antifragilité (Taleb) — Phase actuelle: SILENCE

TON RÔLE:
- Répondre aux questions sur le dossier
- Analyser les preuves et arguments juridiques
- Proposer des stratégies
- Être direct, précis, en français

Si l'info n'est pas dans le contexte fourni, dis-le clairement.`;

// ─────────────────────────────────────────────────────────────────────────────────
// HANDLER PRINCIPAL AVEC STREAMING
// ─────────────────────────────────────────────────────────────────────────────────

Deno.serve(async (req: Request) => {
  // CORS preflight
  if (req.method === "OPTIONS") {
    return new Response(null, { status: 200, headers: corsHeaders });
  }

  try {
    const { messages, stream = true }: ChatRequest = await req.json();

    // Vérifier la clé API
    const anthropicApiKey = Deno.env.get("ANTHROPIC_API_KEY");
    if (!anthropicApiKey) {
      throw new Error("ANTHROPIC_API_KEY not configured");
    }

    // Connexion Supabase
    const supabase = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!
    );

    // Recherche RAG
    const lastUserMessage = messages.filter(m => m.role === "user").pop();
    let contextInfo = "";
    
    if (lastUserMessage) {
      const documents = await searchDocuments(supabase, lastUserMessage.content);
      if (documents.length > 0) {
        const context = buildOptimizedContext(documents);
        contextInfo = `\n\nDOCUMENTS PERTINENTS:\n${context}`;
      }
    }

    const fullSystemPrompt = SYSTEM_PROMPT + contextInfo;

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
          max_tokens: 2048,  // Réduit pour plus de rapidité
          stream: true,
          system: fullSystemPrompt,
          messages: messages,
        }),
      });

      if (!response.ok) {
        const error = await response.text();
        throw new Error(`Anthropic API error: ${error}`);
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
              if (done) break;

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
                      // Envoyer au client en format SSE
                      controller.enqueue(
                        encoder.encode(`data: ${JSON.stringify({ text })}\n\n`)
                      );
                    }
                    
                    // Fin du message
                    if (parsed.type === "message_stop") {
                      controller.enqueue(encoder.encode(`data: [DONE]\n\n`));
                    }
                  } catch (e) {
                    // Ignorer les erreurs de parsing
                  }
                }
              }
            }
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
        max_tokens: 2048,
        system: fullSystemPrompt,
        messages: messages,
      }),
    });

    if (!response.ok) {
      const error = await response.text();
      throw new Error(`Anthropic API error: ${error}`);
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