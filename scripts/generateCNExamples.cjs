const fs = require('fs');

const topics = {
  education: [
    { en: 'Many universities require students to submit their research findings before the deadline.', cn: '许多大学要求学生在截止日期前提交他们的研究发现。' },
    { en: 'The professor explained the complex theory using simple language that students could easily understand.', cn: '教授用学生容易理解的简单语言解释了复杂的理论。' },
    { en: 'Academic writing demands precision and clarity in expressing ideas.', cn: '学术写作要求表达观点时准确清晰。' },
    { en: 'Students should develop critical thinking skills to analyze various perspectives.', cn: '学生应该培养批判性思维能力来分析不同观点。' },
    { en: 'Online learning platforms have transformed traditional education methods.', cn: '在线学习平台改变了传统教育方式。' }
  ],
  technology: [
    { en: 'Artificial intelligence has significantly impacted various industries worldwide.', cn: '人工智能显著影响了全球各行业。' },
    { en: 'The rapid advancement of technology has changed how people communicate.', cn: '科技的快速进步改变了人们的沟通方式。' },
    { en: 'Cybersecurity concerns have increased with the growing reliance on digital systems.', cn: '随着对数字系统依赖的增加，网络安全问题也在增加。' },
    { en: 'Renewable energy technologies are being adopted to address environmental challenges.', cn: '人们正在采用可再生能源技术来应对环境挑战。' },
    { en: 'Social media platforms have influenced modern communication patterns.', cn: '社交媒体平台影响了现代沟通模式。' }
  ],
  environment: [
    { en: 'Climate change poses a significant threat to coastal communities.', cn: '气候变化对沿海社区构成重大威胁。' },
    { en: 'Deforestation leads to loss of biodiversity in many regions.', cn: '森林砍伐导致许多地区生物多样性丧失。' },
    { en: 'Sustainable development requires balancing economic growth with environmental protection.', cn: '可持续发展需要在经济增长和环境保护之间取得平衡。' },
    { en: 'Wildlife conservation efforts have helped protect endangered species.', cn: '野生动物保护工作帮助保护了濒危物种。' },
    { en: 'Air pollution remains a major concern in urban areas.', cn: '空气污染仍然是城市地区的主要关注点。' }
  ],
  society: [
    { en: 'Urbanization has led to significant changes in lifestyle patterns.', cn: '城市化导致了生活方式的重大变化。' },
    { en: 'Cultural exchange promotes understanding between different nations.', cn: '文化交流促进不同国家之间的理解。' },
    { en: 'Social inequality continues to be a pressing issue in many societies.', cn: '社会不平等在许多社会中仍然是紧迫问题。' },
    { en: 'Public health initiatives have improved quality of life for many communities.', cn: '公共健康举措提高了许多社区的生活质量。' },
    { en: 'Immigration patterns have shaped demographic changes in various countries.', cn: '移民模式塑造了不同国家的人口变化。' }
  ],
  economy: [
    { en: 'Global trade agreements have influenced international economic relations.', cn: '全球贸易协定影响了国际经济关系。' },
    { en: 'Small businesses face challenges in competing with large corporations.', cn: '小企业在与大公司竞争时面临挑战。' },
    { en: 'Economic development often comes with environmental trade-offs.', cn: '经济发展往往伴随着环境方面的权衡。' },
    { en: 'Employment opportunities vary significantly across different regions.', cn: '不同地区的就业机会差异很大。' },
    { en: 'Financial literacy is essential for making informed decisions.', cn: '金融素养对于做出明智决策至关重要。' }
  ],
  culture: [
    { en: 'Traditional crafts are being preserved through cultural heritage programs.', cn: '传统工艺品通过文化遗产项目得到保护。' },
    { en: 'Museums play a vital role in educating the public about history.', cn: '博物馆在教育公众了解历史方面发挥着重要作用。' },
    { en: 'Architecture reflects the cultural values of different societies.', cn: '建筑反映不同社会的文化价值观。' },
    { en: 'Literature provides insights into human experiences across cultures.', cn: '文学提供了对跨文化人类经历的洞察。' },
    { en: 'Festivals celebrate the unique traditions of various communities.', cn: '节日庆祝不同社区的独特传统。' }
  ]
};

const templates = [
  { en: 'The word "{word}" is frequently used in IELTS reading passages about {topic}.', cn: '单词"{word}"常用于雅思阅读文章中关于{topic}的内容。' },
  { en: 'Candidates should understand the meaning of "{word}" to achieve a high band score.', cn: '考生应理解"{word}"的含义以获得高分。' },
  { en: 'In IELTS listening tasks, the word "{word}" often appears in academic contexts.', cn: '在雅思听力任务中，单词"{word}"常出现在学术语境中。' },
  { en: 'The term "{word}" commonly appears in discussions about {topic}.', cn: '术语"{word}"常出现在关于{topic}的讨论中。' },
  { en: 'Understanding "{word}" is essential for comprehending academic texts.', cn: '理解"{word}"对于阅读学术文章至关重要。' },
  { en: 'Students frequently encounter "{word}" in Cambridge IELTS practice tests.', cn: '学生在剑桥雅思练习题中经常遇到"{word}"。' },
  { en: 'The concept of "{word}" is explored in various IELTS examination topics.', cn: '"{word}"的概念在各种雅思考试话题中都有探讨。' },
  { en: 'In academic writing, "{word}" is used to express specific ideas.', cn: '在学术写作中，"{word}"用于表达特定观点。' },
  { en: 'The word "{word}" appears in many authentic IELTS reading materials.', cn: '单词"{word}"出现在许多真实的雅思阅读材料中。' },
  { en: 'Comprehension of "{word}" is tested in various sections of the IELTS exam.', cn: '雅思考试的不同部分都会测试对"{word}"的理解。' }
];

const topicNames = {
  education: '教育',
  technology: '科技',
  environment: '环境',
  society: '社会',
  economy: '经济',
  culture: '文化'
};

function getRandomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function generateExample(word) {
  const template = getRandomElement(templates);
  const topicKeys = Object.keys(topics);
  const randomTopic = getRandomElement(topicKeys);
  const topicSentence = getRandomElement(topics[randomTopic]);
  const topicName = topicNames[randomTopic];
  
  const enExample = template.en.replace('{word}', word).replace('{topic}', topicName);
  const cnExample = template.cn.replace('{word}', word).replace('{topic}', topicName);
  
  return `${enExample}\n${cnExample}`;
}

const data = fs.readFileSync('/home/fred/workspace/memoryworld-project/src/data/mockWords.ts', 'utf8');
const match = data.match(/export const mockWords: IELTSWord\[\] = \[([\s\S]*?)\];/);

if (match) {
  const words = JSON.parse('[' + match[1] + ']');
  console.log('Updating ' + words.length + ' words with Chinese-English examples...');
  
  words.forEach(w => {
    w.example = generateExample(w.word);
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
  console.log('Done! All words now have Chinese-English examples.');
  
  console.log('\nExample outputs:');
  for (let i = 0; i < 3; i++) {
    console.log('\n' + words[i].word + ':');
    console.log(words[i].example);
  }
}
