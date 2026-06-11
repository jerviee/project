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

const caWordData = {
    'cab': {
        prefix: '', prefixMeaning: '', prefixMeaningEn: '',
        root: 'cab', rootMeaning: '出租车', rootMeaningEn: 'cab, taxi',
        rootOrigin: '法语', rootOriginNote: '源自法语cabriolet，意为轻便马车',
        suffix: '', suffixMeaning: '', suffixMeaningEn: ''
    },
    'cabbage': {
        prefix: 'cab', prefixMeaning: '头', prefixMeaningEn: 'head',
        root: 'bage', rootMeaning: '名词后缀', rootMeaningEn: 'noun suffix',
        rootOrigin: '古法语', rootOriginNote: '源自古法语caboche(头)+-age，卷心菜',
        suffix: '-age', suffixMeaning: '名词后缀', suffixMeaningEn: 'noun suffix'
    },
    'cabin': {
        prefix: '', prefixMeaning: '', prefixMeaningEn: '',
        root: 'cabin', rootMeaning: '小屋', rootMeaningEn: 'cabin, hut',
        rootOrigin: '古法语', rootOriginNote: '源自古法语cabane，意为小屋',
        suffix: '', suffixMeaning: '', suffixMeaningEn: ''
    },
    'cabinet': {
        prefix: 'cabin', prefixMeaning: '小屋', prefixMeaningEn: 'cabin',
        root: 'et', rootMeaning: '名词后缀', rootMeaningEn: 'noun suffix',
        rootOrigin: '古法语', rootOriginNote: 'cabin(小屋)+-et(小)，内阁、柜子',
        suffix: '-et', suffixMeaning: '名词后缀，表示小', suffixMeaningEn: 'noun suffix, small'
    },
    'cable': {
        prefix: '', prefixMeaning: '', prefixMeaningEn: '',
        root: 'cable', rootMeaning: '缆绳', rootMeaningEn: 'cable',
        rootOrigin: '拉丁语', rootOriginNote: '源自拉丁语capulum，意为缆绳',
        suffix: '-e', suffixMeaning: '名词后缀', suffixMeaningEn: 'noun suffix'
    },
    'cactus': {
        prefix: '', prefixMeaning: '', prefixMeaningEn: '',
        root: 'cactus', rootMeaning: '仙人掌', rootMeaningEn: 'cactus',
        rootOrigin: '希腊语', rootOriginNote: '源自希腊语kaktos，意为仙人掌',
        suffix: '-us', suffixMeaning: '拉丁名词后缀', suffixMeaningEn: 'Latin noun suffix'
    },
    'cake': {
        prefix: '', prefixMeaning: '', prefixMeaningEn: '',
        root: 'cake', rootMeaning: '蛋糕', rootMeaningEn: 'cake',
        rootOrigin: '古英语', rootOriginNote: '源自古英语kaka，意为蛋糕',
        suffix: '', suffixMeaning: '', suffixMeaningEn: ''
    },
    'calcium': {
        prefix: 'calc', prefixMeaning: '石灰', prefixMeaningEn: 'lime',
        root: 'ium', rootMeaning: '化学元素后缀', rootMeaningEn: 'chemical suffix',
        rootOrigin: '拉丁语', rootOriginNote: '源自拉丁语calx(石灰)+-ium(元素后缀)，钙元素',
        suffix: '-ium', suffixMeaning: '化学元素后缀', suffixMeaningEn: 'chemical suffix'
    },
    'calculate': {
        prefix: 'calc', prefixMeaning: '石灰、计算', prefixMeaningEn: 'lime, calculate',
        root: 'ulate', rootMeaning: '动词后缀', rootMeaningEn: 'verb suffix',
        rootOrigin: '拉丁语', rootOriginNote: '源自拉丁语calculare，calc(小石子用于计算)+-ulate(动词后缀)，计算',
        suffix: '-ate', suffixMeaning: '动词后缀', suffixMeaningEn: 'verb suffix'
    },
    'calendar': {
        prefix: '', prefixMeaning: '', prefixMeaningEn: '',
        root: 'calend', rootMeaning: '日历', rootMeaningEn: 'calendar',
        rootOrigin: '拉丁语', rootOriginNote: '源自拉丁语calendarium，意为日历账簿',
        suffix: '-ar', suffixMeaning: '名词后缀', suffixMeaningEn: 'noun suffix'
    },
    'calf': {
        prefix: '', prefixMeaning: '', prefixMeaningEn: '',
        root: 'calf', rootMeaning: '小牛', rootMeaningEn: 'calf',
        rootOrigin: '古英语', rootOriginNote: '源自古英语cealf，意为小牛',
        suffix: '', suffixMeaning: '', suffixMeaningEn: ''
    },
    'call': {
        prefix: '', prefixMeaning: '', prefixMeaningEn: '',
        root: 'call', rootMeaning: '呼叫', rootMeaningEn: 'call',
        rootOrigin: '古英语', rootOriginNote: '源自古英语ceallian，意为呼叫',
        suffix: '', suffixMeaning: '', suffixMeaningEn: ''
    },
    'calm': {
        prefix: '', prefixMeaning: '', prefixMeaningEn: '',
        root: 'calm', rootMeaning: '平静', rootMeaningEn: 'calm',
        rootOrigin: '古法语', rootOriginNote: '源自古法语calme，意为平静',
        suffix: '', suffixMeaning: '', suffixMeaningEn: ''
    },
    'came': {
        prefix: '', prefixMeaning: '', prefixMeaningEn: '',
        root: 'come', rootMeaning: '来', rootMeaningEn: 'come',
        rootOrigin: '古英语', rootOriginNote: 'come的过去式',
        suffix: '', suffixMeaning: '', suffixMeaningEn: ''
    },
    'camera': {
        prefix: '', prefixMeaning: '', prefixMeaningEn: '',
        root: 'camera', rootMeaning: '房间、相机', rootMeaningEn: 'camera, room',
        rootOrigin: '拉丁语', rootOriginNote: '源自拉丁语camera obscura(暗室)，相机',
        suffix: '-a', suffixMeaning: '拉丁名词后缀', suffixMeaningEn: 'Latin noun suffix'
    },
    'camp': {
        prefix: '', prefixMeaning: '', prefixMeaningEn: '',
        root: 'camp', rootMeaning: '营地', rootMeaningEn: 'camp',
        rootOrigin: '拉丁语', rootOriginNote: '源自拉丁语campus，意为田野、营地',
        suffix: '', suffixMeaning: '', suffixMeaningEn: ''
    },
    'campaign': {
        prefix: 'camp', prefixMeaning: '营地', prefixMeaningEn: 'camp',
        root: 'aign', rootMeaning: '名词后缀', rootMeaningEn: 'noun suffix',
        rootOrigin: '拉丁语', rootOriginNote: '源自拉丁语campus(营地)+-aign，军事行动、竞选',
        suffix: '-aign', suffixMeaning: '名词后缀', suffixMeaningEn: 'noun suffix'
    },
    'campus': {
        prefix: '', prefixMeaning: '', prefixMeaningEn: '',
        root: 'campus', rootMeaning: '校园', rootMeaningEn: 'campus',
        rootOrigin: '拉丁语', rootOriginNote: '源自拉丁语campus，意为田野、校园',
        suffix: '-us', suffixMeaning: '拉丁名词后缀', suffixMeaningEn: 'Latin noun suffix'
    },
    'can': {
        prefix: '', prefixMeaning: '', prefixMeaningEn: '',
        root: 'can', rootMeaning: '能够、罐', rootMeaningEn: 'can, able',
        rootOrigin: '古英语', rootOriginNote: '源自古英语cunnan(能够)或古英语canne(罐)',
        suffix: '', suffixMeaning: '', suffixMeaningEn: ''
    },
    'canadian': {
        prefix: 'Canada', prefixMeaning: '加拿大', prefixMeaningEn: 'Canada',
        root: 'ian', rootMeaning: '形容词后缀', rootMeaningEn: 'adj suffix',
        rootOrigin: '拉丁语', rootOriginNote: 'Canada(加拿大)+-ian(形容词后缀)，加拿大的',
        suffix: '-ian', suffixMeaning: '形容词后缀，表示国籍', suffixMeaningEn: 'adj suffix, nationality'
    },
    'canal': {
        prefix: '', prefixMeaning: '', prefixMeaningEn: '',
        root: 'canal', rootMeaning: '运河', rootMeaningEn: 'canal',
        rootOrigin: '拉丁语', rootOriginNote: '源自拉丁语canalis，意为运河',
        suffix: '-al', suffixMeaning: '名词后缀', suffixMeaningEn: 'noun suffix'
    },
    'cancel': {
        prefix: '', prefixMeaning: '', prefixMeaningEn: '',
        root: 'cancel', rootMeaning: '取消', rootMeaningEn: 'cancel',
        rootOrigin: '拉丁语', rootOriginNote: '源自拉丁语cancelli(格栅)，意为取消',
        suffix: '', suffixMeaning: '', suffixMeaningEn: ''
    },
    'cancer': {
        prefix: '', prefixMeaning: '', prefixMeaningEn: '',
        root: 'cancer', rootMeaning: '癌症', rootMeaningEn: 'cancer',
        rootOrigin: '拉丁语', rootOriginNote: '源自拉丁语cancer，意为螃蟹、癌症',
        suffix: '-er', suffixMeaning: '名词后缀', suffixMeaningEn: 'noun suffix'
    },
    'candidate': {
        prefix: 'candid', prefixMeaning: '白色、纯洁', prefixMeaningEn: 'white, pure',
        root: 'ate', rootMeaning: '名词后缀', rootMeaningEn: 'noun suffix',
        rootOrigin: '拉丁语', rootOriginNote: '源自拉丁语candidatus，candid(穿白衣的候选人)+-ate，候选人',
        suffix: '-ate', suffixMeaning: '名词后缀，表示人', suffixMeaningEn: 'noun suffix, person'
    },
    'candle': {
        prefix: '', prefixMeaning: '', prefixMeaningEn: '',
        root: 'cand', rootMeaning: '发光', rootMeaningEn: 'shine',
        rootOrigin: '拉丁语', rootOriginNote: '源自拉丁语candela，cand(发光)+-le，蜡烛',
        suffix: '-le', suffixMeaning: '名词后缀', suffixMeaningEn: 'noun suffix'
    },
    'candy': {
        prefix: '', prefixMeaning: '', prefixMeaningEn: '',
        root: 'cand', rootMeaning: '糖', rootMeaningEn: 'sugar',
        rootOrigin: '阿拉伯语', rootOriginNote: '源自阿拉伯语qandi(糖)，糖果',
        suffix: '-y', suffixMeaning: '名词后缀', suffixMeaningEn: 'noun suffix'
    },
    'cannon': {
        prefix: 'can', prefixMeaning: '管', prefixMeaningEn: 'tube',
        root: 'non', rootMeaning: '名词后缀', rootMeaningEn: 'noun suffix',
        rootOrigin: '拉丁语', rootOriginNote: '源自拉丁语canna(管)+-non(大)，大炮',
        suffix: '-on', suffixMeaning: '名词后缀，表示大', suffixMeaningEn: 'noun suffix, large'
    },
    'canon': {
        prefix: '', prefixMeaning: '', prefixMeaningEn: '',
        root: 'canon', rootMeaning: '规则', rootMeaningEn: 'canon, rule',
        rootOrigin: '希腊语', rootOriginNote: '源自希腊语kanon，意为规则、标准',
        suffix: '-on', suffixMeaning: '名词后缀', suffixMeaningEn: 'noun suffix'
    },
    'canvas': {
        prefix: '', prefixMeaning: '', prefixMeaningEn: '',
        root: 'canvas', rootMeaning: '帆布', rootMeaningEn: 'canvas',
        rootOrigin: '拉丁语', rootOriginNote: '源自拉丁语cannabis，意为大麻、帆布',
        suffix: '', suffixMeaning: '', suffixMeaningEn: ''
    },
    'canyon': {
        prefix: '', prefixMeaning: '', prefixMeaningEn: '',
        root: 'canyon', rootMeaning: '峡谷', rootMeaningEn: 'canyon',
        rootOrigin: '西班牙语', rootOriginNote: '源自西班牙语canon，意为峡谷',
        suffix: '', suffixMeaning: '', suffixMeaningEn: ''
    },
    'cap': {
        prefix: '', prefixMeaning: '', prefixMeaningEn: '',
        root: 'cap', rootMeaning: '帽子', rootMeaningEn: 'cap',
        rootOrigin: '拉丁语', rootOriginNote: '源自拉丁语cappa，意为帽子',
        suffix: '', suffixMeaning: '', suffixMeaningEn: ''
    },
    'capable': {
        prefix: 'cap', prefixMeaning: '抓住、能够', prefixMeaningEn: 'take, able',
        root: 'able', rootMeaning: '能够的', rootMeaningEn: 'able',
        rootOrigin: '拉丁语', rootOriginNote: '源自拉丁语capere(抓住)+-able(能够的)，有能力的',
        suffix: '-able', suffixMeaning: '形容词后缀，表示能够', suffixMeaningEn: 'adj suffix, capable'
    },
    'capacity': {
        prefix: 'cap', prefixMeaning: '抓住', prefixMeaningEn: 'take',
        root: 'acity', rootMeaning: '名词后缀', rootMeaningEn: 'noun suffix',
        rootOrigin: '拉丁语', rootOriginNote: '源自拉丁语capacitas，cap(抓住)+-acity(名词后缀)，容量',
        suffix: '-acity', suffixMeaning: '名词后缀，表示性质', suffixMeaningEn: 'noun suffix, quality'
    },
    'cape': {
        prefix: '', prefixMeaning: '', prefixMeaningEn: '',
        root: 'cape', rootMeaning: '披肩、海角', rootMeaningEn: 'cape',
        rootOrigin: '拉丁语', rootOriginNote: '源自拉丁语cappa(披肩)或拉丁语caput(头/海角)',
        suffix: '', suffixMeaning: '', suffixMeaningEn: ''
    },
    'capital': {
        prefix: 'capit', prefixMeaning: '头', prefixMeaningEn: 'head',
        root: 'al', rootMeaning: '形容词后缀', rootMeaningEn: 'adj suffix',
        rootOrigin: '拉丁语', rootOriginNote: '源自拉丁语caput(头)+-al(形容词后缀)，首都、资本',
        suffix: '-al', suffixMeaning: '形容词后缀', suffixMeaningEn: 'adj suffix'
    },
    'captain': {
        prefix: 'capit', prefixMeaning: '头', prefixMeaningEn: 'head',
        root: 'ain', rootMeaning: '名词后缀', rootMeaningEn: 'noun suffix',
        rootOrigin: '拉丁语', rootOriginNote: '源自拉丁语capitanus，capit(头)+-ain(人)，船长、队长',
        suffix: '-ain', suffixMeaning: '名词后缀，表示人', suffixMeaningEn: 'noun suffix, person'
    },
    'capture': {
        prefix: 'cap', prefixMeaning: '抓住', prefixMeaningEn: 'take',
        root: 'ture', rootMeaning: '名词后缀', rootMeaningEn: 'noun suffix',
        rootOrigin: '拉丁语', rootOriginNote: '源自拉丁语captura，cap(抓住)+-ture(名词后缀)，捕获',
        suffix: '-ure', suffixMeaning: '名词后缀', suffixMeaningEn: 'noun suffix'
    },
    'car': {
        prefix: '', prefixMeaning: '', prefixMeaningEn: '',
        root: 'car', rootMeaning: '车', rootMeaningEn: 'car',
        rootOrigin: '拉丁语', rootOriginNote: '源自拉丁语carrus，意为车',
        suffix: '', suffixMeaning: '', suffixMeaningEn: ''
    },
    'carbon': {
        prefix: 'carb', prefixMeaning: '煤', prefixMeaningEn: 'coal',
        root: 'on', rootMeaning: '名词后缀', rootMeaningEn: 'noun suffix',
        rootOrigin: '拉丁语', rootOriginNote: '源自拉丁语carbo(煤)+-on(名词后缀)，碳元素',
        suffix: '-on', suffixMeaning: '名词后缀', suffixMeaningEn: 'noun suffix'
    },
    'card': {
        prefix: '', prefixMeaning: '', prefixMeaningEn: '',
        root: 'card', rootMeaning: '卡片', rootMeaningEn: 'card',
        rootOrigin: '希腊语', rootOriginNote: '源自希腊语charta，意为纸、卡片',
        suffix: '', suffixMeaning: '', suffixMeaningEn: ''
    },
    'cardboard': {
        prefix: 'card', prefixMeaning: '卡片', prefixMeaningEn: 'card',
        root: 'board', rootMeaning: '板', rootMeaningEn: 'board',
        rootOrigin: '希腊语+古英语', rootOriginNote: 'card(卡片)+board(板)，硬纸板',
        suffix: '', suffixMeaning: '', suffixMeaningEn: ''
    },
    'care': {
        prefix: '', prefixMeaning: '', prefixMeaningEn: '',
        root: 'care', rootMeaning: '关心', rootMeaningEn: 'care',
        rootOrigin: '古英语', rootOriginNote: '源自古英语caru，意为关心、忧虑',
        suffix: '', suffixMeaning: '', suffixMeaningEn: ''
    },
    'career': {
        prefix: '', prefixMeaning: '', prefixMeaningEn: '',
        root: 'career', rootMeaning: '职业', rootMeaningEn: 'career',
        rootOrigin: '法语', rootOriginNote: '源自法语carriere，意为道路、职业',
        suffix: '-er', suffixMeaning: '名词后缀', suffixMeaningEn: 'noun suffix'
    },
    'careful': {
        prefix: 'care', prefixMeaning: '关心', prefixMeaningEn: 'care',
        root: 'ful', rootMeaning: '形容词后缀', rootMeaningEn: 'adj suffix',
        rootOrigin: '古英语', rootOriginNote: 'care(关心)+-ful(形容词后缀)，仔细的',
        suffix: '-ful', suffixMeaning: '形容词后缀，表示充满', suffixMeaningEn: 'adj suffix, full'
    },
    'carefully': {
        prefix: 'careful', prefixMeaning: '仔细', prefixMeaningEn: 'careful',
        root: 'ly', rootMeaning: '副词后缀', rootMeaningEn: 'adv suffix',
        rootOrigin: '古英语', rootOriginNote: 'careful(仔细)+-ly(副词后缀)，仔细地',
        suffix: '-ly', suffixMeaning: '副词后缀', suffixMeaningEn: 'adv suffix'
    },
    'careless': {
        prefix: 'care', prefixMeaning: '关心', prefixMeaningEn: 'care',
        root: 'less', rootMeaning: '形容词后缀', rootMeaningEn: 'adj suffix',
        rootOrigin: '古英语', rootOriginNote: 'care(关心)+-less(形容词后缀)，粗心的',
        suffix: '-less', suffixMeaning: '形容词后缀，表示缺乏', suffixMeaningEn: 'adj suffix, lacking'
    },
    'cargo': {
        prefix: 'car', prefixMeaning: '车', prefixMeaningEn: 'car',
        root: 'go', rootMeaning: '货物', rootMeaningEn: 'goods',
        rootOrigin: '西班牙语', rootOriginNote: '源自西班牙语cargo，car(车)+go(装载)，货物',
        suffix: '', suffixMeaning: '', suffixMeaningEn: ''
    },
    'carpenter': {
        prefix: 'carpent', prefixMeaning: '马车制造', prefixMeaningEn: 'carriage maker',
        root: 'er', rootMeaning: '名词后缀', rootMeaningEn: 'noun suffix',
        rootOrigin: '拉丁语', rootOriginNote: '源自拉丁语carpentarius，carpent(马车)+-er(人)，木匠',
        suffix: '-er', suffixMeaning: '名词后缀，表示人', suffixMeaningEn: 'noun suffix, person'
    },
    'carpet': {
        prefix: '', prefixMeaning: '', prefixMeaningEn: '',
        root: 'carpet', rootMeaning: '地毯', rootMeaningEn: 'carpet',
        rootOrigin: '古法语', rootOriginNote: '源自古法语carpite，意为地毯',
        suffix: '', suffixMeaning: '', suffixMeaningEn: ''
    },
    'carriage': {
        prefix: 'car', prefixMeaning: '车', prefixMeaningEn: 'car',
        root: 'iage', rootMeaning: '名词后缀', rootMeaningEn: 'noun suffix',
        rootOrigin: '拉丁语', rootOriginNote: '源自拉丁语carrus(车)+-iage(名词后缀)，马车',
        suffix: '-age', suffixMeaning: '名词后缀', suffixMeaningEn: 'noun suffix'
    },
    'carrier': {
        prefix: 'carry', prefixMeaning: '携带', prefixMeaningEn: 'carry',
        root: 'er', rootMeaning: '名词后缀', rootMeaningEn: 'noun suffix',
        rootOrigin: '古英语', rootOriginNote: 'carry(携带)+-er(人)，运输者',
        suffix: '-er', suffixMeaning: '名词后缀，表示人', suffixMeaningEn: 'noun suffix, person'
    },
    'carrot': {
        prefix: '', prefixMeaning: '', prefixMeaningEn: '',
        root: 'carrot', rootMeaning: '胡萝卜', rootMeaningEn: 'carrot',
        rootOrigin: '拉丁语', rootOriginNote: '源自拉丁语carota，意为胡萝卜',
        suffix: '-ot', suffixMeaning: '名词后缀', suffixMeaningEn: 'noun suffix'
    },
    'carry': {
        prefix: '', prefixMeaning: '', prefixMeaningEn: '',
        root: 'carry', rootMeaning: '携带', rootMeaningEn: 'carry',
        rootOrigin: '古法语', rootOriginNote: '源自古法语carier，意为携带',
        suffix: '-y', suffixMeaning: '动词后缀', suffixMeaningEn: 'verb suffix'
    },
    'cart': {
        prefix: '', prefixMeaning: '', prefixMeaningEn: '',
        root: 'cart', rootMeaning: '马车', rootMeaningEn: 'cart',
        rootOrigin: '拉丁语', rootOriginNote: '源自拉丁语carrus，意为马车',
        suffix: '', suffixMeaning: '', suffixMeaningEn: ''
    },
    'carve': {
        prefix: '', prefixMeaning: '', prefixMeaningEn: '',
        root: 'carve', rootMeaning: '雕刻', rootMeaningEn: 'carve',
        rootOrigin: '古英语', rootOriginNote: '源自古英语ceorfan，意为雕刻',
        suffix: '', suffixMeaning: '', suffixMeaningEn: ''
    },
    'case': {
        prefix: '', prefixMeaning: '', prefixMeaningEn: '',
        root: 'case', rootMeaning: '案例、箱子', rootMeaningEn: 'case',
        rootOrigin: '拉丁语', rootOriginNote: '源自拉丁语casus，意为案例、箱子',
        suffix: '', suffixMeaning: '', suffixMeaningEn: ''
    },
    'cash': {
        prefix: '', prefixMeaning: '', prefixMeaningEn: '',
        root: 'cash', rootMeaning: '现金', rootMeaningEn: 'cash',
        rootOrigin: '法语', rootOriginNote: '源自法语caisse，意为现金箱',
        suffix: '', suffixMeaning: '', suffixMeaningEn: ''
    },
    'cast': {
        prefix: '', prefixMeaning: '', prefixMeaningEn: '',
        root: 'cast', rootMeaning: '投掷', rootMeaningEn: 'cast, throw',
        rootOrigin: '古英语', rootOriginNote: '源自古英语casten，意为投掷',
        suffix: '', suffixMeaning: '', suffixMeaningEn: ''
    },
    'castle': {
        prefix: 'cast', prefixMeaning: '堡垒', prefixMeaningEn: 'fortress',
        root: 'le', rootMeaning: '名词后缀', rootMeaningEn: 'noun suffix',
        rootOrigin: '拉丁语', rootOriginNote: '源自拉丁语castellum，cast(堡垒)+-le(小)，城堡',
        suffix: '-le', suffixMeaning: '名词后缀，表示小', suffixMeaningEn: 'noun suffix, small'
    },
    'casual': {
        prefix: 'cas', prefixMeaning: '偶然', prefixMeaningEn: 'chance',
        root: 'ual', rootMeaning: '形容词后缀', rootMeaningEn: 'adj suffix',
        rootOrigin: '拉丁语', rootOriginNote: '源自拉丁语casualis，cas(偶然)+-ual(形容词后缀)，随意的',
        suffix: '-ual', suffixMeaning: '形容词后缀', suffixMeaningEn: 'adj suffix'
    },
    'casualty': {
        prefix: 'casual', prefixMeaning: '偶然', prefixMeaningEn: 'casual',
        root: 'ty', rootMeaning: '名词后缀', rootMeaningEn: 'noun suffix',
        rootOrigin: '拉丁语', rootOriginNote: 'casual(偶然)+-ty(名词后缀)，伤亡',
        suffix: '-ty', suffixMeaning: '名词后缀', suffixMeaningEn: 'noun suffix'
    },
    'cat': {
        prefix: '', prefixMeaning: '', prefixMeaningEn: '',
        root: 'cat', rootMeaning: '猫', rootMeaningEn: 'cat',
        rootOrigin: '拉丁语', rootOriginNote: '源自拉丁语cattus，意为猫',
        suffix: '', suffixMeaning: '', suffixMeaningEn: ''
    },
    'catalog': {
        prefix: 'cata', prefixMeaning: '向下', prefixMeaningEn: 'down',
        root: 'log', rootMeaning: '说话、列表', rootMeaningEn: 'speech, list',
        rootOrigin: '希腊语', rootOriginNote: '源自希腊语katalogos，cata(向下)+log(列表)，目录',
        suffix: '', suffixMeaning: '', suffixMeaningEn: ''
    },
    'catch': {
        prefix: '', prefixMeaning: '', prefixMeaningEn: '',
        root: 'catch', rootMeaning: '抓住', rootMeaningEn: 'catch',
        rootOrigin: '古法语', rootOriginNote: '源自古法语chacier，意为抓住',
        suffix: '', suffixMeaning: '', suffixMeaningEn: ''
    },
    'category': {
        prefix: 'cata', prefixMeaning: '向下', prefixMeaningEn: 'down',
        root: 'gory', rootMeaning: '指控', rootMeaningEn: 'accusation',
        rootOrigin: '希腊语', rootOriginNote: '源自希腊语kategoria，cata(向下)+gory(指控)，类别',
        suffix: '-y', suffixMeaning: '名词后缀', suffixMeaningEn: 'noun suffix'
    },
    'cater': {
        prefix: '', prefixMeaning: '', prefixMeaningEn: '',
        root: 'cater', rootMeaning: '提供', rootMeaningEn: 'cater',
        rootOrigin: '古法语', rootOriginNote: '源自古法语acater(购买)，提供餐饮',
        suffix: '-er', suffixMeaning: '动词后缀', suffixMeaningEn: 'verb suffix'
    },
    'cathedral': {
        prefix: 'cathedra', prefixMeaning: '座位', prefixMeaningEn: 'seat',
        root: 'l', rootMeaning: '名词后缀', rootMeaningEn: 'noun suffix',
        rootOrigin: '希腊语', rootOriginNote: '源自希腊语kathedra(座位)+-l，大教堂',
        suffix: '-al', suffixMeaning: '名词后缀', suffixMeaningEn: 'noun suffix'
    },
    'catholic': {
        prefix: 'cata', prefixMeaning: '关于', prefixMeaningEn: 'about',
        root: 'holos', rootMeaning: '整体', rootMeaningEn: 'whole',
        rootOrigin: '希腊语', rootOriginNote: '源自希腊语katholikos，cata(关于)+holos(整体)，天主教的',
        suffix: '-ic', suffixMeaning: '形容词后缀', suffixMeaningEn: 'adj suffix'
    },
    'cattle': {
        prefix: 'cat', prefixMeaning: '财产', prefixMeaningEn: 'property',
        root: 'tle', rootMeaning: '名词后缀', rootMeaningEn: 'noun suffix',
        rootOrigin: '古法语', rootOriginNote: '源自古法语catel(财产)，牛群',
        suffix: '-le', suffixMeaning: '名词后缀', suffixMeaningEn: 'noun suffix'
    },
    'cause': {
        prefix: '', prefixMeaning: '', prefixMeaningEn: '',
        root: 'cause', rootMeaning: '原因', rootMeaningEn: 'cause',
        rootOrigin: '拉丁语', rootOriginNote: '源自拉丁语causa，意为原因',
        suffix: '', suffixMeaning: '', suffixMeaningEn: ''
    },
    'caution': {
        prefix: 'caut', prefixMeaning: '小心', prefixMeaningEn: 'careful',
        root: 'ion', rootMeaning: '名词后缀', rootMeaningEn: 'noun suffix',
        rootOrigin: '拉丁语', rootOriginNote: '源自拉丁语cautio，caut(小心)+-ion(名词后缀)，警告',
        suffix: '-ion', suffixMeaning: '名词后缀', suffixMeaningEn: 'noun suffix'
    },
    'cautious': {
        prefix: 'caution', prefixMeaning: '警告', prefixMeaningEn: 'caution',
        root: 'ous', rootMeaning: '形容词后缀', rootMeaningEn: 'adj suffix',
        rootOrigin: '拉丁语', rootOriginNote: 'caution(警告)+-ous(形容词后缀)，谨慎的',
        suffix: '-ous', suffixMeaning: '形容词后缀', suffixMeaningEn: 'adj suffix'
    },
    'cave': {
        prefix: '', prefixMeaning: '', prefixMeaningEn: '',
        root: 'cave', rootMeaning: '洞穴', rootMeaningEn: 'cave',
        rootOrigin: '拉丁语', rootOriginNote: '源自拉丁语cavus，意为洞穴',
        suffix: '', suffixMeaning: '', suffixMeaningEn: ''
    }
};

let updated = 0;
words.forEach(w => {
    const wordLower = w.word.toLowerCase();
    if (caWordData[wordLower]) {
        const d = caWordData[wordLower];
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

console.log('Updated ' + updated + ' CA words!');
