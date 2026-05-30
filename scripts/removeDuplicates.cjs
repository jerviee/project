const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../src/data/mockWords.ts');
let content = fs.readFileSync(filePath, 'utf-8');

const duplicates = ['accommodate', 'benefit', 'challenge', 'decline', 'demonstrate'];

for (const word of duplicates) {
  const regex = new RegExp(`,\\s*\\{\\s*"id":[^}]*"word":\\s*"${word}"[^}]*\\}`, 'g');
  content = content.replace(regex, '');
}

content = content.replace(/\[\s*,/g, '[');
content = content.replace(/,\s*\]/g, ']');

fs.writeFileSync(filePath, content);
console.log(`已删除重复单词: ${duplicates.join(', ')}`);