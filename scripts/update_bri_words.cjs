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

const briWordData = {
    'brick': {
        prefix: '', prefixMeaning: '', prefixMeaningEn: '',
        root: 'brick', rootMeaning: '砖块', rootMeaningEn: 'brick',
        rootOrigin: '古英语', rootOriginNote: '源自古英语bryce，意为砖块',
        suffix: '', suffixMeaning: '', suffixMeaningEn: ''
    },
    'brickbat': {
        prefix: 'brick', prefixMeaning: '砖块', prefixMeaningEn: 'brick',
        root: 'bat', rootMeaning: '打击物', rootMeaningEn: 'bat, strike',
        rootOrigin: '古英语', rootOriginNote: 'brick(砖)+bat(打击)，砖块作为武器或批评',
        suffix: '', suffixMeaning: '', suffixMeaningEn: ''
    },
    'brickyard': {
        prefix: 'brick', prefixMeaning: '砖块', prefixMeaningEn: 'brick',
        root: 'yard', rootMeaning: '场地', rootMeaningEn: 'yard',
        rootOrigin: '古英语', rootOriginNote: 'brick(砖)+yard(场地)，砖厂',
        suffix: '', suffixMeaning: '', suffixMeaningEn: ''
    },
    'bridal': {
        prefix: 'brid', prefixMeaning: '新娘', prefixMeaningEn: 'bride',
        root: 'al', rootMeaning: '形容词后缀', rootMeaningEn: 'adj suffix',
        rootOrigin: '古英语', rootOriginNote: 'brid(新娘)+-al(形容词后缀)，婚礼的',
        suffix: '-al', suffixMeaning: '形容词后缀', suffixMeaningEn: 'adj suffix'
    },
    'bride': {
        prefix: '', prefixMeaning: '', prefixMeaningEn: '',
        root: 'bride', rootMeaning: '新娘', rootMeaningEn: 'bride',
        rootOrigin: '古英语', rootOriginNote: '源自古英语bryd，意为新娘',
        suffix: '', suffixMeaning: '', suffixMeaningEn: ''
    },
    'bridegroom': {
        prefix: 'bride', prefixMeaning: '新娘', prefixMeaningEn: 'bride',
        root: 'groom', rootMeaning: '新郎', rootMeaningEn: 'groom',
        rootOrigin: '古英语', rootOriginNote: 'bride(新娘)+groom(新郎)，新郎',
        suffix: '', suffixMeaning: '', suffixMeaningEn: ''
    },
    'bridge': {
        prefix: '', prefixMeaning: '', prefixMeaningEn: '',
        root: 'bridge', rootMeaning: '桥梁', rootMeaningEn: 'bridge',
        rootOrigin: '古英语', rootOriginNote: '源自古英语brycg，意为桥梁',
        suffix: '', suffixMeaning: '', suffixMeaningEn: ''
    },
    'bridgehead': {
        prefix: 'bridge', prefixMeaning: '桥梁', prefixMeaningEn: 'bridge',
        root: 'head', rootMeaning: '头部、前沿', rootMeaningEn: 'head',
        rootOrigin: '古英语', rootOriginNote: 'bridge(桥)+head(前沿)，桥头堡',
        suffix: '', suffixMeaning: '', suffixMeaningEn: ''
    },
    'bridgework': {
        prefix: 'bridge', prefixMeaning: '桥梁', prefixMeaningEn: 'bridge',
        root: 'work', rootMeaning: '工作', rootMeaningEn: 'work',
        rootOrigin: '古英语', rootOriginNote: 'bridge(桥)+work(工作)，桥梁工程',
        suffix: '', suffixMeaning: '', suffixMeaningEn: ''
    },
    'brief': {
        prefix: '', prefixMeaning: '', prefixMeaningEn: '',
        root: 'brief', rootMeaning: '短、简要', rootMeaningEn: 'brief, short',
        rootOrigin: '拉丁语', rootOriginNote: '源自拉丁语brevis，意为短',
        suffix: '', suffixMeaning: '', suffixMeaningEn: ''
    },
    'briefcase': {
        prefix: 'brief', prefixMeaning: '简要、文件', prefixMeaningEn: 'brief, document',
        root: 'case', rootMeaning: '箱子', rootMeaningEn: 'case',
        rootOrigin: '拉丁语+拉丁语', rootOriginNote: 'brief(文件)+case(箱子)，公文包',
        suffix: '', suffixMeaning: '', suffixMeaningEn: ''
    },
    'briefly': {
        prefix: 'brief', prefixMeaning: '简要', prefixMeaningEn: 'brief',
        root: 'ly', rootMeaning: '副词后缀', rootMeaningEn: 'adv suffix',
        rootOrigin: '拉丁语', rootOriginNote: 'brief(简要)+-ly(副词后缀)，简要地',
        suffix: '-ly', suffixMeaning: '副词后缀', suffixMeaningEn: 'adv suffix'
    },
    'brier': {
        prefix: '', prefixMeaning: '', prefixMeaningEn: '',
        root: 'brier', rootMeaning: '荆棘', rootMeaningEn: 'brier, thorn',
        rootOrigin: '古英语', rootOriginNote: '源自古英语brer，意为荆棘',
        suffix: '', suffixMeaning: '', suffixMeaningEn: ''
    },
    'brigade': {
        prefix: '', prefixMeaning: '', prefixMeaningEn: '',
        root: 'brig', rootMeaning: '战斗', rootMeaningEn: 'fight, battle',
        rootOrigin: '意大利语', rootOriginNote: '源自意大利语brigata，brig(战斗)+-ade(名词后缀)，旅、队',
        suffix: '-ade', suffixMeaning: '名词后缀，表示集合', suffixMeaningEn: 'noun suffix, collection'
    },
    'brigadier': {
        prefix: 'brigade', prefixMeaning: '旅', prefixMeaningEn: 'brigade',
        root: 'ier', rootMeaning: '人', rootMeaningEn: 'person',
        rootOrigin: '意大利语', rootOriginNote: 'brigade(旅)+-ier(人)，旅长',
        suffix: '-ier', suffixMeaning: '名词后缀，表示人', suffixMeaningEn: 'noun suffix, person'
    },
    'brigand': {
        prefix: 'brig', prefixMeaning: '战斗', prefixMeaningEn: 'fight',
        root: 'and', rootMeaning: '人', rootMeaningEn: 'person',
        rootOrigin: '意大利语', rootOriginNote: 'brig(战斗)+-and(人)，土匪、强盗',
        suffix: '-and', suffixMeaning: '名词后缀，表示人', suffixMeaningEn: 'noun suffix, person'
    },
    'bright': {
        prefix: '', prefixMeaning: '', prefixMeaningEn: '',
        root: 'bright', rootMeaning: '明亮', rootMeaningEn: 'bright',
        rootOrigin: '古英语', rootOriginNote: '源自古英语beorht，意为明亮',
        suffix: '', suffixMeaning: '', suffixMeaningEn: ''
    },
    'brighten': {
        prefix: 'bright', prefixMeaning: '明亮', prefixMeaningEn: 'bright',
        root: 'en', rootMeaning: '动词后缀', rootMeaningEn: 'verb suffix',
        rootOrigin: '古英语', rootOriginNote: 'bright(明亮)+-en(动词后缀)，使明亮',
        suffix: '-en', suffixMeaning: '动词后缀', suffixMeaningEn: 'verb suffix'
    },
    'brightly': {
        prefix: 'bright', prefixMeaning: '明亮', prefixMeaningEn: 'bright',
        root: 'ly', rootMeaning: '副词后缀', rootMeaningEn: 'adv suffix',
        rootOrigin: '古英语', rootOriginNote: 'bright(明亮)+-ly(副词后缀)，明亮地',
        suffix: '-ly', suffixMeaning: '副词后缀', suffixMeaningEn: 'adv suffix'
    },
    'brilliant': {
        prefix: 'brill', prefixMeaning: '闪耀', prefixMeaningEn: 'shine',
        root: 'iant', rootMeaning: '形容词后缀', rootMeaningEn: 'adj suffix',
        rootOrigin: '意大利语', rootOriginNote: '源自意大利语brillante，brill(闪耀)+-iant(形容词后缀)，辉煌的',
        suffix: '-iant', suffixMeaning: '形容词后缀', suffixMeaningEn: 'adj suffix'
    },
    'brimful': {
        prefix: 'brim', prefixMeaning: '边缘', prefixMeaningEn: 'brim',
        root: 'ful', rootMeaning: '充满', rootMeaningEn: 'full',
        rootOrigin: '古英语', rootOriginNote: 'brim(边缘)+ful(充满)，满溢的',
        suffix: '-ful', suffixMeaning: '形容词后缀，表示充满', suffixMeaningEn: 'adj suffix, full'
    },
    'brimstone': {
        prefix: 'brim', prefixMeaning: '边缘', prefixMeaningEn: 'brim',
        root: 'stone', rootMeaning: '石头', rootMeaningEn: 'stone',
        rootOrigin: '古英语', rootOriginNote: 'brim(边缘)+stone(石头)，硫磺',
        suffix: '', suffixMeaning: '', suffixMeaningEn: ''
    },
    'brinded': {
        prefix: 'brind', prefixMeaning: '斑纹', prefixMeaningEn: 'brindle',
        root: 'ed', rootMeaning: '形容词后缀', rootMeaningEn: 'adj suffix',
        rootOrigin: '古英语', rootOriginNote: 'brind(斑纹)+-ed(形容词后缀)，有斑纹的',
        suffix: '-ed', suffixMeaning: '形容词后缀', suffixMeaningEn: 'adj suffix'
    },
    'brindle': {
        prefix: '', prefixMeaning: '', prefixMeaningEn: '',
        root: 'brindle', rootMeaning: '斑纹', rootMeaningEn: 'brindle',
        rootOrigin: '古英语', rootOriginNote: '源自古英语，意为斑纹',
        suffix: '', suffixMeaning: '', suffixMeaningEn: ''
    },
    'brine': {
        prefix: '', prefixMeaning: '', prefixMeaningEn: '',
        root: 'brine', rootMeaning: '盐水', rootMeaningEn: 'brine',
        rootOrigin: '古英语', rootOriginNote: '源自古英语bryne，意为盐水',
        suffix: '', suffixMeaning: '', suffixMeaningEn: ''
    },
    'bring': {
        prefix: '', prefixMeaning: '', prefixMeaningEn: '',
        root: 'bring', rootMeaning: '带来', rootMeaningEn: 'to bring',
        rootOrigin: '古英语', rootOriginNote: '源自古英语bringan，意为带来',
        suffix: '', suffixMeaning: '', suffixMeaningEn: ''
    },
    'brink': {
        prefix: '', prefixMeaning: '', prefixMeaningEn: '',
        root: 'brink', rootMeaning: '边缘', rootMeaningEn: 'brink, edge',
        rootOrigin: '古英语', rootOriginNote: '源自古英语brynke，意为边缘',
        suffix: '', suffixMeaning: '', suffixMeaningEn: ''
    },
    'brinkmanship': {
        prefix: 'brink', prefixMeaning: '边缘', prefixMeaningEn: 'brink',
        root: 'manship', rootMeaning: '技巧', rootMeaningEn: 'skill',
        rootOrigin: '古英语', rootOriginNote: 'brink(边缘)+manship(技巧)，边缘策略',
        suffix: '-manship', suffixMeaning: '名词后缀，表示技巧', suffixMeaningEn: 'noun suffix, skill'
    },
    'briny': {
        prefix: 'brine', prefixMeaning: '盐水', prefixMeaningEn: 'brine',
        root: 'y', rootMeaning: '形容词后缀', rootMeaningEn: 'adj suffix',
        rootOrigin: '古英语', rootOriginNote: 'brine(盐水)+-y(形容词后缀)，咸的',
        suffix: '-y', suffixMeaning: '形容词后缀', suffixMeaningEn: 'adj suffix'
    },
    'brisk': {
        prefix: '', prefixMeaning: '', prefixMeaningEn: '',
        root: 'brisk', rootMeaning: '活跃、敏捷', rootMeaningEn: 'brisk, lively',
        rootOrigin: '苏格兰语', rootOriginNote: '源自苏格兰语，意为活跃、敏捷',
        suffix: '', suffixMeaning: '', suffixMeaningEn: ''
    },
    'brisket': {
        prefix: '', prefixMeaning: '', prefixMeaningEn: '',
        root: 'brisk', rootMeaning: '胸部', rootMeaningEn: 'breast',
        rootOrigin: '古英语', rootOriginNote: '源自古英语，意为胸部肉',
        suffix: '-et', suffixMeaning: '名词后缀，表示小', suffixMeaningEn: 'noun suffix, small'
    },
    'bristle': {
        prefix: '', prefixMeaning: '', prefixMeaningEn: '',
        root: 'brist', rootMeaning: '硬毛', rootMeaningEn: 'bristle',
        rootOrigin: '古英语', rootOriginNote: '源自古英语byrst，意为硬毛',
        suffix: '-le', suffixMeaning: '名词后缀', suffixMeaningEn: 'noun suffix'
    },
    'bristly': {
        prefix: 'bristle', prefixMeaning: '硬毛', prefixMeaningEn: 'bristle',
        root: 'ly', rootMeaning: '形容词后缀', rootMeaningEn: 'adj suffix',
        rootOrigin: '古英语', rootOriginNote: 'bristle(硬毛)+-ly(形容词后缀)，多刺的',
        suffix: '-ly', suffixMeaning: '形容词后缀', suffixMeaningEn: 'adj suffix'
    },
    'britain': {
        prefix: '', prefixMeaning: '', prefixMeaningEn: '',
        root: 'Britain', rootMeaning: '英国', rootMeaningEn: 'Britain',
        rootOrigin: '拉丁语', rootOriginNote: '源自拉丁语Britannia，意为英国',
        suffix: '', suffixMeaning: '', suffixMeaningEn: ''
    },
    'britannia': {
        prefix: '', prefixMeaning: '', prefixMeaningEn: '',
        root: 'Britannia', rootMeaning: '英国', rootMeaningEn: 'Britain',
        rootOrigin: '拉丁语', rootOriginNote: '源自拉丁语Britannia，英国的拉丁名称',
        suffix: '-ia', suffixMeaning: '名词后缀，表示地名', suffixMeaningEn: 'noun suffix, place'
    },
    'british': {
        prefix: 'Britain', prefixMeaning: '英国', prefixMeaningEn: 'Britain',
        root: 'ish', rootMeaning: '形容词后缀', rootMeaningEn: 'adj suffix',
        rootOrigin: '拉丁语', rootOriginNote: 'Britain(英国)+-ish(形容词后缀)，英国的',
        suffix: '-ish', suffixMeaning: '形容词后缀，表示国籍', suffixMeaningEn: 'adj suffix, nationality'
    },
    'brittle': {
        prefix: '', prefixMeaning: '', prefixMeaningEn: '',
        root: 'brit', rootMeaning: '易碎', rootMeaningEn: 'brittle',
        rootOrigin: '古英语', rootOriginNote: '源自古英语，意为易碎的',
        suffix: '-le', suffixMeaning: '形容词后缀', suffixMeaningEn: 'adj suffix'
    }
};

let updated = 0;
words.forEach(w => {
    const wordLower = w.word.toLowerCase();
    if (briWordData[wordLower]) {
        const d = briWordData[wordLower];
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

console.log('Updated ' + updated + ' BRI words!');
