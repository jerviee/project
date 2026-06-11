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

const debWordData = {
    'debate': { prefix: 'de-', prefixMeaning: '向下', prefixMeaningEn: 'down', root: 'bat', rootMeaning: '击打', rootMeaningEn: 'to beat', rootOrigin: '拉丁语', rootOriginNote: 'de-(向下)+bat(击打)，辩论', suffix: '-e', suffixMeaning: '动词后缀', suffixMeaningEn: 'verb suffix' },
    'debris': { prefix: '', prefixMeaning: '', prefixMeaningEn: '', root: 'debris', rootMeaning: '碎片', rootMeaningEn: 'debris', rootOrigin: '法语', rootOriginNote: '源自法语debris', suffix: '', suffixMeaning: '', suffixMeaningEn: '' },
    'debt': { prefix: '', prefixMeaning: '', prefixMeaningEn: '', root: 'debt', rootMeaning: '债务', rootMeaningEn: 'debt', rootOrigin: '古法语', rootOriginNote: '源自古法语dette', suffix: '', suffixMeaning: '', suffixMeaningEn: '' },
    'debug': { prefix: 'de-', prefixMeaning: '去除', prefixMeaningEn: 'remove', root: 'bug', rootMeaning: '虫子', rootMeaningEn: 'bug', rootOrigin: '英语', rootOriginNote: 'de-(去除)+bug(虫子)，调试', suffix: '', suffixMeaning: '', suffixMeaningEn: '' },
    'debut': { prefix: '', prefixMeaning: '', prefixMeaningEn: '', root: 'debut', rootMeaning: '首次亮相', rootMeaningEn: 'debut', rootOrigin: '法语', rootOriginNote: '源自法语debut', suffix: '', suffixMeaning: '', suffixMeaningEn: '' }
};

let updated = 0;
words.forEach(w => {
    const wordLower = w.word.toLowerCase();
    if (debWordData[wordLower]) {
        const d = debWordData[wordLower];
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

console.log('Updated ' + updated + ' DEB words!');
