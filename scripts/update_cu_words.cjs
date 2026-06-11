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

const cuWordData = {
    'cube': { prefix: '', prefixMeaning: '', prefixMeaningEn: '', root: 'cube', rootMeaning: '立方体', rootMeaningEn: 'cube', rootOrigin: '拉丁语', rootOriginNote: '源自拉丁语cubus', suffix: '', suffixMeaning: '', suffixMeaningEn: '' },
    'cultivate': { prefix: '', prefixMeaning: '', prefixMeaningEn: '', root: 'cult', rootMeaning: '耕作', rootMeaningEn: 'to till', rootOrigin: '拉丁语', rootOriginNote: '源自拉丁语cultivare', suffix: '-ate', suffixMeaning: '动词后缀', suffixMeaningEn: 'verb suffix' },
    'cultural': { prefix: '', prefixMeaning: '', prefixMeaningEn: '', root: 'cult', rootMeaning: '文化', rootMeaningEn: 'culture', rootOrigin: '拉丁语', rootOriginNote: 'cult+-ural', suffix: '-ural', suffixMeaning: '形容词后缀', suffixMeaningEn: 'adjective suffix' },
    'culture': { prefix: '', prefixMeaning: '', prefixMeaningEn: '', root: 'cult', rootMeaning: '文化', rootMeaningEn: 'culture', rootOrigin: '拉丁语', rootOriginNote: '源自拉丁语cultura', suffix: '-ure', suffixMeaning: '名词后缀', suffixMeaningEn: 'noun suffix' },
    'cup': { prefix: '', prefixMeaning: '', prefixMeaningEn: '', root: 'cup', rootMeaning: '杯子', rootMeaningEn: 'cup', rootOrigin: '古英语', rootOriginNote: '源自古英语cuppa', suffix: '', suffixMeaning: '', suffixMeaningEn: '' },
    'cupboard': { prefix: '', prefixMeaning: '', prefixMeaningEn: '', root: 'cup', rootMeaning: '杯子', rootMeaningEn: 'cup', rootOrigin: '古英语', rootOriginNote: 'cup+board', suffix: '-board', suffixMeaning: '名词后缀', suffixMeaningEn: 'noun suffix' },
    'cure': { prefix: '', prefixMeaning: '', prefixMeaningEn: '', root: 'cur', rootMeaning: '治愈', rootMeaningEn: 'to heal', rootOrigin: '拉丁语', rootOriginNote: '源自拉丁语curare', suffix: '-e', suffixMeaning: '名词后缀', suffixMeaningEn: 'noun suffix' },
    'curiosity': { prefix: '', prefixMeaning: '', prefixMeaningEn: '', root: 'cur', rootMeaning: '关心', rootMeaningEn: 'to care', rootOrigin: '拉丁语', rootOriginNote: 'cur+-iosity', suffix: '-iosity', suffixMeaning: '名词后缀', suffixMeaningEn: 'noun suffix' },
    'curious': { prefix: '', prefixMeaning: '', prefixMeaningEn: '', root: 'cur', rootMeaning: '关心', rootMeaningEn: 'to care', rootOrigin: '拉丁语', rootOriginNote: 'cur+-ious', suffix: '-ious', suffixMeaning: '形容词后缀', suffixMeaningEn: 'adjective suffix' },
    'curl': { prefix: '', prefixMeaning: '', prefixMeaningEn: '', root: 'curl', rootMeaning: '卷曲', rootMeaningEn: 'to curl', rootOrigin: '中古英语', rootOriginNote: '源自中古英语curlen', suffix: '', suffixMeaning: '', suffixMeaningEn: '' },
    'current': { prefix: '', prefixMeaning: '', prefixMeaningEn: '', root: 'curr', rootMeaning: '跑', rootMeaningEn: 'to run', rootOrigin: '拉丁语', rootOriginNote: '源自拉丁语currere', suffix: '-ent', suffixMeaning: '形容词后缀', suffixMeaningEn: 'adjective suffix' },
    'currently': { prefix: '', prefixMeaning: '', prefixMeaningEn: '', root: 'curr', rootMeaning: '跑', rootMeaningEn: 'to run', rootOrigin: '拉丁语', rootOriginNote: 'curr+-ent+-ly', suffix: '-ly', suffixMeaning: '副词后缀', suffixMeaningEn: 'adverb suffix' },
    'cursor': { prefix: '', prefixMeaning: '', prefixMeaningEn: '', root: 'curr', rootMeaning: '跑', rootMeaningEn: 'to run', rootOrigin: '拉丁语', rootOriginNote: 'curr+-or', suffix: '-or', suffixMeaning: '名词后缀', suffixMeaningEn: 'noun suffix' },
    'curtain': { prefix: '', prefixMeaning: '', prefixMeaningEn: '', root: 'curtain', rootMeaning: '窗帘', rootMeaningEn: 'curtain', rootOrigin: '古法语', rootOriginNote: '源自古法语cortine', suffix: '', suffixMeaning: '', suffixMeaningEn: '' },
    'curve': { prefix: '', prefixMeaning: '', prefixMeaningEn: '', root: 'curv', rootMeaning: '弯曲', rootMeaningEn: 'to curve', rootOrigin: '拉丁语', rootOriginNote: '源自拉丁语curvare', suffix: '-e', suffixMeaning: '名词后缀', suffixMeaningEn: 'noun suffix' },
    'cushion': { prefix: '', prefixMeaning: '', prefixMeaningEn: '', root: 'cush', rootMeaning: '垫子', rootMeaningEn: 'cushion', rootOrigin: '古法语', rootOriginNote: '源自古法语coissin', suffix: '-ion', suffixMeaning: '名词后缀', suffixMeaningEn: 'noun suffix' },
    'custody': { prefix: '', prefixMeaning: '', prefixMeaningEn: '', root: 'cust', rootMeaning: '保管', rootMeaningEn: 'to keep', rootOrigin: '拉丁语', rootOriginNote: '源自拉丁语custodia', suffix: '-ody', suffixMeaning: '名词后缀', suffixMeaningEn: 'noun suffix' },
    'custom': { prefix: '', prefixMeaning: '', prefixMeaningEn: '', root: 'custom', rootMeaning: '习俗', rootMeaningEn: 'custom', rootOrigin: '古法语', rootOriginNote: '源自古法语costume', suffix: '', suffixMeaning: '', suffixMeaningEn: '' },
    'customary': { prefix: '', prefixMeaning: '', prefixMeaningEn: '', root: 'custom', rootMeaning: '习俗', rootMeaningEn: 'custom', rootOrigin: '古法语', rootOriginNote: 'custom+-ary', suffix: '-ary', suffixMeaning: '形容词后缀', suffixMeaningEn: 'adjective suffix' },
    'customer': { prefix: '', prefixMeaning: '', prefixMeaningEn: '', root: 'custom', rootMeaning: '习俗', rootMeaningEn: 'custom', rootOrigin: '古法语', rootOriginNote: 'custom+-er', suffix: '-er', suffixMeaning: '名词后缀', suffixMeaningEn: 'noun suffix' },
    'customs': { prefix: '', prefixMeaning: '', prefixMeaningEn: '', root: 'custom', rootMeaning: '习俗', rootMeaningEn: 'custom', rootOrigin: '古法语', rootOriginNote: 'custom+-s', suffix: '-s', suffixMeaning: '复数后缀', suffixMeaningEn: 'plural suffix' }
};

let updated = 0;
words.forEach(w => {
    const wordLower = w.word.toLowerCase();
    if (cuWordData[wordLower]) {
        const d = cuWordData[wordLower];
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

console.log('Updated ' + updated + ' CU words!');
