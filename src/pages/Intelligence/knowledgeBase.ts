import { KnowledgeChunk } from './knowledge/types';
import partiesChunks from './knowledge/01-parties';
import contratsChunks from './knowledge/02-contrats';
import chronologieChunks from './knowledge/03-chronologie';
import piratageChunks from './knowledge/04-piratage';
import preuvesChunks from './knowledge/05-preuves';
import emailsChunks from './knowledge/06-emails';
import reunionsChunks from './knowledge/07-reunions';
import lettresChunks from './knowledge/08-lettres';
import juridiqueChunks from './knowledge/09-juridique';
import psychologieChunks from './knowledge/10-psychologie';
import strategieChunks from './knowledge/11-strategie';
import scenariosChunks from './knowledge/12-scenarios';

export type { KnowledgeChunk };

// Tous les chunks combinés
export const allChunks: KnowledgeChunk[] = [
  ...partiesChunks,
  ...contratsChunks,
  ...chronologieChunks,
  ...piratageChunks,
  ...preuvesChunks,
  ...emailsChunks,
  ...reunionsChunks,
  ...lettresChunks,
  ...juridiqueChunks,
  ...psychologieChunks,
  ...strategieChunks,
  ...scenariosChunks,
];

// Fonction de recherche
export function searchKnowledge(query: string, maxResults: number = 6): KnowledgeChunk[] {
  const queryLower = query.toLowerCase();
  const queryWords = queryLower.split(/\s+/).filter(w => w.length > 2);
  
  const scored = allChunks.map(chunk => {
    let score = 0;
    const contentLower = chunk.content.toLowerCase();
    const titleLower = chunk.title.toLowerCase();
    
    for (const keyword of chunk.keywords) {
      if (queryLower.includes(keyword.toLowerCase())) score += 15;
      for (const word of queryWords) {
        if (keyword.toLowerCase().includes(word)) score += 5;
      }
    }
    
    for (const word of queryWords) {
      if (titleLower.includes(word)) score += 12;
      const matches = (contentLower.match(new RegExp(word, 'g')) || []).length;
      score += Math.min(matches * 2, 10);
    }
    
    if (contentLower.includes(queryLower)) score += 20;
    
    return { chunk, score };
  });
  
  return scored
    .filter(s => s.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, maxResults)
    .map(s => s.chunk);
}

// Construction du contexte
export function buildContext(chunks: KnowledgeChunk[], maxChars: number = 15000): string {
  if (chunks.length === 0) return "Aucun document pertinent trouvé.";
  
  let context = "DOCUMENTS DE RÉFÉRENCE:\n\n";
  let currentLength = context.length;
  
  for (const chunk of chunks) {
    const section = `### ${chunk.title}\n${chunk.content}\n\n---\n\n`;
    if (currentLength + section.length > maxChars) break;
    context += section;
    currentLength += section.length;
  }
  
  return context;
}

// Stats
export const knowledgeStats = {
  totalChunks: allChunks.length,
};