const fs = require('fs');

const content = fs.readFileSync('./src/data/writing.ts', 'utf8');

const lines = content.split('\n');
const newLines = [];

for (let line of lines) {
  line = line.replace(/"(\w+)":/g, '$1:');
  line = line.replace(/:\s*"([^"]+)"/g, ': "$1"');
  line = line.replace(/:\s*'([^']+)'/g, ': "$1"');
  
  if (line.trim().endsWith(',') || line.trim().endsWith('{') || line.trim().endsWith('}')) {
    newLines.push(line);
  } else if (line.trim().match(/^\s*[a-zA-Z_]+\s*:/)) {
    newLines.push(line);
  } else {
    newLines.push(line);
  }
}

fs.writeFileSync('./src/data/writing.ts', newLines.join('\n'), 'utf8');
console.log('Converted JSON to TypeScript format successfully!');
