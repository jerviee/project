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

const dedWordData = {
    'dedicate': { prefix: '', prefixMeaning: '', prefixMeaningEn: '', root: 'dic', rootMeaning: '说', rootMeaningEn: 'to say', rootOrigin: '拉丁语', rootOriginNote: '源自拉丁语dedicare', suffix: '-ate', suffixMeaning: '动词后缀', suffixMeaningEn: 'verb suffix' },
    'deduce': { prefix: 'de-', prefixMeaning: '向下', prefixMeaningEn: 'down', root: 'duc', rootMeaning: '引导', rootMeaningEn: 'to lead', rootOrigin: '拉丁语', rootOriginNote: 'de-(向下)+duc(引导)，推断', suffix: '-e', suffixMeaning: '动词后缀', suffixMeaningEn: 'verb suffix' },
    'deduct': { prefix: 'de-', prefixMeaning: '向下', prefixMeaningEn: 'down', root: 'duct', rootMeaning: '引导', rootMeaningEn: 'to lead', rootOrigin: '拉丁语', rootOriginNote: 'de-(向下)+duct(引导)，扣除', suffix: '', suffixMeaning: '', suffixMeaningEn: '' },
    'deed': { prefix: '', prefixMeaning: '', prefixMeaningEn: '', root: 'deed', rootMeaning: '行为', rootMeaningEn: 'deed', rootOrigin: '古英语', rootOriginNote: '源自古英语dæd', suffix: '', suffixMeaning: '', suffixMeaningEn: '' },
    'deem': { prefix: '', prefixMeaning: '', prefixMeaningEn: '', root: 'deem', rootMeaning: '认为', rootMeaningEn: 'to deem', rootOrigin: '古英语', rootOriginNote: '源自古英语deman', suffix: '', suffixMeaning: '', suffixMeaningEn: '' }
};

let updated = 0;
words.forEach(w => {
    const wordLower = w.word.toLowerCase();
    if (dedWordData[wordLower]) {
        const d = dedWordData[wordLower];
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

console.log('Updated ' + updated + ' DED words!');
