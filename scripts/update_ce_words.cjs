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

const ceWordData = {
    'ceiling': {
        prefix: '', prefixMeaning: '', prefixMeaningEn: '',
        root: 'ceiling', rootMeaning: '天花板', rootMeaningEn: 'ceiling',
        rootOrigin: '古法语', rootOriginNote: '源自古法语celer，意为天花板',
        suffix: '', suffixMeaning: '', suffixMeaningEn: ''
    },
    'celebrate': {
        prefix: 'celebr', prefixMeaning: '赞美', prefixMeaningEn: 'praise',
        root: 'ate', rootMeaning: '动词后缀', rootMeaningEn: 'verb suffix',
        rootOrigin: '拉丁语', rootOriginNote: '源自拉丁语celebrare，celebr(赞美)+-ate(动词后缀)，庆祝',
        suffix: '-ate', suffixMeaning: '动词后缀', suffixMeaningEn: 'verb suffix'
    },
    'celebration': {
        prefix: 'celebrate', prefixMeaning: '庆祝', prefixMeaningEn: 'celebrate',
        root: 'ion', rootMeaning: '名词后缀', rootMeaningEn: 'noun suffix',
        rootOrigin: '拉丁语', rootOriginNote: 'celebrate(庆祝)+-ion(名词后缀)，庆祝活动',
        suffix: '-ion', suffixMeaning: '名词后缀', suffixMeaningEn: 'noun suffix'
    },
    'cell': {
        prefix: '', prefixMeaning: '', prefixMeaningEn: '',
        root: 'cell', rootMeaning: '细胞、小室', rootMeaningEn: 'cell, small room',
        rootOrigin: '拉丁语', rootOriginNote: '源自拉丁语cella，意为小室',
        suffix: '', suffixMeaning: '', suffixMeaningEn: ''
    },
    'cellar': {
        prefix: 'cell', prefixMeaning: '小室', prefixMeaningEn: 'small room',
        root: 'ar', rootMeaning: '名词后缀', rootMeaningEn: 'noun suffix',
        rootOrigin: '拉丁语', rootOriginNote: 'cell(小室)+-ar(名词后缀)，地下室',
        suffix: '-ar', suffixMeaning: '名词后缀', suffixMeaningEn: 'noun suffix'
    },
    'cement': {
        prefix: '', prefixMeaning: '', prefixMeaningEn: '',
        root: 'cement', rootMeaning: '水泥', rootMeaningEn: 'cement',
        rootOrigin: '拉丁语', rootOriginNote: '源自拉丁语caementum，意为水泥',
        suffix: '', suffixMeaning: '', suffixMeaningEn: ''
    },
    'cemetery': {
        prefix: 'cemet', prefixMeaning: '睡觉', prefixMeaningEn: 'sleep',
        root: 'ery', rootMeaning: '名词后缀', rootMeaningEn: 'noun suffix',
        rootOrigin: '希腊语', rootOriginNote: '源自希腊语koimeterion，cemet(睡觉)+-ery(地点)，墓地',
        suffix: '-ery', suffixMeaning: '名词后缀，表示地点', suffixMeaningEn: 'noun suffix, place'
    },
    'censor': {
        prefix: '', prefixMeaning: '', prefixMeaningEn: '',
        root: 'censor', rootMeaning: '审查员', rootMeaningEn: 'censor',
        rootOrigin: '拉丁语', rootOriginNote: '源自拉丁语censor，意为审查员',
        suffix: '-or', suffixMeaning: '名词后缀，表示人', suffixMeaningEn: 'noun suffix, person'
    },
    'cent': {
        prefix: '', prefixMeaning: '', prefixMeaningEn: '',
        root: 'cent', rootMeaning: '百、分', rootMeaningEn: 'hundred, cent',
        rootOrigin: '拉丁语', rootOriginNote: '源自拉丁语centum，意为百',
        suffix: '', suffixMeaning: '', suffixMeaningEn: ''
    },
    'center': {
        prefix: '', prefixMeaning: '', prefixMeaningEn: '',
        root: 'center', rootMeaning: '中心', rootMeaningEn: 'center',
        rootOrigin: '希腊语', rootOriginNote: '源自希腊语kentron，意为中心',
        suffix: '-er', suffixMeaning: '名词后缀', suffixMeaningEn: 'noun suffix'
    },
    'central': {
        prefix: 'center', prefixMeaning: '中心', prefixMeaningEn: 'center',
        root: 'al', rootMeaning: '形容词后缀', rootMeaningEn: 'adj suffix',
        rootOrigin: '希腊语', rootOriginNote: 'center(中心)+-al(形容词后缀)，中心的',
        suffix: '-al', suffixMeaning: '形容词后缀', suffixMeaningEn: 'adj suffix'
    },
    'century': {
        prefix: 'cent', prefixMeaning: '百', prefixMeaningEn: 'hundred',
        root: 'ury', rootMeaning: '名词后缀', rootMeaningEn: 'noun suffix',
        rootOrigin: '拉丁语', rootOriginNote: 'cent(百)+-ury(名词后缀)，世纪',
        suffix: '-ury', suffixMeaning: '名词后缀', suffixMeaningEn: 'noun suffix'
    },
    'certain': {
        prefix: 'cert', prefixMeaning: '确定', prefixMeaningEn: 'certain',
        root: 'ain', rootMeaning: '形容词后缀', rootMeaningEn: 'adj suffix',
        rootOrigin: '拉丁语', rootOriginNote: '源自拉丁语certus，cert(确定)+-ain(形容词后缀)，确定的',
        suffix: '-ain', suffixMeaning: '形容词后缀', suffixMeaningEn: 'adj suffix'
    },
    'certainly': {
        prefix: 'certain', prefixMeaning: '确定', prefixMeaningEn: 'certain',
        root: 'ly', rootMeaning: '副词后缀', rootMeaningEn: 'adv suffix',
        rootOrigin: '拉丁语', rootOriginNote: 'certain(确定)+-ly(副词后缀)，当然',
        suffix: '-ly', suffixMeaning: '副词后缀', suffixMeaningEn: 'adv suffix'
    },
    'certainty': {
        prefix: 'certain', prefixMeaning: '确定', prefixMeaningEn: 'certain',
        root: 'ty', rootMeaning: '名词后缀', rootMeaningEn: 'noun suffix',
        rootOrigin: '拉丁语', rootOriginNote: 'certain(确定)+-ty(名词后缀)，确定性',
        suffix: '-ty', suffixMeaning: '名词后缀', suffixMeaningEn: 'noun suffix'
    },
    'certificate': {
        prefix: 'cert', prefixMeaning: '确定', prefixMeaningEn: 'certain',
        root: 'ificate', rootMeaning: '动词后缀', rootMeaningEn: 'verb suffix',
        rootOrigin: '拉丁语', rootOriginNote: 'cert(确定)+-ificate(动词后缀)，证书',
        suffix: '-ate', suffixMeaning: '名词后缀', suffixMeaningEn: 'noun suffix'
    }
};

let updated = 0;
words.forEach(w => {
    const wordLower = w.word.toLowerCase();
    if (ceWordData[wordLower]) {
        const d = ceWordData[wordLower];
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

const output = 'export interface IELTSWord {\n  id: string;\n  word: string;\n  meaning: string;\n  level: string;\n  prefix?: string;\n  prefixMeaning?: string;\n  prefixMeaningEn?: string;\n  root: string;\n  rootMeaning: string;\n  rootMeaningEn: string;\n  rootOrigin: string;\n  rootOriginNote: string;\n  suffix?: string;\n  suffixMeaning?: string;\n  suffixMeaningEn?: string;\n  relatedWords: { word: string; meaning: string; level: string }[];\n  phonetic: string;\n  frequency: string;\n  example: string;\n}\n\nexport const mockWords: IELTSWord[] = ' + JSON.stringify(words, null, 2) + ';';

fs.writeFileSync('/home/fred/workspace/memoryworld-project/src/data/mockWords.ts', output);

console.log('Updated ' + updated + ' CE words!');
