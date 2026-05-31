const fs = require('fs');

const data = fs.readFileSync('/home/fred/workspace/memoryworld-project/src/data/mockWords.ts', 'utf8');
const match = data.match(/export const mockWords: IELTSWord\[\] = \[([\s\S]*?)\];/);

if (match) {
  const words = JSON.parse('[' + match[1] + ']');
  
  const suffixMap = {
    'tion': 'n. 行为；过程；状态',
    'sion': 'n. 行为；状态',
    'ment': 'n. 行为；结果',
    'ness': 'n. 性质；状态',
    'ity': 'n. 性质；状态',
    'ance': 'n. 行为；状态',
    'ence': 'n. 行为；状态',
    'able': 'adj. 可...的',
    'ible': 'adj. 可...的',
    'ful': 'adj. 充满...的',
    'less': 'adj. 无...的',
    'ous': 'adj. 充满...的',
    'ive': 'adj. ...的',
    'al': 'adj. ...的',
    'ly': 'adv. ...地',
    'er': 'n. ...的人',
    'or': 'n. ...的人',
    'ist': 'n. ...主义者',
    'ize': 'v. 使...化',
    'fy': 'v. 使...化'
  };
  
  let fixed = 0;
  
  words.forEach(w => {
    if (w.meaning.includes('（词根）') || w.meaning.includes('的）') || w.meaning.includes('（...')) {
      let newMeaning = w.meaning;
      
      for (const [suffix, typeMeaning] of Object.entries(suffixMap)) {
        if (w.word.toLowerCase().endsWith(suffix)) {
          const base = w.word.slice(0, -suffix.length);
          newMeaning = typeMeaning + base.charAt(0).toUpperCase() + base.slice(1);
          break;
        }
      }
      
      if (newMeaning === w.meaning && w.meaning.includes('（')) {
        newMeaning = w.meaning.replace(/\（[^）]*\）/g, '');
        if (!newMeaning || newMeaning.length < 3) {
          newMeaning = 'n. ' + w.word;
        }
      }
      
      w.meaning = newMeaning;
      fixed++;
    }
  });
  
  console.log('修复了', fixed, '个单词');
  
  const output = 'export interface IELTSWord {\n' +
    '  id: string;\n' +
    '  word: string;\n' +
    '  meaning: string;\n' +
    '  level: string;\n' +
    '  root: string;\n' +
    '  rootMeaning: string;\n' +
    '  rootMeaningEn: string;\n' +
    '  rootOrigin: string;\n' +
    '  rootOriginNote: string;\n' +
    '  relatedWords: { word: string; meaning: string; level: string }[];\n' +
    '  phonetic: string;\n' +
    '  frequency: string;\n' +
    '  example: string;\n' +
    '}\n\n' +
    'export const mockWords: IELTSWord[] = ' + JSON.stringify(words, null, 2) + ';';
  
  fs.writeFileSync('/home/fred/workspace/memoryworld-project/src/data/mockWords.ts', output);
  console.log('保存成功!');
}
