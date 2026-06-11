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

const depWordData = {
    'depart': { prefix: 'de-', prefixMeaning: '离开', prefixMeaningEn: 'away', root: 'part', rootMeaning: '部分', rootMeaningEn: 'part', rootOrigin: '拉丁语', rootOriginNote: 'de-(离开)+part(部分)，离开', suffix: '', suffixMeaning: '', suffixMeaningEn: '' },
    'department': { prefix: '', prefixMeaning: '', prefixMeaningEn: '', root: 'depart', rootMeaning: '离开', rootMeaningEn: 'to depart', rootOrigin: '拉丁语', rootOriginNote: 'depart+-ment', suffix: '-ment', suffixMeaning: '名词后缀', suffixMeaningEn: 'noun suffix' },
    'departure': { prefix: '', prefixMeaning: '', prefixMeaningEn: '', root: 'depart', rootMeaning: '离开', rootMeaningEn: 'to depart', rootOrigin: '拉丁语', rootOriginNote: 'depart+-ure', suffix: '-ure', suffixMeaning: '名词后缀', suffixMeaningEn: 'noun suffix' },
    'depend': { prefix: 'de-', prefixMeaning: '向下', prefixMeaningEn: 'down', root: 'pend', rootMeaning: '悬挂', rootMeaningEn: 'to hang', rootOrigin: '拉丁语', rootOriginNote: 'de-(向下)+pend(悬挂)，依赖', suffix: '', suffixMeaning: '', suffixMeaningEn: '' },
    'dependent': { prefix: '', prefixMeaning: '', prefixMeaningEn: '', root: 'depend', rootMeaning: '依赖', rootMeaningEn: 'to depend', rootOrigin: '拉丁语', rootOriginNote: 'depend+-ent', suffix: '-ent', suffixMeaning: '形容词后缀', suffixMeaningEn: 'adjective suffix' },
    'depict': { prefix: 'de-', prefixMeaning: '完全', prefixMeaningEn: 'completely', root: 'pict', rootMeaning: '描绘', rootMeaningEn: 'to paint', rootOrigin: '拉丁语', rootOriginNote: 'de-(完全)+pict(描绘)，描绘', suffix: '', suffixMeaning: '', suffixMeaningEn: '' },
    'deploy': { prefix: 'de-', prefixMeaning: '展开', prefixMeaningEn: 'unfold', root: 'ploy', rootMeaning: '折叠', rootMeaningEn: 'to fold', rootOrigin: '古法语', rootOriginNote: 'de-(展开)+ploy(折叠)，部署', suffix: '', suffixMeaning: '', suffixMeaningEn: '' }
};

let updated = 0;
words.forEach(w => {
    const wordLower = w.word.toLowerCase();
    if (depWordData[wordLower]) {
        const d = depWordData[wordLower];
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

console.log('Updated ' + updated + ' DEP words!');
