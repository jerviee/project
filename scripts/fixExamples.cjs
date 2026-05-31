const fs = require('fs');

const betterTemplates = [
  { en: 'The concept of {word} is widely discussed in academic circles.', cn: '{word}的概念在学术圈中被广泛讨论。' },
  { en: 'Understanding {word} is essential for effective communication.', cn: '理解{word}对于有效沟通是必要的。' },
  { en: 'The study of {word} has made significant progress in recent years.', cn: '近年来，{word}的研究取得了重大进展。' },
  { en: 'Many factors contribute to the development of {word} in society.', cn: '许多因素促成了{word}在社会中的发展。' },
  { en: 'The importance of {word} cannot be overstated in modern life.', cn: '在现代生活中，{word}的重要性怎么强调都不为过。' },
  { en: 'Researchers are constantly exploring new aspects of {word}.', cn: '研究人员不断探索{word}的新方面。' },
  { en: 'The application of {word} has revolutionized various industries.', cn: '{word}的应用革新了各个行业。' },
  { en: 'Public awareness of {word} has increased significantly.', cn: '公众对{word}的认识显著提高。' },
  { en: 'The theory of {word} provides a framework for understanding this phenomenon.', cn: '{word}的理论为理解这一现象提供了框架。' },
  { en: 'Practical skills related to {word} are highly valued in the workplace.', cn: '与{word}相关的实用技能在工作场所受到高度重视。' }
];

function getWordMeaningForExample(meaning) {
  if (!meaning) return '';
  const parts = meaning.split(' ');
  if (parts.length >= 2) {
    // 取第一个中文释义
    const typeAndWord = parts.slice(0, 2).join(' ');
    const firstMeaning = meaning.split('；')[0];
    if (firstMeaning) {
      const wordPart = firstMeaning.replace(/^[a-z.]+ /i, '');
      return wordPart;
    }
  }
  return '';
}

const data = fs.readFileSync('/home/fred/workspace/memoryworld-project/src/data/mockWords.ts', 'utf8');
const match = data.match(/export const mockWords: IELTSWord\[\] = \[([\s\S]*?)\];/);

if (match) {
  const words = JSON.parse('[' + match[1] + ']');
  console.log('Processing ' + words.length + ' words...');
  
  let exampleUpdated = 0;
  words.forEach(w => {
    const template = betterTemplates[Math.floor(Math.random() * betterTemplates.length)];
    const meaningWord = getWordMeaningForExample(w.meaning);
    
    w.example = template.en.replace('{word}', w.word) + '\n' + 
               template.cn.replace('{word}', meaningWord || w.word);
    exampleUpdated++;
  });
  
  console.log('Updated ' + exampleUpdated + ' examples');
  
  const output = `export interface IELTSWord {
  id: string;
  word: string;
  meaning: string;
  level: string;
  root: string;
  rootMeaning: string;
  rootMeaningEn: string;
  rootOrigin: string;
  rootOriginNote: string;
  relatedWords: { word: string; meaning: string; level: string }[];
  phonetic: string;
  frequency: string;
  example: string;
}

export const mockWords: IELTSWord[] = ${JSON.stringify(words, null, 2)};`;
  
  fs.writeFileSync('/home/fred/workspace/memoryworld-project/src/data/mockWords.ts', output);
  console.log('Done!');
}
