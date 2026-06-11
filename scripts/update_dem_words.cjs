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

const demWordData = {
    'demand': { prefix: '', prefixMeaning: '', prefixMeaningEn: '', root: 'mand', rootMeaning: '命令', rootMeaningEn: 'to command', rootOrigin: '拉丁语', rootOriginNote: '源自拉丁语demandare', suffix: '', suffixMeaning: '', suffixMeaningEn: '' },
    'democracy': { prefix: 'demo-', prefixMeaning: '人民', prefixMeaningEn: 'people', root: 'crac', rootMeaning: '统治', rootMeaningEn: 'rule', rootOrigin: '希腊语', rootOriginNote: 'demo-(人民)+crac(统治)，民主', suffix: '-y', suffixMeaning: '名词后缀', suffixMeaningEn: 'noun suffix' },
    'democrat': { prefix: 'demo-', prefixMeaning: '人民', prefixMeaningEn: 'people', root: 'crat', rootMeaning: '统治者', rootMeaningEn: 'ruler', rootOrigin: '希腊语', rootOriginNote: 'demo-(人民)+crat(统治者)，民主党人', suffix: '', suffixMeaning: '', suffixMeaningEn: '' },
    'democratic': { prefix: '', prefixMeaning: '', prefixMeaningEn: '', root: 'democr', rootMeaning: '民主', rootMeaningEn: 'democracy', rootOrigin: '希腊语', rootOriginNote: 'democr+-atic', suffix: '-atic', suffixMeaning: '形容词后缀', suffixMeaningEn: 'adjective suffix' },
    'demolish': { prefix: 'de-', prefixMeaning: '去除', prefixMeaningEn: 'remove', root: 'mol', rootMeaning: '建造', rootMeaningEn: 'to build', rootOrigin: '拉丁语', rootOriginNote: 'de-(去除)+mol(建造)，拆除', suffix: '-ish', suffixMeaning: '动词后缀', suffixMeaningEn: 'verb suffix' },
    'demonstrate': { prefix: '', prefixMeaning: '', prefixMeaningEn: '', root: 'monstr', rootMeaning: '展示', rootMeaningEn: 'to show', rootOrigin: '拉丁语', rootOriginNote: '源自拉丁语demonstrare', suffix: '-ate', suffixMeaning: '动词后缀', suffixMeaningEn: 'verb suffix' },
    'demonstration': { prefix: '', prefixMeaning: '', prefixMeaningEn: '', root: 'monstr', rootMeaning: '展示', rootMeaningEn: 'to show', rootOrigin: '拉丁语', rootOriginNote: 'monstr+-ation', suffix: '-ation', suffixMeaning: '名词后缀', suffixMeaningEn: 'noun suffix' }
};

let updated = 0;
words.forEach(w => {
    const wordLower = w.word.toLowerCase();
    if (demWordData[wordLower]) {
        const d = demWordData[wordLower];
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

console.log('Updated ' + updated + ' DEM words!');
