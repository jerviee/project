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

const clWordData = {
    'claim': {
        prefix: '', prefixMeaning: '', prefixMeaningEn: '',
        root: 'claim', rootMeaning: '声称', rootMeaningEn: 'claim',
        rootOrigin: '拉丁语', rootOriginNote: '源自拉丁语clamare，意为声称',
        suffix: '', suffixMeaning: '', suffixMeaningEn: ''
    },
    'clap': {
        prefix: '', prefixMeaning: '', prefixMeaningEn: '',
        root: 'clap', rootMeaning: '拍手', rootMeaningEn: 'clap',
        rootOrigin: '古英语', rootOriginNote: '源自古英语clappian，意为拍手',
        suffix: '', suffixMeaning: '', suffixMeaningEn: ''
    },
    'clarify': {
        prefix: 'clar', prefixMeaning: '清楚', prefixMeaningEn: 'clear',
        root: 'ify', rootMeaning: '动词后缀', rootMeaningEn: 'verb suffix',
        rootOrigin: '拉丁语', rootOriginNote: 'clar(清楚)+-ify(动词后缀)，澄清',
        suffix: '-ify', suffixMeaning: '动词后缀', suffixMeaningEn: 'verb suffix'
    },
    'class': {
        prefix: '', prefixMeaning: '', prefixMeaningEn: '',
        root: 'class', rootMeaning: '班级', rootMeaningEn: 'class',
        rootOrigin: '拉丁语', rootOriginNote: '源自拉丁语classis，意为班级',
        suffix: '', suffixMeaning: '', suffixMeaningEn: ''
    },
    'classic': {
        prefix: 'class', prefixMeaning: '班级', prefixMeaningEn: 'class',
        root: 'ic', rootMeaning: '形容词后缀', rootMeaningEn: 'adj suffix',
        rootOrigin: '拉丁语', rootOriginNote: 'class(班级)+-ic(形容词后缀)，经典的',
        suffix: '-ic', suffixMeaning: '形容词后缀', suffixMeaningEn: 'adj suffix'
    },
    'classical': {
        prefix: 'classic', prefixMeaning: '经典', prefixMeaningEn: 'classic',
        root: 'al', rootMeaning: '形容词后缀', rootMeaningEn: 'adj suffix',
        rootOrigin: '拉丁语', rootOriginNote: 'classic(经典)+-al(形容词后缀)，古典的',
        suffix: '-al', suffixMeaning: '形容词后缀', suffixMeaningEn: 'adj suffix'
    },
    'classification': {
        prefix: 'class', prefixMeaning: '班级', prefixMeaningEn: 'class',
        root: 'ification', rootMeaning: '名词后缀', rootMeaningEn: 'noun suffix',
        rootOrigin: '拉丁语', rootOriginNote: 'class(班级)+-ification(名词后缀)，分类',
        suffix: '-ation', suffixMeaning: '名词后缀', suffixMeaningEn: 'noun suffix'
    },
    'classify': {
        prefix: 'class', prefixMeaning: '班级', prefixMeaningEn: 'class',
        root: 'ify', rootMeaning: '动词后缀', rootMeaningEn: 'verb suffix',
        rootOrigin: '拉丁语', rootOriginNote: 'class(班级)+-ify(动词后缀)，分类',
        suffix: '-ify', suffixMeaning: '动词后缀', suffixMeaningEn: 'verb suffix'
    },
    'classmate': {
        prefix: 'class', prefixMeaning: '班级', prefixMeaningEn: 'class',
        root: 'mate', rootMeaning: '伙伴', rootMeaningEn: 'mate',
        rootOrigin: '拉丁语+古英语', rootOriginNote: 'class(班级)+mate(伙伴)，同学',
        suffix: '', suffixMeaning: '', suffixMeaningEn: ''
    },
    'classroom': {
        prefix: 'class', prefixMeaning: '班级', prefixMeaningEn: 'class',
        root: 'room', rootMeaning: '房间', rootMeaningEn: 'room',
        rootOrigin: '拉丁语+古英语', rootOriginNote: 'class(班级)+room(房间)，教室',
        suffix: '', suffixMeaning: '', suffixMeaningEn: ''
    },
    'clause': {
        prefix: '', prefixMeaning: '', prefixMeaningEn: '',
        root: 'clause', rootMeaning: '条款', rootMeaningEn: 'clause',
        rootOrigin: '拉丁语', rootOriginNote: '源自拉丁语clausa，意为条款',
        suffix: '-e', suffixMeaning: '名词后缀', suffixMeaningEn: 'noun suffix'
    },
    'claw': {
        prefix: '', prefixMeaning: '', prefixMeaningEn: '',
        root: 'claw', rootMeaning: '爪', rootMeaningEn: 'claw',
        rootOrigin: '古英语', rootOriginNote: '源自古英语clawu，意为爪',
        suffix: '', suffixMeaning: '', suffixMeaningEn: ''
    },
    'clay': {
        prefix: '', prefixMeaning: '', prefixMeaningEn: '',
        root: 'clay', rootMeaning: '黏土', rootMeaningEn: 'clay',
        rootOrigin: '古英语', rootOriginNote: '源自古英语claeg，意为黏土',
        suffix: '', suffixMeaning: '', suffixMeaningEn: ''
    },
    'clean': {
        prefix: '', prefixMeaning: '', prefixMeaningEn: '',
        root: 'clean', rootMeaning: '清洁', rootMeaningEn: 'clean',
        rootOrigin: '古英语', rootOriginNote: '源自古英语claene，意为清洁',
        suffix: '', suffixMeaning: '', suffixMeaningEn: ''
    },
    'clear': {
        prefix: '', prefixMeaning: '', prefixMeaningEn: '',
        root: 'clear', rootMeaning: '清楚', rootMeaningEn: 'clear',
        rootOrigin: '拉丁语', rootOriginNote: '源自拉丁语clarus，意为清楚',
        suffix: '', suffixMeaning: '', suffixMeaningEn: ''
    },
    'clearly': {
        prefix: 'clear', prefixMeaning: '清楚', prefixMeaningEn: 'clear',
        root: 'ly', rootMeaning: '副词后缀', rootMeaningEn: 'adv suffix',
        rootOrigin: '拉丁语', rootOriginNote: 'clear(清楚)+-ly(副词后缀)，清楚地',
        suffix: '-ly', suffixMeaning: '副词后缀', suffixMeaningEn: 'adv suffix'
    },
    'clerk': {
        prefix: '', prefixMeaning: '', prefixMeaningEn: '',
        root: 'clerk', rootMeaning: '职员', rootMeaningEn: 'clerk',
        rootOrigin: '古法语', rootOriginNote: '源自古法语clerc，意为职员',
        suffix: '', suffixMeaning: '', suffixMeaningEn: ''
    },
    'clever': {
        prefix: '', prefixMeaning: '', prefixMeaningEn: '',
        root: 'clever', rootMeaning: '聪明', rootMeaningEn: 'clever',
        rootOrigin: '古英语', rootOriginNote: '源自古英语claever，意为聪明',
        suffix: '-er', suffixMeaning: '形容词后缀', suffixMeaningEn: 'adj suffix'
    },
    'click': {
        prefix: '', prefixMeaning: '', prefixMeaningEn: '',
        root: 'click', rootMeaning: '点击', rootMeaningEn: 'click',
        rootOrigin: '古法语', rootOriginNote: '源自古法语cliquet，意为点击',
        suffix: '', suffixMeaning: '', suffixMeaningEn: ''
    },
    'client': {
        prefix: '', prefixMeaning: '', prefixMeaningEn: '',
        root: 'client', rootMeaning: '客户', rootMeaningEn: 'client',
        rootOrigin: '拉丁语', rootOriginNote: '源自拉丁语cliens，意为客户',
        suffix: '-ent', suffixMeaning: '名词后缀，表示人', suffixMeaningEn: 'noun suffix, person'
    },
    'cliff': {
        prefix: '', prefixMeaning: '', prefixMeaningEn: '',
        root: 'cliff', rootMeaning: '悬崖', rootMeaningEn: 'cliff',
        rootOrigin: '古英语', rootOriginNote: '源自古英语clif，意为悬崖',
        suffix: '', suffixMeaning: '', suffixMeaningEn: ''
    },
    'climate': {
        prefix: 'clim', prefixMeaning: '倾斜', prefixMeaningEn: 'slope',
        root: 'ate', rootMeaning: '名词后缀', rootMeaningEn: 'noun suffix',
        rootOrigin: '希腊语', rootOriginNote: '源自希腊语klima，clim(倾斜)+-ate(名词后缀)，气候',
        suffix: '-ate', suffixMeaning: '名词后缀', suffixMeaningEn: 'noun suffix'
    },
    'climb': {
        prefix: '', prefixMeaning: '', prefixMeaningEn: '',
        root: 'climb', rootMeaning: '爬', rootMeaningEn: 'climb',
        rootOrigin: '古英语', rootOriginNote: '源自古英语climban，意为爬',
        suffix: '', suffixMeaning: '', suffixMeaningEn: ''
    },
    'clinic': {
        prefix: 'clin', prefixMeaning: '倾斜', prefixMeaningEn: 'slope',
        root: 'ic', rootMeaning: '名词后缀', rootMeaningEn: 'noun suffix',
        rootOrigin: '希腊语', rootOriginNote: '源自希腊语klinikos，clin(倾斜)+-ic(名词后缀)，诊所',
        suffix: '-ic', suffixMeaning: '名词后缀', suffixMeaningEn: 'noun suffix'
    },
    'clinical': {
        prefix: 'clinic', prefixMeaning: '诊所', prefixMeaningEn: 'clinic',
        root: 'al', rootMeaning: '形容词后缀', rootMeaningEn: 'adj suffix',
        rootOrigin: '希腊语', rootOriginNote: 'clinic(诊所)+-al(形容词后缀)，临床的',
        suffix: '-al', suffixMeaning: '形容词后缀', suffixMeaningEn: 'adj suffix'
    },
    'clip': {
        prefix: '', prefixMeaning: '', prefixMeaningEn: '',
        root: 'clip', rootMeaning: '夹子', rootMeaningEn: 'clip',
        rootOrigin: '古英语', rootOriginNote: '源自古英语clyppan，意为夹子',
        suffix: '', suffixMeaning: '', suffixMeaningEn: ''
    },
    'clock': {
        prefix: '', prefixMeaning: '', prefixMeaningEn: '',
        root: 'clock', rootMeaning: '钟', rootMeaningEn: 'clock',
        rootOrigin: '古法语', rootOriginNote: '源自古法语cloke，意为钟',
        suffix: '', suffixMeaning: '', suffixMeaningEn: ''
    },
    'close': {
        prefix: 'clos', prefixMeaning: '关闭', prefixMeaningEn: 'close',
        root: 'e', rootMeaning: '动词后缀', rootMeaningEn: 'verb suffix',
        rootOrigin: '拉丁语', rootOriginNote: '源自拉丁语clausus，clos(关闭)+-e(动词后缀)，关闭',
        suffix: '-e', suffixMeaning: '动词后缀', suffixMeaningEn: 'verb suffix'
    },
    'closely': {
        prefix: 'close', prefixMeaning: '关闭', prefixMeaningEn: 'close',
        root: 'ly', rootMeaning: '副词后缀', rootMeaningEn: 'adv suffix',
        rootOrigin: '拉丁语', rootOriginNote: 'close(关闭)+-ly(副词后缀)，紧密地',
        suffix: '-ly', suffixMeaning: '副词后缀', suffixMeaningEn: 'adv suffix'
    },
    'cloth': {
        prefix: '', prefixMeaning: '', prefixMeaningEn: '',
        root: 'cloth', rootMeaning: '布', rootMeaningEn: 'cloth',
        rootOrigin: '古英语', rootOriginNote: '源自古英语claeth，意为布',
        suffix: '', suffixMeaning: '', suffixMeaningEn: ''
    },
    'clothes': {
        prefix: 'cloth', prefixMeaning: '布', prefixMeaningEn: 'cloth',
        root: 'es', rootMeaning: '复数后缀', rootMeaningEn: 'plural suffix',
        rootOrigin: '古英语', rootOriginNote: 'cloth(布)+-es(复数后缀)，衣服',
        suffix: '-es', suffixMeaning: '复数后缀', suffixMeaningEn: 'plural suffix'
    },
    'clothing': {
        prefix: 'cloth', prefixMeaning: '布', prefixMeaningEn: 'cloth',
        root: 'ing', rootMeaning: '名词后缀', rootMeaningEn: 'noun suffix',
        rootOrigin: '古英语', rootOriginNote: 'cloth(布)+-ing(名词后缀)，服装',
        suffix: '-ing', suffixMeaning: '名词后缀', suffixMeaningEn: 'noun suffix'
    },
    'cloud': {
        prefix: '', prefixMeaning: '', prefixMeaningEn: '',
        root: 'cloud', rootMeaning: '云', rootMeaningEn: 'cloud',
        rootOrigin: '古英语', rootOriginNote: '源自古英语clud，意为云',
        suffix: '', suffixMeaning: '', suffixMeaningEn: ''
    },
    'cloudy': {
        prefix: 'cloud', prefixMeaning: '云', prefixMeaningEn: 'cloud',
        root: 'y', rootMeaning: '形容词后缀', rootMeaningEn: 'adj suffix',
        rootOrigin: '古英语', rootOriginNote: 'cloud(云)+-y(形容词后缀)，多云的',
        suffix: '-y', suffixMeaning: '形容词后缀', suffixMeaningEn: 'adj suffix'
    },
    'club': {
        prefix: '', prefixMeaning: '', prefixMeaningEn: '',
        root: 'club', rootMeaning: '俱乐部', rootMeaningEn: 'club',
        rootOrigin: '古英语', rootOriginNote: '源自古英语clubbe，意为俱乐部',
        suffix: '', suffixMeaning: '', suffixMeaningEn: ''
    },
    'clue': {
        prefix: '', prefixMeaning: '', prefixMeaningEn: '',
        root: 'clue', rootMeaning: '线索', rootMeaningEn: 'clue',
        rootOrigin: '古英语', rootOriginNote: '源自古英语clew，意为线索',
        suffix: '-ue', suffixMeaning: '名词后缀', suffixMeaningEn: 'noun suffix'
    },
    'cluster': {
        prefix: 'clust', prefixMeaning: '聚集', prefixMeaningEn: 'gather',
        root: 'er', rootMeaning: '名词后缀', rootMeaningEn: 'noun suffix',
        rootOrigin: '古英语', rootOriginNote: 'clust(聚集)+-er(名词后缀)，群',
        suffix: '-er', suffixMeaning: '名词后缀', suffixMeaningEn: 'noun suffix'
    }
};

let updated = 0;
words.forEach(w => {
    const wordLower = w.word.toLowerCase();
    if (clWordData[wordLower]) {
        const d = clWordData[wordLower];
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

console.log('Updated ' + updated + ' CL words!');
