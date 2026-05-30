const fs = require('fs');

const topics = {
  'agree/disagree': [
    { title: '科技与人际关系', topic: 'Technology has made our lives more isolated. To what extent do you agree or disagree?' },
    { title: '电视暴力影响', topic: 'Watching violence on television encourages aggressive behavior in children. To what extent do you agree or disagree?' },
    { title: '广告的影响', topic: 'Advertising has a negative impact on society. To what extent do you agree or disagree?' },
    { title: '名人崇拜', topic: 'Celebrity culture has a negative effect on young people. To what extent do you agree or disagree?' },
    { title: '动物权利', topic: 'Animals should have the same rights as humans. To what extent do you agree or disagree?' },
    { title: '网络隐私', topic: 'Individuals have no right to privacy in the digital age. To what extent do you agree or disagree?' },
    { title: '家庭教育', topic: 'Parents should be held responsible for their children\'s behavior. To what extent do you agree or disagree?' },
    { title: '艺术价值', topic: 'Art is not essential in modern society. To what extent do you agree or disagree?' },
    { title: '纸质书籍', topic: 'Printed books will soon be replaced by e-books. To what extent do you agree or disagree?' },
    { title: '传统节日', topic: 'Traditional festivals are losing their significance. To what extent do you agree or disagree?' },
    { title: '工作与生活平衡', topic: 'It is impossible to achieve a good work-life balance in modern society. To what extent do you agree or disagree?' },
    { title: '全球化文化', topic: 'Globalization is destroying local cultures. To what extent do you agree or disagree?' },
    { title: '社交媒体与友谊', topic: 'Social media has weakened real friendships. To what extent do you agree or disagree?' },
    { title: '金钱与幸福', topic: 'Money is the most important factor for happiness. To what extent do you agree or disagree?' },
    { title: '标准化教育', topic: 'Standardized testing is the best way to assess student ability. To what extent do you agree or disagree?' },
    { title: '移民影响', topic: 'Immigration has a negative impact on the host country. To what extent do you agree or disagree?' },
    { title: '科技依赖', topic: 'Modern society is too dependent on technology. To what extent do you agree or disagree?' },
    { title: '快餐文化', topic: 'Fast food should be banned in schools. To what extent do you agree or disagree?' },
    { title: '远程学习', topic: 'Online learning is as effective as traditional classroom learning. To what extent do you agree or disagree?' },
    { title: '汽车使用', topic: 'Private cars should be banned in city centers. To what extent do you agree or disagree?' },
    { title: '人工智能威胁', topic: 'Artificial intelligence will eventually replace human workers. To what extent do you agree or disagree?' },
    { title: '线上购物', topic: 'Online shopping will completely replace traditional retail stores. To what extent do you agree or disagree?' },
    { title: '气候变化', topic: 'Individuals can do little to address climate change. To what extent do you agree or disagree?' },
    { title: '外语学习', topic: 'Learning a second language is essential in today\'s world. To what extent do you agree or disagree?' },
    { title: '游戏影响', topic: 'Video games have a negative impact on children\'s development. To what extent do you agree or disagree?' }
  ],
  'discuss both views': [
    { title: '传统与现代教育', topic: 'Some people prefer traditional education, while others prefer modern methods such as online learning. Discuss both views and give your opinion.' },
    { title: '城市与乡村生活', topic: 'Some people prefer to live in cities, while others prefer rural areas. Discuss both views and give your opinion.' },
    { title: '面对面与线上沟通', topic: 'Some people think face-to-face communication is better than online communication, while others disagree. Discuss both views and give your opinion.' },
    { title: '自学与课堂学习', topic: 'Some people believe self-study is more effective, while others think classroom learning is better. Discuss both views and give your opinion.' },
    { title: '储蓄与消费', topic: 'Some people prefer to save money, while others enjoy spending it. Discuss both views and give your opinion.' },
    { title: '公共与私人医疗', topic: 'Some people prefer public healthcare, while others choose private healthcare. Discuss both views and give your opinion.' },
    { title: '团队与个人工作', topic: 'Some people prefer working in teams, while others prefer working alone. Discuss both views and give your opinion.' },
    { title: '阅读与看电视', topic: 'Some people think reading is more beneficial than watching television, while others disagree. Discuss both views and give your opinion.' },
    { title: '旅行方式', topic: 'Some people prefer package tours, while others prefer independent travel. Discuss both views and give your opinion.' },
    { title: '传统文化与现代文化', topic: 'Some people think we should preserve traditional culture, while others think we should embrace modern culture. Discuss both views and give your opinion.' },
    { title: '政府投资方向', topic: 'Some people think governments should invest in arts, while others think they should invest in infrastructure. Discuss both views and give your opinion.' },
    { title: '家庭教育与学校教育', topic: 'Some people think family education is more important, while others think school education is more important. Discuss both views and give your opinion.' },
    { title: '稳定工作与创业', topic: 'Some people prefer stable jobs, while others prefer starting their own business. Discuss both views and give your opinion.' },
    { title: '传统购物与网购', topic: 'Some people prefer traditional shopping, while others prefer online shopping. Discuss both views and give your opinion.' },
    { title: '保护动物与利用动物', topic: 'Some people think we should protect all animals, while others think we can use animals for human benefit. Discuss both views and give your opinion.' },
    { title: '公立与私立学校', topic: 'Some people think public schools are better, while others prefer private schools. Discuss both views and give your opinion.' },
    { title: '短期与长期目标', topic: 'Some people focus on short-term goals, while others prioritize long-term goals. Discuss both views and give your opinion.' },
    { title: '经验与学历', topic: 'Some people think work experience is more important, while others believe academic qualifications matter more. Discuss both views and give your opinion.' },
    { title: '个人与集体', topic: 'Some people value individualism, while others emphasize collectivism. Discuss both views and give your opinion.' },
    { title: '竞争与合作', topic: 'Some people think competition is essential, while others believe cooperation is more important. Discuss both views and give your opinion.' }
  ],
  'advantages/disadvantages': [
    { title: '远程办公', topic: 'Discuss the advantages and disadvantages of working from home.' },
    { title: '出国留学', topic: 'Discuss the advantages and disadvantages of studying abroad.' },
    { title: '智能手机', topic: 'Discuss the advantages and disadvantages of smartphones.' },
    { title: '公共交通', topic: 'Discuss the advantages and disadvantages of public transportation.' },
    { title: '社交媒体', topic: 'Discuss the advantages and disadvantages of social media.' },
    { title: '全球化', topic: 'Discuss the advantages and disadvantages of globalization.' },
    { title: '城市化', topic: 'Discuss the advantages and disadvantages of urbanization.' },
    { title: '人工智能', topic: 'Discuss the advantages and disadvantages of artificial intelligence.' },
    { title: '旅游业', topic: 'Discuss the advantages and disadvantages of tourism.' },
    { title: '汽车', topic: 'Discuss the advantages and disadvantages of owning a car.' },
    { title: '互联网', topic: 'Discuss the advantages and disadvantages of the Internet.' },
    { title: '电视', topic: 'Discuss the advantages and disadvantages of television.' },
    { title: '快餐', topic: 'Discuss the advantages and disadvantages of fast food.' },
    { title: '广告', topic: 'Discuss the advantages and disadvantages of advertising.' },
    { title: '移民', topic: 'Discuss the advantages and disadvantages of immigration.' },
    { title: '教育科技', topic: 'Discuss the advantages and disadvantages of educational technology.' },
    { title: '可再生能源', topic: 'Discuss the advantages and disadvantages of renewable energy.' },
    { title: '全球化食品', topic: 'Discuss the advantages and disadvantages of global food trade.' },
    { title: '外包', topic: 'Discuss the advantages and disadvantages of outsourcing.' },
    { title: '社交媒体营销', topic: 'Discuss the advantages and disadvantages of social media marketing.' }
  ],
  'problem/solution': [
    { title: '空气污染', topic: 'Air pollution is a serious problem in many cities. What are the causes and what can be done to solve this problem?' },
    { title: '交通拥堵', topic: 'Traffic congestion is a major problem in many urban areas. What are the causes and what can be done to solve this problem?' },
    { title: '青少年压力', topic: 'Many young people are experiencing high levels of stress. What are the causes and what can be done to solve this problem?' },
    { title: '水资源污染', topic: 'Water pollution is a serious environmental problem. What are the causes and what can be done to solve this problem?' },
    { title: '森林砍伐', topic: 'Deforestation is a major environmental issue. What are the causes and what can be done to solve this problem?' },
    { title: '失业问题', topic: 'Unemployment is a major economic problem in many countries. What are the causes and what can be done to solve this problem?' },
    { title: '贫困问题', topic: 'Poverty is a persistent problem in many parts of the world. What are the causes and what can be done to solve this problem?' },
    { title: '垃圾处理', topic: 'Waste management is a growing problem in modern society. What are the causes and what can be done to solve this problem?' },
    { title: '网络犯罪', topic: 'Cybercrime is becoming increasingly common. What are the causes and what can be done to solve this problem?' },
    { title: '教育不平等', topic: 'Educational inequality is a major social issue. What are the causes and what can be done to solve this problem?' },
    { title: '医疗成本', topic: 'High healthcare costs are a problem in many countries. What are the causes and what can be done to solve this problem?' },
    { title: '人口老龄化', topic: 'An aging population is a challenge for many societies. What are the causes and what can be done to address this issue?' },
    { title: '能源危机', topic: 'The world is facing an energy crisis. What are the causes and what can be done to solve this problem?' },
    { title: '文化流失', topic: 'Cultural heritage is being lost in many parts of the world. What are the causes and what can be done to preserve it?' },
    { title: '青少年吸烟', topic: 'Teenage smoking is a serious health problem. What are the causes and what can be done to reduce it?' },
    { title: '工作压力', topic: 'Work-related stress is a growing problem. What are the causes and what can be done to address this issue?' },
    { title: '食品安全', topic: 'Food safety is a major concern in modern society. What are the causes and what can be done to ensure food safety?' },
    { title: '网络欺凌', topic: 'Cyberbullying is a serious issue affecting young people. What are the causes and what can be done to prevent it?' },
    { title: '住房危机', topic: 'Housing affordability is a problem in many cities. What are the causes and what can be done to solve this problem?' },
    { title: '语言消失', topic: 'Many languages are disappearing around the world. What are the causes and what can be done to preserve them?' }
  ]
};

const structures = {
  'agree/disagree': {
    introduction: 'It is argued that [topic]. I agree/disagree with this statement to a large extent.',
    body1: 'One of the main reasons why I hold this view is [reason1]. For example, [example1]. This demonstrates that [conclusion1].',
    body2: 'Another reason is [reason2]. Research shows that [evidence]. Therefore, [result].',
    conclusion: 'In conclusion, I strongly believe that [restate opinion]. This is because [summary1] and [summary2].'
  },
  'discuss both views': {
    introduction: 'There is a debate about [topic]. Some people argue [view1], while others believe [view2]. This essay will discuss both perspectives before giving my opinion.',
    body1: 'On the one hand, [view1] has some merit. Supporters argue that [reason1]. For instance, [example1]. This means that [benefit1].',
    body2: 'On the other hand, [view2] also has valid points. Advocates point out that [reason2]. They argue that [evidence]. As a result, [benefit2].',
    conclusion: 'In my opinion, [my opinion]. This is because [reason]. Overall, [summary].'
  },
  'advantages/disadvantages': {
    introduction: '[Topic] has become increasingly popular in recent years. This essay will examine the advantages and disadvantages of this trend.',
    body1: 'One of the main advantages of [topic] is [advantage1]. For example, [example1]. This contributes to [benefit1].',
    body2: 'However, there are also some disadvantages. One major drawback is [disadvantage1]. Additionally, [disadvantage2]. These issues can lead to [negative effect].',
    conclusion: 'Overall, while [topic] has clear benefits such as [advantage], it also has drawbacks like [disadvantage]. Proper management is essential to maximize the benefits.'
  },
  'problem/solution': {
    introduction: '[Problem] is a pressing issue in modern society. This essay will analyze the causes of this problem and propose some solutions.',
    body1: 'There are several reasons why [problem] occurs. Firstly, [cause1]. Secondly, [cause2]. These factors contribute to [problem severity].',
    body2: 'To address this issue, several measures can be taken. One solution is [solution1]. Another approach is [solution2]. These actions would help to [expected effect].',
    conclusion: 'In conclusion, [problem] is caused by [causes] and can be solved by [solutions]. It is essential that [call to action].'
  }
};

const vocabularyPool = {
  'agree/disagree': ['compelling', 'convincing', 'persuasive', 'undeniable', 'significant', 'considerable', 'substantial', 'fundamental', 'crucial', 'vital'],
  'discuss both views': ['perspective', 'viewpoint', 'argument', 'counterargument', 'valid', 'merit', 'compelling', 'convincing', 'balanced', 'nuanced'],
  'advantages/disadvantages': ['beneficial', 'detrimental', 'significant', 'substantial', 'considerable', 'potential', 'major', 'key', 'primary', 'secondary'],
  'problem/solution': ['pressing', 'urgent', 'critical', 'essential', 'effective', 'practical', 'viable', 'feasible', 'comprehensive', 'sustainable']
};

function generateFullParagraphs(type, topicData) {
  const templates = {
    'agree/disagree': {
      introduction: `It is argued that ${topicData.topic.split('To what extent')[0].trim()}. I believe this statement holds true to a significant extent for several reasons.`,
      body1: `One of the main reasons supporting this view is that ${topicData.title.split('与')[1] || topicData.title} has become increasingly prevalent in modern society. For example, recent studies have shown that many people now rely heavily on technology for communication, which has fundamentally changed how we interact with one another. This demonstrates that the impact of ${topicData.title.split('与')[0] || topicData.title} is undeniable and far-reaching.`,
      body2: `Another reason is that the consequences of ${topicData.title} are becoming more apparent. Research indicates that excessive use of certain technologies can lead to social isolation and reduced face-to-face interaction. Therefore, it is clear that we need to consider the implications carefully before fully embracing these changes.`,
      conclusion: `In conclusion, I strongly believe that ${topicData.topic.split('To what extent')[0].trim().toLowerCase()}. This is because the evidence clearly shows both the benefits and potential drawbacks, and we must approach this issue with caution and awareness.`
    },
    'discuss both views': {
      introduction: `There is an ongoing debate about ${topicData.topic.split('Discuss')[0].trim()}. Some people argue that one approach is superior, while others believe the alternative is better. This essay will explore both perspectives before presenting my own view.`,
      body1: `On the one hand, those who support the first view argue that it offers significant benefits. For instance, traditional methods often provide a more stable and reliable foundation, which can be particularly important in certain contexts. This means that many people feel more comfortable with established approaches.`,
      body2: `On the other hand, advocates of the alternative view point out that change brings new opportunities. They argue that embracing modern methods can lead to greater efficiency and innovation. As a result, many organizations are now adopting more contemporary approaches to stay competitive.`,
      conclusion: `In my opinion, a balanced approach that combines the best elements of both perspectives is ideal. This is because no single approach is perfect, and by integrating different methods, we can achieve better outcomes. Overall, flexibility and open-mindedness are key to addressing this issue effectively.`
    },
    'advantages/disadvantages': {
      introduction: `${topicData.topic.split('Discuss')[0].trim()} has become a significant trend in recent years, with both positive and negative implications. This essay will examine the advantages and disadvantages of this development.`,
      body1: `One of the main advantages is the convenience it offers. For example, many people now enjoy greater flexibility in their daily lives, which has improved work-life balance for countless individuals. This contributes to higher levels of satisfaction and well-being.`,
      body2: `However, there are also some notable disadvantages. One major concern is the potential for increased dependency, which can reduce self-reliance and resilience. Additionally, there may be unintended consequences that are not immediately apparent. These issues require careful consideration and proactive management.`,
      conclusion: `Overall, while ${topicData.topic.split('Discuss')[0].trim().toLowerCase()} offers clear benefits such as convenience and efficiency, it also presents challenges like dependency and unforeseen consequences. Proper planning and mindful use are essential to maximize the advantages while minimizing the drawbacks.`
    },
    'problem/solution': {
      introduction: `${topicData.topic.split('What')[0].trim()} is a pressing issue that requires immediate attention. This essay will analyze the main causes of this problem and propose practical solutions.`,
      body1: `There are several factors contributing to this issue. Firstly, rapid urbanization and population growth have placed significant strain on existing resources and infrastructure. Secondly, changing lifestyles and consumption patterns have exacerbated the problem. These factors have combined to create a situation that demands action.`,
      body2: `To address this issue, several strategies can be implemented. One approach is to promote awareness and education, which can encourage more sustainable behaviors. Another solution is to invest in infrastructure and technology that can mitigate the problem. These measures would help to create a more sustainable and resilient society.`,
      conclusion: `In conclusion, ${topicData.topic.split('What')[0].trim().toLowerCase()} is caused by a combination of factors including urbanization and changing behaviors. By implementing education campaigns and investing in sustainable solutions, we can effectively address this issue and create a better future for all.`
    }
  };
  return templates[type];
}

function generateTemplates() {
  const templates = [];
  let id = 1;
  
  Object.keys(topics).forEach(type => {
    topics[type].forEach(topicData => {
      templates.push({
        id: id++,
        title: `${type === 'agree/disagree' ? '同意/不同意类' : 
                type === 'discuss both views' ? '双边讨论类' : 
                type === 'advantages/disadvantages' ? '优缺点类' : '问题解决类'} - ${topicData.title}`,
        type: type,
        topic: topicData.topic,
        structure: structures[type],
        fullParagraphs: generateFullParagraphs(type, topicData),
        vocabulary: vocabularyPool[type].slice(0, 7)
      });
    });
  });
  
  return templates;
}

const essayTemplates = generateTemplates();

const output = `export interface SentencePattern {
  id: number;
  pattern: string;
  explanation: string;
  example: string;
  type: 'argument' | 'cause' | 'effect' | 'comparison' | 'example' | 'conclusion';
}

export interface SynonymGroup {
  id: number;
  word: string;
  synonyms: { word: string; level: string }[];
}

export interface EssayTemplate {
  id: number;
  title: string;
  type: 'agree/disagree' | 'discuss both views' | 'advantages/disadvantages' | 'problem/solution';
  topic: string;
  structure: {
    introduction: string;
    body1: string;
    body2: string;
    conclusion: string;
  };
  fullParagraphs: {
    introduction: string;
    body1: string;
    body2: string;
    conclusion: string;
  };
  vocabulary: string[];
}

export const sentencePatterns: SentencePattern[] = [
  {
    id: 1,
    pattern: 'It is widely believed that...',
    explanation: '引出普遍观点',
    example: 'It is widely believed that education is the key to success.',
    type: 'argument'
  },
  {
    id: 2,
    pattern: 'There is no doubt that...',
    explanation: '强调某事实的确定性',
    example: 'There is no doubt that technology has transformed our lives.',
    type: 'argument'
  },
  {
    id: 3,
    pattern: 'One of the main reasons for... is that...',
    explanation: '说明主要原因',
    example: 'One of the main reasons for climate change is that we burn too many fossil fuels.',
    type: 'cause'
  },
  {
    id: 4,
    pattern: 'As a result, ... / Consequently, ...',
    explanation: '引出结果',
    example: 'Many forests were cut down. As a result, the ecosystem was damaged.',
    type: 'effect'
  },
  {
    id: 5,
    pattern: 'Compared with ..., ...',
    explanation: '进行比较',
    example: 'Compared with traditional methods, online learning is more flexible.',
    type: 'comparison'
  },
  {
    id: 6,
    pattern: 'For instance, ... / For example, ...',
    explanation: '举例说明',
    example: 'Some countries have successfully reduced pollution. For instance, Denmark uses wind energy extensively.',
    type: 'example'
  },
  {
    id: 7,
    pattern: 'In conclusion, ... / To sum up, ...',
    explanation: '总结观点',
    example: 'In conclusion, both approaches have their merits and should be considered.',
    type: 'conclusion'
  },
  {
    id: 8,
    pattern: 'On the one hand, ... On the other hand, ...',
    explanation: '对比两种观点',
    example: 'On the one hand, technology improves efficiency. On the other hand, it may reduce human interaction.',
    type: 'comparison'
  },
  {
    id: 9,
    pattern: 'Despite the fact that ..., ...',
    explanation: '表达让步关系',
    example: 'Despite the fact that it is expensive, many people still buy organic food.',
    type: 'argument'
  },
  {
    id: 10,
    pattern: 'This can be attributed to ...',
    explanation: '归因于',
    example: 'The increase in obesity can be attributed to unhealthy eating habits.',
    type: 'cause'
  }
];

export const synonymGroups: SynonymGroup[] = [
  {
    id: 1,
    word: 'important',
    synonyms: [
      { word: 'crucial', level: 'IELTS6' },
      { word: 'vital', level: 'IELTS6' },
      { word: 'significant', level: 'IELTS6' },
      { word: 'essential', level: 'IELTS5' },
      { word: 'fundamental', level: 'IELTS6' }
    ]
  },
  {
    id: 2,
    word: 'show',
    synonyms: [
      { word: 'demonstrate', level: 'IELTS6' },
      { word: 'illustrate', level: 'IELTS6' },
      { word: 'indicate', level: 'IELTS6' },
      { word: 'reveal', level: 'IELTS6' },
      { word: 'exhibit', level: 'IELTS7' }
    ]
  },
  {
    id: 3,
    word: 'think',
    synonyms: [
      { word: 'believe', level: 'IELTS5' },
      { word: 'argue', level: 'IELTS6' },
      { word: 'maintain', level: 'IELTS7' },
      { word: 'contend', level: 'IELTS7' },
      { word: 'assert', level: 'IELTS7' }
    ]
  },
  {
    id: 4,
    word: 'use',
    synonyms: [
      { word: 'utilize', level: 'IELTS6' },
      { word: 'employ', level: 'IELTS6' },
      { word: 'apply', level: 'IELTS5' },
      { word: 'exploit', level: 'IELTS7' },
      { word: 'leverage', level: 'IELTS8' }
    ]
  },
  {
    id: 5,
    word: 'help',
    synonyms: [
      { word: 'assist', level: 'IELTS5' },
      { word: 'aid', level: 'IELTS6' },
      { word: 'facilitate', level: 'IELTS7' },
      { word: 'support', level: 'IELTS5' },
      { word: 'enable', level: 'IELTS6' }
    ]
  },
  {
    id: 6,
    word: 'change',
    synonyms: [
      { word: 'alter', level: 'IELTS6' },
      { word: 'modify', level: 'IELTS6' },
      { word: 'transform', level: 'IELTS6' },
      { word: 'adjust', level: 'IELTS5' },
      { word: 'revise', level: 'IELTS6' }
    ]
  },
  {
    id: 7,
    word: 'give',
    synonyms: [
      { word: 'provide', level: 'IELTS5' },
      { word: 'offer', level: 'IELTS5' },
      { word: 'supply', level: 'IELTS6' },
      { word: 'grant', level: 'IELTS7' },
      { word: 'furnish', level: 'IELTS7' }
    ]
  },
  {
    id: 8,
    word: 'get',
    synonyms: [
      { word: 'obtain', level: 'IELTS6' },
      { word: 'acquire', level: 'IELTS6' },
      { word: 'attain', level: 'IELTS7' },
      { word: 'secure', level: 'IELTS7' },
      { word: 'gain', level: 'IELTS5' }
    ]
  }
];

export const essayTemplates: EssayTemplate[] = ${JSON.stringify(essayTemplates, null, 2)};

export const patternTypes = ['全部', 'argument', 'cause', 'effect', 'comparison', 'example', 'conclusion'];
export const templateTypes = ['agree/disagree', 'discuss both views', 'advantages/disadvantages', 'problem/solution'];
`;

fs.writeFileSync('./src/data/writing.ts', output, 'utf8');
console.log(`Generated ${essayTemplates.length} essay templates successfully!`);
