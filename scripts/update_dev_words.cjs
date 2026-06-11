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

const devWordData = {
    'devastate': { prefix: 'de-', prefixMeaning: '去除', prefixMeaningEn: 'remove', root: 'vast', rootMeaning: '空的', rootMeaningEn: 'empty', rootOrigin: '拉丁语', rootOriginNote: 'de-(去除)+vast(空)，毁灭', suffix: '-ate', suffixMeaning: '动词后缀', suffixMeaningEn: 'verb suffix' },
    'devastation': { prefix: '', prefixMeaning: '', prefixMeaningEn: '', root: 'devast', rootMeaning: '毁灭', rootMeaningEn: 'to devastate', rootOrigin: '拉丁语', rootOriginNote: 'devast+-ation', suffix: '-ation', suffixMeaning: '名词后缀', suffixMeaningEn: 'noun suffix' },
    'develop': { prefix: 'de-', prefixMeaning: '展开', prefixMeaningEn: 'unfold', root: 'velop', rootMeaning: '包裹', rootMeaningEn: 'to wrap', rootOrigin: '古法语', rootOriginNote: 'de-(展开)+velop(包裹)，发展', suffix: '', suffixMeaning: '', suffixMeaningEn: '' },
    'development': { prefix: '', prefixMeaning: '', prefixMeaningEn: '', root: 'develop', rootMeaning: '发展', rootMeaningEn: 'to develop', rootOrigin: '古法语', rootOriginNote: 'develop+-ment', suffix: '-ment', suffixMeaning: '名词后缀', suffixMeaningEn: 'noun suffix' },
    'developer': { prefix: '', prefixMeaning: '', prefixMeaningEn: '', root: 'develop', rootMeaning: '发展', rootMeaningEn: 'to develop', rootOrigin: '古法语', rootOriginNote: 'develop+-er', suffix: '-er', suffixMeaning: '名词后缀', suffixMeaningEn: 'noun suffix' },
    'device': { prefix: '', prefixMeaning: '', prefixMeaningEn: '', root: 'device', rootMeaning: '装置', rootMeaningEn: 'device', rootOrigin: '古法语', rootOriginNote: '源自古法语devis', suffix: '', suffixMeaning: '', suffixMeaningEn: '' },
    'devil': { prefix: '', prefixMeaning: '', prefixMeaningEn: '', root: 'devil', rootMeaning: '魔鬼', rootMeaningEn: 'devil', rootOrigin: '古英语', rootOriginNote: '源自古英语deofol', suffix: '', suffixMeaning: '', suffixMeaningEn: '' },
    'devise': { prefix: '', prefixMeaning: '', prefixMeaningEn: '', root: 'devise', rootMeaning: '设计', rootMeaningEn: 'to devise', rootOrigin: '古法语', rootOriginNote: '源自古法语deviser', suffix: '', suffixMeaning: '', suffixMeaningEn: '' },
    'devote': { prefix: 'de-', prefixMeaning: '加强', prefixMeaningEn: 'intensive', root: 'vot', rootMeaning: '发誓', rootMeaningEn: 'to vow', rootOrigin: '拉丁语', rootOriginNote: 'de-(加强)+vot(发誓)，致力于', suffix: '-e', suffixMeaning: '动词后缀', suffixMeaningEn: 'verb suffix' },
    'devotion': { prefix: '', prefixMeaning: '', prefixMeaningEn: '', root: 'devot', rootMeaning: '致力于', rootMeaningEn: 'to devote', rootOrigin: '拉丁语', rootOriginNote: 'devot+-ion', suffix: '-ion', suffixMeaning: '名词后缀', suffixMeaningEn: 'noun suffix' },
    'devour': { prefix: 'de-', prefixMeaning: '加强', prefixMeaningEn: 'intensive', root: 'vour', rootMeaning: '吃', rootMeaningEn: 'to eat', rootOrigin: '古法语', rootOriginNote: 'de-(加强)+vour(吃)，吞噬', suffix: '', suffixMeaning: '', suffixMeaningEn: '' },
    'dew': { prefix: '', prefixMeaning: '', prefixMeaningEn: '', root: 'dew', rootMeaning: '露水', rootMeaningEn: 'dew', rootOrigin: '古英语', rootOriginNote: '源自古英语deaw', suffix: '', suffixMeaning: '', suffixMeaningEn: '' }
};

let updated = 0;
words.forEach(w => {
    const wordLower = w.word.toLowerCase();
    if (devWordData[wordLower]) {
        const d = devWordData[wordLower];
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

console.log('Updated ' + updated + ' DEV words!');
