const fs = require('fs');

const letter = process.argv[2] || 'A';

const data = fs.readFileSync('/home/fred/workspace/memoryworld-project/src/data/mockWords.ts', 'utf8');
const match = data.match(/export const mockWords: IELTSWord\[\] = \[([\s\S]*?)\];/);

if (match) {
  const words = JSON.parse('[' + match[1] + ']');
  
  const problems = words.filter(w => {
    if (!w.word.startsWith(letter)) return false;
    const clean = w.meaning.replace(/^(n\.|v\.|adj\.|adv\.)/gi, '').replace(/\（[^）]*\）/g, '').replace(/\([^)]*\)/g, '').trim();
    return !/[\u4e00-\u9fa5]/.test(clean);
  });
  
  console.log(letter + '开头的问题单词数:', problems.length);
  if (problems.length > 0) {
    console.log('问题单词列表:');
    problems.forEach(w => console.log(w.word + ': ' + w.meaning));
  }
}