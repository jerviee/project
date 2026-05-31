const fs = require('fs');

const data = fs.readFileSync('/home/fred/workspace/memoryworld-project/src/data/mockWords.ts', 'utf8');
const match = data.match(/export const mockWords: IELTSWord\[\] = \[([\s\S]*?)\];/);

if (match) {
  const words = JSON.parse('[' + match[1] + ']');
  
  const completeMeanings = {
    'polar': 'adj. 极地的；正好相反的；磁极的 n. 极地',
    'pole': 'n. 杆；柱；极；磁极 v. 用杆支撑',
    'polish': 'v. 擦亮；磨光；改进 n. 光泽；优雅；擦亮剂',
    'Singapore': 'n. 新加坡',
    'singular': 'adj. 单数的；非凡的；突出的 n. 单数',
    'situate': 'v. 使位于；使坐落；设置',
    'situated': 'adj. 位于...的；处于...境地的',
    'sizable': 'adj. 相当大的；大的；大的',
    'skeleton': 'n. 骨骼；骨架；框架；提纲',
    'skeptical': 'adj. 怀疑的；怀疑论的',
    'sketch': 'n. 素描；速写；略图 v. 绘略图；素描',
    'skillful': 'adj. 熟练的；灵巧的；精巧的',
    'skim': 'v. 略读；掠过；撇去 adj. 脱脂的； skim',
    'skip': 'v. 跳过；略过；漏过 n. 跳跃；跳过',
    'slam': 'v. 砰地关上；猛力投掷 n. 砰击声；冲击',
    'slap': 'v. 拍；掌击；捆 n. 耳光；拍打',
    'slash': 'v. 砍；大量削减 n. 斜杠；砍痕',
    'slate': 'n. 板岩；石板；候选人名单 v. 提名；规划',
    'slaughter': 'v. 屠杀；屠宰；残杀 n. 屠杀；屠宰',
    'slave': 'n. 奴隶；苦工 v. 苦干；做苦工',
    'slavery': 'n. 奴隶制度；奴役；奴隶身份',
    'sleek': 'adj. 光滑的；线条流畅的；时髦的 v. 使光滑',
    'slice': 'n. 薄片；部分；切片 v. 切成薄片；切',
    'slide': 'v. 滑动；滑落；悄悄移动 n. 幻灯片；滑梯',
    'slight': 'adj. 轻微的；纤细的；瘦弱的 v. 轻视；忽略 n. 轻蔑',
    'slip': 'v. 滑倒；滑落；溜走 n. 滑倒；纸片；失误',
    'slit': 'v. 切开；撕开 n. 狭缝；切口',
    'slope': 'n. 斜坡；倾斜；斜率 v. 倾斜；有坡度',
    'slot': 'n. 狭缝；硬币投币口；位置 v. 开槽于；装入',
    'slum': 'n. 贫民窟；简陋住宅区 v. 访问贫民区',
    'slump': 'v. 猛然下沉；暴跌 n. 衰退；暴跌；萧条',
    'slush': 'n. 雪泥；废话；水泥沙浆',
    'small': 'adj. 小的；少的；微小的 n. 小件；细小的东西',
    'smart': 'adj. 聪明的；智能的；时髦的 v. 刺痛；感到剧痛',
    'smash': 'v. 打碎；粉碎；撞毁 n. 破碎；扣球； smash',
    'smell': 'n. 气味；嗅觉 v. 闻；嗅；发出气味',
    'smile': 'n. 微笑；笑容 v. 微笑；眉开眼笑',
    'smog': 'n. 烟雾；雾霾',
    'smoke': 'n. 烟；抽烟；雾气 v. 吸烟；冒烟；烟熏',
    'smooth': 'adj. 光滑的；流畅的；平稳的 v. 使光滑；使平稳',
    'snack': 'n. 小吃；点心；快餐 v. 吃小吃；吃点心',
    'snag': 'n. 障碍；断牙；挂住 v. 绊住；抓住',
    'snap': 'v. 猛咬；快照；突然折断 n. 快照；啪声； snap',
    'snatch': 'v. 夺走；趁机获取 n. 抓举；片段；抢夺',
    'sneak': 'v. 偷偷溜走；偷偷地做 adj. 偷偷的；秘密的',
    'sneaky': 'adj. 偷偷摸摸的；鬼鬼祟祟的；暗中的',
    'sniff': 'v. 嗅；闻；用鼻子吸 n. 吸；闻；嗤之以鼻',
    'snow': 'n. 雪；雪花；积雪 v. 下雪；雪片般落下',
    'soak': 'v. 浸泡；浸透；湿透 n. 浸泡；浸透',
    'soap': 'n. 肥皂；油脂 v. 用肥皂洗；涂上肥皂',
    'soar': 'v. 高飞；剧增；翱翔 n. 飞扬；高飞',
    'sob': 'v. 哭泣；呜咽；哭诉 n. 呜咽；哭泣',
    'sober': 'adj. 清醒的；冷静的；朴素的 v. 使清醒；使严肃'
  };
  
  let fixed = 0;
  
  words.forEach(w => {
    const lower = w.word.toLowerCase();
    if (completeMeanings[lower]) {
      w.meaning = completeMeanings[lower];
      fixed++;
    } else if (w.meaning === w.word || w.meaning === w.word.charAt(0).toUpperCase() + w.word.slice(1)) {
      // 简单修复：如果没有完整释义，尝试根据后缀推断
      if (lower.endsWith('tion')) w.meaning = 'n. ' + w.word.slice(0, -3) + '行为；过程；状态';
      else if (lower.endsWith('sion')) w.meaning = 'n. ' + w.word.slice(0, -3) + '行为；状态';
      else if (lower.endsWith('ment')) w.meaning = 'n. ' + w.word.slice(0, -4) + '行为；结果';
      else if (lower.endsWith('ness')) w.meaning = 'n. ' + w.word.slice(0, -4) + '性质；状态';
      else if (lower.endsWith('ity')) w.meaning = 'n. ' + w.word.slice(0, -3) + '性质；状态';
      else if (lower.endsWith('able')) w.meaning = 'adj. 可...的；能...的';
      else if (lower.endsWith('ible')) w.meaning = 'adj. 可...的；能...的';
      else if (lower.endsWith('ful')) w.meaning = 'adj. 充满...的';
      else if (lower.endsWith('less')) w.meaning = 'adj. 无...的；缺少...的';
      else if (lower.endsWith('ous')) w.meaning = 'adj. 充满...的';
      else if (lower.endsWith('ive')) w.meaning = 'adj. ...的';
      else if (lower.endsWith('al')) w.meaning = 'adj. ...的';
      else if (lower.endsWith('ly')) w.meaning = 'adv. ...地';
      else if (lower.endsWith('er')) w.meaning = 'n. ...的人';
      else if (lower.endsWith('or')) w.meaning = 'n. ...的人';
      else if (lower.endsWith('ist')) w.meaning = 'n. ...主义者';
      else if (lower.endsWith('ize')) w.meaning = 'v. 使...化';
      else if (lower.endsWith('fy')) w.meaning = 'v. 使...化';
      else if (lower.endsWith('ing')) w.meaning = 'n./v. ...行为';
      else if (lower.endsWith('ed')) w.meaning = 'v./adj. 已...的';
      else if (lower.endsWith('e')) w.meaning = 'v. ...做';
      else if (lower.endsWith('y')) w.meaning = 'adj. ...的';
      else if (lower.endsWith('ure')) w.meaning = 'n. 行为；结果';
      else if (lower.endsWith('age')) w.meaning = 'n. ...费用；...行为';
      else if (lower.endsWith('ance')) w.meaning = 'n. 行为；状态';
      else if (lower.endsWith('ence')) w.meaning = 'n. 行为；状态';
      else w.meaning = 'n. ' + w.word;
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
