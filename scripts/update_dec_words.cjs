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

const decWordData = {
    'decade': { prefix: '', prefixMeaning: '', prefixMeaningEn: '', root: 'dec', rootMeaning: '十', rootMeaningEn: 'ten', rootOrigin: '拉丁语', rootOriginNote: '源自拉丁语decas', suffix: '-ade', suffixMeaning: '名词后缀', suffixMeaningEn: 'noun suffix' },
    'decay': { prefix: 'de-', prefixMeaning: '向下', prefixMeaningEn: 'down', root: 'cay', rootMeaning: '落下', rootMeaningEn: 'to fall', rootOrigin: '拉丁语', rootOriginNote: 'de-(向下)+cay(落下)，衰退', suffix: '', suffixMeaning: '', suffixMeaningEn: '' },
    'deceit': { prefix: '', prefixMeaning: '', prefixMeaningEn: '', root: 'deceit', rootMeaning: '欺骗', rootMeaningEn: 'deceit', rootOrigin: '古法语', rootOriginNote: '源自古法语deceite', suffix: '', suffixMeaning: '', suffixMeaningEn: '' },
    'deceive': { prefix: '', prefixMeaning: '', prefixMeaningEn: '', root: 'deceiv', rootMeaning: '欺骗', rootMeaningEn: 'to deceive', rootOrigin: '古法语', rootOriginNote: '源自古法语deceivre', suffix: '-e', suffixMeaning: '动词后缀', suffixMeaningEn: 'verb suffix' },
    'december': { prefix: '', prefixMeaning: '', prefixMeaningEn: '', root: 'decem', rootMeaning: '十', rootMeaningEn: 'ten', rootOrigin: '拉丁语', rootOriginNote: '源自拉丁语decem，十月', suffix: '-ber', suffixMeaning: '月份后缀', suffixMeaningEn: 'month suffix' },
    'decent': { prefix: '', prefixMeaning: '', prefixMeaningEn: '', root: 'decent', rootMeaning: '体面的', rootMeaningEn: 'decent', rootOrigin: '拉丁语', rootOriginNote: '源自拉丁语decens', suffix: '', suffixMeaning: '', suffixMeaningEn: '' },
    'decide': { prefix: '', prefixMeaning: '', prefixMeaningEn: '', root: 'cid', rootMeaning: '切、决定', rootMeaningEn: 'to cut, decide', rootOrigin: '拉丁语', rootOriginNote: '源自拉丁语decidere', suffix: '-e', suffixMeaning: '动词后缀', suffixMeaningEn: 'verb suffix' },
    'decision': { prefix: '', prefixMeaning: '', prefixMeaningEn: '', root: 'cid', rootMeaning: '决定', rootMeaningEn: 'to decide', rootOrigin: '拉丁语', rootOriginNote: 'cid+-sion', suffix: '-sion', suffixMeaning: '名词后缀', suffixMeaningEn: 'noun suffix' },
    'deck': { prefix: '', prefixMeaning: '', prefixMeaningEn: '', root: 'deck', rootMeaning: '甲板', rootMeaningEn: 'deck', rootOrigin: '中古英语', rootOriginNote: '源自中古英语dekke', suffix: '', suffixMeaning: '', suffixMeaningEn: '' },
    'declare': { prefix: 'de-', prefixMeaning: '完全', prefixMeaningEn: 'completely', root: 'clar', rootMeaning: '清楚', rootMeaningEn: 'clear', rootOrigin: '拉丁语', rootOriginNote: 'de-(完全)+clar(清楚)，宣布', suffix: '-e', suffixMeaning: '动词后缀', suffixMeaningEn: 'verb suffix' },
    'decline': { prefix: 'de-', prefixMeaning: '向下', prefixMeaningEn: 'down', root: 'clin', rootMeaning: '倾斜', rootMeaningEn: 'to lean', rootOrigin: '拉丁语', rootOriginNote: 'de-(向下)+clin(倾斜)，下降', suffix: '-e', suffixMeaning: '动词后缀', suffixMeaningEn: 'verb suffix' },
    'decode': { prefix: 'de-', prefixMeaning: '去除', prefixMeaningEn: 'remove', root: 'cod', rootMeaning: '编码', rootMeaningEn: 'code', rootOrigin: '拉丁语', rootOriginNote: 'de-(去除)+cod(编码)，解码', suffix: '-e', suffixMeaning: '动词后缀', suffixMeaningEn: 'verb suffix' },
    'decorate': { prefix: '', prefixMeaning: '', prefixMeaningEn: '', root: 'decor', rootMeaning: '装饰', rootMeaningEn: 'to decorate', rootOrigin: '拉丁语', rootOriginNote: '源自拉丁语decorare', suffix: '-ate', suffixMeaning: '动词后缀', suffixMeaningEn: 'verb suffix' },
    'decoration': { prefix: '', prefixMeaning: '', prefixMeaningEn: '', root: 'decor', rootMeaning: '装饰', rootMeaningEn: 'decorate', rootOrigin: '拉丁语', rootOriginNote: 'decor+-ation', suffix: '-ation', suffixMeaning: '名词后缀', suffixMeaningEn: 'noun suffix' },
    'decrease': { prefix: 'de-', prefixMeaning: '向下', prefixMeaningEn: 'down', root: 'creas', rootMeaning: '增长', rootMeaningEn: 'to grow', rootOrigin: '拉丁语', rootOriginNote: 'de-(向下)+creas(增长)，减少', suffix: '-e', suffixMeaning: '动词后缀', suffixMeaningEn: 'verb suffix' }
};

let updated = 0;
words.forEach(w => {
    const wordLower = w.word.toLowerCase();
    if (decWordData[wordLower]) {
        const d = decWordData[wordLower];
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

console.log('Updated ' + updated + ' DEC words!');
