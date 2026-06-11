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

const breWordData = {
    'bread': {
        prefix: '', prefixMeaning: '', prefixMeaningEn: '',
        root: 'bread', rootMeaning: '面包、食物', rootMeaningEn: 'bread, food',
        rootOrigin: '古英语', rootOriginNote: '源自古英语bread，原意为碎片、块，后演变为面包',
        suffix: '', suffixMeaning: '', suffixMeaningEn: ''
    },
    'breadbasket': {
        prefix: 'bread', prefixMeaning: '面包', prefixMeaningEn: 'bread',
        root: 'basket', rootMeaning: '篮子', rootMeaningEn: 'basket',
        rootOrigin: '古英语+拉丁语', rootOriginNote: 'bread(面包)+basket(篮子)，盛放面包的篮子',
        suffix: '', suffixMeaning: '', suffixMeaningEn: ''
    },
    'breadth': {
        prefix: 'bread', prefixMeaning: '宽', prefixMeaningEn: 'broad',
        root: 'th', rootMeaning: '名词后缀', rootMeaningEn: 'noun suffix',
        rootOrigin: '古英语', rootOriginNote: '源自bread的变体，加-th后缀表示宽度',
        suffix: '-th', suffixMeaning: '名词后缀，表示状态', suffixMeaningEn: 'noun suffix, state'
    },
    'breadwinner': {
        prefix: 'bread', prefixMeaning: '面包、生计', prefixMeaningEn: 'bread, livelihood',
        root: 'winner', rootMeaning: '赢得者', rootMeaningEn: 'winner',
        rootOrigin: '古英语', rootOriginNote: 'bread(生计)+winner(赢得者)，养家糊口的人',
        suffix: '-er', suffixMeaning: '名词后缀，表示人', suffixMeaningEn: 'noun suffix, person'
    },
    'break': {
        prefix: '', prefixMeaning: '', prefixMeaningEn: '',
        root: 'break', rootMeaning: '打破、断裂', rootMeaningEn: 'to break',
        rootOrigin: '古英语', rootOriginNote: '源自古英语brecan，意为打破、粉碎',
        suffix: '', suffixMeaning: '', suffixMeaningEn: ''
    },
    'breakage': {
        prefix: 'break', prefixMeaning: '打破', prefixMeaningEn: 'to break',
        root: 'age', rootMeaning: '名词后缀', rootMeaningEn: 'noun suffix',
        rootOrigin: '古英语+法语', rootOriginNote: 'break(打破)+-age(名词后缀)，破损、损坏',
        suffix: '-age', suffixMeaning: '名词后缀，表示状态', suffixMeaningEn: 'noun suffix, state'
    },
    'breakaway': {
        prefix: 'break', prefixMeaning: '打破', prefixMeaningEn: 'to break',
        root: 'away', rootMeaning: '离开', rootMeaningEn: 'away',
        rootOrigin: '古英语', rootOriginNote: 'break(打破)+away(离开)，脱离、分离',
        suffix: '', suffixMeaning: '', suffixMeaningEn: ''
    },
    'breakfast': {
        prefix: 'break', prefixMeaning: '打破', prefixMeaningEn: 'to break',
        root: 'fast', rootMeaning: '禁食', rootMeaningEn: 'fasting',
        rootOrigin: '古英语', rootOriginNote: 'break(打破)+fast(禁食)，打破禁食的第一餐，即早餐',
        suffix: '', suffixMeaning: '', suffixMeaningEn: ''
    },
    'breakneck': {
        prefix: 'break', prefixMeaning: '打破', prefixMeaningEn: 'to break',
        root: 'neck', rootMeaning: '脖子', rootMeaningEn: 'neck',
        rootOrigin: '古英语', rootOriginNote: 'break(打破)+neck(脖子)，形容速度极快，可能折断脖子',
        suffix: '', suffixMeaning: '', suffixMeaningEn: ''
    },
    'breakout': {
        prefix: 'break', prefixMeaning: '打破', prefixMeaningEn: 'to break',
        root: 'out', rootMeaning: '出去', rootMeaningEn: 'out',
        rootOrigin: '古英语', rootOriginNote: 'break(打破)+out(出去)，突围、爆发',
        suffix: '', suffixMeaning: '', suffixMeaningEn: ''
    },
    'breakthrough': {
        prefix: 'break', prefixMeaning: '打破', prefixMeaningEn: 'to break',
        root: 'through', rootMeaning: '穿过', rootMeaningEn: 'through',
        rootOrigin: '古英语', rootOriginNote: 'break(打破)+through(穿过)，突破、重大进展',
        suffix: '', suffixMeaning: '', suffixMeaningEn: ''
    },
    'breakup': {
        prefix: 'break', prefixMeaning: '打破', prefixMeaningEn: 'to break',
        root: 'up', rootMeaning: '向上、完成', rootMeaningEn: 'up, complete',
        rootOrigin: '古英语', rootOriginNote: 'break(打破)+up(完成)，分裂、解散',
        suffix: '', suffixMeaning: '', suffixMeaningEn: ''
    },
    'breast': {
        prefix: '', prefixMeaning: '', prefixMeaningEn: '',
        root: 'breast', rootMeaning: '胸部、乳房', rootMeaningEn: 'breast, chest',
        rootOrigin: '古英语', rootOriginNote: '源自古英语breost，意为胸部、乳房',
        suffix: '', suffixMeaning: '', suffixMeaningEn: ''
    },
    'breastplate': {
        prefix: 'breast', prefixMeaning: '胸部', prefixMeaningEn: 'breast',
        root: 'plate', rootMeaning: '板、护甲', rootMeaningEn: 'plate, armor',
        rootOrigin: '古英语+拉丁语', rootOriginNote: 'breast(胸部)+plate(护甲)，胸甲',
        suffix: '', suffixMeaning: '', suffixMeaningEn: ''
    },
    'breath': {
        prefix: '', prefixMeaning: '', prefixMeaningEn: '',
        root: 'breath', rootMeaning: '呼吸、气息', rootMeaningEn: 'breath',
        rootOrigin: '古英语', rootOriginNote: '源自古英语braeth，意为气味、呼吸',
        suffix: '', suffixMeaning: '', suffixMeaningEn: ''
    },
    'breathable': {
        prefix: 'breath', prefixMeaning: '呼吸', prefixMeaningEn: 'breath',
        root: 'able', rootMeaning: '能够的', rootMeaningEn: 'able',
        rootOrigin: '古英语', rootOriginNote: 'breath(呼吸)+-able(能够的)，可呼吸的',
        suffix: '-able', suffixMeaning: '形容词后缀，表示能够', suffixMeaningEn: 'adj suffix, capable'
    },
    'breathe': {
        prefix: '', prefixMeaning: '', prefixMeaningEn: '',
        root: 'breath', rootMeaning: '呼吸', rootMeaningEn: 'breath',
        rootOrigin: '古英语', rootOriginNote: '源自breath，加-e变为动词形式',
        suffix: '-e', suffixMeaning: '动词后缀', suffixMeaningEn: 'verb suffix'
    },
    'breech': {
        prefix: '', prefixMeaning: '', prefixMeaningEn: '',
        root: 'breech', rootMeaning: '后部、臀部', rootMeaningEn: 'breech, buttocks',
        rootOrigin: '古英语', rootOriginNote: '源自古英语brec，意为裤子、后部',
        suffix: '', suffixMeaning: '', suffixMeaningEn: ''
    },
    'breeches': {
        prefix: 'breech', prefixMeaning: '后部、裤子', prefixMeaningEn: 'breech',
        root: 'es', rootMeaning: '复数后缀', rootMeaningEn: 'plural suffix',
        rootOrigin: '古英语', rootOriginNote: 'breech(裤子)+-es(复数)，马裤',
        suffix: '-es', suffixMeaning: '复数后缀', suffixMeaningEn: 'plural suffix'
    },
    'breed': {
        prefix: '', prefixMeaning: '', prefixMeaningEn: '',
        root: 'breed', rootMeaning: '繁殖、培育', rootMeaningEn: 'to breed',
        rootOrigin: '古英语', rootOriginNote: '源自古英语bredan，意为繁殖、培育',
        suffix: '', suffixMeaning: '', suffixMeaningEn: ''
    },
    'breeze': {
        prefix: '', prefixMeaning: '', prefixMeaningEn: '',
        root: 'breeze', rootMeaning: '微风', rootMeaningEn: 'breeze',
        rootOrigin: '西班牙语', rootOriginNote: '可能源自西班牙语briza，意为微风',
        suffix: '', suffixMeaning: '', suffixMeaningEn: ''
    },
    'breve': {
        prefix: '', prefixMeaning: '', prefixMeaningEn: '',
        root: 'breve', rootMeaning: '短', rootMeaningEn: 'short',
        rootOrigin: '拉丁语', rootOriginNote: '源自拉丁语brevis，意为短，用于音乐中的短音符',
        suffix: '-e', suffixMeaning: '名词后缀', suffixMeaningEn: 'noun suffix'
    },
    'brevet': {
        prefix: '', prefixMeaning: '', prefixMeaningEn: '',
        root: 'brev', rootMeaning: '短、简要', rootMeaningEn: 'short, brief',
        rootOrigin: '拉丁语', rootOriginNote: '源自拉丁语brevis(短)，brevet指临时任命证书',
        suffix: '-et', suffixMeaning: '名词后缀，表示小', suffixMeaningEn: 'noun suffix, small'
    },
    'breviary': {
        prefix: '', prefixMeaning: '', prefixMeaningEn: '',
        root: 'brevi', rootMeaning: '短、简要', rootMeaningEn: 'short, brief',
        rootOrigin: '拉丁语', rootOriginNote: '源自拉丁语breviarium，brevi(短)+-ary(场所)，摘要、祈祷书',
        suffix: '-ary', suffixMeaning: '名词后缀，表示场所或集合', suffixMeaningEn: 'noun suffix, place or collection'
    }
};

let updated = 0;
words.forEach(w => {
    const wordLower = w.word.toLowerCase();
    if (breWordData[wordLower]) {
        const d = breWordData[wordLower];
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

console.log('Updated ' + updated + ' BRE words!');
