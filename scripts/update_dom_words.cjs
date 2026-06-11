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

const domWordData = {
    'domain': { prefix: '', prefixMeaning: '', prefixMeaningEn: '', root: 'domain', rootMeaning: '领域', rootMeaningEn: 'domain', rootOrigin: '拉丁语', rootOriginNote: '源自拉丁语dominus', suffix: '', suffixMeaning: '', suffixMeaningEn: '' },
    'domestic': { prefix: '', prefixMeaning: '', prefixMeaningEn: '', root: 'dom', rootMeaning: '家', rootMeaningEn: 'home', rootOrigin: '拉丁语', rootOriginNote: '源自拉丁语domesticus', suffix: '-tic', suffixMeaning: '形容词后缀', suffixMeaningEn: 'adjective suffix' },
    'dominant': { prefix: '', prefixMeaning: '', prefixMeaningEn: '', root: 'domin', rootMeaning: '统治', rootMeaningEn: 'to rule', rootOrigin: '拉丁语', rootOriginNote: '源自拉丁语dominans', suffix: '-ant', suffixMeaning: '形容词后缀', suffixMeaningEn: 'adjective suffix' },
    'dominate': { prefix: '', prefixMeaning: '', prefixMeaningEn: '', root: 'domin', rootMeaning: '统治', rootMeaningEn: 'to rule', rootOrigin: '拉丁语', rootOriginNote: '源自拉丁语dominare', suffix: '-ate', suffixMeaning: '动词后缀', suffixMeaningEn: 'verb suffix' }
};

let updated = 0;
words.forEach(w => {
    const wordLower = w.word.toLowerCase();
    if (domWordData[wordLower]) {
        const d = domWordData[wordLower];
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

console.log('Updated ' + updated + ' DOM words!');
