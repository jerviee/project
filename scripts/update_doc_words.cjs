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

const docWordData = {
    'doc': { prefix: '', prefixMeaning: '', prefixMeaningEn: '', root: 'doc', rootMeaning: '文档', rootMeaningEn: 'document', rootOrigin: '拉丁语', rootOriginNote: '源自拉丁语documentum的缩写', suffix: '', suffixMeaning: '', suffixMeaningEn: '' },
    'doctor': { prefix: '', prefixMeaning: '', prefixMeaningEn: '', root: 'doctor', rootMeaning: '医生', rootMeaningEn: 'doctor', rootOrigin: '拉丁语', rootOriginNote: '源自拉丁语doctor', suffix: '', suffixMeaning: '', suffixMeaningEn: '' },
    'document': { prefix: '', prefixMeaning: '', prefixMeaningEn: '', root: 'doc', rootMeaning: '教导', rootMeaningEn: 'to teach', rootOrigin: '拉丁语', rootOriginNote: '源自拉丁语documentum', suffix: '-ment', suffixMeaning: '名词后缀', suffixMeaningEn: 'noun suffix' },
    'documentary': { prefix: '', prefixMeaning: '', prefixMeaningEn: '', root: 'document', rootMeaning: '文档', rootMeaningEn: 'document', rootOrigin: '拉丁语', rootOriginNote: 'document+-ary', suffix: '-ary', suffixMeaning: '形容词后缀', suffixMeaningEn: 'adjective suffix' }
};

let updated = 0;
words.forEach(w => {
    const wordLower = w.word.toLowerCase();
    if (docWordData[wordLower]) {
        const d = docWordData[wordLower];
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

console.log('Updated ' + updated + ' DOC words!');
