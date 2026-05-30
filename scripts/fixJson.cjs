const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, '../src/data/mockWords.ts');
let content = fs.readFileSync(filePath, 'utf-8');
const lines = content.split('\n');
const result = [];
let i = 0;
while (i < lines.length) {
  const line = lines[i];
  if (line.includes('"id": "word_')) {
    let objLines = [line];
    let j = i + 1;
    let braceCount = 0;
    let foundWord = false;
    let foundClosing = false;
    while (j < lines.length) {
      const l = lines[j];
      objLines.push(l);
      if (l.includes('"word":')) {
        foundWord = true;
      }
      if (l.includes('{')) braceCount++;
      if (l.includes('}')) {
        braceCount--;
        if (braceCount === 0) {
          foundClosing = true;
          break;
        }
      }
      j++;
    }
    if (foundWord && foundClosing) {
      result.push(...objLines);
    } else {
      console.log('删除损坏对象: ' + line.trim());
    }
    i = j + 1;
  } else {
    result.push(line);
    i++;
  }
}
fs.writeFileSync(filePath, result.join('\n'));
console.log('修复完成');