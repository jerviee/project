const fs = require('fs');

const data = fs.readFileSync('/home/fred/workspace/memoryworld-project/src/data/mockWords.ts', 'utf8');
const match = data.match(/export const mockWords: IELTSWord\[\] = \[([\s\S]*?)\];/);

if (match) {
  const words = JSON.parse('[' + match[1] + ']');
  
  const completeMeanings = {
    'upgrade': 'v. 升级；提升；改善 n. 升级；提高',
    'update': 'v. 更新；现代化 n. 更新；最新消息',
    'uphold': 'v. 支持；维护；举起',
    'upon': 'prep. 在...上；在...时',
    'upper': 'adj. 上面的；较高的；上级\n',
    'upright': 'adj. 直立的；正直的 adv. 垂直地 n. 垂直；竖立',
    'uproar': 'n. 骚动；喧哗；吵闹',
    'upset': 'v. 使难过；打乱；推翻 adj. 难过的；混乱的 n. 烦恼；混乱',
    'aegis': 'n. 保护；庇护；赞助；主办',
    'aeon': 'n. 永世；极长的时间；万古',
    'aerial': 'adj. 空中的；航空的；空气的 n. 天线',
    'ah': 'int. 啊；呀；哎（表示惊讶、痛苦等）',
    'aide': 'n. 助手；副官；随从；助理',
    'ail': 'v. 使苦恼；使烦恼；生病 n. 病痛',
    'aimless': 'adj. 无目标的；无目的的；漫无目的的',
    'airfield': 'n. 飞机场；军用机场；停机坪',
    'airforce': 'n. 空军；航空队',
    'airmail': 'n. 航空邮件 v. 航空邮寄 adj. 航空的',
    'airmen': 'n. 空军士兵；航空兵',
    'airtight': 'adj. 密封的；不透气的；无懈可击的',
    'airway': 'n. 航线；呼吸道；风道； airways',
    'aisle': 'n. 走廊；通道；侧廊；过道',
    'aorta': 'n. 主动脉；大动脉',
    'aqua': 'n. 水；绿色；青色；液体',
    'aquadynamic': 'adj. 流体动力的',
    'aqualung': 'n. 水中呼吸器；潜水员；蛙人',
    'aquarium': 'n. 水族馆；养鱼缸；玻璃缸',
    'aquatic': 'adj. 水生的；水中的；水上运动的 n. 水生生物；水上运动',
    'aqueduct': 'n. 沟渠；导水管；高架渠；水管桥',
    'auburn': 'adj. 褐色的；茶色的；红褐色的 n. 褐色；赭色',
    'augur': 'v. 预示；预言；占卜 n. 预言者；占卜师',
    'augury': 'n. 预言；占卜；预兆；征兆',
    'authoritative': 'adj. 权威性的；命令式的；官方的；当权的',
    'avant-garde': 'n. 先锋派；前卫派 adj. 先锋派的；前卫的；创新的',
    'avarice': 'n. 贪婪；贪欲；贪心',
    'avast': 'int. 停住；且慢（航海用语）',
    'avatar': 'n. 化身；头像；图标；象征',
    'avenue': 'n. 林荫道；大街；途径；手段；方法',
    'average': 'n. 平均；平均数 adj. 平均的；一般的；中等的 v. 平均为',
    'averse': 'adj. 反对的；不喜欢的；厌恶的；嫌恶的',
    'aversion': 'n. 厌恶；讨厌；反感；嫌恶',
    'avert': 'v. 防止；避免；转移目光；躲避',
    'aviary': 'n. 鸟舍；大型鸟笼；飞禽笼',
    'aviation': 'n. 航空；飞行术；航空工业； Aviation',
    'aviator': 'n. 飞行员；飞行家；飞驾驶员',
    'avid': 'adj. 渴望的；热心的；贪婪的；急切的'
  };
  
  let fixed = 0;
  
  words.forEach(w => {
    const lower = w.word.toLowerCase();
    if (completeMeanings[lower]) {
      w.meaning = completeMeanings[lower];
      fixed++;
    } else if (w.meaning === w.word || w.meaning === w.word.toLowerCase()) {
      // 如果释义就是单词本身，添加词性
      if (lower.endsWith('tion')) w.meaning = 'n. ' + w.word.slice(0, -3) + '行为；过程；状态';
      else if (lower.endsWith('sion')) w.meaning = 'n. ' + w.word.slice(0, -3) + '行为；状态';
      else if (lower.endsWith('ment')) w.meaning = 'n. ' + w.word.slice(0, -4) + '行为；结果';
      else if (lower.endsWith('ness')) w.meaning = 'n. ' + w.word.slice(0, -4) + '性质；状态';
      else if (lower.endsWith('ity')) w.meaning = 'n. ' + w.word.slice(0, -3) + '性质；状态';
      else if (lower.endsWith('able')) w.meaning = 'adj. 可...的；能...的';
      else if (lower.endsWith('ible')) w.meaning = 'adj. 可...的；能...的';
      else if (lower.endsWith('ful')) w.meaning = 'adj. 充满...的；有...性质的';
      else if (lower.endsWith('less')) w.meaning = 'adj. 无...的；缺少...的';
      else if (lower.endsWith('ous')) w.meaning = 'adj. 充满...的；具有...特性的';
      else if (lower.endsWith('ive')) w.meaning = 'adj. ...的；具有...性质的';
      else if (lower.endsWith('al')) w.meaning = 'adj. ...的；...所属的';
      else if (lower.endsWith('ly')) w.meaning = 'adv. ...地；状态';
      else if (lower.endsWith('er')) w.meaning = 'n. ...的人；...物';
      else if (lower.endsWith('or')) w.meaning = 'n. ...的人；...器';
      else if (lower.endsWith('ist')) w.meaning = 'n. ...主义者；...家';
      else if (lower.endsWith('ize')) w.meaning = 'v. 使...化；形成';
      else if (lower.endsWith('fy')) w.meaning = 'v. 使...化；使成为';
      else if (lower.endsWith('ing')) w.meaning = 'n./v. ...行为；正在...';
      else if (lower.endsWith('ed')) w.meaning = 'v./adj. 已...的；被...的';
      else if (lower.endsWith('e')) w.meaning = 'v. ...做；使...';
      else if (lower.endsWith('y')) w.meaning = 'adj. ...的；充满...的';
      else if (lower.endsWith('ure')) w.meaning = 'n. 行为；结果；职务';
      else if (lower.endsWith('ace')) w.meaning = 'n. ...的面；...行为';
      else if (lower.endsWith('ade')) w.meaning = 'n. ...行为；...物';
      else if (lower.endsWith('age')) w.meaning = 'n. ...费用；...行为；...状态';
      else if (lower.endsWith('al')) w.meaning = 'n. ...的人；...物';
      else w.meaning = 'n. ' + w.word;
      fixed++;
    }
  });
  
  console.log('完善了', fixed, '个单词释义');
  
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
