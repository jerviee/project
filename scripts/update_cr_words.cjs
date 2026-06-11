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

const crWordData = {
    'crack': { prefix: '', prefixMeaning: '', prefixMeaningEn: '', root: 'crack', rootMeaning: '破裂', rootMeaningEn: 'to crack, to break', rootOrigin: '古英语', rootOriginNote: '源自古英语cracian', suffix: '', suffixMeaning: '', suffixMeaningEn: '' },
    'cracker': { prefix: '', prefixMeaning: '', prefixMeaningEn: '', root: 'crack', rootMeaning: '破裂', rootMeaningEn: 'to crack', rootOrigin: '古英语', rootOriginNote: 'crack+-er', suffix: '-er', suffixMeaning: '名词后缀', suffixMeaningEn: 'noun suffix' },
    'cradle': { prefix: '', prefixMeaning: '', prefixMeaningEn: '', root: 'cradle', rootMeaning: '摇篮', rootMeaningEn: 'cradle', rootOrigin: '古英语', rootOriginNote: '源自古英语cradol', suffix: '', suffixMeaning: '', suffixMeaningEn: '' },
    'craft': { prefix: '', prefixMeaning: '', prefixMeaningEn: '', root: 'craft', rootMeaning: '技艺', rootMeaningEn: 'craft', rootOrigin: '古英语', rootOriginNote: '源自古英语craeft', suffix: '', suffixMeaning: '', suffixMeaningEn: '' },
    'crash': { prefix: '', prefixMeaning: '', prefixMeaningEn: '', root: 'crash', rootMeaning: '碰撞', rootMeaningEn: 'to crash', rootOrigin: '中古英语', rootOriginNote: '源自中古英语crasshen', suffix: '', suffixMeaning: '', suffixMeaningEn: '' },
    'crate': { prefix: '', prefixMeaning: '', prefixMeaningEn: '', root: 'crate', rootMeaning: '板条箱', rootMeaningEn: 'crate', rootOrigin: '拉丁语', rootOriginNote: '源自拉丁语cratis', suffix: '', suffixMeaning: '', suffixMeaningEn: '' },
    'crawl': { prefix: '', prefixMeaning: '', prefixMeaningEn: '', root: 'crawl', rootMeaning: '爬行', rootMeaningEn: 'to crawl', rootOrigin: '古英语', rootOriginNote: '源自古英语crawlen', suffix: '', suffixMeaning: '', suffixMeaningEn: '' },
    'crazy': { prefix: '', prefixMeaning: '', prefixMeaningEn: '', root: 'crazy', rootMeaning: '疯狂的', rootMeaningEn: 'crazy', rootOrigin: '中古英语', rootOriginNote: '源自中古英语crazed', suffix: '', suffixMeaning: '', suffixMeaningEn: '' },
    'cream': { prefix: '', prefixMeaning: '', prefixMeaningEn: '', root: 'cream', rootMeaning: '奶油', rootMeaningEn: 'cream', rootOrigin: '古法语', rootOriginNote: '源自古法语cresme', suffix: '', suffixMeaning: '', suffixMeaningEn: '' },
    'create': { prefix: '', prefixMeaning: '', prefixMeaningEn: '', root: 'cre', rootMeaning: '创造', rootMeaningEn: 'to create', rootOrigin: '拉丁语', rootOriginNote: '源自拉丁语creare', suffix: '-ate', suffixMeaning: '动词后缀', suffixMeaningEn: 'verb suffix' },
    'creation': { prefix: '', prefixMeaning: '', prefixMeaningEn: '', root: 'cre', rootMeaning: '创造', rootMeaningEn: 'to create', rootOrigin: '拉丁语', rootOriginNote: 'cre+-ation', suffix: '-ation', suffixMeaning: '名词后缀', suffixMeaningEn: 'noun suffix' },
    'creative': { prefix: '', prefixMeaning: '', prefixMeaningEn: '', root: 'cre', rootMeaning: '创造', rootMeaningEn: 'to create', rootOrigin: '拉丁语', rootOriginNote: 'cre+-ative', suffix: '-ative', suffixMeaning: '形容词后缀', suffixMeaningEn: 'adjective suffix' },
    'creativity': { prefix: '', prefixMeaning: '', prefixMeaningEn: '', root: 'cre', rootMeaning: '创造', rootMeaningEn: 'to create', rootOrigin: '拉丁语', rootOriginNote: 'cre+-ativity', suffix: '-ivity', suffixMeaning: '名词后缀', suffixMeaningEn: 'noun suffix' },
    'creator': { prefix: '', prefixMeaning: '', prefixMeaningEn: '', root: 'cre', rootMeaning: '创造', rootMeaningEn: 'to create', rootOrigin: '拉丁语', rootOriginNote: 'cre+-ator', suffix: '-ator', suffixMeaning: '名词后缀', suffixMeaningEn: 'noun suffix' },
    'creature': { prefix: '', prefixMeaning: '', prefixMeaningEn: '', root: 'cre', rootMeaning: '创造', rootMeaningEn: 'to create', rootOrigin: '拉丁语', rootOriginNote: 'cre+-ature', suffix: '-ure', suffixMeaning: '名词后缀', suffixMeaningEn: 'noun suffix' },
    'credibility': { prefix: '', prefixMeaning: '', prefixMeaningEn: '', root: 'cred', rootMeaning: '相信', rootMeaningEn: 'to believe', rootOrigin: '拉丁语', rootOriginNote: 'cred+-ibility', suffix: '-ibility', suffixMeaning: '名词后缀', suffixMeaningEn: 'noun suffix' },
    'credible': { prefix: '', prefixMeaning: '', prefixMeaningEn: '', root: 'cred', rootMeaning: '相信', rootMeaningEn: 'to believe', rootOrigin: '拉丁语', rootOriginNote: 'cred+-ible', suffix: '-ible', suffixMeaning: '形容词后缀', suffixMeaningEn: 'adjective suffix' },
    'credit': { prefix: '', prefixMeaning: '', prefixMeaningEn: '', root: 'cred', rootMeaning: '相信', rootMeaningEn: 'to believe', rootOrigin: '拉丁语', rootOriginNote: '源自拉丁语creditum', suffix: '-it', suffixMeaning: '名词后缀', suffixMeaningEn: 'noun suffix' },
    'creek': { prefix: '', prefixMeaning: '', prefixMeaningEn: '', root: 'creek', rootMeaning: '小溪', rootMeaningEn: 'creek', rootOrigin: '中古英语', rootOriginNote: '源自中古英语crik', suffix: '', suffixMeaning: '', suffixMeaningEn: '' },
    'creep': { prefix: '', prefixMeaning: '', prefixMeaningEn: '', root: 'creep', rootMeaning: '爬行', rootMeaningEn: 'to creep', rootOrigin: '古英语', rootOriginNote: '源自古英语creopan', suffix: '', suffixMeaning: '', suffixMeaningEn: '' },
    'crew': { prefix: '', prefixMeaning: '', prefixMeaningEn: '', root: 'crew', rootMeaning: '船员', rootMeaningEn: 'crew', rootOrigin: '古法语', rootOriginNote: '源自古法语creue', suffix: '', suffixMeaning: '', suffixMeaningEn: '' },
    'cricket': { prefix: '', prefixMeaning: '', prefixMeaningEn: '', root: 'cricket', rootMeaning: '蟋蟀', rootMeaningEn: 'cricket', rootOrigin: '古法语', rootOriginNote: '源自古法语criquet', suffix: '', suffixMeaning: '', suffixMeaningEn: '' },
    'crime': { prefix: '', prefixMeaning: '', prefixMeaningEn: '', root: 'crim', rootMeaning: '罪行', rootMeaningEn: 'crime', rootOrigin: '拉丁语', rootOriginNote: '源自拉丁语crimen', suffix: '-e', suffixMeaning: '名词后缀', suffixMeaningEn: 'noun suffix' },
    'criminal': { prefix: '', prefixMeaning: '', prefixMeaningEn: '', root: 'crim', rootMeaning: '罪行', rootMeaningEn: 'crime', rootOrigin: '拉丁语', rootOriginNote: 'crim+-inal', suffix: '-inal', suffixMeaning: '形容词后缀', suffixMeaningEn: 'adjective suffix' },
    'cripple': { prefix: '', prefixMeaning: '', prefixMeaningEn: '', root: 'cripp', rootMeaning: '跛', rootMeaningEn: 'to limp', rootOrigin: '古英语', rootOriginNote: '源自古英语crypel', suffix: '-le', suffixMeaning: '名词后缀', suffixMeaningEn: 'noun suffix' },
    'crisis': { prefix: '', prefixMeaning: '', prefixMeaningEn: '', root: 'cris', rootMeaning: '判断', rootMeaningEn: 'to judge', rootOrigin: '希腊语', rootOriginNote: '源自希腊语krisis', suffix: '-is', suffixMeaning: '名词后缀', suffixMeaningEn: 'noun suffix' },
    'crisp': { prefix: '', prefixMeaning: '', prefixMeaningEn: '', root: 'crisp', rootMeaning: '脆的', rootMeaningEn: 'crisp', rootOrigin: '拉丁语', rootOriginNote: '源自拉丁语crispus', suffix: '', suffixMeaning: '', suffixMeaningEn: '' },
    'criteria': { prefix: '', prefixMeaning: '', prefixMeaningEn: '', root: 'crit', rootMeaning: '判断', rootMeaningEn: 'to judge', rootOrigin: '希腊语', rootOriginNote: '源自希腊语kriterion', suffix: '-ia', suffixMeaning: '名词后缀', suffixMeaningEn: 'noun suffix' },
    'critic': { prefix: '', prefixMeaning: '', prefixMeaningEn: '', root: 'crit', rootMeaning: '判断', rootMeaningEn: 'to judge', rootOrigin: '希腊语', rootOriginNote: 'crit+-ic', suffix: '-ic', suffixMeaning: '名词后缀', suffixMeaningEn: 'noun suffix' },
    'critical': { prefix: '', prefixMeaning: '', prefixMeaningEn: '', root: 'crit', rootMeaning: '判断', rootMeaningEn: 'to judge', rootOrigin: '希腊语', rootOriginNote: 'crit+-ical', suffix: '-ical', suffixMeaning: '形容词后缀', suffixMeaningEn: 'adjective suffix' },
    'critically': { prefix: '', prefixMeaning: '', prefixMeaningEn: '', root: 'crit', rootMeaning: '判断', rootMeaningEn: 'to judge', rootOrigin: '希腊语', rootOriginNote: 'crit+-ically', suffix: '-ly', suffixMeaning: '副词后缀', suffixMeaningEn: 'adverb suffix' },
    'criticism': { prefix: '', prefixMeaning: '', prefixMeaningEn: '', root: 'crit', rootMeaning: '判断', rootMeaningEn: 'to judge', rootOrigin: '希腊语', rootOriginNote: 'crit+-icism', suffix: '-icism', suffixMeaning: '名词后缀', suffixMeaningEn: 'noun suffix' },
    'criticize': { prefix: '', prefixMeaning: '', prefixMeaningEn: '', root: 'crit', rootMeaning: '判断', rootMeaningEn: 'to judge', rootOrigin: '希腊语', rootOriginNote: 'crit+-ic+-ize', suffix: '-ize', suffixMeaning: '动词后缀', suffixMeaningEn: 'verb suffix' },
    'crocodile': { prefix: '', prefixMeaning: '', prefixMeaningEn: '', root: 'crocodile', rootMeaning: '鳄鱼', rootMeaningEn: 'crocodile', rootOrigin: '希腊语', rootOriginNote: '源自希腊语krokodilos', suffix: '', suffixMeaning: '', suffixMeaningEn: '' },
    'crop': { prefix: '', prefixMeaning: '', prefixMeaningEn: '', root: 'crop', rootMeaning: '庄稼', rootMeaningEn: 'crop', rootOrigin: '古英语', rootOriginNote: '源自古英语cropp', suffix: '', suffixMeaning: '', suffixMeaningEn: '' },
    'cross': { prefix: '', prefixMeaning: '', prefixMeaningEn: '', root: 'cross', rootMeaning: '十字架', rootOrigin: '古英语', rootOriginNote: '源自古英语cros', suffix: '', suffixMeaning: '', suffixMeaningEn: '' },
    'crowd': { prefix: '', prefixMeaning: '', prefixMeaningEn: '', root: 'crowd', rootMeaning: '人群', rootMeaningEn: 'crowd', rootOrigin: '古英语', rootOriginNote: '源自古英语crudan', suffix: '', suffixMeaning: '', suffixMeaningEn: '' },
    'crown': { prefix: '', prefixMeaning: '', prefixMeaningEn: '', root: 'crown', rootMeaning: '王冠', rootMeaningEn: 'crown', rootOrigin: '古法语', rootOriginNote: '源自古法语corone', suffix: '', suffixMeaning: '', suffixMeaningEn: '' },
    'crude': { prefix: '', prefixMeaning: '', prefixMeaningEn: '', root: 'crud', rootMeaning: '原始的', rootMeaningEn: 'raw', rootOrigin: '拉丁语', rootOriginNote: '源自拉丁语crudus', suffix: '-e', suffixMeaning: '形容词后缀', suffixMeaningEn: 'adjective suffix' },
    'cruel': { prefix: '', prefixMeaning: '', prefixMeaningEn: '', root: 'cruel', rootMeaning: '残忍的', rootMeaningEn: 'cruel', rootOrigin: '古法语', rootOriginNote: '源自古法语crual', suffix: '', suffixMeaning: '', suffixMeaningEn: '' },
    'crush': { prefix: '', prefixMeaning: '', prefixMeaningEn: '', root: 'crush', rootMeaning: '压碎', rootMeaningEn: 'to crush', rootOrigin: '古英语', rootOriginNote: '源自古英语crushen', suffix: '', suffixMeaning: '', suffixMeaningEn: '' },
    'crystal': { prefix: '', prefixMeaning: '', prefixMeaningEn: '', root: 'cryst', rootMeaning: '水晶', rootMeaningEn: 'crystal', rootOrigin: '希腊语', rootOriginNote: '源自希腊语krystallos', suffix: '-al', suffixMeaning: '名词后缀', suffixMeaningEn: 'noun suffix' }
};

let updated = 0;
words.forEach(w => {
    const wordLower = w.word.toLowerCase();
    if (crWordData[wordLower]) {
        const d = crWordData[wordLower];
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

console.log('Updated ' + updated + ' CR words!');
