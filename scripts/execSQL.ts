import { createClient } from '@supabase/supabase-js';
import { readFileSync } from 'fs';

const url = 'https://xgmorzggraxpdewbbozs.supabase.co';
const key = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhnbW9yemdncmF4cGRld2Jib3pzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjczNzgxMjQsImV4cCI6MjA4Mjk1NDEyNH0.gl3PaNp2gdNh_gfsIsbH5SgDpVN02O9dhit_0UxUmRw';

const supabase = createClient(url, key);

const sql = readFileSync('/tmp/seed_clean.sql', 'utf-8');
const statements = sql.trim().split(';\n').filter(s => s.trim());

console.log(`Found ${statements.length} statements`);

for (let i = 0; i < statements.length; i++) {
  console.log(`\nExecuting statement ${i + 1}/${statements.length}...`);

  const stmt = statements[i].trim() + ';';

  try {
    const { error } = await supabase.rpc('exec_sql', { query: stmt });

    if (error) {
      console.error(`Error: ${error.message}`);
    } else {
      console.log(`✓ Success`);
    }
  } catch (err) {
    console.error(`Failed: ${err}`);
  }

  await new Promise(resolve => setTimeout(resolve, 100));
}

const { count } = await supabase
  .from('documents')
  .select('*', { count: 'exact', head: true });

console.log(`\nTotal documents: ${count}`);
