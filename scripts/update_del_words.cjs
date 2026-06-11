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

const delWordData = {
    'delay': { prefix: '', prefixMeaning: '', prefixMeaningEn: '', root: 'delay', rootMeaning: '延迟', rootMeaningEn: 'delay', rootOrigin: '古法语', rootOriginNote: '源自古法语delaier', suffix: '', suffixMeaning: '', suffixMeaningEn: '' },
    'delegate': { prefix: '', prefixMeaning: '', prefixMeaningEn: '', root: 'leg', rootMeaning: '派遣', rootMeaningEn: 'to send', rootOrigin: '拉丁语', rootOriginNote: '源自拉丁语delegare', suffix: '-ate', suffixMeaning: '动词后缀', suffixMeaningEn: 'verb suffix' },
    'delegation': { prefix: '', prefixMeaning: '', prefixMeaningEn: '', root: 'leg', rootMeaning: '派遣', rootMeaningEn: 'to send', rootOrigin: '拉丁语', rootOriginNote: 'leg+-ation', suffix: '-ation', suffixMeaning: '名词后缀', suffixMeaningEn: 'noun suffix' },
    'delete': { prefix: 'de-', prefixMeaning: '去除', prefixMeaningEn: 'remove', root: 'let', rootMeaning: '发送', rootMeaningEn: 'to send', rootOrigin: '拉丁语', rootOriginNote: 'de-(去除)+let(发送)，删除', suffix: '', suffixMeaning: '', suffixMeaningEn: '' },
    'deliberate': { prefix: '', prefixMeaning: '', prefixMeaningEn: '', root: 'liber', rootMeaning: '自由', rootMeaningEn: 'free', rootOrigin: '拉丁语', rootOriginNote: '源自拉丁语deliberare', suffix: '-ate', suffixMeaning: '形容词后缀', suffixMeaningEn: 'adjective suffix' },
    'delicate': { prefix: '', prefixMeaning: '', prefixMeaningEn: '', root: 'delic', rootMeaning: '美好', rootMeaningEn: 'fine', rootOrigin: '拉丁语', rootOriginNote: '源自拉丁语delicatus', suffix: '-ate', suffixMeaning: '形容词后缀', suffixMeaningEn: 'adjective suffix' },
    'delight': { prefix: 'de-', prefixMeaning: '加强', prefixMeaningEn: 'intensive', root: 'light', rootMeaning: '明亮', rootMeaningEn: 'light', rootOrigin: '古英语', rootOriginNote: 'de-(加强)+light(明亮)，快乐', suffix: '', suffixMeaning: '', suffixMeaningEn: '' },
    'delighted': { prefix: '', prefixMeaning: '', prefixMeaningEn: '', root: 'delight', rootMeaning: '快乐', rootMeaningEn: 'delight', rootOrigin: '古英语', rootOriginNote: 'delight+-ed', suffix: '-ed', suffixMeaning: '形容词后缀', suffixMeaningEn: 'adjective suffix' },
    'deliver': { prefix: 'de-', prefixMeaning: '完全', prefixMeaningEn: 'completely', root: 'liver', rootMeaning: '释放', rootMeaningEn: 'to set free', rootOrigin: '古法语', rootOriginNote: '源自古法语delivrer', suffix: '', suffixMeaning: '', suffixMeaningEn: '' },
    'delivery': { prefix: '', prefixMeaning: '', prefixMeaningEn: '', root: 'deliver', rootMeaning: '传递', rootMeaningEn: 'to deliver', rootOrigin: '古法语', rootOriginNote: 'deliver+-y', suffix: '-y', suffixMeaning: '名词后缀', suffixMeaningEn: 'noun suffix' },
    'delta': { prefix: '', prefixMeaning: '', prefixMeaningEn: '', root: 'delta', rootMeaning: '三角洲', rootMeaningEn: 'delta', rootOrigin: '希腊语', rootOriginNote: '源自希腊语delta', suffix: '', suffixMeaning: '', suffixMeaningEn: '' }
};

let updated = 0;
words.forEach(w => {
    const wordLower = w.word.toLowerCase();
    if (delWordData[wordLower]) {
        const d = delWordData[wordLower];
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

console.log('Updated ' + updated + ' DEL words!');
