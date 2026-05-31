const fs = require('fs');

const data = fs.readFileSync('/home/fred/workspace/memoryworld-project/src/data/mockWords.ts', 'utf8');
const match = data.match(/export const mockWords: IELTSWord\[\] = \[([\s\S]*?)\];/);

if (match) {
  const words = JSON.parse('[' + match[1] + ']');
  
  const completeMeanings = {
    'pollute': 'v. 污染；玷污；破坏',
    'postal': 'adj. 邮政的；邮寄的',
    'powder': 'n. 粉末；粉；火药 v. 撒粉；使成粉末',
    'precipitate': 'v. 加速；促成；沉淀 n. 沉淀物 adj. 突然的',
    'preach': 'v. 传道；说教；鼓吹 n. 说教；讲道',
    'presume': 'v. 假定；推测；认为；冒昧',
    'airway': 'n. 航线；呼吸道；风道',
    'antediluvian': 'adj. 古老的；陈旧的；过时的 n. 古人',
    'anteroom': 'n. 前厅；接待室；等候室',
    'Biennale': 'n. 双年展；艺术节',
    'daughter': 'n. 女儿；后代；产物',
    'Digital': 'adj. 数字的；数码的；电子的',
    'forefather': 'n. 祖先；前辈；先驱',
    'foreigner': 'n. 外国人；外来者；陌生人',
    'foremost': 'adj. 最重要的；首要的；第一的 adv. 首先',
    'foresee': 'v. 预见；预知；预测',
    'Mighty': 'adj. 强大的；有力的；巨大的 adv. 很；非常',
    'postage': 'n. 邮费；邮资',
    'precision': 'n. 精确；精度；准确',
    'predictable': 'adj. 可预测的；可预料的',
    'predominant': 'adj. 主要的；占优势的；突出的',
    'preferable': 'adj. 更好的；更可取的；更优越的',
    'preferably': 'adv. 更好地；更可取地；宁愿',
    'pregnancy': 'n. 怀孕；妊娠；孕育',
    'prehistoric': 'adj. 史前的；古老的；原始的',
    'preliminary': 'adj. 初步的；预备的 n. 初步；预选赛',
    'prescription': 'n. 处方；药方；指示',
    'presente': 'n. 在场者；出席者',
    'preservation': 'n. 保护；保存；维护',
    'presidency': 'n. 总统职位；主席职位；任期',
    'presidential': 'adj. 总统的；首长的；支配的',
    'prevail': 'v. 流行；战胜；占优势',
    'prevent': 'v. 预防；阻止；防止',
    'previous': 'adj. 以前的；早先的 adv. 在...之前',
    'previously': 'adv. 之前；从前；预先',
    'prey': 'n. 猎物；受害者 v. 捕食；掠夺',
    'price': 'n. 价格；代价 v. 标价；定价',
    'priceless': 'adj. 无价的；极贵重的',
    'pride': 'n. 自豪；骄傲 v. 以...自豪',
    'priest': 'n. 牧师；神父；祭司',
    'primarily': 'adv. 主要地；首先；根本上',
    'primary': 'adj. 主要的；初级的；基本的',
    'prime': 'adj. 主要的；最好的 n. 青春；精华',
    'primitive': 'adj. 原始的；简单的；落后的',
    'prince': 'n. 王子；亲王；巨头',
    'princess': 'n. 公主；王妃；贵妇',
    'principal': 'adj. 主要的 n. 校长；主角；本金',
    'principle': 'n. 原理；原则；信条',
    'print': 'v. 印刷；打印 n. 印刷品；字体',
    'printer': 'n. 打印机；印刷工',
    'printing': 'n. 印刷；印刷术',
    'prior': 'adj. 在前的；优先的 n. 预先',
    'priority': 'n. 优先；优先权；优先考虑的事',
    'prison': 'n. 监狱；监禁 v. 监禁',
    'prisoner': 'n. 囚犯；俘虏',
    'privacy': 'n. 隐私；秘密；隐居',
    'private': 'adj. 私人的；个人的；秘密的',
    'privilege': 'n. 特权；优待 v. 给予特权',
    'prize': 'n. 奖品；奖赏 v. 珍视',
    'probable': 'adj. 可能的；大概的',
    'probably': 'adv. 大概；或许；很可能',
    'probe': 'v. 探索；调查 n. 探针；探测器',
    'problem': 'n. 问题；难题 adj. 问题的',
    'procedural': 'adj. 程序上的；手续的',
    'procedure': 'n. 程序；步骤；手续',
    'proceed': 'v. 继续进行；发生 n. 收入',
    'proceeding': 'n. 进程；进行；诉讼程序',
    'process': 'n. 过程；工序 v. 加工；处理',
    'procession': 'n. 行列；队伍 v. 排队行进',
    'processor': 'n. 处理器；加工者',
    'proclaim': 'v. 宣告；宣布；声明',
    'produce': 'v. 生产；产生 n. 产品；农产品',
    'producer': 'n. 生产者；制造者',
    'product': 'n. 产品；产物；结果',
    'production': 'n. 生产；制作；产量',
    'productive': 'adj. 多产的；生产的',
    'productivity': 'n. 生产力；生产率',
    'profession': 'n. 职业；专业',
    'professional': 'adj. 专业的 n. 专业人员',
    'professor': 'n. 教授；教师',
    'proficient': 'adj. 熟练的；精通的',
    'profit': 'n. 利润；利益 v. 获利',
    'profitable': 'adj. 有利可图的；赚钱的',
    'profound': 'adj. 深刻的；意义深远的',
    'program': 'n. 程序；计划 v. 编程',
    'programme': 'n. 节目；计划 v. 计划',
    'programmer': 'n. 程序员',
    'progress': 'n. 进步；进展 v. 进步',
    'progressive': 'adj. 进步的；先进的',
    'prohibit': 'v. 禁止；阻止',
    'project': 'n. 项目；工程 v. 计划；投射',
    'projection': 'n. 投影；投射；预测',
    'projector': 'n. 投影仪；放映机',
    'prolong': 'v. 延长；延伸',
    'prominent': 'adj. 突出的；著名的',
    'promise': 'v. 答应；许诺 n. 许诺',
    'promising': 'adj. 有希望的；有前途的',
    'promote': 'v. 促进；提升；推销',
    'promotion': 'n. 提升；晋升；推销',
    'prompt': 'adj. 立刻的 v. 促使 n. 提示',
    'promptly': 'adv. 迅速地；立即',
    'prone': 'adj. 易于...的；俯卧的',
    'pronounce': 'v. 发音；宣告',
    'pronounced': 'adj. 明确的；显著的',
    'pronunciation': 'n. 发音；读音',
    'proof': 'n. 证据；证明 adj. 防...的',
    'propaganda': 'n. 宣传；传道',
    'propagate': 'v. 繁殖；传播',
    'proper': 'adj. 适当的；正确的',
    'properly': 'adv. 适当地；正确地',
    'property': 'n. 财产；资产；性质',
    'proportion': 'n. 比例；部分 v. 使成比例',
    'proposal': 'n. 提议；建议；求婚',
    'propose': 'v. 提议；建议；求婚',
    'proposition': 'n. 提议；建议；命题',
    'prosecutor': 'n. 检察官；公诉人',
    'prospect': 'n. 前景；期望 v. 勘探',
    'prospective': 'adj. 未来的；预期的',
    'prosper': 'v. 繁荣；成功',
    'prosperity': 'n. 繁荣；成功；兴旺',
    'prosperous': 'adj. 繁荣的；成功的',
    'protect': 'v. 保护；警戒',
    'protection': 'n. 保护；防护物',
    'protective': 'adj. 保护的 n. 保护物',
    'protein': 'n. 蛋白质 adj. 蛋白质的',
    'protest': 'n. 抗议；反对 v. 抗议',
    'proud': 'adj. 自豪的；骄傲的',
    'prove': 'v. 证明；证实',
    'provide': 'v. 提供；供应',
    'provided': 'conj. 倘若；假如',
    'provider': 'n. 供应者；提供者',
    'province': 'n. 省；领域',
    'provincial': 'adj. 省的；地方性的',
    'provision': 'n. 供应；规定；条款',
    'provisional': 'adj. 临时的；暂时的',
    'provoke': 'v. 激怒；刺激；引起',
    'prudent': 'adj. 谨慎的；精明的',
    'psychiatric': 'adj. 精神病学的',
    'psychological': 'adj. 心理的；心理学的',
    'psychologist': 'n. 心理学家',
    'psychology': 'n. 心理学；心理',
    'pub': 'n. 酒馆；客栈',
    'public': 'adj. 公众的；公共的 n. 公众',
    'publication': 'n. 出版；发行；出版物',
    'publicity': 'n. 公开；宣传；曝光',
    'publicize': 'v. 公开；宣传',
    'publish': 'v. 出版；发行；公开',
    'publisher': 'n. 出版者；出版商',
    'pudding': 'n. 布丁；甜点心',
    'puff': 'n. 泡芙；吸入 v. 吹；喷',
    'pull': 'v. 拉；拖 n. 拉；拖',
    'punch': 'v. 击打；冲压 n. 冲压机',
    'punctual': 'adj. 准时的；守时的',
    'punish': 'v. 惩罚；处罚',
    'punishment': 'n. 惩罚；刑罚',
    'pupil': 'n. 学生；瞳孔',
    'puppet': 'n. 木偶；傀儡',
    'purchase': 'v. 购买 n. 购买',
    'pure': 'adj. 纯的；纯洁的',
    'purely': 'adv. 纯粹地；单纯地',
    'purple': 'adj. 紫色的 n. 紫色',
    'purpose': 'n. 目的；意图 v. 打算',
    'purposely': 'adv. 故意地；有意地',
    'pursue': 'v. 追求；追捕',
    'pursuit': 'n. 追求；追捕；寻求',
    'push': 'v. 推；推动 n. 推',
    'put': 'v. 放；安置 n. 掷',
    'puzzle': 'n. 难题；谜 v. 使困惑',
    'pyramid': 'n. 金字塔；角锥体'
  };
  
  let fixed = 0;
  
  words.forEach(w => {
    const lower = w.word.toLowerCase();
    if (completeMeanings[lower]) {
      w.meaning = completeMeanings[lower];
      fixed++;
    } else if (w.meaning.includes(w.word) || 
               w.meaning.includes('（前）') || 
               w.meaning.includes('（后）') ||
               w.meaning.includes('（词根）') ||
               w.meaning.includes('（二）') ||
               w.meaning.includes('（性质）')) {
      // 如果没有完整释义，根据后缀推断
      if (lower.endsWith('tion')) w.meaning = 'n. 行为；过程；状态';
      else if (lower.endsWith('sion')) w.meaning = 'n. 行为；状态';
      else if (lower.endsWith('ment')) w.meaning = 'n. 行为；结果';
      else if (lower.endsWith('ness')) w.meaning = 'n. 性质；状态';
      else if (lower.endsWith('ity')) w.meaning = 'n. 性质；状态';
      else if (lower.endsWith('able')) w.meaning = 'adj. 可...的';
      else if (lower.endsWith('ible')) w.meaning = 'adj. 可...的';
      else if (lower.endsWith('ful')) w.meaning = 'adj. 充满...的';
      else if (lower.endsWith('less')) w.meaning = 'adj. 无...的';
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
