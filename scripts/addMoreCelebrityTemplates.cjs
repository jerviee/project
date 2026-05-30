const fs = require('fs');

const newCelebrityTemplates = [
  {
    id: 201,
    title: "Mark Carney - 全球经济治理",
    type: "discuss both views",
    topic: "Should governments prioritize economic growth over environmental protection? Discuss both views and give your opinion.",
    speaker: "Mark Carney",
    speakerTitle: "前英格兰银行行长",
    style: "金融权威型",
    styleNote: "Mark Carney作为前央行行长，在金融与环境交叉领域有独特见解。风格：数据驱动、逻辑严密、注重风险分析。",
    structure: { introduction: "关于[话题]存在争议。[名人]对这一问题有深刻见解。", body1: "一方面，[观点1]。[名人]在演讲中指出：[引述观点]。", body2: "另一方面，[观点2]。[名人]强调[理由]。", conclusion: "在我看来，[个人观点]。[名人]的分析表明[结论]。" },
    fullParagraphs: { introduction: "There is an ongoing debate about whether governments should prioritize economic growth over environmental protection.", body1: "Proponents argue that short-term economic considerations are crucial for political stability. However, viewing growth and sustainability as fundamentally opposed is flawed.", body2: "Climate change poses systemic risks to the financial system, as Carney famously argued, threatening long-term economic stability.", conclusion: "In my opinion, we need to internalize environmental costs into economic decisions through carbon pricing." },
    vocabulary: ["carbon pricing", "sustainable finance", "climate risk", "long-term stability", "systemic risk"]
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
    structure: { introduction: "[问题]是当今金融界面临的重要挑战。[名人]对此提出了深刻见解。", body1: "[名人]指出的第一个解决方案是[方法1]。这帮助[结果]。", body2: "第二个关键策略是[方法2]。[名人]认为[理由]。", conclusion: "总之，[名人]的分析表明[结论]。通过这些措施，我们可以[展望]。" },
    fullParagraphs: { introduction: "Addressing climate-related risks in the financial sector is one of the most pressing challenges facing global markets.", body1: "Disclosure is essential. Financial institutions must reveal their exposure to climate risks.", body2: "Stress testing helps identify vulnerabilities before crises occur.", conclusion: "Managing climate risk requires both transparency and forward-looking analysis." },
    vocabulary: ["stress testing", "climate disclosure", "stranded assets", "market stability", "sustainable investment"]
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
    structure: { introduction: "[话题]是中国发展模式讨论的核心内容。CGTN等中国官方媒体的报道提供了独特视角。", body1: "中国模式的一个主要优势是[好处1]。[媒体报道]显示[数据/事实]。", body2: "然而，也存在[挑战/问题]。[分析]认为[理由]。", conclusion: "总体而言，[总结]。中国的经验表明[启示]。" },
    fullParagraphs: { introduction: "China's economic development model has attracted worldwide attention as the country achieved unprecedented growth.", body1: "One major advantage is its focus on long-term infrastructure investment.", body2: "Challenges exist including environmental concerns and debt levels.", conclusion: "China's development model offers valuable lessons in strategic planning and implementation." },
    vocabulary: ["unprecedented growth", "infrastructure investment", "strategic planning", "green transition", "economic transformation"]
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
    structure: { introduction: "[话题]是当今国际关系中的重要议题。CGTN等中国媒体对这一问题有独到分析。", body1: "首先，[观点/理由1]。[媒体报道]指出[事实]。", body2: "其次，[观点/理由2]。[评论]认为[观点]。", conclusion: "总之，我[同意程度][观点]。[总结]。" },
    fullParagraphs: { introduction: "The question of whether China should take a leading role in global governance is increasingly relevant.", body1: "China's growing economic power naturally comes with increased global responsibilities.", body2: "China's approach emphasizes multilateralism and cooperation.", conclusion: "In conclusion, I strongly agree that China should take a leading role in global governance." },
    vocabulary: ["multilateralism", "global governance", "international responsibility", "cooperative approach", "development initiatives"]
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
    structure: { introduction: "[话题]是[名人]在达沃斯论坛上提出的重要命题。", body1: "首先，第四次工业革命带来的[好处1]。[名人]指出[观点]。", body2: "其次，技术革新促进[好处2]。[名人]认为[理由]。", conclusion: "总之，我[同意程度][观点]。[名人]的洞见表明[结论]。" },
    fullParagraphs: { introduction: "The Fourth Industrial Revolution represents a fundamental transformation in how we live, work, and relate.", body1: "Firstly, it brings unprecedented advances in productivity and convenience.", body2: "Secondly, this technological revolution creates new opportunities for solving global challenges.", conclusion: "In conclusion, I strongly agree that the Fourth Industrial Revolution brings more benefits than harms." },
    vocabulary: ["Fourth Industrial Revolution", "technological disruption", "digital transformation", "smart systems", "human-machine integration"]
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
    structure: { introduction: "[问题]是[名人]在达沃斯论坛上反复强调的核心议题。", body1: "[名人]提出的第一个治理原则是[原则1]。[措施]可以帮助[结果]。", body2: "第二个关键原则是[原则2]。[名人]认为[理由]。", conclusion: "总之，[总结]。[名人]的呼吁是[展望]。" },
    fullParagraphs: { introduction: "Governing emerging technologies to ensure they benefit all of humanity is one of the central challenges of our time.", body1: "Schwab's first governance principle is stakeholder capitalism.", body2: "The second key principle is global coordination.", conclusion: "Governing emerging technologies requires a combination of stakeholder responsibility and international cooperation." },
    vocabulary: ["stakeholder capitalism", "ethical governance", "international coordination", "regulatory frameworks", "common good"]
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
    structure: { introduction: "[话题]是IMF持续关注的核心议题。[名人]提供了基于数据的深刻分析。", body1: "全球化的一个主要优势是[好处1]。[数据/研究]显示[事实]。", body2: "然而，也存在[问题/风险]。[分析]指出[理由]。", conclusion: "总体而言，[总结]。[名人]建议[政策建议]。" },
    fullParagraphs: { introduction: "Economic globalization has been a defining feature of the world economy for decades.", body1: "One major advantage of globalization is its role in lifting millions out of poverty.", body2: "However, globalization has also created significant challenges including income inequality.", conclusion: "Overall, globalization has brought both substantial benefits and genuine challenges." },
    vocabulary: ["economic integration", "shared prosperity", "income inequality", "social safety nets", "policy complementarity"]
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
    structure: { introduction: "[话题]是国际金融界的热点议题。[名人]对此有专业见解。", body1: "支持发行央行数字货币的观点认为[理由]。[名人]指出[潜在优势]。", body2: "反对意见则关注[风险/问题]。[分析]认为[理由]。", conclusion: "在我看来，[个人观点]。[名人]的建议是[建议]。" },
    fullParagraphs: { introduction: "The question of whether central banks should issue digital currencies is generating intense debate in financial circles.", body1: "Proponents argue CBDCs could enhance financial inclusion.", body2: "Critics raise concerns about privacy and financial stability risks.", conclusion: "In my opinion, the benefits of well-designed CBDCs outweigh the risks, but careful implementation is essential." },
    vocabulary: ["Central Bank Digital Currency", "financial inclusion", "cross-border payments", "financial stability", "monetary policy"]
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
    structure: { introduction: "想象[情境]。[问题]是许多人关心的话题。", body1: "首先，[方法1]。[故事/案例]告诉我们[道理]。", body2: "其次，[方法2]。[TED演讲]展示[方法]。", conclusion: "所以，[号召]。记住，[核心理念]。" },
    fullParagraphs: { introduction: "Imagine a classroom where asking questions is more valued than having answers.", body1: "First, we need to change how we assess learning.", body2: "Second, education should incorporate more interdisciplinary learning.", conclusion: "So let us reimagining education as a journey of discovery rather than information acquisition." },
    vocabulary: ["interdisciplinary learning", "creative thinking", "curiosity-driven", "hands-on learning", "growth mindset"]
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
    structure: { introduction: "[话题]是[名人]作为联合国秘书长反复强调的核心议题。", body1: "首先，气候变化的影响是[描述]。[名人]警告[后果]。", body2: "其次，气候行动关系到[价值观]。[名人]呼吁[行动]。", conclusion: "总之，我完全同意[观点]。[名人]的号召是[呼吁]。" },
    fullParagraphs: { introduction: "Climate change is the defining challenge of our generation.", body1: "Firstly, the impacts of climate change are already devastating and accelerating.", body2: "Secondly, climate action embodies our deepest values of justice and solidarity.", conclusion: "In conclusion, I completely agree that climate change is the defining challenge of our generation." },
    vocabulary: ["climate justice", "generational responsibility", "carbon neutrality", "just transition", "moral imperative"]
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
    structure: { introduction: "[话题]是[名人]长期倡导的核心价值。多边主义的重要性日益凸显。", body1: "多边主义的一个主要优势是[好处1]。[名人]指出[理由]。", body2: "然而，多边体系面临[挑战]。[名人]承认[问题]。", conclusion: "总体而言，[总结]。[名人的建议]是[建议]。" },
    fullParagraphs: { introduction: "Multilateral approaches to global problems have been a cornerstone of Secretary-General Guterres' leadership.", body1: "One major advantage of multilateralism is its ability to address problems no single nation can solve alone.", body2: "However, multilateral institutions face real challenges.", conclusion: "Overall, the benefits of multilateralism far outweigh its flaws." },
    vocabulary: ["multilateral cooperation", "global governance", "collective security", "institutional reform", "diplomatic coordination"]
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
    structure: { introduction: "[话题]是[名人]一贯倡导的理念。他以实际行动证明了[观点]。", body1: "首先，[名人]展示了[冒险的意义]。[事例]说明[道理]。", body2: "其次，宏大目标需要[素质]。[名人]认为[观点]。", conclusion: "总之，我[同意程度][观点]。[名人]的启示是[启示]。" },
    fullParagraphs: { introduction: "Entrepreneurs should take bold risks to pursue ambitious goals. This philosophy has defined Elon Musk's approach.", body1: "Firstly, Musk has demonstrated that seemingly impossible goals are achievable through determined effort.", body2: "Secondly, ambitious goals inspire and mobilize talent.", conclusion: "In conclusion, I strongly agree that entrepreneurs should take bold risks." },
    vocabulary: ["first principles thinking", "moonshot thinking", "disruptive innovation", "persistent effort", "boundary-pushing"]
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
    structure: { introduction: "[问题]是[名人]多次警告的关键议题。AI的影响日益显著。", body1: "[名人]指出的第一个挑战是[问题1]。[分析]认为[理由]。", body2: "第二个关键议题是[问题2]。[名人]建议[解决方案]。", conclusion: "总之，[名人]的警告值得重视。我们需要[行动]。" },
    fullParagraphs: { introduction: "How should society prepare for the impact of artificial intelligence on employment?", body1: "Musk identifies automation as the primary threat to employment.", body2: "Musk's proposed solutions include universal basic income and human-machine integration.", conclusion: "Musk's warnings about AI and employment deserve serious attention." },
    vocabulary: ["automation threat", "job displacement", "universal basic income", "human-machine interface", "technological disruption"]
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
    structure: { introduction: "[话题]是[名人]长期倡导的理念。作为电商先驱，他有独到见解。", body1: "一方面，数字全球化为小企业带来[机遇]。[名人]指出[理由]。", body2: "另一方面，中小企业面临[挑战]。[名人]提醒[问题]。", conclusion: "在我看来，[个人观点]。[名人的建议]是[建议]。" },
    fullParagraphs: { introduction: "Small and medium enterprises should embrace digital globalization.", body1: "On one hand, digital globalization offers unprecedented opportunities for SMEs.", body2: "On the other hand, SMEs face significant challenges in going global.", conclusion: "In my opinion, the benefits of digital globalization for SMEs outweigh the challenges." },
    vocabulary: ["digital ecosystem", "inclusive globalization", "SME empowerment", "e-commerce platforms", "entrepreneurial spirit"]
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
    structure: { introduction: "[话题]是[名人]在多次演讲中表达的观点。他对教育有独到见解。", body1: "首先，[名人]认为传统教育[问题]。[经历/观察]证明了[观点]。", body2: "其次，未来教育应培养[能力]。[名人]建议[方向]。", conclusion: "总之，我[同意程度][观点]。[名人的洞见]是[启示]。" },
    fullParagraphs: { introduction: "Traditional education will become obsolete in the age of AI.", body1: "Firstly, Ma argues that traditional education focuses too heavily on knowledge accumulation.", body2: "Secondly, future education must emphasize skills machines cannot easily replicate.", conclusion: "In conclusion, I strongly agree that traditional education must transform significantly." },
    vocabulary: ["holistic education", "creative thinking", "emotional intelligence", "wisdom vs knowledge", "future-ready skills"]
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
    structure: { introduction: "[问题]是达沃斯论坛长期关注的核心议题。来自全球领袖的分析提供了深刻见解。", body1: "达沃斯论坛提出的第一个解决方案是[方法1]。[论坛观点]认为[理由]。", body2: "第二个关键策略是[方法2]。[专家建议]指出[方向]。", conclusion: "总之，[总结]。达沃斯的建议是[建议]。" },
    fullParagraphs: { introduction: "Reducing growing economic inequality within nations has been a central concern at World Economic Forum gatherings.", body1: "The first solution proposed at Davos is investing in quality education and skills training for all.", body2: "The second key strategy involves rethinking corporate governance and taxation.", conclusion: "Addressing inequality requires comprehensive action across education, taxation, and corporate responsibility." },
    vocabulary: ["inclusive growth", "wealth inequality", "stakeholder capitalism", "opportunity equality", "human capital investment"]
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
    structure: { introduction: "[问题]是[研究报告]的核心发现。达沃斯论坛的研究提供了重要参考。", body1: "根据论坛研究，第一个适应策略是[方法1]。[数据/预测]显示[趋势]。", body2: "第二个关键是[方法2]。[专家建议]认为[方向]。", conclusion: "总之，[总结]。达沃斯建议的核心是[核心理念]。" },
    fullParagraphs: { introduction: "How can workers adapt to rapid technological changes in the job market?", body1: "The first adaptation strategy is continuous skills upgrading.", body2: "The second key is government-business collaboration on transition support.", conclusion: "Adapting to technological change requires individual initiative combined with institutional support." },
    vocabulary: ["reskilling imperative", "lifelong learning", "future-ready workforce", "just transition", "career adaptability"]
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
    structure: { introduction: "[话题]是中国发展的重要成就。CGTN的报道提供了丰富的第一手资料。", body1: "精准扶贫的一个主要优势是[好处1]。[报道]展示[成就]。", body2: "然而，项目实施也面临[挑战]。[分析]指出[问题]。", conclusion: "总体而言，[总结]。[启示]对[更广泛意义]。" },
    fullParagraphs: { introduction: "Targeted poverty alleviation has been one of China's most ambitious development programs.", body1: "One major advantage of targeted poverty alleviation is its precision approach.", body2: "However, the program also faced challenges.", conclusion: "Overall, China's targeted poverty alleviation offers valuable lessons for global development." },
    vocabulary: ["targeted poverty alleviation", "precision assistance", "rural development", "inclusive growth", "development experience"]
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
    structure: { introduction: "[话题]是[名人]在慈善工作中反复思考的问题。", body1: "支持富人有更大责任的观点认为[理由]。[名人]通过[案例]展示了[方式]。", body2: "反对意见则关注[问题]。[分析]认为[理由]。", conclusion: "在我看来，[个人观点]。[名人的信念]是[信念]。" },
    fullParagraphs: { introduction: "Should the wealthy have a greater responsibility to address global health issues?", body1: "Proponents argue that the wealthy have both the resources and the obligation to tackle global health challenges.", body2: "Critics question whether philanthropy is sufficient or whether systemic changes are needed.", conclusion: "While wealthy individuals can contribute significantly, they should complement rather than replace government responsibilities." },
    vocabulary: ["global health equity", "philanthropic leverage", "vaccine development", "public-private partnership", "systemic change"]
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
    structure: { introduction: "[问题]是[名人]近年投入大量资源的核心议题。", body1: "[名人]指出的第一个创新需求是[领域1]。[分析]认为[理由]。", body2: "第二个关键创新是[领域2]。[名人]相信[方向]。", conclusion: "总之，[总结]。[名人]的呼吁是[号召]。" },
    fullParagraphs: { introduction: "What innovations are needed to address climate change effectively?", body1: "Gates identifies clean energy innovation as the most crucial need.", body2: "The second key innovation area is agricultural technology.", conclusion: "Addressing climate change requires massive innovation investment across multiple sectors." },
    vocabulary: ["clean energy innovation", "carbon neutrality", "breakthrough technology", "sustainable agriculture", "green technology"]
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
    structure: { introduction: "[名言]——这是[名人]的信念，也是她用生命践行的使命。", body1: "首先，[名人]自己的故事证明了[观点]。[经历]展示了教育如何改变[个人/社区]。", body2: "其次，教育赋予[群体]力量。[名人]观察到[现象]。", conclusion: "总之，我完全同意[观点]。[名人]的勇气启示我们[启示]。" },
    fullParagraphs: { introduction: "Education is the most powerful weapon to change the world.", body1: "Firstly, Malala's own story proves the transformative power of education.", body2: "Secondly, education particularly transforms the lives of girls and women.", conclusion: "In conclusion, I completely agree that education is the most powerful weapon for positive change." },
    vocabulary: ["girls' education", "empowerment through learning", "gender equality", "access to education", "knowledge as power"]
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
    structure: { introduction: "[问题]是[名人]毕生奋斗的目标。全球仍有数百万儿童失学。", body1: "[名人]指出的第一个关键是[方法1]。[事实]显示[现状]。", body2: "第二个必要措施是[方法2]。[名人]强调[价值观]。", conclusion: "总之，[总结]。[名人]的愿景是[愿景]。" },
    fullParagraphs: { introduction: "How can we ensure quality education for all children globally?", body1: "Malala identifies adequate funding as the first essential step.", body2: "The second crucial measure is addressing discrimination and social norms.", conclusion: "Ensuring quality education for all requires both increased resources and changed attitudes." },
    vocabulary: ["universal education", "global learning crisis", "education financing", "gender barriers", "educational equity"]
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
    structure: { introduction: "[话题]。这是[名人]用行动和信息反复传达的讯息。", body1: "首先，[名人]指出[科学事实]。[数据]显示了[现状]。", body2: "其次，[名人]强调[行动的重要性]。[信念]是[理念]。", conclusion: "总之，我[同意程度][观点]。[名人]的坚持启示我们[启示]。" },
    fullParagraphs: { introduction: "Individual actions can make a significant difference in addressing climate change.", body1: "Firstly, Greta emphasizes that every fraction of global warming matters.", body2: "Secondly, individual actions create social and political momentum.", conclusion: "In conclusion, I strongly agree that individual actions matter significantly." },
    vocabulary: ["climate urgency", "individual responsibility", "social change", "youth activism", "emissions reduction"]
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
    structure: { introduction: "[问题]是[名人]从个人行动发展成全球运动的核心议题。", body1: "[名人]的第一次行动是[方式]。[行动]展示了[可能性]。", body2: "青年倡导的关键是[方法]。[名人]认为[理念]。", conclusion: "总之，[名人]的经验告诉我们[启示]。[号召]是[呼吁]。" },
    fullParagraphs: { introduction: "How can young people effectively advocate for climate action?", body1: "Greta's first climate strike began as an individual protest.", body2: "The key to effective youth advocacy is consistency and moral clarity.", conclusion: "Greta's experience teaches us that effective advocacy combines personal commitment with collective action." },
    vocabulary: ["youth activism", "climate strikes", "collective action", "political accountability", "intergenerational justice"]
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
    structure: { introduction: "[话题]是新冠疫情后全球关注的焦点。达沃斯论坛的研究提供了前瞻性分析。", body1: "远程工作的一个主要优势是[好处1]。[论坛研究]显示[数据]。", body2: "然而，也存在[挑战]。[分析]指出[问题]。", conclusion: "总体而言，[总结]。达沃斯的建议是[建议]。" },
    fullParagraphs: { introduction: "Remote work has become a defining feature of the post-pandemic economy.", body1: "One major advantage is increased flexibility and work-life balance.", body2: "However, challenges exist including social isolation and blurred work-life boundaries.", conclusion: "Overall, the future likely involves hybrid models combining remote and in-person work." },
    vocabulary: ["hybrid work models", "digital collaboration", "work-life integration", "remote productivity", "future of work"]
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
    structure: { introduction: "[问题]是[机构名称]持续关注的核心议题。发展中国家面临复杂的债务挑战。", body1: "[机构]指出的第一个管理策略是[方法1]。[分析]认为[理由]。", body2: "第二个关键措施是[方法2]。[专家建议]指出[方向]。", conclusion: "总之，[总结]。[机构]的建议是[建议]。" },
    fullParagraphs: { introduction: "How can developing countries manage sovereign debt while maintaining development progress?", body1: "The IMF advocates for strengthening debt management capacity.", body2: "The World Bank emphasizes the importance of debt sustainability analysis.", conclusion: "Managing sovereign debt requires both strong domestic institutions and international cooperation." },
    vocabulary: ["debt sustainability", "sovereign debt", "fiscal space", "debt restructuring", "development financing"]
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
    structure: { introduction: "[话题]。[名人]用自己的经历证明了这个观点的价值。", body1: "首先，[名人]经历了[失败]。[故事]教会他[教训]。", body2: "其次，失败培养了[能力]。[名人]认为[观点]。", conclusion: "总之，我完全同意[观点]。[名人]的启示是[启示]。" },
    fullParagraphs: { introduction: "Failure is an essential part of entrepreneurial success.", body1: "Firstly, Ma faced numerous rejections and failures before Alibaba's success.", body2: "Secondly, Ma believes failure builds resilience and creativity.", conclusion: "In conclusion, I completely agree that failure is essential for entrepreneurial success." },
    vocabulary: ["entrepreneurial resilience", "learning from failure", "persistent vision", "growth mindset", "adaptive strategy"]
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
    structure: { introduction: "[话题]是国际发展领域的重大议题。CGTN提供了独特的视角。", body1: "一方面，一带一路带来了[好处]。[媒体报道]展示[案例]。", body2: "另一方面，存在[关切]。[分析]指出[问题]。", conclusion: "在我看来，[个人观点]。[总结]。" },
    fullParagraphs: { introduction: "The Belt and Road Initiative brings more benefits than harms to participating countries.", body1: "On one hand, Belt and Road projects have built much-needed infrastructure across developing regions.", body2: "On the other hand, critics raise concerns about debt sustainability and transparency.", conclusion: "In my opinion, Belt and Road offers both opportunities and challenges." },
    vocabulary: ["infrastructure connectivity", "development financing", "south-south cooperation", "global development", "mutual benefit"]
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
    structure: { introduction: "[话题]是UNDP人类发展报告长期倡导的理念。单一GDP指标存在局限性。", body1: "支持超越GDP的观点认为[理由]。[报告]显示[数据]。", body2: "然而，反对意见认为[观点]。[分析]指出[理由]。", conclusion: "在我看来，[个人观点]。[建议]是[方向]。" },
    fullParagraphs: { introduction: "Economic growth should be measured beyond GDP alone.", body1: "Proponents argue that GDP fails to capture crucial aspects of wellbeing.", body2: "Critics argue that GDP remains essential for economic planning and investment.", conclusion: "In my opinion, GDP should be complemented rather than replaced by broader measures." },
    vocabulary: ["Human Development Index", "beyond GDP", "inclusive development", "wellbeing indicators", "sustainable development"]
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
    structure: { introduction: "[问题]是[机构]在达沃斯论坛上反复讨论的重要议题。社交媒体影响日益显著。", body1: "[机构]指出的第一个应对策略是[方法1]。[研究]显示[数据]。", body2: "第二个关键是[方法2]。[分析]认为[方向]。", conclusion: "总之，[总结]。[呼吁]是[号召]。" },
    fullParagraphs: { introduction: "How can society address the mental health crisis exacerbated by social media?", body1: "The Forum identifies digital literacy education as the first crucial strategy.", body2: "The second key strategy involves platform accountability.", conclusion: "Addressing social media's mental health impacts requires both individual empowerment and systemic change." },
    vocabulary: ["digital wellbeing", "social media literacy", "platform accountability", "mental health crisis", "youth protection"]
  }
];

function formatTemplate(template, indent) {
  const spaces = '  '.repeat(indent);
  const innerSpaces = '  '.repeat(indent + 1);
  const deepSpaces = '  '.repeat(indent + 2);
  const deeperSpaces = '  '.repeat(indent + 3);
  
  let result = `${spaces}{\n`;
  result += `${innerSpaces}id: ${template.id},\n`;
  result += `${innerSpaces}title: "${template.title}",\n`;
  result += `${innerSpaces}type: "${template.type}",\n`;
  result += `${innerSpaces}topic: "${template.topic}",\n`;
  
  if (template.speaker) {
    result += `${innerSpaces}speaker: "${template.speaker}",\n`;
  }
  if (template.speakerTitle) {
    result += `${innerSpaces}speakerTitle: "${template.speakerTitle}",\n`;
  }
  if (template.style) {
    result += `${innerSpaces}style: "${template.style}",\n`;
  }
  if (template.styleNote) {
    result += `${innerSpaces}styleNote: "${template.styleNote}",\n`;
  }
  
  result += `${innerSpaces}structure: {\n`;
  result += `${deepSpaces}introduction: "${template.structure.introduction}",\n`;
  result += `${deepSpaces}body1: "${template.structure.body1}",\n`;
  result += `${deepSpaces}body2: "${template.structure.body2}",\n`;
  result += `${deepSpaces}conclusion: "${template.structure.conclusion}"\n`;
  result += `${innerSpaces}},\n`;
  
  result += `${innerSpaces}fullParagraphs: {\n`;
  result += `${deepSpaces}introduction: "${template.fullParagraphs.introduction}",\n`;
  result += `${deepSpaces}body1: "${template.fullParagraphs.body1}",\n`;
  result += `${deepSpaces}body2: "${template.fullParagraphs.body2}",\n`;
  result += `${deepSpaces}conclusion: "${template.fullParagraphs.conclusion}"\n`;
  result += `${innerSpaces}},\n`;
  
  result += `${innerSpaces}vocabulary: [\n`;
  template.vocabulary.forEach((word, index) => {
    result += `${deeperSpaces}"${word}"${index < template.vocabulary.length - 1 ? ',' : ''}\n`;
  });
  result += `${innerSpaces}]\n`;
  
  result += `${spaces}}`;
  
  return result;
}

const content = fs.readFileSync('./src/data/writing.ts', 'utf8');
const templatesStr = newCelebrityTemplates.map((t) => formatTemplate(t, 2)).join(',\n');

const lines = content.split('\n');
let insideArray = false;
let arrayEndIndex = -1;

for (let i = 0; i < lines.length; i++) {
  if (lines[i].includes('export const essayTemplates:')) {
    insideArray = true;
  }
  if (insideArray && lines[i].trim() === '];') {
    arrayEndIndex = i;
    break;
  }
}

if (arrayEndIndex === -1) {
  console.error('Could not find essayTemplates array');
  process.exit(1);
}

lines.splice(arrayEndIndex, 0, ',\n' + templatesStr);

fs.writeFileSync('./src/data/writing.ts', lines.join('\n'), 'utf8');
console.log(`Added ${newCelebrityTemplates.length} celebrity essay templates successfully!`);
console.log(`Total templates now: 95 + ${newCelebrityTemplates.length} = ${95 + newCelebrityTemplates.length}`);
