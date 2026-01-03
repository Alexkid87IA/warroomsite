// ═══════════════════════════════════════════════════════════════════════════════
// TYPES.TS — Types pour la Knowledge Base
// ═══════════════════════════════════════════════════════════════════════════════

export interface KnowledgeChunk {
  id: string;
  category: string;
  title: string;
  content: string;
  keywords: string[];
}