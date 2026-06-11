const fs = require('fs');

const content = fs.readFileSync('/home/fred/workspace/memoryworld-project/src/data/mockWords.ts', 'utf-8');
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

const denWordData = {
    'denial': { prefix: '', prefixMeaning: '', prefixMeaningEn: '', root: 'deny', rootMeaning: '否认', rootMeaningEn: 'to deny', rootOrigin: '拉丁语', rootOriginNote: 'deny+-al', suffix: '-al', suffixMeaning: '名词后缀', suffixMeaningEn: 'noun suffix' },
    'denote': { prefix: '', prefixMeaning: '', prefixMeaningEn: '', root: 'not', rootMeaning: '标记', rootMeaningEn: 'to mark', rootOrigin: '拉丁语', rootOriginNote: '源自拉丁语denotare', suffix: '-e', suffixMeaning: '动词后缀', suffixMeaningEn: 'verb suffix' },
    'denounce': { prefix: 'de-', prefixMeaning: '完全', prefixMeaningEn: 'completely', root: 'nounce', rootMeaning: '说', rootMeaningEn: 'to say', rootOrigin: '拉丁语', rootOriginNote: 'de-(完全)+nounce(说)，谴责', suffix: '', suffixMeaning: '', suffixMeaningEn: '' },
    'dense': { prefix: '', prefixMeaning: '', prefixMeaningEn: '', root: 'dense', rootMeaning: '密集的', rootMeaningEn: 'dense', rootOrigin: '拉丁语', rootOriginNote: '源自拉丁语densus', suffix: '', suffixMeaning: '', suffixMeaningEn: '' },
    'dentistry': { prefix: '', prefixMeaning: '', prefixMeaningEn: '', root: 'dent', rootMeaning: '牙齿', rootMeaningEn: 'tooth', rootOrigin: '拉丁语', rootOriginNote: 'dent+-istry', suffix: '-istry', suffixMeaning: '名词后缀', suffixMeaningEn: 'noun suffix' },
    'deny': { prefix: '', prefixMeaning: '', prefixMeaningEn: '', root: 'deny', rootMeaning: '否认', rootMeaningEn: 'to deny', rootOrigin: '拉丁语', rootOriginNote: '源自拉丁语denegare', suffix: '', suffixMeaning: '', suffixMeaningEn: '' }
};

let updated = 0;
words.forEach(w => {
    const wordLower = w.word.toLowerCase();
    if (denWordData[wordLower]) {
        const d = denWordData[wordLower];
        w.prefix = d.prefix;
        w.prefixMeaning = d.prefixMeaning;
        w.prefixMeaningEn = d.prefixMeaningEn;
        w.root = d.root;
        w.rootMeaning = d.rootMeaning;
        w.rootMeaningEn = d.rootMeaningEn;
        w.rootOrigin = d.rootOrigin;
        w.rootOriginNote = d.rootOriginNote;
        w.suffix = d.suffix;
        w.suffixMeaning = d.suffixMeaning;
        w.suffixMeaningEn = d.suffixMeaningEn;
        updated++;
    }
});

const output = 'export interface IELTSWord {\\n  id: string;\\n  word: string;\\n  meaning: string;\\n  level: string;\\n  prefix?: string;\\n  prefixMeaning?: string;\\n  prefixMeaningEn?: string;\\n  root: string;\\n  rootMeaning: string;\\n  rootMeaningEn: string;\\n  rootOrigin: string;\\n  rootOriginNote: string;\\n  suffix?: string;\\n  suffixMeaning?: string;\\n  suffixMeaningEn?: string;\\n  relatedWords: { word: string; meaning: string; level: string }[];\\n  phonetic: string;\\n  frequency: string;\\n  example: string;\\n}\\n\\nexport const mockWords: IELTSWord[] = ' + JSON.stringify(words, null, 2) + ';';

fs.writeFileSync('/home/fred/workspace/memoryworld-project/src/data/mockWords.ts', output);

console.log('Updated ' + updated + ' DEN words!');
