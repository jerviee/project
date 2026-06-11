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

const draWordData = {
    'draft': { prefix: '', prefixMeaning: '', prefixMeaningEn: '', root: 'draft', rootMeaning: '草稿', rootMeaningEn: 'draft', rootOrigin: '古英语', rootOriginNote: '源自古英语dræft', suffix: '', suffixMeaning: '', suffixMeaningEn: '' },
    'drag': { prefix: '', prefixMeaning: '', prefixMeaningEn: '', root: 'drag', rootMeaning: '拖', rootMeaningEn: 'to drag', rootOrigin: '古英语', rootOriginNote: '源自古英语dragan', suffix: '', suffixMeaning: '', suffixMeaningEn: '' },
    'dragon': { prefix: '', prefixMeaning: '', prefixMeaningEn: '', root: 'dragon', rootMeaning: '龙', rootMeaningEn: 'dragon', rootOrigin: '希腊语', rootOriginNote: '源自希腊语drakon', suffix: '', suffixMeaning: '', suffixMeaningEn: '' },
    'drain': { prefix: '', prefixMeaning: '', prefixMeaningEn: '', root: 'drain', rootMeaning: '排水', rootMeaningEn: 'to drain', rootOrigin: '古法语', rootOriginNote: '源自古法语dreigner', suffix: '', suffixMeaning: '', suffixMeaningEn: '' },
    'drainage': { prefix: '', prefixMeaning: '', prefixMeaningEn: '', root: 'drain', rootMeaning: '排水', rootMeaningEn: 'to drain', rootOrigin: '古法语', rootOriginNote: 'drain+-age', suffix: '-age', suffixMeaning: '名词后缀', suffixMeaningEn: 'noun suffix' },
    'drama': { prefix: '', prefixMeaning: '', prefixMeaningEn: '', root: 'drama', rootMeaning: '戏剧', rootMeaningEn: 'drama', rootOrigin: '希腊语', rootOriginNote: '源自希腊语drama', suffix: '', suffixMeaning: '', suffixMeaningEn: '' },
    'dramatic': { prefix: '', prefixMeaning: '', prefixMeaningEn: '', root: 'drama', rootMeaning: '戏剧', rootMeaningEn: 'drama', rootOrigin: '希腊语', rootOriginNote: 'drama+-tic', suffix: '-tic', suffixMeaning: '形容词后缀', suffixMeaningEn: 'adjective suffix' },
    'drank': { prefix: '', prefixMeaning: '', prefixMeaningEn: '', root: 'drink', rootMeaning: '喝', rootMeaningEn: 'to drink', rootOrigin: '古英语', rootOriginNote: 'drink的过去式', suffix: '', suffixMeaning: '', suffixMeaningEn: '' },
    'drape': { prefix: '', prefixMeaning: '', prefixMeaningEn: '', root: 'drape', rootMeaning: '悬挂', rootMeaningEn: 'to drape', rootOrigin: '古法语', rootOriginNote: '源自古法语draper', suffix: '', suffixMeaning: '', suffixMeaningEn: '' },
    'drastically': { prefix: '', prefixMeaning: '', prefixMeaningEn: '', root: 'drastic', rootMeaning: '激烈的', rootMeaningEn: 'drastic', rootOrigin: '希腊语', rootOriginNote: 'drastic+-ally', suffix: '-ally', suffixMeaning: '副词后缀', suffixMeaningEn: 'adverb suffix' },
    'draw': { prefix: '', prefixMeaning: '', prefixMeaningEn: '', root: 'draw', rootMeaning: '画', rootMeaningEn: 'to draw', rootOrigin: '古英语', rootOriginNote: '源自古英语dragan', suffix: '', suffixMeaning: '', suffixMeaningEn: '' },
    'drawer': { prefix: '', prefixMeaning: '', prefixMeaningEn: '', root: 'draw', rootMeaning: '画', rootMeaningEn: 'to draw', rootOrigin: '古英语', rootOriginNote: 'draw+-er', suffix: '-er', suffixMeaning: '名词后缀', suffixMeaningEn: 'noun suffix' },
    'drawing': { prefix: '', prefixMeaning: '', prefixMeaningEn: '', root: 'draw', rootMeaning: '画', rootMeaningEn: 'to draw', rootOrigin: '古英语', rootOriginNote: 'draw+-ing', suffix: '-ing', suffixMeaning: '名词后缀', suffixMeaningEn: 'noun suffix' },
    'drawl': { prefix: '', prefixMeaning: '', prefixMeaningEn: '', root: 'drawl', rootMeaning: '拉长音', rootMeaningEn: 'to drawl', rootOrigin: '古英语', rootOriginNote: '源自draw', suffix: '', suffixMeaning: '', suffixMeaningEn: '' },
    'drawn': { prefix: '', prefixMeaning: '', prefixMeaningEn: '', root: 'draw', rootMeaning: '画', rootMeaningEn: 'to draw', rootOrigin: '古英语', rootOriginNote: 'draw的过去分词', suffix: '', suffixMeaning: '', suffixMeaningEn: '' }
};

let updated = 0;
words.forEach(w => {
    const wordLower = w.word.toLowerCase();
    if (draWordData[wordLower]) {
        const d = draWordData[wordLower];
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

console.log('Updated ' + updated + ' DRA words!');
