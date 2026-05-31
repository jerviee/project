const fs = require('fs');
const data = fs.readFileSync('/home/fred/workspace/memoryworld-project/src/data/mockWords.ts', 'utf8');
const match = data.match(/export const mockWords: IELTSWord\[\] = \[([\s\S]*?)\];/);

if (match) {
  const words = JSON.parse('[' + match[1] + ']');

  console.log('单词总数:', words.length);

  // 按字母统计
  const byLetter = {};
  words.forEach(w => {
    const firstLetter = w.word.charAt(0).toUpperCase();
    if (byLetter[firstLetter] === undefined) {
      byLetter[firstLetter] = 0;
    }
    byLetter[firstLetter]++;
  });

  console.log('\n按字母统计:');
  Object.keys(byLetter).sort().forEach(letter => {
    console.log(letter + ': ' + byLetter[letter]);
  });

  // 检查B到Z开头的单词释义
  let issues = [];
  words.forEach(w => {
    const firstLetter = w.word.charAt(0).toUpperCase();
    if (firstLetter >= 'B' && firstLetter <= 'Z') {
      if (w.meaning.includes('词根含义') || w.meaning.length < 5) {
        issues.push({ word: w.word, meaning: w.meaning });
      }
    }
  });

  console.log('\nB-Z开头有问题的单词数:', issues.length);
  if (issues.length > 0) {
    console.log('示例:', issues.slice(0, 20));
  }

  // 检查所有"词根含义"的数量
  let rootMeaningCount = 0;
  words.forEach(w => {
    if (w.meaning.includes('词根含义')) {
      rootMeaningCount++;
    }
  });
  console.log('\n包含"词根含义"的单词数:', rootMeaningCount);

  // 样本检查 - 从B到Z各抽查一个
  console.log('\n=== B-Z 样本检查 ===');
  const samples = ['baby', 'back', 'ball', 'bank', 'bar', 'barrier', 'base', 'basic', 'basis', 'beach'];
  samples.forEach(word => {
    const found = words.find(w => w.word === word);
    if (found) {
      console.log(found.word + ': ' + found.meaning);
    }
  });
}