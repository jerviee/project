const fs = require('fs');

const rootsData = {
  'ab': { meaning: '离开', meaningEn: 'away from', origin: 'Latin' },
  'ac': { meaning: '向', meaningEn: 'to', origin: 'Latin' },
  'ad': { meaning: '向', meaningEn: 'to', origin: 'Latin' },
  'af': { meaning: '向', meaningEn: 'to', origin: 'Latin' },
  'ag': { meaning: '做', meaningEn: 'to do', origin: 'Latin' },
  'al': { meaning: '全部', meaningEn: 'all', origin: 'Latin' },
  'am': { meaning: '爱', meaningEn: 'love', origin: 'Latin' },
  'an': { meaning: '一', meaningEn: 'one', origin: 'Greek' },
  'ana': { meaning: '上', meaningEn: 'up', origin: 'Greek' },
  'ante': { meaning: '前', meaningEn: 'before', origin: 'Latin' },
  'anti': { meaning: '反', meaningEn: 'against', origin: 'Greek' },
  'ap': { meaning: '向', meaningEn: 'to', origin: 'Latin' },
  'ar': { meaning: '向', meaningEn: 'to', origin: 'Latin' },
  'as': { meaning: '向', meaningEn: 'to', origin: 'Latin' },
  'at': { meaning: '向', meaningEn: 'to', origin: 'Latin' },
  'auto': { meaning: '自己', meaningEn: 'self', origin: 'Greek' },
  'be': { meaning: '使', meaningEn: 'to make', origin: 'Old English' },
  'bi': { meaning: '二', meaningEn: 'two', origin: 'Latin' },
  'by': { meaning: '在旁边', meaningEn: 'beside', origin: 'Old English' },
  'cata': { meaning: '下', meaningEn: 'down', origin: 'Greek' },
  'circum': { meaning: '周围', meaningEn: 'around', origin: 'Latin' },
  'co': { meaning: '共同', meaningEn: 'together', origin: 'Latin' },
  'col': { meaning: '共同', meaningEn: 'together', origin: 'Latin' },
  'com': { meaning: '共同', meaningEn: 'together', origin: 'Latin' },
  'con': { meaning: '共同', meaningEn: 'together', origin: 'Latin' },
  'contra': { meaning: '反对', meaningEn: 'against', origin: 'Latin' },
  'counter': { meaning: '反对', meaningEn: 'against', origin: 'Latin' },
  'de': { meaning: '向下', meaningEn: 'down', origin: 'Latin' },
  'dec': { meaning: '十', meaningEn: 'ten', origin: 'Latin' },
  'di': { meaning: '二', meaningEn: 'two', origin: 'Greek' },
  'dia': { meaning: '通过', meaningEn: 'through', origin: 'Greek' },
  'dis': { meaning: '否定', meaningEn: 'not', origin: 'Latin' },
  'dys': { meaning: '坏', meaningEn: 'bad', origin: 'Greek' },
  'e': { meaning: '出', meaningEn: 'out', origin: 'Latin' },
  'ef': { meaning: '出', meaningEn: 'out', origin: 'Latin' },
  'em': { meaning: '使', meaningEn: 'to make', origin: 'Greek' },
  'en': { meaning: '使', meaningEn: 'to make', origin: 'Greek' },
  'endo': { meaning: '内', meaningEn: 'within', origin: 'Greek' },
  'epi': { meaning: '在...上', meaningEn: 'upon', origin: 'Greek' },
  'eu': { meaning: '好', meaningEn: 'good', origin: 'Greek' },
  'ex': { meaning: '出', meaningEn: 'out', origin: 'Latin' },
  'exo': { meaning: '外', meaningEn: 'outside', origin: 'Greek' },
  'extra': { meaning: '超出', meaningEn: 'beyond', origin: 'Latin' },
  'fore': { meaning: '前', meaningEn: 'before', origin: 'Old English' },
  'geo': { meaning: '地', meaningEn: 'earth', origin: 'Greek' },
  'hetero': { meaning: '异', meaningEn: 'different', origin: 'Greek' },
  'homo': { meaning: '同', meaningEn: 'same', origin: 'Greek' },
  'hydra': { meaning: '水', meaningEn: 'water', origin: 'Greek' },
  'hyper': { meaning: '过度', meaningEn: 'over', origin: 'Greek' },
  'hypo': { meaning: '下', meaningEn: 'under', origin: 'Greek' },
  'il': { meaning: '不', meaningEn: 'not', origin: 'Latin' },
  'im': { meaning: '不', meaningEn: 'not', origin: 'Latin' },
  'in': { meaning: '内', meaningEn: 'in', origin: 'Latin' },
  'infra': { meaning: '下', meaningEn: 'below', origin: 'Latin' },
  'inter': { meaning: '之间', meaningEn: 'between', origin: 'Latin' },
  'intra': { meaning: '内', meaningEn: 'within', origin: 'Latin' },
  'ir': { meaning: '不', meaningEn: 'not', origin: 'Latin' },
  'iso': { meaning: '等', meaningEn: 'equal', origin: 'Greek' },
  'macro': { meaning: '大', meaningEn: 'large', origin: 'Greek' },
  'mal': { meaning: '坏', meaningEn: 'bad', origin: 'Latin' },
  'mega': { meaning: '大', meaningEn: 'large', origin: 'Greek' },
  'meta': { meaning: '变化', meaningEn: 'change', origin: 'Greek' },
  'micro': { meaning: '小', meaningEn: 'small', origin: 'Greek' },
  'mini': { meaning: '小', meaningEn: 'small', origin: 'Latin' },
  'mis': { meaning: '错', meaningEn: 'wrong', origin: 'Old English' },
  'mono': { meaning: '一', meaningEn: 'one', origin: 'Greek' },
  'multi': { meaning: '多', meaningEn: 'many', origin: 'Latin' },
  'neo': { meaning: '新', meaningEn: 'new', origin: 'Greek' },
  'non': { meaning: '不', meaningEn: 'not', origin: 'Latin' },
  'ob': { meaning: '对面', meaningEn: 'toward', origin: 'Latin' },
  'oc': { meaning: '向', meaningEn: 'to', origin: 'Latin' },
  'of': { meaning: '向', meaningEn: 'to', origin: 'Latin' },
  'op': { meaning: '向', meaningEn: 'to', origin: 'Latin' },
  'os': { meaning: '向', meaningEn: 'to', origin: 'Latin' },
  'out': { meaning: '出', meaningEn: 'out', origin: 'Old English' },
  'over': { meaning: '过度', meaningEn: 'above', origin: 'Old English' },
  'pan': { meaning: '全', meaningEn: 'all', origin: 'Greek' },
  'para': { meaning: '旁边', meaningEn: 'beside', origin: 'Greek' },
  'pen': { meaning: '几乎', meaningEn: 'almost', origin: 'Latin' },
  'per': { meaning: '通过', meaningEn: 'through', origin: 'Latin' },
  'peri': { meaning: '周围', meaningEn: 'around', origin: 'Greek' },
  'poly': { meaning: '多', meaningEn: 'many', origin: 'Greek' },
  'post': { meaning: '后', meaningEn: 'after', origin: 'Latin' },
  'pre': { meaning: '前', meaningEn: 'before', origin: 'Latin' },
  'pro': { meaning: '前', meaningEn: 'forward', origin: 'Greek' },
  'pros': { meaning: '向', meaningEn: 'toward', origin: 'Greek' },
  'pseudo': { meaning: '假', meaningEn: 'false', origin: 'Greek' },
  're': { meaning: '回', meaningEn: 'back', origin: 'Latin' },
  'retro': { meaning: '向后', meaningEn: 'backward', origin: 'Latin' },
  'se': { meaning: '离开', meaningEn: 'away', origin: 'Latin' },
  'semi': { meaning: '半', meaningEn: 'half', origin: 'Latin' },
  'sub': { meaning: '下', meaningEn: 'under', origin: 'Latin' },
  'suc': { meaning: '下', meaningEn: 'under', origin: 'Latin' },
  'suf': { meaning: '下', meaningEn: 'under', origin: 'Latin' },
  'sup': { meaning: '下', meaningEn: 'under', origin: 'Latin' },
  'sur': { meaning: '上', meaningEn: 'over', origin: 'Latin' },
  'sym': { meaning: '共同', meaningEn: 'together', origin: 'Greek' },
  'syn': { meaning: '共同', meaningEn: 'together', origin: 'Greek' },
  'tele': { meaning: '远', meaningEn: 'far', origin: 'Greek' },
  'tetra': { meaning: '四', meaningEn: 'four', origin: 'Greek' },
  'therm': { meaning: '热', meaningEn: 'heat', origin: 'Greek' },
  'trans': { meaning: '横穿', meaningEn: 'across', origin: 'Latin' },
  'tri': { meaning: '三', meaningEn: 'three', origin: 'Greek' },
  'ultra': { meaning: '超出', meaningEn: 'beyond', origin: 'Latin' },
  'un': { meaning: '不', meaningEn: 'not', origin: 'Old English' },
  'under': { meaning: '下', meaningEn: 'under', origin: 'Old English' },
  'uni': { meaning: '一', meaningEn: 'one', origin: 'Latin' },
};

const rootSuffixes = {
  'able': { meaning: '可...的', meaningEn: 'able to be', origin: 'Latin' },
  'ac': { meaning: '...的', meaningEn: 'relating to', origin: 'Greek' },
  'acity': { meaning: '性质', meaningEn: 'quality of', origin: 'Latin' },
  'al': { meaning: '...的', meaningEn: 'relating to', origin: 'Latin' },
  'ance': { meaning: '行为', meaningEn: 'action of', origin: 'Latin' },
  'ancy': { meaning: '行为', meaningEn: 'state of', origin: 'Latin' },
  'ant': { meaning: '...者', meaningEn: 'agent', origin: 'Latin' },
  'ar': { meaning: '...的', meaningEn: 'relating to', origin: 'Latin' },
  'ary': { meaning: '...的', meaningEn: 'relating to', origin: 'Latin' },
  'ate': { meaning: '使', meaningEn: 'make', origin: 'Latin' },
  'ation': { meaning: '行为', meaningEn: 'action of', origin: 'Latin' },
  'ative': { meaning: '...的', meaningEn: 'relating to', origin: 'Latin' },
  'cy': { meaning: '性质', meaningEn: 'quality of', origin: 'Latin' },
  'dom': { meaning: '领域', meaningEn: 'domain', origin: 'Old English' },
  'ed': { meaning: '过去式', meaningEn: 'past tense', origin: 'Old English' },
  'ee': { meaning: '被...者', meaningEn: 'one who is', origin: 'French' },
  'ence': { meaning: '行为', meaningEn: 'action of', origin: 'Latin' },
  'ency': { meaning: '行为', meaningEn: 'state of', origin: 'Latin' },
  'ent': { meaning: '...的', meaningEn: 'being', origin: 'Latin' },
  'er': { meaning: '...者', meaningEn: 'agent', origin: 'Old English' },
  'es': { meaning: '复数', meaningEn: 'plural', origin: 'Old English' },
  'ese': { meaning: '...风格的', meaningEn: 'style of', origin: 'Italian' },
  'ess': { meaning: '女性', meaningEn: 'female', origin: 'Greek' },
  'ful': { meaning: '充满...的', meaningEn: 'full of', origin: 'Old English' },
  'fy': { meaning: '使...化', meaningEn: 'make into', origin: 'Latin' },
  'hood': { meaning: '性质', meaningEn: 'state of', origin: 'Old English' },
  'ia': { meaning: '疾病', meaningEn: 'disease', origin: 'Greek' },
  'ian': { meaning: '...的人', meaningEn: 'one who', origin: 'Latin' },
  'ic': { meaning: '...的', meaningEn: 'relating to', origin: 'Greek' },
  'ical': { meaning: '...的', meaningEn: 'relating to', origin: 'Greek' },
  'ile': { meaning: '...的', meaningEn: 'relating to', origin: 'Latin' },
  'ine': { meaning: '...的', meaningEn: 'relating to', origin: 'Latin' },
  'ing': { meaning: '正在...', meaningEn: 'present participle', origin: 'Old English' },
  'ion': { meaning: '行为结果', meaningEn: 'action of', origin: 'Latin' },
  'ious': { meaning: '...的', meaningEn: 'full of', origin: 'Latin' },
  'ise': { meaning: '使...化', meaningEn: 'make', origin: 'Greek' },
  'ish': { meaning: '...的', meaningEn: 'having quality of', origin: 'Old English' },
  'ism': { meaning: '主义', meaningEn: 'doctrine', origin: 'Greek' },
  'ist': { meaning: '...者', meaningEn: 'one who', origin: 'Greek' },
  'ite': { meaning: '...的人', meaningEn: 'one who', origin: 'Greek' },
  'ity': { meaning: '性质', meaningEn: 'quality of', origin: 'Latin' },
  'ive': { meaning: '...的', meaningEn: 'relating to', origin: 'Latin' },
  'ize': { meaning: '使...化', meaningEn: 'make into', origin: 'Greek' },
  'less': { meaning: '无...的', meaningEn: 'without', origin: 'Old English' },
  'let': { meaning: '小...', meaningEn: 'small', origin: 'French' },
  'ling': { meaning: '小...', meaningEn: 'small', origin: 'Old English' },
  'ly': { meaning: '...地', meaningEn: 'in a way', origin: 'Old English' },
  'ment': { meaning: '行为', meaningEn: 'action of', origin: 'Latin' },
  'ness': { meaning: '性质', meaningEn: 'state of', origin: 'Old English' },
  'oid': { meaning: '像...的', meaningEn: 'resembling', origin: 'Greek' },
  'one': { meaning: '...者', meaningEn: 'one who', origin: 'Greek' },
  'or': { meaning: '...者', meaningEn: 'agent', origin: 'Latin' },
  'ory': { meaning: '...的', meaningEn: 'relating to', origin: 'Latin' },
  'osis': { meaning: '状态', meaningEn: 'condition', origin: 'Greek' },
  'ous': { meaning: '...的', meaningEn: 'full of', origin: 'Latin' },
  'ship': { meaning: '性质', meaningEn: 'state of', origin: 'Old English' },
  'sis': { meaning: '行为', meaningEn: 'action', origin: 'Greek' },
  'sion': { meaning: '行为', meaningEn: 'action of', origin: 'Latin' },
  'some': { meaning: '引起...的', meaningEn: 'causing', origin: 'Old English' },
  'th': { meaning: '行为', meaningEn: 'action of', origin: 'Old English' },
  'tion': { meaning: '行为', meaningEn: 'action of', origin: 'Latin' },
  'ture': { meaning: '行为结果', meaningEn: 'result of', origin: 'Latin' },
  'ty': { meaning: '性质', meaningEn: 'quality of', origin: 'Latin' },
  'ure': { meaning: '行为结果', meaningEn: 'result of', origin: 'Latin' },
  'ward': { meaning: '向...的', meaningEn: 'direction', origin: 'Old English' },
  'wise': { meaning: '像...一样', meaningEn: 'in the manner of', origin: 'Old English' },
  'y': { meaning: '...的', meaningEn: 'characterized by', origin: 'Old English' },
};

const origins = ['Latin', 'Greek', 'Old French', 'Old English', 'French', 'German', 'Italian', 'Spanish', 'Portuguese', 'Arabic', 'Chinese', 'Japanese', 'Sanskrit', 'Hebrew'];

function getRandomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function detectRoot(word) {
  word = word.toLowerCase();

  const prefixes = Object.keys(rootsData);
  for (const prefix of prefixes.sort((a, b) => b.length - a.length)) {
    if (word.startsWith(prefix) && prefix.length > 1) {
      return {
        root: prefix,
        ...rootsData[prefix]
      };
    }
  }

  const suffixes = Object.keys(rootSuffixes);
  for (const suffix of suffixes.sort((a, b) => b.length - a.length)) {
    if (word.endsWith(suffix) && suffix.length > 1) {
      return {
        root: suffix,
        ...rootSuffixes[suffix]
      };
    }
  }

  return null;
}

function generateExample(word, meaning) {
  const templates = [
    `The word "${word}" is frequently used in IELTS reading passages about academic topics.`,
    `Candidates should understand the meaning of "${word}" in context to achieve a high band score.`,
    `The term "${word}" appears regularly in academic English and IELTS examination materials.`,
    `Using "${word}" appropriately can improve your writing score in the IELTS test.`,
    `"${word}" means ${meaning.split(';')[0].trim()} in this passage from an IELTS reading text.`,
    `The concept of "${word}" is essential for understanding the academic article.`,
    `Students often encounter "${word}" in IELTS listening and reading sections.`,
    `The meaning of "${word}" can be deduced from its context clues in the passage.`,
    `"${word}" is used to describe ${meaning.split(';')[0].replace(/v\.|n\.|adj\.|adv\./, '').trim()} in academic writing.`,
    `Understanding "${word}" is crucial for achieving a band 7 or higher in IELTS.`,
  ];
  return getRandomElement(templates);
}

function getOriginNote(word, origin) {
  const notes = {
    'Latin': `源自拉丁语 ${word.toLowerCase()}`,
    'Greek': `源自希腊语 ${word.toLowerCase()}`,
    'Old French': `源自古法语 ${word.toLowerCase()}`,
    'Old English': `源自古英语 ${word.toLowerCase()}`,
    'French': `源自法语 ${word.toLowerCase()}`,
    'German': `源自德语 ${word.toLowerCase()}`,
    'Italian': `源自意大利语 ${word.toLowerCase()}`,
    'Spanish': `源自西班牙语 ${word.toLowerCase()}`,
    'Portuguese': `源自葡萄牙语 ${word.toLowerCase()}`,
    'Arabic': `源自阿拉伯语 ${word.toLowerCase()}`,
    'Chinese': `源自汉语 ${word.toLowerCase()}`,
    'Japanese': `源自日语 ${word.toLowerCase()}`,
    'Sanskrit': `源自梵语 ${word.toLowerCase()}`,
    'Hebrew': `源自希伯来语 ${word.toLowerCase()}`,
  };
  return notes[origin] || `源自${origin}`;
}

module.exports = { detectRoot, generateExample, getOriginNote, origins };