import { createClient } from '@supabase/supabase-js';
import { DATA } from '../src/data/allData';

const supabaseUrl = 'https://xgmorzggraxpdewbbozs.supabase.co';
const supabaseServiceKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhnbW9yemdncmF4cGRld2Jib3pzIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTczNjM3ODEyNCwiZXhwIjoyMDUxOTU0MTI0fQ.XUsaT8wELqYiOPSEVlYF2pq6pCNnfP-9f7bTqPn5cBw';

const supabase = createClient(supabaseUrl, supabaseServiceKey);

const documents = [
  {
    category: 'summary',
    title: 'Résumé exécutif du litige',
    content: JSON.stringify(DATA.summary, null, 2),
    keywords: ['resume', 'situation', 'litige', 'strategie', 'dette']
  },
  {
    category: 'parties',
    title: 'Parties impliquées',
    content: JSON.stringify(DATA.parties, null, 2),
    keywords: ['adn', 'copyright capital', 'meta', 'equipe', 'contacts']
  },
  {
    category: 'contracts',
    title: 'Contrats et clauses',
    content: JSON.stringify(DATA.contracts, null, 2),
    keywords: ['contrat', 'clause', 'dette', 'penalites', 'remboursement']
  },
  {
    category: 'assets',
    title: 'Actifs concernés',
    content: JSON.stringify(DATA.assets, null, 2),
    keywords: ['oye', 'buzzly', 'facebook', 'youtube', 'piratage', 'revenus']
  },
  {
    category: 'gmail_negligence',
    title: 'Négligence systématique Gmail',
    content: JSON.stringify(DATA.gmailNegligence, null, 2),
    keywords: ['gmail', 'negligence', 'securite', 'faute', 'systematique']
  },
  {
    category: 'two_factor',
    title: 'Contradiction 2FA',
    content: JSON.stringify(DATA.twoFactorContradiction, null, 2),
    keywords: ['2fa', 'authentification', 'contradiction', 'securite']
  },
  {
    category: 'meeting_14nov',
    title: 'Réunion du 14 novembre',
    content: JSON.stringify(DATA.meeting14Nov, null, 2),
    keywords: ['reunion', '14 novembre', 'compte-rendu', 'aveu']
  },
  {
    category: 'timeline_meta',
    title: 'Timeline Meta/Facebook',
    content: JSON.stringify(DATA.timelineMeta, null, 2),
    keywords: ['meta', 'facebook', 'cheick', 'tom', 'piratage', 'chronologie']
  },
  {
    category: 'timeline_main',
    title: 'Chronologie principale',
    content: JSON.stringify(DATA.chronology, null, 2),
    keywords: ['chronologie', 'timeline', 'dates', 'historique']
  },
  {
    category: 'letters',
    title: 'Lettres de mise en demeure',
    content: JSON.stringify(DATA.letters, null, 2),
    keywords: ['lettre', 'mise en demeure', '19 decembre', '26 decembre']
  },
  {
    category: 'legal',
    title: 'Cadre juridique',
    content: JSON.stringify(DATA.legal, null, 2),
    keywords: ['juridique', 'article', 'co', 'cc', 'droit', 'loi']
  },
  {
    category: 'evidence',
    title: 'Preuves et documents',
    content: JSON.stringify(DATA.evidence, null, 2),
    keywords: ['preuve', 'document', 'email', 'screenshot', 'evidence']
  },
  {
    category: 'strategy',
    title: 'Stratégie Taleb',
    content: JSON.stringify(DATA.taleb, null, 2),
    keywords: ['strategie', 'guerre', 'taleb', 'antifragile', 'objectif']
  }
];

async function seedDocuments() {
  console.log('Starting to seed documents...');

  for (const doc of documents) {
    try {
      const { error } = await supabase
        .from('documents')
        .insert({
          category: doc.category,
          title: doc.title,
          content: doc.content,
          keywords: doc.keywords,
          metadata: {}
        });

      if (error) {
        console.error(`Error inserting ${doc.title}:`, error);
      } else {
        console.log(`✓ Inserted: ${doc.title}`);
      }

      await new Promise(resolve => setTimeout(resolve, 100));
    } catch (err) {
      console.error(`Failed to insert ${doc.title}:`, err);
    }
  }

  console.log('\nSeeding complete!');

  const { count } = await supabase
    .from('documents')
    .select('*', { count: 'exact', head: true });

  console.log(`Total documents in database: ${count}`);
}

seedDocuments().catch(console.error);
