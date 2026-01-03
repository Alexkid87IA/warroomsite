import { readFileSync } from 'fs';

const sql = readFileSync('scripts/seed.sql', 'utf-8');
const lines = sql.split('\n').filter(line => line.trim().startsWith('INSERT'));

console.log(`Found ${lines.length} INSERT statements`);

for (let i = 0; i < lines.length; i++) {
  console.log(`\n-- Statement ${i + 1}/${lines.length}`);
  console.log(lines[i]);
}
