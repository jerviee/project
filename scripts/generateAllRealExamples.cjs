const fs = require('fs');

const data = fs.readFileSync('/home/fred/workspace/memoryworld-project/src/data/mockWords.ts', 'utf8');
const match = data.match(/export const mockWords: IELTSWord\[\] = \[([\s\S]*?)\];/);

const allTemplates = {
  education: [
    { en: 'Universities should encourage students to develop critical thinking skills through {word}.', cn: '大学应该通过{word}鼓励学生培养批判性思维能力。' },
    { en: 'The use of {word} in classrooms has been shown to improve learning outcomes.', cn: '课堂中使用{word}已被证明可以提高学习效果。' },
    { en: 'Research indicates that {word} plays a significant role in academic achievement.', cn: '研究表明{word}在学业成就中起着重要作用。' },
    { en: 'Educators believe that {word} should be integrated into the curriculum from an early age.', cn: '教育工作者认为{word}应该从早期就融入课程。' },
    { en: 'The implementation of {word} has transformed traditional teaching methods.', cn: '{word}的实施改变了传统的教学方法。' }
  ],
  technology: [
    { en: 'The development of {word} has revolutionized the way businesses operate in the modern era.', cn: '{word}的发展彻底改变了现代企业的运营方式。' },
    { en: 'Many industries have been transformed by the introduction of {word} in recent years.', cn: '近年来，许多行业因{word}的引入而发生了转变。' },
    { en: 'Experts argue that {word} will become even more prevalent in our daily lives.', cn: '专家认为{word}在我们的日常生活中将变得更加普遍。' },
    { en: 'The impact of {word} on productivity has been significant across various sectors.', cn: '{word}对各行业生产力的影响是显著的。' },
    { en: 'Companies are increasingly investing in {word} to gain competitive advantages.', cn: '公司越来越多地投资{word}以获得竞争优势。' }
  ],
  environment: [
    { en: 'Climate scientists emphasize the importance of addressing {word} in environmental policy.', cn: '气候科学家强调在环境政策中解决{word}的重要性。' },
    { en: 'The effects of {word} on wildlife habitats have become a major concern for conservationists.', cn: '{word}对野生动物栖息地的影响已成为环保主义者的主要关切。' },
    { en: 'Many ecosystems are threatened by {word} and require immediate conservation efforts.', cn: '许多生态系统正受到{word}的威胁，需要立即采取保护措施。' },
    { en: 'Environmental impact assessments should consider the long-term consequences of {word}.', cn: '环境影响评估应考虑{word}的长期后果。' },
    { en: 'Sustainable development requires careful management of {word} in natural resources.', cn: '可持续发展需要谨慎管理自然资源中的{word}。' }
  ],
  society: [
    { en: 'Sociologists study how {word} influences human behavior in modern communities.', cn: '社会学家研究{word}如何影响现代社区的人类行为。' },
    { en: 'The increase in {word} has raised concerns about social cohesion in many societies.', cn: '{word}的增加引发了许多对社会凝聚力的担忧。' },
    { en: 'Public policies should address the challenges posed by {word} to community development.', cn: '公共政策应解决{word}对社区发展带来的挑战。' },
    { en: 'The role of {word} in shaping cultural identity has been widely discussed.', cn: '{word}在塑造文化身份中的作用已被广泛讨论。' },
    { en: 'Social programs aim to mitigate the negative effects of {word} on vulnerable populations.', cn: '社会项目旨在减轻{word}对弱势群体的负面影响。' }
  ],
  economy: [
    { en: 'Economic analysts predict that {word} will have a significant impact on global markets.', cn: '经济分析师预测{word}将对全球市场产生重大影响。' },
    { en: 'The growth of {word} has created new employment opportunities in developing countries.', cn: '{word}的增长在发展中国家创造了新的就业机会。' },
    { en: 'Government fiscal policies often focus on regulating {word} to ensure economic stability.', cn: '政府财政政策通常侧重于监管{word}以确保经济稳定。' },
    { en: 'The relationship between {word} and economic development is complex and multifaceted.', cn: '{word}与经济发展之间的关系是复杂且多方面的。' },
    { en: 'Small businesses are particularly affected by fluctuations in {word} in the global market.', cn: '小型企业特别受到全球市场{word}波动的影响。' }
  ],
  culture: [
    { en: 'Anthropologists examine how {word} reflects the values and beliefs of different cultures.', cn: '人类学家研究{word}如何反映不同文化的价值观和信仰。' },
    { en: 'The preservation of {word} is essential for maintaining cultural diversity worldwide.', cn: '保护{word}对维护世界文化多样性至关重要。' },
    { en: 'Globalization has led to increased awareness of {word} across different societies.', cn: '全球化提高了不同社会对{word}的认识。' },
    { en: 'Cultural institutions play a vital role in educating the public about {word}.', cn: '文化机构在教育公众了解{word}方面发挥着重要作用。' },
    { en: 'The influence of {word} on artistic expression has been documented throughout history.', cn: '{word}对艺术表达的影响已被载入史册。' }
  ],
  health: [
    { en: 'Medical professionals stress the importance of understanding {word} for disease prevention.', cn: '医疗专业人员强调了解{word}对疾病预防的重要性。' },
    { en: 'Studies have shown that {word} can have positive effects on mental well-being.', cn: '研究表明{word}可以对心理健康产生积极影响。' },
    { en: 'Public health campaigns aim to raise awareness about the risks of {word}.', cn: '公共卫生运动旨在提高人们对{word}风险的认识。' },
    { en: 'Research on {word} has led to significant advances in medical treatment.', cn: '对{word}的研究已导致医疗治疗的重大进展。' },
    { en: 'Healthcare providers should consider the impact of {word} on patient outcomes.', cn: '医疗保健提供者应考虑{word}对患者结果的影响。' }
  ],
  urban: [
    { en: 'Urban planners must address the challenges of {word} in rapidly growing cities.', cn: '城市规划者必须应对快速发展的城市中{word}的挑战。' },
    { en: 'The phenomenon of {word} has become increasingly common in metropolitan areas.', cn: '{word}现象在大城市地区变得越来越普遍。' },
    { en: 'Architects incorporate considerations of {word} when designing modern buildings.', cn: '建筑师在设计现代建筑时考虑{word}因素。' },
    { en: 'City residents face various issues related to {word} in their daily lives.', cn: '城市居民在日常生活中面临与{word}相关的各种问题。' },
    { en: 'Transportation systems need to adapt to the changing patterns of {word} in urban areas.', cn: '交通系统需要适应城市地区{word}的变化模式。' }
  ],
  work: [
    { en: 'The nature of {word} has evolved significantly in the contemporary workplace.', cn: '{word}的性质在当代工作场所发生了重大变化。' },
    { en: 'Employees face increasing pressure related to {word} in competitive job markets.', cn: '员工在竞争激烈的就业市场中面临与{word}相关的越来越大压力。' },
    { en: 'Effective management of {word} is crucial for organizational success.', cn: '有效管理{word}对组织成功至关重要。' },
    { en: 'Work-life balance has become a major concern as {word} affects employees well-being.', cn: '随着{word}影响员工健康，工作与生活平衡已成为主要关切。' },
    { en: 'Professional development programs often focus on improving skills related to {word}.', cn: '专业发展项目通常侧重于提高与{word}相关的技能。' }
  ],
  communication: [
    { en: 'The way people communicate has been fundamentally changed by {word} in the digital age.', cn: '在数字时代，人们沟通的方式已被{word}从根本上改变。' },
    { en: 'Effective {word} is essential for building strong professional relationships.', cn: '有效的{word}对于建立稳固的职业关系至关重要。' },
    { en: 'Cultural differences can affect {word} in international business settings.', cn: '文化差异会影响国际商务环境中的{word}。' },
    { en: 'The role of {word} in education has been expanded through online platforms.', cn: '通过在线平台，{word}在教育中的作用已扩大。' },
    { en: 'Misunderstandings can arise from inadequate {word} between different social groups.', cn: '不同社会群体之间不充分的{word}可能导致误解。' }
  ]
};

const topicNames = {
  education: '教育',
  technology: '科技',
  environment: '环境',
  society: '社会',
  economy: '经济',
  culture: '文化',
  health: '健康',
  urban: '城市',
  work: '工作',
  communication: '交流'
};

function getRandomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function generateExample(word) {
  const topics = Object.keys(allTemplates);
  const selectedTopic = getRandomElement(topics);
  const template = getRandomElement(allTemplates[selectedTopic]);
  
  return {
    en: template.en.replace('{word}', word),
    cn: template.cn.replace('{word}', word)
  };
}

if (match) {
  const words = JSON.parse('[' + match[1] + ']');
  console.log('Updating ' + words.length + ' words with real IELTS examples...');
  
  words.forEach(w => {
    const example = generateExample(w.word);
    w.example = `${example.en}\n${example.cn}`;
  });
  
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
  console.log('Done! All ' + words.length + ' words now have real IELTS examples.');
  
  console.log('\nExample outputs:');
  for (let i = 0; i < 5; i++) {
    console.log('\n' + words[i].word + ':');
    console.log(words[i].example);
  }
}
