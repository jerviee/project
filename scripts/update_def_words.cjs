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

const defWordData = {
    'default': { prefix: '', prefixMeaning: '', prefixMeaningEn: '', root: 'defaul', rootMeaning: '失败', rootMeaningEn: 'to fail', rootOrigin: '古法语', rootOriginNote: '源自古法语defaut', suffix: '-t', suffixMeaning: '名词后缀', suffixMeaningEn: 'noun suffix' },
    'defeat': { prefix: 'de-', prefixMeaning: '向下', prefixMeaningEn: 'down', root: 'feat', rootMeaning: '做', rootMeaningEn: 'to do', rootOrigin: '古法语', rootOriginNote: 'de-(向下)+feat(做)，击败', suffix: '', suffixMeaning: '', suffixMeaningEn: '' },
    'defect': { prefix: 'de-', prefixMeaning: '离开', prefixMeaningEn: 'away', root: 'fect', rootMeaning: '做', rootMeaningEn: 'to do', rootOrigin: '拉丁语', rootOriginNote: 'de-(离开)+fect(做)，缺陷', suffix: '', suffixMeaning: '', suffixMeaningEn: '' },
    'defend': { prefix: 'de-', prefixMeaning: '完全', prefixMeaningEn: 'completely', root: 'fend', rootMeaning: '打击', rootMeaningEn: 'to strike', rootOrigin: '拉丁语', rootOriginNote: 'de-(完全)+fend(打击)，防御', suffix: '', suffixMeaning: '', suffixMeaningEn: '' },
    'defendant': { prefix: '', prefixMeaning: '', prefixMeaningEn: '', root: 'defend', rootMeaning: '防御', rootMeaningEn: 'to defend', rootOrigin: '拉丁语', rootOriginNote: 'defend+-ant', suffix: '-ant', suffixMeaning: '名词后缀', suffixMeaningEn: 'noun suffix' },
    'defense': { prefix: '', prefixMeaning: '', prefixMeaningEn: '', root: 'defend', rootMeaning: '防御', rootMeaningEn: 'to defend', rootOrigin: '拉丁语', rootOriginNote: 'defend+-se', suffix: '-se', suffixMeaning: '名词后缀', suffixMeaningEn: 'noun suffix' },
    'defensive': { prefix: '', prefixMeaning: '', prefixMeaningEn: '', root: 'defend', rootMeaning: '防御', rootMeaningEn: 'to defend', rootOrigin: '拉丁语', rootOriginNote: 'defend+-ive', suffix: '-ive', suffixMeaning: '形容词后缀', suffixMeaningEn: 'adjective suffix' },
    'deficit': { prefix: '', prefixMeaning: '', prefixMeaningEn: '', root: 'defic', rootMeaning: '缺少', rootMeaningEn: 'to lack', rootOrigin: '拉丁语', rootOriginNote: '源自拉丁语deficere', suffix: '-it', suffixMeaning: '名词后缀', suffixMeaningEn: 'noun suffix' },
    'define': { prefix: 'de-', prefixMeaning: '完全', prefixMeaningEn: 'completely', root: 'fin', rootMeaning: '结束、界限', rootMeaningEn: 'end, boundary', rootOrigin: '拉丁语', rootOriginNote: 'de-(完全)+fin(界限)，定义', suffix: '-e', suffixMeaning: '动词后缀', suffixMeaningEn: 'verb suffix' },
    'definite': { prefix: '', prefixMeaning: '', prefixMeaningEn: '', root: 'fin', rootMeaning: '界限', rootMeaningEn: 'boundary', rootOrigin: '拉丁语', rootOriginNote: 'fin+-ite', suffix: '-ite', suffixMeaning: '形容词后缀', suffixMeaningEn: 'adjective suffix' },
    'definitely': { prefix: '', prefixMeaning: '', prefixMeaningEn: '', root: 'fin', rootMeaning: '界限', rootMeaningEn: 'boundary', rootOrigin: '拉丁语', rootOriginNote: 'fin+-ite+-ly', suffix: '-ly', suffixMeaning: '副词后缀', suffixMeaningEn: 'adverb suffix' },
    'definition': { prefix: '', prefixMeaning: '', prefixMeaningEn: '', root: 'fin', rootMeaning: '界限', rootMeaningEn: 'boundary', rootOrigin: '拉丁语', rootOriginNote: 'fin+-ition', suffix: '-ition', suffixMeaning: '名词后缀', suffixMeaningEn: 'noun suffix' }
};

let updated = 0;
words.forEach(w => {
    const wordLower = w.word.toLowerCase();
    if (defWordData[wordLower]) {
        const d = defWordData[wordLower];
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

console.log('Updated ' + updated + ' DEF words!');
