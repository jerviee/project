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

const bruWordData = {
    'brucellosis': {
        prefix: 'Brucell', prefixMeaning: '布鲁氏菌', prefixMeaningEn: 'Brucella',
        root: 'osis', rootMeaning: '疾病后缀', rootMeaningEn: 'disease suffix',
        rootOrigin: '拉丁语', rootOriginNote: '源自David Bruce发现细菌，+osis(疾病)，布鲁氏菌病',
        suffix: '-osis', suffixMeaning: '名词后缀，表示疾病', suffixMeaningEn: 'noun suffix, disease'
    },
    'bruise': {
        prefix: '', prefixMeaning: '', prefixMeaningEn: '',
        root: 'bruise', rootMeaning: '挫伤', rootMeaningEn: 'bruise',
        rootOrigin: '古英语', rootOriginNote: '源自古英语brysan，意为挤压、挫伤',
        suffix: '', suffixMeaning: '', suffixMeaningEn: ''
    },
    'bruiser': {
        prefix: 'bruise', prefixMeaning: '挫伤', prefixMeaningEn: 'bruise',
        root: 'er', rootMeaning: '人', rootMeaningEn: 'person',
        rootOrigin: '古英语', rootOriginNote: 'bruise(挫伤)+-er(人)，粗壮的人',
        suffix: '-er', suffixMeaning: '名词后缀，表示人', suffixMeaningEn: 'noun suffix, person'
    },
    'brumble': {
        prefix: '', prefixMeaning: '', prefixMeaningEn: '',
        root: 'brumble', rootMeaning: '嘟囔', rootMeaningEn: 'grumble',
        rootOrigin: '英语方言', rootOriginNote: '源自方言，意为嘟囔',
        suffix: '', suffixMeaning: '', suffixMeaningEn: ''
    },
    'brume': {
        prefix: '', prefixMeaning: '', prefixMeaningEn: '',
        root: 'brume', rootMeaning: '雾', rootMeaningEn: 'mist, fog',
        rootOrigin: '法语', rootOriginNote: '源自法语brume，意为雾',
        suffix: '', suffixMeaning: '', suffixMeaningEn: ''
    },
    'brunch': {
        prefix: 'br', prefixMeaning: '早餐', prefixMeaningEn: 'breakfast',
        root: 'unch', rootMeaning: '午餐', rootMeaningEn: 'lunch',
        rootOrigin: '英语', rootOriginNote: 'breakfast(早餐)+lunch(午餐)的合成词，早午餐',
        suffix: '', suffixMeaning: '', suffixMeaningEn: ''
    },
    'brunet': {
        prefix: 'brun', prefixMeaning: '棕色', prefixMeaningEn: 'brown',
        root: 'et', rootMeaning: '名词后缀', rootMeaningEn: 'noun suffix',
        rootOrigin: '法语', rootOriginNote: 'brun(棕色)+-et(小)，棕发的人',
        suffix: '-et', suffixMeaning: '名词后缀，表示小', suffixMeaningEn: 'noun suffix, small'
    },
    'brunt': {
        prefix: '', prefixMeaning: '', prefixMeaningEn: '',
        root: 'brunt', rootMeaning: '冲击', rootMeaningEn: 'brunt, impact',
        rootOrigin: '古英语', rootOriginNote: '源自古英语，意为冲击、猛击',
        suffix: '', suffixMeaning: '', suffixMeaningEn: ''
    },
    'brush': {
        prefix: '', prefixMeaning: '', prefixMeaningEn: '',
        root: 'brush', rootMeaning: '刷子', rootMeaningEn: 'brush',
        rootOrigin: '古法语', rootOriginNote: '源自古法语broisse，意为刷子',
        suffix: '', suffixMeaning: '', suffixMeaningEn: ''
    },
    'brushwood': {
        prefix: 'brush', prefixMeaning: '灌木', prefixMeaningEn: 'brush',
        root: 'wood', rootMeaning: '木材', rootMeaningEn: 'wood',
        rootOrigin: '古法语+古英语', rootOriginNote: 'brush(灌木)+wood(木材)，灌木丛',
        suffix: '', suffixMeaning: '', suffixMeaningEn: ''
    },
    'brusk': {
        prefix: '', prefixMeaning: '', prefixMeaningEn: '',
        root: 'brusk', rootMeaning: '粗鲁', rootMeaningEn: 'brusque',
        rootOrigin: '法语', rootOriginNote: '源自法语brusque，意为粗鲁',
        suffix: '', suffixMeaning: '', suffixMeaningEn: ''
    },
    'brutal': {
        prefix: 'brut', prefixMeaning: '野兽', prefixMeaningEn: 'brute',
        root: 'al', rootMeaning: '形容词后缀', rootMeaningEn: 'adj suffix',
        rootOrigin: '拉丁语', rootOriginNote: '源自拉丁语brutus(愚蠢、野兽)+-al(形容词后缀)，残忍的',
        suffix: '-al', suffixMeaning: '形容词后缀', suffixMeaningEn: 'adj suffix'
    },
    'brutalism': {
        prefix: 'brutal', prefixMeaning: '残忍', prefixMeaningEn: 'brutal',
        root: 'ism', rootMeaning: '主义后缀', rootMeaningEn: 'ism suffix',
        rootOrigin: '拉丁语', rootOriginNote: 'brutal(残忍)+-ism(主义)，野兽派建筑风格',
        suffix: '-ism', suffixMeaning: '名词后缀，表示主义', suffixMeaningEn: 'noun suffix, doctrine'
    },
    'brutality': {
        prefix: 'brutal', prefixMeaning: '残忍', prefixMeaningEn: 'brutal',
        root: 'ity', rootMeaning: '名词后缀', rootMeaningEn: 'noun suffix',
        rootOrigin: '拉丁语', rootOriginNote: 'brutal(残忍)+-ity(名词后缀)，残忍行为',
        suffix: '-ity', suffixMeaning: '名词后缀，表示性质', suffixMeaningEn: 'noun suffix, quality'
    }
};

let updated = 0;
words.forEach(w => {
    const wordLower = w.word.toLowerCase();
    if (bruWordData[wordLower]) {
        const d = bruWordData[wordLower];
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

console.log('Updated ' + updated + ' BRU words!');
