const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, '../src/data/mockWords.ts');
let lines = fs.readFileSync(filePath, 'utf-8').split('\n');
const dupWords = ['negotiate', 'obtain', 'opportunity', 'technology', 'undertake', 'verify', 'yield', 'zone', 'abstract', 'accelerate', 'access', 'accident', 'accompany', 'accomplish', 'account', 'accumulate'];
let removed = 0;
const result = [];
let skipNext = false;
for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  let isDup = false;
  for (const word of dupWords) {
    if (line.includes('"word": "' + word + '"')) {
      isDup = true;
      break;
    }
  }
  if (isDup && !skipNext) {
    skipNext = true;
    removed++;
  } else if (isDup && skipNext) {
    skipNext = false;
  } else {
    result.push(line);
  }
}
fs.writeFileSync(filePath, result.join('\n'));
console.log('已删除 ' + removed + ' 行');