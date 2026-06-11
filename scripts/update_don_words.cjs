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

const donWordData = {
    'donate': { prefix: '', prefixMeaning: '', prefixMeaningEn: '', root: 'don', rootMeaning: '给予', rootMeaningEn: 'to give', rootOrigin: '拉丁语', rootOriginNote: '源自拉丁语donare', suffix: '-ate', suffixMeaning: '动词后缀', suffixMeaningEn: 'verb suffix' },
    'donation': { prefix: '', prefixMeaning: '', prefixMeaningEn: '', root: 'don', rootMeaning: '给予', rootMeaningEn: 'to give', rootOrigin: '拉丁语', rootOriginNote: 'don+-ation', suffix: '-ation', suffixMeaning: '名词后缀', suffixMeaningEn: 'noun suffix' },
    'donkey': { prefix: '', prefixMeaning: '', prefixMeaningEn: '', root: 'donkey', rootMeaning: '驴', rootMeaningEn: 'donkey', rootOrigin: '古英语', rootOriginNote: '源自古英语dunkey', suffix: '', suffixMeaning: '', suffixMeaningEn: '' },
    'donor': { prefix: '', prefixMeaning: '', prefixMeaningEn: '', root: 'don', rootMeaning: '给予', rootMeaningEn: 'to give', rootOrigin: '拉丁语', rootOriginNote: 'don+-or', suffix: '-or', suffixMeaning: '名词后缀', suffixMeaningEn: 'noun suffix' }
};

let updated = 0;
words.forEach(w => {
    const wordLower = w.word.toLowerCase();
    if (donWordData[wordLower]) {
        const d = donWordData[wordLower];
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

console.log('Updated ' + updated + ' DON words!');
