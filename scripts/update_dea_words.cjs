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

const deaWordData = {
    'deal': { prefix: '', prefixMeaning: '', prefixMeaningEn: '', root: 'deal', rootMeaning: '交易', rootMeaningEn: 'to deal', rootOrigin: '古英语', rootOriginNote: '源自古英语dælan', suffix: '', suffixMeaning: '', suffixMeaningEn: '' },
    'dealer': { prefix: '', prefixMeaning: '', prefixMeaningEn: '', root: 'deal', rootMeaning: '交易', rootMeaningEn: 'to deal', rootOrigin: '古英语', rootOriginNote: 'deal+-er', suffix: '-er', suffixMeaning: '名词后缀', suffixMeaningEn: 'noun suffix' },
    'dear': { prefix: '', prefixMeaning: '', prefixMeaningEn: '', root: 'dear', rootMeaning: '亲爱的', rootMeaningEn: 'dear', rootOrigin: '古英语', rootOriginNote: '源自古英语deore', suffix: '', suffixMeaning: '', suffixMeaningEn: '' },
    'death': { prefix: '', prefixMeaning: '', prefixMeaningEn: '', root: 'death', rootMeaning: '死亡', rootMeaningEn: 'death', rootOrigin: '古英语', rootOriginNote: '源自古英语deaþ', suffix: '', suffixMeaning: '', suffixMeaningEn: '' }
};

let updated = 0;
words.forEach(w => {
    const wordLower = w.word.toLowerCase();
    if (deaWordData[wordLower]) {
        const d = deaWordData[wordLower];
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

console.log('Updated ' + updated + ' DEA words!');
