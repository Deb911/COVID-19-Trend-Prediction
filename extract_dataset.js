const fs = require('fs');
const path = require('path');

const fullLog = 'C:\\Users\\HP\\.gemini\\antigravity\\brain\\1252d8af-65fd-4a48-a3bf-04bb5b3fc9d5\\.system_generated\\logs\\transcript_full.jsonl';
const compactLog = 'C:\\Users\\HP\\.gemini\\antigravity\\brain\\1252d8af-65fd-4a48-a3bf-04bb5b3fc9d5\\.system_generated\\logs\\transcript.jsonl';
const logFile = fs.existsSync(fullLog) ? fullLog : compactLog;

console.log('Reading transcript from:', logFile);
const content = fs.readFileSync(logFile, 'utf8');
const lines = content.split('\n');

for (const line of lines) {
  if (!line.trim()) continue;
  try {
    const obj = JSON.parse(line);
    if (obj.type === 'USER_INPUT' && obj.content) {
      const text = obj.content;
      const marker = 'Facility provided,District';
      const idx = text.indexOf(marker);
      if (idx !== -1) {
        const dataset = text.substring(idx);
        const outDir = path.join(process.cwd(), 'data');
        if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });
        const outPath = path.join(outDir, 'raw_medical_dataset.csv');
        fs.writeFileSync(outPath, dataset, 'utf8');
        console.log('Successfully saved raw dataset to:', outPath);
        console.log('File size (bytes):', fs.statSync(outPath).size);
        console.log('Total lines in raw dataset:', dataset.split('\n').length);
        break;
      }
    }
  } catch (e) {
    // skip malformed lines
  }
}
