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

const chWordData = {
    'chain': {
        prefix: '', prefixMeaning: '', prefixMeaningEn: '',
        root: 'chain', rootMeaning: '链', rootMeaningEn: 'chain',
        rootOrigin: '拉丁语', rootOriginNote: '源自拉丁语catena，意为链',
        suffix: '', suffixMeaning: '', suffixMeaningEn: ''
    },
    'chair': {
        prefix: '', prefixMeaning: '', prefixMeaningEn: '',
        root: 'chair', rootMeaning: '椅子', rootMeaningEn: 'chair',
        rootOrigin: '古法语', rootOriginNote: '源自古法语chaiere，意为椅子',
        suffix: '', suffixMeaning: '', suffixMeaningEn: ''
    },
    'chairman': {
        prefix: 'chair', prefixMeaning: '椅子', prefixMeaningEn: 'chair',
        root: 'man', rootMeaning: '人', rootMeaningEn: 'man',
        rootOrigin: '古法语+古英语', rootOriginNote: 'chair(椅子)+man(人)，主席',
        suffix: '', suffixMeaning: '', suffixMeaningEn: ''
    },
    'chalk': {
        prefix: '', prefixMeaning: '', prefixMeaningEn: '',
        root: 'chalk', rootMeaning: '粉笔', rootMeaningEn: 'chalk',
        rootOrigin: '古英语', rootOriginNote: '源自古英语cealc，意为粉笔',
        suffix: '', suffixMeaning: '', suffixMeaningEn: ''
    },
    'challenge': {
        prefix: 'chall', prefixMeaning: '挑战', prefixMeaningEn: 'challenge',
        root: 'enge', rootMeaning: '名词后缀', rootMeaningEn: 'noun suffix',
        rootOrigin: '古法语', rootOriginNote: '源自古法语chalonge，意为挑战',
        suffix: '-e', suffixMeaning: '名词后缀', suffixMeaningEn: 'noun suffix'
    },
    'chamber': {
        prefix: '', prefixMeaning: '', prefixMeaningEn: '',
        root: 'chamber', rootMeaning: '房间', rootMeaningEn: 'chamber, room',
        rootOrigin: '古法语', rootOriginNote: '源自古法语chambre，意为房间',
        suffix: '-er', suffixMeaning: '名词后缀', suffixMeaningEn: 'noun suffix'
    },
    'champion': {
        prefix: 'champ', prefixMeaning: '战场', prefixMeaningEn: 'battlefield',
        root: 'ion', rootMeaning: '名词后缀', rootMeaningEn: 'noun suffix',
        rootOrigin: '古法语', rootOriginNote: '源自古法语champion，champ(战场)+-ion(人)，冠军',
        suffix: '-ion', suffixMeaning: '名词后缀，表示人', suffixMeaningEn: 'noun suffix, person'
    },
    'chance': {
        prefix: '', prefixMeaning: '', prefixMeaningEn: '',
        root: 'chance', rootMeaning: '机会', rootMeaningEn: 'chance',
        rootOrigin: '古法语', rootOriginNote: '源自古法语cheance，意为机会',
        suffix: '-e', suffixMeaning: '名词后缀', suffixMeaningEn: 'noun suffix'
    },
    'change': {
        prefix: '', prefixMeaning: '', prefixMeaningEn: '',
        root: 'change', rootMeaning: '改变', rootMeaningEn: 'change',
        rootOrigin: '古法语', rootOriginNote: '源自古法语changier，意为改变',
        suffix: '-e', suffixMeaning: '动词后缀', suffixMeaningEn: 'verb suffix'
    },
    'channel': {
        prefix: 'chan', prefixMeaning: '管道', prefixMeaningEn: 'pipe',
        root: 'nel', rootMeaning: '名词后缀', rootMeaningEn: 'noun suffix',
        rootOrigin: '拉丁语', rootOriginNote: '源自拉丁语canalis，chan(管道)+-nel(名词后缀)，频道',
        suffix: '-el', suffixMeaning: '名词后缀', suffixMeaningEn: 'noun suffix'
    },
    'chaos': {
        prefix: '', prefixMeaning: '', prefixMeaningEn: '',
        root: 'chaos', rootMeaning: '混乱', rootMeaningEn: 'chaos',
        rootOrigin: '希腊语', rootOriginNote: '源自希腊语chaos，意为混乱',
        suffix: '', suffixMeaning: '', suffixMeaningEn: ''
    },
    'chapter': {
        prefix: 'chap', prefixMeaning: '头', prefixMeaningEn: 'head',
        root: 'ter', rootMeaning: '名词后缀', rootMeaningEn: 'noun suffix',
        rootOrigin: '拉丁语', rootOriginNote: '源自拉丁语caput(头)+-ter(名词后缀)，章节',
        suffix: '-er', suffixMeaning: '名词后缀', suffixMeaningEn: 'noun suffix'
    },
    'character': {
        prefix: 'char', prefixMeaning: '刻画', prefixMeaningEn: 'mark',
        root: 'acter', rootMeaning: '名词后缀', rootMeaningEn: 'noun suffix',
        rootOrigin: '希腊语', rootOriginNote: '源自希腊语charakter，char(刻画)+-acter(名词后缀)，性格',
        suffix: '-er', suffixMeaning: '名词后缀', suffixMeaningEn: 'noun suffix'
    },
    'characteristic': {
        prefix: 'character', prefixMeaning: '性格', prefixMeaningEn: 'character',
        root: 'istic', rootMeaning: '形容词后缀', rootMeaningEn: 'adj suffix',
        rootOrigin: '希腊语', rootOriginNote: 'character(性格)+-istic(形容词后缀)，典型的',
        suffix: '-ic', suffixMeaning: '形容词后缀', suffixMeaningEn: 'adj suffix'
    },
    'charge': {
        prefix: 'char', prefixMeaning: '装载', prefixMeaningEn: 'load',
        root: 'ge', rootMeaning: '动词后缀', rootMeaningEn: 'verb suffix',
        rootOrigin: '古法语', rootOriginNote: '源自古法语chargier，char(装载)+-ge(动词后缀)，收费、指控',
        suffix: '-e', suffixMeaning: '动词后缀', suffixMeaningEn: 'verb suffix'
    },
    'charity': {
        prefix: 'char', prefixMeaning: '爱', prefixMeaningEn: 'love',
        root: 'ity', rootMeaning: '名词后缀', rootMeaningEn: 'noun suffix',
        rootOrigin: '拉丁语', rootOriginNote: '源自拉丁语caritas，char(爱)+-ity(名词后缀)，慈善',
        suffix: '-ity', suffixMeaning: '名词后缀', suffixMeaningEn: 'noun suffix'
    },
    'charm': {
        prefix: '', prefixMeaning: '', prefixMeaningEn: '',
        root: 'charm', rootMeaning: '魅力', rootMeaningEn: 'charm',
        rootOrigin: '古法语', rootOriginNote: '源自古法语charme，意为魅力',
        suffix: '', suffixMeaning: '', suffixMeaningEn: ''
    },
    'chart': {
        prefix: '', prefixMeaning: '', prefixMeaningEn: '',
        root: 'chart', rootMeaning: '图表', rootMeaningEn: 'chart',
        rootOrigin: '希腊语', rootOriginNote: '源自希腊语charta，意为图表',
        suffix: '', suffixMeaning: '', suffixMeaningEn: ''
    },
    'chase': {
        prefix: '', prefixMeaning: '', prefixMeaningEn: '',
        root: 'chase', rootMeaning: '追逐', rootMeaningEn: 'chase',
        rootOrigin: '古法语', rootOriginNote: '源自古法语chacier，意为追逐',
        suffix: '-e', suffixMeaning: '动词后缀', suffixMeaningEn: 'verb suffix'
    },
    'chat': {
        prefix: '', prefixMeaning: '', prefixMeaningEn: '',
        root: 'chat', rootMeaning: '聊天', rootMeaningEn: 'chat',
        rootOrigin: '古法语', rootOriginNote: '源自古法语chater，意为聊天',
        suffix: '', suffixMeaning: '', suffixMeaningEn: ''
    },
    'cheap': {
        prefix: '', prefixMeaning: '', prefixMeaningEn: '',
        root: 'cheap', rootMeaning: '便宜', rootMeaningEn: 'cheap',
        rootOrigin: '古英语', rootOriginNote: '源自古英语ceap，意为便宜',
        suffix: '', suffixMeaning: '', suffixMeaningEn: ''
    },
    'cheat': {
        prefix: '', prefixMeaning: '', prefixMeaningEn: '',
        root: 'cheat', rootMeaning: '欺骗', rootMeaningEn: 'cheat',
        rootOrigin: '古法语', rootOriginNote: '源自古法语escheat，意为欺骗',
        suffix: '', suffixMeaning: '', suffixMeaningEn: ''
    },
    'check': {
        prefix: '', prefixMeaning: '', prefixMeaningEn: '',
        root: 'check', rootMeaning: '检查', rootMeaningEn: 'check',
        rootOrigin: '古法语', rootOriginNote: '源自古法语eschequier，意为检查',
        suffix: '', suffixMeaning: '', suffixMeaningEn: ''
    },
    'cheek': {
        prefix: '', prefixMeaning: '', prefixMeaningEn: '',
        root: 'cheek', rootMeaning: '脸颊', rootMeaningEn: 'cheek',
        rootOrigin: '古英语', rootOriginNote: '源自古英语ceace，意为脸颊',
        suffix: '', suffixMeaning: '', suffixMeaningEn: ''
    },
    'cheer': {
        prefix: '', prefixMeaning: '', prefixMeaningEn: '',
        root: 'cheer', rootMeaning: '欢呼', rootMeaningEn: 'cheer',
        rootOrigin: '古法语', rootOriginNote: '源自古法语chere，意为欢呼',
        suffix: '-er', suffixMeaning: '动词后缀', suffixMeaningEn: 'verb suffix'
    },
    'cheese': {
        prefix: '', prefixMeaning: '', prefixMeaningEn: '',
        root: 'cheese', rootMeaning: '奶酪', rootMeaningEn: 'cheese',
        rootOrigin: '古英语', rootOriginNote: '源自古英语cyse，意为奶酪',
        suffix: '', suffixMeaning: '', suffixMeaningEn: ''
    },
    'chef': {
        prefix: '', prefixMeaning: '', prefixMeaningEn: '',
        root: 'chef', rootMeaning: '厨师', rootMeaningEn: 'chef',
        rootOrigin: '法语', rootOriginNote: '源自法语chef de cuisine，意为厨师长',
        suffix: '', suffixMeaning: '', suffixMeaningEn: ''
    },
    'chemical': {
        prefix: 'chem', prefixMeaning: '化学', prefixMeaningEn: 'chemistry',
        root: 'ical', rootMeaning: '形容词后缀', rootMeaningEn: 'adj suffix',
        rootOrigin: '希腊语', rootOriginNote: 'chem(化学)+-ical(形容词后缀)，化学的',
        suffix: '-al', suffixMeaning: '形容词后缀', suffixMeaningEn: 'adj suffix'
    },
    'chemistry': {
        prefix: 'chem', prefixMeaning: '化学', prefixMeaningEn: 'chemistry',
        root: 'istry', rootMeaning: '名词后缀', rootMeaningEn: 'noun suffix',
        rootOrigin: '希腊语', rootOriginNote: 'chem(化学)+-istry(名词后缀)，化学',
        suffix: '-y', suffixMeaning: '名词后缀', suffixMeaningEn: 'noun suffix'
    },
    'cheque': {
        prefix: '', prefixMeaning: '', prefixMeaningEn: '',
        root: 'cheque', rootMeaning: '支票', rootMeaningEn: 'cheque',
        rootOrigin: '古法语', rootOriginNote: '源自古法语eschequier，意为支票',
        suffix: '-ue', suffixMeaning: '名词后缀', suffixMeaningEn: 'noun suffix'
    },
    'cherry': {
        prefix: '', prefixMeaning: '', prefixMeaningEn: '',
        root: 'cherry', rootMeaning: '樱桃', rootMeaningEn: 'cherry',
        rootOrigin: '古法语', rootOriginNote: '源自古法语cherise，意为樱桃',
        suffix: '-y', suffixMeaning: '名词后缀', suffixMeaningEn: 'noun suffix'
    },
    'chess': {
        prefix: '', prefixMeaning: '', prefixMeaningEn: '',
        root: 'chess', rootMeaning: '棋', rootMeaningEn: 'chess',
        rootOrigin: '古法语', rootOriginNote: '源自古法语esches，意为棋',
        suffix: '', suffixMeaning: '', suffixMeaningEn: ''
    },
    'chest': {
        prefix: '', prefixMeaning: '', prefixMeaningEn: '',
        root: 'chest', rootMeaning: '胸', rootMeaningEn: 'chest',
        rootOrigin: '古英语', rootOriginNote: '源自古英语cest，意为胸',
        suffix: '', suffixMeaning: '', suffixMeaningEn: ''
    },
    'chew': {
        prefix: '', prefixMeaning: '', prefixMeaningEn: '',
        root: 'chew', rootMeaning: '咀嚼', rootMeaningEn: 'chew',
        rootOrigin: '古英语', rootOriginNote: '源自古英语ceowan，意为咀嚼',
        suffix: '', suffixMeaning: '', suffixMeaningEn: ''
    },
    'chicken': {
        prefix: 'chick', prefixMeaning: '小鸡', prefixMeaningEn: 'chick',
        root: 'en', rootMeaning: '名词后缀', rootMeaningEn: 'noun suffix',
        rootOrigin: '古英语', rootOriginNote: 'chick(小鸡)+-en(名词后缀)，鸡',
        suffix: '-en', suffixMeaning: '名词后缀', suffixMeaningEn: 'noun suffix'
    },
    'chief': {
        prefix: '', prefixMeaning: '', prefixMeaningEn: '',
        root: 'chief', rootMeaning: '首领', rootMeaningEn: 'chief',
        rootOrigin: '古法语', rootOriginNote: '源自古法语chef，意为首领',
        suffix: '', suffixMeaning: '', suffixMeaningEn: ''
    },
    'child': {
        prefix: '', prefixMeaning: '', prefixMeaningEn: '',
        root: 'child', rootMeaning: '孩子', rootMeaningEn: 'child',
        rootOrigin: '古英语', rootOriginNote: '源自古英语cild，意为孩子',
        suffix: '', suffixMeaning: '', suffixMeaningEn: ''
    },
    'childhood': {
        prefix: 'child', prefixMeaning: '孩子', prefixMeaningEn: 'child',
        root: 'hood', rootMeaning: '名词后缀', rootMeaningEn: 'noun suffix',
        rootOrigin: '古英语', rootOriginNote: 'child(孩子)+-hood(名词后缀)，童年',
        suffix: '-hood', suffixMeaning: '名词后缀，表示状态', suffixMeaningEn: 'noun suffix, state'
    },
    'children': {
        prefix: '', prefixMeaning: '', prefixMeaningEn: '',
        root: 'child', rootMeaning: '孩子', rootMeaningEn: 'child',
        rootOrigin: '古英语', rootOriginNote: 'child的复数形式',
        suffix: '-ren', suffixMeaning: '复数后缀', suffixMeaningEn: 'plural suffix'
    },
    'chill': {
        prefix: '', prefixMeaning: '', prefixMeaningEn: '',
        root: 'chill', rootMeaning: '寒冷', rootMeaningEn: 'chill',
        rootOrigin: '古英语', rootOriginNote: '源自古英语cele，意为寒冷',
        suffix: '', suffixMeaning: '', suffixMeaningEn: ''
    },
    'chimney': {
        prefix: '', prefixMeaning: '', prefixMeaningEn: '',
        root: 'chimney', rootMeaning: '烟囱', rootMeaningEn: 'chimney',
        rootOrigin: '古法语', rootOriginNote: '源自古法语cheminee，意为烟囱',
        suffix: '-ey', suffixMeaning: '名词后缀', suffixMeaningEn: 'noun suffix'
    },
    'chin': {
        prefix: '', prefixMeaning: '', prefixMeaningEn: '',
        root: 'chin', rootMeaning: '下巴', rootMeaningEn: 'chin',
        rootOrigin: '古英语', rootOriginNote: '源自古英语cinn，意为下巴',
        suffix: '', suffixMeaning: '', suffixMeaningEn: ''
    },
    'china': {
        prefix: '', prefixMeaning: '', prefixMeaningEn: '',
        root: 'china', rootMeaning: '瓷器', rootMeaningEn: 'china',
        rootOrigin: '波斯语', rootOriginNote: '源自波斯语，意为瓷器',
        suffix: '-a', suffixMeaning: '名词后缀', suffixMeaningEn: 'noun suffix'
    },
    'chip': {
        prefix: '', prefixMeaning: '', prefixMeaningEn: '',
        root: 'chip', rootMeaning: '碎片', rootMeaningEn: 'chip',
        rootOrigin: '古英语', rootOriginNote: '源自古英语cipp，意为碎片',
        suffix: '', suffixMeaning: '', suffixMeaningEn: ''
    },
    'chocolate': {
        prefix: 'choco', prefixMeaning: '巧克力', prefixMeaningEn: 'chocolate',
        root: 'late', rootMeaning: '名词后缀', rootMeaningEn: 'noun suffix',
        rootOrigin: '西班牙语', rootOriginNote: '源自西班牙语chocolate，意为巧克力',
        suffix: '-ate', suffixMeaning: '名词后缀', suffixMeaningEn: 'noun suffix'
    },
    'choice': {
        prefix: 'cho', prefixMeaning: '选择', prefixMeaningEn: 'choose',
        root: 'ice', rootMeaning: '名词后缀', rootMeaningEn: 'noun suffix',
        rootOrigin: '古法语', rootOriginNote: '源自古法语chois，cho(选择)+-ice(名词后缀)，选择',
        suffix: '-ice', suffixMeaning: '名词后缀', suffixMeaningEn: 'noun suffix'
    },
    'choose': {
        prefix: '', prefixMeaning: '', prefixMeaningEn: '',
        root: 'choose', rootMeaning: '选择', rootMeaningEn: 'choose',
        rootOrigin: '古英语', rootOriginNote: '源自古英语ceosan，意为选择',
        suffix: '', suffixMeaning: '', suffixMeaningEn: ''
    },
    'chop': {
        prefix: '', prefixMeaning: '', prefixMeaningEn: '',
        root: 'chop', rootMeaning: '砍', rootMeaningEn: 'chop',
        rootOrigin: '古英语', rootOriginNote: '源自古英语coppian，意为砍',
        suffix: '', suffixMeaning: '', suffixMeaningEn: ''
    },
    'chord': {
        prefix: '', prefixMeaning: '', prefixMeaningEn: '',
        root: 'chord', rootMeaning: '弦', rootMeaningEn: 'chord',
        rootOrigin: '希腊语', rootOriginNote: '源自希腊语chorde，意为弦',
        suffix: '', suffixMeaning: '', suffixMeaningEn: ''
    },
    'chorus': {
        prefix: '', prefixMeaning: '', prefixMeaningEn: '',
        root: 'chorus', rootMeaning: '合唱', rootMeaningEn: 'chorus',
        rootOrigin: '希腊语', rootOriginNote: '源自希腊语choros，意为合唱',
        suffix: '-us', suffixMeaning: '拉丁名词后缀', suffixMeaningEn: 'Latin noun suffix'
    },
    'chose': {
        prefix: '', prefixMeaning: '', prefixMeaningEn: '',
        root: 'choose', rootMeaning: '选择', rootMeaningEn: 'choose',
        rootOrigin: '古英语', rootOriginNote: 'choose的过去式',
        suffix: '', suffixMeaning: '', suffixMeaningEn: ''
    },
    'chosen': {
        prefix: '', prefixMeaning: '', prefixMeaningEn: '',
        root: 'choose', rootMeaning: '选择', rootMeaningEn: 'choose',
        rootOrigin: '古英语', rootOriginNote: 'choose的过去分词',
        suffix: '-en', suffixMeaning: '过去分词后缀', suffixMeaningEn: 'past participle suffix'
    },
    'christian': {
        prefix: 'Christ', prefixMeaning: '基督', prefixMeaningEn: 'Christ',
        root: 'ian', rootMeaning: '形容词后缀', rootMeaningEn: 'adj suffix',
        rootOrigin: '拉丁语', rootOriginNote: 'Christ(基督)+-ian(形容词后缀)，基督徒',
        suffix: '-ian', suffixMeaning: '形容词后缀，表示信仰', suffixMeaningEn: 'adj suffix, belief'
    },
    'christmas': {
        prefix: 'Christ', prefixMeaning: '基督', prefixMeaningEn: 'Christ',
        root: 'mas', rootMeaning: '节日', rootMeaningEn: 'mass, festival',
        rootOrigin: '古英语', rootOriginNote: 'Christ(基督)+mas(节日)，圣诞节',
        suffix: '', suffixMeaning: '', suffixMeaningEn: ''
    },
    'church': {
        prefix: '', prefixMeaning: '', prefixMeaningEn: '',
        root: 'church', rootMeaning: '教堂', rootMeaningEn: 'church',
        rootOrigin: '古英语', rootOriginNote: '源自古英语cirice，意为教堂',
        suffix: '', suffixMeaning: '', suffixMeaningEn: ''
    }
};

let updated = 0;
words.forEach(w => {
    const wordLower = w.word.toLowerCase();
    if (chWordData[wordLower]) {
        const d = chWordData[wordLower];
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

console.log('Updated ' + updated + ' CH words!');
