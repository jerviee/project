
const fs = require('fs');
const path = require('path');

// 读取文件
const content = fs.readFileSync(path.join(__dirname, 'src/data/mockWords.ts'), 'utf8');

// 简单解析单词数量
const wordMatches = content.match(/"word":/g);
const count = wordMatches ? wordMatches.length : 0;

console.log(`单词总数: ${count}`);
