const fs = require('fs');
const content = fs.readFileSync('src/data/mockWords.ts', 'utf-8');
const lines = content.split('\n');
let insideArray = false;
let jsonLines = [];
for (let line of lines) {
  if (line.includes('export const mockWords: IELTSWord[] = [')) {
    insideArray = true;
    jsonLines.push('[');
    continue;
  }
  if (insideArray) {
    if (line.trim() === '];') {
      jsonLines.push(']');
      break;
    }
    jsonLines.push(line);
  }
}
const jsonStr = jsonLines.join('\n');
const words = JSON.parse(jsonStr);
words.forEach(w => {
  if (w.word.toLowerCase() === 'difficult') {
    w.prefix = 'dif-';
    w.prefixMeaning = '不 分开 否定';
    w.prefixMeaningEn = 'not apart negate';
    w.root = 'fic';
    w.rootMeaning = '做';
    w.rootMeaningEn = 'make';
    w.rootOrigin = 'Latin';
    w.suffix = '';
    w.suffixMeaning = '';
    w.suffixMeaningEn = '';
    w.rootOriginNote = '源自拉丁语 facere（做）前缀：dif-（不 分开 否定）；后缀：无';
  }
});
const output = 'export interface IELTSWord {\n  id: string;\n  word: string;\n  meaning: string;\n  level: string;\n  prefix?: string;\n  prefixMeaning?: string;\n  prefixMeaningEn?: string;\n  root: string;\n  rootMeaning: string;\n  rootMeaningEn: string;\n  rootOrigin: string;\n  rootOriginNote: string;\n  suffix?: string;\n  suffixMeaning?: string;\n  suffixMeaningEn?: string;\n  relatedWords: { word: string; meaning: string; level: string }[];\n  phonetic: string;\n  frequency: string;\n  example: string;\n}\n\nexport const mockWords: IELTSWord[] = ' + JSON.stringify(words, null, 2) + ';';
fs.writeFileSync('src/data/mockWords.ts', output);
console.log('Updated difficult');
