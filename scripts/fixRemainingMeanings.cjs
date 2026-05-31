const fs = require('fs');

const prefixMeanings = {
  'ab': '离开；脱离；相反',
  'ad': '向；朝；增加',
  'anti': '反对；相反',
  'auto': '自己；自动',
  'be': '使；在；周围',
  'bi': '两；双；二',
  'co': '共同；一起',
  'com': '共同；一起',
  'con': '共同；一起',
  'de': '向下；相反；离开',
  'dis': '不；相反；离开',
  'ex': '向外；离开；前任',
  'extra': '额外；超过',
  'fore': '前；先',
  'im': '不；向内',
  'in': '不；向内',
  'inter': '在...之间；相互',
  'mis': '错误；不',
  'non': '不；非',
  'out': '向外；超过',
  'over': '过度；在...之上',
  'pre': '前；先',
  're': '再；又；回',
  'semi': '半',
  'sub': '下；在...下面',
  'super': '超；上',
  'trans': '跨越；横穿',
  'un': '不；相反',
  'under': '在...下面；低于',
  'uni': '一；单'
};

const suffixMeanings = {
  'able': '能...的；可...的',
  'al': '有...性质的；属于...的',
  'ance': '行为；过程；状态',
  'ant': '者；者；剂',
  'ary': '与...有关的；从事...的',
  'ate': '使...；做...；有...性质',
  'ion': '行为；过程；结果',
  'ive': '有...性质的；有...倾向的',
  'ize': '使...；...化',
  'ful': '充满...的；具有...性质的',
  'less': '没有...的；无...的',
  'ly': '副词后缀；形容词后缀',
  'ment': '行为；过程；结果',
  'ness': '性质；状态；程度',
  'or': '者；物；器',
  'ous': '有...性质的；充满...的',
  'ship': '状态；性质；身份；职业',
  'some': '易于...的；有...倾向的',
  'ward': '向...的；朝...的'
};

const commonParts = {
  'act': '行动；做',
  'ag': '做；行动',
  'bio': '生命；生物',
  'dict': '说；讲',
  'duce': '引导；带来',
  'fact': '做；制造',
  'form': '形状；形式',
  'geo': '地球；土地',
  'graph': '写；画；记录',
  'ject': '扔；投',
  'log': '说；言；知识',
  'man': '手',
  'mit': '送；发',
  'port': '拿；带；运',
  'pos': '放置；位置',
  'script': '写',
  'spect': '看',
  'struct': '建造；结构',
  'vert': '转'
};

function guessMeaning(word, rootMeaning) {
  let type = 'n.';
  if (word.endsWith('ed') || word.endsWith('ing')) {
    type = 'v.';
  } else if (word.endsWith('ly')) {
    type = 'adv.';
  } else if (word.endsWith('able') || word.endsWith('al') || word.endsWith('ant') || 
             word.endsWith('ary') || word.endsWith('ive') || word.endsWith('ous') || 
             word.endsWith('ful') || word.endsWith('less')) {
    type = 'adj.';
  }
  
  let meaning = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  
  if (rootMeaning && rootMeaning.length > 0) {
    meaning = type + ' ' + meaning + '（词根含义：' + rootMeaning + '）';
  } else {
    meaning = type + ' ' + meaning;
  }
  
  return meaning;
}

const data = fs.readFileSync('/home/fred/workspace/memoryworld-project/src/data/mockWords.ts', 'utf8');
const match = data.match(/export const mockWords: IELTSWord\[\] = \[([\s\S]*?)\];/);

if (match) {
  const words = JSON.parse('[' + match[1] + ']');
  console.log('Processing ' + words.length + ' words...');
  
  let updated = 0;
  words.forEach(w => {
    if (w.meaning.includes('（词根：')) {
      w.meaning = guessMeaning(w.word, w.rootMeaning);
      updated++;
    }
  });
  
  console.log('Updated ' + updated + ' meanings');
  
  const output = `export interface IELTSWord {
  id: string;
  word: string;
  meaning: string;
  level: string;
  root: string;
  rootMeaning: string;
  rootMeaningEn: string;
  rootOrigin: string;
  rootOriginNote: string;
  relatedWords: { word: string; meaning: string; level: string }[];
  phonetic: string;
  frequency: string;
  example: string;
}

export const mockWords: IELTSWord[] = ${JSON.stringify(words, null, 2)};`;
  
  fs.writeFileSync('/home/fred/workspace/memoryworld-project/src/data/mockWords.ts', output);
  console.log('Done!');
}
