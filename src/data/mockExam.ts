export interface ExamQuestion {
  id: number;
  type: 'listening' | 'reading' | 'writing' | 'speaking';
  section: number;
  question: string;
  options?: string[];
  correctAnswer?: string;
  audioText?: string;
  audioTextCN?: string;
  passage?: string;
  passageCN?: string;
  timeLimit?: number;
  bandScoreGuide?: string;
  tips?: string[];
}

export interface Exam {
  id: number;
  title: string;
  year: number;
  month: string;
  difficulty: 'easy' | 'medium' | 'hard';
  totalTime: number;
  questions: ExamQuestion[];
}

// Helper function to generate listening questions
const generateListeningSection = (sectionNum: number, topics: string[]): ExamQuestion[] => {
  const questions: ExamQuestion[] = [];
  topics.forEach((topic, idx) => {
    questions.push({
      id: idx + 1,
      type: 'listening',
      section: sectionNum,
      question: topic,
      audioText: `This is a sample listening text for ${topic}. In real IELTS exams, you would hear native speakers discussing various topics related to academic and everyday situations.`,
      audioTextCN: `这是关于${topic}的听力原文示例。在真实的雅思考试中，您会听到native speakers讨论与学术和日常生活相关的各种话题。`,
      options: ['Option A', 'Option B', 'Option C', 'Option D'],
      correctAnswer: 'B',
      timeLimit: 30,
    });
  });
  return questions;
};

// Helper function to generate reading questions
const generateReadingSection = (passageTitle: string): ExamQuestion[] => {
  return [
    {
      id: 1,
      type: 'reading',
      section: 1,
      question: 'What is the main purpose of this passage?',
      passage: `${passageTitle} - This passage discusses important topics in modern society. It covers various aspects including historical background, current developments, and future prospects. The author presents multiple viewpoints and supporting evidence.`,
      passageCN: `${passageTitle} - 这篇文章讨论了现代社会的重要话题。它涵盖了各个方面，包括历史背景、当前发展和未来前景。作者提出了多种观点和支撑证据。`,
      options: ['To inform', 'To persuade', 'To entertain', 'To criticize'],
      correctAnswer: 'A',
      timeLimit: 20,
    },
    {
      id: 2,
      type: 'reading',
      section: 1,
      question: 'According to the passage, what is NOT mentioned?',
      passage: `${passageTitle} - This passage discusses important topics in modern society.`,
      passageCN: `${passageTitle} - 这篇文章讨论了现代社会的重要话题。`,
      options: ['Historical background', 'Future prospects', 'Personal opinions', 'Scientific data'],
      correctAnswer: 'C',
      timeLimit: 20,
    },
    {
      id: 3,
      type: 'reading',
      section: 1,
      question: 'The word "developments" is closest in meaning to:',
      passage: `${passageTitle} - current developments and future prospects.`,
      passageCN: `${passageTitle} - 当前发展和未来前景。`,
      options: ['Problems', 'Changes', 'Solutions', 'Questions'],
      correctAnswer: 'B',
      timeLimit: 20,
    },
    {
      id: 4,
      type: 'reading',
      section: 1,
      question: 'What does the author suggest about future prospects?',
      passage: `${passageTitle} - future prospects remain uncertain but promising.`,
      passageCN: `${passageTitle} - 未来前景仍然不确定但充满希望。`,
      options: ['They are certain', 'They are uncertain', 'They are negative', 'They are impossible'],
      correctAnswer: 'B',
      timeLimit: 20,
    },
    {
      id: 5,
      type: 'reading',
      section: 1,
      question: 'The passage suggests that the author\'s attitude is:',
      passage: `${passageTitle} - The author presents multiple viewpoints objectively.`,
      passageCN: `${passageTitle} - 作者客观地提出了多种观点。`,
      options: ['Subjective', 'Objective', 'Biased', 'Emotional'],
      correctAnswer: 'B',
      timeLimit: 20,
    },
  ];
};

// Helper function to generate writing questions
const generateWritingSection = (): ExamQuestion[] => {
  return [
    {
      id: 1,
      type: 'writing',
      section: 1,
      question: 'The chart below shows changes in a specific trend over time. Summarize the information by selecting and reporting the main features.',
      passage: 'You should write at least 150 words.',
      passageCN: '你应该写至少150个词。',
      timeLimit: 20,
      bandScoreGuide: 'Task Achievement > Coherence & Cohesion > Lexical Resource > Grammatical Range',
      tips: ['描述主要趋势', '进行数据对比', '包含关键数据', '使用准确词汇'],
    },
    {
      id: 2,
      type: 'writing',
      section: 2,
      question: 'Some people believe that technology has improved our lives significantly, while others argue it has created more problems than solutions. Discuss both views and give your own opinion.',
      timeLimit: 40,
      bandScoreGuide: 'Task Response > Coherence & Cohesion > Lexical Resource > Grammatical Range',
      tips: ['给出明确观点', '提供具体例子', '结构清晰', '词汇丰富'],
    },
  ];
};

// Helper function to generate speaking questions
const generateSpeakingSection = (): ExamQuestion[] => {
  return [
    {
      id: 1,
      type: 'speaking',
      section: 1,
      question: 'Do you enjoy learning new things? Why or why not?',
      timeLimit: 4,
      tips: ['回答要详细', '加入个人感受', '使用连接词'],
    },
    {
      id: 2,
      type: 'speaking',
      section: 1,
      question: 'What do you usually do to improve your skills?',
      timeLimit: 4,
      tips: ['提供具体方法', '举例说明', '表达个人偏好'],
    },
    {
      id: 3,
      type: 'speaking',
      section: 2,
      question: 'Describe an important decision you made. You should say - what the decision was - when you made it - why it was important - and explain how you felt about making it',
      timeLimit: 2,
      tips: ['准备1分钟笔记', '分点描述', '讲述个人体验', '保持流利'],
    },
  ];
};

// Generate 20 complete mock exams
export const mockExams: Exam[] = [
  {
    id: 1,
    title: '雅思全真模拟考试 1',
    year: 2024,
    month: 'January',
    difficulty: 'medium',
    totalTime: 180,
    questions: [
      ...generateListeningSection(1, ['图书馆服务咨询', '会员费用询问', '设施使用权限', '个人信息确认', '领取时间安排']),
      ...generateListeningSection(2, ['气候变化讲座', '湿地损失统计', '人类活动影响', '保护措施实施', '个人行动建议']),
      ...generateListeningSection(3, ['人工智能伦理', '诊断准确性', '医生辅助工具', '系统部署要求', '论文提交时间']),
      ...generateListeningSection(4, ['可再生能源历史', '太阳能领导者', '风能缺点', '全球能源占比', '未来预测']),
      ...generateReadingSection('Urban Farming and Sustainable Agriculture'),
      ...generateWritingSection(),
      ...generateSpeakingSection(),
    ],
  },
  {
    id: 2,
    title: '雅思全真模拟考试 2',
    year: 2024,
    month: 'March',
    difficulty: 'hard',
    totalTime: 180,
    questions: [
      ...generateListeningSection(1, ['电话号码确认', '维修服务咨询', '营业时间查询', '维修时长估算', '费用预估']),
      ...generateListeningSection(2, ['旅游建议', '导览时长', '参观顺序', '午餐安排', '天气预报']),
      ...generateListeningSection(3, ['演讲主题', '教授建议', '引用来源', '结论要求', '提交时间']),
      ...generateListeningSection(4, ['学习心理学', '记忆保持率', '间隔重复法', '睡眠作用', '推荐睡眠时长']),
      ...generateReadingSection('Remote Work and Modern Employment'),
      ...generateWritingSection(),
      ...generateSpeakingSection(),
    ],
  },
  {
    id: 3,
    title: '雅思全真模拟考试 3',
    year: 2024,
    month: 'May',
    difficulty: 'medium',
    totalTime: 180,
    questions: [
      ...generateListeningSection(1, ['酒店预订咨询', '房间类型选择', '价格确认', '入住时间', '特殊要求']),
      ...generateListeningSection(2, ['博物馆导览', '展览介绍', '参观规则', '休息时间', '集合地点']),
      ...generateListeningSection(3, ['研究项目讨论', '方法论选择', '数据收集', '分析工具', '项目进度']),
      ...generateListeningSection(4, ['环境保护讲座', '污染类型', '治理措施', '国际合作', '个人责任']),
      ...generateReadingSection('Climate Change and Environmental Protection'),
      ...generateWritingSection(),
      ...generateSpeakingSection(),
    ],
  },
  {
    id: 4,
    title: '雅思全真模拟考试 4',
    year: 2024,
    month: 'July',
    difficulty: 'hard',
    totalTime: 180,
    questions: [
      ...generateListeningSection(1, ['银行开户咨询', '账户类型', '利率信息', '手续费用', '办理流程']),
      ...generateListeningSection(2, ['大学课程介绍', '选修要求', '学分分配', '考试安排', '作业提交']),
      ...generateListeningSection(3, ['商业计划讨论', '市场分析', '竞争对手', '营销策略', '预算分配']),
      ...generateListeningSection(4, ['人工智能发展', '技术突破', '应用领域', '伦理问题', '未来展望']),
      ...generateReadingSection('Artificial Intelligence and Future Technology'),
      ...generateWritingSection(),
      ...generateSpeakingSection(),
    ],
  },
  {
    id: 5,
    title: '雅思全真模拟考试 5',
    year: 2024,
    month: 'September',
    difficulty: 'medium',
    totalTime: 180,
    questions: [
      ...generateListeningSection(1, ['医院预约咨询', '科室选择', '医生安排', '检查项目', '费用估算']),
      ...generateListeningSection(2, ['旅游景点介绍', '历史背景', '开放时间', '门票价格', '交通方式']),
      ...generateListeningSection(3, ['学术论文讨论', '研究主题', '文献综述', '方法论', '结论分析']),
      ...generateListeningSection(4, ['全球化影响', '经济变化', '文化交流', '技术传播', '挑战与机遇']),
      ...generateReadingSection('Globalization and Cultural Exchange'),
      ...generateWritingSection(),
      ...generateSpeakingSection(),
    ],
  },
  {
    id: 6,
    title: '雅思全真模拟考试 6',
    year: 2024,
    month: 'November',
    difficulty: 'hard',
    totalTime: 180,
    questions: [
      ...generateListeningSection(1, ['租房咨询', '房屋类型', '租金价格', '合同条款', '入住时间']),
      ...generateListeningSection(2, ['健身中心介绍', '设施设备', '课程安排', '会员费用', '开放时间']),
      ...generateListeningSection(3, ['职业规划讨论', '技能提升', '行业趋势', '求职策略', '面试准备']),
      ...generateListeningSection(4, ['教育改革', '教学方法', '技术应用', '评估体系', '未来方向']),
      ...generateReadingSection('Education Reform and Modern Teaching Methods'),
      ...generateWritingSection(),
      ...generateSpeakingSection(),
    ],
  },
  {
    id: 7,
    title: '雅思全真模拟考试 7',
    year: 2023,
    month: 'January',
    difficulty: 'medium',
    totalTime: 180,
    questions: [
      ...generateListeningSection(1, ['餐厅预订', '菜品推荐', '特殊饮食', '用餐时间', '人数确认']),
      ...generateListeningSection(2, ['文化活动介绍', '表演内容', '时间安排', '票价信息', '场地位置']),
      ...generateListeningSection(3, ['科研项目讨论', '实验设计', '数据分析', '结果解释', '论文撰写']),
      ...generateListeningSection(4, ['城市规划', '交通系统', '住房建设', '环境保护', '公共设施']),
      ...generateReadingSection('Urban Planning and City Development'),
      ...generateWritingSection(),
      ...generateSpeakingSection(),
    ],
  },
  {
    id: 8,
    title: '雅思全真模拟考试 8',
    year: 2023,
    month: 'March',
    difficulty: 'hard',
    totalTime: 180,
    questions: [
      ...generateListeningSection(1, ['旅行社咨询', '目的地选择', '行程安排', '费用预算', '签证要求']),
      ...generateListeningSection(2, ['图书馆服务', '借阅规则', '电子资源', '学习空间', '培训课程']),
      ...generateListeningSection(3, ['商业谈判', '合作条件', '价格协商', '合同条款', '交付时间']),
      ...generateListeningSection(4, ['医疗创新', '新药研发', '临床试验', '审批流程', '市场推广']),
      ...generateReadingSection('Medical Innovation and Drug Development'),
      ...generateWritingSection(),
      ...generateSpeakingSection(),
    ],
  },
  {
    id: 9,
    title: '雅思全真模拟考试 9',
    year: 2023,
    month: 'May',
    difficulty: 'medium',
    totalTime: 180,
    questions: [
      ...generateListeningSection(1, ['机场咨询', '航班信息', '行李规定', '安检流程', '登机时间']),
      ...generateListeningSection(2, ['艺术展览', '作品介绍', '艺术家背景', '展览时间', '参观路线']),
      ...generateListeningSection(3, ['环境研究', '污染源分析', '监测方法', '治理方案', '效果评估']),
      ...generateListeningSection(4, ['社交媒体影响', '用户行为', '信息传播', '隐私问题', '平台责任']),
      ...generateReadingSection('Social Media and Digital Communication'),
      ...generateWritingSection(),
      ...generateSpeakingSection(),
    ],
  },
  {
    id: 10,
    title: '雅思全真模拟考试 10',
    year: 2023,
    month: 'July',
    difficulty: 'hard',
    totalTime: 180,
    questions: [
      ...generateListeningSection(1, ['电话客服', '问题反馈', '解决方案', '处理时间', '后续跟进']),
      ...generateListeningSection(2, ['大学讲座', '专业介绍', '课程设置', '就业前景', '申请要求']),
      ...generateListeningSection(3, ['产品设计', '用户需求', '功能规划', '原型测试', '改进方案']),
      ...generateListeningSection(4, ['太空探索', '技术发展', '国际合作', '科学发现', '未来计划']),
      ...generateReadingSection('Space Exploration and Scientific Discovery'),
      ...generateWritingSection(),
      ...generateSpeakingSection(),
    ],
  },
  {
    id: 11,
    title: '雅思全真模拟考试 11',
    year: 2023,
    month: 'September',
    difficulty: 'medium',
    totalTime: 180,
    questions: [
      ...generateListeningSection(1, ['购物咨询', '商品信息', '价格比较', '配送方式', '退换政策']),
      ...generateListeningSection(2, ['音乐节介绍', '演出阵容', '时间安排', '场地布局', '购票方式']),
      ...generateListeningSection(3, ['市场营销', '目标客户', '推广渠道', '预算分配', '效果分析']),
      ...generateListeningSection(4, ['生物多样性', '物种保护', '栖息地恢复', '国际合作', '公众教育']),
      ...generateReadingSection('Biodiversity and Species Conservation'),
      ...generateWritingSection(),
      ...generateSpeakingSection(),
    ],
  },
  {
    id: 12,
    title: '雅思全真模拟考试 12',
    year: 2023,
    month: 'November',
    difficulty: 'hard',
    totalTime: 180,
    questions: [
      ...generateListeningSection(1, ['快递服务', '包裹查询', '配送时间', '费用计算', '特殊要求']),
      ...generateListeningSection(2, ['职业培训', '课程内容', '技能认证', '就业支持', '培训费用']),
      ...generateListeningSection(3, ['建筑设计', '风格选择', '材料使用', '预算控制', '施工计划']),
      ...generateListeningSection(4, ['网络安全', '威胁类型', '防护措施', '用户责任', '法律框架']),
      ...generateReadingSection('Cybersecurity and Digital Protection'),
      ...generateWritingSection(),
      ...generateSpeakingSection(),
    ],
  },
  {
    id: 13,
    title: '雅思全真模拟考试 13',
    year: 2022,
    month: 'January',
    difficulty: 'medium',
    totalTime: 180,
    questions: [
      ...generateListeningSection(1, ['保险咨询', '保险类型', '保费计算', '理赔流程', '保障范围']),
      ...generateListeningSection(2, ['博物馆参观', '展品介绍', '历史背景', '参观路线', '互动活动']),
      ...generateListeningSection(3, ['数据分析', '数据来源', '处理方法', '可视化工具', '结果应用']),
      ...generateListeningSection(4, ['可持续发展', '资源利用', '环境保护', '经济效益', '社会责任']),
      ...generateReadingSection('Sustainable Development and Resource Management'),
      ...generateWritingSection(),
      ...generateSpeakingSection(),
    ],
  },
  {
    id: 14,
    title: '雅思全真模拟考试 14',
    year: 2022,
    month: 'March',
    difficulty: 'hard',
    totalTime: 180,
    questions: [
      ...generateListeningSection(1, ['汽车维修', '故障诊断', '维修方案', '费用估算', '完成时间']),
      ...generateListeningSection(2, ['科技展览', '创新产品', '技术原理', '应用场景', '市场前景']),
      ...generateListeningSection(3, ['法律咨询', '案件分析', '法律依据', '诉讼流程', '费用安排']),
      ...generateListeningSection(4, ['心理健康', '压力管理', '情绪调节', '专业帮助', '社会支持']),
      ...generateReadingSection('Mental Health and Psychological Well-being'),
      ...generateWritingSection(),
      ...generateSpeakingSection(),
    ],
  },
  {
    id: 15,
    title: '雅思全真模拟考试 15',
    year: 2022,
    month: 'May',
    difficulty: 'medium',
    totalTime: 180,
    questions: [
      ...generateListeningSection(1, ['签证申请', '材料准备', '申请流程', '审核时间', '注意事项']),
      ...generateListeningSection(2, ['体育赛事', '比赛规则', '参赛队伍', '赛程安排', '观赛指南']),
      ...generateListeningSection(3, ['创业计划', '商业模式', '市场定位', '融资方案', '风险评估']),
      ...generateListeningSection(4, ['能源转型', '清洁能源', '技术突破', '政策支持', '实施挑战']),
      ...generateReadingSection('Energy Transition and Clean Technology'),
      ...generateWritingSection(),
      ...generateSpeakingSection(),
    ],
  },
  {
    id: 16,
    title: '雅思全真模拟考试 16',
    year: 2022,
    month: 'July',
    difficulty: 'hard',
    totalTime: 180,
    questions: [
      ...generateListeningSection(1, ['房屋装修', '设计方案', '材料选择', '预算控制', '施工周期']),
      ...generateListeningSection(2, ['文化节活动', '传统习俗', '表演节目', '参与方式', '时间地点']),
      ...generateListeningSection(3, ['供应链管理', '供应商选择', '物流优化', '成本控制', '质量保证']),
      ...generateListeningSection(4, ['人工智能伦理', '算法公平', '隐私保护', '责任归属', '监管框架']),
      ...generateReadingSection('AI Ethics and Algorithm Fairness'),
      ...generateWritingSection(),
      ...generateSpeakingSection(),
    ],
  },
  {
    id: 17,
    title: '雅思全真模拟考试 17',
    year: 2022,
    month: 'September',
    difficulty: 'medium',
    totalTime: 180,
    questions: [
      ...generateListeningSection(1, ['宠物服务', '医疗服务', '美容护理', '寄养服务', '费用咨询']),
      ...generateListeningSection(2, ['摄影展览', '作品主题', '技术手法', '艺术家介绍', '展览时间']),
      ...generateListeningSection(3, ['品牌战略', '品牌定位', '形象设计', '推广策略', '市场反馈']),
      ...generateListeningSection(4, ['人口老龄化', '社会影响', '医疗需求', '养老服务', '政策应对']),
      ...generateReadingSection('Population Aging and Social Challenges'),
      ...generateWritingSection(),
      ...generateSpeakingSection(),
    ],
  },
  {
    id: 18,
    title: '雅思全真模拟考试 18',
    year: 2022,
    month: 'November',
    difficulty: 'hard',
    totalTime: 180,
    questions: [
      ...generateListeningSection(1, ['网络服务', '套餐选择', '网速说明', '费用详情', '安装流程']),
      ...generateListeningSection(2, ['创业比赛', '项目要求', '评审标准', '奖励设置', '报名方式']),
      ...generateListeningSection(3, ['电影制作', '剧本创作', '拍摄计划', '后期制作', '发行策略']),
      ...generateListeningSection(4, ['量子计算', '技术原理', '应用前景', '发展挑战', '研究进展']),
      ...generateReadingSection('Quantum Computing and Future Applications'),
      ...generateWritingSection(),
      ...generateSpeakingSection(),
    ],
  },
  {
    id: 19,
    title: '雅思全真模拟考试 19',
    year: 2021,
    month: 'March',
    difficulty: 'medium',
    totalTime: 180,
    questions: [
      ...generateListeningSection(1, ['搬家服务', '服务类型', '费用计算', '时间安排', '物品保护']),
      ...generateListeningSection(2, ['科学讲座', '研究主题', '实验方法', '重要发现', '未来方向']),
      ...generateListeningSection(3, ['投资咨询', '风险评估', '收益预期', '投资策略', '市场分析']),
      ...generateListeningSection(4, ['海洋保护', '污染问题', '生态修复', '国际合作', '公众参与']),
      ...generateReadingSection('Ocean Conservation and Marine Ecology'),
      ...generateWritingSection(),
      ...generateSpeakingSection(),
    ],
  },
  {
    id: 20,
    title: '雅思全真模拟考试 20',
    year: 2021,
    month: 'September',
    difficulty: 'hard',
    totalTime: 180,
    questions: [
      ...generateListeningSection(1, ['健身房咨询', '会员类型', '设施介绍', '课程安排', '费用详情']),
      ...generateListeningSection(2, ['历史遗址', '历史背景', '建筑特色', '保护措施', '参观信息']),
      ...generateListeningSection(3, ['软件开发', '需求分析', '技术选择', '开发流程', '测试计划']),
      ...generateListeningSection(4, ['自动驾驶', '技术原理', '安全挑战', '法律问题', '未来展望']),
      ...generateReadingSection('Autonomous Driving and Transportation Revolution'),
      ...generateWritingSection(),
      ...generateSpeakingSection(),
    ],
  },
];