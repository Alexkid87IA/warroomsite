import { DATA } from '../src/data/allData';
import { writeFileSync } from 'fs';

const documents = [
  {
    category: 'summary',
    title: 'Résumé exécutif du litige',
    content: JSON.stringify(DATA.summary),
    keywords: ['resume', 'situation', 'litige', 'strategie', 'dette']
  },
  {
    category: 'parties',
    title: 'Parties impliquées',
    content: JSON.stringify(DATA.parties),
    keywords: ['adn', 'copyright capital', 'meta', 'equipe', 'contacts']
  },
  {
    category: 'contracts',
    title: 'Contrats et clauses',
    content: JSON.stringify(DATA.contracts),
    keywords: ['contrat', 'clause', 'dette', 'penalites', 'remboursement']
  },
  {
    category: 'assets',
    title: 'Actifs concernés',
    content: JSON.stringify(DATA.assets),
    keywords: ['oye', 'buzzly', 'facebook', 'youtube', 'piratage', 'revenus']
  },
  {
    category: 'clarification',
    title: 'Clarification stratégique',
    content: JSON.stringify(DATA.strategicClarification),
    keywords: ['clarification', 'strategie', 'objectif', 'recuperation']
  },
  {
    category: 'gmail_negligence',
    title: 'Négligence systématique Gmail',
    content: JSON.stringify(DATA.gmailNegligence),
    keywords: ['gmail', 'negligence', 'securite', 'faute', 'systematique']
  },
  {
    category: 'meeting_14nov',
    title: 'Réunion du 14 novembre',
    content: JSON.stringify(DATA.meeting14Nov),
    keywords: ['reunion', '14 novembre', 'compte-rendu', 'aveu']
  },
  {
    category: 'timeline_meta',
    title: 'Timeline Meta/Facebook',
    content: JSON.stringify(DATA.metaTimeline),
    keywords: ['meta', 'facebook', 'cheick', 'tom', 'piratage', 'chronologie']
  },
  {
    category: 'timeline_main',
    title: 'Chronologie principale',
    content: JSON.stringify(DATA.mainTimeline),
    keywords: ['chronologie', 'timeline', 'dates', 'historique']
  },
  {
    category: 'two_factor',
    title: 'Preuve contradiction 2FA',
    content: JSON.stringify(DATA.twoFactorProof),
    keywords: ['2fa', 'authentification', 'contradiction', 'securite', 'preuve']
  },
  {
    category: 'letters',
    title: 'Lettres de mise en demeure',
    content: JSON.stringify(DATA.letters),
    keywords: ['lettre', 'mise en demeure', '19 decembre', '26 decembre']
  },
  {
    category: 'legal',
    title: 'Cadre juridique',
    content: JSON.stringify(DATA.legal),
    keywords: ['juridique', 'article', 'co', 'cc', 'droit', 'loi']
  },
  {
    category: 'evidence',
    title: 'Preuves et documents',
    content: JSON.stringify(DATA.evidence),
    keywords: ['preuve', 'document', 'email', 'screenshot', 'evidence']
  },
  {
    category: 'strategy',
    title: 'Stratégie de guerre',
    content: JSON.stringify(DATA.warStrategy),
    keywords: ['strategie', 'guerre', 'taleb', 'antifragile', 'objectif']
  },
  {
    category: 'psychology',
    title: 'Psychologie adverses',
    content: JSON.stringify(DATA.psychologyCC),
    keywords: ['psychologie', 'profil', 'comportement', 'adversaire']
  },
  {
    category: 'action_plan',
    title: 'Plan d\'action',
    content: JSON.stringify(DATA.actionPlan),
    keywords: ['plan', 'action', 'etapes', 'priorites']
  },
  {
    category: 'neutral_lens',
    title: 'Analyse neutre',
    content: JSON.stringify(DATA.neutralLens),
    keywords: ['analyse', 'neutre', 'objectif', 'risques']
  }
];

function escapeSQL(str: string | undefined): string {
  if (!str) return '';
  return str.replace(/'/g, "''");
}

let sql = 'TRUNCATE TABLE documents;\n\n';

for (const doc of documents) {
  const category = escapeSQL(doc.category);
  const title = escapeSQL(doc.title);
  const content = escapeSQL(doc.content);
  const keywords = doc.keywords.map(k => `'${escapeSQL(k)}'`).join(',');

  sql += `INSERT INTO documents (category, title, content, keywords, metadata) VALUES ('${category}', '${title}', '${content}', ARRAY[${keywords}], '{}');\n`;
}

writeFileSync('scripts/seed.sql', sql);
console.log('SQL file generated: scripts/seed.sql');
console.log(`Total documents: ${documents.length}`);
