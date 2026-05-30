export interface SentencePattern {
  id: number;
  pattern: string;
  explanation: string;
  example: string;
  type: "argument" | 'cause' | 'effect' | 'comparison' | 'example' | 'conclusion';
}

export interface SynonymGroup {
  id: number;
  word: string;
  synonyms: { word: string; level: string }[];
}

export interface EssayTemplate {
  id: number;
  title: string;
  type: "agree/disagree" | 'discuss both views' | 'advantages/disadvantages' | 'problem/solution';
  topic: string;
  speaker?: string;
  speakerTitle?: string;
  style?: string;
  styleNote?: string;
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
    pattern: "It is widely believed that...",
    explanation: "引出普遍观点",
    example: "It is widely believed that education is the key to success.",
    type: "argument"
  },
  {
    id: 2,
    pattern: "There is no doubt that...",
    explanation: "强调某事实的确定性",
    example: "There is no doubt that technology has transformed our lives.",
    type: "argument"
  },
  {
    id: 3,
    pattern: "One of the main reasons for... is that...",
    explanation: "说明主要原因",
    example: "One of the main reasons for climate change is that we burn too many fossil fuels.",
    type: "cause"
  },
  {
    id: 4,
    pattern: "As a result, ... / Consequently, ...",
    explanation: "引出结果",
    example: "Many forests were cut down. As a result, the ecosystem was damaged.",
    type: "effect"
  },
  {
    id: 5,
    pattern: "Compared with ..., ...",
    explanation: "进行比较",
    example: "Compared with traditional methods, online learning is more flexible.",
    type: "comparison"
  },
  {
    id: 6,
    pattern: "For instance, ... / For example, ...",
    explanation: "举例说明",
    example: "Some countries have successfully reduced pollution. For instance, Denmark uses wind energy extensively.",
    type: "example"
  },
  {
    id: 7,
    pattern: "In conclusion, ... / To sum up, ...",
    explanation: "总结观点",
    example: "In conclusion, both approaches have their merits and should be considered.",
    type: "conclusion"
  },
  {
    id: 8,
    pattern: "On the one hand, ... On the other hand, ...",
    explanation: "对比两种观点",
    example: "On the one hand, technology improves efficiency. On the other hand, it may reduce human interaction.",
    type: "comparison"
  },
  {
    id: 9,
    pattern: "Despite the fact that ..., ...",
    explanation: "表达让步关系",
    example: "Despite the fact that it is expensive, many people still buy organic food.",
    type: "argument"
  },
  {
    id: 10,
    pattern: "This can be attributed to ...",
    explanation: "归因于",
    example: "The increase in obesity can be attributed to unhealthy eating habits.",
    type: "cause"
  }
];

export const synonymGroups: SynonymGroup[] = [
  {
    id: 1,
    word: "important",
    synonyms: [
      { word: "crucial", level: "IELTS6" },
      { word: "vital", level: "IELTS6" },
      { word: "significant", level: "IELTS6" },
      { word: "essential", level: "IELTS5" },
      { word: "fundamental", level: "IELTS6" }
    ]
  },
  {
    id: 2,
    word: "show",
    synonyms: [
      { word: "demonstrate", level: "IELTS6" },
      { word: "illustrate", level: "IELTS6" },
      { word: "indicate", level: "IELTS6" },
      { word: "reveal", level: "IELTS6" },
      { word: "exhibit", level: "IELTS7" }
    ]
  },
  {
    id: 3,
    word: "think",
    synonyms: [
      { word: "believe", level: "IELTS5" },
      { word: "argue", level: "IELTS6" },
      { word: "maintain", level: "IELTS7" },
      { word: "contend", level: "IELTS7" },
      { word: "assert", level: "IELTS7" }
    ]
  },
  {
    id: 4,
    word: "use",
    synonyms: [
      { word: "utilize", level: "IELTS6" },
      { word: "employ", level: "IELTS6" },
      { word: "apply", level: "IELTS5" },
      { word: "exploit", level: "IELTS7" },
      { word: "leverage", level: "IELTS8" }
    ]
  },
  {
    id: 5,
    word: "help",
    synonyms: [
      { word: "assist", level: "IELTS5" },
      { word: "aid", level: "IELTS6" },
      { word: "facilitate", level: "IELTS7" },
      { word: "support", level: "IELTS5" },
      { word: "enable", level: "IELTS6" }
    ]
  },
  {
    id: 6,
    word: "change",
    synonyms: [
      { word: "alter", level: "IELTS6" },
      { word: "modify", level: "IELTS6" },
      { word: "transform", level: "IELTS6" },
      { word: "adjust", level: "IELTS5" },
      { word: "revise", level: "IELTS6" }
    ]
  },
  {
    id: 7,
    word: "give",
    synonyms: [
      { word: "provide", level: "IELTS5" },
      { word: "offer", level: "IELTS5" },
      { word: "supply", level: "IELTS6" },
      { word: "grant", level: "IELTS7" },
      { word: "furnish", level: "IELTS7" }
    ]
  },
  {
    id: 8,
    word: "get",
    synonyms: [
      { word: "obtain", level: "IELTS6" },
      { word: "acquire", level: "IELTS6" },
      { word: "attain", level: "IELTS7" },
      { word: "secure", level: "IELTS7" },
      { word: "gain", level: "IELTS5" }
    ]
  }
];

export const essayTemplates: EssayTemplate[] = [
  {
    id: 1,
    title: "同意/不同意类 - 科技与人际关系",
    type: "agree/disagree",
    topic: "Technology has made our lives more isolated. To what extent do you agree or disagree?",
    structure: {
      introduction: "It is argued that [topic]. I agree/disagree with this statement to a large extent.",
      body1: "One of the main reasons why I hold this view is [reason1]. For example, [example1]. This demonstrates that [conclusion1].",
      body2: "Another reason is [reason2]. Research shows that [evidence]. Therefore, [result].",
      conclusion: "In conclusion, I strongly believe that [restate opinion]. This is because [summary1] and [summary2]."
    },
    fullParagraphs: {
      introduction: "It is argued that Technology has made our lives more isolated.. I believe this statement holds true to a significant extent for several reasons.",
      body1: "One of the main reasons supporting this view is that 人际关系 has become increasingly prevalent in modern society. For example, recent studies have shown that many people now rely heavily on technology for communication, which has fundamentally changed how we interact with one another. This demonstrates that the impact of 科技 is undeniable and far-reaching.",
      body2: "Another reason is that the consequences of 科技与人际关系 are becoming more apparent. Research indicates that excessive use of certain technologies can lead to social isolation and reduced face-to-face interaction. Therefore, it is clear that we need to consider the implications carefully before fully embracing these changes.",
      conclusion: "In conclusion, I strongly believe that technology has made our lives more isolated.. This is because the evidence clearly shows both the benefits and potential drawbacks, and we must approach this issue with caution and awareness."
    },
    vocabulary: [
      "compelling",
      "convincing",
      "persuasive",
      "undeniable",
      "significant",
      "considerable",
      "substantial"
    ]
  },
  {
    id: 2,
    title: "同意/不同意类 - 电视暴力影响",
    type: "agree/disagree",
    topic: "Watching violence on television encourages aggressive behavior in children. To what extent do you agree or disagree?",
    structure: {
      introduction: "It is argued that [topic]. I agree/disagree with this statement to a large extent.",
      body1: "One of the main reasons why I hold this view is [reason1]. For example, [example1]. This demonstrates that [conclusion1].",
      body2: "Another reason is [reason2]. Research shows that [evidence]. Therefore, [result].",
      conclusion: "In conclusion, I strongly believe that [restate opinion]. This is because [summary1] and [summary2]."
    },
    fullParagraphs: {
      introduction: "It is argued that Watching violence on television encourages aggressive behavior in children.. I believe this statement holds true to a significant extent for several reasons.",
      body1: "One of the main reasons supporting this view is that 电视暴力影响 has become increasingly prevalent in modern society. For example, recent studies have shown that many people now rely heavily on technology for communication, which has fundamentally changed how we interact with one another. This demonstrates that the impact of 电视暴力影响 is undeniable and far-reaching.",
      body2: "Another reason is that the consequences of 电视暴力影响 are becoming more apparent. Research indicates that excessive use of certain technologies can lead to social isolation and reduced face-to-face interaction. Therefore, it is clear that we need to consider the implications carefully before fully embracing these changes.",
      conclusion: "In conclusion, I strongly believe that watching violence on television encourages aggressive behavior in children.. This is because the evidence clearly shows both the benefits and potential drawbacks, and we must approach this issue with caution and awareness."
    },
    vocabulary: [
      "compelling",
      "convincing",
      "persuasive",
      "undeniable",
      "significant",
      "considerable",
      "substantial"
    ]
  },
  {
    id: 3,
    title: "同意/不同意类 - 广告的影响",
    type: "agree/disagree",
    topic: "Advertising has a negative impact on society. To what extent do you agree or disagree?",
    structure: {
      introduction: "It is argued that [topic]. I agree/disagree with this statement to a large extent.",
      body1: "One of the main reasons why I hold this view is [reason1]. For example, [example1]. This demonstrates that [conclusion1].",
      body2: "Another reason is [reason2]. Research shows that [evidence]. Therefore, [result].",
      conclusion: "In conclusion, I strongly believe that [restate opinion]. This is because [summary1] and [summary2]."
    },
    fullParagraphs: {
      introduction: "It is argued that Advertising has a negative impact on society.. I believe this statement holds true to a significant extent for several reasons.",
      body1: "One of the main reasons supporting this view is that 广告的影响 has become increasingly prevalent in modern society. For example, recent studies have shown that many people now rely heavily on technology for communication, which has fundamentally changed how we interact with one another. This demonstrates that the impact of 广告的影响 is undeniable and far-reaching.",
      body2: "Another reason is that the consequences of 广告的影响 are becoming more apparent. Research indicates that excessive use of certain technologies can lead to social isolation and reduced face-to-face interaction. Therefore, it is clear that we need to consider the implications carefully before fully embracing these changes.",
      conclusion: "In conclusion, I strongly believe that advertising has a negative impact on society.. This is because the evidence clearly shows both the benefits and potential drawbacks, and we must approach this issue with caution and awareness."
    },
    vocabulary: [
      "compelling",
      "convincing",
      "persuasive",
      "undeniable",
      "significant",
      "considerable",
      "substantial"
    ]
  },
  {
    id: 4,
    title: "同意/不同意类 - 名人崇拜",
    type: "agree/disagree",
    topic: "Celebrity culture has a negative effect on young people. To what extent do you agree or disagree?",
    structure: {
      introduction: "It is argued that [topic]. I agree/disagree with this statement to a large extent.",
      body1: "One of the main reasons why I hold this view is [reason1]. For example, [example1]. This demonstrates that [conclusion1].",
      body2: "Another reason is [reason2]. Research shows that [evidence]. Therefore, [result].",
      conclusion: "In conclusion, I strongly believe that [restate opinion]. This is because [summary1] and [summary2]."
    },
    fullParagraphs: {
      introduction: "It is argued that Celebrity culture has a negative effect on young people.. I believe this statement holds true to a significant extent for several reasons.",
      body1: "One of the main reasons supporting this view is that 名人崇拜 has become increasingly prevalent in modern society. For example, recent studies have shown that many people now rely heavily on technology for communication, which has fundamentally changed how we interact with one another. This demonstrates that the impact of 名人崇拜 is undeniable and far-reaching.",
      body2: "Another reason is that the consequences of 名人崇拜 are becoming more apparent. Research indicates that excessive use of certain technologies can lead to social isolation and reduced face-to-face interaction. Therefore, it is clear that we need to consider the implications carefully before fully embracing these changes.",
      conclusion: "In conclusion, I strongly believe that celebrity culture has a negative effect on young people.. This is because the evidence clearly shows both the benefits and potential drawbacks, and we must approach this issue with caution and awareness."
    },
    vocabulary: [
      "compelling",
      "convincing",
      "persuasive",
      "undeniable",
      "significant",
      "considerable",
      "substantial"
    ]
  },
  {
    id: 5,
    title: "同意/不同意类 - 动物权利",
    type: "agree/disagree",
    topic: "Animals should have the same rights as humans. To what extent do you agree or disagree?",
    structure: {
      introduction: "It is argued that [topic]. I agree/disagree with this statement to a large extent.",
      body1: "One of the main reasons why I hold this view is [reason1]. For example, [example1]. This demonstrates that [conclusion1].",
      body2: "Another reason is [reason2]. Research shows that [evidence]. Therefore, [result].",
      conclusion: "In conclusion, I strongly believe that [restate opinion]. This is because [summary1] and [summary2]."
    },
    fullParagraphs: {
      introduction: "It is argued that Animals should have the same rights as humans.. I believe this statement holds true to a significant extent for several reasons.",
      body1: "One of the main reasons supporting this view is that 动物权利 has become increasingly prevalent in modern society. For example, recent studies have shown that many people now rely heavily on technology for communication, which has fundamentally changed how we interact with one another. This demonstrates that the impact of 动物权利 is undeniable and far-reaching.",
      body2: "Another reason is that the consequences of 动物权利 are becoming more apparent. Research indicates that excessive use of certain technologies can lead to social isolation and reduced face-to-face interaction. Therefore, it is clear that we need to consider the implications carefully before fully embracing these changes.",
      conclusion: "In conclusion, I strongly believe that animals should have the same rights as humans.. This is because the evidence clearly shows both the benefits and potential drawbacks, and we must approach this issue with caution and awareness."
    },
    vocabulary: [
      "compelling",
      "convincing",
      "persuasive",
      "undeniable",
      "significant",
      "considerable",
      "substantial"
    ]
  },
  {
    id: 6,
    title: "同意/不同意类 - 网络隐私",
    type: "agree/disagree",
    topic: "Individuals have no right to privacy in the digital age. To what extent do you agree or disagree?",
    structure: {
      introduction: "It is argued that [topic]. I agree/disagree with this statement to a large extent.",
      body1: "One of the main reasons why I hold this view is [reason1]. For example, [example1]. This demonstrates that [conclusion1].",
      body2: "Another reason is [reason2]. Research shows that [evidence]. Therefore, [result].",
      conclusion: "In conclusion, I strongly believe that [restate opinion]. This is because [summary1] and [summary2]."
    },
    fullParagraphs: {
      introduction: "It is argued that Individuals have no right to privacy in the digital age.. I believe this statement holds true to a significant extent for several reasons.",
      body1: "One of the main reasons supporting this view is that 网络隐私 has become increasingly prevalent in modern society. For example, recent studies have shown that many people now rely heavily on technology for communication, which has fundamentally changed how we interact with one another. This demonstrates that the impact of 网络隐私 is undeniable and far-reaching.",
      body2: "Another reason is that the consequences of 网络隐私 are becoming more apparent. Research indicates that excessive use of certain technologies can lead to social isolation and reduced face-to-face interaction. Therefore, it is clear that we need to consider the implications carefully before fully embracing these changes.",
      conclusion: "In conclusion, I strongly believe that individuals have no right to privacy in the digital age.. This is because the evidence clearly shows both the benefits and potential drawbacks, and we must approach this issue with caution and awareness."
    },
    vocabulary: [
      "compelling",
      "convincing",
      "persuasive",
      "undeniable",
      "significant",
      "considerable",
      "substantial"
    ]
  },
  {
    id: 7,
    title: "同意/不同意类 - 家庭教育",
    type: "agree/disagree",
    topic: "Parents should be held responsible for their children's behavior. To what extent do you agree or disagree?",
    structure: {
      introduction: "It is argued that [topic]. I agree/disagree with this statement to a large extent.",
      body1: "One of the main reasons why I hold this view is [reason1]. For example, [example1]. This demonstrates that [conclusion1].",
      body2: "Another reason is [reason2]. Research shows that [evidence]. Therefore, [result].",
      conclusion: "In conclusion, I strongly believe that [restate opinion]. This is because [summary1] and [summary2]."
    },
    fullParagraphs: {
      introduction: "It is argued that Parents should be held responsible for their children's behavior.. I believe this statement holds true to a significant extent for several reasons.",
      body1: "One of the main reasons supporting this view is that 家庭教育 has become increasingly prevalent in modern society. For example, recent studies have shown that many people now rely heavily on technology for communication, which has fundamentally changed how we interact with one another. This demonstrates that the impact of 家庭教育 is undeniable and far-reaching.",
      body2: "Another reason is that the consequences of 家庭教育 are becoming more apparent. Research indicates that excessive use of certain technologies can lead to social isolation and reduced face-to-face interaction. Therefore, it is clear that we need to consider the implications carefully before fully embracing these changes.",
      conclusion: "In conclusion, I strongly believe that parents should be held responsible for their children's behavior.. This is because the evidence clearly shows both the benefits and potential drawbacks, and we must approach this issue with caution and awareness."
    },
    vocabulary: [
      "compelling",
      "convincing",
      "persuasive",
      "undeniable",
      "significant",
      "considerable",
      "substantial"
    ]
  },
  {
    id: 8,
    title: "同意/不同意类 - 艺术价值",
    type: "agree/disagree",
    topic: "Art is not essential in modern society. To what extent do you agree or disagree?",
    structure: {
      introduction: "It is argued that [topic]. I agree/disagree with this statement to a large extent.",
      body1: "One of the main reasons why I hold this view is [reason1]. For example, [example1]. This demonstrates that [conclusion1].",
      body2: "Another reason is [reason2]. Research shows that [evidence]. Therefore, [result].",
      conclusion: "In conclusion, I strongly believe that [restate opinion]. This is because [summary1] and [summary2]."
    },
    fullParagraphs: {
      introduction: "It is argued that Art is not essential in modern society.. I believe this statement holds true to a significant extent for several reasons.",
      body1: "One of the main reasons supporting this view is that 艺术价值 has become increasingly prevalent in modern society. For example, recent studies have shown that many people now rely heavily on technology for communication, which has fundamentally changed how we interact with one another. This demonstrates that the impact of 艺术价值 is undeniable and far-reaching.",
      body2: "Another reason is that the consequences of 艺术价值 are becoming more apparent. Research indicates that excessive use of certain technologies can lead to social isolation and reduced face-to-face interaction. Therefore, it is clear that we need to consider the implications carefully before fully embracing these changes.",
      conclusion: "In conclusion, I strongly believe that art is not essential in modern society.. This is because the evidence clearly shows both the benefits and potential drawbacks, and we must approach this issue with caution and awareness."
    },
    vocabulary: [
      "compelling",
      "convincing",
      "persuasive",
      "undeniable",
      "significant",
      "considerable",
      "substantial"
    ]
  },
  {
    id: 9,
    title: "同意/不同意类 - 纸质书籍",
    type: "agree/disagree",
    topic: "Printed books will soon be replaced by e-books. To what extent do you agree or disagree?",
    structure: {
      introduction: "It is argued that [topic]. I agree/disagree with this statement to a large extent.",
      body1: "One of the main reasons why I hold this view is [reason1]. For example, [example1]. This demonstrates that [conclusion1].",
      body2: "Another reason is [reason2]. Research shows that [evidence]. Therefore, [result].",
      conclusion: "In conclusion, I strongly believe that [restate opinion]. This is because [summary1] and [summary2]."
    },
    fullParagraphs: {
      introduction: "It is argued that Printed books will soon be replaced by e-books.. I believe this statement holds true to a significant extent for several reasons.",
      body1: "One of the main reasons supporting this view is that 纸质书籍 has become increasingly prevalent in modern society. For example, recent studies have shown that many people now rely heavily on technology for communication, which has fundamentally changed how we interact with one another. This demonstrates that the impact of 纸质书籍 is undeniable and far-reaching.",
      body2: "Another reason is that the consequences of 纸质书籍 are becoming more apparent. Research indicates that excessive use of certain technologies can lead to social isolation and reduced face-to-face interaction. Therefore, it is clear that we need to consider the implications carefully before fully embracing these changes.",
      conclusion: "In conclusion, I strongly believe that printed books will soon be replaced by e-books.. This is because the evidence clearly shows both the benefits and potential drawbacks, and we must approach this issue with caution and awareness."
    },
    vocabulary: [
      "compelling",
      "convincing",
      "persuasive",
      "undeniable",
      "significant",
      "considerable",
      "substantial"
    ]
  },
  {
    id: 10,
    title: "同意/不同意类 - 传统节日",
    type: "agree/disagree",
    topic: "Traditional festivals are losing their significance. To what extent do you agree or disagree?",
    structure: {
      introduction: "It is argued that [topic]. I agree/disagree with this statement to a large extent.",
      body1: "One of the main reasons why I hold this view is [reason1]. For example, [example1]. This demonstrates that [conclusion1].",
      body2: "Another reason is [reason2]. Research shows that [evidence]. Therefore, [result].",
      conclusion: "In conclusion, I strongly believe that [restate opinion]. This is because [summary1] and [summary2]."
    },
    fullParagraphs: {
      introduction: "It is argued that Traditional festivals are losing their significance.. I believe this statement holds true to a significant extent for several reasons.",
      body1: "One of the main reasons supporting this view is that 传统节日 has become increasingly prevalent in modern society. For example, recent studies have shown that many people now rely heavily on technology for communication, which has fundamentally changed how we interact with one another. This demonstrates that the impact of 传统节日 is undeniable and far-reaching.",
      body2: "Another reason is that the consequences of 传统节日 are becoming more apparent. Research indicates that excessive use of certain technologies can lead to social isolation and reduced face-to-face interaction. Therefore, it is clear that we need to consider the implications carefully before fully embracing these changes.",
      conclusion: "In conclusion, I strongly believe that traditional festivals are losing their significance.. This is because the evidence clearly shows both the benefits and potential drawbacks, and we must approach this issue with caution and awareness."
    },
    vocabulary: [
      "compelling",
      "convincing",
      "persuasive",
      "undeniable",
      "significant",
      "considerable",
      "substantial"
    ]
  },
  {
    id: 11,
    title: "同意/不同意类 - 工作与生活平衡",
    type: "agree/disagree",
    topic: "It is impossible to achieve a good work-life balance in modern society. To what extent do you agree or disagree?",
    structure: {
      introduction: "It is argued that [topic]. I agree/disagree with this statement to a large extent.",
      body1: "One of the main reasons why I hold this view is [reason1]. For example, [example1]. This demonstrates that [conclusion1].",
      body2: "Another reason is [reason2]. Research shows that [evidence]. Therefore, [result].",
      conclusion: "In conclusion, I strongly believe that [restate opinion]. This is because [summary1] and [summary2]."
    },
    fullParagraphs: {
      introduction: "It is argued that It is impossible to achieve a good work-life balance in modern society.. I believe this statement holds true to a significant extent for several reasons.",
      body1: "One of the main reasons supporting this view is that 生活平衡 has become increasingly prevalent in modern society. For example, recent studies have shown that many people now rely heavily on technology for communication, which has fundamentally changed how we interact with one another. This demonstrates that the impact of 工作 is undeniable and far-reaching.",
      body2: "Another reason is that the consequences of 工作与生活平衡 are becoming more apparent. Research indicates that excessive use of certain technologies can lead to social isolation and reduced face-to-face interaction. Therefore, it is clear that we need to consider the implications carefully before fully embracing these changes.",
      conclusion: "In conclusion, I strongly believe that it is impossible to achieve a good work-life balance in modern society.. This is because the evidence clearly shows both the benefits and potential drawbacks, and we must approach this issue with caution and awareness."
    },
    vocabulary: [
      "compelling",
      "convincing",
      "persuasive",
      "undeniable",
      "significant",
      "considerable",
      "substantial"
    ]
  },
  {
    id: 12,
    title: "同意/不同意类 - 全球化文化",
    type: "agree/disagree",
    topic: "Globalization is destroying local cultures. To what extent do you agree or disagree?",
    structure: {
      introduction: "It is argued that [topic]. I agree/disagree with this statement to a large extent.",
      body1: "One of the main reasons why I hold this view is [reason1]. For example, [example1]. This demonstrates that [conclusion1].",
      body2: "Another reason is [reason2]. Research shows that [evidence]. Therefore, [result].",
      conclusion: "In conclusion, I strongly believe that [restate opinion]. This is because [summary1] and [summary2]."
    },
    fullParagraphs: {
      introduction: "It is argued that Globalization is destroying local cultures.. I believe this statement holds true to a significant extent for several reasons.",
      body1: "One of the main reasons supporting this view is that 全球化文化 has become increasingly prevalent in modern society. For example, recent studies have shown that many people now rely heavily on technology for communication, which has fundamentally changed how we interact with one another. This demonstrates that the impact of 全球化文化 is undeniable and far-reaching.",
      body2: "Another reason is that the consequences of 全球化文化 are becoming more apparent. Research indicates that excessive use of certain technologies can lead to social isolation and reduced face-to-face interaction. Therefore, it is clear that we need to consider the implications carefully before fully embracing these changes.",
      conclusion: "In conclusion, I strongly believe that globalization is destroying local cultures.. This is because the evidence clearly shows both the benefits and potential drawbacks, and we must approach this issue with caution and awareness."
    },
    vocabulary: [
      "compelling",
      "convincing",
      "persuasive",
      "undeniable",
      "significant",
      "considerable",
      "substantial"
    ]
  },
  {
    id: 13,
    title: "同意/不同意类 - 社交媒体与友谊",
    type: "agree/disagree",
    topic: "Social media has weakened real friendships. To what extent do you agree or disagree?",
    structure: {
      introduction: "It is argued that [topic]. I agree/disagree with this statement to a large extent.",
      body1: "One of the main reasons why I hold this view is [reason1]. For example, [example1]. This demonstrates that [conclusion1].",
      body2: "Another reason is [reason2]. Research shows that [evidence]. Therefore, [result].",
      conclusion: "In conclusion, I strongly believe that [restate opinion]. This is because [summary1] and [summary2]."
    },
    fullParagraphs: {
      introduction: "It is argued that Social media has weakened real friendships.. I believe this statement holds true to a significant extent for several reasons.",
      body1: "One of the main reasons supporting this view is that 友谊 has become increasingly prevalent in modern society. For example, recent studies have shown that many people now rely heavily on technology for communication, which has fundamentally changed how we interact with one another. This demonstrates that the impact of 社交媒体 is undeniable and far-reaching.",
      body2: "Another reason is that the consequences of 社交媒体与友谊 are becoming more apparent. Research indicates that excessive use of certain technologies can lead to social isolation and reduced face-to-face interaction. Therefore, it is clear that we need to consider the implications carefully before fully embracing these changes.",
      conclusion: "In conclusion, I strongly believe that social media has weakened real friendships.. This is because the evidence clearly shows both the benefits and potential drawbacks, and we must approach this issue with caution and awareness."
    },
    vocabulary: [
      "compelling",
      "convincing",
      "persuasive",
      "undeniable",
      "significant",
      "considerable",
      "substantial"
    ]
  },
  {
    id: 14,
    title: "同意/不同意类 - 金钱与幸福",
    type: "agree/disagree",
    topic: "Money is the most important factor for happiness. To what extent do you agree or disagree?",
    structure: {
      introduction: "It is argued that [topic]. I agree/disagree with this statement to a large extent.",
      body1: "One of the main reasons why I hold this view is [reason1]. For example, [example1]. This demonstrates that [conclusion1].",
      body2: "Another reason is [reason2]. Research shows that [evidence]. Therefore, [result].",
      conclusion: "In conclusion, I strongly believe that [restate opinion]. This is because [summary1] and [summary2]."
    },
    fullParagraphs: {
      introduction: "It is argued that Money is the most important factor for happiness.. I believe this statement holds true to a significant extent for several reasons.",
      body1: "One of the main reasons supporting this view is that 幸福 has become increasingly prevalent in modern society. For example, recent studies have shown that many people now rely heavily on technology for communication, which has fundamentally changed how we interact with one another. This demonstrates that the impact of 金钱 is undeniable and far-reaching.",
      body2: "Another reason is that the consequences of 金钱与幸福 are becoming more apparent. Research indicates that excessive use of certain technologies can lead to social isolation and reduced face-to-face interaction. Therefore, it is clear that we need to consider the implications carefully before fully embracing these changes.",
      conclusion: "In conclusion, I strongly believe that money is the most important factor for happiness.. This is because the evidence clearly shows both the benefits and potential drawbacks, and we must approach this issue with caution and awareness."
    },
    vocabulary: [
      "compelling",
      "convincing",
      "persuasive",
      "undeniable",
      "significant",
      "considerable",
      "substantial"
    ]
  },
  {
    id: 15,
    title: "同意/不同意类 - 标准化教育",
    type: "agree/disagree",
    topic: "Standardized testing is the best way to assess student ability. To what extent do you agree or disagree?",
    structure: {
      introduction: "It is argued that [topic]. I agree/disagree with this statement to a large extent.",
      body1: "One of the main reasons why I hold this view is [reason1]. For example, [example1]. This demonstrates that [conclusion1].",
      body2: "Another reason is [reason2]. Research shows that [evidence]. Therefore, [result].",
      conclusion: "In conclusion, I strongly believe that [restate opinion]. This is because [summary1] and [summary2]."
    },
    fullParagraphs: {
      introduction: "It is argued that Standardized testing is the best way to assess student ability.. I believe this statement holds true to a significant extent for several reasons.",
      body1: "One of the main reasons supporting this view is that 标准化教育 has become increasingly prevalent in modern society. For example, recent studies have shown that many people now rely heavily on technology for communication, which has fundamentally changed how we interact with one another. This demonstrates that the impact of 标准化教育 is undeniable and far-reaching.",
      body2: "Another reason is that the consequences of 标准化教育 are becoming more apparent. Research indicates that excessive use of certain technologies can lead to social isolation and reduced face-to-face interaction. Therefore, it is clear that we need to consider the implications carefully before fully embracing these changes.",
      conclusion: "In conclusion, I strongly believe that standardized testing is the best way to assess student ability.. This is because the evidence clearly shows both the benefits and potential drawbacks, and we must approach this issue with caution and awareness."
    },
    vocabulary: [
      "compelling",
      "convincing",
      "persuasive",
      "undeniable",
      "significant",
      "considerable",
      "substantial"
    ]
  },
  {
    id: 16,
    title: "同意/不同意类 - 移民影响",
    type: "agree/disagree",
    topic: "Immigration has a negative impact on the host country. To what extent do you agree or disagree?",
    structure: {
      introduction: "It is argued that [topic]. I agree/disagree with this statement to a large extent.",
      body1: "One of the main reasons why I hold this view is [reason1]. For example, [example1]. This demonstrates that [conclusion1].",
      body2: "Another reason is [reason2]. Research shows that [evidence]. Therefore, [result].",
      conclusion: "In conclusion, I strongly believe that [restate opinion]. This is because [summary1] and [summary2]."
    },
    fullParagraphs: {
      introduction: "It is argued that Immigration has a negative impact on the host country.. I believe this statement holds true to a significant extent for several reasons.",
      body1: "One of the main reasons supporting this view is that 移民影响 has become increasingly prevalent in modern society. For example, recent studies have shown that many people now rely heavily on technology for communication, which has fundamentally changed how we interact with one another. This demonstrates that the impact of 移民影响 is undeniable and far-reaching.",
      body2: "Another reason is that the consequences of 移民影响 are becoming more apparent. Research indicates that excessive use of certain technologies can lead to social isolation and reduced face-to-face interaction. Therefore, it is clear that we need to consider the implications carefully before fully embracing these changes.",
      conclusion: "In conclusion, I strongly believe that immigration has a negative impact on the host country.. This is because the evidence clearly shows both the benefits and potential drawbacks, and we must approach this issue with caution and awareness."
    },
    vocabulary: [
      "compelling",
      "convincing",
      "persuasive",
      "undeniable",
      "significant",
      "considerable",
      "substantial"
    ]
  },
  {
    id: 17,
    title: "同意/不同意类 - 科技依赖",
    type: "agree/disagree",
    topic: "Modern society is too dependent on technology. To what extent do you agree or disagree?",
    structure: {
      introduction: "It is argued that [topic]. I agree/disagree with this statement to a large extent.",
      body1: "One of the main reasons why I hold this view is [reason1]. For example, [example1]. This demonstrates that [conclusion1].",
      body2: "Another reason is [reason2]. Research shows that [evidence]. Therefore, [result].",
      conclusion: "In conclusion, I strongly believe that [restate opinion]. This is because [summary1] and [summary2]."
    },
    fullParagraphs: {
      introduction: "It is argued that Modern society is too dependent on technology.. I believe this statement holds true to a significant extent for several reasons.",
      body1: "One of the main reasons supporting this view is that 科技依赖 has become increasingly prevalent in modern society. For example, recent studies have shown that many people now rely heavily on technology for communication, which has fundamentally changed how we interact with one another. This demonstrates that the impact of 科技依赖 is undeniable and far-reaching.",
      body2: "Another reason is that the consequences of 科技依赖 are becoming more apparent. Research indicates that excessive use of certain technologies can lead to social isolation and reduced face-to-face interaction. Therefore, it is clear that we need to consider the implications carefully before fully embracing these changes.",
      conclusion: "In conclusion, I strongly believe that modern society is too dependent on technology.. This is because the evidence clearly shows both the benefits and potential drawbacks, and we must approach this issue with caution and awareness."
    },
    vocabulary: [
      "compelling",
      "convincing",
      "persuasive",
      "undeniable",
      "significant",
      "considerable",
      "substantial"
    ]
  },
  {
    id: 18,
    title: "同意/不同意类 - 快餐文化",
    type: "agree/disagree",
    topic: "Fast food should be banned in schools. To what extent do you agree or disagree?",
    structure: {
      introduction: "It is argued that [topic]. I agree/disagree with this statement to a large extent.",
      body1: "One of the main reasons why I hold this view is [reason1]. For example, [example1]. This demonstrates that [conclusion1].",
      body2: "Another reason is [reason2]. Research shows that [evidence]. Therefore, [result].",
      conclusion: "In conclusion, I strongly believe that [restate opinion]. This is because [summary1] and [summary2]."
    },
    fullParagraphs: {
      introduction: "It is argued that Fast food should be banned in schools.. I believe this statement holds true to a significant extent for several reasons.",
      body1: "One of the main reasons supporting this view is that 快餐文化 has become increasingly prevalent in modern society. For example, recent studies have shown that many people now rely heavily on technology for communication, which has fundamentally changed how we interact with one another. This demonstrates that the impact of 快餐文化 is undeniable and far-reaching.",
      body2: "Another reason is that the consequences of 快餐文化 are becoming more apparent. Research indicates that excessive use of certain technologies can lead to social isolation and reduced face-to-face interaction. Therefore, it is clear that we need to consider the implications carefully before fully embracing these changes.",
      conclusion: "In conclusion, I strongly believe that fast food should be banned in schools.. This is because the evidence clearly shows both the benefits and potential drawbacks, and we must approach this issue with caution and awareness."
    },
    vocabulary: [
      "compelling",
      "convincing",
      "persuasive",
      "undeniable",
      "significant",
      "considerable",
      "substantial"
    ]
  },
  {
    id: 19,
    title: "同意/不同意类 - 远程学习",
    type: "agree/disagree",
    topic: "Online learning is as effective as traditional classroom learning. To what extent do you agree or disagree?",
    structure: {
      introduction: "It is argued that [topic]. I agree/disagree with this statement to a large extent.",
      body1: "One of the main reasons why I hold this view is [reason1]. For example, [example1]. This demonstrates that [conclusion1].",
      body2: "Another reason is [reason2]. Research shows that [evidence]. Therefore, [result].",
      conclusion: "In conclusion, I strongly believe that [restate opinion]. This is because [summary1] and [summary2]."
    },
    fullParagraphs: {
      introduction: "It is argued that Online learning is as effective as traditional classroom learning.. I believe this statement holds true to a significant extent for several reasons.",
      body1: "One of the main reasons supporting this view is that 远程学习 has become increasingly prevalent in modern society. For example, recent studies have shown that many people now rely heavily on technology for communication, which has fundamentally changed how we interact with one another. This demonstrates that the impact of 远程学习 is undeniable and far-reaching.",
      body2: "Another reason is that the consequences of 远程学习 are becoming more apparent. Research indicates that excessive use of certain technologies can lead to social isolation and reduced face-to-face interaction. Therefore, it is clear that we need to consider the implications carefully before fully embracing these changes.",
      conclusion: "In conclusion, I strongly believe that online learning is as effective as traditional classroom learning.. This is because the evidence clearly shows both the benefits and potential drawbacks, and we must approach this issue with caution and awareness."
    },
    vocabulary: [
      "compelling",
      "convincing",
      "persuasive",
      "undeniable",
      "significant",
      "considerable",
      "substantial"
    ]
  },
  {
    id: 20,
    title: "同意/不同意类 - 汽车使用",
    type: "agree/disagree",
    topic: "Private cars should be banned in city centers. To what extent do you agree or disagree?",
    structure: {
      introduction: "It is argued that [topic]. I agree/disagree with this statement to a large extent.",
      body1: "One of the main reasons why I hold this view is [reason1]. For example, [example1]. This demonstrates that [conclusion1].",
      body2: "Another reason is [reason2]. Research shows that [evidence]. Therefore, [result].",
      conclusion: "In conclusion, I strongly believe that [restate opinion]. This is because [summary1] and [summary2]."
    },
    fullParagraphs: {
      introduction: "It is argued that Private cars should be banned in city centers.. I believe this statement holds true to a significant extent for several reasons.",
      body1: "One of the main reasons supporting this view is that 汽车使用 has become increasingly prevalent in modern society. For example, recent studies have shown that many people now rely heavily on technology for communication, which has fundamentally changed how we interact with one another. This demonstrates that the impact of 汽车使用 is undeniable and far-reaching.",
      body2: "Another reason is that the consequences of 汽车使用 are becoming more apparent. Research indicates that excessive use of certain technologies can lead to social isolation and reduced face-to-face interaction. Therefore, it is clear that we need to consider the implications carefully before fully embracing these changes.",
      conclusion: "In conclusion, I strongly believe that private cars should be banned in city centers.. This is because the evidence clearly shows both the benefits and potential drawbacks, and we must approach this issue with caution and awareness."
    },
    vocabulary: [
      "compelling",
      "convincing",
      "persuasive",
      "undeniable",
      "significant",
      "considerable",
      "substantial"
    ]
  },
  {
    id: 21,
    title: "同意/不同意类 - 人工智能威胁",
    type: "agree/disagree",
    topic: "Artificial intelligence will eventually replace human workers. To what extent do you agree or disagree?",
    structure: {
      introduction: "It is argued that [topic]. I agree/disagree with this statement to a large extent.",
      body1: "One of the main reasons why I hold this view is [reason1]. For example, [example1]. This demonstrates that [conclusion1].",
      body2: "Another reason is [reason2]. Research shows that [evidence]. Therefore, [result].",
      conclusion: "In conclusion, I strongly believe that [restate opinion]. This is because [summary1] and [summary2]."
    },
    fullParagraphs: {
      introduction: "It is argued that Artificial intelligence will eventually replace human workers.. I believe this statement holds true to a significant extent for several reasons.",
      body1: "One of the main reasons supporting this view is that 人工智能威胁 has become increasingly prevalent in modern society. For example, recent studies have shown that many people now rely heavily on technology for communication, which has fundamentally changed how we interact with one another. This demonstrates that the impact of 人工智能威胁 is undeniable and far-reaching.",
      body2: "Another reason is that the consequences of 人工智能威胁 are becoming more apparent. Research indicates that excessive use of certain technologies can lead to social isolation and reduced face-to-face interaction. Therefore, it is clear that we need to consider the implications carefully before fully embracing these changes.",
      conclusion: "In conclusion, I strongly believe that artificial intelligence will eventually replace human workers.. This is because the evidence clearly shows both the benefits and potential drawbacks, and we must approach this issue with caution and awareness."
    },
    vocabulary: [
      "compelling",
      "convincing",
      "persuasive",
      "undeniable",
      "significant",
      "considerable",
      "substantial"
    ]
  },
  {
    id: 22,
    title: "同意/不同意类 - 线上购物",
    type: "agree/disagree",
    topic: "Online shopping will completely replace traditional retail stores. To what extent do you agree or disagree?",
    structure: {
      introduction: "It is argued that [topic]. I agree/disagree with this statement to a large extent.",
      body1: "One of the main reasons why I hold this view is [reason1]. For example, [example1]. This demonstrates that [conclusion1].",
      body2: "Another reason is [reason2]. Research shows that [evidence]. Therefore, [result].",
      conclusion: "In conclusion, I strongly believe that [restate opinion]. This is because [summary1] and [summary2]."
    },
    fullParagraphs: {
      introduction: "It is argued that Online shopping will completely replace traditional retail stores.. I believe this statement holds true to a significant extent for several reasons.",
      body1: "One of the main reasons supporting this view is that 线上购物 has become increasingly prevalent in modern society. For example, recent studies have shown that many people now rely heavily on technology for communication, which has fundamentally changed how we interact with one another. This demonstrates that the impact of 线上购物 is undeniable and far-reaching.",
      body2: "Another reason is that the consequences of 线上购物 are becoming more apparent. Research indicates that excessive use of certain technologies can lead to social isolation and reduced face-to-face interaction. Therefore, it is clear that we need to consider the implications carefully before fully embracing these changes.",
      conclusion: "In conclusion, I strongly believe that online shopping will completely replace traditional retail stores.. This is because the evidence clearly shows both the benefits and potential drawbacks, and we must approach this issue with caution and awareness."
    },
    vocabulary: [
      "compelling",
      "convincing",
      "persuasive",
      "undeniable",
      "significant",
      "considerable",
      "substantial"
    ]
  },
  {
    id: 23,
    title: "同意/不同意类 - 气候变化",
    type: "agree/disagree",
    topic: "Individuals can do little to address climate change. To what extent do you agree or disagree?",
    structure: {
      introduction: "It is argued that [topic]. I agree/disagree with this statement to a large extent.",
      body1: "One of the main reasons why I hold this view is [reason1]. For example, [example1]. This demonstrates that [conclusion1].",
      body2: "Another reason is [reason2]. Research shows that [evidence]. Therefore, [result].",
      conclusion: "In conclusion, I strongly believe that [restate opinion]. This is because [summary1] and [summary2]."
    },
    fullParagraphs: {
      introduction: "It is argued that Individuals can do little to address climate change.. I believe this statement holds true to a significant extent for several reasons.",
      body1: "One of the main reasons supporting this view is that 气候变化 has become increasingly prevalent in modern society. For example, recent studies have shown that many people now rely heavily on technology for communication, which has fundamentally changed how we interact with one another. This demonstrates that the impact of 气候变化 is undeniable and far-reaching.",
      body2: "Another reason is that the consequences of 气候变化 are becoming more apparent. Research indicates that excessive use of certain technologies can lead to social isolation and reduced face-to-face interaction. Therefore, it is clear that we need to consider the implications carefully before fully embracing these changes.",
      conclusion: "In conclusion, I strongly believe that individuals can do little to address climate change.. This is because the evidence clearly shows both the benefits and potential drawbacks, and we must approach this issue with caution and awareness."
    },
    vocabulary: [
      "compelling",
      "convincing",
      "persuasive",
      "undeniable",
      "significant",
      "considerable",
      "substantial"
    ]
  },
  {
    id: 24,
    title: "同意/不同意类 - 外语学习",
    type: "agree/disagree",
    topic: "Learning a second language is essential in today's world. To what extent do you agree or disagree?",
    structure: {
      introduction: "It is argued that [topic]. I agree/disagree with this statement to a large extent.",
      body1: "One of the main reasons why I hold this view is [reason1]. For example, [example1]. This demonstrates that [conclusion1].",
      body2: "Another reason is [reason2]. Research shows that [evidence]. Therefore, [result].",
      conclusion: "In conclusion, I strongly believe that [restate opinion]. This is because [summary1] and [summary2]."
    },
    fullParagraphs: {
      introduction: "It is argued that Learning a second language is essential in today's world.. I believe this statement holds true to a significant extent for several reasons.",
      body1: "One of the main reasons supporting this view is that 外语学习 has become increasingly prevalent in modern society. For example, recent studies have shown that many people now rely heavily on technology for communication, which has fundamentally changed how we interact with one another. This demonstrates that the impact of 外语学习 is undeniable and far-reaching.",
      body2: "Another reason is that the consequences of 外语学习 are becoming more apparent. Research indicates that excessive use of certain technologies can lead to social isolation and reduced face-to-face interaction. Therefore, it is clear that we need to consider the implications carefully before fully embracing these changes.",
      conclusion: "In conclusion, I strongly believe that learning a second language is essential in today's world.. This is because the evidence clearly shows both the benefits and potential drawbacks, and we must approach this issue with caution and awareness."
    },
    vocabulary: [
      "compelling",
      "convincing",
      "persuasive",
      "undeniable",
      "significant",
      "considerable",
      "substantial"
    ]
  },
  {
    id: 25,
    title: "同意/不同意类 - 游戏影响",
    type: "agree/disagree",
    topic: "Video games have a negative impact on children's development. To what extent do you agree or disagree?",
    structure: {
      introduction: "It is argued that [topic]. I agree/disagree with this statement to a large extent.",
      body1: "One of the main reasons why I hold this view is [reason1]. For example, [example1]. This demonstrates that [conclusion1].",
      body2: "Another reason is [reason2]. Research shows that [evidence]. Therefore, [result].",
      conclusion: "In conclusion, I strongly believe that [restate opinion]. This is because [summary1] and [summary2]."
    },
    fullParagraphs: {
      introduction: "It is argued that Video games have a negative impact on children's development.. I believe this statement holds true to a significant extent for several reasons.",
      body1: "One of the main reasons supporting this view is that 游戏影响 has become increasingly prevalent in modern society. For example, recent studies have shown that many people now rely heavily on technology for communication, which has fundamentally changed how we interact with one another. This demonstrates that the impact of 游戏影响 is undeniable and far-reaching.",
      body2: "Another reason is that the consequences of 游戏影响 are becoming more apparent. Research indicates that excessive use of certain technologies can lead to social isolation and reduced face-to-face interaction. Therefore, it is clear that we need to consider the implications carefully before fully embracing these changes.",
      conclusion: "In conclusion, I strongly believe that video games have a negative impact on children's development.. This is because the evidence clearly shows both the benefits and potential drawbacks, and we must approach this issue with caution and awareness."
    },
    vocabulary: [
      "compelling",
      "convincing",
      "persuasive",
      "undeniable",
      "significant",
      "considerable",
      "substantial"
    ]
  },
  {
    id: 26,
    title: "双边讨论类 - 传统与现代教育",
    type: "discuss both views",
    topic: "Some people prefer traditional education, while others prefer modern methods such as online learning. Discuss both views and give your opinion.",
    structure: {
      introduction: "There is a debate about [topic]. Some people argue [view1], while others believe [view2]. This essay will discuss both perspectives before giving my opinion.",
      body1: "On the one hand, [view1] has some merit. Supporters argue that [reason1]. For instance, [example1]. This means that [benefit1].",
      body2: "On the other hand, [view2] also has valid points. Advocates point out that [reason2]. They argue that [evidence]. As a result, [benefit2].",
      conclusion: "In my opinion, [my opinion]. This is because [reason]. Overall, [summary]."
    },
    fullParagraphs: {
      introduction: "There is an ongoing debate about Some people prefer traditional education, while others prefer modern methods such as online learning.. Some people argue that one approach is superior, while others believe the alternative is better. This essay will explore both perspectives before presenting my own view.",
      body1: "On the one hand, those who support the first view argue that it offers significant benefits. For instance, traditional methods often provide a more stable and reliable foundation, which can be particularly important in certain contexts. This means that many people feel more comfortable with established approaches.",
      body2: "On the other hand, advocates of the alternative view point out that change brings new opportunities. They argue that embracing modern methods can lead to greater efficiency and innovation. As a result, many organizations are now adopting more contemporary approaches to stay competitive.",
      conclusion: "In my opinion, a balanced approach that combines the best elements of both perspectives is ideal. This is because no single approach is perfect, and by integrating different methods, we can achieve better outcomes. Overall, flexibility and open-mindedness are key to addressing this issue effectively."
    },
    vocabulary: [
      "perspective",
      "viewpoint",
      "argument",
      "counterargument",
      "valid",
      "merit",
      "compelling"
    ]
  },
  {
    id: 27,
    title: "双边讨论类 - 城市与乡村生活",
    type: "discuss both views",
    topic: "Some people prefer to live in cities, while others prefer rural areas. Discuss both views and give your opinion.",
    structure: {
      introduction: "There is a debate about [topic]. Some people argue [view1], while others believe [view2]. This essay will discuss both perspectives before giving my opinion.",
      body1: "On the one hand, [view1] has some merit. Supporters argue that [reason1]. For instance, [example1]. This means that [benefit1].",
      body2: "On the other hand, [view2] also has valid points. Advocates point out that [reason2]. They argue that [evidence]. As a result, [benefit2].",
      conclusion: "In my opinion, [my opinion]. This is because [reason]. Overall, [summary]."
    },
    fullParagraphs: {
      introduction: "There is an ongoing debate about Some people prefer to live in cities, while others prefer rural areas.. Some people argue that one approach is superior, while others believe the alternative is better. This essay will explore both perspectives before presenting my own view.",
      body1: "On the one hand, those who support the first view argue that it offers significant benefits. For instance, traditional methods often provide a more stable and reliable foundation, which can be particularly important in certain contexts. This means that many people feel more comfortable with established approaches.",
      body2: "On the other hand, advocates of the alternative view point out that change brings new opportunities. They argue that embracing modern methods can lead to greater efficiency and innovation. As a result, many organizations are now adopting more contemporary approaches to stay competitive.",
      conclusion: "In my opinion, a balanced approach that combines the best elements of both perspectives is ideal. This is because no single approach is perfect, and by integrating different methods, we can achieve better outcomes. Overall, flexibility and open-mindedness are key to addressing this issue effectively."
    },
    vocabulary: [
      "perspective",
      "viewpoint",
      "argument",
      "counterargument",
      "valid",
      "merit",
      "compelling"
    ]
  },
  {
    id: 28,
    title: "双边讨论类 - 面对面与线上沟通",
    type: "discuss both views",
    topic: "Some people think face-to-face communication is better than online communication, while others disagree. Discuss both views and give your opinion.",
    structure: {
      introduction: "There is a debate about [topic]. Some people argue [view1], while others believe [view2]. This essay will discuss both perspectives before giving my opinion.",
      body1: "On the one hand, [view1] has some merit. Supporters argue that [reason1]. For instance, [example1]. This means that [benefit1].",
      body2: "On the other hand, [view2] also has valid points. Advocates point out that [reason2]. They argue that [evidence]. As a result, [benefit2].",
      conclusion: "In my opinion, [my opinion]. This is because [reason]. Overall, [summary]."
    },
    fullParagraphs: {
      introduction: "There is an ongoing debate about Some people think face-to-face communication is better than online communication, while others disagree.. Some people argue that one approach is superior, while others believe the alternative is better. This essay will explore both perspectives before presenting my own view.",
      body1: "On the one hand, those who support the first view argue that it offers significant benefits. For instance, traditional methods often provide a more stable and reliable foundation, which can be particularly important in certain contexts. This means that many people feel more comfortable with established approaches.",
      body2: "On the other hand, advocates of the alternative view point out that change brings new opportunities. They argue that embracing modern methods can lead to greater efficiency and innovation. As a result, many organizations are now adopting more contemporary approaches to stay competitive.",
      conclusion: "In my opinion, a balanced approach that combines the best elements of both perspectives is ideal. This is because no single approach is perfect, and by integrating different methods, we can achieve better outcomes. Overall, flexibility and open-mindedness are key to addressing this issue effectively."
    },
    vocabulary: [
      "perspective",
      "viewpoint",
      "argument",
      "counterargument",
      "valid",
      "merit",
      "compelling"
    ]
  },
  {
    id: 29,
    title: "双边讨论类 - 自学与课堂学习",
    type: "discuss both views",
    topic: "Some people believe self-study is more effective, while others think classroom learning is better. Discuss both views and give your opinion.",
    structure: {
      introduction: "There is a debate about [topic]. Some people argue [view1], while others believe [view2]. This essay will discuss both perspectives before giving my opinion.",
      body1: "On the one hand, [view1] has some merit. Supporters argue that [reason1]. For instance, [example1]. This means that [benefit1].",
      body2: "On the other hand, [view2] also has valid points. Advocates point out that [reason2]. They argue that [evidence]. As a result, [benefit2].",
      conclusion: "In my opinion, [my opinion]. This is because [reason]. Overall, [summary]."
    },
    fullParagraphs: {
      introduction: "There is an ongoing debate about Some people believe self-study is more effective, while others think classroom learning is better.. Some people argue that one approach is superior, while others believe the alternative is better. This essay will explore both perspectives before presenting my own view.",
      body1: "On the one hand, those who support the first view argue that it offers significant benefits. For instance, traditional methods often provide a more stable and reliable foundation, which can be particularly important in certain contexts. This means that many people feel more comfortable with established approaches.",
      body2: "On the other hand, advocates of the alternative view point out that change brings new opportunities. They argue that embracing modern methods can lead to greater efficiency and innovation. As a result, many organizations are now adopting more contemporary approaches to stay competitive.",
      conclusion: "In my opinion, a balanced approach that combines the best elements of both perspectives is ideal. This is because no single approach is perfect, and by integrating different methods, we can achieve better outcomes. Overall, flexibility and open-mindedness are key to addressing this issue effectively."
    },
    vocabulary: [
      "perspective",
      "viewpoint",
      "argument",
      "counterargument",
      "valid",
      "merit",
      "compelling"
    ]
  },
  {
    id: 30,
    title: "双边讨论类 - 储蓄与消费",
    type: "discuss both views",
    topic: "Some people prefer to save money, while others enjoy spending it. Discuss both views and give your opinion.",
    structure: {
      introduction: "There is a debate about [topic]. Some people argue [view1], while others believe [view2]. This essay will discuss both perspectives before giving my opinion.",
      body1: "On the one hand, [view1] has some merit. Supporters argue that [reason1]. For instance, [example1]. This means that [benefit1].",
      body2: "On the other hand, [view2] also has valid points. Advocates point out that [reason2]. They argue that [evidence]. As a result, [benefit2].",
      conclusion: "In my opinion, [my opinion]. This is because [reason]. Overall, [summary]."
    },
    fullParagraphs: {
      introduction: "There is an ongoing debate about Some people prefer to save money, while others enjoy spending it.. Some people argue that one approach is superior, while others believe the alternative is better. This essay will explore both perspectives before presenting my own view.",
      body1: "On the one hand, those who support the first view argue that it offers significant benefits. For instance, traditional methods often provide a more stable and reliable foundation, which can be particularly important in certain contexts. This means that many people feel more comfortable with established approaches.",
      body2: "On the other hand, advocates of the alternative view point out that change brings new opportunities. They argue that embracing modern methods can lead to greater efficiency and innovation. As a result, many organizations are now adopting more contemporary approaches to stay competitive.",
      conclusion: "In my opinion, a balanced approach that combines the best elements of both perspectives is ideal. This is because no single approach is perfect, and by integrating different methods, we can achieve better outcomes. Overall, flexibility and open-mindedness are key to addressing this issue effectively."
    },
    vocabulary: [
      "perspective",
      "viewpoint",
      "argument",
      "counterargument",
      "valid",
      "merit",
      "compelling"
    ]
  },
  {
    id: 31,
    title: "双边讨论类 - 公共与私人医疗",
    type: "discuss both views",
    topic: "Some people prefer public healthcare, while others choose private healthcare. Discuss both views and give your opinion.",
    structure: {
      introduction: "There is a debate about [topic]. Some people argue [view1], while others believe [view2]. This essay will discuss both perspectives before giving my opinion.",
      body1: "On the one hand, [view1] has some merit. Supporters argue that [reason1]. For instance, [example1]. This means that [benefit1].",
      body2: "On the other hand, [view2] also has valid points. Advocates point out that [reason2]. They argue that [evidence]. As a result, [benefit2].",
      conclusion: "In my opinion, [my opinion]. This is because [reason]. Overall, [summary]."
    },
    fullParagraphs: {
      introduction: "There is an ongoing debate about Some people prefer public healthcare, while others choose private healthcare.. Some people argue that one approach is superior, while others believe the alternative is better. This essay will explore both perspectives before presenting my own view.",
      body1: "On the one hand, those who support the first view argue that it offers significant benefits. For instance, traditional methods often provide a more stable and reliable foundation, which can be particularly important in certain contexts. This means that many people feel more comfortable with established approaches.",
      body2: "On the other hand, advocates of the alternative view point out that change brings new opportunities. They argue that embracing modern methods can lead to greater efficiency and innovation. As a result, many organizations are now adopting more contemporary approaches to stay competitive.",
      conclusion: "In my opinion, a balanced approach that combines the best elements of both perspectives is ideal. This is because no single approach is perfect, and by integrating different methods, we can achieve better outcomes. Overall, flexibility and open-mindedness are key to addressing this issue effectively."
    },
    vocabulary: [
      "perspective",
      "viewpoint",
      "argument",
      "counterargument",
      "valid",
      "merit",
      "compelling"
    ]
  },
  {
    id: 32,
    title: "双边讨论类 - 团队与个人工作",
    type: "discuss both views",
    topic: "Some people prefer working in teams, while others prefer working alone. Discuss both views and give your opinion.",
    structure: {
      introduction: "There is a debate about [topic]. Some people argue [view1], while others believe [view2]. This essay will discuss both perspectives before giving my opinion.",
      body1: "On the one hand, [view1] has some merit. Supporters argue that [reason1]. For instance, [example1]. This means that [benefit1].",
      body2: "On the other hand, [view2] also has valid points. Advocates point out that [reason2]. They argue that [evidence]. As a result, [benefit2].",
      conclusion: "In my opinion, [my opinion]. This is because [reason]. Overall, [summary]."
    },
    fullParagraphs: {
      introduction: "There is an ongoing debate about Some people prefer working in teams, while others prefer working alone.. Some people argue that one approach is superior, while others believe the alternative is better. This essay will explore both perspectives before presenting my own view.",
      body1: "On the one hand, those who support the first view argue that it offers significant benefits. For instance, traditional methods often provide a more stable and reliable foundation, which can be particularly important in certain contexts. This means that many people feel more comfortable with established approaches.",
      body2: "On the other hand, advocates of the alternative view point out that change brings new opportunities. They argue that embracing modern methods can lead to greater efficiency and innovation. As a result, many organizations are now adopting more contemporary approaches to stay competitive.",
      conclusion: "In my opinion, a balanced approach that combines the best elements of both perspectives is ideal. This is because no single approach is perfect, and by integrating different methods, we can achieve better outcomes. Overall, flexibility and open-mindedness are key to addressing this issue effectively."
    },
    vocabulary: [
      "perspective",
      "viewpoint",
      "argument",
      "counterargument",
      "valid",
      "merit",
      "compelling"
    ]
  },
  {
    id: 33,
    title: "双边讨论类 - 阅读与看电视",
    type: "discuss both views",
    topic: "Some people think reading is more beneficial than watching television, while others disagree. Discuss both views and give your opinion.",
    structure: {
      introduction: "There is a debate about [topic]. Some people argue [view1], while others believe [view2]. This essay will discuss both perspectives before giving my opinion.",
      body1: "On the one hand, [view1] has some merit. Supporters argue that [reason1]. For instance, [example1]. This means that [benefit1].",
      body2: "On the other hand, [view2] also has valid points. Advocates point out that [reason2]. They argue that [evidence]. As a result, [benefit2].",
      conclusion: "In my opinion, [my opinion]. This is because [reason]. Overall, [summary]."
    },
    fullParagraphs: {
      introduction: "There is an ongoing debate about Some people think reading is more beneficial than watching television, while others disagree.. Some people argue that one approach is superior, while others believe the alternative is better. This essay will explore both perspectives before presenting my own view.",
      body1: "On the one hand, those who support the first view argue that it offers significant benefits. For instance, traditional methods often provide a more stable and reliable foundation, which can be particularly important in certain contexts. This means that many people feel more comfortable with established approaches.",
      body2: "On the other hand, advocates of the alternative view point out that change brings new opportunities. They argue that embracing modern methods can lead to greater efficiency and innovation. As a result, many organizations are now adopting more contemporary approaches to stay competitive.",
      conclusion: "In my opinion, a balanced approach that combines the best elements of both perspectives is ideal. This is because no single approach is perfect, and by integrating different methods, we can achieve better outcomes. Overall, flexibility and open-mindedness are key to addressing this issue effectively."
    },
    vocabulary: [
      "perspective",
      "viewpoint",
      "argument",
      "counterargument",
      "valid",
      "merit",
      "compelling"
    ]
  },
  {
    id: 34,
    title: "双边讨论类 - 旅行方式",
    type: "discuss both views",
    topic: "Some people prefer package tours, while others prefer independent travel. Discuss both views and give your opinion.",
    structure: {
      introduction: "There is a debate about [topic]. Some people argue [view1], while others believe [view2]. This essay will discuss both perspectives before giving my opinion.",
      body1: "On the one hand, [view1] has some merit. Supporters argue that [reason1]. For instance, [example1]. This means that [benefit1].",
      body2: "On the other hand, [view2] also has valid points. Advocates point out that [reason2]. They argue that [evidence]. As a result, [benefit2].",
      conclusion: "In my opinion, [my opinion]. This is because [reason]. Overall, [summary]."
    },
    fullParagraphs: {
      introduction: "There is an ongoing debate about Some people prefer package tours, while others prefer independent travel.. Some people argue that one approach is superior, while others believe the alternative is better. This essay will explore both perspectives before presenting my own view.",
      body1: "On the one hand, those who support the first view argue that it offers significant benefits. For instance, traditional methods often provide a more stable and reliable foundation, which can be particularly important in certain contexts. This means that many people feel more comfortable with established approaches.",
      body2: "On the other hand, advocates of the alternative view point out that change brings new opportunities. They argue that embracing modern methods can lead to greater efficiency and innovation. As a result, many organizations are now adopting more contemporary approaches to stay competitive.",
      conclusion: "In my opinion, a balanced approach that combines the best elements of both perspectives is ideal. This is because no single approach is perfect, and by integrating different methods, we can achieve better outcomes. Overall, flexibility and open-mindedness are key to addressing this issue effectively."
    },
    vocabulary: [
      "perspective",
      "viewpoint",
      "argument",
      "counterargument",
      "valid",
      "merit",
      "compelling"
    ]
  },
  {
    id: 35,
    title: "双边讨论类 - 传统文化与现代文化",
    type: "discuss both views",
    topic: "Some people think we should preserve traditional culture, while others think we should embrace modern culture. Discuss both views and give your opinion.",
    structure: {
      introduction: "There is a debate about [topic]. Some people argue [view1], while others believe [view2]. This essay will discuss both perspectives before giving my opinion.",
      body1: "On the one hand, [view1] has some merit. Supporters argue that [reason1]. For instance, [example1]. This means that [benefit1].",
      body2: "On the other hand, [view2] also has valid points. Advocates point out that [reason2]. They argue that [evidence]. As a result, [benefit2].",
      conclusion: "In my opinion, [my opinion]. This is because [reason]. Overall, [summary]."
    },
    fullParagraphs: {
      introduction: "There is an ongoing debate about Some people think we should preserve traditional culture, while others think we should embrace modern culture.. Some people argue that one approach is superior, while others believe the alternative is better. This essay will explore both perspectives before presenting my own view.",
      body1: "On the one hand, those who support the first view argue that it offers significant benefits. For instance, traditional methods often provide a more stable and reliable foundation, which can be particularly important in certain contexts. This means that many people feel more comfortable with established approaches.",
      body2: "On the other hand, advocates of the alternative view point out that change brings new opportunities. They argue that embracing modern methods can lead to greater efficiency and innovation. As a result, many organizations are now adopting more contemporary approaches to stay competitive.",
      conclusion: "In my opinion, a balanced approach that combines the best elements of both perspectives is ideal. This is because no single approach is perfect, and by integrating different methods, we can achieve better outcomes. Overall, flexibility and open-mindedness are key to addressing this issue effectively."
    },
    vocabulary: [
      "perspective",
      "viewpoint",
      "argument",
      "counterargument",
      "valid",
      "merit",
      "compelling"
    ]
  },
  {
    id: 36,
    title: "双边讨论类 - 政府投资方向",
    type: "discuss both views",
    topic: "Some people think governments should invest in arts, while others think they should invest in infrastructure. Discuss both views and give your opinion.",
    structure: {
      introduction: "There is a debate about [topic]. Some people argue [view1], while others believe [view2]. This essay will discuss both perspectives before giving my opinion.",
      body1: "On the one hand, [view1] has some merit. Supporters argue that [reason1]. For instance, [example1]. This means that [benefit1].",
      body2: "On the other hand, [view2] also has valid points. Advocates point out that [reason2]. They argue that [evidence]. As a result, [benefit2].",
      conclusion: "In my opinion, [my opinion]. This is because [reason]. Overall, [summary]."
    },
    fullParagraphs: {
      introduction: "There is an ongoing debate about Some people think governments should invest in arts, while others think they should invest in infrastructure.. Some people argue that one approach is superior, while others believe the alternative is better. This essay will explore both perspectives before presenting my own view.",
      body1: "On the one hand, those who support the first view argue that it offers significant benefits. For instance, traditional methods often provide a more stable and reliable foundation, which can be particularly important in certain contexts. This means that many people feel more comfortable with established approaches.",
      body2: "On the other hand, advocates of the alternative view point out that change brings new opportunities. They argue that embracing modern methods can lead to greater efficiency and innovation. As a result, many organizations are now adopting more contemporary approaches to stay competitive.",
      conclusion: "In my opinion, a balanced approach that combines the best elements of both perspectives is ideal. This is because no single approach is perfect, and by integrating different methods, we can achieve better outcomes. Overall, flexibility and open-mindedness are key to addressing this issue effectively."
    },
    vocabulary: [
      "perspective",
      "viewpoint",
      "argument",
      "counterargument",
      "valid",
      "merit",
      "compelling"
    ]
  },
  {
    id: 37,
    title: "双边讨论类 - 家庭教育与学校教育",
    type: "discuss both views",
    topic: "Some people think family education is more important, while others think school education is more important. Discuss both views and give your opinion.",
    structure: {
      introduction: "There is a debate about [topic]. Some people argue [view1], while others believe [view2]. This essay will discuss both perspectives before giving my opinion.",
      body1: "On the one hand, [view1] has some merit. Supporters argue that [reason1]. For instance, [example1]. This means that [benefit1].",
      body2: "On the other hand, [view2] also has valid points. Advocates point out that [reason2]. They argue that [evidence]. As a result, [benefit2].",
      conclusion: "In my opinion, [my opinion]. This is because [reason]. Overall, [summary]."
    },
    fullParagraphs: {
      introduction: "There is an ongoing debate about Some people think family education is more important, while others think school education is more important.. Some people argue that one approach is superior, while others believe the alternative is better. This essay will explore both perspectives before presenting my own view.",
      body1: "On the one hand, those who support the first view argue that it offers significant benefits. For instance, traditional methods often provide a more stable and reliable foundation, which can be particularly important in certain contexts. This means that many people feel more comfortable with established approaches.",
      body2: "On the other hand, advocates of the alternative view point out that change brings new opportunities. They argue that embracing modern methods can lead to greater efficiency and innovation. As a result, many organizations are now adopting more contemporary approaches to stay competitive.",
      conclusion: "In my opinion, a balanced approach that combines the best elements of both perspectives is ideal. This is because no single approach is perfect, and by integrating different methods, we can achieve better outcomes. Overall, flexibility and open-mindedness are key to addressing this issue effectively."
    },
    vocabulary: [
      "perspective",
      "viewpoint",
      "argument",
      "counterargument",
      "valid",
      "merit",
      "compelling"
    ]
  },
  {
    id: 38,
    title: "双边讨论类 - 稳定工作与创业",
    type: "discuss both views",
    topic: "Some people prefer stable jobs, while others prefer starting their own business. Discuss both views and give your opinion.",
    structure: {
      introduction: "There is a debate about [topic]. Some people argue [view1], while others believe [view2]. This essay will discuss both perspectives before giving my opinion.",
      body1: "On the one hand, [view1] has some merit. Supporters argue that [reason1]. For instance, [example1]. This means that [benefit1].",
      body2: "On the other hand, [view2] also has valid points. Advocates point out that [reason2]. They argue that [evidence]. As a result, [benefit2].",
      conclusion: "In my opinion, [my opinion]. This is because [reason]. Overall, [summary]."
    },
    fullParagraphs: {
      introduction: "There is an ongoing debate about Some people prefer stable jobs, while others prefer starting their own business.. Some people argue that one approach is superior, while others believe the alternative is better. This essay will explore both perspectives before presenting my own view.",
      body1: "On the one hand, those who support the first view argue that it offers significant benefits. For instance, traditional methods often provide a more stable and reliable foundation, which can be particularly important in certain contexts. This means that many people feel more comfortable with established approaches.",
      body2: "On the other hand, advocates of the alternative view point out that change brings new opportunities. They argue that embracing modern methods can lead to greater efficiency and innovation. As a result, many organizations are now adopting more contemporary approaches to stay competitive.",
      conclusion: "In my opinion, a balanced approach that combines the best elements of both perspectives is ideal. This is because no single approach is perfect, and by integrating different methods, we can achieve better outcomes. Overall, flexibility and open-mindedness are key to addressing this issue effectively."
    },
    vocabulary: [
      "perspective",
      "viewpoint",
      "argument",
      "counterargument",
      "valid",
      "merit",
      "compelling"
    ]
  },
  {
    id: 39,
    title: "双边讨论类 - 传统购物与网购",
    type: "discuss both views",
    topic: "Some people prefer traditional shopping, while others prefer online shopping. Discuss both views and give your opinion.",
    structure: {
      introduction: "There is a debate about [topic]. Some people argue [view1], while others believe [view2]. This essay will discuss both perspectives before giving my opinion.",
      body1: "On the one hand, [view1] has some merit. Supporters argue that [reason1]. For instance, [example1]. This means that [benefit1].",
      body2: "On the other hand, [view2] also has valid points. Advocates point out that [reason2]. They argue that [evidence]. As a result, [benefit2].",
      conclusion: "In my opinion, [my opinion]. This is because [reason]. Overall, [summary]."
    },
    fullParagraphs: {
      introduction: "There is an ongoing debate about Some people prefer traditional shopping, while others prefer online shopping.. Some people argue that one approach is superior, while others believe the alternative is better. This essay will explore both perspectives before presenting my own view.",
      body1: "On the one hand, those who support the first view argue that it offers significant benefits. For instance, traditional methods often provide a more stable and reliable foundation, which can be particularly important in certain contexts. This means that many people feel more comfortable with established approaches.",
      body2: "On the other hand, advocates of the alternative view point out that change brings new opportunities. They argue that embracing modern methods can lead to greater efficiency and innovation. As a result, many organizations are now adopting more contemporary approaches to stay competitive.",
      conclusion: "In my opinion, a balanced approach that combines the best elements of both perspectives is ideal. This is because no single approach is perfect, and by integrating different methods, we can achieve better outcomes. Overall, flexibility and open-mindedness are key to addressing this issue effectively."
    },
    vocabulary: [
      "perspective",
      "viewpoint",
      "argument",
      "counterargument",
      "valid",
      "merit",
      "compelling"
    ]
  },
  {
    id: 40,
    title: "双边讨论类 - 保护动物与利用动物",
    type: "discuss both views",
    topic: "Some people think we should protect all animals, while others think we can use animals for human benefit. Discuss both views and give your opinion.",
    structure: {
      introduction: "There is a debate about [topic]. Some people argue [view1], while others believe [view2]. This essay will discuss both perspectives before giving my opinion.",
      body1: "On the one hand, [view1] has some merit. Supporters argue that [reason1]. For instance, [example1]. This means that [benefit1].",
      body2: "On the other hand, [view2] also has valid points. Advocates point out that [reason2]. They argue that [evidence]. As a result, [benefit2].",
      conclusion: "In my opinion, [my opinion]. This is because [reason]. Overall, [summary]."
    },
    fullParagraphs: {
      introduction: "There is an ongoing debate about Some people think we should protect all animals, while others think we can use animals for human benefit.. Some people argue that one approach is superior, while others believe the alternative is better. This essay will explore both perspectives before presenting my own view.",
      body1: "On the one hand, those who support the first view argue that it offers significant benefits. For instance, traditional methods often provide a more stable and reliable foundation, which can be particularly important in certain contexts. This means that many people feel more comfortable with established approaches.",
      body2: "On the other hand, advocates of the alternative view point out that change brings new opportunities. They argue that embracing modern methods can lead to greater efficiency and innovation. As a result, many organizations are now adopting more contemporary approaches to stay competitive.",
      conclusion: "In my opinion, a balanced approach that combines the best elements of both perspectives is ideal. This is because no single approach is perfect, and by integrating different methods, we can achieve better outcomes. Overall, flexibility and open-mindedness are key to addressing this issue effectively."
    },
    vocabulary: [
      "perspective",
      "viewpoint",
      "argument",
      "counterargument",
      "valid",
      "merit",
      "compelling"
    ]
  },
  {
    id: 41,
    title: "双边讨论类 - 公立与私立学校",
    type: "discuss both views",
    topic: "Some people think public schools are better, while others prefer private schools. Discuss both views and give your opinion.",
    structure: {
      introduction: "There is a debate about [topic]. Some people argue [view1], while others believe [view2]. This essay will discuss both perspectives before giving my opinion.",
      body1: "On the one hand, [view1] has some merit. Supporters argue that [reason1]. For instance, [example1]. This means that [benefit1].",
      body2: "On the other hand, [view2] also has valid points. Advocates point out that [reason2]. They argue that [evidence]. As a result, [benefit2].",
      conclusion: "In my opinion, [my opinion]. This is because [reason]. Overall, [summary]."
    },
    fullParagraphs: {
      introduction: "There is an ongoing debate about Some people think public schools are better, while others prefer private schools.. Some people argue that one approach is superior, while others believe the alternative is better. This essay will explore both perspectives before presenting my own view.",
      body1: "On the one hand, those who support the first view argue that it offers significant benefits. For instance, traditional methods often provide a more stable and reliable foundation, which can be particularly important in certain contexts. This means that many people feel more comfortable with established approaches.",
      body2: "On the other hand, advocates of the alternative view point out that change brings new opportunities. They argue that embracing modern methods can lead to greater efficiency and innovation. As a result, many organizations are now adopting more contemporary approaches to stay competitive.",
      conclusion: "In my opinion, a balanced approach that combines the best elements of both perspectives is ideal. This is because no single approach is perfect, and by integrating different methods, we can achieve better outcomes. Overall, flexibility and open-mindedness are key to addressing this issue effectively."
    },
    vocabulary: [
      "perspective",
      "viewpoint",
      "argument",
      "counterargument",
      "valid",
      "merit",
      "compelling"
    ]
  },
  {
    id: 42,
    title: "双边讨论类 - 短期与长期目标",
    type: "discuss both views",
    topic: "Some people focus on short-term goals, while others prioritize long-term goals. Discuss both views and give your opinion.",
    structure: {
      introduction: "There is a debate about [topic]. Some people argue [view1], while others believe [view2]. This essay will discuss both perspectives before giving my opinion.",
      body1: "On the one hand, [view1] has some merit. Supporters argue that [reason1]. For instance, [example1]. This means that [benefit1].",
      body2: "On the other hand, [view2] also has valid points. Advocates point out that [reason2]. They argue that [evidence]. As a result, [benefit2].",
      conclusion: "In my opinion, [my opinion]. This is because [reason]. Overall, [summary]."
    },
    fullParagraphs: {
      introduction: "There is an ongoing debate about Some people focus on short-term goals, while others prioritize long-term goals.. Some people argue that one approach is superior, while others believe the alternative is better. This essay will explore both perspectives before presenting my own view.",
      body1: "On the one hand, those who support the first view argue that it offers significant benefits. For instance, traditional methods often provide a more stable and reliable foundation, which can be particularly important in certain contexts. This means that many people feel more comfortable with established approaches.",
      body2: "On the other hand, advocates of the alternative view point out that change brings new opportunities. They argue that embracing modern methods can lead to greater efficiency and innovation. As a result, many organizations are now adopting more contemporary approaches to stay competitive.",
      conclusion: "In my opinion, a balanced approach that combines the best elements of both perspectives is ideal. This is because no single approach is perfect, and by integrating different methods, we can achieve better outcomes. Overall, flexibility and open-mindedness are key to addressing this issue effectively."
    },
    vocabulary: [
      "perspective",
      "viewpoint",
      "argument",
      "counterargument",
      "valid",
      "merit",
      "compelling"
    ]
  },
  {
    id: 43,
    title: "双边讨论类 - 经验与学历",
    type: "discuss both views",
    topic: "Some people think work experience is more important, while others believe academic qualifications matter more. Discuss both views and give your opinion.",
    structure: {
      introduction: "There is a debate about [topic]. Some people argue [view1], while others believe [view2]. This essay will discuss both perspectives before giving my opinion.",
      body1: "On the one hand, [view1] has some merit. Supporters argue that [reason1]. For instance, [example1]. This means that [benefit1].",
      body2: "On the other hand, [view2] also has valid points. Advocates point out that [reason2]. They argue that [evidence]. As a result, [benefit2].",
      conclusion: "In my opinion, [my opinion]. This is because [reason]. Overall, [summary]."
    },
    fullParagraphs: {
      introduction: "There is an ongoing debate about Some people think work experience is more important, while others believe academic qualifications matter more.. Some people argue that one approach is superior, while others believe the alternative is better. This essay will explore both perspectives before presenting my own view.",
      body1: "On the one hand, those who support the first view argue that it offers significant benefits. For instance, traditional methods often provide a more stable and reliable foundation, which can be particularly important in certain contexts. This means that many people feel more comfortable with established approaches.",
      body2: "On the other hand, advocates of the alternative view point out that change brings new opportunities. They argue that embracing modern methods can lead to greater efficiency and innovation. As a result, many organizations are now adopting more contemporary approaches to stay competitive.",
      conclusion: "In my opinion, a balanced approach that combines the best elements of both perspectives is ideal. This is because no single approach is perfect, and by integrating different methods, we can achieve better outcomes. Overall, flexibility and open-mindedness are key to addressing this issue effectively."
    },
    vocabulary: [
      "perspective",
      "viewpoint",
      "argument",
      "counterargument",
      "valid",
      "merit",
      "compelling"
    ]
  },
  {
    id: 44,
    title: "双边讨论类 - 个人与集体",
    type: "discuss both views",
    topic: "Some people value individualism, while others emphasize collectivism. Discuss both views and give your opinion.",
    structure: {
      introduction: "There is a debate about [topic]. Some people argue [view1], while others believe [view2]. This essay will discuss both perspectives before giving my opinion.",
      body1: "On the one hand, [view1] has some merit. Supporters argue that [reason1]. For instance, [example1]. This means that [benefit1].",
      body2: "On the other hand, [view2] also has valid points. Advocates point out that [reason2]. They argue that [evidence]. As a result, [benefit2].",
      conclusion: "In my opinion, [my opinion]. This is because [reason]. Overall, [summary]."
    },
    fullParagraphs: {
      introduction: "There is an ongoing debate about Some people value individualism, while others emphasize collectivism.. Some people argue that one approach is superior, while others believe the alternative is better. This essay will explore both perspectives before presenting my own view.",
      body1: "On the one hand, those who support the first view argue that it offers significant benefits. For instance, traditional methods often provide a more stable and reliable foundation, which can be particularly important in certain contexts. This means that many people feel more comfortable with established approaches.",
      body2: "On the other hand, advocates of the alternative view point out that change brings new opportunities. They argue that embracing modern methods can lead to greater efficiency and innovation. As a result, many organizations are now adopting more contemporary approaches to stay competitive.",
      conclusion: "In my opinion, a balanced approach that combines the best elements of both perspectives is ideal. This is because no single approach is perfect, and by integrating different methods, we can achieve better outcomes. Overall, flexibility and open-mindedness are key to addressing this issue effectively."
    },
    vocabulary: [
      "perspective",
      "viewpoint",
      "argument",
      "counterargument",
      "valid",
      "merit",
      "compelling"
    ]
  },
  {
    id: 45,
    title: "双边讨论类 - 竞争与合作",
    type: "discuss both views",
    topic: "Some people think competition is essential, while others believe cooperation is more important. Discuss both views and give your opinion.",
    structure: {
      introduction: "There is a debate about [topic]. Some people argue [view1], while others believe [view2]. This essay will discuss both perspectives before giving my opinion.",
      body1: "On the one hand, [view1] has some merit. Supporters argue that [reason1]. For instance, [example1]. This means that [benefit1].",
      body2: "On the other hand, [view2] also has valid points. Advocates point out that [reason2]. They argue that [evidence]. As a result, [benefit2].",
      conclusion: "In my opinion, [my opinion]. This is because [reason]. Overall, [summary]."
    },
    fullParagraphs: {
      introduction: "There is an ongoing debate about Some people think competition is essential, while others believe cooperation is more important.. Some people argue that one approach is superior, while others believe the alternative is better. This essay will explore both perspectives before presenting my own view.",
      body1: "On the one hand, those who support the first view argue that it offers significant benefits. For instance, traditional methods often provide a more stable and reliable foundation, which can be particularly important in certain contexts. This means that many people feel more comfortable with established approaches.",
      body2: "On the other hand, advocates of the alternative view point out that change brings new opportunities. They argue that embracing modern methods can lead to greater efficiency and innovation. As a result, many organizations are now adopting more contemporary approaches to stay competitive.",
      conclusion: "In my opinion, a balanced approach that combines the best elements of both perspectives is ideal. This is because no single approach is perfect, and by integrating different methods, we can achieve better outcomes. Overall, flexibility and open-mindedness are key to addressing this issue effectively."
    },
    vocabulary: [
      "perspective",
      "viewpoint",
      "argument",
      "counterargument",
      "valid",
      "merit",
      "compelling"
    ]
  },
  {
    id: 46,
    title: "优缺点类 - 远程办公",
    type: "advantages/disadvantages",
    topic: "Discuss the advantages and disadvantages of working from home.",
    structure: {
      introduction: "[Topic] has become increasingly popular in recent years. This essay will examine the advantages and disadvantages of this trend.",
      body1: "One of the main advantages of [topic] is [advantage1]. For example, [example1]. This contributes to [benefit1].",
      body2: "However, there are also some disadvantages. One major drawback is [disadvantage1]. Additionally, [disadvantage2]. These issues can lead to [negative effect].",
      conclusion: "Overall, while [topic] has clear benefits such as [advantage], it also has drawbacks like [disadvantage]. Proper management is essential to maximize the benefits."
    },
    fullParagraphs: {
      introduction: " has become a significant trend in recent years, with both positive and negative implications. This essay will examine the advantages and disadvantages of this development.",
      body1: "One of the main advantages is the convenience it offers. For example, many people now enjoy greater flexibility in their daily lives, which has improved work-life balance for countless individuals. This contributes to higher levels of satisfaction and well-being.",
      body2: "However, there are also some notable disadvantages. One major concern is the potential for increased dependency, which can reduce self-reliance and resilience. Additionally, there may be unintended consequences that are not immediately apparent. These issues require careful consideration and proactive management.",
      conclusion: "Overall, while  offers clear benefits such as convenience and efficiency, it also presents challenges like dependency and unforeseen consequences. Proper planning and mindful use are essential to maximize the advantages while minimizing the drawbacks."
    },
    vocabulary: [
      "beneficial",
      "detrimental",
      "significant",
      "substantial",
      "considerable",
      "potential",
      "major"
    ]
  },
  {
    id: 47,
    title: "优缺点类 - 出国留学",
    type: "advantages/disadvantages",
    topic: "Discuss the advantages and disadvantages of studying abroad.",
    structure: {
      introduction: "[Topic] has become increasingly popular in recent years. This essay will examine the advantages and disadvantages of this trend.",
      body1: "One of the main advantages of [topic] is [advantage1]. For example, [example1]. This contributes to [benefit1].",
      body2: "However, there are also some disadvantages. One major drawback is [disadvantage1]. Additionally, [disadvantage2]. These issues can lead to [negative effect].",
      conclusion: "Overall, while [topic] has clear benefits such as [advantage], it also has drawbacks like [disadvantage]. Proper management is essential to maximize the benefits."
    },
    fullParagraphs: {
      introduction: " has become a significant trend in recent years, with both positive and negative implications. This essay will examine the advantages and disadvantages of this development.",
      body1: "One of the main advantages is the convenience it offers. For example, many people now enjoy greater flexibility in their daily lives, which has improved work-life balance for countless individuals. This contributes to higher levels of satisfaction and well-being.",
      body2: "However, there are also some notable disadvantages. One major concern is the potential for increased dependency, which can reduce self-reliance and resilience. Additionally, there may be unintended consequences that are not immediately apparent. These issues require careful consideration and proactive management.",
      conclusion: "Overall, while  offers clear benefits such as convenience and efficiency, it also presents challenges like dependency and unforeseen consequences. Proper planning and mindful use are essential to maximize the advantages while minimizing the drawbacks."
    },
    vocabulary: [
      "beneficial",
      "detrimental",
      "significant",
      "substantial",
      "considerable",
      "potential",
      "major"
    ]
  },
  {
    id: 48,
    title: "优缺点类 - 智能手机",
    type: "advantages/disadvantages",
    topic: "Discuss the advantages and disadvantages of smartphones.",
    structure: {
      introduction: "[Topic] has become increasingly popular in recent years. This essay will examine the advantages and disadvantages of this trend.",
      body1: "One of the main advantages of [topic] is [advantage1]. For example, [example1]. This contributes to [benefit1].",
      body2: "However, there are also some disadvantages. One major drawback is [disadvantage1]. Additionally, [disadvantage2]. These issues can lead to [negative effect].",
      conclusion: "Overall, while [topic] has clear benefits such as [advantage], it also has drawbacks like [disadvantage]. Proper management is essential to maximize the benefits."
    },
    fullParagraphs: {
      introduction: " has become a significant trend in recent years, with both positive and negative implications. This essay will examine the advantages and disadvantages of this development.",
      body1: "One of the main advantages is the convenience it offers. For example, many people now enjoy greater flexibility in their daily lives, which has improved work-life balance for countless individuals. This contributes to higher levels of satisfaction and well-being.",
      body2: "However, there are also some notable disadvantages. One major concern is the potential for increased dependency, which can reduce self-reliance and resilience. Additionally, there may be unintended consequences that are not immediately apparent. These issues require careful consideration and proactive management.",
      conclusion: "Overall, while  offers clear benefits such as convenience and efficiency, it also presents challenges like dependency and unforeseen consequences. Proper planning and mindful use are essential to maximize the advantages while minimizing the drawbacks."
    },
    vocabulary: [
      "beneficial",
      "detrimental",
      "significant",
      "substantial",
      "considerable",
      "potential",
      "major"
    ]
  },
  {
    id: 49,
    title: "优缺点类 - 公共交通",
    type: "advantages/disadvantages",
    topic: "Discuss the advantages and disadvantages of public transportation.",
    structure: {
      introduction: "[Topic] has become increasingly popular in recent years. This essay will examine the advantages and disadvantages of this trend.",
      body1: "One of the main advantages of [topic] is [advantage1]. For example, [example1]. This contributes to [benefit1].",
      body2: "However, there are also some disadvantages. One major drawback is [disadvantage1]. Additionally, [disadvantage2]. These issues can lead to [negative effect].",
      conclusion: "Overall, while [topic] has clear benefits such as [advantage], it also has drawbacks like [disadvantage]. Proper management is essential to maximize the benefits."
    },
    fullParagraphs: {
      introduction: " has become a significant trend in recent years, with both positive and negative implications. This essay will examine the advantages and disadvantages of this development.",
      body1: "One of the main advantages is the convenience it offers. For example, many people now enjoy greater flexibility in their daily lives, which has improved work-life balance for countless individuals. This contributes to higher levels of satisfaction and well-being.",
      body2: "However, there are also some notable disadvantages. One major concern is the potential for increased dependency, which can reduce self-reliance and resilience. Additionally, there may be unintended consequences that are not immediately apparent. These issues require careful consideration and proactive management.",
      conclusion: "Overall, while  offers clear benefits such as convenience and efficiency, it also presents challenges like dependency and unforeseen consequences. Proper planning and mindful use are essential to maximize the advantages while minimizing the drawbacks."
    },
    vocabulary: [
      "beneficial",
      "detrimental",
      "significant",
      "substantial",
      "considerable",
      "potential",
      "major"
    ]
  },
  {
    id: 50,
    title: "优缺点类 - 社交媒体",
    type: "advantages/disadvantages",
    topic: "Discuss the advantages and disadvantages of social media.",
    structure: {
      introduction: "[Topic] has become increasingly popular in recent years. This essay will examine the advantages and disadvantages of this trend.",
      body1: "One of the main advantages of [topic] is [advantage1]. For example, [example1]. This contributes to [benefit1].",
      body2: "However, there are also some disadvantages. One major drawback is [disadvantage1]. Additionally, [disadvantage2]. These issues can lead to [negative effect].",
      conclusion: "Overall, while [topic] has clear benefits such as [advantage], it also has drawbacks like [disadvantage]. Proper management is essential to maximize the benefits."
    },
    fullParagraphs: {
      introduction: " has become a significant trend in recent years, with both positive and negative implications. This essay will examine the advantages and disadvantages of this development.",
      body1: "One of the main advantages is the convenience it offers. For example, many people now enjoy greater flexibility in their daily lives, which has improved work-life balance for countless individuals. This contributes to higher levels of satisfaction and well-being.",
      body2: "However, there are also some notable disadvantages. One major concern is the potential for increased dependency, which can reduce self-reliance and resilience. Additionally, there may be unintended consequences that are not immediately apparent. These issues require careful consideration and proactive management.",
      conclusion: "Overall, while  offers clear benefits such as convenience and efficiency, it also presents challenges like dependency and unforeseen consequences. Proper planning and mindful use are essential to maximize the advantages while minimizing the drawbacks."
    },
    vocabulary: [
      "beneficial",
      "detrimental",
      "significant",
      "substantial",
      "considerable",
      "potential",
      "major"
    ]
  },
  {
    id: 51,
    title: "优缺点类 - 全球化",
    type: "advantages/disadvantages",
    topic: "Discuss the advantages and disadvantages of globalization.",
    structure: {
      introduction: "[Topic] has become increasingly popular in recent years. This essay will examine the advantages and disadvantages of this trend.",
      body1: "One of the main advantages of [topic] is [advantage1]. For example, [example1]. This contributes to [benefit1].",
      body2: "However, there are also some disadvantages. One major drawback is [disadvantage1]. Additionally, [disadvantage2]. These issues can lead to [negative effect].",
      conclusion: "Overall, while [topic] has clear benefits such as [advantage], it also has drawbacks like [disadvantage]. Proper management is essential to maximize the benefits."
    },
    fullParagraphs: {
      introduction: " has become a significant trend in recent years, with both positive and negative implications. This essay will examine the advantages and disadvantages of this development.",
      body1: "One of the main advantages is the convenience it offers. For example, many people now enjoy greater flexibility in their daily lives, which has improved work-life balance for countless individuals. This contributes to higher levels of satisfaction and well-being.",
      body2: "However, there are also some notable disadvantages. One major concern is the potential for increased dependency, which can reduce self-reliance and resilience. Additionally, there may be unintended consequences that are not immediately apparent. These issues require careful consideration and proactive management.",
      conclusion: "Overall, while  offers clear benefits such as convenience and efficiency, it also presents challenges like dependency and unforeseen consequences. Proper planning and mindful use are essential to maximize the advantages while minimizing the drawbacks."
    },
    vocabulary: [
      "beneficial",
      "detrimental",
      "significant",
      "substantial",
      "considerable",
      "potential",
      "major"
    ]
  },
  {
    id: 52,
    title: "优缺点类 - 城市化",
    type: "advantages/disadvantages",
    topic: "Discuss the advantages and disadvantages of urbanization.",
    structure: {
      introduction: "[Topic] has become increasingly popular in recent years. This essay will examine the advantages and disadvantages of this trend.",
      body1: "One of the main advantages of [topic] is [advantage1]. For example, [example1]. This contributes to [benefit1].",
      body2: "However, there are also some disadvantages. One major drawback is [disadvantage1]. Additionally, [disadvantage2]. These issues can lead to [negative effect].",
      conclusion: "Overall, while [topic] has clear benefits such as [advantage], it also has drawbacks like [disadvantage]. Proper management is essential to maximize the benefits."
    },
    fullParagraphs: {
      introduction: " has become a significant trend in recent years, with both positive and negative implications. This essay will examine the advantages and disadvantages of this development.",
      body1: "One of the main advantages is the convenience it offers. For example, many people now enjoy greater flexibility in their daily lives, which has improved work-life balance for countless individuals. This contributes to higher levels of satisfaction and well-being.",
      body2: "However, there are also some notable disadvantages. One major concern is the potential for increased dependency, which can reduce self-reliance and resilience. Additionally, there may be unintended consequences that are not immediately apparent. These issues require careful consideration and proactive management.",
      conclusion: "Overall, while  offers clear benefits such as convenience and efficiency, it also presents challenges like dependency and unforeseen consequences. Proper planning and mindful use are essential to maximize the advantages while minimizing the drawbacks."
    },
    vocabulary: [
      "beneficial",
      "detrimental",
      "significant",
      "substantial",
      "considerable",
      "potential",
      "major"
    ]
  },
  {
    id: 53,
    title: "优缺点类 - 人工智能",
    type: "advantages/disadvantages",
    topic: "Discuss the advantages and disadvantages of artificial intelligence.",
    structure: {
      introduction: "[Topic] has become increasingly popular in recent years. This essay will examine the advantages and disadvantages of this trend.",
      body1: "One of the main advantages of [topic] is [advantage1]. For example, [example1]. This contributes to [benefit1].",
      body2: "However, there are also some disadvantages. One major drawback is [disadvantage1]. Additionally, [disadvantage2]. These issues can lead to [negative effect].",
      conclusion: "Overall, while [topic] has clear benefits such as [advantage], it also has drawbacks like [disadvantage]. Proper management is essential to maximize the benefits."
    },
    fullParagraphs: {
      introduction: " has become a significant trend in recent years, with both positive and negative implications. This essay will examine the advantages and disadvantages of this development.",
      body1: "One of the main advantages is the convenience it offers. For example, many people now enjoy greater flexibility in their daily lives, which has improved work-life balance for countless individuals. This contributes to higher levels of satisfaction and well-being.",
      body2: "However, there are also some notable disadvantages. One major concern is the potential for increased dependency, which can reduce self-reliance and resilience. Additionally, there may be unintended consequences that are not immediately apparent. These issues require careful consideration and proactive management.",
      conclusion: "Overall, while  offers clear benefits such as convenience and efficiency, it also presents challenges like dependency and unforeseen consequences. Proper planning and mindful use are essential to maximize the advantages while minimizing the drawbacks."
    },
    vocabulary: [
      "beneficial",
      "detrimental",
      "significant",
      "substantial",
      "considerable",
      "potential",
      "major"
    ]
  },
  {
    id: 54,
    title: "优缺点类 - 旅游业",
    type: "advantages/disadvantages",
    topic: "Discuss the advantages and disadvantages of tourism.",
    structure: {
      introduction: "[Topic] has become increasingly popular in recent years. This essay will examine the advantages and disadvantages of this trend.",
      body1: "One of the main advantages of [topic] is [advantage1]. For example, [example1]. This contributes to [benefit1].",
      body2: "However, there are also some disadvantages. One major drawback is [disadvantage1]. Additionally, [disadvantage2]. These issues can lead to [negative effect].",
      conclusion: "Overall, while [topic] has clear benefits such as [advantage], it also has drawbacks like [disadvantage]. Proper management is essential to maximize the benefits."
    },
    fullParagraphs: {
      introduction: " has become a significant trend in recent years, with both positive and negative implications. This essay will examine the advantages and disadvantages of this development.",
      body1: "One of the main advantages is the convenience it offers. For example, many people now enjoy greater flexibility in their daily lives, which has improved work-life balance for countless individuals. This contributes to higher levels of satisfaction and well-being.",
      body2: "However, there are also some notable disadvantages. One major concern is the potential for increased dependency, which can reduce self-reliance and resilience. Additionally, there may be unintended consequences that are not immediately apparent. These issues require careful consideration and proactive management.",
      conclusion: "Overall, while  offers clear benefits such as convenience and efficiency, it also presents challenges like dependency and unforeseen consequences. Proper planning and mindful use are essential to maximize the advantages while minimizing the drawbacks."
    },
    vocabulary: [
      "beneficial",
      "detrimental",
      "significant",
      "substantial",
      "considerable",
      "potential",
      "major"
    ]
  },
  {
    id: 55,
    title: "优缺点类 - 汽车",
    type: "advantages/disadvantages",
    topic: "Discuss the advantages and disadvantages of owning a car.",
    structure: {
      introduction: "[Topic] has become increasingly popular in recent years. This essay will examine the advantages and disadvantages of this trend.",
      body1: "One of the main advantages of [topic] is [advantage1]. For example, [example1]. This contributes to [benefit1].",
      body2: "However, there are also some disadvantages. One major drawback is [disadvantage1]. Additionally, [disadvantage2]. These issues can lead to [negative effect].",
      conclusion: "Overall, while [topic] has clear benefits such as [advantage], it also has drawbacks like [disadvantage]. Proper management is essential to maximize the benefits."
    },
    fullParagraphs: {
      introduction: " has become a significant trend in recent years, with both positive and negative implications. This essay will examine the advantages and disadvantages of this development.",
      body1: "One of the main advantages is the convenience it offers. For example, many people now enjoy greater flexibility in their daily lives, which has improved work-life balance for countless individuals. This contributes to higher levels of satisfaction and well-being.",
      body2: "However, there are also some notable disadvantages. One major concern is the potential for increased dependency, which can reduce self-reliance and resilience. Additionally, there may be unintended consequences that are not immediately apparent. These issues require careful consideration and proactive management.",
      conclusion: "Overall, while  offers clear benefits such as convenience and efficiency, it also presents challenges like dependency and unforeseen consequences. Proper planning and mindful use are essential to maximize the advantages while minimizing the drawbacks."
    },
    vocabulary: [
      "beneficial",
      "detrimental",
      "significant",
      "substantial",
      "considerable",
      "potential",
      "major"
    ]
  },
  {
    id: 56,
    title: "优缺点类 - 互联网",
    type: "advantages/disadvantages",
    topic: "Discuss the advantages and disadvantages of the Internet.",
    structure: {
      introduction: "[Topic] has become increasingly popular in recent years. This essay will examine the advantages and disadvantages of this trend.",
      body1: "One of the main advantages of [topic] is [advantage1]. For example, [example1]. This contributes to [benefit1].",
      body2: "However, there are also some disadvantages. One major drawback is [disadvantage1]. Additionally, [disadvantage2]. These issues can lead to [negative effect].",
      conclusion: "Overall, while [topic] has clear benefits such as [advantage], it also has drawbacks like [disadvantage]. Proper management is essential to maximize the benefits."
    },
    fullParagraphs: {
      introduction: " has become a significant trend in recent years, with both positive and negative implications. This essay will examine the advantages and disadvantages of this development.",
      body1: "One of the main advantages is the convenience it offers. For example, many people now enjoy greater flexibility in their daily lives, which has improved work-life balance for countless individuals. This contributes to higher levels of satisfaction and well-being.",
      body2: "However, there are also some notable disadvantages. One major concern is the potential for increased dependency, which can reduce self-reliance and resilience. Additionally, there may be unintended consequences that are not immediately apparent. These issues require careful consideration and proactive management.",
      conclusion: "Overall, while  offers clear benefits such as convenience and efficiency, it also presents challenges like dependency and unforeseen consequences. Proper planning and mindful use are essential to maximize the advantages while minimizing the drawbacks."
    },
    vocabulary: [
      "beneficial",
      "detrimental",
      "significant",
      "substantial",
      "considerable",
      "potential",
      "major"
    ]
  },
  {
    id: 57,
    title: "优缺点类 - 电视",
    type: "advantages/disadvantages",
    topic: "Discuss the advantages and disadvantages of television.",
    structure: {
      introduction: "[Topic] has become increasingly popular in recent years. This essay will examine the advantages and disadvantages of this trend.",
      body1: "One of the main advantages of [topic] is [advantage1]. For example, [example1]. This contributes to [benefit1].",
      body2: "However, there are also some disadvantages. One major drawback is [disadvantage1]. Additionally, [disadvantage2]. These issues can lead to [negative effect].",
      conclusion: "Overall, while [topic] has clear benefits such as [advantage], it also has drawbacks like [disadvantage]. Proper management is essential to maximize the benefits."
    },
    fullParagraphs: {
      introduction: " has become a significant trend in recent years, with both positive and negative implications. This essay will examine the advantages and disadvantages of this development.",
      body1: "One of the main advantages is the convenience it offers. For example, many people now enjoy greater flexibility in their daily lives, which has improved work-life balance for countless individuals. This contributes to higher levels of satisfaction and well-being.",
      body2: "However, there are also some notable disadvantages. One major concern is the potential for increased dependency, which can reduce self-reliance and resilience. Additionally, there may be unintended consequences that are not immediately apparent. These issues require careful consideration and proactive management.",
      conclusion: "Overall, while  offers clear benefits such as convenience and efficiency, it also presents challenges like dependency and unforeseen consequences. Proper planning and mindful use are essential to maximize the advantages while minimizing the drawbacks."
    },
    vocabulary: [
      "beneficial",
      "detrimental",
      "significant",
      "substantial",
      "considerable",
      "potential",
      "major"
    ]
  },
  {
    id: 58,
    title: "优缺点类 - 快餐",
    type: "advantages/disadvantages",
    topic: "Discuss the advantages and disadvantages of fast food.",
    structure: {
      introduction: "[Topic] has become increasingly popular in recent years. This essay will examine the advantages and disadvantages of this trend.",
      body1: "One of the main advantages of [topic] is [advantage1]. For example, [example1]. This contributes to [benefit1].",
      body2: "However, there are also some disadvantages. One major drawback is [disadvantage1]. Additionally, [disadvantage2]. These issues can lead to [negative effect].",
      conclusion: "Overall, while [topic] has clear benefits such as [advantage], it also has drawbacks like [disadvantage]. Proper management is essential to maximize the benefits."
    },
    fullParagraphs: {
      introduction: " has become a significant trend in recent years, with both positive and negative implications. This essay will examine the advantages and disadvantages of this development.",
      body1: "One of the main advantages is the convenience it offers. For example, many people now enjoy greater flexibility in their daily lives, which has improved work-life balance for countless individuals. This contributes to higher levels of satisfaction and well-being.",
      body2: "However, there are also some notable disadvantages. One major concern is the potential for increased dependency, which can reduce self-reliance and resilience. Additionally, there may be unintended consequences that are not immediately apparent. These issues require careful consideration and proactive management.",
      conclusion: "Overall, while  offers clear benefits such as convenience and efficiency, it also presents challenges like dependency and unforeseen consequences. Proper planning and mindful use are essential to maximize the advantages while minimizing the drawbacks."
    },
    vocabulary: [
      "beneficial",
      "detrimental",
      "significant",
      "substantial",
      "considerable",
      "potential",
      "major"
    ]
  },
  {
    id: 59,
    title: "优缺点类 - 广告",
    type: "advantages/disadvantages",
    topic: "Discuss the advantages and disadvantages of advertising.",
    structure: {
      introduction: "[Topic] has become increasingly popular in recent years. This essay will examine the advantages and disadvantages of this trend.",
      body1: "One of the main advantages of [topic] is [advantage1]. For example, [example1]. This contributes to [benefit1].",
      body2: "However, there are also some disadvantages. One major drawback is [disadvantage1]. Additionally, [disadvantage2]. These issues can lead to [negative effect].",
      conclusion: "Overall, while [topic] has clear benefits such as [advantage], it also has drawbacks like [disadvantage]. Proper management is essential to maximize the benefits."
    },
    fullParagraphs: {
      introduction: " has become a significant trend in recent years, with both positive and negative implications. This essay will examine the advantages and disadvantages of this development.",
      body1: "One of the main advantages is the convenience it offers. For example, many people now enjoy greater flexibility in their daily lives, which has improved work-life balance for countless individuals. This contributes to higher levels of satisfaction and well-being.",
      body2: "However, there are also some notable disadvantages. One major concern is the potential for increased dependency, which can reduce self-reliance and resilience. Additionally, there may be unintended consequences that are not immediately apparent. These issues require careful consideration and proactive management.",
      conclusion: "Overall, while  offers clear benefits such as convenience and efficiency, it also presents challenges like dependency and unforeseen consequences. Proper planning and mindful use are essential to maximize the advantages while minimizing the drawbacks."
    },
    vocabulary: [
      "beneficial",
      "detrimental",
      "significant",
      "substantial",
      "considerable",
      "potential",
      "major"
    ]
  },
  {
    id: 60,
    title: "优缺点类 - 移民",
    type: "advantages/disadvantages",
    topic: "Discuss the advantages and disadvantages of immigration.",
    structure: {
      introduction: "[Topic] has become increasingly popular in recent years. This essay will examine the advantages and disadvantages of this trend.",
      body1: "One of the main advantages of [topic] is [advantage1]. For example, [example1]. This contributes to [benefit1].",
      body2: "However, there are also some disadvantages. One major drawback is [disadvantage1]. Additionally, [disadvantage2]. These issues can lead to [negative effect].",
      conclusion: "Overall, while [topic] has clear benefits such as [advantage], it also has drawbacks like [disadvantage]. Proper management is essential to maximize the benefits."
    },
    fullParagraphs: {
      introduction: " has become a significant trend in recent years, with both positive and negative implications. This essay will examine the advantages and disadvantages of this development.",
      body1: "One of the main advantages is the convenience it offers. For example, many people now enjoy greater flexibility in their daily lives, which has improved work-life balance for countless individuals. This contributes to higher levels of satisfaction and well-being.",
      body2: "However, there are also some notable disadvantages. One major concern is the potential for increased dependency, which can reduce self-reliance and resilience. Additionally, there may be unintended consequences that are not immediately apparent. These issues require careful consideration and proactive management.",
      conclusion: "Overall, while  offers clear benefits such as convenience and efficiency, it also presents challenges like dependency and unforeseen consequences. Proper planning and mindful use are essential to maximize the advantages while minimizing the drawbacks."
    },
    vocabulary: [
      "beneficial",
      "detrimental",
      "significant",
      "substantial",
      "considerable",
      "potential",
      "major"
    ]
  },
  {
    id: 61,
    title: "优缺点类 - 教育科技",
    type: "advantages/disadvantages",
    topic: "Discuss the advantages and disadvantages of educational technology.",
    structure: {
      introduction: "[Topic] has become increasingly popular in recent years. This essay will examine the advantages and disadvantages of this trend.",
      body1: "One of the main advantages of [topic] is [advantage1]. For example, [example1]. This contributes to [benefit1].",
      body2: "However, there are also some disadvantages. One major drawback is [disadvantage1]. Additionally, [disadvantage2]. These issues can lead to [negative effect].",
      conclusion: "Overall, while [topic] has clear benefits such as [advantage], it also has drawbacks like [disadvantage]. Proper management is essential to maximize the benefits."
    },
    fullParagraphs: {
      introduction: " has become a significant trend in recent years, with both positive and negative implications. This essay will examine the advantages and disadvantages of this development.",
      body1: "One of the main advantages is the convenience it offers. For example, many people now enjoy greater flexibility in their daily lives, which has improved work-life balance for countless individuals. This contributes to higher levels of satisfaction and well-being.",
      body2: "However, there are also some notable disadvantages. One major concern is the potential for increased dependency, which can reduce self-reliance and resilience. Additionally, there may be unintended consequences that are not immediately apparent. These issues require careful consideration and proactive management.",
      conclusion: "Overall, while  offers clear benefits such as convenience and efficiency, it also presents challenges like dependency and unforeseen consequences. Proper planning and mindful use are essential to maximize the advantages while minimizing the drawbacks."
    },
    vocabulary: [
      "beneficial",
      "detrimental",
      "significant",
      "substantial",
      "considerable",
      "potential",
      "major"
    ]
  },
  {
    id: 62,
    title: "优缺点类 - 可再生能源",
    type: "advantages/disadvantages",
    topic: "Discuss the advantages and disadvantages of renewable energy.",
    structure: {
      introduction: "[Topic] has become increasingly popular in recent years. This essay will examine the advantages and disadvantages of this trend.",
      body1: "One of the main advantages of [topic] is [advantage1]. For example, [example1]. This contributes to [benefit1].",
      body2: "However, there are also some disadvantages. One major drawback is [disadvantage1]. Additionally, [disadvantage2]. These issues can lead to [negative effect].",
      conclusion: "Overall, while [topic] has clear benefits such as [advantage], it also has drawbacks like [disadvantage]. Proper management is essential to maximize the benefits."
    },
    fullParagraphs: {
      introduction: " has become a significant trend in recent years, with both positive and negative implications. This essay will examine the advantages and disadvantages of this development.",
      body1: "One of the main advantages is the convenience it offers. For example, many people now enjoy greater flexibility in their daily lives, which has improved work-life balance for countless individuals. This contributes to higher levels of satisfaction and well-being.",
      body2: "However, there are also some notable disadvantages. One major concern is the potential for increased dependency, which can reduce self-reliance and resilience. Additionally, there may be unintended consequences that are not immediately apparent. These issues require careful consideration and proactive management.",
      conclusion: "Overall, while  offers clear benefits such as convenience and efficiency, it also presents challenges like dependency and unforeseen consequences. Proper planning and mindful use are essential to maximize the advantages while minimizing the drawbacks."
    },
    vocabulary: [
      "beneficial",
      "detrimental",
      "significant",
      "substantial",
      "considerable",
      "potential",
      "major"
    ]
  },
  {
    id: 63,
    title: "优缺点类 - 全球化食品",
    type: "advantages/disadvantages",
    topic: "Discuss the advantages and disadvantages of global food trade.",
    structure: {
      introduction: "[Topic] has become increasingly popular in recent years. This essay will examine the advantages and disadvantages of this trend.",
      body1: "One of the main advantages of [topic] is [advantage1]. For example, [example1]. This contributes to [benefit1].",
      body2: "However, there are also some disadvantages. One major drawback is [disadvantage1]. Additionally, [disadvantage2]. These issues can lead to [negative effect].",
      conclusion: "Overall, while [topic] has clear benefits such as [advantage], it also has drawbacks like [disadvantage]. Proper management is essential to maximize the benefits."
    },
    fullParagraphs: {
      introduction: " has become a significant trend in recent years, with both positive and negative implications. This essay will examine the advantages and disadvantages of this development.",
      body1: "One of the main advantages is the convenience it offers. For example, many people now enjoy greater flexibility in their daily lives, which has improved work-life balance for countless individuals. This contributes to higher levels of satisfaction and well-being.",
      body2: "However, there are also some notable disadvantages. One major concern is the potential for increased dependency, which can reduce self-reliance and resilience. Additionally, there may be unintended consequences that are not immediately apparent. These issues require careful consideration and proactive management.",
      conclusion: "Overall, while  offers clear benefits such as convenience and efficiency, it also presents challenges like dependency and unforeseen consequences. Proper planning and mindful use are essential to maximize the advantages while minimizing the drawbacks."
    },
    vocabulary: [
      "beneficial",
      "detrimental",
      "significant",
      "substantial",
      "considerable",
      "potential",
      "major"
    ]
  },
  {
    id: 64,
    title: "优缺点类 - 外包",
    type: "advantages/disadvantages",
    topic: "Discuss the advantages and disadvantages of outsourcing.",
    structure: {
      introduction: "[Topic] has become increasingly popular in recent years. This essay will examine the advantages and disadvantages of this trend.",
      body1: "One of the main advantages of [topic] is [advantage1]. For example, [example1]. This contributes to [benefit1].",
      body2: "However, there are also some disadvantages. One major drawback is [disadvantage1]. Additionally, [disadvantage2]. These issues can lead to [negative effect].",
      conclusion: "Overall, while [topic] has clear benefits such as [advantage], it also has drawbacks like [disadvantage]. Proper management is essential to maximize the benefits."
    },
    fullParagraphs: {
      introduction: " has become a significant trend in recent years, with both positive and negative implications. This essay will examine the advantages and disadvantages of this development.",
      body1: "One of the main advantages is the convenience it offers. For example, many people now enjoy greater flexibility in their daily lives, which has improved work-life balance for countless individuals. This contributes to higher levels of satisfaction and well-being.",
      body2: "However, there are also some notable disadvantages. One major concern is the potential for increased dependency, which can reduce self-reliance and resilience. Additionally, there may be unintended consequences that are not immediately apparent. These issues require careful consideration and proactive management.",
      conclusion: "Overall, while  offers clear benefits such as convenience and efficiency, it also presents challenges like dependency and unforeseen consequences. Proper planning and mindful use are essential to maximize the advantages while minimizing the drawbacks."
    },
    vocabulary: [
      "beneficial",
      "detrimental",
      "significant",
      "substantial",
      "considerable",
      "potential",
      "major"
    ]
  },
  {
    id: 65,
    title: "优缺点类 - 社交媒体营销",
    type: "advantages/disadvantages",
    topic: "Discuss the advantages and disadvantages of social media marketing.",
    structure: {
      introduction: "[Topic] has become increasingly popular in recent years. This essay will examine the advantages and disadvantages of this trend.",
      body1: "One of the main advantages of [topic] is [advantage1]. For example, [example1]. This contributes to [benefit1].",
      body2: "However, there are also some disadvantages. One major drawback is [disadvantage1]. Additionally, [disadvantage2]. These issues can lead to [negative effect].",
      conclusion: "Overall, while [topic] has clear benefits such as [advantage], it also has drawbacks like [disadvantage]. Proper management is essential to maximize the benefits."
    },
    fullParagraphs: {
      introduction: " has become a significant trend in recent years, with both positive and negative implications. This essay will examine the advantages and disadvantages of this development.",
      body1: "One of the main advantages is the convenience it offers. For example, many people now enjoy greater flexibility in their daily lives, which has improved work-life balance for countless individuals. This contributes to higher levels of satisfaction and well-being.",
      body2: "However, there are also some notable disadvantages. One major concern is the potential for increased dependency, which can reduce self-reliance and resilience. Additionally, there may be unintended consequences that are not immediately apparent. These issues require careful consideration and proactive management.",
      conclusion: "Overall, while  offers clear benefits such as convenience and efficiency, it also presents challenges like dependency and unforeseen consequences. Proper planning and mindful use are essential to maximize the advantages while minimizing the drawbacks."
    },
    vocabulary: [
      "beneficial",
      "detrimental",
      "significant",
      "substantial",
      "considerable",
      "potential",
      "major"
    ]
  },
  {
    id: 66,
    title: "问题解决类 - 空气污染",
    type: "problem/solution",
    topic: "Air pollution is a serious problem in many cities. What are the causes and what can be done to solve this problem?",
    structure: {
      introduction: "[Problem] is a pressing issue in modern society. This essay will analyze the causes of this problem and propose some solutions.",
      body1: "There are several reasons why [problem] occurs. Firstly, [cause1]. Secondly, [cause2]. These factors contribute to [problem severity].",
      body2: "To address this issue, several measures can be taken. One solution is [solution1]. Another approach is [solution2]. These actions would help to [expected effect].",
      conclusion: "In conclusion, [problem] is caused by [causes] and can be solved by [solutions]. It is essential that [call to action]."
    },
    fullParagraphs: {
      introduction: "Air pollution is a serious problem in many cities. is a pressing issue that requires immediate attention. This essay will analyze the main causes of this problem and propose practical solutions.",
      body1: "There are several factors contributing to this issue. Firstly, rapid urbanization and population growth have placed significant strain on existing resources and infrastructure. Secondly, changing lifestyles and consumption patterns have exacerbated the problem. These factors have combined to create a situation that demands action.",
      body2: "To address this issue, several strategies can be implemented. One approach is to promote awareness and education, which can encourage more sustainable behaviors. Another solution is to invest in infrastructure and technology that can mitigate the problem. These measures would help to create a more sustainable and resilient society.",
      conclusion: "In conclusion, air pollution is a serious problem in many cities. is caused by a combination of factors including urbanization and changing behaviors. By implementing education campaigns and investing in sustainable solutions, we can effectively address this issue and create a better future for all."
    },
    vocabulary: [
      "pressing",
      "urgent",
      "critical",
      "essential",
      "effective",
      "practical",
      "viable"
    ]
  },
  {
    id: 67,
    title: "问题解决类 - 交通拥堵",
    type: "problem/solution",
    topic: "Traffic congestion is a major problem in many urban areas. What are the causes and what can be done to solve this problem?",
    structure: {
      introduction: "[Problem] is a pressing issue in modern society. This essay will analyze the causes of this problem and propose some solutions.",
      body1: "There are several reasons why [problem] occurs. Firstly, [cause1]. Secondly, [cause2]. These factors contribute to [problem severity].",
      body2: "To address this issue, several measures can be taken. One solution is [solution1]. Another approach is [solution2]. These actions would help to [expected effect].",
      conclusion: "In conclusion, [problem] is caused by [causes] and can be solved by [solutions]. It is essential that [call to action]."
    },
    fullParagraphs: {
      introduction: "Traffic congestion is a major problem in many urban areas. is a pressing issue that requires immediate attention. This essay will analyze the main causes of this problem and propose practical solutions.",
      body1: "There are several factors contributing to this issue. Firstly, rapid urbanization and population growth have placed significant strain on existing resources and infrastructure. Secondly, changing lifestyles and consumption patterns have exacerbated the problem. These factors have combined to create a situation that demands action.",
      body2: "To address this issue, several strategies can be implemented. One approach is to promote awareness and education, which can encourage more sustainable behaviors. Another solution is to invest in infrastructure and technology that can mitigate the problem. These measures would help to create a more sustainable and resilient society.",
      conclusion: "In conclusion, traffic congestion is a major problem in many urban areas. is caused by a combination of factors including urbanization and changing behaviors. By implementing education campaigns and investing in sustainable solutions, we can effectively address this issue and create a better future for all."
    },
    vocabulary: [
      "pressing",
      "urgent",
      "critical",
      "essential",
      "effective",
      "practical",
      "viable"
    ]
  },
  {
    id: 68,
    title: "问题解决类 - 青少年压力",
    type: "problem/solution",
    topic: "Many young people are experiencing high levels of stress. What are the causes and what can be done to solve this problem?",
    structure: {
      introduction: "[Problem] is a pressing issue in modern society. This essay will analyze the causes of this problem and propose some solutions.",
      body1: "There are several reasons why [problem] occurs. Firstly, [cause1]. Secondly, [cause2]. These factors contribute to [problem severity].",
      body2: "To address this issue, several measures can be taken. One solution is [solution1]. Another approach is [solution2]. These actions would help to [expected effect].",
      conclusion: "In conclusion, [problem] is caused by [causes] and can be solved by [solutions]. It is essential that [call to action]."
    },
    fullParagraphs: {
      introduction: "Many young people are experiencing high levels of stress. is a pressing issue that requires immediate attention. This essay will analyze the main causes of this problem and propose practical solutions.",
      body1: "There are several factors contributing to this issue. Firstly, rapid urbanization and population growth have placed significant strain on existing resources and infrastructure. Secondly, changing lifestyles and consumption patterns have exacerbated the problem. These factors have combined to create a situation that demands action.",
      body2: "To address this issue, several strategies can be implemented. One approach is to promote awareness and education, which can encourage more sustainable behaviors. Another solution is to invest in infrastructure and technology that can mitigate the problem. These measures would help to create a more sustainable and resilient society.",
      conclusion: "In conclusion, many young people are experiencing high levels of stress. is caused by a combination of factors including urbanization and changing behaviors. By implementing education campaigns and investing in sustainable solutions, we can effectively address this issue and create a better future for all."
    },
    vocabulary: [
      "pressing",
      "urgent",
      "critical",
      "essential",
      "effective",
      "practical",
      "viable"
    ]
  },
  {
    id: 69,
    title: "问题解决类 - 水资源污染",
    type: "problem/solution",
    topic: "Water pollution is a serious environmental problem. What are the causes and what can be done to solve this problem?",
    structure: {
      introduction: "[Problem] is a pressing issue in modern society. This essay will analyze the causes of this problem and propose some solutions.",
      body1: "There are several reasons why [problem] occurs. Firstly, [cause1]. Secondly, [cause2]. These factors contribute to [problem severity].",
      body2: "To address this issue, several measures can be taken. One solution is [solution1]. Another approach is [solution2]. These actions would help to [expected effect].",
      conclusion: "In conclusion, [problem] is caused by [causes] and can be solved by [solutions]. It is essential that [call to action]."
    },
    fullParagraphs: {
      introduction: "Water pollution is a serious environmental problem. is a pressing issue that requires immediate attention. This essay will analyze the main causes of this problem and propose practical solutions.",
      body1: "There are several factors contributing to this issue. Firstly, rapid urbanization and population growth have placed significant strain on existing resources and infrastructure. Secondly, changing lifestyles and consumption patterns have exacerbated the problem. These factors have combined to create a situation that demands action.",
      body2: "To address this issue, several strategies can be implemented. One approach is to promote awareness and education, which can encourage more sustainable behaviors. Another solution is to invest in infrastructure and technology that can mitigate the problem. These measures would help to create a more sustainable and resilient society.",
      conclusion: "In conclusion, water pollution is a serious environmental problem. is caused by a combination of factors including urbanization and changing behaviors. By implementing education campaigns and investing in sustainable solutions, we can effectively address this issue and create a better future for all."
    },
    vocabulary: [
      "pressing",
      "urgent",
      "critical",
      "essential",
      "effective",
      "practical",
      "viable"
    ]
  },
  {
    id: 70,
    title: "问题解决类 - 森林砍伐",
    type: "problem/solution",
    topic: "Deforestation is a major environmental issue. What are the causes and what can be done to solve this problem?",
    structure: {
      introduction: "[Problem] is a pressing issue in modern society. This essay will analyze the causes of this problem and propose some solutions.",
      body1: "There are several reasons why [problem] occurs. Firstly, [cause1]. Secondly, [cause2]. These factors contribute to [problem severity].",
      body2: "To address this issue, several measures can be taken. One solution is [solution1]. Another approach is [solution2]. These actions would help to [expected effect].",
      conclusion: "In conclusion, [problem] is caused by [causes] and can be solved by [solutions]. It is essential that [call to action]."
    },
    fullParagraphs: {
      introduction: "Deforestation is a major environmental issue. is a pressing issue that requires immediate attention. This essay will analyze the main causes of this problem and propose practical solutions.",
      body1: "There are several factors contributing to this issue. Firstly, rapid urbanization and population growth have placed significant strain on existing resources and infrastructure. Secondly, changing lifestyles and consumption patterns have exacerbated the problem. These factors have combined to create a situation that demands action.",
      body2: "To address this issue, several strategies can be implemented. One approach is to promote awareness and education, which can encourage more sustainable behaviors. Another solution is to invest in infrastructure and technology that can mitigate the problem. These measures would help to create a more sustainable and resilient society.",
      conclusion: "In conclusion, deforestation is a major environmental issue. is caused by a combination of factors including urbanization and changing behaviors. By implementing education campaigns and investing in sustainable solutions, we can effectively address this issue and create a better future for all."
    },
    vocabulary: [
      "pressing",
      "urgent",
      "critical",
      "essential",
      "effective",
      "practical",
      "viable"
    ]
  },
  {
    id: 71,
    title: "问题解决类 - 失业问题",
    type: "problem/solution",
    topic: "Unemployment is a major economic problem in many countries. What are the causes and what can be done to solve this problem?",
    structure: {
      introduction: "[Problem] is a pressing issue in modern society. This essay will analyze the causes of this problem and propose some solutions.",
      body1: "There are several reasons why [problem] occurs. Firstly, [cause1]. Secondly, [cause2]. These factors contribute to [problem severity].",
      body2: "To address this issue, several measures can be taken. One solution is [solution1]. Another approach is [solution2]. These actions would help to [expected effect].",
      conclusion: "In conclusion, [problem] is caused by [causes] and can be solved by [solutions]. It is essential that [call to action]."
    },
    fullParagraphs: {
      introduction: "Unemployment is a major economic problem in many countries. is a pressing issue that requires immediate attention. This essay will analyze the main causes of this problem and propose practical solutions.",
      body1: "There are several factors contributing to this issue. Firstly, rapid urbanization and population growth have placed significant strain on existing resources and infrastructure. Secondly, changing lifestyles and consumption patterns have exacerbated the problem. These factors have combined to create a situation that demands action.",
      body2: "To address this issue, several strategies can be implemented. One approach is to promote awareness and education, which can encourage more sustainable behaviors. Another solution is to invest in infrastructure and technology that can mitigate the problem. These measures would help to create a more sustainable and resilient society.",
      conclusion: "In conclusion, unemployment is a major economic problem in many countries. is caused by a combination of factors including urbanization and changing behaviors. By implementing education campaigns and investing in sustainable solutions, we can effectively address this issue and create a better future for all."
    },
    vocabulary: [
      "pressing",
      "urgent",
      "critical",
      "essential",
      "effective",
      "practical",
      "viable"
    ]
  },
  {
    id: 72,
    title: "问题解决类 - 贫困问题",
    type: "problem/solution",
    topic: "Poverty is a persistent problem in many parts of the world. What are the causes and what can be done to solve this problem?",
    structure: {
      introduction: "[Problem] is a pressing issue in modern society. This essay will analyze the causes of this problem and propose some solutions.",
      body1: "There are several reasons why [problem] occurs. Firstly, [cause1]. Secondly, [cause2]. These factors contribute to [problem severity].",
      body2: "To address this issue, several measures can be taken. One solution is [solution1]. Another approach is [solution2]. These actions would help to [expected effect].",
      conclusion: "In conclusion, [problem] is caused by [causes] and can be solved by [solutions]. It is essential that [call to action]."
    },
    fullParagraphs: {
      introduction: "Poverty is a persistent problem in many parts of the world. is a pressing issue that requires immediate attention. This essay will analyze the main causes of this problem and propose practical solutions.",
      body1: "There are several factors contributing to this issue. Firstly, rapid urbanization and population growth have placed significant strain on existing resources and infrastructure. Secondly, changing lifestyles and consumption patterns have exacerbated the problem. These factors have combined to create a situation that demands action.",
      body2: "To address this issue, several strategies can be implemented. One approach is to promote awareness and education, which can encourage more sustainable behaviors. Another solution is to invest in infrastructure and technology that can mitigate the problem. These measures would help to create a more sustainable and resilient society.",
      conclusion: "In conclusion, poverty is a persistent problem in many parts of the world. is caused by a combination of factors including urbanization and changing behaviors. By implementing education campaigns and investing in sustainable solutions, we can effectively address this issue and create a better future for all."
    },
    vocabulary: [
      "pressing",
      "urgent",
      "critical",
      "essential",
      "effective",
      "practical",
      "viable"
    ]
  },
  {
    id: 73,
    title: "问题解决类 - 垃圾处理",
    type: "problem/solution",
    topic: "Waste management is a growing problem in modern society. What are the causes and what can be done to solve this problem?",
    structure: {
      introduction: "[Problem] is a pressing issue in modern society. This essay will analyze the causes of this problem and propose some solutions.",
      body1: "There are several reasons why [problem] occurs. Firstly, [cause1]. Secondly, [cause2]. These factors contribute to [problem severity].",
      body2: "To address this issue, several measures can be taken. One solution is [solution1]. Another approach is [solution2]. These actions would help to [expected effect].",
      conclusion: "In conclusion, [problem] is caused by [causes] and can be solved by [solutions]. It is essential that [call to action]."
    },
    fullParagraphs: {
      introduction: "Waste management is a growing problem in modern society. is a pressing issue that requires immediate attention. This essay will analyze the main causes of this problem and propose practical solutions.",
      body1: "There are several factors contributing to this issue. Firstly, rapid urbanization and population growth have placed significant strain on existing resources and infrastructure. Secondly, changing lifestyles and consumption patterns have exacerbated the problem. These factors have combined to create a situation that demands action.",
      body2: "To address this issue, several strategies can be implemented. One approach is to promote awareness and education, which can encourage more sustainable behaviors. Another solution is to invest in infrastructure and technology that can mitigate the problem. These measures would help to create a more sustainable and resilient society.",
      conclusion: "In conclusion, waste management is a growing problem in modern society. is caused by a combination of factors including urbanization and changing behaviors. By implementing education campaigns and investing in sustainable solutions, we can effectively address this issue and create a better future for all."
    },
    vocabulary: [
      "pressing",
      "urgent",
      "critical",
      "essential",
      "effective",
      "practical",
      "viable"
    ]
  },
  {
    id: 74,
    title: "问题解决类 - 网络犯罪",
    type: "problem/solution",
    topic: "Cybercrime is becoming increasingly common. What are the causes and what can be done to solve this problem?",
    structure: {
      introduction: "[Problem] is a pressing issue in modern society. This essay will analyze the causes of this problem and propose some solutions.",
      body1: "There are several reasons why [problem] occurs. Firstly, [cause1]. Secondly, [cause2]. These factors contribute to [problem severity].",
      body2: "To address this issue, several measures can be taken. One solution is [solution1]. Another approach is [solution2]. These actions would help to [expected effect].",
      conclusion: "In conclusion, [problem] is caused by [causes] and can be solved by [solutions]. It is essential that [call to action]."
    },
    fullParagraphs: {
      introduction: "Cybercrime is becoming increasingly common. is a pressing issue that requires immediate attention. This essay will analyze the main causes of this problem and propose practical solutions.",
      body1: "There are several factors contributing to this issue. Firstly, rapid urbanization and population growth have placed significant strain on existing resources and infrastructure. Secondly, changing lifestyles and consumption patterns have exacerbated the problem. These factors have combined to create a situation that demands action.",
      body2: "To address this issue, several strategies can be implemented. One approach is to promote awareness and education, which can encourage more sustainable behaviors. Another solution is to invest in infrastructure and technology that can mitigate the problem. These measures would help to create a more sustainable and resilient society.",
      conclusion: "In conclusion, cybercrime is becoming increasingly common. is caused by a combination of factors including urbanization and changing behaviors. By implementing education campaigns and investing in sustainable solutions, we can effectively address this issue and create a better future for all."
    },
    vocabulary: [
      "pressing",
      "urgent",
      "critical",
      "essential",
      "effective",
      "practical",
      "viable"
    ]
  },
  {
    id: 75,
    title: "问题解决类 - 教育不平等",
    type: "problem/solution",
    topic: "Educational inequality is a major social issue. What are the causes and what can be done to solve this problem?",
    structure: {
      introduction: "[Problem] is a pressing issue in modern society. This essay will analyze the causes of this problem and propose some solutions.",
      body1: "There are several reasons why [problem] occurs. Firstly, [cause1]. Secondly, [cause2]. These factors contribute to [problem severity].",
      body2: "To address this issue, several measures can be taken. One solution is [solution1]. Another approach is [solution2]. These actions would help to [expected effect].",
      conclusion: "In conclusion, [problem] is caused by [causes] and can be solved by [solutions]. It is essential that [call to action]."
    },
    fullParagraphs: {
      introduction: "Educational inequality is a major social issue. is a pressing issue that requires immediate attention. This essay will analyze the main causes of this problem and propose practical solutions.",
      body1: "There are several factors contributing to this issue. Firstly, rapid urbanization and population growth have placed significant strain on existing resources and infrastructure. Secondly, changing lifestyles and consumption patterns have exacerbated the problem. These factors have combined to create a situation that demands action.",
      body2: "To address this issue, several strategies can be implemented. One approach is to promote awareness and education, which can encourage more sustainable behaviors. Another solution is to invest in infrastructure and technology that can mitigate the problem. These measures would help to create a more sustainable and resilient society.",
      conclusion: "In conclusion, educational inequality is a major social issue. is caused by a combination of factors including urbanization and changing behaviors. By implementing education campaigns and investing in sustainable solutions, we can effectively address this issue and create a better future for all."
    },
    vocabulary: [
      "pressing",
      "urgent",
      "critical",
      "essential",
      "effective",
      "practical",
      "viable"
    ]
  },
  {
    id: 76,
    title: "问题解决类 - 医疗成本",
    type: "problem/solution",
    topic: "High healthcare costs are a problem in many countries. What are the causes and what can be done to solve this problem?",
    structure: {
      introduction: "[Problem] is a pressing issue in modern society. This essay will analyze the causes of this problem and propose some solutions.",
      body1: "There are several reasons why [problem] occurs. Firstly, [cause1]. Secondly, [cause2]. These factors contribute to [problem severity].",
      body2: "To address this issue, several measures can be taken. One solution is [solution1]. Another approach is [solution2]. These actions would help to [expected effect].",
      conclusion: "In conclusion, [problem] is caused by [causes] and can be solved by [solutions]. It is essential that [call to action]."
    },
    fullParagraphs: {
      introduction: "High healthcare costs are a problem in many countries. is a pressing issue that requires immediate attention. This essay will analyze the main causes of this problem and propose practical solutions.",
      body1: "There are several factors contributing to this issue. Firstly, rapid urbanization and population growth have placed significant strain on existing resources and infrastructure. Secondly, changing lifestyles and consumption patterns have exacerbated the problem. These factors have combined to create a situation that demands action.",
      body2: "To address this issue, several strategies can be implemented. One approach is to promote awareness and education, which can encourage more sustainable behaviors. Another solution is to invest in infrastructure and technology that can mitigate the problem. These measures would help to create a more sustainable and resilient society.",
      conclusion: "In conclusion, high healthcare costs are a problem in many countries. is caused by a combination of factors including urbanization and changing behaviors. By implementing education campaigns and investing in sustainable solutions, we can effectively address this issue and create a better future for all."
    },
    vocabulary: [
      "pressing",
      "urgent",
      "critical",
      "essential",
      "effective",
      "practical",
      "viable"
    ]
  },
  {
    id: 77,
    title: "问题解决类 - 人口老龄化",
    type: "problem/solution",
    topic: "An aging population is a challenge for many societies. What are the causes and what can be done to address this issue?",
    structure: {
      introduction: "[Problem] is a pressing issue in modern society. This essay will analyze the causes of this problem and propose some solutions.",
      body1: "There are several reasons why [problem] occurs. Firstly, [cause1]. Secondly, [cause2]. These factors contribute to [problem severity].",
      body2: "To address this issue, several measures can be taken. One solution is [solution1]. Another approach is [solution2]. These actions would help to [expected effect].",
      conclusion: "In conclusion, [problem] is caused by [causes] and can be solved by [solutions]. It is essential that [call to action]."
    },
    fullParagraphs: {
      introduction: "An aging population is a challenge for many societies. is a pressing issue that requires immediate attention. This essay will analyze the main causes of this problem and propose practical solutions.",
      body1: "There are several factors contributing to this issue. Firstly, rapid urbanization and population growth have placed significant strain on existing resources and infrastructure. Secondly, changing lifestyles and consumption patterns have exacerbated the problem. These factors have combined to create a situation that demands action.",
      body2: "To address this issue, several strategies can be implemented. One approach is to promote awareness and education, which can encourage more sustainable behaviors. Another solution is to invest in infrastructure and technology that can mitigate the problem. These measures would help to create a more sustainable and resilient society.",
      conclusion: "In conclusion, an aging population is a challenge for many societies. is caused by a combination of factors including urbanization and changing behaviors. By implementing education campaigns and investing in sustainable solutions, we can effectively address this issue and create a better future for all."
    },
    vocabulary: [
      "pressing",
      "urgent",
      "critical",
      "essential",
      "effective",
      "practical",
      "viable"
    ]
  },
  {
    id: 78,
    title: "问题解决类 - 能源危机",
    type: "problem/solution",
    topic: "The world is facing an energy crisis. What are the causes and what can be done to solve this problem?",
    structure: {
      introduction: "[Problem] is a pressing issue in modern society. This essay will analyze the causes of this problem and propose some solutions.",
      body1: "There are several reasons why [problem] occurs. Firstly, [cause1]. Secondly, [cause2]. These factors contribute to [problem severity].",
      body2: "To address this issue, several measures can be taken. One solution is [solution1]. Another approach is [solution2]. These actions would help to [expected effect].",
      conclusion: "In conclusion, [problem] is caused by [causes] and can be solved by [solutions]. It is essential that [call to action]."
    },
    fullParagraphs: {
      introduction: "The world is facing an energy crisis. is a pressing issue that requires immediate attention. This essay will analyze the main causes of this problem and propose practical solutions.",
      body1: "There are several factors contributing to this issue. Firstly, rapid urbanization and population growth have placed significant strain on existing resources and infrastructure. Secondly, changing lifestyles and consumption patterns have exacerbated the problem. These factors have combined to create a situation that demands action.",
      body2: "To address this issue, several strategies can be implemented. One approach is to promote awareness and education, which can encourage more sustainable behaviors. Another solution is to invest in infrastructure and technology that can mitigate the problem. These measures would help to create a more sustainable and resilient society.",
      conclusion: "In conclusion, the world is facing an energy crisis. is caused by a combination of factors including urbanization and changing behaviors. By implementing education campaigns and investing in sustainable solutions, we can effectively address this issue and create a better future for all."
    },
    vocabulary: [
      "pressing",
      "urgent",
      "critical",
      "essential",
      "effective",
      "practical",
      "viable"
    ]
  },
  {
    id: 79,
    title: "问题解决类 - 文化流失",
    type: "problem/solution",
    topic: "Cultural heritage is being lost in many parts of the world. What are the causes and what can be done to preserve it?",
    structure: {
      introduction: "[Problem] is a pressing issue in modern society. This essay will analyze the causes of this problem and propose some solutions.",
      body1: "There are several reasons why [problem] occurs. Firstly, [cause1]. Secondly, [cause2]. These factors contribute to [problem severity].",
      body2: "To address this issue, several measures can be taken. One solution is [solution1]. Another approach is [solution2]. These actions would help to [expected effect].",
      conclusion: "In conclusion, [problem] is caused by [causes] and can be solved by [solutions]. It is essential that [call to action]."
    },
    fullParagraphs: {
      introduction: "Cultural heritage is being lost in many parts of the world. is a pressing issue that requires immediate attention. This essay will analyze the main causes of this problem and propose practical solutions.",
      body1: "There are several factors contributing to this issue. Firstly, rapid urbanization and population growth have placed significant strain on existing resources and infrastructure. Secondly, changing lifestyles and consumption patterns have exacerbated the problem. These factors have combined to create a situation that demands action.",
      body2: "To address this issue, several strategies can be implemented. One approach is to promote awareness and education, which can encourage more sustainable behaviors. Another solution is to invest in infrastructure and technology that can mitigate the problem. These measures would help to create a more sustainable and resilient society.",
      conclusion: "In conclusion, cultural heritage is being lost in many parts of the world. is caused by a combination of factors including urbanization and changing behaviors. By implementing education campaigns and investing in sustainable solutions, we can effectively address this issue and create a better future for all."
    },
    vocabulary: [
      "pressing",
      "urgent",
      "critical",
      "essential",
      "effective",
      "practical",
      "viable"
    ]
  },
  {
    id: 80,
    title: "问题解决类 - 青少年吸烟",
    type: "problem/solution",
    topic: "Teenage smoking is a serious health problem. What are the causes and what can be done to reduce it?",
    structure: {
      introduction: "[Problem] is a pressing issue in modern society. This essay will analyze the causes of this problem and propose some solutions.",
      body1: "There are several reasons why [problem] occurs. Firstly, [cause1]. Secondly, [cause2]. These factors contribute to [problem severity].",
      body2: "To address this issue, several measures can be taken. One solution is [solution1]. Another approach is [solution2]. These actions would help to [expected effect].",
      conclusion: "In conclusion, [problem] is caused by [causes] and can be solved by [solutions]. It is essential that [call to action]."
    },
    fullParagraphs: {
      introduction: "Teenage smoking is a serious health problem. is a pressing issue that requires immediate attention. This essay will analyze the main causes of this problem and propose practical solutions.",
      body1: "There are several factors contributing to this issue. Firstly, rapid urbanization and population growth have placed significant strain on existing resources and infrastructure. Secondly, changing lifestyles and consumption patterns have exacerbated the problem. These factors have combined to create a situation that demands action.",
      body2: "To address this issue, several strategies can be implemented. One approach is to promote awareness and education, which can encourage more sustainable behaviors. Another solution is to invest in infrastructure and technology that can mitigate the problem. These measures would help to create a more sustainable and resilient society.",
      conclusion: "In conclusion, teenage smoking is a serious health problem. is caused by a combination of factors including urbanization and changing behaviors. By implementing education campaigns and investing in sustainable solutions, we can effectively address this issue and create a better future for all."
    },
    vocabulary: [
      "pressing",
      "urgent",
      "critical",
      "essential",
      "effective",
      "practical",
      "viable"
    ]
  },
  {
    id: 81,
    title: "问题解决类 - 工作压力",
    type: "problem/solution",
    topic: "Work-related stress is a growing problem. What are the causes and what can be done to address this issue?",
    structure: {
      introduction: "[Problem] is a pressing issue in modern society. This essay will analyze the causes of this problem and propose some solutions.",
      body1: "There are several reasons why [problem] occurs. Firstly, [cause1]. Secondly, [cause2]. These factors contribute to [problem severity].",
      body2: "To address this issue, several measures can be taken. One solution is [solution1]. Another approach is [solution2]. These actions would help to [expected effect].",
      conclusion: "In conclusion, [problem] is caused by [causes] and can be solved by [solutions]. It is essential that [call to action]."
    },
    fullParagraphs: {
      introduction: "Work-related stress is a growing problem. is a pressing issue that requires immediate attention. This essay will analyze the main causes of this problem and propose practical solutions.",
      body1: "There are several factors contributing to this issue. Firstly, rapid urbanization and population growth have placed significant strain on existing resources and infrastructure. Secondly, changing lifestyles and consumption patterns have exacerbated the problem. These factors have combined to create a situation that demands action.",
      body2: "To address this issue, several strategies can be implemented. One approach is to promote awareness and education, which can encourage more sustainable behaviors. Another solution is to invest in infrastructure and technology that can mitigate the problem. These measures would help to create a more sustainable and resilient society.",
      conclusion: "In conclusion, work-related stress is a growing problem. is caused by a combination of factors including urbanization and changing behaviors. By implementing education campaigns and investing in sustainable solutions, we can effectively address this issue and create a better future for all."
    },
    vocabulary: [
      "pressing",
      "urgent",
      "critical",
      "essential",
      "effective",
      "practical",
      "viable"
    ]
  },
  {
    id: 82,
    title: "问题解决类 - 食品安全",
    type: "problem/solution",
    topic: "Food safety is a major concern in modern society. What are the causes and what can be done to ensure food safety?",
    structure: {
      introduction: "[Problem] is a pressing issue in modern society. This essay will analyze the causes of this problem and propose some solutions.",
      body1: "There are several reasons why [problem] occurs. Firstly, [cause1]. Secondly, [cause2]. These factors contribute to [problem severity].",
      body2: "To address this issue, several measures can be taken. One solution is [solution1]. Another approach is [solution2]. These actions would help to [expected effect].",
      conclusion: "In conclusion, [problem] is caused by [causes] and can be solved by [solutions]. It is essential that [call to action]."
    },
    fullParagraphs: {
      introduction: "Food safety is a major concern in modern society. is a pressing issue that requires immediate attention. This essay will analyze the main causes of this problem and propose practical solutions.",
      body1: "There are several factors contributing to this issue. Firstly, rapid urbanization and population growth have placed significant strain on existing resources and infrastructure. Secondly, changing lifestyles and consumption patterns have exacerbated the problem. These factors have combined to create a situation that demands action.",
      body2: "To address this issue, several strategies can be implemented. One approach is to promote awareness and education, which can encourage more sustainable behaviors. Another solution is to invest in infrastructure and technology that can mitigate the problem. These measures would help to create a more sustainable and resilient society.",
      conclusion: "In conclusion, food safety is a major concern in modern society. is caused by a combination of factors including urbanization and changing behaviors. By implementing education campaigns and investing in sustainable solutions, we can effectively address this issue and create a better future for all."
    },
    vocabulary: [
      "pressing",
      "urgent",
      "critical",
      "essential",
      "effective",
      "practical",
      "viable"
    ]
  },
  {
    id: 83,
    title: "问题解决类 - 网络欺凌",
    type: "problem/solution",
    topic: "Cyberbullying is a serious issue affecting young people. What are the causes and what can be done to prevent it?",
    structure: {
      introduction: "[Problem] is a pressing issue in modern society. This essay will analyze the causes of this problem and propose some solutions.",
      body1: "There are several reasons why [problem] occurs. Firstly, [cause1]. Secondly, [cause2]. These factors contribute to [problem severity].",
      body2: "To address this issue, several measures can be taken. One solution is [solution1]. Another approach is [solution2]. These actions would help to [expected effect].",
      conclusion: "In conclusion, [problem] is caused by [causes] and can be solved by [solutions]. It is essential that [call to action]."
    },
    fullParagraphs: {
      introduction: "Cyberbullying is a serious issue affecting young people. is a pressing issue that requires immediate attention. This essay will analyze the main causes of this problem and propose practical solutions.",
      body1: "There are several factors contributing to this issue. Firstly, rapid urbanization and population growth have placed significant strain on existing resources and infrastructure. Secondly, changing lifestyles and consumption patterns have exacerbated the problem. These factors have combined to create a situation that demands action.",
      body2: "To address this issue, several strategies can be implemented. One approach is to promote awareness and education, which can encourage more sustainable behaviors. Another solution is to invest in infrastructure and technology that can mitigate the problem. These measures would help to create a more sustainable and resilient society.",
      conclusion: "In conclusion, cyberbullying is a serious issue affecting young people. is caused by a combination of factors including urbanization and changing behaviors. By implementing education campaigns and investing in sustainable solutions, we can effectively address this issue and create a better future for all."
    },
    vocabulary: [
      "pressing",
      "urgent",
      "critical",
      "essential",
      "effective",
      "practical",
      "viable"
    ]
  },
  {
    id: 84,
    title: "问题解决类 - 住房危机",
    type: "problem/solution",
    topic: "Housing affordability is a problem in many cities. What are the causes and what can be done to solve this problem?",
    structure: {
      introduction: "[Problem] is a pressing issue in modern society. This essay will analyze the causes of this problem and propose some solutions.",
      body1: "There are several reasons why [problem] occurs. Firstly, [cause1]. Secondly, [cause2]. These factors contribute to [problem severity].",
      body2: "To address this issue, several measures can be taken. One solution is [solution1]. Another approach is [solution2]. These actions would help to [expected effect].",
      conclusion: "In conclusion, [problem] is caused by [causes] and can be solved by [solutions]. It is essential that [call to action]."
    },
    fullParagraphs: {
      introduction: "Housing affordability is a problem in many cities. is a pressing issue that requires immediate attention. This essay will analyze the main causes of this problem and propose practical solutions.",
      body1: "There are several factors contributing to this issue. Firstly, rapid urbanization and population growth have placed significant strain on existing resources and infrastructure. Secondly, changing lifestyles and consumption patterns have exacerbated the problem. These factors have combined to create a situation that demands action.",
      body2: "To address this issue, several strategies can be implemented. One approach is to promote awareness and education, which can encourage more sustainable behaviors. Another solution is to invest in infrastructure and technology that can mitigate the problem. These measures would help to create a more sustainable and resilient society.",
      conclusion: "In conclusion, housing affordability is a problem in many cities. is caused by a combination of factors including urbanization and changing behaviors. By implementing education campaigns and investing in sustainable solutions, we can effectively address this issue and create a better future for all."
    },
    vocabulary: [
      "pressing",
      "urgent",
      "critical",
      "essential",
      "effective",
      "practical",
      "viable"
    ]
  },
  {
    id: 85,
    title: "问题解决类 - 语言消失",
    type: "problem/solution",
    topic: "Many languages are disappearing around the world. What are the causes and what can be done to preserve them?",
    structure: {
      introduction: "[Problem] is a pressing issue in modern society. This essay will analyze the causes of this problem and propose some solutions.",
      body1: "There are several reasons why [problem] occurs. Firstly, [cause1]. Secondly, [cause2]. These factors contribute to [problem severity].",
      body2: "To address this issue, several measures can be taken. One solution is [solution1]. Another approach is [solution2]. These actions would help to [expected effect].",
      conclusion: "In conclusion, [problem] is caused by [causes] and can be solved by [solutions]. It is essential that [call to action]."
    },
    fullParagraphs: {
      introduction: "Many languages are disappearing around the world. is a pressing issue that requires immediate attention. This essay will analyze the main causes of this problem and propose practical solutions.",
      body1: "There are several factors contributing to this issue. Firstly, rapid urbanization and population growth have placed significant strain on existing resources and infrastructure. Secondly, changing lifestyles and consumption patterns have exacerbated the problem. These factors have combined to create a situation that demands action.",
      body2: "To address this issue, several strategies can be implemented. One approach is to promote awareness and education, which can encourage more sustainable behaviors. Another solution is to invest in infrastructure and technology that can mitigate the problem. These measures would help to create a more sustainable and resilient society.",
      conclusion: "In conclusion, many languages are disappearing around the world. is caused by a combination of factors including urbanization and changing behaviors. By implementing education campaigns and investing in sustainable solutions, we can effectively address this issue and create a better future for all."
    },
    vocabulary: [
      "pressing",
      "urgent",
      "critical",
      "essential",
      "effective",
      "practical",
      "viable"
    ]
  },
    {
      id: 101,
      title: "谷爱凌 - 坚持与突破",
      type: "agree/disagree",
      topic: "Success comes from hard work and perseverance. To what extent do you agree with this statement?",
      speaker: "谷爱凌",
      speakerTitle: "自由式滑雪奥运冠军",
      style: "励志进取型",
      styleNote: "谷爱凌的发言充满正能量，强调努力、坚持和突破自我的重要性。她的风格特点是：1）用个人经历举例；2）强调热爱与激情；3）鼓励年轻人勇敢尝试；4）展现自信与谦逊的平衡。",
      structure: {
        introduction: "[话题]. I completely agree with this view, as demonstrated by [名人]的励志旅程。",
        body1: "首先，[名人]通过[具体事例]展现了努力的力量。例如，[细节]。这表明[结论]。",
        body2: "其次，[名人]强调[价值观]的重要性。她曾说：\"[名言]\"。这表明[道理]。",
        conclusion: "总之，[名人]的故事证明[总结]。她的旅程激励我们[号召]。"
      },
      fullParagraphs: {
        introduction: "Success comes from hard work and perseverance. I completely agree with this view, as demonstrated by the inspiring journey of Eileen Gu (谷爱凌), the freestyle skiing Olympic champion.",
        body1: "Firstly, Eileen Gu exemplifies the power of hard work through her rigorous training regime. From a young age, she dedicated countless hours to perfecting her skills, often training in harsh weather conditions. For example, she once trained for 8 hours a day during the winter, even when temperatures dropped below -20 degrees Celsius. This shows that extraordinary achievements require extraordinary effort, and there are no shortcuts to success.",
        body2: "Secondly, Eileen Gu emphasizes the importance of passion and self-belief. She once said, \"I do sports because I love it, not because I want to win.\" This demonstrates that true success comes from genuine passion rather than external pressure. Her ability to stay focused on her love for skiing, even during challenging times, has been key to her achievements.",
        conclusion: "In conclusion, Eileen Gu's story proves that success is the result of hard work, perseverance, and passion. Her journey inspires us to pursue our dreams with dedication and courage, knowing that every effort brings us closer to our goals."
      },
      vocabulary: [
          "perseverance",
          "exemplify",
          "rigorous",
          "dedication",
          "passion",
          "self-belief",
          "inspire"
      ]
    },
    {
      id: 102,
      title: "谷爱凌 - 跨界与多元化",
      type: "advantages/disadvantages",
      topic: "Discuss the advantages of pursuing multiple interests and talents.",
      speaker: "谷爱凌",
      speakerTitle: "自由式滑雪奥运冠军",
      style: "多元发展型",
      styleNote: "谷爱凌作为学霸运动员，展现了跨界发展的优势。她的风格特点是：1）强调全面发展；2）展示多领域成就；3）鼓励探索不同可能性；4）体现东西方文化融合。",
      structure: {
        introduction: "[话题]在当今快速变化的世界中变得越来越重要。",
        body1: "一个主要优势是[好处1]。正如[名人]所展示的，[例子]。这有助于[结果]。",
        body2: "另一个好处是[好处2]。[名人]的经历表明[道理]。例如，[事例]。",
        conclusion: "总体而言，[总结好处]。[名人]的旅程表明[启示]。"
      },
      fullParagraphs: {
        introduction: "Pursuing multiple interests and talents has become increasingly relevant in today's fast-changing world, as exemplified by Eileen Gu.",
        body1: "One major advantage is the development of diverse skills and perspectives. Eileen Gu is not only an Olympic champion but also an accomplished pianist and a top student. This diverse background has helped her approach challenges from different angles and adapt quickly to new situations. For example, her musical training has enhanced her sense of rhythm and precision, which translates to better performance on the slopes.",
        body2: "Another benefit is the ability to find balance and avoid burnout. By pursuing multiple passions, individuals can switch between activities and maintain enthusiasm. Eileen Gu has spoken about how playing the piano helps her relax and recharge after intense training sessions. This cross-training approach has contributed to her sustained success in both sports and academics.",
        conclusion: "Overall, pursuing multiple interests fosters adaptability, creativity, and resilience. Eileen Gu's journey shows that embracing diverse talents can lead to greater fulfillment and success in all areas of life."
      },
      vocabulary: [
          "diverse",
          "perspectives",
          "adapt",
          "precision",
          "resilience",
          "fulfillment",
          "embrace"
      ]
    },
    {
      id: 103,
      title: "Gwynne Shotwell - 领导力与创新",
      type: "discuss both views",
      topic: "Some people believe leadership is about control, while others think it's about empowering others. Discuss both views and give your opinion.",
      speaker: "Gwynne Shotwell",
      speakerTitle: "SpaceX总裁",
      style: "务实领导型",
      styleNote: "Gwynne Shotwell作为SpaceX的总裁，展现了强硬而务实的领导风格。她的特点是：1）结果导向；2）敢于冒险；3）强调团队合作；4）关注长远目标；5）在男性主导领域中展现自信。",
      structure: {
        introduction: "关于[话题]存在争议。本文将讨论两种观点，并从[名人]的领导风格中汲取见解。",
        body1: "一方面，[观点1]有其优点。支持者认为[理由]。然而，[名人]的方法表明[不同观点]。",
        body2: "另一方面，[观点2]符合现代领导原则。[名人]通过[事例]体现了这一点。",
        conclusion: "在我看来，[个人观点]。[名人]的成功表明[总结]。"
      },
      fullParagraphs: {
        introduction: "There is a debate about whether leadership is about control or empowerment. This essay will discuss both perspectives and draw insights from Gwynne Shotwell, the President of SpaceX.",
        body1: "On one hand, traditional views of leadership emphasize control and authority. Supporters argue that clear direction and decisive action are essential for achieving ambitious goals. However, Gwynne Shotwell's approach shows that control alone is not sufficient. While she maintains high standards and clear expectations, she also recognizes the importance of trusting her team.",
        body2: "On the other hand, empowering others aligns with modern leadership principles. Gwynne Shotwell exemplifies this through her collaborative approach at SpaceX. She has built a culture where engineers and innovators are encouraged to take ownership and propose bold ideas. For example, she has spoken about giving her team autonomy to solve problems, which has led to breakthroughs like reusable rocket technology.",
        conclusion: "In my opinion, effective leadership combines both structure and empowerment. Gwynne Shotwell's success demonstrates that the best leaders provide clear vision while trusting their team to execute. This balance creates a culture of innovation and accountability that drives extraordinary achievements."
      },
      vocabulary: [
          "empower",
          "collaborative",
          "autonomy",
          "breakthrough",
          "accountability",
          "execute",
          "vision"
      ]
    },
    {
      id: 104,
      title: "Gwynne Shotwell - 风险与机遇",
      type: "problem/solution",
      topic: "How can organizations embrace calculated risk-taking to drive innovation?",
      speaker: "Gwynne Shotwell",
      speakerTitle: "SpaceX总裁",
      style: "风险进取型",
      styleNote: "Gwynne Shotwell以敢于承担风险著称，带领SpaceX实现多次突破。她的风格是：1）接受失败是成功的一部分；2）鼓励大胆尝试；3）数据驱动决策；4）快速迭代改进。",
      structure: {
        introduction: "[问题]对于旨在创新的组织至关重要。借鉴[名人]的经验，我们可以确定几种策略。",
        body1: "一种关键方法是[策略1]。在[公司]，[措施]。这允许[结果]。",
        body2: "另一种策略涉及[策略2]。[名人]认为[理念]。例如，[事例]。",
        conclusion: "总之，[总结策略]。[名人]的领导表明[启示]。"
      },
      fullParagraphs: {
        introduction: "Embracing calculated risk-taking is crucial for organizations aiming to innovate, especially in rapidly evolving industries. Drawing from Gwynne Shotwell's experience at SpaceX, we can identify several effective strategies.",
        body1: "One key approach is creating a culture that accepts failure as part of the learning process. At SpaceX, Shotwell has fostered an environment where employees are not punished for taking well-reasoned risks that don't succeed. This allows teams to experiment freely and learn from setbacks. For instance, the early failures of the Falcon 1 rocket were seen as valuable lessons rather than disasters, ultimately leading to the success of subsequent models.",
        body2: "Another strategy involves balancing ambition with rigorous planning. Shotwell believes in setting audacious goals while maintaining meticulous attention to detail. For example, SpaceX's goal of colonizing Mars requires enormous risk, but the company mitigates this through incremental testing and data-driven decision-making. This combination of bold vision and careful execution has enabled SpaceX to achieve milestones once thought impossible.",
        conclusion: "In conclusion, organizations can drive innovation by fostering a risk-tolerant culture and balancing ambition with planning. Gwynne Shotwell's leadership shows that calculated risk-taking, when combined with learning from failure and data-driven decision-making, can lead to transformative breakthroughs."
      },
      vocabulary: [
          "calculated",
          "innovate",
          "mitigate",
          "incremental",
          "transformative",
          "breakthrough",
          "ambitious"
      ]
    },
    {
      id: 105,
      title: "黄仁勋 - 远见与技术创新",
      type: "agree/disagree",
      topic: "Technological innovation is driven more by vision than by incremental improvements. To what extent do you agree?",
      speaker: "黄仁勋 (Jensen Huang)",
      speakerTitle: "NVIDIA创始人兼CEO",
      style: "远见前瞻型",
      styleNote: "黄仁勋以其远见卓识和对技术趋势的精准判断著称。他的演讲风格特点是：1）宏大愿景描绘；2）技术深度与通俗解释结合；3）强调计算的未来；4）激情澎湃的表达方式；5）使命感驱动。",
      structure: {
        introduction: "[话题]。我同意这一说法，正如[名人]在[公司]的领导所展示的。",
        body1: "首先，[名人]展示了[远见]。例如，[事例]。这表明[结论]。",
        body2: "其次，[公司]的成功来自[创新方式]。正如[名人]所说：\"[名言]\"。",
        conclusion: "总之，[总结]。[名人]的方法证明[道理]。"
      },
      fullParagraphs: {
        introduction: "Technological innovation is driven more by vision than by incremental improvements. I agree with this statement, as demonstrated by Jensen Huang's leadership at NVIDIA.",
        body1: "Firstly, Jensen Huang has shown remarkable foresight in identifying emerging technology trends. Early in NVIDIA's history, he recognized the potential of GPU computing beyond just graphics, envisioning its applications in artificial intelligence and scientific computing. For example, NVIDIA invested heavily in CUDA, a parallel computing platform, when most competitors focused only on gaming graphics. This visionary bet positioned NVIDIA as a leader in AI hardware.",
        body2: "Secondly, NVIDIA's success comes from transformative innovations rather than small improvements. As Jensen Huang said, \"The most important thing is to see around corners.\" This philosophy has led to breakthrough products like the Tensor Core GPUs that power modern AI systems. By focusing on the big picture rather than incremental tweaks, NVIDIA has consistently stayed ahead of the competition.",
        conclusion: "In conclusion, visionary leadership drives transformative technological innovation. Jensen Huang's approach proves that seeing the future and betting big on emerging trends creates more value than incremental improvements alone."
      },
      vocabulary: [
          "foresight",
          "transformative",
          "breakthrough",
          "visionary",
          "emerging",
          "innovation",
          "envision"
      ]
    },
    {
      id: 106,
      title: "黄仁勋 - 计算的未来",
      type: "advantages/disadvantages",
      topic: "Discuss the advantages of accelerated computing in advancing scientific research.",
      speaker: "黄仁勋 (Jensen Huang)",
      speakerTitle: "NVIDIA创始人兼CEO",
      style: "技术热情型",
      styleNote: "黄仁勋对计算技术充满热情，善于将复杂技术概念转化为令人兴奋的愿景。他的风格是：1）富有感染力的表达；2）使用生动比喻；3）强调计算的革命性影响；4）展示技术的人文价值。",
      structure: {
        introduction: "[话题]在现代科学研究中变得越来越重要。",
        body1: "一个主要优势是[好处1]。正如[公司]所展示的，[例子]。这导致[结果]。",
        body2: "另一个好处是[好处2]。[名人]解释说[道理]。例如，[事例]。",
        conclusion: "总体而言，[总结]。[领域]的未来取决于[关键因素]。"
      },
      fullParagraphs: {
        introduction: "Accelerated computing has become increasingly important in advancing modern scientific research, as championed by Jensen Huang and NVIDIA.",
        body1: "One major advantage is the ability to process massive datasets and complex simulations at unprecedented speeds. NVIDIA's GPUs have enabled breakthroughs in fields like climate modeling, drug discovery, and astrophysics. For example, researchers can now simulate molecular interactions in real-time, significantly accelerating the development of new medications. This leads to faster scientific progress and solutions to global challenges.",
        body2: "Another benefit is democratizing access to advanced computing resources. Jensen Huang explains that accelerated computing is no longer limited to supercomputing centers but is now accessible to researchers worldwide through cloud platforms. For instance, universities and small research teams can now run complex AI models that were previously only available to large corporations. This democratization fosters innovation and collaboration across borders.",
        conclusion: "Overall, accelerated computing transforms scientific research by enabling faster discoveries and broader access. The future of scientific progress depends on continued advancements in computing technology and making these tools widely available to researchers everywhere."
      },
      vocabulary: [
          "accelerated",
          "simulations",
          "democratizing",
          "unprecedented",
          "collaboration",
          "innovation",
          "transforms"
      ]
    },
    {
      id: 107,
      title: "谷爱凌 - 文化融合",
      type: "discuss both views",
      topic: "Some people think cultural diversity creates challenges, while others believe it enriches society. Discuss both views and give your opinion.",
      speaker: "谷爱凌",
      speakerTitle: "自由式滑雪奥运冠军",
      style: "文化桥梁型",
      styleNote: "谷爱凌作为中美混血运动员，展现了文化融合的独特视角。她的风格是：1）强调文化交流的价值；2）展示东西方文化的融合；3）倡导相互理解；4）以自身经历促进文化对话。",
      structure: {
        introduction: "关于[话题]存在争议。[名人]的经历为这个问题提供了宝贵的见解。",
        body1: "一方面，[挑战观点]。有些人认为[理由]。然而，[名人]的故事展示[不同视角]。",
        body2: "另一方面，[积极观点]有显著好处。[名人]通过[事例]体现了这一点。",
        conclusion: "在我看来，[个人观点]。[名人]的旅程表明[启示]。"
      },
      fullParagraphs: {
        introduction: "There is a debate about whether cultural diversity creates challenges or enriches society. Eileen Gu's experience as a Chinese-American athlete offers valuable insights into this issue.",
        body1: "On one hand, some argue that cultural diversity can create misunderstandings and conflicts. Differences in values, traditions, and communication styles can lead to tensions in workplaces and communities. However, Eileen Gu's story shows that these challenges can be overcome through openness and curiosity. She has spoken about how growing up in both cultures taught her to appreciate different perspectives.",
        body2: "On the other hand, cultural diversity enriches society by fostering creativity and innovation. Eileen Gu exemplifies this through her unique perspective. She combines the discipline of Chinese training methods with the individualism of American sports culture, creating a unique approach that has led to her success. Her ability to bridge two cultures has made her a role model for young people worldwide.",
        conclusion: "In my opinion, cultural diversity is a strength that enriches society when approached with openness and respect. Eileen Gu's journey demonstrates that embracing different cultures can lead to personal growth and contribute to global understanding."
      },
      vocabulary: [
          "diversity",
          "enrich",
          "perspectives",
          "bridging",
          "embracing",
          "appreciate",
          "global"
      ]
    },
    {
      id: 108,
      title: "Gwynne Shotwell - 女性领导力",
      type: "problem/solution",
      topic: "What can be done to promote more women in leadership positions in STEM fields?",
      speaker: "Gwynne Shotwell",
      speakerTitle: "SpaceX总裁",
      style: "女性赋权型",
      styleNote: "Gwynne Shotwell作为航空航天领域的杰出女性领导者，倡导性别平等和女性赋权。她的风格是：1）以身作则；2）强调能力而非性别；3）支持女性职业发展；4）打破刻板印象。",
      structure: {
        introduction: "[问题]是一个需要关注的紧迫问题。借鉴[名人]的经验，我们可以确定有效的解决方案。",
        body1: "一种方法是[策略1]。[名人]倡导[措施]。例如，[事例]。",
        body2: "另一种解决方案涉及[策略2]。创建[环境]可以帮助[结果]。",
        conclusion: "总之，[总结]。[名人]的领导表明[启示]。"
      },
      fullParagraphs: {
        introduction: "Promoting more women in leadership positions in STEM fields is a pressing issue that requires attention. Drawing from Gwynne Shotwell's experience at SpaceX, we can identify effective solutions.",
        body1: "One approach is providing mentorship and support networks for women in STEM. Gwynne Shotwell has advocated for mentorship programs that connect women with experienced leaders in the field. For example, SpaceX has implemented initiatives to support women engineers and create a more inclusive workplace culture. These programs help address the lack of role models and provide guidance for career advancement.",
        body2: "Another solution involves challenging stereotypes and promoting gender-neutral evaluation criteria. Creating objective hiring and promotion processes that focus on skills and achievements rather than gender can help level the playing field. Shotwell has emphasized that leadership should be based on competence, not gender, and has worked to create an environment where everyone has equal opportunities to succeed.",
        conclusion: "In conclusion, promoting women in STEM leadership requires mentorship, inclusive cultures, and objective evaluation. Gwynne Shotwell's leadership shows that when organizations prioritize equality and meritocracy, they can attract and retain talented women who drive innovation and success."
      },
      vocabulary: [
          "mentorship",
          "inclusive",
          "stereotypes",
          "meritocracy",
          "competence",
          "advancement",
          "innovation"
      ]
    },
    {
      id: 109,
      title: "黄仁勋 - 创业精神",
      type: "agree/disagree",
      topic: "Entrepreneurial success depends more on resilience than on initial ideas. To what extent do you agree?",
      speaker: "黄仁勋 (Jensen Huang)",
      speakerTitle: "NVIDIA创始人兼CEO",
      style: "坚韧创业型",
      styleNote: "黄仁勋作为连续创业者，展现了非凡的韧性和坚持。他的风格是：1）分享创业艰难历程；2）强调坚持的重要性；3）鼓励从失败中学习；4）展现对事业的执着热爱。",
      structure: {
        introduction: "[话题]。我同意这一说法，正如[名人]的创业旅程所展示的。",
        body1: "首先，[名人]面临[挑战]。例如，[事例]。他的韧性帮助[结果]。",
        body2: "其次，[公司]的成功来自[坚持]。正如[名人]所说：\"[名言]\"。",
        conclusion: "总之，[总结]。[名人]的故事证明[道理]。"
      },
      fullParagraphs: {
        introduction: "Entrepreneurial success depends more on resilience than on initial ideas. I agree with this statement, as demonstrated by Jensen Huang's journey building NVIDIA.",
        body1: "Firstly, Jensen Huang faced numerous challenges in NVIDIA's early years. The company struggled financially and nearly went bankrupt multiple times. For example, in the late 1990s, NVIDIA bet heavily on 3D graphics at a time when the market was skeptical. His resilience and belief in the technology helped the company survive and eventually thrive. This shows that even the best ideas require perseverance to succeed.",
        body2: "Secondly, NVIDIA's success came from continuous adaptation and learning from failures. As Jensen Huang said, \"Fail often, fail fast, but never fail to learn.\" This philosophy has guided NVIDIA through technological shifts and market changes. For instance, when the gaming market slowed, NVIDIA pivoted to AI and data center computing, a move that required significant resilience and long-term vision.",
        conclusion: "In conclusion, entrepreneurial success requires more than just a good idea—it demands resilience, adaptability, and the courage to persist through challenges. Jensen Huang's story proves that resilience is the foundation upon which great companies are built."
      },
      vocabulary: [
          "resilience",
          "perseverance",
          "adaptation",
          "pivoted",
          "entrepreneurial",
          "thrive",
          "persist"
      ]
    },
    {
      id: 110,
      title: "谷爱凌 - 心理健康",
      type: "problem/solution",
      topic: "How can athletes maintain good mental health under high-pressure competition?",
      speaker: "谷爱凌",
      speakerTitle: "自由式滑雪奥运冠军",
      style: "心理健康倡导者",
      styleNote: "谷爱凌公开谈论心理健康问题，展现了运动员面对压力的积极态度。她的风格是：1）坦诚分享个人经历；2）倡导积极心理习惯；3）强调平衡的重要性；4）鼓励寻求帮助。",
      structure: {
        introduction: "[问题]在高水平运动中变得越来越重要。[名人]的方法提供了宝贵的见解。",
        body1: "一种关键策略是[方法1]。[名人]实践[措施]。例如，[事例]。",
        body2: "另一种方法涉及[方法2]。保持[平衡]有助于[结果]。",
        conclusion: "总之，[总结]。[名人]的例子表明[启示]。"
      },
      fullParagraphs: {
        introduction: "Maintaining good mental health under high-pressure competition is increasingly important in high-performance sports. Eileen Gu's approach offers valuable insights for athletes facing intense pressure.",
        body1: "One key strategy is developing healthy coping mechanisms and mindfulness practices. Eileen Gu has spoken about using meditation and visualization to manage stress before competitions. For example, she incorporates breathing exercises into her pre-competition routine to stay focused and calm. These practices help athletes maintain mental clarity and perform at their best under pressure.",
        body2: "Another approach involves maintaining a balanced lifestyle outside of competition. Eileen Gu emphasizes the importance of pursuing other interests, spending time with family, and allowing herself to rest. This balance helps prevent burnout and maintains overall well-being. She has also been open about seeking support when needed, breaking down the stigma around mental health in sports.",
        conclusion: "In conclusion, athletes can maintain good mental health through mindfulness practices and balanced lifestyles. Eileen Gu's example shows that prioritizing mental well-being is not a sign of weakness but a key component of athletic success."
      },
      vocabulary: [
          "mindfulness",
          "coping",
          "visualization",
          "burnout",
          "well-being",
          "stigma",
          "clarity"
      ]
    }
,
    {
      id: 201,
      title: "Mark Carney - 全球经济治理",
      type: "discuss both views",
      topic: "Should governments prioritize economic growth over environmental protection? Discuss both views and give your opinion.",
      speaker: "Mark Carney",
      speakerTitle: "前英格兰银行行长",
      style: "金融权威型",
      styleNote: "Mark Carney作为前央行行长，在金融与环境交叉领域有独特见解。风格：数据驱动、逻辑严密、注重风险分析。",
      structure: {
        introduction: "关于[话题]存在争议。[名人]对这一问题有深刻见解。",
        body1: "一方面，[观点1]。[名人]在演讲中指出：[引述观点]。",
        body2: "另一方面，[观点2]。[名人]强调[理由]。",
        conclusion: "在我看来，[个人观点]。[名人]的分析表明[结论]。"
      },
      fullParagraphs: {
        introduction: "There is an ongoing debate about whether governments should prioritize economic growth over environmental protection.",
        body1: "Proponents argue that short-term economic considerations are crucial for political stability. However, viewing growth and sustainability as fundamentally opposed is flawed.",
        body2: "Climate change poses systemic risks to the financial system, as Carney famously argued, threatening long-term economic stability.",
        conclusion: "In my opinion, we need to internalize environmental costs into economic decisions through carbon pricing."
      },
      vocabulary: [
          "carbon pricing",
          "sustainable finance",
          "climate risk",
          "long-term stability",
          "systemic risk"
      ]
    },
    {
      id: 202,
      title: "Mark Carney - 金融风险与气候危机",
      type: "problem/solution",
      topic: "How can the financial sector address climate-related risks?",
      speaker: "Mark Carney",
      speakerTitle: "前英格兰银行行长",
      style: "风险管理型",
      styleNote: "Mark Carney善于将复杂的气候问题转化为金融语言，强调系统性风险。",
      structure: {
        introduction: "[问题]是当今金融界面临的重要挑战。[名人]对此提出了深刻见解。",
        body1: "[名人]指出的第一个解决方案是[方法1]。这帮助[结果]。",
        body2: "第二个关键策略是[方法2]。[名人]认为[理由]。",
        conclusion: "总之，[名人]的分析表明[结论]。通过这些措施，我们可以[展望]。"
      },
      fullParagraphs: {
        introduction: "Addressing climate-related risks in the financial sector is one of the most pressing challenges facing global markets.",
        body1: "Disclosure is essential. Financial institutions must reveal their exposure to climate risks.",
        body2: "Stress testing helps identify vulnerabilities before crises occur.",
        conclusion: "Managing climate risk requires both transparency and forward-looking analysis."
      },
      vocabulary: [
          "stress testing",
          "climate disclosure",
          "stranded assets",
          "market stability",
          "sustainable investment"
      ]
    },
    {
      id: 203,
      title: "CGTN风格 - 中国经济发展成就",
      type: "advantages/disadvantages",
      topic: "Discuss the advantages and disadvantages of China's economic development model.",
      speaker: "CGTN中国国际电视台",
      speakerTitle: "中国官方英文媒体",
      style: "官方叙事型",
      styleNote: "CGTN报道风格：强调发展成就、注重数据支持、强调中国方案的普遍意义。",
      structure: {
        introduction: "[话题]是中国发展模式讨论的核心内容。CGTN等中国官方媒体的报道提供了独特视角。",
        body1: "中国模式的一个主要优势是[好处1]。[媒体报道]显示[数据/事实]。",
        body2: "然而，也存在[挑战/问题]。[分析]认为[理由]。",
        conclusion: "总体而言，[总结]。中国的经验表明[启示]。"
      },
      fullParagraphs: {
        introduction: "China's economic development model has attracted worldwide attention as the country achieved unprecedented growth.",
        body1: "One major advantage is its focus on long-term infrastructure investment.",
        body2: "Challenges exist including environmental concerns and debt levels.",
        conclusion: "China's development model offers valuable lessons in strategic planning and implementation."
      },
      vocabulary: [
          "unprecedented growth",
          "infrastructure investment",
          "strategic planning",
          "green transition",
          "economic transformation"
      ]
    },
    {
      id: 204,
      title: "CGTN风格 - 全球治理与中国角色",
      type: "agree/disagree",
      topic: "China should take a leading role in global governance. To what extent do you agree?",
      speaker: "CGTN中国国际电视台",
      speakerTitle: "中国官方英文媒体",
      style: "国际责任型",
      styleNote: "CGTN在国际议题上强调：中国作为负责任大国、多边主义、构建人类命运共同体。",
      structure: {
        introduction: "[话题]是当今国际关系中的重要议题。CGTN等中国媒体对这一问题有独到分析。",
        body1: "首先，[观点/理由1]。[媒体报道]指出[事实]。",
        body2: "其次，[观点/理由2]。[评论]认为[观点]。",
        conclusion: "总之，我[同意程度][观点]。[总结]。"
      },
      fullParagraphs: {
        introduction: "The question of whether China should take a leading role in global governance is increasingly relevant.",
        body1: "China's growing economic power naturally comes with increased global responsibilities.",
        body2: "China's approach emphasizes multilateralism and cooperation.",
        conclusion: "In conclusion, I strongly agree that China should take a leading role in global governance."
      },
      vocabulary: [
          "multilateralism",
          "global governance",
          "international responsibility",
          "cooperative approach",
          "development initiatives"
      ]
    },
    {
      id: 205,
      title: "Klaus Schwab - 第四次工业革命",
      type: "agree/disagree",
      topic: "The Fourth Industrial Revolution will bring more benefits than harms. To what extent do you agree?",
      speaker: "Klaus Schwab",
      speakerTitle: "达沃斯论坛创始人",
      style: "思想领袖型",
      styleNote: "Schwab是全球最重要思想领袖之一，概念宏大、视野全球、善于预见趋势。",
      structure: {
        introduction: "[话题]是[名人]在达沃斯论坛上提出的重要命题。",
        body1: "首先，第四次工业革命带来的[好处1]。[名人]指出[观点]。",
        body2: "其次，技术革新促进[好处2]。[名人]认为[理由]。",
        conclusion: "总之，我[同意程度][观点]。[名人]的洞见表明[结论]。"
      },
      fullParagraphs: {
        introduction: "The Fourth Industrial Revolution represents a fundamental transformation in how we live, work, and relate.",
        body1: "Firstly, it brings unprecedented advances in productivity and convenience.",
        body2: "Secondly, this technological revolution creates new opportunities for solving global challenges.",
        conclusion: "In conclusion, I strongly agree that the Fourth Industrial Revolution brings more benefits than harms."
      },
      vocabulary: [
          "Fourth Industrial Revolution",
          "technological disruption",
          "digital transformation",
          "smart systems",
          "human-machine integration"
      ]
    },
    {
      id: 206,
      title: "Klaus Schwab - 技术治理与伦理",
      type: "problem/solution",
      topic: "How should society govern emerging technologies to ensure they benefit humanity?",
      speaker: "Klaus Schwab",
      speakerTitle: "达沃斯论坛创始人",
      style: "治理倡导型",
      styleNote: "Schwab强调多方利益相关者协作、技术应为人类服务、全球协调的重要性。",
      structure: {
        introduction: "[问题]是[名人]在达沃斯论坛上反复强调的核心议题。",
        body1: "[名人]提出的第一个治理原则是[原则1]。[措施]可以帮助[结果]。",
        body2: "第二个关键原则是[原则2]。[名人]认为[理由]。",
        conclusion: "总之，[总结]。[名人]的呼吁是[展望]。"
      },
      fullParagraphs: {
        introduction: "Governing emerging technologies to ensure they benefit all of humanity is one of the central challenges of our time.",
        body1: "Schwab's first governance principle is stakeholder capitalism.",
        body2: "The second key principle is global coordination.",
        conclusion: "Governing emerging technologies requires a combination of stakeholder responsibility and international cooperation."
      },
      vocabulary: [
          "stakeholder capitalism",
          "ethical governance",
          "international coordination",
          "regulatory frameworks",
          "common good"
      ]
    },
    {
      id: 207,
      title: "IMF总裁 - 全球经济展望",
      type: "advantages/disadvantages",
      topic: "Discuss the advantages and disadvantages of economic globalization.",
      speaker: "Kristalina Georgieva",
      speakerTitle: "IMF总裁",
      style: "数据权威型",
      styleNote: "IMF总裁Georgieva的发言风格：数据驱动、关注发展中国家、强调政策协调。",
      structure: {
        introduction: "[话题]是IMF持续关注的核心议题。[名人]提供了基于数据的深刻分析。",
        body1: "全球化的一个主要优势是[好处1]。[数据/研究]显示[事实]。",
        body2: "然而，也存在[问题/风险]。[分析]指出[理由]。",
        conclusion: "总体而言，[总结]。[名人]建议[政策建议]。"
      },
      fullParagraphs: {
        introduction: "Economic globalization has been a defining feature of the world economy for decades.",
        body1: "One major advantage of globalization is its role in lifting millions out of poverty.",
        body2: "However, globalization has also created significant challenges including income inequality.",
        conclusion: "Overall, globalization has brought both substantial benefits and genuine challenges."
      },
      vocabulary: [
          "economic integration",
          "shared prosperity",
          "income inequality",
          "social safety nets",
          "policy complementarity"
      ]
    },
    {
      id: 208,
      title: "IMF总裁 - 数字货币与金融未来",
      type: "discuss both views",
      topic: "Should central banks issue digital currencies? Discuss both views and give your opinion.",
      speaker: "Kristalina Georgieva",
      speakerTitle: "IMF总裁",
      style: "金融前瞻型",
      styleNote: "Georgieva在CBDC议题上强调金融包容性、跨境支付效率、重视风险防范。",
      structure: {
        introduction: "[话题]是国际金融界的热点议题。[名人]对此有专业见解。",
        body1: "支持发行央行数字货币的观点认为[理由]。[名人]指出[潜在优势]。",
        body2: "反对意见则关注[风险/问题]。[分析]认为[理由]。",
        conclusion: "在我看来，[个人观点]。[名人]的建议是[建议]。"
      },
      fullParagraphs: {
        introduction: "The question of whether central banks should issue digital currencies is generating intense debate in financial circles.",
        body1: "Proponents argue CBDCs could enhance financial inclusion.",
        body2: "Critics raise concerns about privacy and financial stability risks.",
        conclusion: "In my opinion, the benefits of well-designed CBDCs outweigh the risks, but careful implementation is essential."
      },
      vocabulary: [
          "Central Bank Digital Currency",
          "financial inclusion",
          "cross-border payments",
          "financial stability",
          "monetary policy"
      ]
    },
    {
      id: 209,
      title: "TED演讲风格 - 创新思维",
      type: "problem/solution",
      topic: "How can education systems better foster creativity and innovation?",
      speaker: "TED演讲系列",
      speakerTitle: "全球思想领袖平台",
      style: "启发激励型",
      styleNote: "TED演讲风格：个人故事开场、简单有力观点、生动比喻、情感共鸣、行动号召。",
      structure: {
        introduction: "想象[情境]。[问题]是许多人关心的话题。",
        body1: "首先，[方法1]。[故事/案例]告诉我们[道理]。",
        body2: "其次，[方法2]。[TED演讲]展示[方法]。",
        conclusion: "所以，[号召]。记住，[核心理念]。"
      },
      fullParagraphs: {
        introduction: "Imagine a classroom where asking questions is more valued than having answers.",
        body1: "First, we need to change how we assess learning.",
        body2: "Second, education should incorporate more interdisciplinary learning.",
        conclusion: "So let us reimagining education as a journey of discovery rather than information acquisition."
      },
      vocabulary: [
          "interdisciplinary learning",
          "creative thinking",
          "curiosity-driven",
          "hands-on learning",
          "growth mindset"
      ]
    },
    {
      id: 210,
      title: "联合国秘书长 - 气候行动",
      type: "agree/disagree",
      topic: "Climate change is the defining challenge of our generation. To what extent do you agree?",
      speaker: "António Guterres",
      speakerTitle: "联合国秘书长",
      style: "道德领袖型",
      styleNote: "Guterres强调道义权威、代际公平、关注弱势群体、集体行动呼吁。",
      structure: {
        introduction: "[话题]是[名人]作为联合国秘书长反复强调的核心议题。",
        body1: "首先，气候变化的影响是[描述]。[名人]警告[后果]。",
        body2: "其次，气候行动关系到[价值观]。[名人]呼吁[行动]。",
        conclusion: "总之，我完全同意[观点]。[名人]的号召是[呼吁]。"
      },
      fullParagraphs: {
        introduction: "Climate change is the defining challenge of our generation.",
        body1: "Firstly, the impacts of climate change are already devastating and accelerating.",
        body2: "Secondly, climate action embodies our deepest values of justice and solidarity.",
        conclusion: "In conclusion, I completely agree that climate change is the defining challenge of our generation."
      },
      vocabulary: [
          "climate justice",
          "generational responsibility",
          "carbon neutrality",
          "just transition",
          "moral imperative"
      ]
    },
    {
      id: 211,
      title: "联合国秘书长 - 多边主义",
      type: "advantages/disadvantages",
      topic: "Discuss the advantages and disadvantages of multilateral approaches to global problems.",
      speaker: "António Guterres",
      speakerTitle: "联合国秘书长",
      style: "多边主义倡导型",
      styleNote: "Gutorials强调国际合作不可或缺、弱国需要多边体系保护、呼吁集体行动。",
      structure: {
        introduction: "[话题]是[名人]长期倡导的核心价值。多边主义的重要性日益凸显。",
        body1: "多边主义的一个主要优势是[好处1]。[名人]指出[理由]。",
        body2: "然而，多边体系面临[挑战]。[名人]承认[问题]。",
        conclusion: "总体而言，[总结]。[名人的建议]是[建议]。"
      },
      fullParagraphs: {
        introduction: "Multilateral approaches to global problems have been a cornerstone of Secretary-General Guterres' leadership.",
        body1: "One major advantage of multilateralism is its ability to address problems no single nation can solve alone.",
        body2: "However, multilateral institutions face real challenges.",
        conclusion: "Overall, the benefits of multilateralism far outweigh its flaws."
      },
      vocabulary: [
          "multilateral cooperation",
          "global governance",
          "collective security",
          "institutional reform",
          "diplomatic coordination"
      ]
    },
    {
      id: 212,
      title: "Elon Musk - 创业与风险",
      type: "agree/disagree",
      topic: "Entrepreneurs should take bold risks to pursue ambitious goals. To what extent do you agree?",
      speaker: "Elon Musk",
      speakerTitle: "特斯拉/SpaceX CEO",
      style: "颠覆创新型",
      styleNote: "Musk风格：宏大愿景驱动、第一性原理思维、不怕失败的决心、技术深度。",
      structure: {
        introduction: "[话题]是[名人]一贯倡导的理念。他以实际行动证明了[观点]。",
        body1: "首先，[名人]展示了[冒险的意义]。[事例]说明[道理]。",
        body2: "其次，宏大目标需要[素质]。[名人]认为[观点]。",
        conclusion: "总之，我[同意程度][观点]。[名人]的启示是[启示]。"
      },
      fullParagraphs: {
        introduction: "Entrepreneurs should take bold risks to pursue ambitious goals. This philosophy has defined Elon Musk's approach.",
        body1: "Firstly, Musk has demonstrated that seemingly impossible goals are achievable through determined effort.",
        body2: "Secondly, ambitious goals inspire and mobilize talent.",
        conclusion: "In conclusion, I strongly agree that entrepreneurs should take bold risks."
      },
      vocabulary: [
          "first principles thinking",
          "moonshot thinking",
          "disruptive innovation",
          "persistent effort",
          "boundary-pushing"
      ]
    },
    {
      id: 213,
      title: "Elon Musk - AI与未来",
      type: "problem/solution",
      topic: "How should society prepare for the impact of artificial intelligence on employment?",
      speaker: "Elon Musk",
      speakerTitle: "特斯拉/SpaceX CEO",
      style: "技术警告型",
      styleNote: "Musk对AI持谨慎态度：技术发展双刃剑、长期影响可能超越短期利益、呼吁主动监管。",
      structure: {
        introduction: "[问题]是[名人]多次警告的关键议题。AI的影响日益显著。",
        body1: "[名人]指出的第一个挑战是[问题1]。[分析]认为[理由]。",
        body2: "第二个关键议题是[问题2]。[名人]建议[解决方案]。",
        conclusion: "总之，[名人]的警告值得重视。我们需要[行动]。"
      },
      fullParagraphs: {
        introduction: "How should society prepare for the impact of artificial intelligence on employment?",
        body1: "Musk identifies automation as the primary threat to employment.",
        body2: "Musk's proposed solutions include universal basic income and human-machine integration.",
        conclusion: "Musk's warnings about AI and employment deserve serious attention."
      },
      vocabulary: [
          "automation threat",
          "job displacement",
          "universal basic income",
          "human-machine interface",
          "technological disruption"
      ]
    },
    {
      id: 214,
      title: "马云 - 创业精神与全球化",
      type: "discuss both views",
      topic: "Small and medium enterprises should embrace digital globalization. Discuss both views and give your opinion.",
      speaker: "马云",
      speakerTitle: "阿里巴巴创始人",
      style: "东方智慧型",
      styleNote: "马云融合东西方智慧：谦逊但自信、善于用商业案例说明道理、强调小企业重要性。",
      structure: {
        introduction: "[话题]是[名人]长期倡导的理念。作为电商先驱，他有独到见解。",
        body1: "一方面，数字全球化为小企业带来[机遇]。[名人]指出[理由]。",
        body2: "另一方面，中小企业面临[挑战]。[名人]提醒[问题]。",
        conclusion: "在我看来，[个人观点]。[名人的建议]是[建议]。"
      },
      fullParagraphs: {
        introduction: "Small and medium enterprises should embrace digital globalization.",
        body1: "On one hand, digital globalization offers unprecedented opportunities for SMEs.",
        body2: "On the other hand, SMEs face significant challenges in going global.",
        conclusion: "In my opinion, the benefits of digital globalization for SMEs outweigh the challenges."
      },
      vocabulary: [
          "digital ecosystem",
          "inclusive globalization",
          "SME empowerment",
          "e-commerce platforms",
          "entrepreneurial spirit"
      ]
    },
    {
      id: 215,
      title: "马云 - 教育与未来技能",
      type: "agree/disagree",
      topic: "Traditional education will become obsolete in the age of AI. To what extent do you agree?",
      speaker: "马云",
      speakerTitle: "阿里巴巴创始人",
      style: "教育革新型",
      styleNote: "马云对教育有深刻反思：批评应试教育、强调创造力和情商、倡导终身学习。",
      structure: {
        introduction: "[话题]是[名人]在多次演讲中表达的观点。他对教育有独到见解。",
        body1: "首先，[名人]认为传统教育[问题]。[经历/观察]证明了[观点]。",
        body2: "其次，未来教育应培养[能力]。[名人]建议[方向]。",
        conclusion: "总之，我[同意程度][观点]。[名人的洞见]是[启示]。"
      },
      fullParagraphs: {
        introduction: "Traditional education will become obsolete in the age of AI.",
        body1: "Firstly, Ma argues that traditional education focuses too heavily on knowledge accumulation.",
        body2: "Secondly, future education must emphasize skills machines cannot easily replicate.",
        conclusion: "In conclusion, I strongly agree that traditional education must transform significantly."
      },
      vocabulary: [
          "holistic education",
          "creative thinking",
          "emotional intelligence",
          "wisdom vs knowledge",
          "future-ready skills"
      ]
    },
    {
      id: 216,
      title: "达沃斯论坛 - 不平等与公平",
      type: "problem/solution",
      topic: "What can be done to reduce growing economic inequality within nations?",
      speaker: "达沃斯论坛",
      speakerTitle: "世界经济论坛",
      style: "精英共识型",
      styleNote: "达沃斯代表全球精英共识：承认不平等严峻性、倡导包容性资本主义、利益相关者价值。",
      structure: {
        introduction: "[问题]是达沃斯论坛长期关注的核心议题。来自全球领袖的分析提供了深刻见解。",
        body1: "达沃斯论坛提出的第一个解决方案是[方法1]。[论坛观点]认为[理由]。",
        body2: "第二个关键策略是[方法2]。[专家建议]指出[方向]。",
        conclusion: "总之，[总结]。达沃斯的建议是[建议]。"
      },
      fullParagraphs: {
        introduction: "Reducing growing economic inequality within nations has been a central concern at World Economic Forum gatherings.",
        body1: "The first solution proposed at Davos is investing in quality education and skills training for all.",
        body2: "The second key strategy involves rethinking corporate governance and taxation.",
        conclusion: "Addressing inequality requires comprehensive action across education, taxation, and corporate responsibility."
      },
      vocabulary: [
          "inclusive growth",
          "wealth inequality",
          "stakeholder capitalism",
          "opportunity equality",
          "human capital investment"
      ]
    },
    {
      id: 217,
      title: "达沃斯论坛 - 第四次工业革命就业",
      type: "problem/solution",
      topic: "How can workers adapt to rapid technological changes in the job market?",
      speaker: "达沃斯论坛",
      speakerTitle: "世界经济论坛",
      style: "前瞻研究型",
      styleNote: "达沃斯在就业议题上：基于大数据和调研、前瞻性预测、注重可操作性。",
      structure: {
        introduction: "[问题]是[研究报告]的核心发现。达沃斯论坛的研究提供了重要参考。",
        body1: "根据论坛研究，第一个适应策略是[方法1]。[数据/预测]显示[趋势]。",
        body2: "第二个关键是[方法2]。[专家建议]认为[方向]。",
        conclusion: "总之，[总结]。达沃斯建议的核心是[核心理念]。"
      },
      fullParagraphs: {
        introduction: "How can workers adapt to rapid technological changes in the job market?",
        body1: "The first adaptation strategy is continuous skills upgrading.",
        body2: "The second key is government-business collaboration on transition support.",
        conclusion: "Adapting to technological change requires individual initiative combined with institutional support."
      },
      vocabulary: [
          "reskilling imperative",
          "lifelong learning",
          "future-ready workforce",
          "just transition",
          "career adaptability"
      ]
    },
    {
      id: 218,
      title: "CGTN风格 - 脱贫攻坚成就",
      type: "advantages/disadvantages",
      topic: "Discuss the advantages and disadvantages of targeted poverty alleviation programs.",
      speaker: "CGTN中国国际电视台",
      speakerTitle: "中国官方英文媒体",
      style: "发展成就型",
      styleNote: "CGTN报道脱贫成就：强调制度优势、注重数据和具体案例、强调国际合作。",
      structure: {
        introduction: "[话题]是中国发展的重要成就。CGTN的报道提供了丰富的第一手资料。",
        body1: "精准扶贫的一个主要优势是[好处1]。[报道]展示[成就]。",
        body2: "然而，项目实施也面临[挑战]。[分析]指出[问题]。",
        conclusion: "总体而言，[总结]。[启示]对[更广泛意义]。"
      },
      fullParagraphs: {
        introduction: "Targeted poverty alleviation has been one of China's most ambitious development programs.",
        body1: "One major advantage of targeted poverty alleviation is its precision approach.",
        body2: "However, the program also faced challenges.",
        conclusion: "Overall, China's targeted poverty alleviation offers valuable lessons for global development."
      },
      vocabulary: [
          "targeted poverty alleviation",
          "precision assistance",
          "rural development",
          "inclusive growth",
          "development experience"
      ]
    },
    {
      id: 219,
      title: "Bill Gates - 慈善与全球健康",
      type: "discuss both views",
      topic: "Should the wealthy have a greater responsibility to address global health issues? Discuss both views.",
      speaker: "Bill Gates",
      speakerTitle: "比尔及梅琳达·盖茨基金会联合主席",
      style: "科技慈善型",
      styleNote: "Bill Gates：数据驱动的分析方法、强调杠杆效应、关注最脆弱群体、倡导创新解决方案。",
      structure: {
        introduction: "[话题]是[名人]在慈善工作中反复思考的问题。",
        body1: "支持富人有更大责任的观点认为[理由]。[名人]通过[案例]展示了[方式]。",
        body2: "反对意见则关注[问题]。[分析]认为[理由]。",
        conclusion: "在我看来，[个人观点]。[名人的信念]是[信念]。"
      },
      fullParagraphs: {
        introduction: "Should the wealthy have a greater responsibility to address global health issues?",
        body1: "Proponents argue that the wealthy have both the resources and the obligation to tackle global health challenges.",
        body2: "Critics question whether philanthropy is sufficient or whether systemic changes are needed.",
        conclusion: "While wealthy individuals can contribute significantly, they should complement rather than replace government responsibilities."
      },
      vocabulary: [
          "global health equity",
          "philanthropic leverage",
          "vaccine development",
          "public-private partnership",
          "systemic change"
      ]
    },
    {
      id: 220,
      title: "Bill Gates - 气候变化解决方案",
      type: "problem/solution",
      topic: "What innovations are needed to address climate change effectively?",
      speaker: "Bill Gates",
      speakerTitle: "气候投资专家",
      style: "创新务实型",
      styleNote: "Bill Gates专注气候变化：投资清洁能源创新、第一性原理分析、强调技术突破必要性。",
      structure: {
        introduction: "[问题]是[名人]近年投入大量资源的核心议题。",
        body1: "[名人]指出的第一个创新需求是[领域1]。[分析]认为[理由]。",
        body2: "第二个关键创新是[领域2]。[名人]相信[方向]。",
        conclusion: "总之，[总结]。[名人]的呼吁是[号召]。"
      },
      fullParagraphs: {
        introduction: "What innovations are needed to address climate change effectively?",
        body1: "Gates identifies clean energy innovation as the most crucial need.",
        body2: "The second key innovation area is agricultural technology.",
        conclusion: "Addressing climate change requires massive innovation investment across multiple sectors."
      },
      vocabulary: [
          "clean energy innovation",
          "carbon neutrality",
          "breakthrough technology",
          "sustainable agriculture",
          "green technology"
      ]
    },
    {
      id: 221,
      title: "Malala Yousafzai - 教育与女性权益",
      type: "agree/disagree",
      topic: "Education is the most powerful weapon to change the world. To what extent do you agree?",
      speaker: "Malala Yousafzai",
      speakerTitle: "诺贝尔和平奖得主",
      style: "人道主义型",
      styleNote: "Malala亲身经历赋予话语力量、简洁有力、坚定而不激进、关注边缘化群体。",
      structure: {
        introduction: "[名言]——这是[名人]的信念，也是她用生命践行的使命。",
        body1: "首先，[名人]自己的故事证明了[观点]。[经历]展示了教育如何改变[个人/社区]。",
        body2: "其次，教育赋予[群体]力量。[名人]观察到[现象]。",
        conclusion: "总之，我完全同意[观点]。[名人]的勇气启示我们[启示]。"
      },
      fullParagraphs: {
        introduction: "Education is the most powerful weapon to change the world.",
        body1: "Firstly, Malala's own story proves the transformative power of education.",
        body2: "Secondly, education particularly transforms the lives of girls and women.",
        conclusion: "In conclusion, I completely agree that education is the most powerful weapon for positive change."
      },
      vocabulary: [
          "girls' education",
          "empowerment through learning",
          "gender equality",
          "access to education",
          "knowledge as power"
      ]
    },
    {
      id: 222,
      title: "Malala - 教育与和平",
      type: "problem/solution",
      topic: "How can we ensure quality education for all children globally?",
      speaker: "Malala Yousafzai",
      speakerTitle: "诺贝尔和平奖得主",
      style: "行动号召型",
      styleNote: "Malala倡导教育：个人故事与数据结合、具体可行的建议、强调政策与资源。",
      structure: {
        introduction: "[问题]是[名人]毕生奋斗的目标。全球仍有数百万儿童失学。",
        body1: "[名人]指出的第一个关键是[方法1]。[事实]显示[现状]。",
        body2: "第二个必要措施是[方法2]。[名人]强调[价值观]。",
        conclusion: "总之，[总结]。[名人]的愿景是[愿景]。"
      },
      fullParagraphs: {
        introduction: "How can we ensure quality education for all children globally?",
        body1: "Malala identifies adequate funding as the first essential step.",
        body2: "The second crucial measure is addressing discrimination and social norms.",
        conclusion: "Ensuring quality education for all requires both increased resources and changed attitudes."
      },
      vocabulary: [
          "universal education",
          "global learning crisis",
          "education financing",
          "gender barriers",
          "educational equity"
      ]
    },
    {
      id: 223,
      title: "Greta Thunberg - 气候行动",
      type: "agree/disagree",
      topic: "Individual actions can make a significant difference in addressing climate change. To what extent do you agree?",
      speaker: "Greta Thunberg",
      speakerTitle: "气候活动家",
      style: "直接质问型",
      styleNote: "Greta直接、毫不妥协、引用科学数据、批判虚伪和拖延、道德权威感。",
      structure: {
        introduction: "[话题]。这是[名人]用行动和信息反复传达的讯息。",
        body1: "首先，[名人]指出[科学事实]。[数据]显示了[现状]。",
        body2: "其次，[名人]强调[行动的重要性]。[信念]是[理念]。",
        conclusion: "总之，我[同意程度][观点]。[名人]的坚持启示我们[启示]。"
      },
      fullParagraphs: {
        introduction: "Individual actions can make a significant difference in addressing climate change.",
        body1: "Firstly, Greta emphasizes that every fraction of global warming matters.",
        body2: "Secondly, individual actions create social and political momentum.",
        conclusion: "In conclusion, I strongly agree that individual actions matter significantly."
      },
      vocabulary: [
          "climate urgency",
          "individual responsibility",
          "social change",
          "youth activism",
          "emissions reduction"
      ]
    },
    {
      id: 224,
      title: "Greta Thunberg - 气候正义",
      type: "problem/solution",
      topic: "How can young people effectively advocate for climate action?",
      speaker: "Greta Thunberg",
      speakerTitle: "气候活动家",
      style: "青年动员型",
      styleNote: "Greta身体力行、非暴力不合作精神、打破政治冷漠、团结而非分裂。",
      structure: {
        introduction: "[问题]是[名人]从个人行动发展成全球运动的核心议题。",
        body1: "[名人]的第一次行动是[方式]。[行动]展示了[可能性]。",
        body2: "青年倡导的关键是[方法]。[名人]认为[理念]。",
        conclusion: "总之，[名人]的经验告诉我们[启示]。[号召]是[呼吁]。"
      },
      fullParagraphs: {
        introduction: "How can young people effectively advocate for climate action?",
        body1: "Greta's first climate strike began as an individual protest.",
        body2: "The key to effective youth advocacy is consistency and moral clarity.",
        conclusion: "Greta's experience teaches us that effective advocacy combines personal commitment with collective action."
      },
      vocabulary: [
          "youth activism",
          "climate strikes",
          "collective action",
          "political accountability",
          "intergenerational justice"
      ]
    },
    {
      id: 225,
      title: "达沃斯论坛 - 未来工作",
      type: "advantages/disadvantages",
      topic: "Discuss the advantages and disadvantages of remote work in the post-pandemic world.",
      speaker: "达沃斯论坛",
      speakerTitle: "世界经济论坛",
      style: "趋势分析型",
      styleNote: "达沃斯对未来工作分析：多学科专家视角、关注长期结构性变化、平衡效率与人文关怀。",
      structure: {
        introduction: "[话题]是新冠疫情后全球关注的焦点。达沃斯论坛的研究提供了前瞻性分析。",
        body1: "远程工作的一个主要优势是[好处1]。[论坛研究]显示[数据]。",
        body2: "然而，也存在[挑战]。[分析]指出[问题]。",
        conclusion: "总体而言，[总结]。达沃斯的建议是[建议]。"
      },
      fullParagraphs: {
        introduction: "Remote work has become a defining feature of the post-pandemic economy.",
        body1: "One major advantage is increased flexibility and work-life balance.",
        body2: "However, challenges exist including social isolation and blurred work-life boundaries.",
        conclusion: "Overall, the future likely involves hybrid models combining remote and in-person work."
      },
      vocabulary: [
          "hybrid work models",
          "digital collaboration",
          "work-life integration",
          "remote productivity",
          "future of work"
      ]
    },
    {
      id: 226,
      title: "IMF/World Bank - 债务与发展",
      type: "problem/solution",
      topic: "How can developing countries manage sovereign debt while maintaining development progress?",
      speaker: "IMF/世界银行专家",
      speakerTitle: "国际金融机构",
      style: "政策专业型",
      styleNote: "国际金融机构专家：严谨经济学框架、跨国比较数据、平衡债权人债务人利益。",
      structure: {
        introduction: "[问题]是[机构名称]持续关注的核心议题。发展中国家面临复杂的债务挑战。",
        body1: "[机构]指出的第一个管理策略是[方法1]。[分析]认为[理由]。",
        body2: "第二个关键措施是[方法2]。[专家建议]指出[方向]。",
        conclusion: "总之，[总结]。[机构]的建议是[建议]。"
      },
      fullParagraphs: {
        introduction: "How can developing countries manage sovereign debt while maintaining development progress?",
        body1: "The IMF advocates for strengthening debt management capacity.",
        body2: "The World Bank emphasizes the importance of debt sustainability analysis.",
        conclusion: "Managing sovereign debt requires both strong domestic institutions and international cooperation."
      },
      vocabulary: [
          "debt sustainability",
          "sovereign debt",
          "fiscal space",
          "debt restructuring",
          "development financing"
      ]
    },
    {
      id: 227,
      title: "Jack Ma - 创业者精神",
      type: "agree/disagree",
      topic: "Failure is an essential part of entrepreneurial success. To what extent do you agree?",
      speaker: "马云",
      speakerTitle: "阿里巴巴创始人",
      style: "励志经验型",
      styleNote: "马云分享失败经验：坦诚自己的多次失败、视失败为学习机会、强调坚持和适应。",
      structure: {
        introduction: "[话题]。[名人]用自己的经历证明了这个观点的价值。",
        body1: "首先，[名人]经历了[失败]。[故事]教会他[教训]。",
        body2: "其次，失败培养了[能力]。[名人]认为[观点]。",
        conclusion: "总之，我完全同意[观点]。[名人]的启示是[启示]。"
      },
      fullParagraphs: {
        introduction: "Failure is an essential part of entrepreneurial success.",
        body1: "Firstly, Ma faced numerous rejections and failures before Alibaba's success.",
        body2: "Secondly, Ma believes failure builds resilience and creativity.",
        conclusion: "In conclusion, I completely agree that failure is essential for entrepreneurial success."
      },
      vocabulary: [
          "entrepreneurial resilience",
          "learning from failure",
          "persistent vision",
          "growth mindset",
          "adaptive strategy"
      ]
    },
    {
      id: 228,
      title: "CGTN风格 - 一带一路倡议",
      type: "discuss both views",
      topic: "The Belt and Road Initiative brings more benefits than harms to participating countries. To what extent do you agree?",
      speaker: "CGTN中国国际电视台",
      speakerTitle: "中国官方英文媒体",
      style: "发展合作型",
      styleNote: "CGTN报道一带一路：强调互利共赢、关注基础设施发展、承认挑战但强调整体正面。",
      structure: {
        introduction: "[话题]是国际发展领域的重大议题。CGTN提供了独特的视角。",
        body1: "一方面，一带一路带来了[好处]。[媒体报道]展示[案例]。",
        body2: "另一方面，存在[关切]。[分析]指出[问题]。",
        conclusion: "在我看来，[个人观点]。[总结]。"
      },
      fullParagraphs: {
        introduction: "The Belt and Road Initiative brings more benefits than harms to participating countries.",
        body1: "On one hand, Belt and Road projects have built much-needed infrastructure across developing regions.",
        body2: "On the other hand, critics raise concerns about debt sustainability and transparency.",
        conclusion: "In my opinion, Belt and Road offers both opportunities and challenges."
      },
      vocabulary: [
          "infrastructure connectivity",
          "development financing",
          "south-south cooperation",
          "global development",
          "mutual benefit"
      ]
    },
    {
      id: 229,
      title: "联合国开发计划署 - 人类发展",
      type: "advantages/disadvantages",
      topic: "Economic growth should be measured beyond GDP alone. Discuss both views.",
      speaker: "联合国开发计划署(UNDP)",
      speakerTitle: "联合国专门机构",
      style: "发展人文型",
      styleNote: "UNDP：多维度发展指标、关注边缘化群体、倡导包容性发展、强调赋权与机会平等。",
      structure: {
        introduction: "[话题]是UNDP人类发展报告长期倡导的理念。单一GDP指标存在局限性。",
        body1: "支持超越GDP的观点认为[理由]。[报告]显示[数据]。",
        body2: "然而，反对意见认为[观点]。[分析]指出[理由]。",
        conclusion: "在我看来，[个人观点]。[建议]是[方向]。"
      },
      fullParagraphs: {
        introduction: "Economic growth should be measured beyond GDP alone.",
        body1: "Proponents argue that GDP fails to capture crucial aspects of wellbeing.",
        body2: "Critics argue that GDP remains essential for economic planning and investment.",
        conclusion: "In my opinion, GDP should be complemented rather than replaced by broader measures."
      },
      vocabulary: [
          "Human Development Index",
          "beyond GDP",
          "inclusive development",
          "wellbeing indicators",
          "sustainable development"
      ]
    },
    {
      id: 230,
      title: "达沃斯论坛 - 社交媒体与心理健康",
      type: "problem/solution",
      topic: "How can society address the mental health crisis exacerbated by social media?",
      speaker: "达沃斯论坛专家",
      speakerTitle: "世界经济论坛",
      style: "跨学科分析型",
      styleNote: "达沃斯分析：综合科技、心理、社会多角度、呼吁多方利益相关者合作、证据基础的政策建议。",
      structure: {
        introduction: "[问题]是[机构]在达沃斯论坛上反复讨论的重要议题。社交媒体影响日益显著。",
        body1: "[机构]指出的第一个应对策略是[方法1]。[研究]显示[数据]。",
        body2: "第二个关键是[方法2]。[分析]认为[方向]。",
        conclusion: "总之，[总结]。[呼吁]是[号召]。"
      },
      fullParagraphs: {
        introduction: "How can society address the mental health crisis exacerbated by social media?",
        body1: "The Forum identifies digital literacy education as the first crucial strategy.",
        body2: "The second key strategy involves platform accountability.",
        conclusion: "Addressing social media's mental health impacts requires both individual empowerment and systemic change."
      },
      vocabulary: [
          "digital wellbeing",
          "social media literacy",
          "platform accountability",
          "mental health crisis",
          "youth protection"
      ]
    }
];

export const patternTypes = ['全部', 'argument', 'cause', 'effect', 'comparison', 'example', 'conclusion'];
export const templateTypes = ['agree/disagree', 'discuss both views', 'advantages/disadvantages', 'problem/solution'];
