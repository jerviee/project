const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../src/data/mockWords.ts');
const content = fs.readFileSync(filePath, 'utf-8');

const wordRegex = /"word":\s*"([^"]+)"/g;
const words = [];
let match;
while ((match = wordRegex.exec(content)) !== null) {
  words.push(match[1]);
}

const seen = new Set();
const duplicates = [];
const unique = [];

for (const word of words) {
  const lower = word.toLowerCase();
  if (seen.has(lower)) {
    duplicates.push(word);
  } else {
    seen.add(lower);
    unique.push(word);
  }
}

console.log(`总单词数: ${words.length}`);
console.log(`唯一单词数: ${unique.length}`);
console.log(`重复单词数: ${duplicates.length}`);
if (duplicates.length > 0) {
  console.log('重复单词:', duplicates.join(', '));
}