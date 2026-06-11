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

const broWordData = {
    'broad': {
        prefix: '', prefixMeaning: '', prefixMeaningEn: '',
        root: 'broad', rootMeaning: '宽阔', rootMeaningEn: 'broad, wide',
        rootOrigin: '古英语', rootOriginNote: '源自古英语brad，意为宽阔',
        suffix: '', suffixMeaning: '', suffixMeaningEn: ''
    },
    'broadbean': {
        prefix: 'broad', prefixMeaning: '宽阔', prefixMeaningEn: 'broad',
        root: 'bean', rootMeaning: '豆', rootMeaningEn: 'bean',
        rootOrigin: '古英语', rootOriginNote: 'broad(宽)+bean(豆)，蚕豆',
        suffix: '', suffixMeaning: '', suffixMeaningEn: ''
    },
    'broadcast': {
        prefix: 'broad', prefixMeaning: '宽阔', prefixMeaningEn: 'broad',
        root: 'cast', rootMeaning: '投掷', rootMeaningEn: 'cast, throw',
        rootOrigin: '古英语', rootOriginNote: 'broad(广泛)+cast(投掷)，广播',
        suffix: '', suffixMeaning: '', suffixMeaningEn: ''
    },
    'broaden': {
        prefix: 'broad', prefixMeaning: '宽阔', prefixMeaningEn: 'broad',
        root: 'en', rootMeaning: '动词后缀', rootMeaningEn: 'verb suffix',
        rootOrigin: '古英语', rootOriginNote: 'broad(宽阔)+-en(动词后缀)，使宽阔',
        suffix: '-en', suffixMeaning: '动词后缀', suffixMeaningEn: 'verb suffix'
    },
    'broader': {
        prefix: 'broad', prefixMeaning: '宽阔', prefixMeaningEn: 'broad',
        root: 'er', rootMeaning: '比较级后缀', rootMeaningEn: 'comparative suffix',
        rootOrigin: '古英语', rootOriginNote: 'broad(宽阔)+-er(比较级)，更宽阔的',
        suffix: '-er', suffixMeaning: '比较级后缀', suffixMeaningEn: 'comparative suffix'
    },
    'broadsheet': {
        prefix: 'broad', prefixMeaning: '宽阔', prefixMeaningEn: 'broad',
        root: 'sheet', rootMeaning: '纸张', rootMeaningEn: 'sheet',
        rootOrigin: '古英语', rootOriginNote: 'broad(宽)+sheet(纸)，大幅报纸',
        suffix: '', suffixMeaning: '', suffixMeaningEn: ''
    },
    'broadside': {
        prefix: 'broad', prefixMeaning: '宽阔', prefixMeaningEn: 'broad',
        root: 'side', rootMeaning: '侧面', rootMeaningEn: 'side',
        rootOrigin: '古英语', rootOriginNote: 'broad(宽)+side(侧面)，侧面攻击',
        suffix: '', suffixMeaning: '', suffixMeaningEn: ''
    },
    'brocade': {
        prefix: '', prefixMeaning: '', prefixMeaningEn: '',
        root: 'brocade', rootMeaning: '锦缎', rootMeaningEn: 'brocade',
        rootOrigin: '意大利语', rootOriginNote: '源自意大利语broccato，意为锦缎',
        suffix: '', suffixMeaning: '', suffixMeaningEn: ''
    },
    'broccoli': {
        prefix: '', prefixMeaning: '', prefixMeaningEn: '',
        root: 'brocc', rootMeaning: '芽、茎', rootMeaningEn: 'sprout, stem',
        rootOrigin: '意大利语', rootOriginNote: '源自意大利语brocco(芽)+-li(复数)，西兰花',
        suffix: '-i', suffixMeaning: '复数后缀', suffixMeaningEn: 'plural suffix'
    },
    'brochure': {
        prefix: '', prefixMeaning: '', prefixMeaningEn: '',
        root: 'broch', rootMeaning: '缝合', rootMeaningEn: 'stitch',
        rootOrigin: '法语', rootOriginNote: '源自法语brocher(缝合)，小册子',
        suffix: '-ure', suffixMeaning: '名词后缀', suffixMeaningEn: 'noun suffix'
    },
    'broderie': {
        prefix: '', prefixMeaning: '', prefixMeaningEn: '',
        root: 'brod', rootMeaning: '刺绣', rootMeaningEn: 'embroidery',
        rootOrigin: '法语', rootOriginNote: '源自法语broderie，刺绣',
        suffix: '-erie', suffixMeaning: '名词后缀', suffixMeaningEn: 'noun suffix'
    },
    'brogue': {
        prefix: '', prefixMeaning: '', prefixMeaningEn: '',
        root: 'brogue', rootMeaning: '鞋子', rootMeaningEn: 'shoe',
        rootOrigin: '爱尔兰语', rootOriginNote: '源自爱尔兰语，意为厚底鞋或口音',
        suffix: '', suffixMeaning: '', suffixMeaningEn: ''
    },
    'broil': {
        prefix: '', prefixMeaning: '', prefixMeaningEn: '',
        root: 'broil', rootMeaning: '烤、争吵', rootMeaningEn: 'broil, roast',
        rootOrigin: '法语', rootOriginNote: '源自法语broiller，意为烤或争吵',
        suffix: '', suffixMeaning: '', suffixMeaningEn: ''
    },
    'broken': {
        prefix: 'break', prefixMeaning: '打破', prefixMeaningEn: 'break',
        root: 'en', rootMeaning: '形容词后缀', rootMeaningEn: 'adj suffix',
        rootOrigin: '古英语', rootOriginNote: 'break(打破)+-en(形容词后缀)，破碎的',
        suffix: '-en', suffixMeaning: '形容词后缀', suffixMeaningEn: 'adj suffix'
    },
    'broker': {
        prefix: '', prefixMeaning: '', prefixMeaningEn: '',
        root: 'brok', rootMeaning: '经纪人', rootMeaningEn: 'broker',
        rootOrigin: '古法语', rootOriginNote: '源自古法语brocour，意为经纪人',
        suffix: '-er', suffixMeaning: '名词后缀，表示人', suffixMeaningEn: 'noun suffix, person'
    },
    'brokerage': {
        prefix: 'broker', prefixMeaning: '经纪人', prefixMeaningEn: 'broker',
        root: 'age', rootMeaning: '名词后缀', rootMeaningEn: 'noun suffix',
        rootOrigin: '古法语', rootOriginNote: 'broker(经纪人)+-age(名词后缀)，经纪业务',
        suffix: '-age', suffixMeaning: '名词后缀，表示行为', suffixMeaningEn: 'noun suffix, action'
    },
    'brolly': {
        prefix: '', prefixMeaning: '', prefixMeaningEn: '',
        root: 'broll', rootMeaning: '伞', rootMeaningEn: 'umbrella',
        rootOrigin: '英语俚语', rootOriginNote: 'umbrella的俚语形式',
        suffix: '-y', suffixMeaning: '名词后缀', suffixMeaningEn: 'noun suffix'
    },
    'bromine': {
        prefix: 'brom', prefixMeaning: '溴', prefixMeaningEn: 'bromine',
        root: 'ine', rootMeaning: '化学元素后缀', rootMeaningEn: 'chemical suffix',
        rootOrigin: '希腊语', rootOriginNote: '源自希腊语bromos(恶臭)+-ine(元素后缀)，溴元素',
        suffix: '-ine', suffixMeaning: '化学元素后缀', suffixMeaningEn: 'chemical suffix'
    },
    'bronchus': {
        prefix: '', prefixMeaning: '', prefixMeaningEn: '',
        root: 'bronch', rootMeaning: '支气管', rootMeaningEn: 'bronchus',
        rootOrigin: '希腊语', rootOriginNote: '源自希腊语bronchos，意为支气管',
        suffix: '-us', suffixMeaning: '拉丁名词后缀', suffixMeaningEn: 'Latin noun suffix'
    },
    'bronco': {
        prefix: '', prefixMeaning: '', prefixMeaningEn: '',
        root: 'bronco', rootMeaning: '野马', rootMeaningEn: 'bronco, wild horse',
        rootOrigin: '西班牙语', rootOriginNote: '源自西班牙语，意为野马',
        suffix: '', suffixMeaning: '', suffixMeaningEn: ''
    },
    'bronze': {
        prefix: '', prefixMeaning: '', prefixMeaningEn: '',
        root: 'bronze', rootMeaning: '青铜', rootMeaningEn: 'bronze',
        rootOrigin: '意大利语', rootOriginNote: '源自意大利语bronzo，意为青铜',
        suffix: '', suffixMeaning: '', suffixMeaningEn: ''
    },
    'brooch': {
        prefix: '', prefixMeaning: '', prefixMeaningEn: '',
        root: 'brooch', rootMeaning: '胸针', rootMeaningEn: 'brooch',
        rootOrigin: '古法语', rootOriginNote: '源自古法语broche，意为胸针',
        suffix: '', suffixMeaning: '', suffixMeaningEn: ''
    },
    'brood': {
        prefix: '', prefixMeaning: '', prefixMeaningEn: '',
        root: 'brood', rootMeaning: '孵、沉思', rootMeaningEn: 'brood',
        rootOrigin: '古英语', rootOriginNote: '源自古英语brod，意为孵化的幼鸟',
        suffix: '', suffixMeaning: '', suffixMeaningEn: ''
    },
    'brook': {
        prefix: '', prefixMeaning: '', prefixMeaningEn: '',
        root: 'brook', rootMeaning: '小溪', rootMeaningEn: 'brook, stream',
        rootOrigin: '古英语', rootOriginNote: '源自古英语broc，意为小溪',
        suffix: '', suffixMeaning: '', suffixMeaningEn: ''
    },
    'broom': {
        prefix: '', prefixMeaning: '', prefixMeaningEn: '',
        root: 'broom', rootMeaning: '扫帚', rootMeaningEn: 'broom',
        rootOrigin: '古英语', rootOriginNote: '源自古英语brom，意为扫帚植物',
        suffix: '', suffixMeaning: '', suffixMeaningEn: ''
    },
    'broomstick': {
        prefix: 'broom', prefixMeaning: '扫帚', prefixMeaningEn: 'broom',
        root: 'stick', rootMeaning: '棍', rootMeaningEn: 'stick',
        rootOrigin: '古英语', rootOriginNote: 'broom(扫帚)+stick(棍)，扫帚柄',
        suffix: '', suffixMeaning: '', suffixMeaningEn: ''
    },
    'bros': {
        prefix: '', prefixMeaning: '', prefixMeaningEn: '',
        root: 'bro', rootMeaning: '兄弟', rootMeaningEn: 'brother',
        rootOrigin: '英语俚语', rootOriginNote: 'brother的缩写形式',
        suffix: '-s', suffixMeaning: '复数后缀', suffixMeaningEn: 'plural suffix'
    },
    'brose': {
        prefix: '', prefixMeaning: '', prefixMeaningEn: '',
        root: 'brose', rootMeaning: '粥', rootMeaningEn: 'brose, porridge',
        rootOrigin: '苏格兰语', rootOriginNote: '源自苏格兰语，意为粥',
        suffix: '', suffixMeaning: '', suffixMeaningEn: ''
    },
    'broth': {
        prefix: '', prefixMeaning: '', prefixMeaningEn: '',
        root: 'broth', rootMeaning: '肉汤', rootMeaningEn: 'broth',
        rootOrigin: '古英语', rootOriginNote: '源自古英语broth，意为肉汤',
        suffix: '', suffixMeaning: '', suffixMeaningEn: ''
    },
    'brothel': {
        prefix: 'broth', prefixMeaning: '堕落', prefixMeaningEn: 'degrade',
        root: 'el', rootMeaning: '名词后缀', rootMeaningEn: 'noun suffix',
        rootOrigin: '古英语', rootOriginNote: '源自brothel(堕落的人)，妓院',
        suffix: '-el', suffixMeaning: '名词后缀，表示场所', suffixMeaningEn: 'noun suffix, place'
    },
    'brother': {
        prefix: '', prefixMeaning: '', prefixMeaningEn: '',
        root: 'brother', rootMeaning: '兄弟', rootMeaningEn: 'brother',
        rootOrigin: '古英语', rootOriginNote: '源自古英语brother，意为兄弟',
        suffix: '', suffixMeaning: '', suffixMeaningEn: ''
    },
    'brotherly': {
        prefix: 'brother', prefixMeaning: '兄弟', prefixMeaningEn: 'brother',
        root: 'ly', rootMeaning: '副词后缀', rootMeaningEn: 'adv suffix',
        rootOrigin: '古英语', rootOriginNote: 'brother(兄弟)+-ly(副词后缀)，兄弟般的',
        suffix: '-ly', suffixMeaning: '副词后缀', suffixMeaningEn: 'adv suffix'
    },
    'brougham': {
        prefix: '', prefixMeaning: '', prefixMeaningEn: '',
        root: 'brougham', rootMeaning: '马车', rootMeaningEn: 'brougham',
        rootOrigin: '英语', rootOriginNote: '源自Lord Brougham的名字，一种马车',
        suffix: '', suffixMeaning: '', suffixMeaningEn: ''
    },
    'brouhaha': {
        prefix: '', prefixMeaning: '', prefixMeaningEn: '',
        root: 'brouhaha', rootMeaning: '骚动', rootMeaningEn: 'brouhaha',
        rootOrigin: '法语', rootOriginNote: '源自法语brouhaha，意为骚动',
        suffix: '', suffixMeaning: '', suffixMeaningEn: ''
    },
    'browbeat': {
        prefix: 'brow', prefixMeaning: '眉头', prefixMeaningEn: 'brow',
        root: 'beat', rootMeaning: '打击', rootMeaningEn: 'beat',
        rootOrigin: '古英语', rootOriginNote: 'brow(眉头)+beat(打击)，威吓',
        suffix: '', suffixMeaning: '', suffixMeaningEn: ''
    },
    'brown': {
        prefix: '', prefixMeaning: '', prefixMeaningEn: '',
        root: 'brown', rootMeaning: '棕色', rootMeaningEn: 'brown',
        rootOrigin: '古英语', rootOriginNote: '源自古英语brun，意为棕色',
        suffix: '', suffixMeaning: '', suffixMeaningEn: ''
    },
    'brownstone': {
        prefix: 'brown', prefixMeaning: '棕色', prefixMeaningEn: 'brown',
        root: 'stone', rootMeaning: '石头', rootMeaningEn: 'stone',
        rootOrigin: '古英语', rootOriginNote: 'brown(棕色)+stone(石头)，褐砂石',
        suffix: '', suffixMeaning: '', suffixMeaningEn: ''
    },
    'brows': {
        prefix: '', prefixMeaning: '', prefixMeaningEn: '',
        root: 'brow', rootMeaning: '眉毛', rootMeaningEn: 'brow',
        rootOrigin: '古英语', rootOriginNote: '源自古英语bru，意为眉毛',
        suffix: '-s', suffixMeaning: '复数后缀', suffixMeaningEn: 'plural suffix'
    },
    'browse': {
        prefix: '', prefixMeaning: '', prefixMeaningEn: '',
        root: 'browse', rootMeaning: '浏览', rootMeaningEn: 'browse',
        rootOrigin: '古法语', rootOriginNote: '源自古法语broust(嫩芽)，浏览',
        suffix: '', suffixMeaning: '', suffixMeaningEn: ''
    }
};

let updated = 0;
words.forEach(w => {
    const wordLower = w.word.toLowerCase();
    if (broWordData[wordLower]) {
        const d = broWordData[wordLower];
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

console.log('Updated ' + updated + ' BRO words!');
