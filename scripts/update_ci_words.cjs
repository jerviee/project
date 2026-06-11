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

const ciWordData = {
    'cigar': {
        prefix: '', prefixMeaning: '', prefixMeaningEn: '',
        root: 'cigar', rootMeaning: '雪茄', rootMeaningEn: 'cigar',
        rootOrigin: '西班牙语', rootOriginNote: '源自西班牙语cigarro，意为雪茄',
        suffix: '-ar', suffixMeaning: '名词后缀', suffixMeaningEn: 'noun suffix'
    },
    'cigarette': {
        prefix: 'cigar', prefixMeaning: '雪茄', prefixMeaningEn: 'cigar',
        root: 'ette', rootMeaning: '名词后缀，表示小', rootMeaningEn: 'noun suffix, small',
        rootOrigin: '西班牙语', rootOriginNote: 'cigar(雪茄)+-ette(小)，香烟',
        suffix: '-ette', suffixMeaning: '名词后缀，表示小', suffixMeaningEn: 'noun suffix, small'
    },
    'cinema': {
        prefix: 'cin', prefixMeaning: '运动', prefixMeaningEn: 'motion',
        root: 'ema', rootMeaning: '名词后缀', rootMeaningEn: 'noun suffix',
        rootOrigin: '希腊语', rootOriginNote: '源自希腊语kinema，cin(运动)+-ema(名词后缀)，电影院',
        suffix: '-a', suffixMeaning: '拉丁名词后缀', suffixMeaningEn: 'Latin noun suffix'
    },
    'circle': {
        prefix: 'circ', prefixMeaning: '圆', prefixMeaningEn: 'circle',
        root: 'le', rootMeaning: '名词后缀', rootMeaningEn: 'noun suffix',
        rootOrigin: '拉丁语', rootOriginNote: '源自拉丁语circulus，circ(圆)+-le(名词后缀)，圆圈',
        suffix: '-le', suffixMeaning: '名词后缀，表示小', suffixMeaningEn: 'noun suffix, small'
    },
    'circuit': {
        prefix: 'circ', prefixMeaning: '圆', prefixMeaningEn: 'circle',
        root: 'uit', rootMeaning: '名词后缀', rootMeaningEn: 'noun suffix',
        rootOrigin: '拉丁语', rootOriginNote: '源自拉丁语circuitus，circ(圆)+-uit(名词后缀)，电路',
        suffix: '-it', suffixMeaning: '名词后缀', suffixMeaningEn: 'noun suffix'
    },
    'circular': {
        prefix: 'circle', prefixMeaning: '圆', prefixMeaningEn: 'circle',
        root: 'ar', rootMeaning: '形容词后缀', rootMeaningEn: 'adj suffix',
        rootOrigin: '拉丁语', rootOriginNote: 'circle(圆)+-ar(形容词后缀)，圆形的',
        suffix: '-ar', suffixMeaning: '形容词后缀', suffixMeaningEn: 'adj suffix'
    },
    'circus': {
        prefix: 'circ', prefixMeaning: '圆', prefixMeaningEn: 'circle',
        root: 'us', rootMeaning: '拉丁名词后缀', rootMeaningEn: 'Latin noun suffix',
        rootOrigin: '拉丁语', rootOriginNote: '源自拉丁语circus，circ(圆)+-us(名词后缀)，马戏团',
        suffix: '-us', suffixMeaning: '拉丁名词后缀', suffixMeaningEn: 'Latin noun suffix'
    },
    'citizen': {
        prefix: 'city', prefixMeaning: '城市', prefixMeaningEn: 'city',
        root: 'zen', rootMeaning: '名词后缀', rootMeaningEn: 'noun suffix',
        rootOrigin: '古法语', rootOriginNote: 'city(城市)+-zen(名词后缀)，公民',
        suffix: '-en', suffixMeaning: '名词后缀，表示人', suffixMeaningEn: 'noun suffix, person'
    },
    'city': {
        prefix: '', prefixMeaning: '', prefixMeaningEn: '',
        root: 'city', rootMeaning: '城市', rootMeaningEn: 'city',
        rootOrigin: '拉丁语', rootOriginNote: '源自拉丁语civitas，意为城市',
        suffix: '-y', suffixMeaning: '名词后缀', suffixMeaningEn: 'noun suffix'
    },
    'civil': {
        prefix: 'civ', prefixMeaning: '公民', prefixMeaningEn: 'citizen',
        root: 'il', rootMeaning: '形容词后缀', rootMeaningEn: 'adj suffix',
        rootOrigin: '拉丁语', rootOriginNote: '源自拉丁语civilis，civ(公民)+-il(形容词后缀)，公民的',
        suffix: '-il', suffixMeaning: '形容词后缀', suffixMeaningEn: 'adj suffix'
    },
    'civilization': {
        prefix: 'civil', prefixMeaning: '公民', prefixMeaningEn: 'civil',
        root: 'ization', rootMeaning: '名词后缀', rootMeaningEn: 'noun suffix',
        rootOrigin: '拉丁语', rootOriginNote: 'civil(公民)+-ization(名词后缀)，文明',
        suffix: '-ation', suffixMeaning: '名词后缀', suffixMeaningEn: 'noun suffix'
    }
};

let updated = 0;
words.forEach(w => {
    const wordLower = w.word.toLowerCase();
    if (ciWordData[wordLower]) {
        const d = ciWordData[wordLower];
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

console.log('Updated ' + updated + ' CI words!');
