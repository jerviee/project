export interface SentencePattern {
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
  structure: {
    introduction: string;
    body1: string;
    body2: string;
    conclusion: string;
  };
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

export const essayTemplates: EssayTemplate[] = [
  {
    id: 1,
    title: '同意/不同意类',
    type: 'agree/disagree',
    structure: {
      introduction: 'It is argued that [话题]. I completely agree/disagree with this view for several reasons.',
      body1: 'Firstly, [理由1]. For example, [例子]. This demonstrates that [结论].',
      body2: 'Secondly, [理由2]. Research shows that [证据]. Therefore, [结果].',
      conclusion: 'In conclusion, I believe that [重申观点]. This is because [总结理由1] and [总结理由2].'
    }
  },
  {
    id: 2,
    title: '双边讨论类',
    type: 'discuss both views',
    structure: {
      introduction: 'Some people argue that [观点1], while others believe [观点2]. This essay will discuss both perspectives before giving my opinion.',
      body1: 'On the one hand, [观点1的理由]. For instance, [例子]. This shows that [结论].',
      body2: 'On the other hand, [观点2的理由]. Research indicates that [证据]. As a result, [结果].',
      conclusion: 'In my opinion, [个人观点]. This is because [理由]. Overall, [总结].'
    }
  },
  {
    id: 3,
    title: '优缺点类',
    type: 'advantages/disadvantages',
    structure: {
      introduction: '[话题] has become increasingly popular in recent years. This essay will examine the advantages and disadvantages of this trend.',
      body1: 'One of the main advantages is [优点1]. For example, [例子]. This means that [好处].',
      body2: 'However, there are also some disadvantages. One major drawback is [缺点1]. This can lead to [负面影响].',
      conclusion: 'In conclusion, while [话题] has clear benefits such as [优点], it also has drawbacks like [缺点]. Overall, I believe the advantages outweigh the disadvantages.'
    }
  },
  {
    id: 4,
    title: '问题解决类',
    type: 'problem/solution',
    structure: {
      introduction: '[问题] is a pressing issue in modern society. This essay will analyze the causes of this problem and propose some solutions.',
      body1: 'There are several reasons why [问题] occurs. Firstly, [原因1]. Secondly, [原因2]. These factors contribute to [问题的严重性].',
      body2: 'To address this issue, several measures can be taken. One solution is [解决方案1]. Another approach is [解决方案2]. These actions would help to [预期效果].',
      conclusion: 'In conclusion, [问题] is caused by [原因] and can be solved by [解决方案]. It is essential that [呼吁行动].'
    }
  }
];

export const patternTypes = ['全部', 'argument', 'cause', 'effect', 'comparison', 'example', 'conclusion'];
export const templateTypes = ['agree/disagree', 'discuss both views', 'advantages/disadvantages', 'problem/solution'];
