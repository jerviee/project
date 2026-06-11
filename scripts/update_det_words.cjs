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

const detWordData = {
    'detail': { prefix: '', prefixMeaning: '', prefixMeaningEn: '', root: 'detail', rootMeaning: '细节', rootMeaningEn: 'detail', rootOrigin: '法语', rootOriginNote: '源自法语detail', suffix: '', suffixMeaning: '', suffixMeaningEn: '' },
    'detailed': { prefix: '', prefixMeaning: '', prefixMeaningEn: '', root: 'detail', rootMeaning: '细节', rootMeaningEn: 'detail', rootOrigin: '法语', rootOriginNote: 'detail+-ed', suffix: '-ed', suffixMeaning: '形容词后缀', suffixMeaningEn: 'adjective suffix' },
    'detect': { prefix: 'de-', prefixMeaning: '去除', prefixMeaningEn: 'remove', root: 'tect', rootMeaning: '遮盖', rootMeaningEn: 'to cover', rootOrigin: '拉丁语', rootOriginNote: 'de-(去除)+tect(遮盖)，发现', suffix: '', suffixMeaning: '', suffixMeaningEn: '' },
    'detective': { prefix: '', prefixMeaning: '', prefixMeaningEn: '', root: 'detect', rootMeaning: '发现', rootMeaningEn: 'to detect', rootOrigin: '拉丁语', rootOriginNote: 'detect+-ive', suffix: '-ive', suffixMeaning: '名词后缀', suffixMeaningEn: 'noun suffix' },
    'detector': { prefix: '', prefixMeaning: '', prefixMeaningEn: '', root: 'detect', rootMeaning: '发现', rootMeaningEn: 'to detect', rootOrigin: '拉丁语', rootOriginNote: 'detect+-or', suffix: '-or', suffixMeaning: '名词后缀', suffixMeaningEn: 'noun suffix' },
    'determine': { prefix: 'de-', prefixMeaning: '加强', prefixMeaningEn: 'intensive', root: 'termin', rootMeaning: '界限', rootMeaningEn: 'boundary', rootOrigin: '拉丁语', rootOriginNote: 'de-(加强)+termin(界限)，决定', suffix: '-e', suffixMeaning: '动词后缀', suffixMeaningEn: 'verb suffix' }
};

let updated = 0;
words.forEach(w => {
    const wordLower = w.word.toLowerCase();
    if (detWordData[wordLower]) {
        const d = detWordData[wordLower];
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

console.log('Updated ' + updated + ' DET words!');
