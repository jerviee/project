// 雅思词汇批量生成脚本
// 使用: node generateWords.cjs

const fs = require('fs');
const path = require('path');

// 前缀数据库
const prefixes = [
  { prefix: 'un-', meaning: '不，相反', meaningEn: 'not, opposite' },
  { prefix: 'in-', meaning: '不，向内', meaningEn: 'not, into' },
  { prefix: 'im-', meaning: '不，向内', meaningEn: 'not, into' },
  { prefix: 'dis-', meaning: '不，分离', meaningEn: 'not, apart' },
  { prefix: 're-', meaning: '再，回', meaningEn: 'again, back' },
  { prefix: 'pre-', meaning: '前', meaningEn: 'before' },
  { prefix: 'post-', meaning: '后', meaningEn: 'after' },
  { prefix: 'ex-', meaning: '出，外', meaningEn: 'out, former' },
  { prefix: 'sub-', meaning: '下，次', meaningEn: 'under, below' },
  { prefix: 'super-', meaning: '上，超', meaningEn: 'over, above' },
  { prefix: 'inter-', meaning: '之间', meaningEn: 'between' },
  { prefix: 'trans-', meaning: '跨，转', meaningEn: 'across, through' },
  { prefix: 'mis-', meaning: '错误', meaningEn: 'wrongly' },
  { prefix: 'over-', meaning: '过度', meaningEn: 'too much' },
  { prefix: 'under-', meaning: '不足', meaningEn: 'too little' },
  { prefix: 'anti-', meaning: '反对', meaningEn: 'against' },
  { prefix: 'auto-', meaning: '自己', meaningEn: 'self' },
  { prefix: 'bio-', meaning: '生命', meaningEn: 'life' },
  { prefix: 'co-', meaning: '共同', meaningEn: 'together' },
  { prefix: 'de-', meaning: '向下，去除', meaningEn: 'down, remove' },
  { prefix: 'micro-', meaning: '小', meaningEn: 'small' },
  { prefix: 'multi-', meaning: '多', meaningEn: 'many' },
  { prefix: 'poly-', meaning: '多', meaningEn: 'many' },
  { prefix: 'semi-', meaning: '半', meaningEn: 'half' },
  { prefix: 'tele-', meaning: '远', meaningEn: 'far' },
  { prefix: 'uni-', meaning: '一', meaningEn: 'one' },
  { prefix: 'ac-', meaning: '朝向', meaningEn: 'to, toward' },
  { prefix: 'ad-', meaning: '朝向', meaningEn: 'to, toward' },
  { prefix: 'con-', meaning: '共同', meaningEn: 'together' },
  { prefix: 'com-', meaning: '共同', meaningEn: 'together' },
];

// 后缀数据库
const suffixes = [
  { suffix: '-able', meaning: '可...的', meaningEn: 'capable of', category: '形容词' },
  { suffix: '-ible', meaning: '可...的', meaningEn: 'capable of', category: '形容词' },
  { suffix: '-ful', meaning: '充满...的', meaningEn: 'full of', category: '形容词' },
  { suffix: '-less', meaning: '无...的', meaningEn: 'without', category: '形容词' },
  { suffix: '-ous', meaning: '有...性质的', meaningEn: 'full of', category: '形容词' },
  { suffix: '-ive', meaning: '有...倾向的', meaningEn: 'having quality', category: '形容词' },
  { suffix: '-al', meaning: '与...相关的', meaningEn: 'relating to', category: '形容词' },
  { suffix: '-ic', meaning: '与...相关的', meaningEn: 'relating to', category: '形容词' },
  { suffix: '-ly', meaning: '以...方式', meaningEn: 'in manner of', category: '副词' },
  { suffix: '-ment', meaning: '行为，结果', meaningEn: 'act, result', category: '名词' },
  { suffix: '-ness', meaning: '状态，性质', meaningEn: 'state of', category: '名词' },
  { suffix: '-tion', meaning: '行为，状态', meaningEn: 'act, state', category: '名词' },
  { suffix: '-sion', meaning: '行为，状态', meaningEn: 'act, state', category: '名词' },
  { suffix: '-er', meaning: '做...的人', meaningEn: 'one who', category: '名词' },
  { suffix: '-or', meaning: '做...的人', meaningEn: 'one who', category: '名词' },
  { suffix: '-ist', meaning: '...主义者', meaningEn: 'one who practices', category: '名词' },
  { suffix: '-ity', meaning: '性质，状态', meaningEn: 'quality, state', category: '名词' },
  { suffix: '-ance', meaning: '行为，状态', meaningEn: 'act, state', category: '名词' },
  { suffix: '-ence', meaning: '行为，状态', meaningEn: 'act, state', category: '名词' },
  { suffix: '-ate', meaning: '使...化', meaningEn: 'to make', category: '动词' },
  { suffix: '-ify', meaning: '使...化', meaningEn: 'to make', category: '动词' },
  { suffix: '-ize', meaning: '使...化', meaningEn: 'to make', category: '动词' },
  { suffix: '-ous', meaning: '具有...的', meaningEn: 'having', category: '形容词' },
  { suffix: '-ant', meaning: '...的', meaningEn: 'being', category: '形容词' },
  { suffix: '-ent', meaning: '...的', meaningEn: 'being', category: '形容词' },
  { suffix: '-ion', meaning: '行为，状态', meaningEn: 'act, state', category: '名词' },
];

// 词根数据库 - 300+常见词根，按字母顺序排列
const rootsDatabase = [
  // A开头
  { root: 'act', meaning: '行动', meaningEn: 'to act, to do', origin: 'Latin', originNote: '源自拉丁语 agere，意为"做、行动"' },
  { root: 'acu', meaning: '尖锐', meaningEn: 'sharp', origin: 'Latin', originNote: '源自拉丁语 acutus，意为"尖锐的"' },
  { root: 'aer', meaning: '空气', meaningEn: 'air', origin: 'Greek', originNote: '源自希腊语 aer，意为"空气"' },
  { root: 'ag', meaning: '做', meaningEn: 'to do', origin: 'Latin', originNote: '源自拉丁语 agere，意为"做"' },
  { root: 'agr', meaning: '田地', meaningEn: 'field', origin: 'Latin', originNote: '源自拉丁语 ager，意为"田地"' },
  { root: 'ali', meaning: '其他', meaningEn: 'other', origin: 'Latin', originNote: '源自拉丁语 alius，意为"其他的"' },
  { root: 'alt', meaning: '高', meaningEn: 'high', origin: 'Latin', originNote: '源自拉丁语 altus，意为"高的"' },
  { root: 'ambul', meaning: '行走', meaningEn: 'to walk', origin: 'Latin', originNote: '源自拉丁语 ambulare，意为"行走"' },
  { root: 'ampl', meaning: '大', meaningEn: 'large', origin: 'Latin', originNote: '源自拉丁语 amplus，意为"大的"' },
  { root: 'ang', meaning: '角', meaningEn: 'angle', origin: 'Latin', originNote: '源自拉丁语 angulus，意为"角"' },
  { root: 'anim', meaning: '生命', meaningEn: 'life, spirit', origin: 'Latin', originNote: '源自拉丁语 anima，意为"生命、呼吸"' },
  { root: 'ann', meaning: '年', meaningEn: 'year', origin: 'Latin', originNote: '源自拉丁语 annus，意为"年"' },
  { root: 'anthrop', meaning: '人', meaningEn: 'human', origin: 'Greek', originNote: '源自希腊语 anthropos，意为"人"' },
  { root: 'aqu', meaning: '水', meaningEn: 'water', origin: 'Latin', originNote: '源自拉丁语 aqua，意为"水"' },
  { root: 'arch', meaning: '统治', meaningEn: 'to rule', origin: 'Greek', originNote: '源自希腊语 arkhein，意为"统治"' },
  { root: 'architect', meaning: '建筑', meaningEn: 'builder', origin: 'Greek', originNote: '源自希腊语 arkhitekton，意为"建筑师"' },
  { root: 'arm', meaning: '武器', meaningEn: 'weapon', origin: 'Latin', originNote: '源自拉丁语 arma，意为"武器"' },
  { root: 'art', meaning: '艺术', meaningEn: 'art', origin: 'Latin', originNote: '源自拉丁语 ars，意为"艺术"' },
  { root: 'aster', meaning: '星', meaningEn: 'star', origin: 'Greek', originNote: '源自希腊语 aster，意为"星"' },
  { root: 'astr', meaning: '星', meaningEn: 'star', origin: 'Greek', originNote: '源自希腊语 astron，意为"星"' },
  { root: 'aud', meaning: '听', meaningEn: 'to hear', origin: 'Latin', originNote: '源自拉丁语 audire，意为"听"' },
  { root: 'aug', meaning: '增加', meaningEn: 'to increase', origin: 'Latin', originNote: '源自拉丁语 augere，意为"增加"' },
  { root: 'aur', meaning: '金', meaningEn: 'gold', origin: 'Latin', originNote: '源自拉丁语 aurum，意为"金"' },
  
  // B开头
  { root: 'bar', meaning: '棒', meaningEn: 'bar', origin: 'Greek', originNote: '源自希腊语 barys，意为"重的"' },
  { root: 'bas', meaning: '低', meaningEn: 'low', origin: 'Greek', originNote: '源自希腊语 basis，意为"基础"' },
  { root: 'bat', meaning: '打', meaningEn: 'to beat', origin: 'Latin', originNote: '源自拉丁语 bater，意为"打"' },
  { root: 'bel', meaning: '战争', meaningEn: 'war', origin: 'Latin', originNote: '源自拉丁语 bellum，意为"战争"' },
  { root: 'bene', meaning: '好', meaningEn: 'good', origin: 'Latin', originNote: '源自拉丁语 bene，意为"好"' },
  { root: 'beni', meaning: '祝福', meaningEn: 'blessing', origin: 'Latin', originNote: '源自拉丁语 benedicere，意为"祝福"' },
  { root: 'bib', meaning: '喝', meaningEn: 'to drink', origin: 'Latin', originNote: '源自拉丁语 bibere，意为"喝"' },
  { root: 'bio', meaning: '生命', meaningEn: 'life', origin: 'Greek', originNote: '源自希腊语 bios，意为"生命"' },
  { root: 'blanc', meaning: '白', meaningEn: 'white', origin: 'French', originNote: '源自古法语 blanc，意为"白的"' },
  { root: 'brac', meaning: '手臂', meaningEn: 'arm', origin: 'Latin', originNote: '源自拉丁语 brachium，意为"手臂"' },
  { root: 'brev', meaning: '短', meaningEn: 'short', origin: 'Latin', originNote: '源自拉丁语 brevis，意为"短的"' },
  { root: 'brim', meaning: '边缘', meaningEn: 'edge', origin: 'Old English', originNote: '源自古英语 brim，意为"边缘"' },
  
  // C开头
  { root: 'cad', meaning: '落', meaningEn: 'to fall', origin: 'Latin', originNote: '源自拉丁语 cadere，意为"落"' },
  { root: 'cap', meaning: '拿', meaningEn: 'to take', origin: 'Latin', originNote: '源自拉丁语 capere，意为"拿、握"' },
  { root: 'capit', meaning: '头', meaningEn: 'head', origin: 'Latin', originNote: '源自拉丁语 caput，意为"头"' },
  { root: 'carn', meaning: '肉', origin: 'Latin', meaning: '肉', meaningEn: 'flesh', originNote: '源自拉丁语 caro，意为"肉"' },
  { root: 'cast', meaning: '投掷', meaningEn: 'to throw', origin: 'Latin', originNote: '源自拉丁语 dare，意为"给"' },
  { root: 'cav', meaning: '空', meaningEn: 'hollow', origin: 'Latin', originNote: '源自拉丁语 cavus，意为"空的"' },
  { root: 'ced', meaning: '走', meaningEn: 'to go, to walk', origin: 'Latin', originNote: '源自拉丁语 cedere，意为"走、去"' },
  { root: 'celer', meaning: '快', meaningEn: 'fast', origin: 'Latin', originNote: '源自拉丁语 celer，意为"快的"' },
  { root: 'cent', meaning: '百', meaningEn: 'hundred', origin: 'Latin', originNote: '源自拉丁语 centum，意为"百"' },
  { root: 'centr', meaning: '中心', meaningEn: 'center', origin: 'Greek', originNote: '源自希腊语 kentron，意为"中心"' },
  { root: 'cephal', meaning: '头', meaningEn: 'head', origin: 'Greek', originNote: '源自希腊语 kephale，意为"头"' },
  { root: 'cert', meaning: '确定', meaningEn: 'certain', origin: 'Latin', originNote: '源自拉丁语 certus，意为"确定的"' },
  { root: 'cess', meaning: '走', meaningEn: 'to go', origin: 'Latin', originNote: '源自拉丁语 cedere，意为"走"' },
  { root: 'cid', meaning: '切', meaningEn: 'to cut', origin: 'Latin', originNote: '源自拉丁语 caedere，意为"切"' },
  { root: 'cin', meaning: '动', meaningEn: 'to move', origin: 'Latin', originNote: '源自拉丁语 ciere，意为"动"' },
  { root: 'circ', meaning: '圆', meaningEn: 'circle', origin: 'Latin', originNote: '源自拉丁语 circus，意为"圆"' },
  { root: 'cit', meaning: '引用', meaningEn: 'to call', origin: 'Latin', originNote: '源自拉丁语 citare，意为"引用"' },
  { root: 'claim', meaning: '喊叫', meaningEn: 'to cry out', origin: 'Latin', originNote: '源自拉丁语 clamare，意为"喊叫"' },
  { root: 'clar', meaning: '清楚', meaningEn: 'clear', origin: 'Latin', originNote: '源自拉丁语 clarus，意为"清楚的"' },
  { root: 'clud', meaning: '关闭', meaningEn: 'to close', origin: 'Latin', originNote: '源自拉丁语 claudere，意为"关闭"' },
  { root: 'cogn', meaning: '知道', meaningEn: 'to know', origin: 'Latin', originNote: '源自拉丁语 cognoscere，意为"知道"' },
  { root: 'col', meaning: '培养', meaningEn: 'to cultivate', origin: 'Latin', originNote: '源自拉丁语 colere，意为"培养"' },
  { root: 'coll', meaning: '收集', meaningEn: 'to gather', origin: 'Latin', originNote: '源自拉丁语 colligere，意为"收集"' },
  { root: 'corp', meaning: '身体', meaningEn: 'body', origin: 'Latin', originNote: '源自拉丁语 corpus，意为"身体"' },
  { root: 'cred', meaning: '相信', meaningEn: 'to believe', origin: 'Latin', originNote: '源自拉丁语 credere，意为"相信"' },
  { root: 'cret', meaning: '制造', meaningEn: 'to create', origin: 'Latin', originNote: '源自拉丁语 creare，意为"创造"' },
  { root: 'cruc', meaning: '十字', meaningEn: 'cross', origin: 'Latin', originNote: '源自拉丁语 crux，意为"十字"' },
  { root: 'crypt', meaning: '隐藏', meaningEn: 'hidden', origin: 'Greek', originNote: '源自希腊语 kryptos，意为"隐藏的"' },
  { root: 'cult', meaning: '耕种', meaningEn: 'to till', origin: 'Latin', originNote: '源自拉丁语 colere，意为"耕种"' },
  { root: 'cur', meaning: '跑', meaningEn: 'to run', origin: 'Latin', originNote: '源自拉丁语 currere，意为"跑"' },
  { root: 'cur', meaning: '关心', meaningEn: 'to care', origin: 'Latin', originNote: '源自拉丁语 cura，意为"关心"' },
  
  // D开头
  { root: 'dac', meaning: '教', meaningEn: 'to teach', origin: 'Latin', originNote: '源自拉丁语 docere，意为"教"' },
  { root: 'dam', meaning: '损害', meaningEn: 'to damage', origin: 'Latin', originNote: '源自拉丁语 damnum，意为"损害"' },
  { root: 'de', meaning: '神', meaningEn: 'god', origin: 'Latin', originNote: '源自拉丁语 deus，意为"神"' },
  { root: 'dec', meaning: '十', meaningEn: 'ten', origin: 'Latin', originNote: '源自拉丁语 decem，意为"十"' },
  { root: 'dem', meaning: '人民', meaningEn: 'people', origin: 'Greek', originNote: '源自希腊语 demos，意为"人民"' },
  { root: 'dent', meaning: '牙', meaningEn: 'tooth', origin: 'Latin', originNote: '源自拉丁语 dens，意为"牙"' },
  { root: 'derm', meaning: '皮肤', meaningEn: 'skin', origin: 'Greek', originNote: '源自希腊语 derma，意为"皮肤"' },
  { root: 'dic', meaning: '说', meaningEn: 'to say', origin: 'Latin', originNote: '源自拉丁语 dicere，意为"说"' },
  { root: 'dict', meaning: '说', meaningEn: 'to say', origin: 'Latin', originNote: '源自拉丁语 dicere，意为"说"' },
  { root: 'doc', meaning: '教', meaningEn: 'to teach', origin: 'Latin', originNote: '源自拉丁语 docere，意为"教"' },
  { root: 'duc', meaning: '引导', meaningEn: 'to lead', origin: 'Latin', originNote: '源自拉丁语 ducere，意为"引导"' },
  { root: 'dur', meaning: '持久', meaningEn: 'to last', origin: 'Latin', originNote: '源自拉丁语 durare，意为"持久"' },
  
  // E开头
  { root: 'ed', meaning: '吃', meaningEn: 'to eat', origin: 'Latin', originNote: '源自拉丁语 edere，意为"吃"' },
  { root: 'equ', meaning: '相等', meaningEn: 'equal', origin: 'Latin', originNote: '源自拉丁语 aequus，意为"相等的"' },
  { root: 'err', meaning: '错误', meaningEn: 'to wander', origin: 'Latin', originNote: '源自拉丁语 errare，意为"漫游、犯错"' },
  { root: 'ev', meaning: '年龄', meaningEn: 'age', origin: 'Latin', originNote: '源自拉丁语 aevum，意为"年龄"' },
  
  // F开头
  { root: 'fac', meaning: '做', meaningEn: 'to do', origin: 'Latin', originNote: '源自拉丁语 facere，意为"做"' },
  { root: 'fer', meaning: '带来', meaningEn: 'to bring', origin: 'Latin', originNote: '源自拉丁语 ferre，意为"带来"' },
  { root: 'fin', meaning: '结束', meaningEn: 'end, limit', origin: 'Latin', originNote: '源自拉丁语 finis，意为"结束"' },
  { root: 'firm', meaning: '坚定', meaningEn: 'firm', origin: 'Latin', originNote: '源自拉丁语 firmus，意为"坚定的"' },
  { root: 'flor', meaning: '花', meaningEn: 'flower', origin: 'Latin', originNote: '源自拉丁语 flos，意为"花"' },
  { root: 'flu', meaning: '流', meaningEn: 'to flow', origin: 'Latin', originNote: '源自拉丁语 fluere，意为"流"' },
  { root: 'form', meaning: '形式', meaningEn: 'form, shape', origin: 'Latin', originNote: '源自拉丁语 forma，意为"形式"' },
  { root: 'fract', meaning: '破碎', meaningEn: 'to break', origin: 'Latin', originNote: '源自拉丁语 frangere，意为"破碎"' },
  { root: 'frat', meaning: '兄弟', meaningEn: 'brother', origin: 'Latin', originNote: '源自拉丁语 frater，意为"兄弟"' },
  
  // G开头
  { root: 'gam', meaning: '结婚', meaningEn: 'to marry', origin: 'Greek', originNote: '源自希腊语 gamos，意为"婚姻"' },
  { root: 'gen', meaning: '产生', meaningEn: 'to produce', origin: 'Greek', originNote: '源自希腊语 gennan，意为"产生"' },
  { root: 'geo', meaning: '地', meaningEn: 'earth', origin: 'Greek', originNote: '源自希腊语 geo，意为"地"' },
  { root: 'glac', meaning: '冰', meaningEn: 'ice', origin: 'Latin', originNote: '源自拉丁语 glacies，意为"冰"' },
  { root: 'grad', meaning: '步', meaningEn: 'step, grade', origin: 'Latin', originNote: '源自拉丁语 gradus，意为"步、级"' },
  { root: 'gress', meaning: '走', meaningEn: 'to walk, to go', origin: 'Latin', originNote: '源自拉丁语 gradi，意为"走"' },
  { root: 'graph', meaning: '写', meaningEn: 'to write', origin: 'Greek', originNote: '源自希腊语 graphein，意为"写"' },
  { root: 'greg', meaning: '群', meaningEn: 'flock', origin: 'Latin', originNote: '源自拉丁语 grex，意为"群"' },
  
  // H开头
  { root: 'hab', meaning: '拥有', meaningEn: 'to have', origin: 'Latin', originNote: '源自拉丁语 habere，意为"拥有"' },
  { root: 'her', meaning: '继承', meaningEn: 'to inherit', origin: 'Latin', originNote: '源自拉丁语 heredis，意为"继承人"' },
  { root: 'hib', meaning: '持有', meaningEn: 'to hold', origin: 'Latin', originNote: '源自拉丁语 habere，意为"持有"' },
  { root: 'hom', meaning: '相同', meaningEn: 'same', origin: 'Greek', originNote: '源自希腊语 homos，意为"相同的"' },
  { root: 'hydr', meaning: '水', meaningEn: 'water', origin: 'Greek', originNote: '源自希腊语 hydor，意为"水"' },
  
  // I开头
  { root: 'ject', meaning: '抛', meaningEn: 'to throw', origin: 'Latin', originNote: '源自拉丁语 jacere，意为"抛"' },
  
  // J开头
  { root: 'jud', meaning: '判断', meaningEn: 'to judge', origin: 'Latin', originNote: '源自拉丁语 judex，意为"法官"' },
  { root: 'junct', meaning: '连接', meaningEn: 'to join', origin: 'Latin', originNote: '源自拉丁语 jungere，意为"连接"' },
  
  // L开头
  { root: 'labor', meaning: '工作', meaningEn: 'work', origin: 'Latin', originNote: '源自拉丁语 labor，意为"工作"' },
  { root: 'leg', meaning: '法律', meaningEn: 'law', origin: 'Latin', originNote: '源自拉丁语 lex，意为"法律"' },
  { root: 'leg', meaning: '读', meaningEn: 'to read', origin: 'Latin', originNote: '源自拉丁语 legere，意为"读"' },
  { root: 'liber', meaning: '自由', meaningEn: 'free', origin: 'Latin', originNote: '源自拉丁语 liber，意为"自由的"' },
  { root: 'lig', meaning: '捆', meaningEn: 'to bind', origin: 'Latin', originNote: '源自拉丁语 ligare，意为"捆"' },
  { root: 'loc', meaning: '地方', meaningEn: 'place', origin: 'Latin', originNote: '源自拉丁语 locus，意为"地方"' },
  { root: 'log', meaning: '说', meaningEn: 'to speak, word', origin: 'Greek', originNote: '源自希腊语 logos，意为"话语"' },
  { root: 'loqu', meaning: '说', meaningEn: 'to speak', origin: 'Latin', originNote: '源自拉丁语 loqui，意为"说"' },
  { root: 'luc', meaning: '光', meaningEn: 'light', origin: 'Latin', originNote: '源自拉丁语 lux，意为"光"' },
  { root: 'lud', meaning: '玩', meaningEn: 'to play', origin: 'Latin', originNote: '源自拉丁语 ludere，意为"玩"' },
  
  // M开头
  { root: 'man', meaning: '手', meaningEn: 'hand', origin: 'Latin', originNote: '源自拉丁语 manus，意为"手"' },
  { root: 'mand', meaning: '命令', meaningEn: 'to order', origin: 'Latin', originNote: '源自拉丁语 mandare，意为"命令"' },
  { root: 'mater', meaning: '母亲', meaningEn: 'mother', origin: 'Latin', originNote: '源自拉丁语 mater，意为"母亲"' },
  { root: 'med', meaning: '中间', meaningEn: 'middle', origin: 'Latin', originNote: '源自拉丁语 medius，意为"中间的"' },
  { root: 'memor', meaning: '记忆', meaningEn: 'memory', origin: 'Latin', originNote: '源自拉丁语 memoria，意为"记忆"' },
  { root: 'ment', meaning: '心智', meaningEn: 'mind', origin: 'Latin', originNote: '源自拉丁语 mens，意为"心智"' },
  { root: 'mit', meaning: '发送', meaningEn: 'to send', origin: 'Latin', originNote: '源自拉丁语 mittere，意为"发送"' },
  { root: 'mob', meaning: '动', meaningEn: 'to move', origin: 'Latin', originNote: '源自拉丁语 mobilis，意为"动的"' },
  { root: 'mod', meaning: '方式', meaningEn: 'way, manner', origin: 'Latin', originNote: '源自拉丁语 modus，意为"方式"' },
  { root: 'mon', meaning: '警告', meaningEn: 'to warn', origin: 'Latin', originNote: '源自拉丁语 monere，意为"警告"' },
  { root: 'mort', meaning: '死亡', meaningEn: 'death', origin: 'Latin', originNote: '源自拉丁语 mors，意为"死亡"' },
  { root: 'mot', meaning: '动', meaningEn: 'to move', origin: 'Latin', originNote: '源自拉丁语 movere，意为"动"' },
  { root: 'mun', meaning: '公共', meaningEn: 'public, common', origin: 'Latin', originNote: '源自拉丁语 communis，意为"共同的"' },
  { root: 'mus', meaning: '老鼠', meaningEn: 'mouse', origin: 'Latin', originNote: '源自拉丁语 mus，意为"老鼠"' },
  { root: 'mut', meaning: '变', meaningEn: 'to change', origin: 'Latin', originNote: '源自拉丁语 mutare，意为"变"' },
  
  // N开头
  { root: 'nat', meaning: '出生', meaningEn: 'to be born', origin: 'Latin', originNote: '源自拉丁语 nasci，意为"出生"' },
  { root: 'natur', meaning: '自然', meaningEn: 'nature', origin: 'Latin', originNote: '源自拉丁语 natura，意为"自然"' },
  { root: 'neg', meaning: '否认', meaningEn: 'to deny', origin: 'Latin', originNote: '源自拉丁语 negare，意为"否认"' },
  { root: 'norm', meaning: '规范', meaningEn: 'rule, standard', origin: 'Latin', originNote: '源自拉丁语 norma，意为"规范"' },
  { root: 'nov', meaning: '新', meaningEn: 'new', origin: 'Latin', originNote: '源自拉丁语 novus，意为"新的"' },
  { root: 'numer', meaning: '数', meaningEn: 'number', origin: 'Latin', originNote: '源自拉丁语 numerus，意为"数"' },
  
  // O开头
  { root: 'oper', meaning: '工作', meaningEn: 'to work', origin: 'Latin', originNote: '源自拉丁语 opus，意为"工作"' },
  { root: 'opt', meaning: '看', meaningEn: 'to see', origin: 'Latin', originNote: '源自拉丁语 optare，意为"看"' },
  { root: 'orb', meaning: '球', meaningEn: 'sphere', origin: 'Latin', originNote: '源自拉丁语 orbis，意为"球"' },
  
  // P开头
  { root: 'par', meaning: '准备', meaningEn: 'to prepare', origin: 'Latin', originNote: '源自拉丁语 parare，意为"准备"' },
  { root: 'par', meaning: '相等', meaningEn: 'equal', origin: 'Latin', originNote: '源自拉丁语 par，意为"相等的"' },
  { root: 'patr', meaning: '父亲', meaningEn: 'father', origin: 'Latin', originNote: '源自拉丁语 pater，意为"父亲"' },
  { root: 'ped', meaning: '脚', meaningEn: 'foot', origin: 'Latin', originNote: '源自拉丁语 pes，意为"脚"' },
  { root: 'pel', meaning: '推', meaningEn: 'to push', origin: 'Latin', originNote: '源自拉丁语 pellere，意为"推"' },
  { root: 'pend', meaning: '挂', meaningEn: 'to hang', origin: 'Latin', originNote: '源自拉丁语 pendere，意为"挂"' },
  { root: 'per', meaning: '通过', meaningEn: 'through', origin: 'Latin', originNote: '源自拉丁语 per，意为"通过"' },
  { root: 'pet', meaning: '追求', meaningEn: 'to seek', origin: 'Latin', originNote: '源自拉丁语 petere，意为"追求"' },
  { root: 'phil', meaning: '爱', meaningEn: 'love', origin: 'Greek', originNote: '源自希腊语 philos，意为"爱的"' },
  { root: 'phon', meaning: '声音', meaningEn: 'sound', origin: 'Greek', originNote: '源自希腊语 phone，意为"声音"' },
  { root: 'plen', meaning: '满', meaningEn: 'full', origin: 'Latin', originNote: '源自拉丁语 plenus，意为"满的"' },
  { root: 'plic', meaning: '折叠', meaningEn: 'to fold', origin: 'Latin', originNote: '源自拉丁语 plicare，意为"折叠"' },
  { root: 'pon', meaning: '放', meaningEn: 'to place', origin: 'Latin', originNote: '源自拉丁语 ponere，意为"放"' },
  { root: 'port', meaning: '拿', meaningEn: 'to carry', origin: 'Latin', originNote: '源自拉丁语 portare，意为"拿"' },
  { root: 'pos', meaning: '放', meaningEn: 'to place', origin: 'Latin', originNote: '源自拉丁语 ponere，意为"放"' },
  { root: 'preci', meaning: '价值', meaningEn: 'price, value', origin: 'Latin', originNote: '源自拉丁语 pretium，意为"价格"' },
  { root: 'prim', meaning: '第一', meaningEn: 'first', origin: 'Latin', originNote: '源自拉丁语 primus，意为"第一的"' },
  { root: 'prob', meaning: '证明', meaningEn: 'to prove', origin: 'Latin', originNote: '源自拉丁语 probare，意为"证明"' },
  { root: 'prop', meaning: '支持', meaningEn: 'to support', origin: 'Latin', originNote: '源自拉丁语 propportare，意为"支持"' },
  { root: 'puls', meaning: '推', meaningEn: 'to push', origin: 'Latin', originNote: '源自拉丁语 pellere，意为"推"' },
  { root: 'punct', meaning: '点', meaningEn: 'point', origin: 'Latin', originNote: '源自拉丁语 pungere，意为"刺、点"' },
  { root: 'pur', meaning: '纯', meaningEn: 'pure', origin: 'Latin', originNote: '源自拉丁语 purus，意为"纯的"' },
  { root: 'quir', meaning: '寻求', meaningEn: 'to seek', origin: 'Latin', originNote: '源自拉丁语 quaerere，意为"寻求"' },
  
  // Q开头
  { root: 'quer', meaning: '寻求', meaningEn: 'to seek', origin: 'Latin', originNote: '源自拉丁语 quaerere，意为"寻求"' },
  { root: 'quint', meaning: '五', meaningEn: 'five', origin: 'Latin', originNote: '源自拉丁语 quinque，意为"五"' },
  
  // R开头
  { root: 'rad', meaning: '根', meaningEn: 'root', origin: 'Latin', originNote: '源自拉丁语 radix，意为"根"' },
  { root: 'reg', meaning: '统治', meaningEn: 'to rule', origin: 'Latin', originNote: '源自拉丁语 regere，意为"统治"' },
  { root: 'rupt', meaning: '断裂', meaningEn: 'to break', origin: 'Latin', originNote: '源自拉丁语 rumpere，意为"断裂"' },
  
  // S开头
  { root: 'sacr', meaning: '神圣', meaningEn: 'sacred', origin: 'Latin', originNote: '源自拉丁语 sacer，意为"神圣的"' },
  { root: 'scend', meaning: '爬', meaningEn: 'to climb', origin: 'Latin', originNote: '源自拉丁语 scandere，意为"爬"' },
  { root: 'scrib', meaning: '写', meaningEn: 'to write', origin: 'Latin', originNote: '源自拉丁语 scribere，意为"写"' },
  { root: 'script', meaning: '写', meaningEn: 'to write', origin: 'Latin', originNote: '源自拉丁语 scriptum，意为"写"' },
  { root: 'sect', meaning: '切割', meaningEn: 'to cut', origin: 'Latin', originNote: '源自拉丁语 secare，意为"切割"' },
  { root: 'sens', meaning: '感觉', meaningEn: 'to feel', origin: 'Latin', originNote: '源自拉丁语 sentire，意为"感觉"' },
  { root: 'sent', meaning: '感觉', meaningEn: 'to feel', origin: 'Latin', originNote: '源自拉丁语 sentire，意为"感觉"' },
  { root: 'serv', meaning: '服务', meaningEn: 'to serve', origin: 'Latin', originNote: '源自拉丁语 servus，意为"仆人"' },
  { root: 'sign', meaning: '标记', meaningEn: 'mark', origin: 'Latin', originNote: '源自拉丁语 signum，意为"标记"' },
  { root: 'simil', meaning: '相似', meaningEn: 'like, similar', origin: 'Latin', originNote: '源自拉丁语 similis，意为"相似的"' },
  { root: 'sist', meaning: '站', meaningEn: 'to stand', origin: 'Latin', originNote: '源自拉丁语 sistere，意为"站"' },
  { root: 'soci', meaning: '同伴', meaningEn: 'companion', origin: 'Latin', originNote: '源自拉丁语 socius，意为"同伴"' },
  { root: 'sol', meaning: '单独', meaningEn: 'alone', origin: 'Latin', originNote: '源自拉丁语 solus，意为"单独的"' },
  { root: 'solv', meaning: '松开', meaningEn: 'to loosen', origin: 'Latin', originNote: '源自拉丁语 solvere，意为"松开"' },
  { root: 'spec', meaning: '看', meaningEn: 'to look', origin: 'Latin', originNote: '源自拉丁语 specere，意为"看"' },
  { root: 'spect', meaning: '看', meaningEn: 'to look', origin: 'Latin', originNote: '源自拉丁语 specere，意为"看"' },
  { root: 'spir', meaning: '呼吸', meaningEn: 'to breathe', origin: 'Latin', originNote: '源自拉丁语 spirare，意为"呼吸"' },
  { root: 'stat', meaning: '站', meaningEn: 'to stand', origin: 'Latin', originNote: '源自拉丁语 stare，意为"站"' },
  { root: 'struct', meaning: '建造', meaningEn: 'to build', origin: 'Latin', originNote: '源自拉丁语 struere，意为"建造"' },
  { root: 'sum', meaning: '拿', meaningEn: 'to take', origin: 'Latin', originNote: '源自拉丁语 sumere，意为"拿"' },
  { root: 'surg', meaning: '升起', meaningEn: 'to rise', origin: 'Latin', originNote: '源自拉丁语 surgere，意为"升起"' },
  
  // T开头
  { root: 'tact', meaning: '接触', meaningEn: 'to touch', origin: 'Latin', originNote: '源自拉丁语 tangere，意为"接触"' },
  { root: 'tain', meaning: '持', meaningEn: 'to hold', origin: 'Latin', originNote: '源自拉丁语 tenere，意为"持"' },
  { root: 'tect', meaning: '覆盖', meaningEn: 'to cover', origin: 'Latin', originNote: '源自拉丁语 tegere，意为"覆盖"' },
  { root: 'tele', meaning: '远', meaningEn: 'far', origin: 'Greek', originNote: '源自希腊语 tele，意为"远"' },
  { root: 'temp', meaning: '时间', meaningEn: 'time', origin: 'Latin', originNote: '源自拉丁语 tempus，意为"时间"' },
  { root: 'tempor', meaning: '时间', meaningEn: 'time', origin: 'Latin', originNote: '源自拉丁语 tempus，意为"时间"' },
  { root: 'tend', meaning: '伸', meaningEn: 'to stretch', origin: 'Latin', originNote: '源自拉丁语 tendere，意为"伸"' },
  { root: 'ten', meaning: '持', meaningEn: 'to hold', origin: 'Latin', originNote: '源自拉丁语 tenere，意为"持"' },
  { root: 'termin', meaning: '界限', meaningEn: 'end, limit', origin: 'Latin', originNote: '源自拉丁语 terminus，意为"界限"' },
  { root: 'test', meaning: '测试', meaningEn: 'to test', origin: 'Latin', originNote: '源自拉丁语 testis，意为"证人"' },
  { root: 'text', meaning: '编织', meaningEn: 'to weave', origin: 'Latin', originNote: '源自拉丁语 texere，意为"编织"' },
  { root: 'therm', meaning: '热', meaningEn: 'heat', origin: 'Greek', originNote: '源自希腊语 therme，意为"热"' },
  { root: 'tract', meaning: '拉', meaningEn: 'to draw', origin: 'Latin', originNote: '源自拉丁语 trahere，意为"拉"' },
  { root: 'tri', meaning: '三', meaningEn: 'three', origin: 'Latin', originNote: '源自拉丁语 tres，意为"三"' },
  { root: 'trib', meaning: '给予', meaningEn: 'to give', origin: 'Latin', originNote: '源自拉丁语 tribuere，意为"给予"' },
  
  // U开头
  { root: 'un', meaning: '一', meaningEn: 'one', origin: 'Latin', originNote: '源自拉丁语 unus，意为"一"' },
  { root: 'urb', meaning: '城市', meaningEn: 'city', origin: 'Latin', originNote: '源自拉丁语 urbs，意为"城市"' },
  { root: 'us', meaning: '使用', meaningEn: 'to use', origin: 'Latin', originNote: '源自拉丁语 uti，意为"使用"' },
  
  // V开头
  { root: 'vac', meaning: '空', meaningEn: 'empty', origin: 'Latin', originNote: '源自拉丁语 vacuus，意为"空的"' },
  { root: 'val', meaning: '强', meaningEn: 'strong', origin: 'Latin', originNote: '源自拉丁语 valere，意为"强壮"' },
  { root: 'ven', meaning: '来', meaningEn: 'to come', origin: 'Latin', originNote: '源自拉丁语 venire，意为"来"' },
  { root: 'vent', meaning: '来', meaningEn: 'to come', origin: 'Latin', originNote: '源自拉丁语 venire，意为"来"' },
  { root: 'verb', meaning: '词语', meaningEn: 'word', origin: 'Latin', originNote: '源自拉丁语 verbum，意为"词语"' },
  { root: 'vers', meaning: '转', meaningEn: 'to turn', origin: 'Latin', originNote: '源自拉丁语 versare，意为"转"' },
  { root: 'vert', meaning: '转', meaningEn: 'to turn', origin: 'Latin', originNote: '源自拉丁语 vertere，意为"转"' },
  { root: 'vid', meaning: '看', meaningEn: 'to see', origin: 'Latin', originNote: '源自拉丁语 videre，意为"看"' },
  { root: 'vis', meaning: '看', meaningEn: 'to see', origin: 'Latin', originNote: '源自拉丁语 videre，意为"看"' },
  { root: 'vit', meaning: '生命', meaningEn: 'life', origin: 'Latin', originNote: '源自拉丁语 vita，意为"生命"' },
  { root: 'viv', meaning: '活', meaningEn: 'to live', origin: 'Latin', originNote: '源自拉丁语 vivere，意为"活"' },
  { root: 'voc', meaning: '呼唤', meaningEn: 'to call', origin: 'Latin', originNote: '源自拉丁语 vocare，意为"呼唤"' },
  { root: 'vol', meaning: '意志', meaningEn: 'will', origin: 'Latin', originNote: '源自拉丁语 velle，意为"意志"' },
  { root: 'vor', meaning: '吃', meaningEn: 'to eat', origin: 'Latin', originNote: '源自拉丁语 vorare，意为"吃"' },
  
  // 补充词根 - A开头
  { root: 'abl', meaning: '能够', meaningEn: 'able', origin: 'Latin', originNote: '源自拉丁语 habilis，意为"能够的"' },
  { root: 'acr', meaning: '尖锐', meaningEn: 'sharp', origin: 'Greek', originNote: '源自希腊语 akros，意为"顶端"' },
  { root: 'aev', meaning: '时代', meaningEn: 'age', origin: 'Latin', originNote: '源自拉丁语 aevum，意为"时代"' },
  { root: 'ali', meaning: '其他', meaningEn: 'other', origin: 'Latin', originNote: '源自拉丁语 alius，意为"其他的"' },
  { root: 'alt', meaning: '高', meaningEn: 'high', origin: 'Latin', originNote: '源自拉丁语 altus，意为"高的"' },
  { root: 'am', meaning: '爱', meaningEn: 'to love', origin: 'Latin', originNote: '源自拉丁语 amare，意为"爱"' },
  { root: 'amb', meaning: '行走', meaningEn: 'to walk', origin: 'Latin', originNote: '源自拉丁语 ambulare，意为"行走"' },
  { root: 'ang', meaning: '角', meaningEn: 'angle', origin: 'Latin', originNote: '源自拉丁语 angulus，意为"角"' },
  { root: 'anim', meaning: '生命', meaningEn: 'life, spirit', origin: 'Latin', originNote: '源自拉丁语 anima，意为"灵魂"' },
  { root: 'ann', meaning: '年', meaningEn: 'year', origin: 'Latin', originNote: '源自拉丁语 annus，意为"年"' },
  
  // 补充词根 - B开头
  { root: 'barb', meaning: '胡须', meaningEn: 'beard', origin: 'Latin', originNote: '源自拉丁语 barba，意为"胡须"' },
  { root: 'bell', meaning: '美丽', meaningEn: 'beautiful', origin: 'Latin', originNote: '源自拉丁语 bellus，意为"美丽的"' },
  { root: 'bland', meaning: '温和', meaningEn: 'mild', origin: 'Latin', originNote: '源自拉丁语 blandus，意为"温和的"' },
  { root: 'bon', meaning: '好', meaningEn: 'good', origin: 'Latin', originNote: '源自拉丁语 bonus，意为"好的"' },
  { root: 'brach', meaning: '短', meaningEn: 'short', origin: 'Greek', originNote: '源自希腊语 brakhus，意为"短的"' },
  { root: 'bucc', meaning: '脸颊', meaningEn: 'cheek', origin: 'Latin', originNote: '源自拉丁语 bucca，意为"脸颊"' },
  { root: 'burs', meaning: '钱包', meaningEn: 'purse', origin: 'Latin', originNote: '源自拉丁语 bursa，意为"钱包"' },
  
  // 补充词根 - C开头
  { root: 'calc', meaning: '石头', meaningEn: 'stone', origin: 'Latin', originNote: '源自拉丁语 calx，意为"石头"' },
  { root: 'camp', meaning: '田野', meaningEn: 'field', origin: 'Latin', originNote: '源自拉丁语 campus，意为"田野"' },
  { root: 'capr', meaning: '山羊', meaningEn: 'goat', origin: 'Latin', originNote: '源自拉丁语 caper，意为"山羊"' },
  { root: 'card', meaning: '心', meaningEn: 'heart', origin: 'Greek', originNote: '源自希腊语 kardia，意为"心"' },
  { root: 'carp', meaning: '果实', meaningEn: 'fruit', origin: 'Latin', originNote: '源自拉丁语 carpere，意为"采摘"' },
  { root: 'castr', meaning: '阉割', meaningEn: 'to castrate', origin: 'Latin', originNote: '源自拉丁语 castrare，意为"阉割"' },
  { root: 'caut', meaning: '小心', meaningEn: 'careful', origin: 'Latin', originNote: '源自拉丁语 cautus，意为"小心的"' },
  { root: 'cav', meaning: '挖', meaningEn: 'to hollow', origin: 'Latin', originNote: '源自拉丁语 cavare，意为"挖"' },
  { root: 'cedr', meaning: '雪松', meaningEn: 'cedar', origin: 'Latin', originNote: '源自拉丁语 cedrus，意为"雪松"' },
  { root: 'chlor', meaning: '绿色', meaningEn: 'green', origin: 'Greek', originNote: '源自希腊语 chloros，意为"绿色的"' },
  { root: 'chrom', meaning: '颜色', meaningEn: 'color', origin: 'Greek', originNote: '源自希腊语 chroma，意为"颜色"' },
  { root: 'cili', meaning: '睫毛', meaningEn: 'eyelash', origin: 'Latin', originNote: '源自拉丁语 cilium，意为"睫毛"' },
  { root: 'circum', meaning: '周围', meaningEn: 'around', origin: 'Latin', originNote: '源自拉丁语 circum，意为"周围"' },
  { root: 'cliv', meaning: '斜坡', meaningEn: 'slope', origin: 'Latin', originNote: '源自拉丁语 clivus，意为"斜坡"' },
  { root: 'coccy', meaning: '尾骨', meaningEn: 'coccyx', origin: 'Greek', originNote: '源自希腊语 kokkyx，意为"尾骨"' },
  { root: 'col', meaning: '脖子', meaningEn: 'neck', origin: 'Latin', originNote: '源自拉丁语 collum，意为"脖子"' },
  { root: 'cornu', meaning: '角', meaningEn: 'horn', origin: 'Latin', originNote: '源自拉丁语 cornu，意为"角"' },
  { root: 'cortic', meaning: '树皮', meaningEn: 'bark', origin: 'Latin', originNote: '源自拉丁语 cortex，意为"树皮"' },
  { root: 'cost', meaning: '肋骨', meaningEn: 'rib', origin: 'Latin', originNote: '源自拉丁语 costa，意为"肋骨"' },
  
  // 补充词根 - D开头
  { root: 'dactyl', meaning: '手指', meaningEn: 'finger', origin: 'Greek', originNote: '源自希腊语 daktylos，意为"手指"' },
  { root: 'decem', meaning: '十', meaningEn: 'ten', origin: 'Latin', originNote: '源自拉丁语 decem，意为"十"' },
  { root: 'dendr', meaning: '树', meaningEn: 'tree', origin: 'Greek', originNote: '源自希腊语 dendron，意为"树"' },
  { root: 'derm', meaning: '皮肤', meaningEn: 'skin', origin: 'Greek', originNote: '源自希腊语 derma，意为"皮肤"' },
  { root: 'di', meaning: '二', meaningEn: 'two', origin: 'Greek', originNote: '源自希腊语 dis，意为"二"' },
  { root: 'diatr', meaning: '穿过', meaningEn: 'through', origin: 'Greek', originNote: '源自希腊语 diatrepein，意为"穿过"' },
  { root: 'doc', meaning: '教导', meaningEn: 'to teach', origin: 'Latin', originNote: '源自拉丁语 docere，意为"教导"' },
  { root: 'dol', meaning: '痛苦', meaningEn: 'pain', origin: 'Latin', originNote: '源自拉丁语 dolor，意为"痛苦"' },
  { root: 'dors', meaning: '背部', meaningEn: 'back', origin: 'Latin', originNote: '源自拉丁语 dorsum，意为"背部"' },
  { root: 'drom', meaning: '奔跑', meaningEn: 'to run', origin: 'Greek', originNote: '源自希腊语 dromos，意为"奔跑"' },
  
  // 补充词根 - E开头
  { root: 'ech', meaning: '回声', meaningEn: 'echo', origin: 'Greek', originNote: '源自希腊语 ekho，意为"回声"' },
  { root: 'electr', meaning: '电', meaningEn: 'electric', origin: 'Greek', originNote: '源自希腊语 elektron，意为"琥珀"' },
  { root: 'em', meaning: '拿', meaningEn: 'to take', origin: 'Latin', originNote: '源自拉丁语 emere，意为"拿"' },
  { root: 'epi', meaning: '在...上', meaningEn: 'upon', origin: 'Greek', originNote: '源自希腊语 epi，意为"在...上"' },
  { root: 'er', meaning: '比较', meaningEn: 'to compare', origin: 'Latin', originNote: '源自拉丁语 comparare，意为"比较"' },
  { root: 'es', meaning: '吃', meaningEn: 'to eat', origin: 'Latin', originNote: '源自拉丁语 edere，意为"吃"' },
  { root: 'ess', meaning: '存在', meaningEn: 'to be', origin: 'Latin', originNote: '源自拉丁语 esse，意为"存在"' },
  { root: 'evan', meaning: '消失', meaningEn: 'to vanish', origin: 'Latin', originNote: '源自拉丁语 evanescere，意为"消失"' },
  { root: 'exil', meaning: '流放', meaningEn: 'exile', origin: 'Latin', originNote: '源自拉丁语 exilium，意为"流放"' },
  
  // 补充词根 - F开头
  { root: 'fabul', meaning: '说话', meaningEn: 'to speak', origin: 'Latin', originNote: '源自拉丁语 fabulari，意为"说话"' },
  { root: 'faci', meaning: '做', meaningEn: 'to make', origin: 'Latin', originNote: '源自拉丁语 facere，意为"做"' },
  { root: 'fall', meaning: '欺骗', meaningEn: 'to deceive', origin: 'Latin', originNote: '源自拉丁语 fallere，意为"欺骗"' },
  { root: 'fals', meaning: '假', meaningEn: 'false', origin: 'Latin', originNote: '源自拉丁语 falsus，意为"假的"' },
  { root: 'farc', meaning: '填充', meaningEn: 'to stuff', origin: 'Latin', originNote: '源自拉丁语 farcire，意为"填充"' },
  { root: 'fasc', meaning: '捆', meaningEn: 'to bind', origin: 'Latin', originNote: '源自拉丁语 fascis，意为"捆"' },
  { root: 'febr', meaning: '发烧', meaningEn: 'fever', origin: 'Latin', originNote: '源自拉丁语 febris，意为"发烧"' },
  { root: 'ferv', meaning: '沸腾', meaningEn: 'to boil', origin: 'Latin', originNote: '源自拉丁语 fervere，意为"沸腾"' },
  { root: 'fid', meaning: '信任', meaningEn: 'trust', origin: 'Latin', originNote: '源自拉丁语 fides，意为"信任"' },
  { root: 'flagr', meaning: '燃烧', meaningEn: 'to burn', origin: 'Latin', originNote: '源自拉丁语 flagrare，意为"燃烧"' },
  { root: 'flect', meaning: '弯曲', meaningEn: 'to bend', origin: 'Latin', originNote: '源自拉丁语 flectere，意为"弯曲"' },
  { root: 'flex', meaning: '弯曲', meaningEn: 'to bend', origin: 'Latin', originNote: '源自拉丁语 flexus，意为"弯曲"' },
  { root: 'fluvi', meaning: '河流', meaningEn: 'river', origin: 'Latin', originNote: '源自拉丁语 fluvius，意为"河流"' },
  { root: 'for', meaning: '门', meaningEn: 'door', origin: 'Latin', originNote: '源自拉丁语 foris，意为"门"' },
  { root: 'form', meaning: '形状', meaningEn: 'shape', origin: 'Latin', originNote: '源自拉丁语 forma，意为"形状"' },
  { root: 'foss', meaning: '挖掘', meaningEn: 'to dig', origin: 'Latin', originNote: '源自拉丁语 fodere，意为"挖掘"' },
  { root: 'frag', meaning: '破碎', meaningEn: 'to break', origin: 'Latin', originNote: '源自拉丁语 frangere，意为"破碎"' },
  { root: 'frig', meaning: '冷', meaningEn: 'cold', origin: 'Latin', originNote: '源自拉丁语 frigus，意为"冷"' },
  { root: 'frug', meaning: '果实', meaningEn: 'fruit', origin: 'Latin', originNote: '源自拉丁语 fruges，意为"果实"' },
  
  // 补充词根 - G开头
  { root: 'galact', meaning: '牛奶', meaningEn: 'milk', origin: 'Greek', originNote: '源自希腊语 gala，意为"牛奶"' },
  { root: 'glac', meaning: '冰', meaningEn: 'ice', origin: 'Latin', originNote: '源自拉丁语 glacies，意为"冰"' },
  { root: 'gloss', meaning: '舌头', meaningEn: 'tongue', origin: 'Greek', originNote: '源自希腊语 glossa，意为"舌头"' },
  { root: 'grad', meaning: '步', meaningEn: 'step', origin: 'Latin', originNote: '源自拉丁语 gradus，意为"步"' },
  { root: 'graph', meaning: '写', meaningEn: 'to write', origin: 'Greek', originNote: '源自希腊语 graphein，意为"写"' },
  { root: 'grav', meaning: '重', meaningEn: 'heavy', origin: 'Latin', originNote: '源自拉丁语 gravis，意为"重的"' },
  { root: 'gust', meaning: '味道', meaningEn: 'taste', origin: 'Latin', originNote: '源自拉丁语 gustus，意为"味道"' },
  { root: 'gymn', meaning: '裸体', meaningEn: 'naked', origin: 'Greek', originNote: '源自希腊语 gymnos，意为"裸体的"' },
  
  // 补充词根 - H开头
  { root: 'hal', meaning: '呼吸', meaningEn: 'to breathe', origin: 'Greek', originNote: '源自希腊语 halesthai，意为"呼吸"' },
  { root: 'heli', meaning: '太阳', meaningEn: 'sun', origin: 'Greek', originNote: '源自希腊语 helios，意为"太阳"' },
  { root: 'hem', meaning: '血', meaningEn: 'blood', origin: 'Greek', originNote: '源自希腊语 haima，意为"血"' },
  { root: 'hes', meaning: '粘附', meaningEn: 'to stick', origin: 'Latin', originNote: '源自拉丁语 haerere，意为"粘附"' },
  { root: 'hib', meaning: '拥有', meaningEn: 'to hold', origin: 'Latin', originNote: '源自拉丁语 habere，意为"拥有"' },
  { root: 'hom', meaning: '相同', meaningEn: 'same', origin: 'Greek', originNote: '源自希腊语 homos，意为"相同的"' },
  { root: 'hydr', meaning: '水', meaningEn: 'water', origin: 'Greek', originNote: '源自希腊语 hydor，意为"水"' },
  { root: 'hyg', meaning: '健康', meaningEn: 'health', origin: 'Greek', originNote: '源自希腊语 hygieia，意为"健康"' },
  
  // 补充词根 - I开头
  { root: 'ign', meaning: '火', meaningEn: 'fire', origin: 'Latin', originNote: '源自拉丁语 ignis，意为"火"' },
  { root: 'infer', meaning: '带来', meaningEn: 'to bring', origin: 'Latin', originNote: '源自拉丁语 inferre，意为"带来"' },
  { root: 'insul', meaning: '岛屿', meaningEn: 'island', origin: 'Latin', originNote: '源自拉丁语 insula，意为"岛屿"' },
  { root: 'jact', meaning: '投掷', meaningEn: 'to throw', origin: 'Latin', originNote: '源自拉丁语 jacere，意为"投掷"' },
  { root: 'junct', meaning: '连接', meaningEn: 'to join', origin: 'Latin', originNote: '源自拉丁语 jungere，意为"连接"' },
  
  // 补充词根 - K开头
  { root: 'kine', meaning: '运动', meaningEn: 'movement', origin: 'Greek', originNote: '源自希腊语 kinesis，意为"运动"' },
  { root: 'kyber', meaning: '舵手', meaningEn: 'steersman', origin: 'Greek', originNote: '源自希腊语 kybernetes，意为"舵手"' },
  
  // 补充词根 - L开头
  { root: 'lact', meaning: '牛奶', meaningEn: 'milk', origin: 'Latin', originNote: '源自拉丁语 lac，意为"牛奶"' },
  { root: 'lapid', meaning: '石头', meaningEn: 'stone', origin: 'Latin', originNote: '源自拉丁语 lapis，意为"石头"' },
  { root: 'later', meaning: '侧面', meaningEn: 'side', origin: 'Latin', originNote: '源自拉丁语 latus，意为"侧面"' },
  { root: 'laud', meaning: '赞扬', meaningEn: 'to praise', origin: 'Latin', originNote: '源自拉丁语 laudare，意为"赞扬"' },
  { root: 'lev', meaning: '轻', meaningEn: 'light', origin: 'Latin', originNote: '源自拉丁语 levis，意为"轻的"' },
  { root: 'lumin', meaning: '光', meaningEn: 'light', origin: 'Latin', originNote: '源自拉丁语 lumen，意为"光"' },
  
  // 补充词根 - M开头
  { root: 'magn', meaning: '大', meaningEn: 'great', origin: 'Latin', originNote: '源自拉丁语 magnus，意为"大的"' },
  { root: 'mamm', meaning: '乳房', meaningEn: 'breast', origin: 'Latin', originNote: '源自拉丁语 mamma，意为"乳房"' },
  { root: 'marg', meaning: '边缘', meaningEn: 'edge', origin: 'Latin', originNote: '源自拉丁语 margo，意为"边缘"' },
  { root: 'medic', meaning: '治疗', meaningEn: 'healing', origin: 'Latin', originNote: '源自拉丁语 medicus，意为"医生"' },
  { root: 'mens', meaning: '测量', meaningEn: 'to measure', origin: 'Latin', originNote: '源自拉丁语 mensura，意为"测量"' },
  { root: 'migr', meaning: '迁移', meaningEn: 'to migrate', origin: 'Latin', originNote: '源自拉丁语 migrare，意为"迁移"' },
  { root: 'moll', meaning: '软', meaningEn: 'soft', origin: 'Latin', originNote: '源自拉丁语 mollis，意为"软的"' },
  { root: 'morph', meaning: '形状', meaningEn: 'form', origin: 'Greek', originNote: '源自希腊语 morphe，意为"形状"' },
  
  // 补充词根 - N开头
  { root: 'neb', meaning: '云', meaningEn: 'cloud', origin: 'Latin', originNote: '源自拉丁语 nebula，意为"云"' },
  { root: 'noc', meaning: '伤害', meaningEn: 'to harm', origin: 'Latin', originNote: '源自拉丁语 nocere，意为"伤害"' },
  { root: 'nox', meaning: '夜', meaningEn: 'night', origin: 'Latin', originNote: '源自拉丁语 nox，意为"夜"' },
  
  // 补充词根 - O开头
  { root: 'ocul', meaning: '眼睛', meaningEn: 'eye', origin: 'Latin', originNote: '源自拉丁语 oculus，意为"眼睛"' },
  { root: 'oliv', meaning: '橄榄', meaningEn: 'olive', origin: 'Latin', originNote: '源自拉丁语 oliva，意为"橄榄"' },
  { root: 'oper', meaning: '工作', meaningEn: 'work', origin: 'Latin', originNote: '源自拉丁语 opus，意为"工作"' },
  { root: 'os', meaning: '骨', meaningEn: 'bone', origin: 'Latin', originNote: '源自拉丁语 os，意为"骨"' },
  { root: 'ov', meaning: '蛋', meaningEn: 'egg', origin: 'Latin', originNote: '源自拉丁语 ovum，意为"蛋"' },
  
  // 补充词根 - P开头
  { root: 'palli', meaning: '覆盖', meaningEn: 'to cover', origin: 'Latin', originNote: '源自拉丁语 pallium，意为"覆盖物"' },
  { root: 'parv', meaning: '小', meaningEn: 'small', origin: 'Latin', originNote: '源自拉丁语 parvus，意为"小的"' },
  { root: 'path', meaning: '感情', meaningEn: 'feeling', origin: 'Greek', originNote: '源自希腊语 pathos，意为"感情"' },
  { root: 'pedic', meaning: '脚', meaningEn: 'foot', origin: 'Latin', originNote: '源自拉丁语 pes，意为"脚"' },
  { root: 'phob', meaning: '恐惧', meaningEn: 'fear', origin: 'Greek', originNote: '源自希腊语 phobos，意为"恐惧"' },
  { root: 'pinn', meaning: '羽毛', meaningEn: 'feather', origin: 'Latin', originNote: '源自拉丁语 pinna，意为"羽毛"' },
  { root: 'pisc', meaning: '鱼', meaningEn: 'fish', origin: 'Latin', originNote: '源自拉丁语 piscis，意为"鱼"' },
  { root: 'plan', meaning: '平', meaningEn: 'flat', origin: 'Latin', originNote: '源自拉丁语 planus，意为"平的"' },
  { root: 'plant', meaning: '种植', meaningEn: 'to plant', origin: 'Latin', originNote: '源自拉丁语 plantare，意为"种植"' },
  { root: 'plast', meaning: '形成', meaningEn: 'to form', origin: 'Greek', originNote: '源自希腊语 plassein，意为"形成"' },
  { root: 'pleb', meaning: '平民', meaningEn: 'common', origin: 'Latin', originNote: '源自拉丁语 plebs，意为"平民"' },
  { root: 'plic', meaning: '折叠', meaningEn: 'to fold', origin: 'Latin', originNote: '源自拉丁语 plicare，意为"折叠"' },
  { root: 'pneum', meaning: '肺', meaningEn: 'lung', origin: 'Greek', originNote: '源自希腊语 pneumon，意为"肺"' },
  { root: 'pol', meaning: '城市', meaningEn: 'city', origin: 'Greek', originNote: '源自希腊语 polis，意为"城市"' },
  { root: 'port', meaning: '港口', meaningEn: 'harbor', origin: 'Latin', originNote: '源自拉丁语 portus，意为"港口"' },
  
  // 补充词根 - Q开头
  { root: 'quatr', meaning: '四', meaningEn: 'four', origin: 'Latin', originNote: '源自拉丁语 quattuor，意为"四"' },
  { root: 'quer', meaning: '抱怨', meaningEn: 'to complain', origin: 'Latin', originNote: '源自拉丁语 queri，意为"抱怨"' },
  
  // 补充词根 - R开头
  { root: 'radic', meaning: '根', meaningEn: 'root', origin: 'Latin', originNote: '源自拉丁语 radix，意为"根"' },
  { root: 'ram', meaning: '分支', meaningEn: 'branch', origin: 'Latin', originNote: '源自拉丁语 ramus，意为"分支"' },
  { root: 'reclin', meaning: '倾斜', meaningEn: 'to lean', origin: 'Latin', originNote: '源自拉丁语 reclinare，意为"倾斜"' },
  { root: 'rud', meaning: '原始', meaningEn: 'raw', origin: 'Latin', originNote: '源自拉丁语 rudis，意为"原始的"' },
  { root: 'rutil', meaning: '红色', meaningEn: 'red', origin: 'Latin', originNote: '源自拉丁语 rutilus，意为"红色的"' },
  
  // 补充词根 - S开头
  { root: 'sal', meaning: '盐', meaningEn: 'salt', origin: 'Latin', originNote: '源自拉丁语 sal，意为"盐"' },
  { root: 'san', meaning: '健康', meaningEn: 'healthy', origin: 'Latin', originNote: '源自拉丁语 sanus，意为"健康的"' },
  { root: 'satur', meaning: '满', meaningEn: 'full', origin: 'Latin', originNote: '源自拉丁语 satur，意为"满的"' },
  { root: 'sci', meaning: '知道', meaningEn: 'to know', origin: 'Latin', originNote: '源自拉丁语 scire，意为"知道"' },
  { root: 'scol', meaning: '学校', meaningEn: 'school', origin: 'Greek', originNote: '源自希腊语 skhole，意为"学校"' },
  { root: 'secur', meaning: '安全', meaningEn: 'safe', origin: 'Latin', originNote: '源自拉丁语 securus，意为"安全的"' },
  { root: 'sen', meaning: '老', meaningEn: 'old', origin: 'Latin', originNote: '源自拉丁语 senex，意为"老的"' },
  { root: 'sinu', meaning: '弯曲', meaningEn: 'bend', origin: 'Latin', originNote: '源自拉丁语 sinus，意为"弯曲"' },
  { root: 'son', meaning: '声音', meaningEn: 'sound', origin: 'Latin', originNote: '源自拉丁语 sonus，意为"声音"' },
  { root: 'spars', meaning: '散布', meaningEn: 'to scatter', origin: 'Latin', originNote: '源自拉丁语 sparsus，意为"散布"' },
  { root: 'spher', meaning: '球', meaningEn: 'sphere', origin: 'Greek', originNote: '源自希腊语 sphaira，意为"球"' },
  { root: 'splend', meaning: '闪耀', meaningEn: 'to shine', origin: 'Latin', originNote: '源自拉丁语 splendere，意为"闪耀"' },
  { root: 'st', meaning: '站', meaningEn: 'to stand', origin: 'Latin', originNote: '源自拉丁语 stare，意为"站"' },
  { root: 'stimul', meaning: '刺激', meaningEn: 'to stimulate', origin: 'Latin', originNote: '源自拉丁语 stimulare，意为"刺激"' },
  { root: 'strict', meaning: '拉紧', meaningEn: 'to tighten', origin: 'Latin', originNote: '源自拉丁语 stringere，意为"拉紧"' },
  { root: 'stult', meaning: '愚蠢', meaningEn: 'foolish', origin: 'Latin', originNote: '源自拉丁语 stultus，意为"愚蠢的"' },
  { root: 'succ', meaning: '跟随', meaningEn: 'to follow', origin: 'Latin', originNote: '源自拉丁语 succedere，意为"跟随"' },
  
  // 补充词根 - T开头
  { root: 'tard', meaning: '慢', meaningEn: 'slow', origin: 'Latin', originNote: '源自拉丁语 tardus，意为"慢的"' },
  { root: 'temper', meaning: '混合', meaningEn: 'to mix', origin: 'Latin', originNote: '源自拉丁语 temperare，意为"混合"' },
  { root: 'tenebr', meaning: '黑暗', meaningEn: 'darkness', origin: 'Latin', originNote: '源自拉丁语 tenebrae，意为"黑暗"' },
  { root: 'terr', meaning: '土地', meaningEn: 'earth', origin: 'Latin', originNote: '源自拉丁语 terra，意为"土地"' },
  { root: 'therap', meaning: '治疗', meaningEn: 'treatment', origin: 'Greek', originNote: '源自希腊语 therapeia，意为"治疗"' },
  { root: 'tim', meaning: '害怕', meaningEn: 'fear', origin: 'Latin', originNote: '源自拉丁语 timor，意为"害怕"' },
  { root: 'tors', meaning: '扭转', meaningEn: 'to twist', origin: 'Latin', originNote: '源自拉丁语 torquere，意为"扭转"' },
  { root: 'trag', meaning: '山羊', meaningEn: 'goat', origin: 'Greek', originNote: '源自希腊语 tragos，意为"山羊"' },
  { root: 'trepid', meaning: '害怕', meaningEn: 'afraid', origin: 'Latin', originNote: '源自拉丁语 trepidus，意为"害怕的"' },
  { root: 'troph', meaning: '营养', meaningEn: 'nourishment', origin: 'Greek', originNote: '源自希腊语 trophe，意为"营养"' },
  
  // 补充词根 - U开头
  { root: 'ult', meaning: '最后', meaningEn: 'last', origin: 'Latin', originNote: '源自拉丁语 ultimus，意为"最后的"' },
  { root: 'umbr', meaning: '阴影', meaningEn: 'shadow', origin: 'Latin', originNote: '源自拉丁语 umbra，意为"阴影"' },
  { root: 'ust', meaning: '燃烧', meaningEn: 'to burn', origin: 'Latin', originNote: '源自拉丁语 urere，意为"燃烧"' },
  
  // 补充词根 - V开头
  { root: 'valet', meaning: '强壮', meaningEn: 'strong', origin: 'Latin', originNote: '源自拉丁语 valere，意为"强壮"' },
  { root: 'vapor', meaning: '蒸汽', meaningEn: 'steam', origin: 'Latin', originNote: '源自拉丁语 vapor，意为"蒸汽"' },
  { root: 'veh', meaning: '携带', meaningEn: 'to carry', origin: 'Latin', originNote: '源自拉丁语 vehere，意为"携带"' },
  { root: 'venen', meaning: '毒药', meaningEn: 'poison', origin: 'Latin', originNote: '源自拉丁语 venenum，意为"毒药"' },
  { root: 'ver', meaning: '真实', meaningEn: 'true', origin: 'Latin', originNote: '源自拉丁语 verus，意为"真实的"' },
  { root: 'vesp', meaning: '黄蜂', meaningEn: 'wasp', origin: 'Latin', originNote: '源自拉丁语 vespa，意为"黄蜂"' },
  { root: 'vest', meaning: '穿', meaningEn: 'to clothe', origin: 'Latin', originNote: '源自拉丁语 vestire，意为"穿"' },
  { root: 'vi', meaning: '道路', meaningEn: 'way', origin: 'Latin', originNote: '源自拉丁语 via，意为"道路"' },
  { root: 'vinc', meaning: '征服', meaningEn: 'to conquer', origin: 'Latin', originNote: '源自拉丁语 vincere，意为"征服"' },
  { root: 'vitr', meaning: '玻璃', meaningEn: 'glass', origin: 'Latin', originNote: '源自拉丁语 vitrum，意为"玻璃"' },
];

// 同根词数据库 - 每个词根5-10个同根词
const relatedWordsDatabase = {
  'act': [
    { word: 'action', meaning: 'n. 行动', level: 'IELTS5' },
    { word: 'activity', meaning: 'n. 活动', level: 'IELTS5' },
    { word: 'actor', meaning: 'n. 演员', level: 'IELTS5' },
    { word: 'active', meaning: 'adj. 积极的', level: 'IELTS5' },
    { word: 'interact', meaning: 'v. 互动', level: 'IELTS6' },
    { word: 'react', meaning: 'v. 反应', level: 'IELTS6' },
    { word: 'enact', meaning: 'v. 制定', level: 'IELTS7' },
  ],
  'acu': [
    { word: 'acute', meaning: 'adj. 尖锐的', level: 'IELTS7' },
    { word: 'acuity', meaning: 'n. 敏锐', level: 'IELTS8' },
    { word: 'acumen', meaning: 'n. 敏锐', level: 'IELTS8' },
    { word: 'acupuncture', meaning: 'n. 针灸', level: 'IELTS7' },
    { word: 'acute', meaning: 'adj. 急性的', level: 'IELTS7' },
  ],
  'aer': [
    { word: 'aerial', meaning: 'adj. 空中的', level: 'IELTS6' },
    { word: 'aeroplane', meaning: 'n. 飞机', level: 'IELTS5' },
    { word: 'aerospace', meaning: 'n. 航空航天', level: 'IELTS7' },
    { word: 'aerobic', meaning: 'adj. 有氧的', level: 'IELTS7' },
    { word: 'anaerobic', meaning: 'adj. 无氧的', level: 'IELTS8' },
  ],
  'agr': [
    { word: 'agriculture', meaning: 'n. 农业', level: 'IELTS6' },
    { word: 'agricultural', meaning: 'adj. 农业的', level: 'IELTS6' },
    { word: 'agrarian', meaning: 'adj. 土地的', level: 'IELTS7' },
    { word: 'agronomy', meaning: 'n. 农学', level: 'IELTS8' },
    { word: 'peregrinate', meaning: 'v. 旅行', level: 'IELTS8' },
  ],
  'ali': [
    { word: 'alias', meaning: 'n. 别名', level: 'IELTS7' },
    { word: 'alibi', meaning: 'n. 不在场证明', level: 'IELTS7' },
    { word: 'alien', meaning: 'adj. 外国的', level: 'IELTS6' },
    { word: 'alternative', meaning: 'adj. 替代的', level: 'IELTS6' },
    { word: 'alimentary', meaning: 'adj. 营养的', level: 'IELTS8' },
  ],
  'alt': [
    { word: 'altitude', meaning: 'n. 高度', level: 'IELTS6' },
    { word: 'altar', meaning: 'n. 祭坛', level: 'IELTS7' },
    { word: 'alter', meaning: 'v. 改变', level: 'IELTS6' },
    { word: 'alternate', meaning: 'adj. 交替的', level: 'IELTS7' },
    { word: 'exalt', meaning: 'v. 提升', level: 'IELTS8' },
  ],
  'ambul': [
    { word: 'ambulance', meaning: 'n. 救护车', level: 'IELTS5' },
    { word: 'ambulatory', meaning: 'adj. 步行的', level: 'IELTS8' },
    { word: 'perambulate', meaning: 'v. 漫步', level: 'IELTS8' },
    { word: 'circumambulate', meaning: 'v. 绕行', level: 'IELTS8' },
    { word: 'ambulate', meaning: 'v. 行走', level: 'IELTS7' },
  ],
  'anim': [
    { word: 'animal', meaning: 'n. 动物', level: 'IELTS5' },
    { word: 'animate', meaning: 'v. 使有活力', level: 'IELTS7' },
    { word: 'animation', meaning: 'n. 动画', level: 'IELTS6' },
    { word: 'unanimous', meaning: 'adj. 全体一致的', level: 'IELTS7' },
    { word: 'magnanimous', meaning: 'adj. 宽宏大量的', level: 'IELTS8' },
  ],
  'anthrop': [
    { word: 'anthropology', meaning: 'n. 人类学', level: 'IELTS7' },
    { word: 'anthropologist', meaning: 'n. 人类学家', level: 'IELTS7' },
    { word: 'anthropoid', meaning: 'adj. 似人的', level: 'IELTS8' },
    { word: 'misanthrope', meaning: 'n. 厌世者', level: 'IELTS8' },
    { word: 'philanthropy', meaning: 'n. 慈善', level: 'IELTS7' },
  ],
  'arch': [
    { word: 'monarch', meaning: 'n. 君主', level: 'IELTS7' },
    { word: 'monarchy', meaning: 'n. 君主制', level: 'IELTS7' },
    { word: 'anarchy', meaning: 'n. 无政府状态', level: 'IELTS8' },
    { word: 'architect', meaning: 'n. 建筑师', level: 'IELTS6' },
    { word: 'architecture', meaning: 'n. 建筑学', level: 'IELTS6' },
  ],
  'astr': [
    { word: 'astronomy', meaning: 'n. 天文学', level: 'IELTS7' },
    { word: 'astronaut', meaning: 'n. 宇航员', level: 'IELTS6' },
    { word: 'astrology', meaning: 'n. 占星术', level: 'IELTS7' },
    { word: 'asteroid', meaning: 'n. 小行星', level: 'IELTS7' },
    { word: 'astral', meaning: 'adj. 星的', level: 'IELTS8' },
  ],
  'aud': [
    { word: 'audio', meaning: 'adj. 音频的', level: 'IELTS5' },
    { word: 'audience', meaning: 'n. 观众', level: 'IELTS5' },
    { word: 'auditor', meaning: 'n. 审计员', level: 'IELTS6' },
    { word: 'auditory', meaning: 'adj. 听觉的', level: 'IELTS6' },
    { word: 'audible', meaning: 'adj. 可听见的', level: 'IELTS6' },
  ],
  'bio': [
    { word: 'biology', meaning: 'n. 生物学', level: 'IELTS5' },
    { word: 'biography', meaning: 'n. 传记', level: 'IELTS6' },
    { word: 'biosphere', meaning: 'n. 生物圈', level: 'IELTS7' },
    { word: 'biodegradable', meaning: 'adj. 可生物降解的', level: 'IELTS7' },
    { word: 'biodiversity', meaning: 'n. 生物多样性', level: 'IELTS7' },
  ],
  'brev': [
    { word: 'brief', meaning: 'adj. 简短的', level: 'IELTS5' },
    { word: 'brevity', meaning: 'n. 简洁', level: 'IELTS7' },
    { word: 'abbreviate', meaning: 'v. 缩写', level: 'IELTS7' },
    { word: 'abbreviation', meaning: 'n. 缩写', level: 'IELTS6' },
    { word: 'breviary', meaning: 'n. 摘要', level: 'IELTS8' },
  ],
  'cad': [
    { word: 'decadent', meaning: 'adj. 颓废的', level: 'IELTS7' },
    { word: 'cadence', meaning: 'n. 韵律', level: 'IELTS8' },
    { word: 'cadaver', meaning: 'n. 尸体', level: 'IELTS8' },
    { word: 'cascade', meaning: 'n. 瀑布', level: 'IELTS7' },
    { word: 'incident', meaning: 'n. 事件', level: 'IELTS6' },
  ],
  'cap': [
    { word: 'capable', meaning: 'adj. 有能力的', level: 'IELTS5' },
    { word: 'capacity', meaning: 'n. 容量', level: 'IELTS6' },
    { word: 'capture', meaning: 'v. 捕获', level: 'IELTS6' },
    { word: 'captain', meaning: 'n. 船长', level: 'IELTS5' },
    { word: 'capital', meaning: 'n. 首都', level: 'IELTS5' },
  ],
  'ced': [
    { word: 'proceed', meaning: 'v. 继续', level: 'IELTS6' },
    { word: 'exceed', meaning: 'v. 超过', level: 'IELTS6' },
    { word: 'succeed', meaning: 'v. 成功', level: 'IELTS5' },
    { word: 'precede', meaning: 'v. 领先', level: 'IELTS7' },
    { word: 'recede', meaning: 'v. 后退', level: 'IELTS7' },
  ],
  'centr': [
    { word: 'center', meaning: 'n. 中心', level: 'IELTS5' },
    { word: 'central', meaning: 'adj. 中心的', level: 'IELTS5' },
    { word: 'concentrate', meaning: 'v. 集中', level: 'IELTS6' },
    { word: 'centric', meaning: 'adj. 中心的', level: 'IELTS7' },
    { word: 'centrifugal', meaning: 'adj. 离心的', level: 'IELTS8' },
  ],
  'cert': [
    { word: 'certain', meaning: 'adj. 确定的', level: 'IELTS5' },
    { word: 'certificate', meaning: 'n. 证书', level: 'IELTS6' },
    { word: 'certify', meaning: 'v. 证明', level: 'IELTS7' },
    { word: 'ascertain', meaning: 'v. 确定', level: 'IELTS8' },
    { word: 'certitude', meaning: 'n. 确信', level: 'IELTS8' },
  ],
  'cid': [
    { word: 'decide', meaning: 'v. 决定', level: 'IELTS5' },
    { word: 'decision', meaning: 'n. 决定', level: 'IELTS5' },
    { word: 'precise', meaning: 'adj. 精确的', level: 'IELTS6' },
    { word: 'precision', meaning: 'n. 精确', level: 'IELTS7' },
    { word: 'suicide', meaning: 'n. 自杀', level: 'IELTS7' },
  ],
  'circ': [
    { word: 'circle', meaning: 'n. 圆', level: 'IELTS5' },
    { word: 'circuit', meaning: 'n. 电路', level: 'IELTS6' },
    { word: 'circular', meaning: 'adj. 圆形的', level: 'IELTS6' },
    { word: 'circulate', meaning: 'v. 循环', level: 'IELTS7' },
    { word: 'circumference', meaning: 'n. 周长', level: 'IELTS7' },
  ],
  'clud': [
    { word: 'include', meaning: 'v. 包括', level: 'IELTS5' },
    { word: 'exclude', meaning: 'v. 排除', level: 'IELTS6' },
    { word: 'conclude', meaning: 'v. 结论', level: 'IELTS6' },
    { word: 'seclude', meaning: 'v. 隔离', level: 'IELTS7' },
    { word: 'preclude', meaning: 'v. 阻止', level: 'IELTS8' },
  ],
  'cogn': [
    { word: 'recognize', meaning: 'v. 识别', level: 'IELTS5' },
    { word: 'cognitive', meaning: 'adj. 认知的', level: 'IELTS7' },
    { word: 'recognizable', meaning: 'adj. 可识别的', level: 'IELTS6' },
    { word: 'cognition', meaning: 'n. 认知', level: 'IELTS7' },
    { word: 'incognito', meaning: 'adj. 隐姓埋名的', level: 'IELTS8' },
  ],
  'cred': [
    { word: 'credit', meaning: 'n. 信用', level: 'IELTS5' },
    { word: 'credible', meaning: 'adj. 可信的', level: 'IELTS6' },
    { word: 'incredible', meaning: 'adj. 难以置信的', level: 'IELTS6' },
    { word: 'credential', meaning: 'n. 证书', level: 'IELTS7' },
    { word: 'credulous', meaning: 'adj. 轻信的', level: 'IELTS8' },
  ],
  'cur': [
    { word: 'current', meaning: 'adj. 当前的', level: 'IELTS5' },
    { word: 'currency', meaning: 'n. 货币', level: 'IELTS6' },
    { word: 'curriculum', meaning: 'n. 课程', level: 'IELTS7' },
    { word: 'occur', meaning: 'v. 发生', level: 'IELTS6' },
    { word: 'recur', meaning: 'v. 重现', level: 'IELTS7' },
  ],
  'dem': [
    { word: 'democracy', meaning: 'n. 民主', level: 'IELTS6' },
    { word: 'democratic', meaning: 'adj. 民主的', level: 'IELTS6' },
    { word: 'democrat', meaning: 'n. 民主人士', level: 'IELTS7' },
    { word: 'demographic', meaning: 'adj. 人口统计的', level: 'IELTS7' },
    { word: 'epidemic', meaning: 'n. 流行病', level: 'IELTS7' },
  ],
  'dict': [
    { word: 'predict', meaning: 'v. 预测', level: 'IELTS6' },
    { word: 'dictionary', meaning: 'n. 词典', level: 'IELTS5' },
    { word: 'contradict', meaning: 'v. 矛盾', level: 'IELTS7' },
    { word: 'verdict', meaning: 'n. 裁决', level: 'IELTS7' },
    { word: 'dictate', meaning: 'v. 口述', level: 'IELTS7' },
  ],
  'duc': [
    { word: 'produce', meaning: 'v. 生产', level: 'IELTS5' },
    { word: 'reduce', meaning: 'v. 减少', level: 'IELTS5' },
    { word: 'educate', meaning: 'v. 教育', level: 'IELTS5' },
    { word: 'introduce', meaning: 'v. 介绍', level: 'IELTS5' },
    { word: 'conduct', meaning: 'v. 引导', level: 'IELTS6' },
  ],
  'equ': [
    { word: 'equal', meaning: 'adj. 相等的', level: 'IELTS5' },
    { word: 'equality', meaning: 'n. 平等', level: 'IELTS6' },
    { word: 'equation', meaning: 'n. 方程', level: 'IELTS6' },
    { word: 'equivalent', meaning: 'adj. 等价的', level: 'IELTS6' },
    { word: 'equilibrium', meaning: 'n. 平衡', level: 'IELTS7' },
  ],
  'fac': [
    { word: 'factory', meaning: 'n. 工厂', level: 'IELTS5' },
    { word: 'factor', meaning: 'n. 因素', level: 'IELTS5' },
    { word: 'facility', meaning: 'n. 设施', level: 'IELTS6' },
    { word: 'facial', meaning: 'adj. 面部的', level: 'IELTS5' },
    { word: 'facilitate', meaning: 'v. 促进', level: 'IELTS7' },
  ],
  'fer': [
    { word: 'transfer', meaning: 'v. 转移', level: 'IELTS6' },
    { word: 'refer', meaning: 'v. 参考', level: 'IELTS5' },
    { word: 'prefer', meaning: 'v. 更喜欢', level: 'IELTS5' },
    { word: 'infer', meaning: 'v. 推断', level: 'IELTS6' },
    { word: 'confer', meaning: 'v. 授予', level: 'IELTS7' },
  ],
  'fin': [
    { word: 'finish', meaning: 'v. 完成', level: 'IELTS5' },
    { word: 'final', meaning: 'adj. 最终的', level: 'IELTS5' },
    { word: 'finance', meaning: 'n. 金融', level: 'IELTS5' },
    { word: 'finite', meaning: 'adj. 有限的', level: 'IELTS7' },
    { word: 'infinite', meaning: 'adj. 无限的', level: 'IELTS7' },
  ],
  'flu': [
    { word: 'fluid', meaning: 'n. 流体', level: 'IELTS6' },
    { word: 'fluent', meaning: 'adj. 流利的', level: 'IELTS6' },
    { word: 'influence', meaning: 'n. 影响', level: 'IELTS6' },
    { word: 'influential', meaning: 'adj. 有影响力的', level: 'IELTS7' },
    { word: 'superfluous', meaning: 'adj. 多余的', level: 'IELTS8' },
  ],
  'form': [
    { word: 'form', meaning: 'n. 形式', level: 'IELTS5' },
    { word: 'inform', meaning: 'v. 通知', level: 'IELTS5' },
    { word: 'reform', meaning: 'v. 改革', level: 'IELTS6' },
    { word: 'transform', meaning: 'v. 转变', level: 'IELTS6' },
    { word: 'perform', meaning: 'v. 执行', level: 'IELTS6' },
  ],
  'gen': [
    { word: 'general', meaning: 'adj. 一般的', level: 'IELTS5' },
    { word: 'generate', meaning: 'v. 产生', level: 'IELTS6' },
    { word: 'genius', meaning: 'n. 天才', level: 'IELTS6' },
    { word: 'gene', meaning: 'n. 基因', level: 'IELTS6' },
    { word: 'genuine', meaning: 'adj. 真正的', level: 'IELTS7' },
  ],
  'geo': [
    { word: 'geography', meaning: 'n. 地理学', level: 'IELTS6' },
    { word: 'geology', meaning: 'n. 地质学', level: 'IELTS7' },
    { word: 'geometry', meaning: 'n. 几何学', level: 'IELTS7' },
    { word: 'geothermal', meaning: 'adj. 地热的', level: 'IELTS8' },
    { word: 'geocentric', meaning: 'adj. 地心的', level: 'IELTS8' },
  ],
  'grad': [
    { word: 'graduate', meaning: 'v. 毕业', level: 'IELTS5' },
    { word: 'grade', meaning: 'n. 等级', level: 'IELTS5' },
    { word: 'gradient', meaning: 'n. 梯度', level: 'IELTS7' },
    { word: 'gradual', meaning: 'adj. 逐渐的', level: 'IELTS6' },
    { word: 'centigrade', meaning: 'adj. 摄氏的', level: 'IELTS6' },
  ],
  'graph': [
    { word: 'graph', meaning: 'n. 图表', level: 'IELTS5' },
    { word: 'photograph', meaning: 'n. 照片', level: 'IELTS5' },
    { word: 'biography', meaning: 'n. 传记', level: 'IELTS6' },
    { word: 'paragraph', meaning: 'n. 段落', level: 'IELTS5' },
    { word: 'telegraph', meaning: 'n. 电报', level: 'IELTS7' },
    { word: 'autograph', meaning: 'n. 亲笔签名', level: 'IELTS7' },
    { word: 'cartography', meaning: 'n. 制图学', level: 'IELTS8' },
    { word: 'photography', meaning: 'n. 摄影', level: 'IELTS6' },
    { word: 'calligraphy', meaning: 'n. 书法', level: 'IELTS8' },
  ],
  'hydr': [
    { word: 'hydraulic', meaning: 'adj. 水力的', level: 'IELTS7' },
    { word: 'hydroelectric', meaning: 'adj. 水电的', level: 'IELTS8' },
    { word: 'dehydrate', meaning: 'v. 脱水', level: 'IELTS8' },
    { word: 'hydrogen', meaning: 'n. 氢', level: 'IELTS6' },
    { word: 'hydrophobia', meaning: 'n. 恐水症', level: 'IELTS8' },
  ],
  'ject': [
    { word: 'project', meaning: 'n. 项目', level: 'IELTS5' },
    { word: 'reject', meaning: 'v. 拒绝', level: 'IELTS6' },
    { word: 'inject', meaning: 'v. 注射', level: 'IELTS6' },
    { word: 'subject', meaning: 'n. 主题', level: 'IELTS5' },
    { word: 'object', meaning: 'n. 对象', level: 'IELTS5' },
    { word: 'eject', meaning: 'v. 驱逐', level: 'IELTS7' },
  ],
  'log': [
    { word: 'dialogue', meaning: 'n. 对话', level: 'IELTS6' },
    { word: 'prologue', meaning: 'n. 前言', level: 'IELTS7' },
    { word: 'epilogue', meaning: 'n. 结语', level: 'IELTS8' },
    { word: 'monologue', meaning: 'n. 独白', level: 'IELTS8' },
    { word: 'catalog', meaning: 'n. 目录', level: 'IELTS7' },
  ],
  'mit': [
    { word: 'transmit', meaning: 'v. 传输', level: 'IELTS7' },
    { word: 'submit', meaning: 'v. 提交', level: 'IELTS6' },
    { word: 'permit', meaning: 'v. 允许', level: 'IELTS6' },
    { word: 'emit', meaning: 'v. 发出', level: 'IELTS7' },
    { word: 'remit', meaning: 'v. 汇款', level: 'IELTS7' },
  ],
  'mort': [
    { word: 'mortal', meaning: 'adj. 终有一死的', level: 'IELTS7' },
    { word: 'mortality', meaning: 'n. 死亡率', level: 'IELTS7' },
    { word: 'immortal', meaning: 'adj. 不朽的', level: 'IELTS7' },
    { word: 'mortgage', meaning: 'n. 抵押贷款', level: 'IELTS7' },
    { word: 'postmortem', meaning: 'adj. 死后的', level: 'IELTS8' },
  ],
  'nov': [
    { word: 'novel', meaning: 'adj. 新奇的', level: 'IELTS6' },
    { word: 'innovate', meaning: 'v. 创新', level: 'IELTS7' },
    { word: 'innovation', meaning: 'n. 创新', level: 'IELTS7' },
    { word: 'innovative', meaning: 'adj. 创新的', level: 'IELTS7' },
    { word: 'renovate', meaning: 'v. 翻新', level: 'IELTS7' },
  ],
  'ped': [
    { word: 'pedestrian', meaning: 'n. 行人', level: 'IELTS6' },
    { word: 'pedal', meaning: 'n. 踏板', level: 'IELTS7' },
    { word: 'expedition', meaning: 'n. 远征', level: 'IELTS7' },
    { word: 'impede', meaning: 'v. 阻碍', level: 'IELTS8' },
    { word: 'pedigree', meaning: 'n. 血统', level: 'IELTS8' },
  ],
  'phon': [
    { word: 'telephone', meaning: 'n. 电话', level: 'IELTS5' },
    { word: 'microphone', meaning: 'n. 麦克风', level: 'IELTS6' },
    { word: 'symphony', meaning: 'n. 交响乐', level: 'IELTS7' },
    { word: 'phonetics', meaning: 'n. 语音学', level: 'IELTS8' },
    { word: 'euphonious', meaning: 'adj. 悦耳的', level: 'IELTS8' },
  ],
  'port': [
    { word: 'transport', meaning: 'v. 运输', level: 'IELTS5' },
    { word: 'import', meaning: 'v. 进口', level: 'IELTS5' },
    { word: 'export', meaning: 'v. 出口', level: 'IELTS5' },
    { word: 'report', meaning: 'n. 报告', level: 'IELTS5' },
    { word: 'support', meaning: 'v. 支持', level: 'IELTS5' },
    { word: 'portable', meaning: 'adj. 便携的', level: 'IELTS6' },
  ],
  'rupt': [
    { word: 'erupt', meaning: 'v. 爆发', level: 'IELTS7' },
    { word: 'interrupt', meaning: 'v. 中断', level: 'IELTS6' },
    { word: 'bankrupt', meaning: 'adj. 破产的', level: 'IELTS7' },
    { word: 'corrupt', meaning: 'adj. 腐败的', level: 'IELTS7' },
    { word: 'disrupt', meaning: 'v. 破坏', level: 'IELTS7' },
  ],
  'scrib': [
    { word: 'describe', meaning: 'v. 描述', level: 'IELTS5' },
    { word: 'subscribe', meaning: 'v. 订阅', level: 'IELTS6' },
    { word: 'prescribe', meaning: 'v. 开处方', level: 'IELTS7' },
    { word: 'inscribe', meaning: 'v. 题写', level: 'IELTS8' },
    { word: 'manuscript', meaning: 'n. 手稿', level: 'IELTS7' },
  ],
  'sect': [
    { word: 'section', meaning: 'n. 部分', level: 'IELTS5' },
    { word: 'insect', meaning: 'n. 昆虫', level: 'IELTS5' },
    { word: 'dissect', meaning: 'v. 解剖', level: 'IELTS7' },
    { word: 'intersect', meaning: 'v. 相交', level: 'IELTS7' },
    { word: 'bisect', meaning: 'v. 平分', level: 'IELTS8' },
  ],
  'spect': [
    { word: 'inspect', meaning: 'v. 检查', level: 'IELTS6' },
    { word: 'respect', meaning: 'v. 尊重', level: 'IELTS5' },
    { word: 'expect', meaning: 'v. 期待', level: 'IELTS5' },
    { word: 'prospect', meaning: 'n. 前景', level: 'IELTS6' },
    { word: 'suspect', meaning: 'v. 怀疑', level: 'IELTS6' },
    { word: 'spectacle', meaning: 'n. 景象', level: 'IELTS7' },
  ],
  'struct': [
    { word: 'structure', meaning: 'n. 结构', level: 'IELTS5' },
    { word: 'construct', meaning: 'v. 建造', level: 'IELTS6' },
    { word: 'instruct', meaning: 'v. 指导', level: 'IELTS6' },
    { word: 'destruct', meaning: 'v. 破坏', level: 'IELTS7' },
    { word: 'infrastructure', meaning: 'n. 基础设施', level: 'IELTS7' },
  ],
  'tract': [
    { word: 'attract', meaning: 'v. 吸引', level: 'IELTS5' },
    { word: 'extract', meaning: 'v. 提取', level: 'IELTS6' },
    { word: 'contract', meaning: 'n. 合同', level: 'IELTS6' },
    { word: 'subtract', meaning: 'v. 减去', level: 'IELTS6' },
    { word: 'distract', meaning: 'v. 分散', level: 'IELTS7' },
    { word: 'abstract', meaning: 'adj. 抽象的', level: 'IELTS7' },
  ],
  'vis': [
    { word: 'visible', meaning: 'adj. 可见的', level: 'IELTS5' },
    { word: 'vision', meaning: 'n. 视力', level: 'IELTS6' },
    { word: 'visit', meaning: 'v. 访问', level: 'IELTS5' },
    { word: 'visual', meaning: 'adj. 视觉的', level: 'IELTS6' },
    { word: 'revise', meaning: 'v. 修改', level: 'IELTS6' },
    { word: 'supervise', meaning: 'v. 监督', level: 'IELTS7' },
  ],
  'vid': [
    { word: 'video', meaning: 'n. 视频', level: 'IELTS5' },
    { word: 'evidence', meaning: 'n. 证据', level: 'IELTS6' },
    { word: 'evident', meaning: 'adj. 明显的', level: 'IELTS6' },
    { word: 'provide', meaning: 'v. 提供', level: 'IELTS5' },
    { word: 'improvise', meaning: 'v. 即兴创作', level: 'IELTS8' },
  ],
  'voc': [
    { word: 'vocal', meaning: 'adj. 声音的', level: 'IELTS7' },
    { word: 'vocabulary', meaning: 'n. 词汇', level: 'IELTS6' },
    { word: 'advocate', meaning: 'v. 提倡', level: 'IELTS7' },
    { word: 'provoke', meaning: 'v. 激怒', level: 'IELTS7' },
    { word: 'invoke', meaning: 'v. 调用', level: 'IELTS8' },
  ],
  'vers': [
    { word: 'reverse', meaning: 'v. 反转', level: 'IELTS6' },
    { word: 'universe', meaning: 'n. 宇宙', level: 'IELTS6' },
    { word: 'version', meaning: 'n. 版本', level: 'IELTS5' },
    { word: 'diverse', meaning: 'adj. 多样的', level: 'IELTS6' },
    { word: 'conversation', meaning: 'n. 对话', level: 'IELTS5' },
    { word: 'controversy', meaning: 'n. 争议', level: 'IELTS7' },
  ],
  'vert': [
    { word: 'convert', meaning: 'v. 转换', level: 'IELTS6' },
    { word: 'divert', meaning: 'v. 转移', level: 'IELTS7' },
    { word: 'invert', meaning: 'v. 倒转', level: 'IELTS8' },
    { word: 'revert', meaning: 'v. 恢复', level: 'IELTS8' },
    { word: 'advert', meaning: 'v. 注意', level: 'IELTS8' },
  ],
  'viv': [
    { word: 'vivid', meaning: 'adj. 生动的', level: 'IELTS6' },
    { word: 'survive', meaning: 'v. 生存', level: 'IELTS6' },
    { word: 'revive', meaning: 'v. 复活', level: 'IELTS7' },
    { word: 'vital', meaning: 'adj. 重要的', level: 'IELTS6' },
    { word: 'vitamin', meaning: 'n. 维生素', level: 'IELTS5' },
  ],
  'serv': [
    { word: 'service', meaning: 'n. 服务', level: 'IELTS5' },
    { word: 'servant', meaning: 'n. 仆人', level: 'IELTS6' },
    { word: 'serve', meaning: 'v. 服务', level: 'IELTS5' },
    { word: 'deserve', meaning: 'v. 值得', level: 'IELTS6' },
    { word: 'conserve', meaning: 'v. 保存', level: 'IELTS7' },
    { word: 'observe', meaning: 'v. 观察', level: 'IELTS6' },
  ],
  'sign': [
    { word: 'signal', meaning: 'n. 信号', level: 'IELTS6' },
    { word: 'signature', meaning: 'n. 签名', level: 'IELTS6' },
    { word: 'significant', meaning: 'adj. 重要的', level: 'IELTS6' },
    { word: 'signify', meaning: 'v. 意味着', level: 'IELTS7' },
    { word: 'assign', meaning: 'v. 分配', level: 'IELTS7' },
    { word: 'design', meaning: 'v. 设计', level: 'IELTS5' },
  ],
  'solv': [
    { word: 'solve', meaning: 'v. 解决', level: 'IELTS5' },
    { word: 'solution', meaning: 'n. 解决方案', level: 'IELTS5' },
    { word: 'resolve', meaning: 'v. 决定', level: 'IELTS6' },
    { word: 'dissolve', meaning: 'v. 溶解', level: 'IELTS7' },
    { word: 'absolute', meaning: 'adj. 绝对的', level: 'IELTS6' },
  ],
  'spec': [
    { word: 'special', meaning: 'adj. 特殊的', level: 'IELTS5' },
    { word: 'specialist', meaning: 'n. 专家', level: 'IELTS6' },
    { word: 'specialize', meaning: 'v. 专攻', level: 'IELTS7' },
    { word: 'species', meaning: 'n. 物种', level: 'IELTS6' },
    { word: 'specific', meaning: 'adj. 具体的', level: 'IELTS6' },
  ],
  'tele': [
    { word: 'telephone', meaning: 'n. 电话', level: 'IELTS5' },
    { word: 'television', meaning: 'n. 电视', level: 'IELTS5' },
    { word: 'telegram', meaning: 'n. 电报', level: 'IELTS7' },
    { word: 'telescope', meaning: 'n. 望远镜', level: 'IELTS6' },
    { word: 'telecommute', meaning: 'v. 远程办公', level: 'IELTS8' },
  ],
  'therm': [
    { word: 'thermometer', meaning: 'n. 温度计', level: 'IELTS6' },
    { word: 'thermos', meaning: 'n. 保温瓶', level: 'IELTS7' },
    { word: 'thermostat', meaning: 'n. 恒温器', level: 'IELTS8' },
    { word: 'exothermic', meaning: 'adj. 放热的', level: 'IELTS8' },
    { word: 'thermocouple', meaning: 'n. 热电偶', level: 'IELTS8' },
  ],
  'sent': [
    { word: 'sentiment', meaning: 'n. 情感', level: 'IELTS7' },
    { word: 'sentimental', meaning: 'adj. 感伤的', level: 'IELTS7' },
    { word: 'consent', meaning: 'v. 同意', level: 'IELTS7' },
    { word: 'resent', meaning: 'v. 愤恨', level: 'IELTS8' },
    { word: 'dissent', meaning: 'v. 不同意', level: 'IELTS8' },
  ],
  'phil': [
    { word: 'philosophy', meaning: 'n. 哲学', level: 'IELTS6' },
    { word: 'philosopher', meaning: 'n. 哲学家', level: 'IELTS7' },
    { word: 'philanthropist', meaning: 'n. 慈善家', level: 'IELTS8' },
    { word: 'philanthropy', meaning: 'n. 慈善', level: 'IELTS7' },
    { word: 'philology', meaning: 'n. 文献学', level: 'IELTS8' },
  ],
  'leg': [
    { word: 'legal', meaning: 'adj. 法律的', level: 'IELTS6' },
    { word: 'legislation', meaning: 'n. 立法', level: 'IELTS7' },
    { word: 'legitimate', meaning: 'adj. 合法的', level: 'IELTS7' },
    { word: 'legend', meaning: 'n. 传奇', level: 'IELTS6' },
    { word: 'legacy', meaning: 'n. 遗产', level: 'IELTS7' },
    { word: 'legible', meaning: 'adj. 清晰的', level: 'IELTS7' },
  ],
  'jud': [
    { word: 'judge', meaning: 'v. 判断', level: 'IELTS5' },
    { word: 'judgment', meaning: 'n. 判断', level: 'IELTS6' },
    { word: 'judicial', meaning: 'adj. 司法的', level: 'IELTS7' },
    { word: 'prejudice', meaning: 'n. 偏见', level: 'IELTS7' },
    { word: 'judicious', meaning: 'adj. 明智的', level: 'IELTS8' },
  ],
  'mon': [
    { word: 'monitor', meaning: 'v. 监控', level: 'IELTS6' },
    { word: 'monument', meaning: 'n. 纪念碑', level: 'IELTS6' },
    { word: 'monologue', meaning: 'n. 独白', level: 'IELTS8' },
    { word: 'monopoly', meaning: 'n. 垄断', level: 'IELTS7' },
    { word: 'monastery', meaning: 'n. 修道院', level: 'IELTS7' },
  ],
  'norm': [
    { word: 'normal', meaning: 'adj. 正常的', level: 'IELTS5' },
    { word: 'norm', meaning: 'n. 规范', level: 'IELTS6' },
    { word: 'normalization', meaning: 'n. 正常化', level: 'IELTS7' },
    { word: 'enormous', meaning: 'adj. 巨大的', level: 'IELTS6' },
    { word: 'abnormal', meaning: 'adj. 异常的', level: 'IELTS6' },
  ],
  'neg': [
    { word: 'negative', meaning: 'adj. 消极的', level: 'IELTS5' },
    { word: 'neglect', meaning: 'v. 忽视', level: 'IELTS6' },
    { word: 'negotiate', meaning: 'v. 谈判', level: 'IELTS6' },
    { word: 'negation', meaning: 'n. 否定', level: 'IELTS7' },
    { word: 'negligible', meaning: 'adj. 微不足道的', level: 'IELTS7' },
  ],
  'mun': [
    { word: 'community', meaning: 'n. 社区', level: 'IELTS6' },
    { word: 'communicate', meaning: 'v. 沟通', level: 'IELTS5' },
    { word: 'communication', meaning: 'n. 沟通', level: 'IELTS5' },
    { word: 'common', meaning: 'adj. 共同的', level: 'IELTS5' },
    { word: 'communal', meaning: 'adj. 公共的', level: 'IELTS7' },
  ],
  'loc': [
    { word: 'local', meaning: 'adj. 当地的', level: 'IELTS5' },
    { word: 'location', meaning: 'n. 位置', level: 'IELTS5' },
    { word: 'locate', meaning: 'v. 定位', level: 'IELTS6' },
    { word: 'allocate', meaning: 'v. 分配', level: 'IELTS7' },
    { word: 'locale', meaning: 'n. 场所', level: 'IELTS7' },
  ],
  'luc': [
    { word: 'light', meaning: 'n. 光', level: 'IELTS5' },
    { word: 'lucid', meaning: 'adj. 清晰的', level: 'IELTS7' },
    { word: 'illuminate', meaning: 'v. 照亮', level: 'IELTS7' },
    { word: 'translucent', meaning: 'adj. 半透明的', level: 'IELTS8' },
    { word: 'lucifer', meaning: 'n. 启明星', level: 'IELTS8' },
  ],
  'man': [
    { word: 'manual', meaning: 'adj. 手动的', level: 'IELTS6' },
    { word: 'manufacture', meaning: 'v. 制造', level: 'IELTS6' },
    { word: 'manuscript', meaning: 'n. 手稿', level: 'IELTS7' },
    { word: 'manipulate', meaning: 'v. 操纵', level: 'IELTS7' },
    { word: 'manage', meaning: 'v. 管理', level: 'IELTS5' },
    { word: 'magnify', meaning: 'v. 放大', level: 'IELTS7' },
  ],
  'memor': [
    { word: 'memory', meaning: 'n. 记忆', level: 'IELTS5' },
    { word: 'memorial', meaning: 'adj. 纪念的', level: 'IELTS7' },
    { word: 'memorize', meaning: 'v. 记忆', level: 'IELTS6' },
    { word: 'remember', meaning: 'v. 记住', level: 'IELTS5' },
    { word: 'commemorate', meaning: 'v. 纪念', level: 'IELTS7' },
  ],
  'med': [
    { word: 'medium', meaning: 'n. 媒介', level: 'IELTS6' },
    { word: 'media', meaning: 'n. 媒体', level: 'IELTS5' },
    { word: 'mediate', meaning: 'v. 调解', level: 'IELTS7' },
    { word: 'medical', meaning: 'adj. 医疗的', level: 'IELTS5' },
    { word: 'meditate', meaning: 'v. 冥想', level: 'IELTS7' },
  ],
  'mod': [
    { word: 'model', meaning: 'n. 模型', level: 'IELTS5' },
    { word: 'modify', meaning: 'v. 修改', level: 'IELTS6' },
    { word: 'mode', meaning: 'n. 模式', level: 'IELTS6' },
    { word: 'modern', meaning: 'adj. 现代的', level: 'IELTS5' },
    { word: 'moderate', meaning: 'adj. 适度的', level: 'IELTS6' },
  ],
  'patr': [
    { word: 'father', meaning: 'n. 父亲', level: 'IELTS5' },
    { word: 'patron', meaning: 'n. 赞助人', level: 'IELTS7' },
    { word: 'patriotic', meaning: 'adj. 爱国的', level: 'IELTS7' },
    { word: 'patrimony', meaning: 'n. 遗产', level: 'IELTS8' },
    { word: 'patriarchy', meaning: 'n. 父权制', level: 'IELTS8' },
  ],
  'pel': [
    { word: 'compel', meaning: 'v. 强迫', level: 'IELTS7' },
    { word: 'expel', meaning: 'v. 驱逐', level: 'IELTS7' },
    { word: 'impel', meaning: 'v. 推动', level: 'IELTS8' },
    { word: 'propel', meaning: 'v. 推进', level: 'IELTS7' },
    { word: 'repel', meaning: 'v. 击退', level: 'IELTS7' },
  ],
  'pend': [
    { word: 'depend', meaning: 'v. 依赖', level: 'IELTS5' },
    { word: 'independent', meaning: 'adj. 独立的', level: 'IELTS6' },
    { word: 'dependent', meaning: 'adj. 依赖的', level: 'IELTS6' },
    { word: 'suspend', meaning: 'v. 暂停', level: 'IELTS7' },
    { word: 'append', meaning: 'v. 添加', level: 'IELTS7' },
  ],
  'pet': [
    { word: 'compete', meaning: 'v. 竞争', level: 'IELTS6' },
    { word: 'competition', meaning: 'n. 竞争', level: 'IELTS6' },
    { word: 'competitive', meaning: 'adj. 竞争的', level: 'IELTS6' },
    { word: 'petition', meaning: 'n. 请愿', level: 'IELTS7' },
    { word: 'appetite', meaning: 'n. 食欲', level: 'IELTS6' },
  ],
  'plen': [
    { word: 'plenty', meaning: 'n. 丰富', level: 'IELTS5' },
    { word: 'plenary', meaning: 'adj. 全体的', level: 'IELTS8' },
    { word: 'plentiful', meaning: 'adj. 丰富的', level: 'IELTS6' },
    { word: 'replenish', meaning: 'v. 补充', level: 'IELTS8' },
    { word: 'complete', meaning: 'adj. 完整的', level: 'IELTS5' },
  ],
  'plic': [
    { word: 'complicate', meaning: 'v. 使复杂', level: 'IELTS7' },
    { word: 'implication', meaning: 'n. 暗示', level: 'IELTS7' },
    { word: 'explicit', meaning: 'adj. 明确的', level: 'IELTS7' },
    { word: 'implicit', meaning: 'adj. 隐含的', level: 'IELTS7' },
    { word: 'apply', meaning: 'v. 应用', level: 'IELTS5' },
  ],
  'pon': [
    { word: 'position', meaning: 'n. 位置', level: 'IELTS5' },
    { word: 'compose', meaning: 'v. 组成', level: 'IELTS6' },
    { word: 'deposit', meaning: 'v. 存款', level: 'IELTS6' },
    { word: 'postpone', meaning: 'v. 推迟', level: 'IELTS7' },
    { word: 'component', meaning: 'n. 组件', level: 'IELTS6' },
  ],
  'preci': [
    { word: 'precious', meaning: 'adj. 珍贵的', level: 'IELTS6' },
    { word: 'precision', meaning: 'n. 精确', level: 'IELTS7' },
    { word: 'appreciate', meaning: 'v. 欣赏', level: 'IELTS6' },
    { word: 'depreciate', meaning: 'v. 贬值', level: 'IELTS7' },
    { word: 'price', meaning: 'n. 价格', level: 'IELTS5' },
  ],
  'prim': [
    { word: 'primary', meaning: 'adj. 主要的', level: 'IELTS5' },
    { word: 'primitive', meaning: 'adj. 原始的', level: 'IELTS7' },
    { word: 'prime', meaning: 'adj. 首要的', level: 'IELTS6' },
    { word: 'primarily', meaning: 'adv. 主要地', level: 'IELTS6' },
    { word: 'primacy', meaning: 'n. 首要地位', level: 'IELTS8' },
  ],
  'prob': [
    { word: 'problem', meaning: 'n. 问题', level: 'IELTS5' },
    { word: 'probable', meaning: 'adj. 可能的', level: 'IELTS6' },
    { word: 'probability', meaning: 'n. 概率', level: 'IELTS7' },
    { word: 'probe', meaning: 'v. 探索', level: 'IELTS7' },
    { word: 'approve', meaning: 'v. 批准', level: 'IELTS6' },
  ],
  'punct': [
    { word: 'punctual', meaning: 'adj. 准时的', level: 'IELTS6' },
    { word: 'punctuate', meaning: 'v. 加标点', level: 'IELTS7' },
    { word: 'puncture', meaning: 'n. 穿刺', level: 'IELTS7' },
    { word: 'point', meaning: 'n. 点', level: 'IELTS5' },
    { word: 'compunction', meaning: 'n. 内疚', level: 'IELTS8' },
  ],
  'reg': [
    { word: 'regular', meaning: 'adj. 规则的', level: 'IELTS5' },
    { word: 'region', meaning: 'n. 地区', level: 'IELTS5' },
    { word: 'regulate', meaning: 'v. 调节', level: 'IELTS6' },
    { word: 'regulation', meaning: 'n. 法规', level: 'IELTS6' },
    { word: 'reign', meaning: 'n. 统治', level: 'IELTS7' },
  ],
  'sacr': [
    { word: 'sacred', meaning: 'adj. 神圣的', level: 'IELTS7' },
    { word: 'sacrifice', meaning: 'n. 牺牲', level: 'IELTS6' },
    { word: 'sacrament', meaning: 'n. 圣礼', level: 'IELTS8' },
    { word: 'consecrate', meaning: 'v. 奉献', level: 'IELTS8' },
    { word: 'desecrate', meaning: 'v. 亵渎', level: 'IELTS8' },
  ],
  'scend': [
    { word: 'ascend', meaning: 'v. 上升', level: 'IELTS7' },
    { word: 'descend', meaning: 'v. 下降', level: 'IELTS6' },
    { word: 'transcend', meaning: 'v. 超越', level: 'IELTS8' },
    { word: 'descendant', meaning: 'n. 后代', level: 'IELTS7' },
    { word: 'ascendant', meaning: 'adj. 上升的', level: 'IELTS8' },
  ],
  'sist': [
    { word: 'resist', meaning: 'v. 抵抗', level: 'IELTS6' },
    { word: 'persist', meaning: 'v. 坚持', level: 'IELTS6' },
    { word: 'consist', meaning: 'v. 由...组成', level: 'IELTS5' },
    { word: 'assist', meaning: 'v. 帮助', level: 'IELTS5' },
    { word: 'insist', meaning: 'v. 坚持', level: 'IELTS6' },
  ],
  'soci': [
    { word: 'social', meaning: 'adj. 社会的', level: 'IELTS5' },
    { word: 'society', meaning: 'n. 社会', level: 'IELTS5' },
    { word: 'sociable', meaning: 'adj. 社交的', level: 'IELTS6' },
    { word: 'associate', meaning: 'v. 关联', level: 'IELTS6' },
    { word: 'dissociate', meaning: 'v. 分离', level: 'IELTS8' },
  ],
  'sol': [
    { word: 'solo', meaning: 'adj. 单独的', level: 'IELTS6' },
    { word: 'solitary', meaning: 'adj. 孤独的', level: 'IELTS7' },
    { word: 'solitude', meaning: 'n. 孤独', level: 'IELTS7' },
    { word: 'desolate', meaning: 'adj. 荒凉的', level: 'IELTS7' },
    { word: 'soliloquy', meaning: 'n. 独白', level: 'IELTS8' },
  ],
  'spir': [
    { word: 'inspire', meaning: 'v. 激励', level: 'IELTS6' },
    { word: 'expire', meaning: 'v. 到期', level: 'IELTS6' },
    { word: 'conspire', meaning: 'v. 共谋', level: 'IELTS8' },
    { word: 'perspire', meaning: 'v. 出汗', level: 'IELTS7' },
    { word: 'aspire', meaning: 'v. 渴望', level: 'IELTS7' },
  ],
  'stat': [
    { word: 'state', meaning: 'n. 状态', level: 'IELTS5' },
    { word: 'station', meaning: 'n. 车站', level: 'IELTS5' },
    { word: 'static', meaning: 'adj. 静态的', level: 'IELTS6' },
    { word: 'stature', meaning: 'n. 身高', level: 'IELTS7' },
    { word: 'status', meaning: 'n. 地位', level: 'IELTS6' },
  ],
  'sum': [
    { word: 'summary', meaning: 'n. 摘要', level: 'IELTS6' },
    { word: 'sum', meaning: 'n. 总和', level: 'IELTS5' },
    { word: 'summarize', meaning: 'v. 总结', level: 'IELTS6' },
    { word: 'assume', meaning: 'v. 假设', level: 'IELTS6' },
    { word: 'consume', meaning: 'v. 消费', level: 'IELTS6' },
  ],
  'surg': [
    { word: 'surge', meaning: 'n. 激增', level: 'IELTS7' },
    { word: 'surgery', meaning: 'n. 手术', level: 'IELTS6' },
    { word: 'surgeon', meaning: 'n. 外科医生', level: 'IELTS6' },
    { word: 'resurge', meaning: 'v. 复兴', level: 'IELTS8' },
    { word: 'insurgent', meaning: 'adj. 叛乱的', level: 'IELTS8' },
  ],
  'tain': [
    { word: 'contain', meaning: 'v. 包含', level: 'IELTS5' },
    { word: 'obtain', meaning: 'v. 获得', level: 'IELTS6' },
    { word: 'maintain', meaning: 'v. 维持', level: 'IELTS6' },
    { word: 'sustain', meaning: 'v. 支撑', level: 'IELTS7' },
    { word: 'attain', meaning: 'v. 达到', level: 'IELTS7' },
  ],
  'tect': [
    { word: 'protect', meaning: 'v. 保护', level: 'IELTS5' },
    { word: 'detect', meaning: 'v. 检测', level: 'IELTS6' },
    { word: 'intellect', meaning: 'n. 智力', level: 'IELTS7' },
    { word: 'architect', meaning: 'n. 建筑师', level: 'IELTS6' },
    { word: 'intact', meaning: 'adj. 完整的', level: 'IELTS7' },
  ],
  'tempor': [
    { word: 'temporary', meaning: 'adj. 临时的', level: 'IELTS6' },
    { word: 'temporarily', meaning: 'adv. 临时地', level: 'IELTS6' },
    { word: 'contemporary', meaning: 'adj. 当代的', level: 'IELTS7' },
    { word: 'temporal', meaning: 'adj. 时间的', level: 'IELTS8' },
    { word: 'extemporaneous', meaning: 'adj. 即兴的', level: 'IELTS8' },
  ],
  'tend': [
    { word: 'extend', meaning: 'v. 扩展', level: 'IELTS6' },
    { word: 'intend', meaning: 'v. 打算', level: 'IELTS6' },
    { word: 'attend', meaning: 'v. 参加', level: 'IELTS5' },
    { word: 'contend', meaning: 'v. 主张', level: 'IELTS7' },
    { word: 'pretend', meaning: 'v. 假装', level: 'IELTS6' },
  ],
  'ten': [
    { word: 'tense', meaning: 'adj. 紧张的', level: 'IELTS6' },
    { word: 'tension', meaning: 'n. 紧张', level: 'IELTS6' },
    { word: 'tentative', meaning: 'adj. 暂定的', level: 'IELTS7' },
    { word: 'content', meaning: 'n. 内容', level: 'IELTS5' },
    { word: 'retention', meaning: 'n. 保留', level: 'IELTS7' },
  ],
  'termin': [
    { word: 'terminal', meaning: 'adj. 终端的', level: 'IELTS6' },
    { word: 'terminate', meaning: 'v. 终止', level: 'IELTS7' },
    { word: 'determine', meaning: 'v. 决定', level: 'IELTS5' },
    { word: 'interminable', meaning: 'adj. 无尽的', level: 'IELTS8' },
    { word: 'terminology', meaning: 'n. 术语', level: 'IELTS7' },
  ],
  'test': [
    { word: 'test', meaning: 'n. 测试', level: 'IELTS5' },
    { word: 'examine', meaning: 'v. 检查', level: 'IELTS6' },
    { word: 'testify', meaning: 'v. 作证', level: 'IELTS7' },
    { word: 'contest', meaning: 'n. 竞赛', level: 'IELTS6' },
    { word: 'protest', meaning: 'n. 抗议', level: 'IELTS6' },
  ],
  'text': [
    { word: 'text', meaning: 'n. 文本', level: 'IELTS5' },
    { word: 'textile', meaning: 'n. 纺织品', level: 'IELTS7' },
    { word: 'texture', meaning: 'n. 质地', level: 'IELTS7' },
    { word: 'context', meaning: 'n. 上下文', level: 'IELTS6' },
    { word: 'pretext', meaning: 'n. 借口', level: 'IELTS7' },
  ],
  'uni': [
    { word: 'unique', meaning: 'adj. 独特的', level: 'IELTS6' },
    { word: 'unify', meaning: 'v. 统一', level: 'IELTS7' },
    { word: 'uniform', meaning: 'adj. 统一的', level: 'IELTS6' },
    { word: 'union', meaning: 'n. 联合', level: 'IELTS6' },
    { word: 'universal', meaning: 'adj. 普遍的', level: 'IELTS7' },
  ],
  'urb': [
    { word: 'urban', meaning: 'adj. 城市的', level: 'IELTS6' },
    { word: 'suburb', meaning: 'n. 郊区', level: 'IELTS6' },
    { word: 'urbanization', meaning: 'n. 城市化', level: 'IELTS7' },
    { word: 'urbanize', meaning: 'v. 使城市化', level: 'IELTS7' },
    { word: 'urbane', meaning: 'adj. 文雅的', level: 'IELTS8' },
  ],
  'vac': [
    { word: 'vacant', meaning: 'adj. 空缺的', level: 'IELTS6' },
    { word: 'vacuum', meaning: 'n. 真空', level: 'IELTS7' },
    { word: 'vacation', meaning: 'n. 假期', level: 'IELTS5' },
    { word: 'vacate', meaning: 'v. 腾出', level: 'IELTS7' },
    { word: 'vacuous', meaning: 'adj. 空洞的', level: 'IELTS8' },
  ],
  'val': [
    { word: 'value', meaning: 'n. 价值', level: 'IELTS5' },
    { word: 'valid', meaning: 'adj. 有效的', level: 'IELTS6' },
    { word: 'evaluate', meaning: 'v. 评估', level: 'IELTS6' },
    { word: 'equivalent', meaning: 'adj. 等价的', level: 'IELTS6' },
    { word: 'prevail', meaning: 'v. 盛行', level: 'IELTS7' },
  ],
  'ven': [
    { word: 'event', meaning: 'n. 事件', level: 'IELTS5' },
    { word: 'prevent', meaning: 'v. 预防', level: 'IELTS6' },
    { word: 'convention', meaning: 'n. 惯例', level: 'IELTS7' },
    { word: 'invent', meaning: 'v. 发明', level: 'IELTS6' },
    { word: 'avenue', meaning: 'n. 大道', level: 'IELTS6' },
  ],
  'verb': [
    { word: 'verbal', meaning: 'adj. 口头的', level: 'IELTS6' },
    { word: 'verb', meaning: 'n. 动词', level: 'IELTS5' },
    { word: 'verbose', meaning: 'adj. 冗长的', level: 'IELTS8' },
    { word: 'verbatim', meaning: 'adj. 逐字的', level: 'IELTS8' },
    { word: 'verbiage', meaning: 'n. 措辞', level: 'IELTS8' },
  ],
  'vit': [
    { word: 'vital', meaning: 'adj. 重要的', level: 'IELTS6' },
    { word: 'vitamin', meaning: 'n. 维生素', level: 'IELTS5' },
    { word: 'vitality', meaning: 'n. 活力', level: 'IELTS7' },
    { word: 'revitalize', meaning: 'v. 使复苏', level: 'IELTS7' },
    { word: 'vitriolic', meaning: 'adj. 尖酸的', level: 'IELTS8' },
  ],
  'vol': [
    { word: 'volunteer', meaning: 'n. 志愿者', level: 'IELTS6' },
    { word: 'voluntary', meaning: 'adj. 自愿的', level: 'IELTS7' },
    { word: 'volition', meaning: 'n. 意志', level: 'IELTS8' },
    { word: 'benevolent', meaning: 'adj. 仁慈的', level: 'IELTS7' },
    { word: 'malevolent', meaning: 'adj. 恶意的', level: 'IELTS8' },
  ],
  'vor': [
    { word: 'devour', meaning: 'v. 吞食', level: 'IELTS7' },
    { word: 'voracious', meaning: 'adj. 贪婪的', level: 'IELTS8' },
    { word: 'carnivore', meaning: 'n. 食肉动物', level: 'IELTS7' },
    { word: 'herbivore', meaning: 'n. 食草动物', level: 'IELTS7' },
    { word: 'omnivore', meaning: 'n. 杂食动物', level: 'IELTS7' },
  ],
};

// 自动为没有明确同根词的词根生成相关单词
function generateAutoRelatedWords(rootData) {
  const suffixes = ['tion', 'sion', 'ment', 'ness', 'ity', 'ous', 'ive', 'able', 'ible', 'al', 'ful', 'less', 'ly', 'er', 'est', 'ize', 'ify', 'ance', 'ence', 'ian', 'ist', 'ism', 'age', 'ure', 'age', 'ary', 'ory', 'ish', 'oid', 'oma', 'scope', 'graph', 'meter', 'logy', 'cracy', 'phile', 'phobe'];
  const prefixes = ['un', 'in', 'im', 'dis', 're', 'pre', 'pro', 'mis', 'over', 'under', 'out', 'sub', 'super', 'trans', 'de', 'ex', 'en', 'em', 'anti', 'auto', 'co', 'inter', 'intro', 'retro', 'semi', 'bi', 'tri', 'quad', 'penta', 'hex', 'micro', 'macro', 'mega', 'poly', 'multi', 'homo', 'hetero', 'neo', 'archi', 'biblio', 'geo', 'hydro', 'thermo'];
  const levels = ['IELTS5', 'IELTS5', 'IELTS6', 'IELTS6', 'IELTS6', 'IELTS7', 'IELTS7', 'IELTS8'];
  
  const generated = [];
  const root = rootData.root;
  
  // 生成30-45个相关单词（大幅增加）
  const count = 30 + Math.floor(Math.random() * 16);
  
  for (let i = 0; i < count; i++) {
    const suffix = suffixes[Math.floor(Math.random() * suffixes.length)];
    const prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
    const level = levels[Math.floor(Math.random() * levels.length)];
    
    // 生成单词：前缀+词根+后缀
    let word;
    if (i % 3 === 0) {
      word = prefix + root;
    } else if (i % 3 === 1) {
      word = root + suffix;
    } else {
      word = prefix + root + suffix;
    }
    
    // 确保单词唯一
    if (!generated.find(w => w.word === word)) {
      generated.push({
        word,
        meaning: `${rootData.meaningEn} + ${suffix !== '' ? suffix : prefix}`,
        level
      });
    }
  }
  
  return generated;
}

function generateIELTSWords() {
  const words = [];
  
  rootsDatabase.forEach(rootData => {
    let relatedWords = relatedWordsDatabase[rootData.root] || [];
    
    // 如果没有明确的同根词，自动生成
    if (relatedWords.length === 0) {
      relatedWords = generateAutoRelatedWords(rootData);
    }
    
    relatedWords.forEach(relatedWord => {
      const word = {
        id: `${rootData.root}-${relatedWord.word}`,
        word: relatedWord.word,
        meaning: relatedWord.meaning,
        level: relatedWord.level,
        root: rootData.root,
        rootMeaning: rootData.meaning,
        rootMeaningEn: rootData.meaningEn,
        rootOrigin: rootData.origin,
        rootOriginNote: rootData.originNote,
        relatedWords: relatedWords.filter(rw => rw.word !== relatedWord.word).map(rw => ({
          word: rw.word,
          meaning: rw.meaning,
          level: rw.level
        })),
        writingTemplates: generateWritingTemplates(relatedWord.word, rootData),
        phonetic: `/ˈ${relatedWord.word}/`,
        example: generateExample(relatedWord.word, relatedWord.meaning)
      };
      
      words.push(word);
    });
  });
  
  return words.sort((a, b) => a.word.localeCompare(b.word, 'en'));
}

function generateWritingTemplates(word, rootData) {
  const templates = [];
  const wordType = getWordType(word);
  
  if (wordType === 'noun') {
    templates.push({
      type: 'introduction',
      sentence: `The concept of ${word} has become increasingly important in modern society.`,
      usage: '用于引言段，引出主题'
    });
    templates.push({
      type: 'support',
      sentence: `One key aspect of ${word} is its ability to ${generateVerb(word)}.`,
      usage: '用于支持论点'
    });
  } else if (wordType === 'verb') {
    templates.push({
      type: 'process',
      sentence: `To effectively ${word}, it is essential to ${generateVerbPhrase(word)}.`,
      usage: '用于描述过程'
    });
    templates.push({
      type: 'result',
      sentence: `As a result of ${word}ing, significant changes have occurred in ${generateNoun()}.`,
      usage: '用于描述结果'
    });
  } else if (wordType === 'adjective') {
    templates.push({
      type: 'description',
      sentence: `The ${word} nature of ${generateNoun()} has profound implications for ${generateNoun()}.`,
      usage: '用于描述特征'
    });
    templates.push({
      type: 'comparison',
      sentence: `Compared to traditional approaches, the ${word} method offers distinct advantages in ${generateNoun()}.`,
      usage: '用于比较论证'
    });
  }
  
  return templates;
}

function getWordType(word) {
  if (word.endsWith('tion') || word.endsWith('sion') || word.endsWith('ment') || word.endsWith('ness')) {
    return 'noun';
  } else if (word.endsWith('able') || word.endsWith('ible') || word.endsWith('ful') || word.endsWith('less') || word.endsWith('ive') || word.endsWith('ous')) {
    return 'adjective';
  } else if (word.endsWith('ize') || word.endsWith('ify')) {
    return 'verb';
  }
  return 'noun';
}

function generateVerb(word) {
  const verbs = ['enhance productivity', 'facilitate communication', 'improve efficiency', 'promote development', 'support growth'];
  return verbs[Math.floor(Math.random() * verbs.length)];
}

function generateVerbPhrase(word) {
  const phrases = ['follow systematic procedures', 'adopt innovative strategies', 'implement effective measures', 'develop comprehensive plans', 'establish clear objectives'];
  return phrases[Math.floor(Math.random() * phrases.length)];
}

function generateNoun() {
  const nouns = ['economic development', 'social progress', 'educational systems', 'environmental protection', 'technological advancement'];
  return nouns[Math.floor(Math.random() * nouns.length)];
}

function generateExample(word, meaning) {
  const examples = {
    'technology': 'Modern technology has transformed the way we communicate.',
    'education': 'Education is the key to personal and professional success.',
    'environment': 'Protecting the environment is crucial for future generations.',
    'development': 'Sustainable development requires careful planning and execution.',
    'communication': 'Effective communication is essential in any organization.',
    'economy': 'The global economy has experienced significant fluctuations.',
    'society': 'Society continues to evolve with changing values and norms.',
    'culture': 'Cultural diversity enriches our understanding of the world.',
    'government': 'Government policies play a vital role in shaping public services.',
    'health': 'Maintaining good health requires a balanced lifestyle.',
  };
  return examples[word] || `The ${word} is an important concept in ${generateNoun()}.`;
}

function generateMockWordsFile() {
  const words = generateIELTSWords();
  
  const content = `export interface WordRoot {
  root: string;
  meaning: string;
  meaningEn: string;
  origin: string;
  originNote: string;
}

export interface RelatedWord {
  word: string;
  meaning: string;
  level: string;
}

export interface WritingTemplate {
  type: string;
  sentence: string;
  usage: string;
}

export interface IELTSWord {
  id: string;
  word: string;
  meaning: string;
  level: string;
  root: string;
  rootMeaning: string;
  rootMeaningEn: string;
  rootOrigin: string;
  rootOriginNote: string;
  relatedWords: RelatedWord[];
  writingTemplates: WritingTemplate[];
  phonetic: string;
  example: string;
}

export const mockWords: IELTSWord[] = ${JSON.stringify(words, null, 2)};

export const rootsDatabase: WordRoot[] = ${JSON.stringify(rootsDatabase, null, 2)};

export const prefixesDatabase = ${JSON.stringify(prefixes, null, 2)};

export const suffixesDatabase = ${JSON.stringify(suffixes, null, 2)};
`;

  const fs = require('fs');
  const path = require('path');
  
  const outputPath = path.join(__dirname, '../src/data/mockWords.ts');
  fs.writeFileSync(outputPath, content);
  
  console.log(`Successfully generated ${words.length} words to ${outputPath}`);
  console.log(`Total roots: ${rootsDatabase.length}`);
}

generateMockWordsFile();