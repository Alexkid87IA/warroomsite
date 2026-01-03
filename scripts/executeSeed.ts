import { createClient } from '@supabase/supabase-js';
import { readFileSync } from 'fs';

const supabaseUrl = process.env.VITE_SUPABASE_URL!;
const supabaseKey = process.env.VITE_SUPABASE_ANON_KEY!;

const supabase = createClient(supabaseUrl, supabaseKey);

async function executeSeedSQL() {
  const sql = readFileSync('scripts/seed.sql', 'utf-8');
  const lines = sql.split('\n').filter(line => line.trim().startsWith('INSERT'));

  console.log(`Found ${lines.length} INSERT statements`);

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    console.log(`\nExecuting INSERT ${i + 1}/${lines.length}...`);

    const match = line.match(/VALUES \('([^']+)', '([^']+)', '(.+)', ARRAY\[([^\]]+)\], '{}'\);/);

    if (!match) {
      console.error(`Failed to parse line ${i + 1}`);
      continue;
    }

    const category = match[1];
    const title = match[2];
    const content = match[3].replace(/''/g, "'");
    const keywordsStr = match[4];
    const keywords = keywordsStr.split(',').map(k => k.trim().replace(/^'|'$/g, ''));

    try {
      const { error } = await supabase
        .from('documents')
        .insert({
          category,
          title,
          content,
          keywords,
          metadata: {}
        });

      if (error) {
        console.error(`Error inserting ${title}:`, error.message);
      } else {
        console.log(`✓ Inserted: ${title}`);
      }
    } catch (err) {
      console.error(`Failed to insert ${title}:`, err);
    }

    await new Promise(resolve => setTimeout(resolve, 200));
  }

  const { count } = await supabase
    .from('documents')
    .select('*', { count: 'exact', head: true });

  console.log(`\nTotal documents in database: ${count}`);
}

executeSeedSQL().catch(console.error);
