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

const desWordData = {
    'describe': { prefix: '', prefixMeaning: '', prefixMeaningEn: '', root: 'scrib', rootMeaning: '写', rootMeaningEn: 'to write', rootOrigin: '拉丁语', rootOriginNote: '源自拉丁语describere', suffix: '-e', suffixMeaning: '动词后缀', suffixMeaningEn: 'verb suffix' },
    'description': { prefix: '', prefixMeaning: '', prefixMeaningEn: '', root: 'scrib', rootMeaning: '写', rootMeaningEn: 'to write', rootOrigin: '拉丁语', rootOriginNote: 'scrib+-tion', suffix: '-tion', suffixMeaning: '名词后缀', suffixMeaningEn: 'noun suffix' },
    'desert': { prefix: 'de-', prefixMeaning: '离开', prefixMeaningEn: 'away', root: 'sert', rootMeaning: '加入', rootMeaningEn: 'to join', rootOrigin: '拉丁语', rootOriginNote: 'de-(离开)+sert(加入)，沙漠', suffix: '', suffixMeaning: '', suffixMeaningEn: '' },
    'deserve': { prefix: 'de-', prefixMeaning: '完全', prefixMeaningEn: 'completely', root: 'serv', rootMeaning: '服务', rootMeaningEn: 'to serve', rootOrigin: '拉丁语', rootOriginNote: 'de-(完全)+serv(服务)，应得', suffix: '', suffixMeaning: '', suffixMeaningEn: '' },
    'design': { prefix: '', prefixMeaning: '', prefixMeaningEn: '', root: 'design', rootMeaning: '设计', rootMeaningEn: 'design', rootOrigin: '古法语', rootOriginNote: '源自古法语dessein', suffix: '', suffixMeaning: '', suffixMeaningEn: '' },
    'designer': { prefix: '', prefixMeaning: '', prefixMeaningEn: '', root: 'design', rootMeaning: '设计', rootMeaningEn: 'design', rootOrigin: '古法语', rootOriginNote: 'design+-er', suffix: '-er', suffixMeaning: '名词后缀', suffixMeaningEn: 'noun suffix' },
    'desire': { prefix: '', prefixMeaning: '', prefixMeaningEn: '', root: 'desir', rootMeaning: '渴望', rootMeaningEn: 'desire', rootOrigin: '古法语', rootOriginNote: '源自古法语desir', suffix: '-e', suffixMeaning: '名词后缀', suffixMeaningEn: 'noun suffix' },
    'desk': { prefix: '', prefixMeaning: '', prefixMeaningEn: '', root: 'desk', rootMeaning: '书桌', rootMeaningEn: 'desk', rootOrigin: '古英语', rootOriginNote: '源自古英语disc', suffix: '', suffixMeaning: '', suffixMeaningEn: '' },
    'desktop': { prefix: '', prefixMeaning: '', prefixMeaningEn: '', root: 'desk', rootMeaning: '书桌', rootMeaningEn: 'desk', rootOrigin: '古英语', rootOriginNote: 'desk+top', suffix: '-top', suffixMeaning: '名词后缀', suffixMeaningEn: 'noun suffix' },
    'despair': { prefix: 'de-', prefixMeaning: '去除', prefixMeaningEn: 'remove', root: 'spair', rootMeaning: '希望', rootMeaningEn: 'hope', rootOrigin: '古法语', rootOriginNote: 'de-(去除)+spair(希望)，绝望', suffix: '', suffixMeaning: '', suffixMeaningEn: '' },
    'despite': { prefix: '', prefixMeaning: '', prefixMeaningEn: '', root: 'despite', rootMeaning: '尽管', rootMeaningEn: 'despite', rootOrigin: '古法语', rootOriginNote: '源自古法语despit', suffix: '', suffixMeaning: '', suffixMeaningEn: '' },
    'despondent': { prefix: '', prefixMeaning: '', prefixMeaningEn: '', root: 'despond', rootMeaning: '失望', rootMeaningEn: 'to despond', rootOrigin: '拉丁语', rootOriginNote: 'despond+-ent', suffix: '-ent', suffixMeaning: '形容词后缀', suffixMeaningEn: 'adjective suffix' },
    'dessert': { prefix: '', prefixMeaning: '', prefixMeaningEn: '', root: 'dessert', rootMeaning: '甜点', rootMeaningEn: 'dessert', rootOrigin: '法语', rootOriginNote: '源自法语dessert', suffix: '', suffixMeaning: '', suffixMeaningEn: '' },
    'destination': { prefix: '', prefixMeaning: '', prefixMeaningEn: '', root: 'destin', rootMeaning: '命运', rootMeaningEn: 'destiny', rootOrigin: '拉丁语', rootOriginNote: 'destin+-ation', suffix: '-ation', suffixMeaning: '名词后缀', suffixMeaningEn: 'noun suffix' },
    'destroy': { prefix: 'de-', prefixMeaning: '去除', prefixMeaningEn: 'remove', root: 'stroy', rootMeaning: '建造', rootMeaningEn: 'to build', rootOrigin: '古法语', rootOriginNote: 'de-(去除)+stroy(建造)，破坏', suffix: '', suffixMeaning: '', suffixMeaningEn: '' },
    'destruction': { prefix: '', prefixMeaning: '', prefixMeaningEn: '', root: 'struct', rootMeaning: '建造', rootMeaningEn: 'to build', rootOrigin: '拉丁语', rootOriginNote: 'de-(去除)+struct(建造)，破坏', suffix: '-tion', suffixMeaning: '名词后缀', suffixMeaningEn: 'noun suffix' },
    'destructive': { prefix: '', prefixMeaning: '', prefixMeaningEn: '', root: 'struct', rootMeaning: '建造', rootMeaningEn: 'to build', rootOrigin: '拉丁语', rootOriginNote: 'de-(去除)+struct(建造)，破坏的', suffix: '-ive', suffixMeaning: '形容词后缀', suffixMeaningEn: 'adjective suffix' }
};

let updated = 0;
words.forEach(w => {
    const wordLower = w.word.toLowerCase();
    if (desWordData[wordLower]) {
        const d = desWordData[wordLower];
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

console.log('Updated ' + updated + ' DES words!');
