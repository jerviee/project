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

const durWordData = {
    'during': { prefix: '', prefixMeaning: '', prefixMeaningEn: '', root: 'dur', rootMeaning: '持续', rootMeaningEn: 'to last', rootOrigin: '拉丁语', rootOriginNote: '源自拉丁语durare', suffix: '-ing', suffixMeaning: '介词后缀', suffixMeaningEn: 'preposition suffix' },
    'duration': { prefix: '', prefixMeaning: '', prefixMeaningEn: '', root: 'dur', rootMeaning: '持续', rootMeaningEn: 'to last', rootOrigin: '拉丁语', rootOriginNote: 'dur+-ation', suffix: '-ation', suffixMeaning: '名词后缀', suffixMeaningEn: 'noun suffix' },
    'durable': { prefix: '', prefixMeaning: '', prefixMeaningEn: '', root: 'dur', rootMeaning: '持续', rootMeaningEn: 'to last', rootOrigin: '拉丁语', rootOriginNote: 'dur+-able', suffix: '-able', suffixMeaning: '形容词后缀', suffixMeaningEn: 'adjective suffix' },
    'endure': { prefix: 'en-', prefixMeaning: '使进入状态', prefixMeaningEn: 'to put into', root: 'dur', rootMeaning: '持续', rootMeaningEn: 'to last', rootOrigin: '拉丁语', rootOriginNote: 'en-(使)+dur(持续)，忍耐', suffix: '-e', suffixMeaning: '动词后缀', suffixMeaningEn: 'verb suffix' },
    'endurance': { prefix: 'en-', prefixMeaning: '使进入状态', prefixMeaningEn: 'to put into', root: 'dur', rootMeaning: '持续', rootMeaningEn: 'to last', rootOrigin: '拉丁语', rootOriginNote: 'en-dur+-ance', suffix: '-ance', suffixMeaning: '名词后缀', suffixMeaningEn: 'noun suffix' },
    'durability': { prefix: '', prefixMeaning: '', prefixMeaningEn: '', root: 'dur', rootMeaning: '持续', rootMeaningEn: 'to last', rootOrigin: '拉丁语', rootOriginNote: 'dur+-ability', suffix: '-ability', suffixMeaning: '名词后缀', suffixMeaningEn: 'noun suffix' },
    'urgently': { prefix: '', prefixMeaning: '', prefixMeaningEn: '', root: 'urg', rootMeaning: '紧急', rootMeaningEn: 'urgent', rootOrigin: '拉丁语', rootOriginNote: 'urgent+-ly', suffix: '-ly', suffixMeaning: '副词后缀', suffixMeaningEn: 'adverb suffix' },
    'urgent': { prefix: '', prefixMeaning: '', prefixMeaningEn: '', root: 'urg', rootMeaning: '紧急', rootMeaningEn: 'urgent', rootOrigin: '拉丁语', rootOriginNote: '源自拉丁语urgere', suffix: '-ent', suffixMeaning: '形容词后缀', suffixMeaningEn: 'adjective suffix' },
    'curtain': { prefix: '', prefixMeaning: '', prefixMeaningEn: '', root: 'curtain', rootMeaning: '窗帘', rootMeaningEn: 'curtain', rootOrigin: '古法语', rootOriginNote: '源自古法语cortine', suffix: '', suffixMeaning: '', suffixMeaningEn: '' }
};

let updated = 0;
words.forEach(w => {
    const wordLower = w.word.toLowerCase();
    if (durWordData[wordLower]) {
        const d = durWordData[wordLower];
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

console.log('Updated ' + updated + ' DUR words!');
