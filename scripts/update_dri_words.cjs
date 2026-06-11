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

const driWordData = {
    'drift': { prefix: '', prefixMeaning: '', prefixMeaningEn: '', root: 'drift', rootMeaning: '漂流', rootMeaningEn: 'to drift', rootOrigin: '古英语', rootOriginNote: '源自古英语drift', suffix: '', suffixMeaning: '', suffixMeaningEn: '' },
    'drill': { prefix: '', prefixMeaning: '', prefixMeaningEn: '', root: 'drill', rootMeaning: '钻', rootMeaningEn: 'to drill', rootOrigin: '古英语', rootOriginNote: '源自古英语drilian', suffix: '', suffixMeaning: '', suffixMeaningEn: '' },
    'drink': { prefix: '', prefixMeaning: '', prefixMeaningEn: '', root: 'drink', rootMeaning: '喝', rootMeaningEn: 'to drink', rootOrigin: '古英语', rootOriginNote: '源自古英语drincan', suffix: '', suffixMeaning: '', suffixMeaningEn: '' },
    'drip': { prefix: '', prefixMeaning: '', prefixMeaningEn: '', root: 'drip', rootMeaning: '滴', rootMeaningEn: 'to drip', rootOrigin: '古英语', rootOriginNote: '源自古英语drippan', suffix: '', suffixMeaning: '', suffixMeaningEn: '' },
    'drive': { prefix: '', prefixMeaning: '', prefixMeaningEn: '', root: 'drive', rootMeaning: '驾驶', rootMeaningEn: 'to drive', rootOrigin: '古英语', rootOriginNote: '源自古英语drifan', suffix: '', suffixMeaning: '', suffixMeaningEn: '' },
    'driver': { prefix: '', prefixMeaning: '', prefixMeaningEn: '', root: 'drive', rootMeaning: '驾驶', rootMeaningEn: 'to drive', rootOrigin: '古英语', rootOriginNote: 'drive+-er', suffix: '-er', suffixMeaning: '名词后缀', suffixMeaningEn: 'noun suffix' }
};

let updated = 0;
words.forEach(w => {
    const wordLower = w.word.toLowerCase();
    if (driWordData[wordLower]) {
        const d = driWordData[wordLower];
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

console.log('Updated ' + updated + ' DRI words!');
