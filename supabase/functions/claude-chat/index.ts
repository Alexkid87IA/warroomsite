import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { createClient } from "npm:@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

const embeddingModel = new Supabase.ai.Session('gte-small');

interface Message {
  role: "user" | "assistant";
  content: string;
}

interface ChatRequest {
  messages: Message[];
  caseContext?: string;
}

interface Document {
  id: string;
  category: string;
  title: string;
  content: string;
  keywords: string[];
  similarity?: number;
}

const CATEGORY_KEYWORDS: Record<string, string[]> = {
  summary: ["resume", "situation", "litige", "general", "contexte"],
  parties: ["adn", "cc", "copyright", "capital", "alex", "jerome", "jack", "jonathan", "joel", "emre", "equipe", "qui"],
  contracts: ["contrat", "clause", "dette", "finances", "penalites", "breach", "remboursement", "150000", "142000", "210000"],
  assets: ["oye", "page", "facebook", "buzzly", "voyagerloin", "youtube", "actifs", "followers", "revenus", "piratage"],
  gmail_negligence: ["gmail", "negligence", "personnel", "securite", "faute", "systematique"],
  two_factor: ["2fa", "authentification", "facteurs", "contradiction"],
  meeting_14nov: ["reunion", "14", "novembre", "cr", "compte-rendu", "aveu"],
  timeline_meta: ["meta", "cheick", "tom", "email", "piratage", "chronologie"],
  timeline_main: ["chronologie", "timeline", "date", "quand", "historique"],
  letters: ["lettre", "mise", "demeure", "19", "26", "decembre"],
  legal: ["juridique", "article", "art", "82", "97", "100", "co", "cc", "droit", "loi"],
  evidence: ["preuve", "document", "email", "screenshot", "evidence"],
  strategy: ["strategie", "guerre", "objectif", "gagner", "capitulation"],
  clarification: ["recuperation", "prejudice", "irreversible", "valeur"]
};

function detectRelevantCategories(query: string): string[] {
  const queryLower = query.toLowerCase();
  const scores: Record<string, number> = {};

  for (const [category, keywords] of Object.entries(CATEGORY_KEYWORDS)) {
    scores[category] = 0;
    for (const keyword of keywords) {
      if (queryLower.includes(keyword)) {
        scores[category] += 1;
      }
    }
  }

  const sortedCategories = Object.entries(scores)
    .filter(([_, score]) => score > 0)
    .sort((a, b) => b[1] - a[1])
    .map(([category]) => category);

  if (sortedCategories.length === 0) {
    return ["summary", "strategy"];
  }

  return sortedCategories.slice(0, 3);
}

async function searchDocuments(
  supabase: ReturnType<typeof createClient>,
  query: string
): Promise<Document[]> {
  const embedding = await embeddingModel.run(query, { mean_pool: true, normalize: true });

  const { data: semanticResults, error: semanticError } = await supabase
    .rpc('search_documents', {
      query_embedding: embedding,
      match_threshold: 0.3,
      match_count: 8
    });

  if (semanticError) {
    console.error('Semantic search error:', semanticError);
  }

  const relevantCategories = detectRelevantCategories(query);

  const { data: categoryResults, error: categoryError } = await supabase
    .from('documents')
    .select('id, category, title, content, keywords')
    .in('category', relevantCategories)
    .limit(5);

  if (categoryError) {
    console.error('Category search error:', categoryError);
  }

  const allResults = new Map<string, Document>();

  if (semanticResults) {
    for (const doc of semanticResults) {
      allResults.set(doc.id, doc);
    }
  }

  if (categoryResults) {
    for (const doc of categoryResults) {
      if (!allResults.has(doc.id)) {
        allResults.set(doc.id, { ...doc, similarity: 0.5 });
      }
    }
  }

  return Array.from(allResults.values()).slice(0, 10);
}

function buildContext(documents: Document[]): string {
  if (documents.length === 0) {
    return "Aucun document pertinent trouve.";
  }

  const grouped = documents.reduce((acc, doc) => {
    if (!acc[doc.category]) {
      acc[doc.category] = [];
    }
    acc[doc.category].push(doc);
    return acc;
  }, {} as Record<string, Document[]>);

  let context = "";
  for (const [category, docs] of Object.entries(grouped)) {
    context += `\n=== ${category.toUpperCase()} ===\n`;
    for (const doc of docs) {
      context += `\n[${doc.title}]\n${doc.content}\n`;
    }
  }

  return context;
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { status: 200, headers: corsHeaders });
  }

  try {
    const { messages, caseContext }: ChatRequest = await req.json();

    const anthropicApiKey = Deno.env.get("ANTHROPIC_API_KEY");
    if (!anthropicApiKey) {
      throw new Error("ANTHROPIC_API_KEY not configured");
    }

    const supabase = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!
    );

    let contextToUse = caseContext || "";
    let searchInfo = "";

    const lastUserMessage = messages.filter(m => m.role === "user").pop();
    if (lastUserMessage) {
      const documents = await searchDocuments(supabase, lastUserMessage.content);

      if (documents.length > 0) {
        contextToUse = buildContext(documents);
        searchInfo = `\n[RAG: ${documents.length} documents pertinents trouves - categories: ${[...new Set(documents.map(d => d.category))].join(', ')}]\n`;
      }
    }

    const systemMessage = `Tu es un assistant juridique et strategique expert qui aide dans un dossier d'arbitrage international complexe entre ADN Production (Marseille) et Copyright Capital (Geneve).

Voici les informations pertinentes du dossier:${searchInfo}
${contextToUse}

Ton role:
- Analyser les donnees du dossier et identifier les points cles
- Repondre aux questions avec precision en citant les sources du dossier
- Proposer des strategies juridiques et diplomatiques
- Rediger des documents si demande (lettres, emails, notes)
- Identifier les contradictions et les failles dans les arguments adverses
- Calculer les probabilites de succes pour differentes approches
- Etre direct, precis et strategique

Reponds toujours en francais, sois professionnel mais accessible.

Si tu ne trouves pas l'information dans le contexte fourni, dis-le clairement plutot que d'inventer.`;

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
        system: systemMessage,
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
    return new Response(
      JSON.stringify({ error: error.message || "Internal server error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});