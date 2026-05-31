const fs = require('fs');

const data = fs.readFileSync('/home/fred/workspace/memoryworld-project/src/data/mockWords.ts', 'utf8');
const match = data.match(/export const mockWords: IELTSWord\[\] = \[([\s\S]*?)\];/);

if (match) {
  const words = JSON.parse('[' + match[1] + ']');
  
  const completeMeanings = {
    'airship': 'n. 飞船；飞艇',
    'babyhood': 'n. 婴儿期；幼年',
    'bias': 'n. 偏见；偏心 v. 使有偏见',
    'bib': 'n. 围兜；围嘴',
    'bicep': 'n. 二头肌',
    'bid': 'v. 出价；投标 n. 出价；投标',
    'bidet': 'n. 坐浴盆；净身盆',
    'bigot': 'n. 偏执的人；盲信者',
    'billboard': 'n. 广告牌；布告栏',
    'billet': 'n. 兵舍；职位 v. 安置',
    'billhook': 'n. 钩刀；砍刀',
    'billiards': 'n. 台球；撞球',
    'bin': 'n. 箱子；容器；垃圾箱',
    'bingo': 'n. 宾果游戏； bingo',
    'bint': 'n. 女孩；女人（俚语）',
    'bioethics': 'n. 生物伦理学',
    'biofuel': 'n. 生物燃料',
    'bioluminescent': 'adj. 生物发光的',
    'biometric': 'adj. 生物测量的；生物识别的',
    'biotech': 'n. 生物技术',
    'bipartisan': 'adj. 两党的；双边的',
    'birch': 'n. 桦树；桦木 v. 用桦条鞭打',
    'bisect': 'v. 分成两半；平分',
    'bishopric': 'n. 主教职位；主教辖区',
    'bismuth': 'n. 铋',
    'bison': 'n. 野牛；美洲野牛',
    'bistro': 'n. 小酒馆；小餐馆',
    'bitten': 'v. 被咬；被咬伤（bite的过去分词）',
    'bittern': 'n. 苦卤；麻鸦',
    'bittersweet': 'adj. 苦乐参半的；又苦又甜的',
    'bitumen': 'n. 沥青；柏油',
    'brinkmanship': 'n. 边缘政策；冒险政策',
    'championship': 'n. 冠军赛；锦标赛；冠军地位',
    'diet': 'n. 饮食；节食 v. 节食',
    'different': 'adj. 不同的；差异的',
    'difficult': 'adj. 困难的；难懂的',
    'digest': 'v. 消化；理解 n. 文摘；摘要',
    'digit': 'n. 数字；手指；位数',
    'dilemma': 'n. 困境；进退两难',
    'diminish': 'v. 减少；减弱；降低',
    'dinosaur': 'n. 恐龙；过时的人或物',
    'dip': 'v. 浸；蘸；下沉 n. 浸；蘸；下沉',
    'diploma': 'n. 毕业证书；文凭；执照',
    'diplomat': 'n. 外交官；外交家',
    'direct': 'adj. 直接的 v. 指导；指挥',
    'dirt': 'n. 污垢；泥土；灰尘',
    'ditch': 'n. 沟渠；沟 v. 抛弃；丢弃',
    'hood': 'n. 头巾；车盖；盖子',
    'partnership': 'n. 合作关系；合伙关系',
    'protocol': 'n. 协议；礼仪；规程',
    'proven': 'adj. 已证明的；被证实的',
    'smash': 'v. 打碎；粉碎 n. 破碎；扣球',
    'snap': 'v. 猛咬；快照 n. 快照；啪声',
    'spell': 'v. 拼写；招致 n. 拼写；咒语'
  };
  
  let fixed = 0;
  
  words.forEach(w => {
    const lower = w.word.toLowerCase();
    if (completeMeanings[lower]) {
      w.meaning = completeMeanings[lower];
      fixed++;
    } else if (w.meaning === 'n. ' + w.word || w.meaning === 'v. ' + w.word || w.meaning === 'adj. ' + w.word) {
      // 根据后缀推断
      if (lower.endsWith('tion')) w.meaning = 'n. 行为；过程；状态';
      else if (lower.endsWith('sion')) w.meaning = 'n. 行为；状态';
      else if (lower.endsWith('ment')) w.meaning = 'n. 行为；结果';
      else if (lower.endsWith('ness')) w.meaning = 'n. 性质；状态';
      else if (lower.endsWith('ity')) w.meaning = 'n. 性质；状态';
      else if (lower.endsWith('ship')) w.meaning = 'n. 状态；职位';
      else if (lower.endsWith('hood')) w.meaning = 'n. 状态；时期';
      else if (lower.endsWith('able')) w.meaning = 'adj. 可...的';
      else if (lower.endsWith('ible')) w.meaning = 'adj. 可...的';
      else if (lower.endsWith('ful')) w.meaning = 'adj. 充满...的';
      else if (lower.endsWith('less')) w.meaning = 'adj. 无...的';
      else if (lower.endsWith('ous')) w.meaning = 'adj. 充满...的';
      else if (lower.endsWith('ive')) w.meaning = 'adj. ...的';
      else if (lower.endsWith('al')) w.meaning = 'adj. ...的';
      else if (lower.endsWith('ent')) w.meaning = 'adj. ...的';
      else if (lower.endsWith('ant')) w.meaning = 'adj. ...的';
      else if (lower.endsWith('ly')) w.meaning = 'adv. ...地';
      else if (lower.endsWith('er')) w.meaning = 'n. ...的人';
      else if (lower.endsWith('or')) w.meaning = 'n. ...的人';
      else if (lower.endsWith('ist')) w.meaning = 'n. ...主义者';
      else if (lower.endsWith('ize')) w.meaning = 'v. 使...化';
      else if (lower.endsWith('fy')) w.meaning = 'v. 使...化';
      else if (lower.endsWith('ing')) w.meaning = 'n./v. ...行为';
      else if (lower.endsWith('ed')) w.meaning = 'v./adj. 已...的';
      else if (lower.endsWith('en')) w.meaning = 'v. 使...；adj. ...的';
      else w.meaning = 'n. ' + w.word + '；物品；事物';
      fixed++;
    }
  });
  
  console.log('修复了', fixed, '个单词');
  
  const output = 'export interface IELTSWord {\n' +
    '  id: string;\n' +
    '  word: string;\n' +
    '  meaning: string;\n' +
    '  level: string;\n' +
    '  root: string;\n' +
    '  rootMeaning: string;\n' +
    '  rootMeaningEn: string;\n' +
    '  rootOrigin: string;\n' +
    '  rootOriginNote: string;\n' +
    '  relatedWords: { word: string; meaning: string; level: string }[];\n' +
    '  phonetic: string;\n' +
    '  frequency: string;\n' +
    '  example: string;\n' +
    '}\n\n' +
    'export const mockWords: IELTSWord[] = ' + JSON.stringify(words, null, 2) + ';';
  
  fs.writeFileSync('/home/fred/workspace/memoryworld-project/src/data/mockWords.ts', output);
  console.log('保存成功!');
}
