const fs = require('fs');
const content = fs.readFileSync('src/data/mockWords.ts', 'utf-8');
const match = content.match(/export const mockWords: IELTSWord\\[\\] = (\\[[\\s\\S]*?\\]);/);
const words = JSON.parse(match[1]);

words.forEach(w => {
  if (w.word === 'cab') {
    w.prefix = '';
    w.prefixMeaning = '';
    w.prefixMeaningEn = '';
    w.root = 'cab';
    w.rootMeaning = '马车；驾驶';
    w.rootMeaningEn = 'carriage; drive';
    w.rootOrigin = 'Latin';
    w.rootOriginNote = '源自拉丁语 carrus（四轮马车）';
    w.suffix = '';
    w.suffixMeaning = '';
    w.suffixMeaningEn = '';
  }
});

const output = 'export interface IELTSWord {\\n  id: string;\\n  word: string;\\n  meaning: string;\\n  level: string;\\n  prefix?: string;\\n  prefixMeaning?: string;\\n  prefixMeaningEn?: string;\\n  root: string;\\n  rootMeaning: string;\\n  rootMeaningEn: string;\\n  rootOrigin: string;\\n  rootOriginNote: string;\\n  suffix?: string;\\n  suffixMeaning?: string;\\n  suffixMeaningEn?: string;\\n  relatedWords: { word: string; meaning: string; level: string }[];\\n  phonetic: string;\\n  frequency: string;\\n  example: string;\\n}\\n\\nexport const mockWords: IELTSWord[] = ' + JSON.stringify(words, null, 2) + ';';

fs.writeFileSync('src/data/mockWords.ts', output);
console.log('Updated cab');
