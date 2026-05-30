import { SentencePattern, SynonymGroup, EssayTemplate, RootGroup, PrefixGroup, SuffixGroup } from '@/services/database';

export const sentencePatterns: SentencePattern[] = [
  {
    id: 1,
    pattern: 'It is widely believed that ...',
    explanation: '用于引出普遍观点或共识',
    example: 'It is widely believed that education is the key to success.',
    type: 'argument'
  },
  {
    id: 2,
    pattern: 'There is compelling evidence to suggest that ...',
    explanation: '用于提出有证据支持的论点',
    example: 'There is compelling evidence to suggest that climate change is accelerating.',
    type: 'argument'
  },
  {
    id: 3,
    pattern: 'One of the primary reasons for ... is ...',
    explanation: '用于分析主要原因',
    example: 'One of the primary reasons for urbanization is economic opportunity.',
    type: 'cause'
  },
  {
    id: 4,
    pattern: 'As a direct consequence of ..., ...',
    explanation: '用于表达直接结果',
    example: 'As a direct consequence of technological advancements, communication has become instantaneous.',
    type: 'effect'
  },
  {
    id: 5,
    pattern: 'While it is true that ..., it is also important to consider ...',
    explanation: '用于对比不同观点',
    example: 'While it is true that technology has improved efficiency, it is also important to consider its impact on employment.',
    type: 'comparison'
  },
  {
    id: 6,
    pattern: 'For instance, ...',
    explanation: '用于举例说明',
    example: 'For instance, renewable energy sources like solar and wind power are becoming increasingly affordable.',
    type: 'example'
  },
  {
    id: 7,
    pattern: 'In conclusion, ...',
    explanation: '用于总结观点',
    example: 'In conclusion, both approaches have their merits, and a balanced solution is needed.',
    type: 'conclusion'
  },
  {
    id: 8,
    pattern: 'Despite the fact that ..., ...',
    explanation: '用于表达让步',
    example: 'Despite the fact that social media has drawbacks, it remains a powerful tool for communication.',
    type: 'argument'
  },
  {
    id: 9,
    pattern: 'This can be attributed to ...',
    explanation: '用于归因',
    example: 'This can be attributed to changes in consumer behavior and preferences.',
    type: 'cause'
  },
  {
    id: 10,
    pattern: 'A case in point is ...',
    explanation: '用于举具体例子',
    example: 'A case in point is the rapid growth of e-commerce platforms like Amazon.',
    type: 'example'
  },
  {
    id: 11,
    pattern: 'In comparison to ..., ...',
    explanation: '用于比较',
    example: 'In comparison to traditional methods, digital learning offers greater flexibility.',
    type: 'comparison'
  },
  {
    id: 12,
    pattern: 'As a result, ...',
    explanation: '用于表达结果',
    example: 'As a result, many companies are investing in sustainable practices.',
    type: 'effect'
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
      { word: 'highlight', level: 'IELTS6' }
    ]
  },
  {
    id: 3,
    word: 'think',
    synonyms: [
      { word: 'believe', level: 'IELTS5' },
      { word: 'consider', level: 'IELTS5' },
      { word: 'argue', level: 'IELTS6' },
      { word: 'contend', level: 'IELTS7' },
      { word: 'maintain', level: 'IELTS6' }
    ]
  },
  {
    id: 4,
    word: 'good',
    synonyms: [
      { word: 'beneficial', level: 'IELTS6' },
      { word: 'advantageous', level: 'IELTS7' },
      { word: 'positive', level: 'IELTS5' },
      { word: 'favorable', level: 'IELTS6' },
      { word: 'constructive', level: 'IELTS7' }
    ]
  },
  {
    id: 5,
    word: 'bad',
    synonyms: [
      { word: 'negative', level: 'IELTS5' },
      { word: 'detrimental', level: 'IELTS7' },
      { word: 'harmful', level: 'IELTS6' },
      { word: 'adverse', level: 'IELTS7' },
      { word: 'undesirable', level: 'IELTS7' }
    ]
  },
  {
    id: 6,
    word: 'help',
    synonyms: [
      { word: 'assist', level: 'IELTS5' },
      { word: 'support', level: 'IELTS5' },
      { word: 'facilitate', level: 'IELTS7' },
      { word: 'aid', level: 'IELTS6' },
      { word: 'enable', level: 'IELTS6' }
    ]
  },
  {
    id: 7,
    word: 'use',
    synonyms: [
      { word: 'utilize', level: 'IELTS6' },
      { word: 'employ', level: 'IELTS6' },
      { word: 'apply', level: 'IELTS5' },
      { word: 'exploit', level: 'IELTS7' },
      { word: 'leverage', level: 'IELTS7' }
    ]
  },
  {
    id: 8,
    word: 'increase',
    synonyms: [
      { word: 'rise', level: 'IELTS5' },
      { word: 'grow', level: 'IELTS5' },
      { word: 'escalate', level: 'IELTS7' },
      { word: 'expand', level: 'IELTS6' },
      { word: 'surge', level: 'IELTS7' }
    ]
  },
  {
    id: 9,
    word: 'decrease',
    synonyms: [
      { word: 'decline', level: 'IELTS6' },
      { word: 'reduce', level: 'IELTS5' },
      { word: 'diminish', level: 'IELTS7' },
      { word: 'fall', level: 'IELTS5' },
      { word: 'drop', level: 'IELTS5' }
    ]
  },
  {
    id: 10,
    word: 'get',
    synonyms: [
      { word: 'obtain', level: 'IELTS6' },
      { word: 'acquire', level: 'IELTS6' },
      { word: 'gain', level: 'IELTS5' },
      { word: 'attain', level: 'IELTS7' },
      { word: 'secure', level: 'IELTS6' }
    ]
  }
];

export const essayTemplates: EssayTemplate[] = [
  {
    id: 1,
    title: '同意/不同意题型模板',
    type: 'agree/disagree',
    topic: '通用',
    structure: {
      introduction: '引入话题 + 表达观点',
      body1: '支持观点的第一个理由',
      body2: '支持观点的第二个理由',
      conclusion: '总结观点'
    },
    fullParagraphs: {
      introduction: 'In recent years, the issue of [话题] has sparked heated debate. While some people argue that [反方观点], I firmly believe that [正方观点]. This essay will explain why I hold this opinion.',
      body1: 'One compelling reason to support this view is [第一个理由]. For example, [举例说明]. This demonstrates that [解释例子]. Furthermore, [进一步说明].',
      body2: 'Another key argument is [第二个理由]. Research shows that [引用研究/数据]. Additionally, [补充说明]. This highlights the importance of [重申观点].',
      conclusion: 'In conclusion, I strongly agree with the view that [重申观点]. The evidence presented suggests that [总结理由]. Therefore, it is clear that [结论].'
    },
    vocabulary: ['compelling', 'demonstrate', 'furthermore', 'highlight', 'evidence', 'conclusion']
  },
  {
    id: 2,
    title: '双边讨论题型模板',
    type: 'discuss both views',
    topic: '通用',
    structure: {
      introduction: '介绍话题',
      body1: '讨论第一个观点',
      body2: '讨论第二个观点',
      conclusion: '给出个人观点'
    },
    fullParagraphs: {
      introduction: 'There is an ongoing debate about [话题]. Some people support [观点1], while others advocate for [观点2]. This essay will examine both perspectives before presenting my own opinion.',
      body1: 'Those who support [观点1] argue that [理由1]. For instance, [举例]. This shows that [解释]. Moreover, [补充].',
      body2: 'On the other hand, proponents of [观点2] contend that [理由2]. They point out that [证据]. Additionally, [进一步说明].',
      conclusion: 'After considering both views, I believe [个人观点]. While [承认对立面], the benefits of [支持观点] outweigh the drawbacks. Therefore, [结论].'
    },
    vocabulary: ['ongoing', 'advocate', 'perspective', 'contend', 'outweigh', 'drawbacks']
  },
  {
    id: 3,
    title: '优缺点题型模板',
    type: 'advantages/disadvantages',
    topic: '通用',
    structure: {
      introduction: '介绍话题',
      body1: '讨论优点',
      body2: '讨论缺点',
      conclusion: '总结并给出观点'
    },
    fullParagraphs: {
      introduction: '[话题] has become increasingly prevalent in modern society. This trend brings both benefits and drawbacks, which will be discussed in this essay.',
      body1: 'One major advantage of [话题] is [优点1]. For example, [举例]. This leads to [积极结果]. Furthermore, [优点2].',
      body2: 'However, there are also significant disadvantages. One concern is [缺点1]. Studies show that [证据]. Another issue is [缺点2].',
      conclusion: 'Overall, while [话题] offers certain benefits such as [优点], it also presents challenges like [缺点]. In my opinion, the advantages/disadvantages prevail, and [总结].'
    },
    vocabulary: ['prevalent', 'significant', 'concern', 'prevail', 'overall', 'challenges']
  },
  {
    id: 4,
    title: '问题解决题型模板',
    type: 'problem/solution',
    topic: '通用',
    structure: {
      introduction: '介绍问题',
      body1: '分析原因',
      body2: '提出解决方案',
      conclusion: '总结'
    },
    fullParagraphs: {
      introduction: '[问题] has emerged as a pressing issue in recent years. This essay will explore the causes of this problem and propose potential solutions.',
      body1: 'There are several factors contributing to [问题]. One primary cause is [原因1]. For instance, [举例]. Another factor is [原因2].',
      body2: 'To address this issue, several solutions can be implemented. Firstly, [解决方案1]. This would involve [具体措施]. Secondly, [解决方案2]. Additionally, [解决方案3].',
      conclusion: 'In conclusion, [问题] is caused by [总结原因]. By implementing [解决方案], we can effectively tackle this problem and create a better future.'
    },
    vocabulary: ['pressing', 'contributing', 'implement', 'effectively', 'tackle', 'potential']
  },
  {
    id: 5,
    title: '科技类话题模板',
    type: 'agree/disagree',
    topic: 'Technology',
    structure: {
      introduction: '引入科技话题',
      body1: '科技的好处',
      body2: '科技的挑战',
      conclusion: '平衡观点'
    },
    fullParagraphs: {
      introduction: 'Technological advancements have transformed every aspect of modern life. While some celebrate these innovations, others express concern about their impact.',
      body1: 'Technology has brought numerous benefits. Communication has become instantaneous, connecting people across the globe. For example, video conferencing allows businesses to operate globally. Additionally, medical technology has improved healthcare outcomes.',
      body2: 'However, technology also presents challenges. Privacy concerns have grown with increased data collection. Moreover, automation threatens traditional jobs. There are also concerns about screen addiction and its impact on mental health.',
      conclusion: 'In my view, technology is a powerful tool that should be used responsibly. While it offers significant benefits, we must address its challenges through thoughtful regulation and mindful usage.'
    },
    vocabulary: ['transformed', 'innovations', 'instantaneous', 'automation', 'regulation', 'mindful']
  },
  {
    id: 6,
    title: '教育类话题模板',
    type: 'discuss both views',
    topic: 'Education',
    structure: {
      introduction: '引入教育话题',
      body1: '传统教育的优点',
      body2: '现代教育的优点',
      conclusion: '综合观点'
    },
    fullParagraphs: {
      introduction: 'Education is the cornerstone of societal development. There is ongoing debate about the best approaches to teaching and learning.',
      body1: 'Traditional education methods have proven effective for centuries. Classroom-based learning fosters face-to-face interaction and immediate feedback. Teachers can adapt lessons to meet students\' needs, creating personalized learning experiences.',
      body2: 'Modern approaches, such as online learning, offer flexibility and accessibility. Students can access educational resources from anywhere, breaking down geographical barriers. Technology also enables interactive and engaging learning experiences.',
      conclusion: 'The best educational approach combines the strengths of both traditional and modern methods. By integrating technology into traditional classrooms, we can create a comprehensive learning environment that maximizes student potential.'
    },
    vocabulary: ['cornerstone', 'interaction', 'flexibility', 'accessibility', 'comprehensive', 'potential']
  },
  {
    id: 7,
    title: '环境类话题模板',
    type: 'problem/solution',
    topic: 'Environment',
    structure: {
      introduction: '引入环境问题',
      body1: '问题的严重性',
      body2: '解决方案',
      conclusion: '呼吁行动'
    },
    fullParagraphs: {
      introduction: 'Environmental degradation has become one of the most pressing issues facing humanity today. Climate change, pollution, and deforestation threaten ecosystems and human well-being.',
      body1: 'The scale of environmental damage is alarming. Rising global temperatures are causing extreme weather events, melting polar ice caps, and disrupting ecosystems. Pollution from industrial activities and plastic waste is contaminating oceans and harming wildlife.',
      body2: 'Addressing these challenges requires collective action. Governments must implement stricter environmental regulations and invest in renewable energy sources. Individuals can contribute by reducing carbon footprints, recycling, and supporting sustainable practices.',
      conclusion: 'The environment is our shared responsibility. By taking immediate and decisive action, we can mitigate damage and create a sustainable future for generations to come.'
    },
    vocabulary: ['degradation', 'pressing', 'ecosystems', 'contaminating', 'mitigate', 'sustainable']
  },
  {
    id: 8,
    title: '社会类话题模板',
    type: 'discuss both views',
    topic: 'Society',
    structure: {
      introduction: '引入社会问题',
      body1: '支持观点',
      body2: '反对观点',
      conclusion: '个人观点'
    },
    fullParagraphs: {
      introduction: 'Modern society faces numerous challenges that spark debate about values and priorities. One such issue is [话题], which divides public opinion.',
      body1: 'Supporters argue that [支持观点]. They believe that [理由]. For example, [举例]. This approach promotes [积极影响].',
      body2: 'Critics, however, contend that [反对观点]. They point out that [理由]. There are concerns about [负面影响].',
      conclusion: 'After weighing both perspectives, I believe [个人观点]. While there are valid concerns on both sides, [支持观点] offers greater benefits for society as a whole.'
    },
    vocabulary: ['divides', 'promotes', 'contend', 'valid', 'perspectives', 'benefits']
  },
  {
    id: 9,
    title: '文化类话题模板',
    type: 'advantages/disadvantages',
    topic: 'Culture',
    structure: {
      introduction: '介绍文化现象',
      body1: '文化交流的好处',
      body2: '文化同质化的风险',
      conclusion: '平衡观点'
    },
    fullParagraphs: {
      introduction: 'Globalization has led to unprecedented cultural exchange, bringing people from different backgrounds closer together. This trend has both positive and negative implications.',
      body1: 'Cultural exchange enriches societies by fostering understanding and appreciation of diversity. Exposure to different traditions, art, and cuisine broadens perspectives and promotes tolerance. It also encourages creativity and innovation through cross-cultural collaboration.',
      body2: 'However, there is a risk of cultural homogenization, where local traditions are overshadowed by dominant global cultures. This can lead to the loss of unique cultural practices and languages. There are also concerns about cultural appropriation and misrepresentation.',
      conclusion: 'Cultural exchange should be celebrated, but it must be balanced with efforts to preserve local traditions. By embracing diversity while protecting cultural heritage, we can create a more inclusive and vibrant global community.'
    },
    vocabulary: ['unprecedented', 'fostering', 'tolerance', 'homogenization', 'appropriation', 'heritage']
  },
  {
    id: 10,
    title: '经济类话题模板',
    type: 'agree/disagree',
    topic: 'Economy',
    structure: {
      introduction: '引入经济观点',
      body1: '支持理由',
      body2: '反对理由',
      conclusion: '个人观点'
    },
    fullParagraphs: {
      introduction: 'Economic policies and practices are often the subject of intense debate. One controversial issue is [话题], which has significant implications for prosperity and equity.',
      body1: 'Proponents argue that [支持观点]. They claim that [理由]. For instance, [举例]. This approach has led to [积极结果].',
      body2: 'Opponents, however, argue that [反对观点]. They highlight [理由]. There are concerns about [负面影响], particularly for vulnerable groups.',
      conclusion: 'While both arguments have merit, I believe [个人观点]. A balanced approach that considers both economic growth and social equity is essential for sustainable development.'
    },
    vocabulary: ['controversial', 'proponents', 'vulnerable', 'merit', 'equity', 'sustainable']
  },
  {
    id: 11,
    title: '媒体类话题模板',
    type: 'discuss both views',
    topic: 'Media',
    structure: {
      introduction: '介绍媒体影响',
      body1: '媒体的正面作用',
      body2: '媒体的负面影响',
      conclusion: '平衡观点'
    },
    fullParagraphs: {
      introduction: 'The media plays a central role in shaping public opinion and disseminating information. Its influence on society is both profound and complex.',
      body1: 'The media serves as a vital source of information, keeping the public informed about current events and issues. It also acts as a watchdog, holding those in power accountable. Additionally, media can inspire positive change by raising awareness about important causes.',
      body2: 'However, the media also has drawbacks. Sensationalism and bias can distort public perception. There are concerns about misinformation and fake news spreading rapidly through social media. Media can also perpetuate stereotypes and promote unrealistic standards.',
      conclusion: 'The media is a powerful tool that should be used responsibly. While it offers many benefits, we must critically evaluate the information we consume and support media that prioritizes accuracy and integrity.'
    },
    vocabulary: ['disseminating', 'watchdog', 'sensationalism', 'perpetuate', 'stereotypes', 'integrity']
  },
  {
    id: 12,
    title: '工作类话题模板',
    type: 'advantages/disadvantages',
    topic: 'Work',
    structure: {
      introduction: '介绍工作趋势',
      body1: '优点分析',
      body2: '缺点分析',
      conclusion: '总结观点'
    },
    fullParagraphs: {
      introduction: 'The nature of work is evolving rapidly, with new trends emerging that transform how people approach their careers. [话题] is one such trend that has gained significant attention.',
      body1: 'One major advantage of [话题] is [优点1]. For example, [举例]. This leads to [积极结果]. Another benefit is [优点2], which enhances [方面].',
      body2: 'Despite these benefits, there are challenges. [缺点1] can be problematic, as [解释]. Additionally, [缺点2] may impact [方面].',
      conclusion: 'Overall, [话题] offers both opportunities and challenges. By addressing the drawbacks while leveraging the benefits, individuals and organizations can thrive in this changing landscape.'
    },
    vocabulary: ['evolving', 'significant', 'leverage', 'landscape', 'opportunities', 'thrive']
  },
  {
    id: 13,
    title: '健康类话题模板',
    type: 'problem/solution',
    topic: 'Health',
    structure: {
      introduction: '引入健康问题',
      body1: '问题分析',
      body2: '解决方案',
      conclusion: '呼吁行动'
    },
    fullParagraphs: {
      introduction: 'Public health challenges continue to affect communities worldwide. [健康问题] has emerged as a critical issue that requires attention and action.',
      body1: 'The prevalence of [健康问题] has increased significantly in recent years. Factors contributing to this include [原因1] and [原因2]. This issue has serious consequences for individuals and healthcare systems.',
      body2: 'Addressing [健康问题] requires a multi-faceted approach. Education and awareness campaigns can help prevent [问题]. Additionally, policy changes and access to resources are essential for supporting those affected.',
      conclusion: 'Improving public health is essential for individual well-being and societal progress. By working together, we can create healthier communities and a better quality of life for all.'
    },
    vocabulary: ['prevalence', 'multi-faceted', 'campaigns', 'policy', 'resources', 'well-being']
  },
  {
    id: 14,
    title: '城市类话题模板',
    type: 'advantages/disadvantages',
    topic: 'Urbanization',
    structure: {
      introduction: '介绍城市化',
      body1: '城市化的好处',
      body2: '城市化的挑战',
      conclusion: '展望未来'
    },
    fullParagraphs: {
      introduction: 'Urbanization is transforming societies as more people move to cities in search of opportunities. This trend brings both benefits and challenges.',
      body1: 'Cities offer economic opportunities, access to education and healthcare, and cultural experiences. They are centers of innovation and creativity, driving economic growth. Urban living also promotes social interaction and diversity.',
      body2: 'However, rapid urbanization leads to challenges such as overcrowding, traffic congestion, and pollution. Housing affordability becomes a pressing issue, and there are strains on infrastructure and public services.',
      conclusion: 'Urbanization is inevitable, but it must be managed sustainably. By planning cities that prioritize sustainability, affordability, and quality of life, we can create urban environments that benefit everyone.'
    },
    vocabulary: ['transforming', 'innovation', 'congestion', 'infrastructure', 'inevitable', 'prioritize']
  },
  {
    id: 15,
    title: '家庭类话题模板',
    type: 'discuss both views',
    topic: 'Family',
    structure: {
      introduction: '引入家庭话题',
      body1: '传统家庭观念',
      body2: '现代家庭模式',
      conclusion: '个人观点'
    },
    fullParagraphs: {
      introduction: 'The concept of family has evolved significantly over time, reflecting changes in society and values. There is ongoing debate about what constitutes a "traditional" family.',
      body1: 'Traditional family structures emphasize stability and intergenerational support. Extended families provide emotional and practical support, fostering strong bonds. This model has been the foundation of societies for centuries.',
      body2: 'Modern family structures are more diverse, including single-parent families, blended families, and same-sex parent families. These models reflect changing social norms and individual choices. They offer flexibility and adaptability to modern lifestyles.',
      conclusion: 'While traditional family structures have merit, modern families also provide valuable contributions to society. What matters most is the love, support, and stability that families provide, regardless of their structure.'
    },
    vocabulary: ['evolved', 'intergenerational', 'blended', 'norms', 'flexibility', 'adaptability']
  },
  {
    id: 16,
    title: '全球化话题模板',
    type: 'agree/disagree',
    topic: 'Globalization',
    structure: {
      introduction: '引入全球化观点',
      body1: '支持全球化',
      body2: '反对全球化',
      conclusion: '平衡观点'
    },
    fullParagraphs: {
      introduction: 'Globalization has become a defining feature of the modern world, connecting economies, cultures, and people across borders. Opinions on its impact are divided.',
      body1: 'Supporters argue that globalization promotes economic growth by creating new markets and opportunities. It enables the sharing of ideas, technology, and innovation globally. Cultural exchange also enriches societies and promotes understanding.',
      body2: 'Critics contend that globalization has negative consequences, including economic inequality and cultural homogenization. There are concerns about job losses in developed countries and exploitation in developing nations.',
      conclusion: 'Globalization is neither inherently good nor bad. Its benefits can be maximized while mitigating its drawbacks through fair trade policies, sustainable development practices, and respect for cultural diversity.'
    },
    vocabulary: ['defining', 'enables', 'homogenization', 'exploitation', 'mitigating', 'diversity']
  },
  {
    id: 17,
    title: '科技教育模板',
    type: 'agree/disagree',
    topic: 'Technology in Education',
    structure: {
      introduction: '引入科技教育',
      body1: '科技的好处',
      body2: '潜在问题',
      conclusion: '合理使用'
    },
    fullParagraphs: {
      introduction: 'Technology has revolutionized education, offering new tools and approaches to teaching and learning. However, its role in education remains a topic of debate.',
      body1: 'Educational technology enhances learning through interactive tools, personalized content, and access to vast resources. It enables flexible learning environments and prepares students for the digital age. Technology also makes education more accessible to remote and marginalized communities.',
      body2: 'There are concerns about over-reliance on technology, which may reduce face-to-face interaction and critical thinking skills. Digital divides can exacerbate educational inequalities. There are also concerns about screen time and its impact on well-being.',
      conclusion: 'Technology should be used as a tool to enhance, not replace, traditional teaching methods. By integrating technology thoughtfully, we can create more engaging and effective learning experiences.'
    },
    vocabulary: ['revolutionized', 'personalized', 'marginalized', 'exacerbate', 'inequalities', 'integrating']
  },
  {
    id: 18,
    title: '政府角色模板',
    type: 'discuss both views',
    topic: 'Government Role',
    structure: {
      introduction: '引入政府角色',
      body1: '大政府观点',
      body2: '小政府观点',
      conclusion: '平衡观点'
    },
    fullParagraphs: {
      introduction: 'The role of government in society is a fundamental question that shapes political discourse. There are contrasting views on how involved governments should be in citizens\' lives.',
      body1: 'Advocates for a larger government argue that it should provide essential services like healthcare, education, and social security. They believe government intervention is necessary to address inequality and protect vulnerable populations. Strong regulation can also prevent exploitation and ensure public safety.',
      body2: 'Supporters of smaller government emphasize individual freedom and limited state intervention. They argue that excessive regulation stifles innovation and economic growth. Individuals should have the freedom to make their own choices without government interference.',
      conclusion: 'The optimal role of government lies between these extremes. Governments should provide essential services and protection while respecting individual freedoms. A balanced approach ensures both social welfare and personal autonomy.'
    },
    vocabulary: ['fundamental', 'discourse', 'advocates', 'stifles', 'interference', 'autonomy']
  },
  {
    id: 19,
    title: '移民话题模板',
    type: 'advantages/disadvantages',
    topic: 'Immigration',
    structure: {
      introduction: '介绍移民现象',
      body1: '移民的好处',
      body2: '移民的挑战',
      conclusion: '综合观点'
    },
    fullParagraphs: {
      introduction: 'Immigration has become a significant global phenomenon, with people moving across borders for various reasons. This trend has both positive and negative impacts on societies.',
      body1: 'Immigration brings economic benefits by filling labor shortages and contributing to economic growth. Immigrants often start businesses and drive innovation. They also enrich cultural diversity, bringing new perspectives and traditions.',
      body2: 'However, immigration can strain public services and create social tensions. There may be competition for jobs and resources, leading to resentment. Integration challenges can also create divisions within communities.',
      conclusion: 'Immigration is a complex issue that requires thoughtful management. By implementing fair immigration policies and supporting integration, societies can harness the benefits of immigration while addressing its challenges.'
    },
    vocabulary: ['significant', 'shortages', 'resentment', 'integration', 'harness', 'thoughtful']
  },
  {
    id: 20,
    title: '消费主义模板',
    type: 'problem/solution',
    topic: 'Consumerism',
    structure: {
      introduction: '引入消费主义',
      body1: '问题分析',
      body2: '解决方案',
      conclusion: '呼吁改变'
    },
    fullParagraphs: {
      introduction: 'Consumerism has become a dominant force in modern society, driving economic growth but also creating significant challenges.',
      body1: 'Excessive consumerism contributes to environmental degradation through overproduction and waste. It also promotes materialism, which can lead to dissatisfaction and mental health issues. There are concerns about debt and unsustainable spending habits.',
      body2: 'Addressing consumerism requires a shift in values and behavior. Education about sustainable consumption can help individuals make informed choices. Governments and businesses can promote sustainable practices and products. Community initiatives can encourage sharing and reducing waste.',
      conclusion: 'Moving away from excessive consumerism is essential for environmental sustainability and personal well-being. By embracing mindful consumption, we can create a more balanced and sustainable way of life.'
    },
    vocabulary: ['dominant', 'overproduction', 'materialism', 'unsustainable', 'mindful', 'balanced']
  },
  {
    id: 21,
    title: '社交媒体模板',
    type: 'discuss both views',
    topic: 'Social Media',
    structure: {
      introduction: '引入社交媒体',
      body1: '社交媒体的好处',
      body2: '社交媒体的负面影响',
      conclusion: '合理使用'
    },
    fullParagraphs: {
      introduction: 'Social media has transformed how people communicate and connect, becoming an integral part of modern life. Its impact on individuals and society is complex.',
      body1: 'Social media enables instant communication and connection with friends, family, and communities worldwide. It provides a platform for sharing ideas, raising awareness about important issues, and building support networks. Social media also offers opportunities for education and entertainment.',
      body2: 'However, social media has significant drawbacks. It can contribute to social isolation, cyberbullying, and mental health issues. There are concerns about privacy, misinformation, and addiction. Social media can also create unrealistic expectations and promote unhealthy comparisons.',
      conclusion: 'Social media is a powerful tool that should be used mindfully. By setting boundaries, critically evaluating content, and prioritizing real-world connections, we can enjoy its benefits while minimizing its negative impacts.'
    },
    vocabulary: ['integral', 'platform', 'isolation', 'cyberbullying', 'addiction', 'mindfully']
  },
  {
    id: 22,
    title: '传统文化保护模板',
    type: 'agree/disagree',
    topic: 'Cultural Preservation',
    structure: {
      introduction: '引入文化保护',
      body1: '支持保护',
      body2: '反对观点',
      conclusion: '平衡观点'
    },
    fullParagraphs: {
      introduction: 'Preserving traditional culture has become increasingly important as globalization and modernization reshape societies. There is debate about how to balance preservation with progress.',
      body1: 'Preserving cultural heritage maintains a connection to our history and identity. Traditional practices, art, and languages are valuable resources that enrich societies. Cultural preservation also promotes tourism and economic development.',
      body2: 'Some argue that excessive preservation can hinder progress and innovation. They believe societies should embrace change and modernization. There are also practical challenges in maintaining traditions in a rapidly changing world.',
      conclusion: 'Cultural preservation and progress can coexist. By valuing traditions while embracing innovation, societies can honor their past while building a vibrant future.'
    },
    vocabulary: ['reshape', 'heritage', 'identity', 'hinder', 'practical', 'vibrant']
  },
  {
    id: 23,
    title: '科技与隐私模板',
    type: 'problem/solution',
    topic: 'Technology and Privacy',
    structure: {
      introduction: '引入隐私问题',
      body1: '问题严重性',
      body2: '解决方案',
      conclusion: '呼吁保护'
    },
    fullParagraphs: {
      introduction: 'Advancements in technology have raised significant concerns about privacy in the digital age. The collection and use of personal data have become major issues for individuals and societies.',
      body1: 'Privacy is increasingly threatened by surveillance technologies, data breaches, and corporate data collection. Individuals often have little control over how their personal information is used. There are also concerns about government surveillance and the potential for misuse of data.',
      body2: 'Protecting privacy requires comprehensive data protection laws and regulations. Individuals can take steps to protect their online privacy through secure practices. Technology companies must be held accountable for responsible data handling. Education about digital privacy is also essential.',
      conclusion: 'Privacy is a fundamental right that must be protected in the digital age. By implementing strong regulations and promoting digital literacy, we can create a safer and more secure online environment.'
    },
    vocabulary: ['advancements', 'surveillance', 'breaches', 'accountable', 'literacy', 'fundamental']
  },
  {
    id: 24,
    title: '教育公平模板',
    type: 'problem/solution',
    topic: 'Educational Equity',
    structure: {
      introduction: '引入教育公平',
      body1: '不平等现象',
      body2: '解决方案',
      conclusion: '呼吁行动'
    },
    fullParagraphs: {
      introduction: 'Educational equity remains a significant challenge worldwide, with disparities in access and quality affecting millions of students.',
      body1: 'Educational inequality is evident in disparities between urban and rural areas, wealthy and disadvantaged communities, and different demographic groups. Factors like funding, resources, and teacher quality contribute to these gaps. The consequences include limited opportunities and perpetuated social inequality.',
      body2: 'Addressing educational equity requires targeted interventions. Increasing funding for under-resourced schools, improving teacher training, and expanding access to educational technology can help bridge gaps. Policies that promote inclusive education and support marginalized students are essential.',
      conclusion: 'Every child deserves access to quality education. By prioritizing educational equity, we can create a more just and equitable society where all individuals have the opportunity to reach their full potential.'
    },
    vocabulary: ['disparities', 'demographic', 'perpetuated', 'interventions', 'inclusive', 'equitable']
  },
  {
    id: 25,
    title: '老龄化社会模板',
    type: 'problem/solution',
    topic: 'Aging Society',
    structure: {
      introduction: '引入老龄化',
      body1: '挑战分析',
      body2: '应对策略',
      conclusion: '积极展望'
    },
    fullParagraphs: {
      introduction: 'Aging populations pose significant challenges for societies worldwide, requiring innovative solutions to support older adults and maintain social systems.',
      body1: 'Aging societies face challenges such as increased healthcare costs, pension system strains, and labor shortages. There are also social challenges, including isolation and caregiving burdens. These issues require proactive planning and investment.',
      body2: 'Addressing aging populations requires comprehensive strategies. Investing in healthcare and long-term care, promoting healthy aging, and creating age-friendly communities are essential. Encouraging older adults to remain active in the workforce and society can also bring benefits.',
      conclusion: 'Aging is a natural part of life, and societies can thrive by embracing it positively. With thoughtful planning and investment, we can create environments that support people of all ages.'
    },
    vocabulary: ['proactive', 'caregiving', 'comprehensive', 'embracing', 'workforce', 'thrive']
  },
  {
    id: 26,
    title: '人工智能模板',
    type: 'discuss both views',
    topic: 'Artificial Intelligence',
    structure: {
      introduction: '引入AI',
      body1: 'AI的好处',
      body2: 'AI的风险',
      conclusion: '负责任发展'
    },
    fullParagraphs: {
      introduction: 'Artificial intelligence is transforming industries and societies, offering unprecedented opportunities while raising important ethical and practical concerns.',
      body1: 'AI has the potential to revolutionize healthcare, transportation, education, and many other fields. It can improve efficiency, accuracy, and accessibility. AI-powered tools can assist in complex problem-solving and decision-making, benefiting individuals and organizations.',
      body2: 'However, AI also presents risks, including job displacement, bias in algorithms, and privacy concerns. There are ethical questions about autonomy and accountability. The rapid pace of AI development requires careful consideration of its implications.',
      conclusion: 'AI should be developed and used responsibly, with careful attention to ethics and human values. By fostering innovation while addressing risks, we can harness AI\'s potential for positive change.'
    },
    vocabulary: ['transforming', 'unprecedented', 'revolutionize', 'displacement', 'algorithms', 'implications']
  },
  {
    id: 27,
    title: '远程工作模板',
    type: 'advantages/disadvantages',
    topic: 'Remote Work',
    structure: {
      introduction: '介绍远程工作',
      body1: '优点分析',
      body2: '缺点分析',
      conclusion: '平衡观点'
    },
    fullParagraphs: {
      introduction: 'Remote work has become increasingly common, accelerated by technological advancements and global events. This shift has transformed how people work and live.',
      body1: 'Remote work offers flexibility, allowing employees to balance work and personal life better. It eliminates commuting time and costs, reduces carbon footprint, and provides access to a wider range of job opportunities. Many employees report increased productivity and job satisfaction.',
      body2: 'However, remote work has challenges. Maintaining work-life boundaries can be difficult, leading to burnout. There are also concerns about isolation, communication difficulties, and unequal access to resources. Some jobs require in-person collaboration and cannot be done remotely.',
      conclusion: 'Remote work is here to stay, but it requires thoughtful implementation. By creating supportive policies and fostering connection, organizations can maximize the benefits while addressing the challenges.'
    },
    vocabulary: ['accelerated', 'flexibility', 'commuting', 'burnout', 'collaboration', 'thoughtful']
  },
  {
    id: 28,
    title: '可持续发展模板',
    type: 'agree/disagree',
    topic: 'Sustainable Development',
    structure: {
      introduction: '引入可持续发展',
      body1: '支持理由',
      body2: '挑战分析',
      conclusion: '行动呼吁'
    },
    fullParagraphs: {
      introduction: 'Sustainable development has become a global priority as societies recognize the need to balance economic growth with environmental protection and social equity.',
      body1: 'Sustainable development ensures that current needs are met without compromising future generations\' ability to meet theirs. It promotes responsible resource management, reduces carbon emissions, and fosters social inclusion. Sustainable practices also drive innovation and create new economic opportunities.',
      body2: 'Achieving sustainable development faces significant challenges, including economic constraints, political will, and behavioral change. There are trade-offs between short-term economic growth and long-term sustainability. Implementing sustainable practices requires global cooperation and commitment.',
      conclusion: 'Sustainable development is not just an environmental issue but a necessity for human well-being and survival. By prioritizing sustainability in policies, businesses, and daily choices, we can create a better future for all.'
    },
    vocabulary: ['priority', 'compromising', 'inclusion', 'constraints', 'trade-offs', 'commitment']
  },
  {
    id: 29,
    title: '广告影响模板',
    type: 'discuss both views',
    topic: 'Advertising',
    structure: {
      introduction: '引入广告',
      body1: '广告的正面作用',
      body2: '广告的负面影响',
      conclusion: '平衡观点'
    },
    fullParagraphs: {
      introduction: 'Advertising is a pervasive part of modern life, shaping consumer behavior and influencing cultural norms. Its role in society is complex and controversial.',
      body1: 'Advertising provides valuable information to consumers, helping them make informed choices. It supports media and entertainment, making content accessible to the public. Advertising also drives economic growth by promoting products and services and creating jobs.',
      body2: 'However, advertising can be manipulative, creating artificial needs and promoting materialism. It often targets vulnerable groups, including children. There are concerns about misleading claims and the impact on body image and self-esteem.',
      conclusion: 'Advertising can be beneficial when it is honest, transparent, and responsible. By promoting ethical advertising practices and media literacy, we can harness its benefits while mitigating its negative impacts.'
    },
    vocabulary: ['pervasive', 'manipulative', 'artificial', 'misleading', 'ethical', 'transparent']
  },
  {
    id: 30,
    title: '犯罪与惩罚模板',
    type: 'problem/solution',
    topic: 'Crime and Punishment',
    structure: {
      introduction: '引入犯罪问题',
      body1: '犯罪原因分析',
      body2: '解决方案',
      conclusion: '综合策略'
    },
    fullParagraphs: {
      introduction: 'Crime remains a significant challenge for societies worldwide, requiring comprehensive approaches to prevention and intervention.',
      body1: 'Crime has complex causes, including socioeconomic factors, lack of education, and social disconnection. Poverty, inequality, and limited opportunities contribute to criminal behavior. There are also psychological and environmental factors that influence criminal activity.',
      body2: 'Addressing crime requires a multi-pronged approach. Investing in education, job training, and social programs can prevent crime by addressing root causes. Effective law enforcement and fair justice systems are essential. Rehabilitation and restorative justice approaches can also reduce recidivism.',
      conclusion: 'Reducing crime requires addressing both its causes and consequences. By combining prevention, enforcement, and rehabilitation, societies can create safer communities and support positive change.'
    },
    vocabulary: ['socioeconomic', 'disconnection', 'multi-pronged', 'rehabilitation', 'restorative', 'recidivism']
  },
  {
    id: 31,
    title: '旅游影响模板',
    type: 'advantages/disadvantages',
    topic: 'Tourism',
    structure: {
      introduction: '介绍旅游业',
      body1: '旅游的好处',
      body2: '旅游的挑战',
      conclusion: '可持续旅游'
    },
    fullParagraphs: {
      introduction: 'Tourism is a major global industry that brings economic benefits but also poses significant challenges to destinations and communities.',
      body1: 'Tourism drives economic growth by creating jobs, generating revenue, and supporting local businesses. It promotes cultural exchange and understanding, raising awareness about different cultures and environments. Tourism also contributes to conservation efforts through funding and advocacy.',
      body2: 'However, tourism can cause environmental damage, overcrowding, and cultural commodification. There are concerns about overtourism, which strains infrastructure and disrupts local communities. Tourism can also lead to rising costs of living for residents.',
      conclusion: 'Sustainable tourism practices can maximize benefits while minimizing negative impacts. By promoting responsible travel, supporting local communities, and protecting natural and cultural heritage, we can create a more balanced tourism industry.'
    },
    vocabulary: ['commodification', 'overtourism', 'infrastructure', 'responsible', 'heritage', 'balanced']
  },
  {
    id: 32,
    title: '性别平等模板',
    type: 'problem/solution',
    topic: 'Gender Equality',
    structure: {
      introduction: '引入性别平等',
      body1: '不平等现象',
      body2: '解决方案',
      conclusion: '呼吁行动'
    },
    fullParagraphs: {
      introduction: 'Gender equality remains an important global goal, with significant progress made but challenges still to overcome.',
      body1: 'Gender inequality manifests in various forms, including pay gaps, limited representation in leadership roles, and unequal access to education and healthcare. Women and girls continue to face discrimination and violence in many parts of the world. These inequalities limit opportunities and hinder social progress.',
      body2: 'Achieving gender equality requires systemic change. Promoting education for girls, implementing equal pay policies, and increasing women\'s representation in decision-making roles are essential. Challenging gender stereotypes and promoting inclusive attitudes can also drive change.',
      conclusion: 'Gender equality is not just a women\'s issue but a human rights issue that benefits everyone. By working together to eliminate discrimination and promote equality, we can create fairer and more prosperous societies.'
    },
    vocabulary: ['manifest', 'discrimination', 'systemic', 'inclusive', 'stereotypes', 'prosperous']
  },
  {
    id: 33,
    title: '媒体审查模板',
    type: 'discuss both views',
    topic: 'Media Censorship',
    structure: {
      introduction: '引入媒体审查',
      body1: '支持审查',
      body2: '反对审查',
      conclusion: '平衡观点'
    },
    fullParagraphs: {
      introduction: 'Media censorship is a controversial issue that involves balancing freedom of expression with concerns about public safety and well-being.',
      body1: 'Proponents of censorship argue that it is necessary to protect vulnerable groups, prevent hate speech, and maintain social order. Censorship can also prevent the spread of harmful content, including violence and misinformation. In some cases, it protects national security and cultural values.',
      body2: 'Opponents argue that censorship violates freedom of speech and limits access to information. It can be used to suppress dissent and control public opinion. There are concerns about who decides what should be censored and the potential for abuse of power.',
      conclusion: 'While some form of regulation may be necessary, it should be transparent, proportionate, and respectful of fundamental rights. Striking the right balance between protection and freedom is essential for a healthy society.'
    },
    vocabulary: ['controversial', 'proponents', 'suppress', 'dissent', 'proportionate', 'transparent']
  },
  {
    id: 34,
    title: '体育与社会模板',
    type: 'discuss both views',
    topic: 'Sports and Society',
    structure: {
      introduction: '引入体育',
      body1: '体育的正面影响',
      body2: '体育的负面影响',
      conclusion: '综合观点'
    },
    fullParagraphs: {
      introduction: 'Sports play a significant role in societies worldwide, bringing people together and influencing culture and values.',
      body1: 'Sports promote physical health and well-being, encouraging active lifestyles. They foster teamwork, discipline, and resilience, teaching valuable life skills. Sports also create community bonds and national pride, uniting people across divides. Major sporting events can boost economies and promote international understanding.',
      body2: 'However, sports also have negative aspects. Commercialization and corruption can undermine the spirit of fair play. There are concerns about athlete exploitation, particularly in professional sports. Sports can also reinforce inequality and create unrealistic expectations.',
      conclusion: 'Sports have the power to inspire and unite, but they must be managed responsibly. By promoting fair play, ethical practices, and accessibility, we can maximize the positive impact of sports on society.'
    },
    vocabulary: ['resilience', 'commercialization', 'exploitation', 'undermine', 'ethical', 'accessibility']
  },
  {
    id: 35,
    title: '动物保护模板',
    type: 'agree/disagree',
    topic: 'Animal Rights',
    structure: {
      introduction: '引入动物权利',
      body1: '支持动物权利',
      body2: '反对观点',
      conclusion: '平衡观点'
    },
    fullParagraphs: {
      introduction: 'The treatment of animals and their rights has become an increasingly important ethical issue, sparking debate about humanity\'s relationship with other species.',
      body1: 'Advocates for animal rights argue that animals deserve respect and protection from cruelty and exploitation. They believe that animals have intrinsic value and should not be used for entertainment, experimentation, or consumption without consideration for their well-being. Protecting animals also benefits ecosystems and biodiversity.',
      body2: 'Opponents argue that human needs take precedence over animal rights. They contend that animal use is necessary for food, medicine, and scientific progress. There are also cultural and economic considerations that make changing practices challenging.',
      conclusion: 'While human needs are important, we have a responsibility to treat animals humanely. By promoting ethical treatment, supporting sustainable practices, and reducing unnecessary exploitation, we can create a more compassionate relationship with the animal kingdom.'
    },
    vocabulary: ['intrinsic', 'exploitation', 'biodiversity', 'precedence', 'compassionate', 'ethical']
  },
  {
    id: 36,
    title: '代沟话题模板',
    type: 'discuss both views',
    topic: 'Generation Gap',
    structure: {
      introduction: '引入代沟',
      body1: '代沟的挑战',
      body2: '代沟的好处',
      conclusion: '跨越代沟'
    },
    fullParagraphs: {
      introduction: 'The generation gap refers to differences in values, beliefs, and behaviors between different age groups, which can create challenges but also opportunities.',
      body1: 'Generational differences can lead to misunderstandings and conflicts. Older generations may struggle to understand new technologies and changing social norms, while younger generations may dismiss traditional wisdom. These differences can create communication barriers and affect relationships.',
      body2: 'However, the generation gap also brings benefits. Younger generations bring fresh perspectives, innovation, and adaptability. Older generations offer wisdom, experience, and historical context. When different generations collaborate, they can learn from each other and create stronger communities.',
      conclusion: 'Bridging the generation gap requires open communication and mutual respect. By valuing each generation\'s contributions, we can create more inclusive and cohesive societies.'
    },
    vocabulary: ['misunderstandings', 'dismiss', 'adaptability', 'collaborate', 'inclusive', 'cohesive']
  },
  {
    id: 37,
    title: '自然灾害模板',
    type: 'problem/solution',
    topic: 'Natural Disasters',
    structure: {
      introduction: '引入自然灾害',
      body1: '灾害影响',
      body2: '应对策略',
      conclusion: '准备与应对'
    },
    fullParagraphs: {
      introduction: 'Natural disasters pose significant threats to communities worldwide, requiring preparedness and effective response strategies.',
      body1: 'Natural disasters, including hurricanes, earthquakes, and wildfires, cause widespread destruction, loss of life, and economic damage. They disrupt infrastructure, displace populations, and have long-term environmental and social impacts. Climate change is increasing the frequency and severity of many disasters.',
      body2: 'Addressing natural disasters requires proactive measures. Investing in early warning systems, disaster-resistant infrastructure, and emergency preparedness can save lives. Community education and training are essential for effective response. International cooperation can also support vulnerable regions.',
      conclusion: 'While we cannot prevent natural disasters, we can mitigate their impact through preparation and collaboration. By prioritizing resilience and sustainability, communities can better withstand and recover from these events.'
    },
    vocabulary: ['widespread', 'displace', 'proactive', 'mitigate', 'resilience', 'withstand']
  },
  {
    id: 38,
    title: '语言学习模板',
    type: 'advantages/disadvantages',
    topic: 'Language Learning',
    structure: {
      introduction: '介绍语言学习',
      body1: '学习多语言的好处',
      body2: '学习挑战',
      conclusion: '鼓励学习'
    },
    fullParagraphs: {
      introduction: 'Learning multiple languages has become increasingly important in our interconnected world, offering personal, professional, and cultural benefits.',
      body1: 'Being bilingual or multilingual enhances cognitive abilities, including memory, problem-solving, and creativity. It improves communication skills and opens up professional opportunities in globalized industries. Language learning also fosters cultural understanding and empathy, breaking down barriers between people.',
      body2: 'Learning a new language requires time, effort, and dedication. It can be challenging, especially for adults, due to differences in grammar, vocabulary, and pronunciation. There may also be limited resources or opportunities for practice in some contexts.',
      conclusion: 'The benefits of language learning far outweigh the challenges. By embracing language learning as a lifelong journey, we can enrich our lives, broaden our perspectives, and connect with the world.'
    },
    vocabulary: ['interconnected', 'cognitive', 'empathy', 'dedication', 'perspectives', 'lifelong']
  },
  {
    id: 39,
    title: '网络安全模板',
    type: 'problem/solution',
    topic: 'Cybersecurity',
    structure: {
      introduction: '引入网络安全',
      body1: '安全威胁',
      body2: '防护措施',
      conclusion: '共同责任'
    },
    fullParagraphs: {
      introduction: 'Cybersecurity has become a critical concern in the digital age, with increasing threats to individuals, organizations, and governments.',
      body1: 'Cyber threats include hacking, phishing, malware, and data breaches. These attacks can result in financial loss, identity theft, and damage to reputation. Critical infrastructure, including healthcare and financial systems, is particularly vulnerable. Cybercrime is becoming more sophisticated and widespread.',
      body2: 'Protecting against cyber threats requires multiple layers of defense. Individuals can practice safe online habits, including using strong passwords and being cautious of suspicious links. Organizations must implement robust security measures and employee training. Governments play a role in creating regulations and supporting cybersecurity initiatives.',
      conclusion: 'Cybersecurity is a shared responsibility that requires vigilance and cooperation. By staying informed, implementing best practices, and supporting security efforts, we can create a safer digital environment.'
    },
    vocabulary: ['critical', 'sophisticated', 'robust', 'vigilance', 'initiative', 'defense']
  },
  {
    id: 40,
    title: '艺术价值模板',
    type: 'discuss both views',
    topic: 'Art Value',
    structure: {
      introduction: '引入艺术',
      body1: '艺术的价值',
      body2: '质疑艺术价值',
      conclusion: '肯定艺术'
    },
    fullParagraphs: {
      introduction: 'The value of art has been debated throughout history, with some questioning its practical purpose while others celebrate its importance.',
      body1: 'Art enriches human experience by expressing emotions, challenging ideas, and reflecting cultural values. It inspires creativity, critical thinking, and empathy. Art also contributes to economic development through industries like galleries, museums, and tourism. It preserves cultural heritage and provides a voice for marginalized groups.',
      body2: 'Critics argue that art is elitist and has little practical value compared to science, technology, or medicine. They question public funding for the arts, arguing resources could be better used elsewhere. Some see modern art as obscure or inaccessible to the general public.',
      conclusion: 'Art is essential to human culture and well-being. While practical fields are important, art nourishes the soul and fosters creativity. Supporting the arts enriches societies and promotes human connection.'
    },
    vocabulary: ['elitist', 'inaccessible', 'nourishes', 'preserves', 'marginalized', 'connection']
  },
  {
    id: 41,
    title: '医疗资源模板',
    type: 'problem/solution',
    topic: 'Healthcare Access',
    structure: {
      introduction: '引入医疗资源',
      body1: '不平等现象',
      body2: '解决方案',
      conclusion: '全民健康'
    },
    fullParagraphs: {
      introduction: 'Access to quality healthcare is a fundamental right, but disparities in healthcare access remain a significant global challenge.',
      body1: 'Healthcare inequality exists between urban and rural areas, wealthy and poor populations, and different countries. Many people lack access to essential services, preventive care, and medications. High healthcare costs create barriers for vulnerable groups, leading to poorer health outcomes.',
      body2: 'Improving healthcare access requires systemic changes. Expanding healthcare coverage, investing in infrastructure, and training healthcare workers are essential. Telemedicine and mobile health services can increase access in remote areas. Addressing social determinants of health, such as poverty and education, is also crucial.',
      conclusion: 'Every person deserves access to quality healthcare. By prioritizing healthcare equity and implementing innovative solutions, we can create healthier and more equitable societies.'
    },
    vocabulary: ['disparities', 'preventive', 'vulnerable', 'telemedicine', 'determinants', 'equity']
  },
  {
    id: 42,
    title: '交通问题模板',
    type: 'problem/solution',
    topic: 'Transportation',
    structure: {
      introduction: '引入交通问题',
      body1: '问题分析',
      body2: '解决方案',
      conclusion: '可持续交通'
    },
    fullParagraphs: {
      introduction: 'Transportation systems face significant challenges in modern cities, including congestion, pollution, and accessibility issues.',
      body1: 'Traffic congestion wastes time, increases stress, and contributes to air pollution. Reliance on private cars leads to carbon emissions and urban sprawl. Public transportation often lacks investment, making it unreliable for many commuters. There are also safety concerns and accessibility barriers for people with disabilities.',
      body2: 'Creating sustainable transportation systems requires multi-modal approaches. Investing in public transit, cycling infrastructure, and pedestrian-friendly spaces can reduce car dependency. Promoting electric vehicles and carpooling can lower emissions. Smart city technologies can improve traffic management and efficiency.',
      conclusion: 'Sustainable transportation is essential for livable cities and a healthy environment. By prioritizing public transit and reducing reliance on private cars, we can create more efficient and eco-friendly transportation systems.'
    },
    vocabulary: ['congestion', 'sprawl', 'multi-modal', 'carpooling', 'eco-friendly', 'livable']
  },
  {
    id: 43,
    title: '数字鸿沟模板',
    type: 'problem/solution',
    topic: 'Digital Divide',
    structure: {
      introduction: '引入数字鸿沟',
      body1: '差距分析',
      body2: '解决方案',
      conclusion: '缩小差距'
    },
    fullParagraphs: {
      introduction: 'The digital divide refers to the gap between those who have access to technology and the internet and those who do not, creating significant inequalities in the digital age.',
      body1: 'The digital divide affects access to education, employment, healthcare, and information. Marginalized groups, including low-income communities, rural populations, and older adults, are disproportionately affected. This gap perpetuates social and economic inequalities, limiting opportunities for those without access.',
      body2: 'Addressing the digital divide requires investment in infrastructure, affordable devices, and digital literacy programs. Governments and organizations can provide access to technology and training in underserved areas. Community centers and libraries can serve as hubs for digital access and education.',
      conclusion: 'Closing the digital divide is essential for creating equitable societies. By ensuring everyone has access to technology and the skills to use it, we can unlock opportunities and reduce inequality.'
    },
    vocabulary: ['disproportionately', 'perpetuates', 'underserved', 'literacy', 'equitable', 'unlock']
  },
  {
    id: 44,
    title: '创业精神模板',
    type: 'discuss both views',
    topic: 'Entrepreneurship',
    structure: {
      introduction: '引入创业',
      body1: '创业的好处',
      body2: '创业的挑战',
      conclusion: '鼓励创业'
    },
    fullParagraphs: {
      introduction: 'Entrepreneurship is celebrated as a driver of innovation and economic growth, but it also comes with significant challenges.',
      body1: 'Entrepreneurs create jobs, drive innovation, and contribute to economic development. They bring new ideas to market, solve problems, and adapt to changing needs. Entrepreneurship also fosters resilience, creativity, and independence. Successful startups can transform industries and improve people\'s lives.',
      body2: 'However, entrepreneurship is risky, with many startups failing due to financial constraints, competition, and market challenges. Entrepreneurs often face long hours, stress, and uncertainty. Access to funding and resources can be limited, especially for underrepresented groups.',
      conclusion: 'While entrepreneurship is challenging, its benefits for individuals and society are significant. By supporting aspiring entrepreneurs with mentorship, funding, and resources, we can foster innovation and economic growth.'
    },
    vocabulary: ['driver', 'resilience', 'constraints', 'underrepresented', 'mentorship', 'aspiring']
  },
  {
    id: 45,
    title: '气候变化模板',
    type: 'problem/solution',
    topic: 'Climate Change',
    structure: {
      introduction: '引入气候变化',
      body1: '影响分析',
      body2: '应对措施',
      conclusion: '行动呼吁'
    },
    fullParagraphs: {
      introduction: 'Climate change is one of the most pressing challenges facing humanity, with far-reaching impacts on ecosystems, communities, and economies.',
      body1: 'Climate change causes rising temperatures, extreme weather events, sea-level rise, and biodiversity loss. It threatens food security, water resources, and public health. Vulnerable communities, particularly in developing countries, are disproportionately affected. The economic costs of climate change are significant and growing.',
      body2: 'Addressing climate change requires urgent and collective action. Reducing greenhouse gas emissions through transitioning to renewable energy, improving energy efficiency, and promoting sustainable practices is essential. Protecting and restoring ecosystems, supporting climate-resilient agriculture, and investing in green technology can also mitigate impacts. International cooperation is critical for global solutions.',
      conclusion: 'Climate change demands immediate action from individuals, organizations, and governments. By working together to reduce emissions and adapt to changing conditions, we can protect our planet and ensure a sustainable future.'
    },
    vocabulary: ['pressing', 'disproportionately', 'transitioning', 'resilient', 'mitigate', 'collective']
  },
  {
    id: 46,
    title: '文化交流模板',
    type: 'advantages/disadvantages',
    topic: 'Cultural Exchange',
    structure: {
      introduction: '介绍文化交流',
      body1: '交流的好处',
      body2: '潜在问题',
      conclusion: '促进交流'
    },
    fullParagraphs: {
      introduction: 'Cultural exchange has become easier than ever in our interconnected world, bringing people from different backgrounds together.',
      body1: 'Cultural exchange fosters understanding, tolerance, and appreciation for diversity. It allows people to learn from each other\'s traditions, art, and perspectives. These interactions break down stereotypes and build bridges between communities. Cultural exchange also promotes creativity and innovation through cross-cultural collaboration.',
      body2: 'However, cultural exchange can lead to misunderstandings and conflicts if not approached with respect. There are concerns about cultural appropriation, where elements of one culture are taken without understanding or respect. Language barriers can also hinder effective communication.',
      conclusion: 'Cultural exchange is a powerful force for connection and understanding. By approaching it with respect, curiosity, and an open mind, we can create meaningful connections and celebrate our shared humanity.'
    },
    vocabulary: ['tolerance', 'stereotypes', 'appropriation', 'curiosity', 'meaningful', 'humanity']
  },
  {
    id: 47,
    title: '工作生活平衡模板',
    type: 'discuss both views',
    topic: 'Work-Life Balance',
    structure: {
      introduction: '引入工作生活平衡',
      body1: '重视平衡的理由',
      body2: '忽视平衡的原因',
      conclusion: '寻求平衡'
    },
    fullParagraphs: {
      introduction: 'Work-life balance has become increasingly important as people strive to manage professional responsibilities with personal well-being.',
      body1: 'Maintaining work-life balance improves physical and mental health, reduces stress, and enhances overall quality of life. It allows time for family, hobbies, and self-care, which are essential for happiness and productivity. Employers benefit from healthier, more engaged employees who are less likely to experience burnout.',
      body2: 'However, achieving work-life balance can be challenging in competitive work environments. Many people feel pressure to work long hours to advance their careers. Economic factors and job insecurity can also make it difficult to set boundaries. Technology blurs the line between work and personal life, making it hard to disconnect.',
      conclusion: 'Work-life balance is essential for well-being and productivity. By setting boundaries, prioritizing self-care, and advocating for supportive workplace policies, individuals and organizations can create healthier work environments.'
    },
    vocabulary: ['enhances', 'burnout', 'blurs', 'boundaries', 'advocating', 'supportive']
  },
  {
    id: 48,
    title: '全球化与文化模板',
    type: 'agree/disagree',
    topic: 'Globalization and Culture',
    structure: {
      introduction: '引入全球化与文化',
      body1: '全球化促进文化',
      body2: '全球化威胁文化',
      conclusion: '平衡观点'
    },
    fullParagraphs: {
      introduction: 'Globalization has transformed how cultures interact, raising questions about its impact on cultural diversity and identity.',
      body1: 'Globalization facilitates cultural exchange, allowing people to experience different traditions, music, cuisine, and ideas. It promotes cultural appreciation and understanding across borders. Global media and technology enable the sharing of cultural expressions, enriching global culture. Cultural exchange also fosters creativity and innovation.',
      body2: 'However, globalization can lead to cultural homogenization, where dominant cultures overshadow local traditions. There are concerns about cultural erosion, as local languages, practices, and values are replaced by global norms. Cultural appropriation and misrepresentation are also significant issues.',
      conclusion: 'Globalization should be guided by respect for cultural diversity. By celebrating local traditions while embracing global connections, we can create a more inclusive and vibrant global culture.'
    },
    vocabulary: ['facilitates', 'homogenization', 'erosion', 'misrepresentation', 'inclusive', 'vibrant']
  },
  {
    id: 49,
    title: '教育科技模板',
    type: 'discuss both views',
    topic: 'EdTech',
    structure: {
      introduction: '引入教育科技',
      body1: '教育科技的好处',
      body2: '教育科技的挑战',
      conclusion: '合理应用'
    },
    fullParagraphs: {
      introduction: 'Educational technology (EdTech) has transformed learning, offering new tools and approaches to education.',
      body1: 'EdTech enhances learning through interactive content, personalized instruction, and access to vast educational resources. It enables flexible learning, allowing students to learn at their own pace and from anywhere. Technology also makes education more engaging and accessible to diverse learners, including those with special needs.',
      body2: 'However, EdTech has challenges. Over-reliance on technology can reduce face-to-face interaction and hands-on learning. There are concerns about screen time and its impact on health. Digital divides can exacerbate educational inequalities, as not all students have access to devices or reliable internet.',
      conclusion: 'EdTech should complement, not replace, traditional teaching methods. By integrating technology thoughtfully and addressing access issues, we can create more effective and inclusive learning experiences.'
    },
    vocabulary: ['personalized', 'exacerbate', 'complement', 'integrating', 'inclusive', 'thoughtfully']
  },
  {
    id: 50,
    title: '社区建设模板',
    type: 'problem/solution',
    topic: 'Community Building',
    structure: {
      introduction: '引入社区建设',
      body1: '社区问题',
      body2: '建设策略',
      conclusion: '共建社区'
    },
    fullParagraphs: {
      introduction: 'Strong communities are essential for social cohesion and well-being, but many modern communities face challenges that weaken connections.',
      body1: 'Modern communities often lack connection, with residents feeling isolated and disconnected from their neighbors. Rapid urbanization and busy lifestyles contribute to this sense of isolation. There may be conflicts between different groups, and community resources may be limited or underutilized.',
      body2: 'Building strong communities requires intentional effort. Creating shared spaces and organizing community events can foster connections. Encouraging volunteerism and collaboration on local projects can strengthen bonds. Supporting local businesses and initiatives can also build community pride and resilience.',
      conclusion: 'Communities thrive when people come together. By investing in connection, collaboration, and shared purpose, we can create stronger, more supportive communities.'
    },
    vocabulary: ['cohesion', 'isolated', 'intentional', 'volunteerism', 'resilience', 'collaboration']
  },
  {
    id: 51,
    title: '科技伦理模板',
    type: 'discuss both views',
    topic: 'Tech Ethics',
    structure: {
      introduction: '引入科技伦理',
      body1: '伦理考量',
      body2: '创新优先',
      conclusion: '平衡创新与伦理'
    },
    fullParagraphs: {
      introduction: 'As technology advances, ethical considerations become increasingly important to ensure innovations benefit humanity responsibly.',
      body1: 'Ethical considerations in technology include issues like privacy, bias, accountability, and the impact on employment. Ensuring technologies are developed and used responsibly protects individuals and society. Ethical guidelines can prevent misuse and promote fairness and transparency.',
      body2: 'Some argue that excessive ethical scrutiny can stifle innovation and slow technological progress. They believe that many ethical concerns can be addressed as technologies mature. There are also practical challenges in defining and enforcing ethical standards across different cultures and jurisdictions.',
      conclusion: 'Innovation and ethics must go hand in hand. By integrating ethical considerations into technology development from the start, we can create innovations that benefit humanity while minimizing harm.'
    },
    vocabulary: ['scrutiny', 'stifle', 'jurisdictions', 'transparency', 'accountability', 'integrating']
  },
  {
    id: 52,
    title: '绿色能源模板',
    type: 'agree/disagree',
    topic: 'Renewable Energy',
    structure: {
      introduction: '引入绿色能源',
      body1: '支持绿色能源',
      body2: '挑战分析',
      conclusion: '推动转型'
    },
    fullParagraphs: {
      introduction: 'Transitioning to renewable energy is critical for addressing climate change and ensuring sustainable energy future.',
      body1: 'Renewable energy sources like solar, wind, and hydropower are clean, abundant, and sustainable. They reduce greenhouse gas emissions, improve air quality, and decrease dependence on fossil fuels. Investing in renewables creates jobs and drives innovation. Many countries have set ambitious targets for renewable energy adoption.',
      body2: 'However, transitioning to renewable energy faces challenges. Initial costs can be high, and infrastructure needs significant investment. Intermittency of solar and wind energy requires energy storage solutions. There are also concerns about land use and environmental impacts of renewable energy projects.',
      conclusion: 'The transition to renewable energy is essential and achievable. By investing in technology, infrastructure, and policy support, we can accelerate the shift to a clean energy future.'
    },
    vocabulary: ['transitioning', 'abundant', 'intermittency', 'infrastructure', 'ambitious', 'accelerate']
  },
  {
    id: 53,
    title: '社交媒体与人际关系模板',
    type: 'discuss both views',
    topic: 'Social Media and Relationships',
    structure: {
      introduction: '引入社交媒体与人际关系',
      body1: '社交媒体的积极影响',
      body2: '社交媒体的负面影响',
      conclusion: '合理使用'
    },
    fullParagraphs: {
      introduction: 'Social media has transformed how people connect and maintain relationships, with both positive and negative consequences.',
      body1: 'Social media allows people to stay connected with friends and family across distances. It facilitates communication, sharing, and support networks. Social media also enables people to meet new friends with similar interests and build communities around shared passions. It can be a powerful tool for social connection and support.',
      body2: 'However, social media can negatively impact relationships. It can create unrealistic expectations, leading to feelings of inadequacy and comparison. Online interactions may replace in-person connections, reducing the quality of relationships. There are also concerns about cyberbullying, miscommunication, and privacy issues affecting trust.',
      conclusion: 'Social media is a tool that can enhance or harm relationships depending on how it is used. By using it mindfully, prioritizing real-world connections, and setting boundaries, we can harness its benefits while protecting our relationships.'
    },
    vocabulary: ['facilitates', 'inadequacy', 'miscommunication', 'mindfully', 'prioritizing', 'boundaries']
  },
  {
    id: 54,
    title: '教育改革模板',
    type: 'problem/solution',
    topic: 'Education Reform',
    structure: {
      introduction: '引入教育改革',
      body1: '教育系统问题',
      body2: '改革策略',
      conclusion: '展望未来'
    },
    fullParagraphs: {
      introduction: 'Education systems worldwide face challenges that require thoughtful reform to better prepare students for the future.',
      body1: 'Traditional education systems often focus on rote learning and standardized testing, which may not develop critical thinking, creativity, and problem-solving skills. There is often a disconnect between what is taught and real-world skills needed for the modern workforce. Equity gaps persist, with disadvantaged students lacking access to quality education.',
      body2: 'Education reform should prioritize student-centered learning, focusing on skills like critical thinking, collaboration, and adaptability. Incorporating technology and real-world applications can make learning more relevant. Addressing equity through targeted support and resources can ensure all students have opportunities to succeed. Teacher training and support are also essential for effective reform.',
      conclusion: 'Education reform is essential for preparing students to thrive in a rapidly changing world. By embracing innovation, prioritizing equity, and focusing on essential skills, we can create education systems that empower all learners.'
    },
    vocabulary: ['rote', 'disconnect', 'adaptability', 'targeted', 'empower', 'relevant']
  },
  {
    id: 55,
    title: '移民与文化模板',
    type: 'advantages/disadvantages',
    topic: 'Immigration and Culture',
    structure: {
      introduction: '介绍移民与文化',
      body1: '文化贡献',
      body2: '文化挑战',
      conclusion: '融合与尊重'
    },
    fullParagraphs: {
      introduction: 'Immigration brings cultural diversity to societies, enriching communities but also creating challenges related to integration and cultural preservation.',
      body1: 'Immigrants contribute to cultural diversity by sharing traditions, cuisine, music, and perspectives. They enrich local cultures and promote understanding between different groups. Immigrant communities often maintain their cultural heritage while also contributing to the host culture, creating vibrant, multicultural societies.',
      body2: 'However, cultural differences can lead to misunderstandings and tensions. There may be challenges in integrating new cultural practices with existing norms. Some fear that immigration could dilute traditional cultural identities. Language barriers can also hinder communication and integration.',
      conclusion: 'Cultural diversity is a strength that should be celebrated. By promoting mutual respect, supporting integration, and valuing both immigrant and host cultures, societies can thrive as inclusive, multicultural communities.'
    },
    vocabulary: ['enriching', 'dilute', 'integration', 'mutual', 'multicultural', 'inclusive']
  }
];

export const rootGroups: RootGroup[] = [
  { root: 'a', meaning: '不，非', meaningEn: 'not, without', origin: 'Greek', originNote: '源自希腊语 a-/an-，意为"不、非"', originNoteEn: 'From Greek a-/an- meaning "not, without"', example: 'apolitical, anonymous, asymmetry, atheist', words: [] },
  { root: 'ab/abs', meaning: '离开，远离', meaningEn: 'away from', origin: 'Latin', originNote: '源自拉丁语 ab，意为"离开"', originNoteEn: 'From Latin ab meaning "away from"', example: 'abstract, absent, absorb, abnormal', words: [] },
  { root: 'ac/acr', meaning: '尖锐，顶端', meaningEn: 'sharp, top', origin: 'Greek', originNote: '源自希腊语 akros，意为"顶端"', originNoteEn: 'From Greek akros meaning "top"', example: 'acute, acrid, acrobat, acronym', words: [] },
  { root: 'act', meaning: '行动，做', meaningEn: 'to act, to do', origin: 'Latin', originNote: '源自拉丁语 agere，意为"做、行动"', originNoteEn: 'From Latin agere meaning "to act, to do"', example: 'action, active, react, interact', words: [] },
  { root: 'aer', meaning: '空气', meaningEn: 'air', origin: 'Greek', originNote: '源自希腊语 aer，意为"空气"', originNoteEn: 'From Greek aer meaning "air"', example: 'aerial, airplane, atmosphere, aerate', words: [] },
  { root: 'ag/act', meaning: '做，驱动', meaningEn: 'to do, to drive', origin: 'Latin', originNote: '源自拉丁语 agere，意为"做、驱使"', originNoteEn: 'From Latin agere meaning "to do, to drive"', example: 'agent, agenda, agile, exact', words: [] },
  { root: 'al', meaning: '全部，完整', meaningEn: 'all, whole', origin: 'Latin', originNote: '源自拉丁语 alius，意为"其他"或 alere，意为"滋养"', originNoteEn: 'From Latin alius meaning "other" or alere meaning "to nourish"', example: 'all, also, alien, altar', words: [] },
  { root: 'alt', meaning: '高', meaningEn: 'high', origin: 'Latin', originNote: '源自拉丁语 altus，意为"高"', originNoteEn: 'From Latin altus meaning "high"', example: 'altitude, alternate, altar, exalt', words: [] },
  { root: 'am', meaning: '爱', meaningEn: 'love', origin: 'Latin', originNote: '源自拉丁语 amare，意为"爱"', originNoteEn: 'From Latin amare meaning "to love"', example: 'amateur, amiable, amorous, enamor', words: [] },
  { root: 'amb/ambi', meaning: '两者，周围', meaningEn: 'both, around', origin: 'Latin', originNote: '源自拉丁语 ambi，意为"两者、周围"', originNoteEn: 'From Latin ambi meaning "both, around"', example: 'ambition, ambiguous, ambient, ambivalence', words: [] },
  { root: 'anim', meaning: '生命，灵魂', meaningEn: 'life, spirit', origin: 'Latin', originNote: '源自拉丁语 anima，意为"灵魂、生命"', originNoteEn: 'From Latin anima meaning "life, spirit"', example: 'animal, animate, unanimous, magnanimous', words: [] },
  { root: 'ann/enn', meaning: '年', meaningEn: 'year', origin: 'Latin', originNote: '源自拉丁语 annus，意为"年"', originNoteEn: 'From Latin annus meaning "year"', example: 'annual, anniversary, perennial, biennial', words: [] },
  { root: 'apt/ept', meaning: '适合，能力', meaningEn: 'fit, ability', origin: 'Latin', originNote: '源自拉丁语 aptus，意为"适合的"', originNoteEn: 'From Latin aptus meaning "fit"', example: 'aptitude, adapt, adept, inept', words: [] },
  { root: 'aqu', meaning: '水', meaningEn: 'water', origin: 'Latin', originNote: '源自拉丁语 aqua，意为"水"', originNoteEn: 'From Latin aqua meaning "water"', example: 'aquatic, aquarium, aqueduct, aqueous', words: [] },
  { root: 'arch', meaning: '统治，首要', meaningEn: 'rule, chief', origin: 'Greek', originNote: '源自希腊语 archos，意为"统治者"', originNoteEn: 'From Greek archos meaning "ruler"', example: 'monarch, architect, archive, hierarchy', words: [] },
  { root: 'art', meaning: '技巧，工艺', meaningEn: 'skill, craft', origin: 'Latin', originNote: '源自拉丁语 ars，意为"艺术、技巧"', originNoteEn: 'From Latin ars meaning "skill, craft"', example: 'artist, artful, artificial, artisan', words: [] },
  { root: 'aud', meaning: '听', meaningEn: 'to hear', origin: 'Latin', originNote: '源自拉丁语 audire，意为"听"', originNoteEn: 'From Latin audire meaning "to hear"', example: 'audio, audience, audition, auditorium', words: [] },
  { root: 'aug/aux', meaning: '增加', meaningEn: 'to increase', origin: 'Latin', originNote: '源自拉丁语 augere，意为"增加"', originNoteEn: 'From Latin augere meaning "to increase"', example: 'augment, auxiliary, august, auction', words: [] },
  { root: 'aut', meaning: '自己', meaningEn: 'self', origin: 'Greek', originNote: '源自希腊语 autos，意为"自己"', originNoteEn: 'From Greek autos meaning "self"', example: 'automatic, autonomous, automobile, autobiography', words: [] },
  { root: 'ben/bene', meaning: '好', meaningEn: 'good', origin: 'Latin', originNote: '源自拉丁语 bonus，意为"好"', originNoteEn: 'From Latin bonus meaning "good"', example: 'benefit, benign, beneficial, benevolent', words: [] },
  { root: 'bio', meaning: '生命', meaningEn: 'life', origin: 'Greek', originNote: '源自希腊语 bios，意为"生命"', originNoteEn: 'From Greek bios meaning "life"', example: 'biology, biography, biosphere, antibiotic', words: [] },
  { root: 'brev', meaning: '短', meaningEn: 'short', origin: 'Latin', originNote: '源自拉丁语 brevis，意为"短"', originNoteEn: 'From Latin brevis meaning "short"', example: 'brief, brevity, abbreviate, brevity', words: [] },
  { root: 'cap/cept/ceiv', meaning: '拿，取', meaningEn: 'to take, to seize', origin: 'Latin', originNote: '源自拉丁语 capere，意为"拿、取"', originNoteEn: 'From Latin capere meaning "to take, to seize"', example: 'capture, accept, receive, perceive', words: [] },
  { root: 'ced/cess', meaning: '走，行进', meaningEn: 'to go, to proceed', origin: 'Latin', originNote: '源自拉丁语 cedere，意为"走、让步"', originNoteEn: 'From Latin cedere meaning "to go, to yield"', example: 'proceed, succeed, exceed, process', words: [] },
  { root: 'cent', meaning: '百', meaningEn: 'hundred', origin: 'Latin', originNote: '源自拉丁语 centum，意为"百"', originNoteEn: 'From Latin centum meaning "hundred"', example: 'century, centimeter, percent, centennial', words: [] },
  { root: 'cert', meaning: '确定，证明', meaningEn: 'sure, prove', origin: 'Latin', originNote: '源自拉丁语 certus，意为"确定的"', originNoteEn: 'From Latin certus meaning "sure"', example: 'certain, certificate, certify, ascertain', words: [] },
  { root: 'chron', meaning: '时间', meaningEn: 'time', origin: 'Greek', originNote: '源自希腊语 chronos，意为"时间"', originNoteEn: 'From Greek chronos meaning "time"', example: 'chronic, chronological, chronicle, synchronize', words: [] },
  { root: 'cide', meaning: '杀', meaningEn: 'to kill', origin: 'Latin', originNote: '源自拉丁语 caedere，意为"杀"', originNoteEn: 'From Latin caedere meaning "to kill"', example: 'suicide, homicide, pesticide, genocide', words: [] },
  { root: 'cip/ceiv', meaning: '拿，抓', meaningEn: 'to take, to grasp', origin: 'Latin', originNote: '源自拉丁语 capere，意为"拿"', originNoteEn: 'From Latin capere meaning "to take"', example: 'participate, anticipate, deceive, conceive', words: [] },
  { root: 'claim/clam', meaning: '喊叫，宣称', meaningEn: 'to shout, to declare', origin: 'Latin', originNote: '源自拉丁语 clamare，意为"喊叫"', originNoteEn: 'From Latin clamare meaning "to shout"', example: 'exclaim, proclaim, clamor, acclaim', words: [] },
  { root: 'clar', meaning: '清楚，明亮', meaningEn: 'clear, bright', origin: 'Latin', originNote: '源自拉丁语 clarus，意为"清楚的"', originNoteEn: 'From Latin clarus meaning "clear"', example: 'clarify, declare, clarify, claret', words: [] },
  { root: 'clud/clus', meaning: '关闭', meaningEn: 'to close', origin: 'Latin', originNote: '源自拉丁语 claudere，意为"关闭"', originNoteEn: 'From Latin claudere meaning "to close"', example: 'include, exclude, conclude, seclude', words: [] },
  { root: 'cogn', meaning: '知道', meaningEn: 'to know', origin: 'Latin', originNote: '源自拉丁语 cognoscere，意为"知道"', originNoteEn: 'From Latin cognoscere meaning "to know"', example: 'recognize, cognition, cognizant, incognito', words: [] },
  { root: 'cor/cord', meaning: '心', meaningEn: 'heart', origin: 'Latin', originNote: '源自拉丁语 cor，意为"心"', originNoteEn: 'From Latin cor meaning "heart"', example: 'core, cordial, concord, discord', words: [] },
  { root: 'corp', meaning: '身体', meaningEn: 'body', origin: 'Latin', originNote: '源自拉丁语 corpus，意为"身体"', originNoteEn: 'From Latin corpus meaning "body"', example: 'corporate, corpse, corps, corpulent', words: [] },
  { root: 'cred', meaning: '相信', meaningEn: 'to believe', origin: 'Latin', originNote: '源自拉丁语 credere，意为"相信"', originNoteEn: 'From Latin credere meaning "to believe"', example: 'credit, credible, incredible, credulous', words: [] },
  { root: 'cur/curs', meaning: '跑', meaningEn: 'to run', origin: 'Latin', originNote: '源自拉丁语 currere，意为"跑"', originNoteEn: 'From Latin currere meaning "to run"', example: 'current, occur, recur, cursory', words: [] },
  { root: 'de', meaning: '向下，去除', meaningEn: 'down, away', origin: 'Latin', originNote: '源自拉丁语 de，意为"向下"', originNoteEn: 'From Latin de meaning "down, away"', example: 'decrease, decline, descend, destroy', words: [] },
  { root: 'dec', meaning: '十', meaningEn: 'ten', origin: 'Latin', originNote: '源自拉丁语 decem，意为"十"', originNoteEn: 'From Latin decem meaning "ten"', example: 'decimal, decade, December, decathlon', words: [] },
  { root: 'dent', meaning: '牙齿', meaningEn: 'tooth', origin: 'Latin', originNote: '源自拉丁语 dens，意为"牙齿"', originNoteEn: 'From Latin dens meaning "tooth"', example: 'dental, dentist, indent, trident', words: [] },
  { root: 'dict', meaning: '说，言', meaningEn: 'to say, to speak', origin: 'Latin', originNote: '源自拉丁语 dicere，意为"说、言"', originNoteEn: 'From Latin dicere meaning "to say, to speak"', example: 'predict, dictate, contradict, verdict', words: [] },
  { root: 'duc/duct', meaning: '引导，带领', meaningEn: 'to lead, to guide', origin: 'Latin', originNote: '源自拉丁语 ducere，意为"引导、带领"', originNoteEn: 'From Latin ducere meaning "to lead, to guide"', example: 'conduct, produce, reduce, introduce', words: [] },
  { root: 'fac/fect/fic', meaning: '做，制作', meaningEn: 'to make, to do', origin: 'Latin', originNote: '源自拉丁语 facere，意为"做、制作"', originNoteEn: 'From Latin facere meaning "to make, to do"', example: 'manufacture, perfect, effect, infect', words: [30, 47, 60] },
  { root: 'fer', meaning: '携带，带来', meaningEn: 'to carry, to bring', origin: 'Latin', originNote: '源自拉丁语 ferre，意为"携带"', originNoteEn: 'From Latin ferre meaning "to carry"', example: 'transfer, refer, prefer, infer', words: [] },
  { root: 'fin', meaning: '结束，界限', meaningEn: 'end, boundary', origin: 'Latin', originNote: '源自拉丁语 finis，意为"结束、界限"', originNoteEn: 'From Latin finis meaning "end, boundary"', example: 'final, finish, define, confine', words: [] },
  { root: 'form', meaning: '形状，形式', meaningEn: 'shape, form', origin: 'Latin', originNote: '源自拉丁语 forma，意为"形状"', originNoteEn: 'From Latin forma meaning "shape"', example: 'transform, reform, inform, conform', words: [] },
  { root: 'gen', meaning: '产生，种类', meaningEn: 'to produce, kind', origin: 'Greek', originNote: '源自希腊语 genos，意为"种类"', originNoteEn: 'From Greek genos meaning "kind"', example: 'generate, general, genetic, genius', words: [] },
  { root: 'graph/gram', meaning: '写，画', meaningEn: 'to write, to draw', origin: 'Greek', originNote: '源自希腊语 graphein，意为"写"', originNoteEn: 'From Greek graphein meaning "to write"', example: 'photograph, telegram, geography, program', words: [] },
  { root: 'gress', meaning: '走，行进', meaningEn: 'to walk, to step', origin: 'Latin', originNote: '源自拉丁语 gradi，意为"走"', originNoteEn: 'From Latin gradi meaning "to walk"', example: 'progress, congress, regress, aggressive', words: [] },
  { root: 'hab', meaning: '拥有，居住', meaningEn: 'to have, to live', origin: 'Latin', originNote: '源自拉丁语 habere，意为"拥有"', originNoteEn: 'From Latin habere meaning "to have"', example: 'habit, inhabit, rehabilitate, habitable', words: [] },
  { root: 'her/hes', meaning: '粘，坚持', meaningEn: 'to stick, to adhere', origin: 'Latin', originNote: '源自拉丁语 haerere，意为"粘住"', originNoteEn: 'From Latin haerere meaning "to stick"', example: 'adhere, inherit, hesitate, cohesive', words: [] },
  { root: 'homo', meaning: '相同', meaningEn: 'same', origin: 'Greek', originNote: '源自希腊语 homos，意为"相同"', originNoteEn: 'From Greek homos meaning "same"', example: 'homogeneous, homosexual, homonym, homology', words: [] },
  { root: 'hydr', meaning: '水', meaningEn: 'water', origin: 'Greek', originNote: '源自希腊语 hydor，意为"水"', originNoteEn: 'From Greek hydor meaning "water"', example: 'hydrogen, hydrant, dehydrate, hydrology', words: [] },
  { root: 'ject', meaning: '投，掷', meaningEn: 'to throw', origin: 'Latin', originNote: '源自拉丁语 jacere，意为"投掷"', originNoteEn: 'From Latin jacere meaning "to throw"', example: 'project, inject, reject, eject', words: [] },
  { root: 'jud/jur', meaning: '判断，法律', meaningEn: 'to judge, law', origin: 'Latin', originNote: '源自拉丁语 judicare和 jus', originNoteEn: 'From Latin judicare and jus', example: 'judge, jury, justice, injure', words: [] },
  { root: 'leg/lect', meaning: '读，选择', meaningEn: 'to read, to choose', origin: 'Latin', originNote: '源自拉丁语 legere，意为"读、选择"', originNoteEn: 'From Latin legere meaning "to read, to choose"', example: 'select, collect, elect, intellectual', words: [] },
  { root: 'log/logy', meaning: '话语，学科', meaningEn: 'word, study', origin: 'Greek', originNote: '源自希腊语 logos，意为"话语、理性"', originNoteEn: 'From Greek logos meaning "word, reason"', example: 'biology, technology, dialogue, catalog', words: [] },
  { root: 'magn', meaning: '大', meaningEn: 'great, large', origin: 'Latin', originNote: '源自拉丁语 magnus，意为"大"', originNoteEn: 'From Latin magnus meaning "great"', example: 'magnify, magnificent, magnitude, magnanimous', words: [] },
  { root: 'man/manu', meaning: '手', meaningEn: 'hand', origin: 'Latin', originNote: '源自拉丁语 manus，意为"手"', originNoteEn: 'From Latin manus meaning "hand"', example: 'manual, manufacture, manuscript, manicure', words: [30] },
  { root: 'mar', meaning: '海', meaningEn: 'sea', origin: 'Latin', originNote: '源自拉丁语 mare，意为"海"', originNoteEn: 'From Latin mare meaning "sea"', example: 'marine, submarine, maritime, mariner', words: [] },
  { root: 'medi', meaning: '中间', meaningEn: 'middle', origin: 'Latin', originNote: '源自拉丁语 medius，意为"中间的"', originNoteEn: 'From Latin medius meaning "middle"', example: 'mediate, medieval, medium, immediate', words: [] },
  { root: 'mem/memor', meaning: '记忆', meaningEn: 'memory', origin: 'Latin', originNote: '源自拉丁语 memoria，意为"记忆"', originNoteEn: 'From Latin memoria meaning "memory"', example: 'memory, memorial, commemorate, memorable', words: [] },
  { root: 'ment', meaning: '心智', meaningEn: 'mind', origin: 'Latin', originNote: '源自拉丁语 mens，意为"心智"', originNoteEn: 'From Latin mens meaning "mind"', example: 'mental, mention, comment, mentor', words: [] },
  { root: 'micr', meaning: '小，微', meaningEn: 'small, millionth', origin: 'Greek', originNote: '源自希腊语 mikros，意为"小"', originNoteEn: 'From Greek mikros meaning "small"', example: 'microscope, microphone, microwave, microbe', words: [] },
  { root: 'migr', meaning: '迁移', meaningEn: 'to move, to migrate', origin: 'Latin', originNote: '源自拉丁语 migrare，意为"迁移"', originNoteEn: 'From Latin migrare meaning "to migrate"', example: 'migrate, immigrant, emigrate, transmigration', words: [] },
  { root: 'min', meaning: '小，少', meaningEn: 'small, less', origin: 'Latin', originNote: '源自拉丁语 minor，意为"更小的"', originNoteEn: 'From Latin minor meaning "smaller"', example: 'minor, minus, diminish, miniature', words: [] },
  { root: 'mis/miss', meaning: '发送', meaningEn: 'to send', origin: 'Latin', originNote: '源自拉丁语 mittere，意为"发送"', originNoteEn: 'From Latin mittere meaning "to send"', example: 'missile, mission, dismiss, submit', words: [] },
  { root: 'mob', meaning: '动', meaningEn: 'to move', origin: 'Latin', originNote: '源自拉丁语 movere，意为"动"', originNoteEn: 'From Latin movere meaning "to move"', example: 'mobile, automobile, mobilize, mob', words: [] },
  { root: 'mod', meaning: '方式，模式', meaningEn: 'manner, mode', origin: 'Latin', originNote: '源自拉丁语 modus，意为"方式"', originNoteEn: 'From Latin modus meaning "manner"', example: 'modify, model, modern, mode', words: [] },
  { root: 'mon', meaning: '警告，提醒', meaningEn: 'to warn, to advise', origin: 'Latin', originNote: '源自拉丁语 monere，意为"警告、提醒"', originNoteEn: 'From Latin monere meaning "to warn"', example: 'monitor, monument, monster, admonish', words: [] },
  { root: 'mor', meaning: '道德', meaningEn: 'moral', origin: 'Latin', originNote: '源自拉丁语 mos，意为"道德、风俗"', originNoteEn: 'From Latin mos meaning "custom, morals"', example: 'moral, morale, demoralize, morass', words: [] },
  { root: 'morph', meaning: '形态', meaningEn: 'form, shape', origin: 'Greek', originNote: '源自希腊语 morphe，意为"形态"', originNoteEn: 'From Greek morphe meaning "form"', example: 'morphology, metamorphosis, amorphous, philosophy', words: [] },
  { root: 'mort', meaning: '死亡', meaningEn: 'death', origin: 'Latin', originNote: '源自拉丁语 mors，意为"死亡"', originNoteEn: 'From Latin mors meaning "death"', example: 'mortal, immortal, mortgage, mortify', words: [] },
  { root: 'mot', meaning: '动', meaningEn: 'to move', origin: 'Latin', originNote: '源自拉丁语 movere，意为"动"', originNoteEn: 'From Latin movere meaning "to move"', example: 'motion, motivate, motor, emotion', words: [] },
  { root: 'multi', meaning: '多', meaningEn: 'many', origin: 'Latin', originNote: '源自拉丁语 multus，意为"多"', originNoteEn: 'From Latin multus meaning "many"', example: 'multiple, multiply, multitude, multimedia', words: [] },
  { root: 'mut', meaning: '改变', meaningEn: 'to change', origin: 'Latin', originNote: '源自拉丁语 mutare，意为"改变"', originNoteEn: 'From Latin mutare meaning "to change"', example: 'mutate, mutual, commute, permutation', words: [] },
  { root: 'nat', meaning: '出生，天生', meaningEn: 'born, birth', origin: 'Latin', originNote: '源自拉丁语 nasci，意为"出生"', originNoteEn: 'From Latin nasci meaning "to be born"', example: 'native, natural, nature, innate', words: [] },
  { root: 'nav', meaning: '船，航行', meaningEn: 'ship, to sail', origin: 'Latin', originNote: '源自拉丁语 navis，意为"船"', originNoteEn: 'From Latin navis meaning "ship"', example: 'naval, navigate, navy, navigation', words: [] },
  { root: 'neg', meaning: '否认，否定', meaningEn: 'to deny', origin: 'Latin', originNote: '源自拉丁语 negare，意为"否认"', originNoteEn: 'From Latin negare meaning "to deny"', example: 'negate, negative, neglect, negotiate', words: [] },
  { root: 'neigh/nebor', meaning: '邻居', meaningEn: 'neighbor', origin: 'Latin', originNote: '源自拉丁语 vicinus，意为"邻居"', originNoteEn: 'From Latin vicinus meaning "neighbor"', example: 'neighbor, neighborhood, neighboring', words: [] },
  { root: 'neur/neuro', meaning: '神经', meaningEn: 'nerve', origin: 'Greek', originNote: '源自希腊语 neuron，意为"神经"', originNoteEn: 'From Greek neuron meaning "nerve"', example: 'neuron, neurosis, neurology, neurotic', words: [] },
  { root: 'noc/nox', meaning: '伤害', meaningEn: 'to harm, injury', origin: 'Latin', originNote: '源自拉丁语 nocere，意为"伤害"', originNoteEn: 'From Latin nocere meaning "to harm"', example: 'innocent, innocuous, noxious, negotiate', words: [] },
  { root: 'nom/nomy', meaning: '法则，治理', meaningEn: 'law,治理', origin: 'Greek', originNote: '源自希腊语 nomos，意为"法则"', originNoteEn: 'From Greek nomos meaning "law"', example: 'economy, astronomy, autonomy, anonymous', words: [] },
  { root: 'norm', meaning: '规范，标准', meaningEn: 'rule, standard', origin: 'Latin', originNote: '源自拉丁语 norma，意为"规范"', originNoteEn: 'From Latin norma meaning "rule"', example: 'normal, enormous, abnormal, norm', words: [] },
  { root: 'not', meaning: '知道，标记', meaningEn: 'to know, mark', origin: 'Latin', originNote: '源自拉丁语 notare，意为"标记"', originNoteEn: 'From Latin notare meaning "to mark"', example: 'note, notice, notable, notation', words: [] },
  { root: 'noun/nunci', meaning: '说，宣布', meaningEn: 'to speak, to announce', origin: 'Latin', originNote: '源自拉丁语 nuntiare，意为"宣布"', originNoteEn: 'From Latin nuntiare meaning "to announce"', example: 'pronounce, announce, denounce, enunciate', words: [] },
  { root: 'nov', meaning: '新', meaningEn: 'new', origin: 'Latin', originNote: '源自拉丁语 novus，意为"新"', originNoteEn: 'From Latin novus meaning "new"', example: 'novel, innovate, renovate, nova', words: [] },
  { root: 'null', meaning: '无，null', meaningEn: 'none, null', origin: 'Latin', originNote: '源自拉丁语 nullus，意为"无"', originNoteEn: 'From Latin nullus meaning "none"', example: 'null, nullify, annul, nullity', words: [] },
  { root: 'num/nombr', meaning: '数字', meaningEn: 'number', origin: 'Latin', originNote: '源自拉丁语 numerus，意为"数字"', originNoteEn: 'From Latin numerus meaning "number"', example: 'number, numerous, numeral, enumerate', words: [] },
  { root: 'nutri', meaning: '营养', meaningEn: 'to nourish', origin: 'Latin', originNote: '源自拉丁语 nutrire，意为"营养"', originNoteEn: 'From Latin nutrire meaning "to nourish"', example: 'nutrient, nutrition, nourish, nursery', words: [] },
  { root: 'ob', meaning: '对面，反对', meaningEn: 'toward, against', origin: 'Latin', originNote: '源自拉丁语 ob，意为"对面、反对"', originNoteEn: 'From Latin ob meaning "toward, against"', example: 'object, obtain, obvious, obvious', words: [] },
  { root: 'oc/of', meaning: '对面', meaningEn: 'toward', origin: 'Latin', originNote: '源自拉丁语 ob，意为"对面"', originNoteEn: 'From Latin ob meaning "toward"', example: 'occupy, occur, offer, oppose', words: [] },
  { root: 'oct', meaning: '八', meaningEn: 'eight', origin: 'Latin', originNote: '源自拉丁语 octo，意为"八"', originNoteEn: 'From Latin octo meaning "eight"', example: 'October, octave, octopus, octagon', words: [] },
  { root: 'ocul', meaning: '眼睛', meaningEn: 'eye', origin: 'Latin', originNote: '源自拉丁语 oculus，意为"眼睛"', originNoteEn: 'From Latin oculus meaning "eye"', example: 'ocular, binoculars, inoculate, oculist', words: [] },
  { root: 'omni', meaning: '全部', meaningEn: 'all', origin: 'Latin', originNote: '源自拉丁语 omnis，意为"全部"', originNoteEn: 'From Latin omnis meaning "all"', example: 'omnipresent, omnipotent, omnibus, omnivorous', words: [] },
  { root: 'opt', meaning: '选择', meaningEn: 'to choose', origin: 'Greek', originNote: '源自希腊语 haptein，意为"适合"', originNoteEn: 'From Greek haptein meaning "to fit"', example: 'option, adopt, optimum, optional', words: [] },
  { root: 'opto', meaning: '视力', meaningEn: 'sight', origin: 'Greek', originNote: '源自希腊语 opsis，意为"视力"', originNoteEn: 'From Greek opsis meaning "sight"', example: 'optical, optics, optometrist, myopic', words: [] },
  { root: 'ord', meaning: '顺序', meaningEn: 'order', origin: 'Latin', originNote: '源自拉丁语 ordiri，意为"开始、安排"', originNoteEn: 'From Latin ordiri meaning "to begin, to arrange"', example: 'order, ordinary, coordinate, subordinate', words: [] },
  { root: 'ori', meaning: '升起，开始', meaningEn: 'to rise, to begin', origin: 'Latin', originNote: '源自拉丁语 oriri，意为"升起"', originNoteEn: 'From Latin oriri meaning "to rise"', example: 'origin, orient,aboriginal, orientate', words: [] },
  { root: 'orn', meaning: '装饰', meaningEn: 'to decorate', origin: 'Latin', originNote: '源自拉丁语 ornare，意为"装饰"', originNoteEn: 'From Latin ornare meaning "to decorate"', example: 'ornament, adorn, suborn, ornate', words: [] },
  { root: 'oss/oste', meaning: '骨', meaningEn: 'bone', origin: 'Greek', originNote: '源自希腊语 osteon，意为"骨"', originNoteEn: 'From Greek osteon meaning "bone"', example: 'ossify, osteopathy, osteoporosis, ossuary', words: [] },
  { root: 'pac', meaning: '和平', meaningEn: 'peace', origin: 'Latin', originNote: '源自拉丁语 pax，意为"和平"', originNoteEn: 'From Latin pax meaning "peace"', example: 'peace, pacific, pacify, payce', words: [] },
  { root: 'pact', meaning: '条约，协议', meaningEn: 'agreement', origin: 'Latin', originNote: '源自拉丁语 pactum，意为"协议"', originNoteEn: 'From Latin pactum meaning "agreement"', example: 'pact, compact, impact, propagate', words: [] },
  { root: 'pan', meaning: '全部，泛', meaningEn: 'all', origin: 'Greek', originNote: '源自希腊语 pan，意为"全部"', originNoteEn: 'From Greek pan meaning "all"', example: 'pandemic, panacea, panorama, pantheon', words: [] },
  { root: 'par', meaning: '相等，准备', meaningEn: 'equal, prepare', origin: 'Latin', originNote: '源自拉丁语 par，意为"相等"', originNoteEn: 'From Latin par meaning "equal"', example: 'compare, prepare, separate, parity', words: [] },
  { root: 'para', meaning: '旁边，保护', meaningEn: 'beside, protect', origin: 'Greek', originNote: '源自希腊语 para，意为"旁边"', originNoteEn: 'From Greek para meaning "beside"', example: 'paragraph, parallel, parasite, parade', words: [] },
  { root: 'part', meaning: '部分', meaningEn: 'part', origin: 'Latin', originNote: '源自拉丁语 pars，意为"部分"', originNoteEn: 'From Latin pars meaning "part"', example: 'part, party, partly, partner', words: [] },
  { root: 'pass', meaning: '走，经过', meaningEn: 'to pass', origin: 'Latin', originNote: '源自拉丁语 passus，意为"步"', originNoteEn: 'From Latin passus meaning "step"', example: 'pass, passage, compass, surpass', words: [] },
  { root: 'path', meaning: '感受，疾病', meaningEn: 'feeling, disease', origin: 'Greek', originNote: '源自希腊语 pathos，意为"感受"', originNoteEn: 'From Greek pathos meaning "feeling"', example: 'sympathy, empathy, pathology, pathetic', words: [] },
  { root: 'patr', meaning: '父亲，祖国', meaningEn: 'father, country', origin: 'Latin', originNote: '源自拉丁语 pater，意为"父亲"', originNoteEn: 'From Latin pater meaning "father"', example: 'patriot, patron, pattern, compatible', words: [] },
  { root: 'ped', meaning: '脚，教育', meaningEn: 'foot, child', origin: 'Greek', originNote: '源自希腊语 paidos，意为"儿童"', originNoteEn: 'From Greek paidos meaning "child"', example: 'pedal, pedestrian, pedagogy, expedition', words: [] },
  { root: 'pel', meaning: '推，驱动', meaningEn: 'to push, to drive', origin: 'Latin', originNote: '源自拉丁语 pellere，意为"推"', originNoteEn: 'From Latin pellere meaning "to push"', example: 'expel, propel, compel, dispel', words: [] },
  { root: 'pen/penal/pun', meaning: '处罚', meaningEn: 'penalty, punishment', origin: 'Latin', originNote: '源自拉丁语 poena，意为"处罚"', originNoteEn: 'From Latin poena meaning "penalty"', example: 'penal, punish, penalty, penance', words: [] },
  { root: 'pend', meaning: '挂，悬', meaningEn: 'to hang', origin: 'Latin', originNote: '源自拉丁语 pendere，意为"挂"', originNoteEn: 'From Latin pendere meaning "to hang"', example: 'depend, suspend, expend, pendulum', words: [] },
  { root: 'per', meaning: '通过，完全', meaningEn: 'through, completely', origin: 'Latin', originNote: '源自拉丁语 per，意为"通过"', originNoteEn: 'From Latin per meaning "through"', example: 'perfect, persist, permit, perplex', words: [] },
  { root: 'peri', meaning: '周围', meaningEn: 'around', origin: 'Greek', originNote: '源自希腊语 peri，意为"周围"', originNoteEn: 'From Greek peri meaning "around"', example: 'period, peripheral, perimeter, perigee', words: [] },
  { root: 'perm', meaning: '许可', meaningEn: 'to permit', origin: 'Latin', originNote: '源自拉丁语 permittere，意为"许可"', originNoteEn: 'From Latin permittere meaning "to permit"', example: 'permit, permission, permissible, permanence', words: [] },
  { root: 'person', meaning: '人', meaningEn: 'person', origin: 'Latin', originNote: '源自拉丁语 persona，意为"人"', originNoteEn: 'From Latin persona meaning "person"', example: 'person, personal, personality, personnel', words: [] },
  { root: 'pet', meaning: '追求', meaningEn: 'to seek, to strive', origin: 'Latin', originNote: '源自拉丁语 petere，意为"追求"', originNoteEn: 'From Latin petere meaning "to seek"', example: 'compete, repeat, appetite, petition', words: [] },
  { root: 'phil', meaning: '爱', meaningEn: 'love', origin: 'Greek', originNote: '源自希腊语 philein，意为"爱"', originNoteEn: 'From Greek philein meaning "to love"', example: 'philosophy, philology, bibliophile, philanthropy', words: [] },
  { root: 'phon', meaning: '声音', meaningEn: 'sound', origin: 'Greek', originNote: '源自希腊语 phone，意为"声音"', originNoteEn: 'From Greek phone meaning "sound"', example: 'telephone, saxophone, symphony, phonetic', words: [] },
  { root: 'photo', meaning: '光', meaningEn: 'light', origin: 'Greek', originNote: '源自希腊语 phos，意为"光"', originNoteEn: 'From Greek phos meaning "light"', example: 'photograph, photosynthesis, photogenic, photoelectric', words: [] },
  { root: 'phys', meaning: '自然，物理', meaningEn: 'nature, physical', origin: 'Greek', originNote: '源自希腊语 physis，意为"自然"', originNoteEn: 'From Greek physis meaning "nature"', example: 'physics, physique, physician, physiologist', words: [] },
  { root: 'pic/pict', meaning: '画', meaningEn: 'to paint', origin: 'Latin', originNote: '源自拉丁语 pingere，意为"画"', originNoteEn: 'From Latin pingere meaning "to paint"', example: 'picture, depict, painting, pictograph', words: [] },
  { root: 'plac', meaning: '安放，满足', meaningEn: 'to place, to please', origin: 'Latin', originNote: '源自拉丁语 placere，意为"使满足"', originNoteEn: 'From Latin placere meaning "to please"', example: 'place, replace, displace, placid', words: [] },
  { root: 'plain/plaint', meaning: '打，悲伤', meaningEn: 'to strike, sorrow', origin: 'Latin', originNote: '源自拉丁语 plangere，意为"打、悲伤"', originNoteEn: 'From Latin plangere meaning "to strike, to mourn"', example: 'complain, plaint, plaintiff, plain', words: [] },
  { root: 'plan', meaning: '平', meaningEn: 'flat, level', origin: 'Latin', originNote: '源自拉丁语 planus，意为"平的"', originNoteEn: 'From Latin planus meaning "flat"', example: 'plan, plane, explain, planate', words: [] },
  { root: 'plat', meaning: '平', meaningEn: 'flat', origin: 'Greek', originNote: '源自希腊语 platus，意为"平的"', originNoteEn: 'From Greek platus meaning "flat"', example: 'plate, platform, plateau, plate', words: [] },
  { root: 'ple/plen', meaning: '满，装满', meaningEn: 'to fill, full', origin: 'Latin', originNote: '源自拉丁语 plere，意为"装满"', originNoteEn: 'From Latin plere meaning "to fill"', example: 'complete, plenty, supplement, implement', words: [] },
  { root: 'plic', meaning: '折叠', meaningEn: 'to fold', origin: 'Latin', originNote: '源自拉丁语 plicare，意为"折叠"', originNoteEn: 'From Latin plicare meaning "to fold"', example: 'complicate, explicit, implicate, duplicate', words: [] },
  { root: 'ply', meaning: '折叠，用力', meaningEn: 'to fold, to apply', origin: 'Latin', originNote: '源自拉丁语 plicare，意为"折叠"', originNoteEn: 'From Latin plicare meaning "to fold"', example: 'apply, supply, comply, imply', words: [] },
  { root: 'point/ponct', meaning: '点，刺', meaningEn: 'point, to pierce', origin: 'Latin', originNote: '源自拉丁语 pungere，意为"刺"', originNoteEn: 'From Latin pungere meaning "to pierce"', example: 'point, punctual, puncture, punctual', words: [] },
  { root: 'pol', meaning: '卖', meaningEn: 'to sell', origin: 'Latin', originNote: '源自拉丁语 vendere，意为"卖"', originNoteEn: 'From Latin vendere meaning "to sell"', example: 'price, precious, appreciate, depreciate', words: [] },
  { root: 'polit', meaning: '城市，公民', meaningEn: 'city, citizen', origin: 'Greek', originNote: '源自希腊语 polis，意为"城市"', originNoteEn: 'From Greek polis meaning "city"', example: 'politics, politician, metropolitan, police', words: [] },
  { root: 'popul', meaning: '人民', meaningEn: 'people', origin: 'Latin', originNote: '源自拉丁语 populus，意为"人民"', originNoteEn: 'From Latin populus meaning "people"', example: 'population, popular, populate, public', words: [] },
  { root: 'port', meaning: '携带，运输', meaningEn: 'to carry', origin: 'Latin', originNote: '源自拉丁语 portare，意为"携带"', originNoteEn: 'From Latin portare meaning "to carry"', example: 'transport, import, export, portable', words: [] },
  { root: 'pos/pon', meaning: '放置', meaningEn: 'to place', origin: 'Latin', originNote: '源自拉丁语 ponere，意为"放置"', originNoteEn: 'From Latin ponere meaning "to place"', example: 'position, compose, deposit, postpone', words: [] },
  { root: 'post', meaning: '后', meaningEn: 'after, behind', origin: 'Latin', originNote: '源自拉丁语 post，意为"后"', originNoteEn: 'From Latin post meaning "after"', example: 'postpone, postwar, postgraduate, postscript', words: [] },
  { root: 'pot', meaning: '能力', meaningEn: 'power', origin: 'Latin', originNote: '源自拉丁语 potis，意为"能的"', originNoteEn: 'From Latin potis meaning "able"', example: 'potential, power, possible, impotent', words: [] },
  { root: 'prec', meaning: '祈祷，请求', meaningEn: 'to pray, to request', origin: 'Latin', originNote: '源自拉丁语 precari，意为"祈祷"', originNoteEn: 'From Latin precari meaning "to pray"', example: 'pray, precious, precarious, interpolate', words: [] },
  { root: 'prehend', meaning: '抓', meaningEn: 'to seize', origin: 'Latin', originNote: '源自拉丁语 prehendere，意为"抓"', originNoteEn: 'From Latin prehendere meaning "to seize"', example: 'comprehend, apprehend,prehensile, surprised', words: [] },
  { root: 'premier', meaning: '第一', meaningEn: 'first', origin: 'Latin', originNote: '源自拉丁语 primus，意为"第一"', originNoteEn: 'From Latin primus meaning "first"', example: 'premier, primary, primitive, prime', words: [] },
  { root: 'press', meaning: '压', meaningEn: 'to press', origin: 'Latin', originNote: '源自拉丁语 premere，意为"压"', originNoteEn: 'From Latin premere meaning "to press"', example: 'press, pressure, compress, express', words: [] },
  { root: 'pret', meaning: '价值', meaningEn: 'worth', origin: 'Latin', originNote: '源自拉丁语 pretium，意为"价值"', originNoteEn: 'From Latin pretium meaning "price"', example: 'precious, appreciate, depreciate, price', words: [] },
  { root: 'prim', meaning: '第一', meaningEn: 'first', origin: 'Latin', originNote: '源自拉丁语 primus，意为"第一"', originNoteEn: 'From Latin primus meaning "first"', example: 'prime, primary, primitive, primeval', words: [] },
  { root: 'prin', meaning: '第一，主要', meaningEn: 'first, chief', origin: 'Latin', originNote: '源自拉丁语 primus，意为"第一"', originNoteEn: 'From Latin primus meaning "first"', example: 'prince, principal, principle, print', words: [] },
  { root: 'priv', meaning: '私人', meaningEn: 'private', origin: 'Latin', originNote: '源自拉丁语 privus，意为"私人的"', originNoteEn: 'From Latin privus meaning "private"', example: 'private, deprive, privacy, privilege', words: [] },
  { root: 'pro', meaning: '前，向前', meaningEn: 'forward, before', origin: 'Latin', originNote: '源自拉丁语 pro，意为"前、代替"', originNoteEn: 'From Latin pro meaning "forward, for"', example: 'progress, project, promise, pronoun', words: [] },
  { root: 'prob', meaning: '测试，证明', meaningEn: 'to test, to prove', origin: 'Latin', originNote: '源自拉丁语 probare，意为"测试"', originNoteEn: 'From Latin probare meaning "to test"', example: 'prove, probe, probable, proof', words: [] },
  { root: 'prom', meaning: '向前，赞成', meaningEn: 'forward, in favor', origin: 'Latin', originNote: '源自拉丁语 promere，意为"向前"', originNoteEn: 'From Latin promere meaning "to forward"', example: 'promise, promote, prompt, prominent', words: [] },
  { root: 'prop', meaning: '适当，拥有', meaningEn: 'proper, to own', origin: 'Latin', originNote: '源自拉丁语 proprius，意为"适当的"', originNoteEn: 'From Latin proprius meaning "proper"', example: 'property, proper, appropriate, proprietor', words: [] },
  { root: 'proto', meaning: '第一', meaningEn: 'first', origin: 'Greek', originNote: '源自希腊语 protos，意为"第一"', originNoteEn: 'From Greek protos meaning "first"', example: 'protocol, prototype, protagonist, protozoan', words: [] },
  { root: 'psych', meaning: '心灵', meaningEn: 'mind', origin: 'Greek', originNote: '源自希腊语 psyche，意为"心灵"', originNoteEn: 'From Greek psyche meaning "mind"', example: 'psychology, psychiatry, psychic, psychoanalyze', words: [] },
  { root: 'pugn', meaning: '战斗', meaningEn: 'to fight', origin: 'Latin', originNote: '源自拉丁语 pugnare，意为"战斗"', originNoteEn: 'From Latin pugnare meaning "to fight"', example: 'pugnacious, repugnant, impugn, oppugn', words: [] },
  { root: 'pur', meaning: '纯净', meaningEn: 'pure, clean', origin: 'Latin', originNote: '源自拉丁语 purus，意为"纯净的"', originNoteEn: 'From Latin purus meaning "pure"', example: 'pure, purify, purity, spur', words: [] },
  { root: 'put', meaning: '思考，计算', meaningEn: 'to think, to count', origin: 'Latin', originNote: '源自拉丁语 putare，意为"计算、思考"', originNoteEn: 'From Latin putare meaning "to think, to count"', example: 'compute, dispute, impute, reputation', words: [] },
  { root: 'quadr/quart', meaning: '四', meaningEn: 'four', origin: 'Latin', originNote: '源自拉丁语 quattuor，意为"四"', originNoteEn: 'From Latin quattuor meaning "four"', example: 'quarter, quadrangle, quadruple, quarantine', words: [] },
  { root: 'qual', meaning: '质量', meaningEn: 'quality', origin: 'Latin', originNote: '源自拉丁语 qualis，意为"什么样的"', originNoteEn: 'From Latin qualis meaning "of what kind"', example: 'quality, qualify, qualitative, qualification', words: [] },
  { root: 'quant', meaning: '量', meaningEn: 'quantity', origin: 'Latin', originNote: '源自拉丁语 quantus，意为"多少"', originNoteEn: 'From Latin quantus meaning "how much"', example: 'quantity, quantitative, quantify, quantum', words: [] },
  { root: 'quart', meaning: '第四', meaningEn: 'fourth', origin: 'Latin', originNote: '源自拉丁语 quartus，意为"第四"', originNoteEn: 'From Latin quartus meaning "fourth"', example: 'quarter, quart, quaternion, quartet', words: [] },
  { root: 'quer/quest/quir', meaning: '询问，追求', meaningEn: 'to ask, to seek', origin: 'Latin', originNote: '源自拉丁语 quaerere，意为"询问"', originNoteEn: 'From Latin quaerere meaning "to ask"', example: 'question, quest, require, query', words: [] },
  { root: 'quot', meaning: '多少', meaningEn: 'how many', origin: 'Latin', originNote: '源自拉丁语 quot，意为"多少"', originNoteEn: 'From Latin quot meaning "how many"', example: 'quote, quota, quotient, quotidian', words: [] },
  { root: 'radi', meaning: '光线，根', meaningEn: 'ray, root', origin: 'Latin', originNote: '源自拉丁语 radius，意为"光线、半径"', originNoteEn: 'From Latin radius meaning "ray, radius"', example: 'radiate, radius, radical, radio', words: [] },
  { root: 'radic', meaning: '根', meaningEn: 'root', origin: 'Latin', originNote: '源自拉丁语 radix，意为"根"', originNoteEn: 'From Latin radix meaning "root"', example: 'radical, eradicate, irradiation, coral', words: [] },
  { root: 'rang', meaning: '排列', meaningEn: 'to arrange', origin: 'Old French', originNote: '源自古法语 ranger，意为"排列"', originNoteEn: 'From Old French ranger meaning "to arrange"', example: 'range, arrange, derange, rank', words: [] },
  { root: 'rap', meaning: '抓，夺', meaningEn: 'to seize', origin: 'Latin', originNote: '源自拉丁语 rapere，意为"抓、夺"', originNoteEn: 'From Latin rapere meaning "to seize"', example: 'rapid, rapt, rapturous, rape', words: [] },
  { root: 'rat', meaning: '计算，理性', meaningEn: 'to calculate, reason', origin: 'Latin', originNote: '源自拉丁语 ratio，意为"计算、理性"', originNoteEn: 'From Latin ratio meaning "reason, calculation"', example: 'rate, ratio, rational, ration', words: [] },
  { root: 're', meaning: '回，再', meaningEn: 'back, again', origin: 'Latin', originNote: '源自拉丁语 re，意为"回、再"', originNoteEn: 'From Latin re meaning "back, again"', example: 'return, repeat, reflect, react', words: [] },
  { root: 'read', meaning: '准备', meaningEn: 'ready', origin: 'Anglo-Saxon', originNote: '源自古英语 rad，意为"准备"', originNoteEn: 'From Old English rad meaning "ready"', example: 'ready, already, read, readout', words: [] },
  { root: 'real', meaning: '真实', meaningEn: 'royal, real', origin: 'Latin', originNote: '源自拉丁语 regalis，意为"王室的"', originNoteEn: 'From Latin regalis meaning "royal"', example: 'real, reality, realize, realm', words: [] },
  { root: 'rect', meaning: '正，直', meaningEn: 'right, straight', origin: 'Latin', originNote: '源自拉丁语 rectus，意为"直的、正的"', originNoteEn: 'From Latin rectus meaning "straight, right"', example: 'correct, direct, erect, rectangle', words: [] },
  { root: 'reg', meaning: '统治', meaningEn: 'to rule', origin: 'Latin', originNote: '源自拉丁语 regere，意为"统治"', originNoteEn: 'From Latin regere meaning "to rule"', example: 'rule, reign, regulate, region', words: [] },
  { root: 'retro', meaning: '向后', meaningEn: 'backward', origin: 'Latin', originNote: '源自拉丁语 retro，意为"向后"', originNoteEn: 'From Latin retro meaning "backward"', example: 'retrograde, retrospect, retroactive, retrofit', words: [] },
  { root: 'rhin', meaning: '鼻', meaningEn: 'nose', origin: 'Greek', originNote: '源自希腊语 rhis，意为"鼻"', originNoteEn: 'From Greek rhis meaning "nose"', example: 'rhinitis, rhinoceros, rhinal, rhinencephalon', words: [] },
  { root: 'rhod', meaning: '玫瑰', meaningEn: 'rose', origin: 'Greek', originNote: '源自希腊语 rhodon，意为"玫瑰"', originNoteEn: 'From Greek rhodon meaning "rose"', example: 'rhododendron, rhodopsin, rhodium, rhodamine', words: [] },
  { root: 'rid', meaning: '笑', meaningEn: 'to laugh', origin: 'Latin', originNote: '源自拉丁语 ridere，意为"笑"', originNoteEn: 'From Latin ridere meaning "to laugh"', example: 'ridiculous, deride, ridicule, risible', words: [] },
  { root: 'ris', meaning: '笑', meaningEn: 'to laugh', origin: 'Latin', originNote: '源自拉丁语 ridere，意为"笑"', originNoteEn: 'From Latin ridere meaning "to laugh"', example: 'risible, derision, risible, risus', words: [] },
  { root: 'rod', meaning: '咬', meaningEn: 'to gnaw, to bite', origin: 'Latin', originNote: '源自拉丁语 rodere，意为"咬"', originNoteEn: 'From Latin rodere meaning "to gnaw"', example: 'rodent, corrode, erosion, rodenticide', words: [] },
  { root: 'rog', meaning: '询问', meaningEn: 'to ask', origin: 'Latin', originNote: '源自拉丁语 rogare，意为"询问"', originNoteEn: 'From Latin rogare meaning "to ask"', example: 'arrogate, interrogate, prerogative, deroga', words: [] },
  { root: 'rot', meaning: '轮，转', meaningEn: 'wheel, to turn', origin: 'Latin', originNote: '源自拉丁语 rota，意为"轮"', originNoteEn: 'From Latin rota meaning "wheel"', example: 'rotate, rotary, rotation, rotunda', words: [] },
  { root: 'rupt', meaning: '破', meaningEn: 'to break', origin: 'Latin', originNote: '源自拉丁语 rumpere，意为"破"', originNoteEn: 'From Latin rumpere meaning "to break"', example: 'interrupt, erupt, corrupt, rupture', words: [] },
  { root: 'sacr', meaning: '神圣', meaningEn: 'sacred', origin: 'Latin', originNote: '源自拉丁语 sacer，意为"神圣的"', originNoteEn: 'From Latin sacer meaning "sacred"', example: 'sacred, sacrifice, sacristan, consecrate', words: [] },
  { root: 'salu', meaning: '健康', meaningEn: 'health', origin: 'Latin', originNote: '源自拉丁语 salus，意为"健康、安全"', originNoteEn: 'From Latin salus meaning "health, safety"', example: 'salute, salvage, salubrious, salud', words: [] },
  { root: 'san', meaning: '健康', meaningEn: 'health', origin: 'Latin', originNote: '源自拉丁语 sanus，意为"健康的"', originNoteEn: 'From Latin sanus meaning "healthy"', example: 'sane, sanitary, sanity, insanitary', words: [] },
  { root: 'sangui', meaning: '血', meaningEn: 'blood', origin: 'Latin', originNote: '源自拉丁语 sanguis，意为"血"', originNoteEn: 'From Latin sanguis meaning "blood"', example: 'sanguine, consanguineous, sangfroid, sanguine', words: [] },
  { root: 'sat', meaning: '满足', meaningEn: 'enough, full', origin: 'Latin', originNote: '源自拉丁语 satis，意为"足够"', originNoteEn: 'From Latin satis meaning "enough, full"', example: 'saturate, satiate, satisfy, saturation', words: [] },
  { root: 'scend', meaning: '爬', meaningEn: 'to climb', origin: 'Latin', originNote: '源自拉丁语 scandere，意为"爬"', originNoteEn: 'From Latin scandere meaning "to climb"', example: 'ascend, descend, transcend, condescend', words: [] },
  { root: 'sci', meaning: '知道', meaningEn: 'to know', origin: 'Latin', originNote: '源自拉丁语 scire，意为"知道"', originNoteEn: 'From Latin scire meaning "to know"', example: 'science, conscious, conscience, scientific', words: [] },
  { root: 'scope', meaning: '看，仪器', meaningEn: 'to see, instrument', origin: 'Greek', originNote: '源自希腊语 skopein，意为"看"', originNoteEn: 'From Greek skopein meaning "to see"', example: 'telescope, microscope, scope, horoscope', words: [] },
  { root: 'scrib/script', meaning: '写', meaningEn: 'to write', origin: 'Latin', originNote: '源自拉丁语 scribere，意为"写"', originNoteEn: 'From Latin scribere meaning "to write"', example: 'describe, script, subscribe, manuscript', words: [] },
  { root: 'se', meaning: '分离', meaningEn: 'apart, without', origin: 'Latin', originNote: '源自拉丁语 se，意为"分离"', originNoteEn: 'From Latin se meaning "apart"', example: 'separate, seduce, select, secrete', words: [] },
  { root: 'sec', meaning: '跟随', meaningEn: 'to follow', origin: 'Latin', originNote: '源自拉丁语 sequi，意为"跟随"', originNoteEn: 'From Latin sequi meaning "to follow"', example: 'second, sequence, subsequent, consequence', words: [] },
  { root: 'sect', meaning: '切', meaningEn: 'to cut', origin: 'Latin', originNote: '源自拉丁语 secare，意为"切"', originNoteEn: 'From Latin secare meaning "to cut"', example: 'insect, section, bisect, dissect', words: [] },
  { root: 'sed', meaning: '坐', meaningEn: 'to sit', origin: 'Latin', originNote: '源自拉丁语 sedere，意为"坐"', originNoteEn: 'From Latin sedere meaning "to sit"', example: 'session, assess, possess, preside', words: [] },
  { root: 'semi', meaning: '半', meaningEn: 'half', origin: 'Latin', originNote: '源自拉丁语 semi，意为"半"', originNoteEn: 'From Latin semi meaning "half"', example: 'semifinal, semiconductor, semi-circle', words: [] },
  { root: 'sens/sent', meaning: '感觉', meaningEn: 'to feel, sense', origin: 'Latin', originNote: '源自拉丁语 sentire，意为"感觉"', originNoteEn: 'From Latin sentire meaning "to feel"', example: 'sense, sensible, sentiment, consent', words: [] },
  { root: 'sept', meaning: '七', meaningEn: 'seven', origin: 'Latin', originNote: '源自拉丁语 septem，意为"七"', originNoteEn: 'From Latin septem meaning "seven"', example: 'September, septet, septennial', words: [] },
  { root: 'serv', meaning: '服务，保存', meaningEn: 'to serve, to keep', origin: 'Latin', originNote: '源自拉丁语 servire，意为"服务"', originNoteEn: 'From Latin servire meaning "to serve"', example: 'service, servant, preserve, conserve', words: [] },
  { root: 'set', meaning: '放置', meaningEn: 'to set', origin: 'Latin', originNote: '源自拉丁语 ponere，意为"放置"', originNoteEn: 'From Latin ponere meaning "to place"', example: 'setting, inset, offset, sunset', words: [] },
  { root: 'sex', meaning: '六', meaningEn: 'six', origin: 'Latin', originNote: '源自拉丁语 sex，意为"六"', originNoteEn: 'From Latin sex meaning "six"', example: 'sex, sextet, sextant, sexennial', words: [] },
  { root: 'sign', meaning: '标记', meaningEn: 'to mark, sign', origin: 'Latin', originNote: '源自拉丁语 signum，意为"标记"', originNoteEn: 'From Latin signum meaning "mark"', example: 'sign, signal, signature, signify', words: [] },
  { root: 'simil', meaning: '相似', meaningEn: 'similar, alike', origin: 'Latin', originNote: '源自拉丁语 similis，意为"相似的"', originNoteEn: 'From Latin similis meaning "similar"', example: 'similar, similar, simulate, simultaneous', words: [] },
  { root: 'sinist', meaning: '左', meaningEn: 'left', origin: 'Latin', originNote: '源自拉丁语 sinister，意为"左的"', originNoteEn: 'From Latin sinister meaning "left"', example: 'sinister, sinistral', words: [] },
  { root: 'sist', meaning: '站立', meaningEn: 'to stand', origin: 'Latin', originNote: '源自拉丁语 sistere，意为"站立"', originNoteEn: 'From Latin sistere meaning "to stand"', example: 'assist, resist, persist, consist', words: [] },
  { root: 'soci', meaning: '同伴，联系', meaningEn: 'companion, to associate', origin: 'Latin', originNote: '源自拉丁语 socius，意为"同伴"', originNoteEn: 'From Latin socius meaning "companion"', example: 'social, society, associate, sociability', words: [] },
  { root: 'sol', meaning: '单独，太阳', meaningEn: 'alone, sun', origin: 'Latin', originNote: '源自拉丁语 solus，意为"单独的"，sol意为"太阳"', originNoteEn: 'From Latin solus meaning "alone" and sol meaning "sun"', example: 'solo, sole, solar, solution', words: [] },
  { root: 'solid', meaning: '固体', meaningEn: 'solid', origin: 'Latin', originNote: '源自拉丁语 solidus，意为"固体的"', originNoteEn: 'From Latin solidus meaning "solid"', example: 'solid, consolidate, solidarity, solidity', words: [] },
  { root: 'solu/solv', meaning: '松开，溶解', meaningEn: 'to loosen, to dissolve', origin: 'Latin', originNote: '源自拉丁语 solvere，意为"松开"', originNoteEn: 'From Latin solvere meaning "to loosen"', example: 'solve, soluble, solution, resolve', words: [] },
  { root: 'somn', meaning: '睡眠', meaningEn: 'sleep', origin: 'Latin', originNote: '源自拉丁语 somnus，意为"睡眠"', originNoteEn: 'From Latin somnus meaning "sleep"', example: 'insomnia, somnolent, somnambulism, somniferous', words: [] },
  { root: 'son', meaning: '声音', meaningEn: 'sound', origin: 'Latin', originNote: '源自拉丁语 sonus，意为"声音"', originNoteEn: 'From Latin sonus meaning "sound"', example: 'sonic, unison,ysonance, reson', words: [] },
  { root: 'soph', meaning: '智慧', meaningEn: 'wisdom', origin: 'Greek', originNote: '源自希腊语 sophos，意为"智慧的"', originNoteEn: 'From Greek sophos meaning "wise"', example: 'philosophy, sophisticated, sophomore, sophist', words: [] },
  { root: 'sort', meaning: '种类', meaningEn: 'kind, type', origin: 'Latin', originNote: '源自拉丁语 sors，意为"命运、种类"', originNoteEn: 'From Latin sors meaning "fate, kind"', example: 'sort, assort, consort, resour', words: [] },
  { root: 'spec/spic', meaning: '看，观察', meaningEn: 'to look, to see', origin: 'Latin', originNote: '源自拉丁语 specere，意为"看"', originNoteEn: 'From Latin specere meaning "to look"', example: 'spectator, aspect, spectator, respect', words: [] },
  { root: 'spect', meaning: '看，观察', meaningEn: 'to look, to see', origin: 'Latin', originNote: '源自拉丁语 spectare，意为"看、观察"', originNoteEn: 'From Latin spectare meaning "to look, to observe"', example: 'inspect, prospect, respect, spectator', words: [7, 75] },
  { root: 'sper', meaning: '希望', meaningEn: 'hope', origin: 'Latin', originNote: '源自拉丁语 spes，意为"希望"', originNoteEn: 'From Latin spes meaning "hope"', example: 'desperate, prosper, despair, desperation', words: [] },
  { root: 'spers', meaning: '散开', meaningEn: 'to scatter', origin: 'Latin', originNote: '源自拉丁语 spargere，意为"散开"', originNoteEn: 'From Latin spargere meaning "to scatter"', example: 'disperse, sparse, aspersion, intersperse', words: [] },
  { root: 'spir', meaning: '呼吸', meaningEn: 'to breathe', origin: 'Latin', originNote: '源自拉丁语 spirare，意为"呼吸"', originNoteEn: 'From Latin spirare meaning "to breathe"', example: 'spirit, inspire, expire, conspire', words: [] },
  { root: 'spond', meaning: '承诺', meaningEn: 'to promise', origin: 'Latin', originNote: '源自拉丁语 spondere，意为"承诺"', originNoteEn: 'From Latin spondere meaning "to promise"', example: 'respond, correspond, sponsor, despondent', words: [] },
  { root: 'st/sta', meaning: '站立', meaningEn: 'to stand', origin: 'Latin', originNote: '源自拉丁语 stare，意为"站立"', originNoteEn: 'From Latin stare meaning "to stand"', example: 'stand, stable, stadium, establish', words: [] },
  { root: 'stabil', meaning: '稳定', meaningEn: 'stable', origin: 'Latin', originNote: '源自拉丁语 stabilis，意为"稳定的"', originNoteEn: 'From Latin stabilis meaning "stable"', example: 'stable, stability, stabilize, instability', words: [] },
  { root: 'stanc', meaning: '站立', meaningEn: 'to stand', origin: 'Latin', originNote: '源自拉丁语 stare，意为"站立"', originNoteEn: 'From Latin stare meaning "to stand"', example: 'stance, instance, distance, substance', words: [] },
  { root: 'stat', meaning: '站立，状态', meaningEn: 'to stand, state', origin: 'Latin', originNote: '源自拉丁语 status，意为"状态"', originNoteEn: 'From Latin status meaning "state"', example: 'state, status, statue, stature', words: [] },
  { root: 'stinct', meaning: '刺，熄灭', meaningEn: 'to prick, to quench', origin: 'Latin', originNote: '源自拉丁语 stinguere，意为"熄灭"', originNoteEn: 'From Latin stinguere meaning "to extinguish"', example: 'distinct, extinguish, instinctive, distinct', words: [] },
  { root: 'stir', meaning: '刺激', meaningEn: 'to stimulate', origin: 'Latin', originNote: '源自拉丁语 stimulare，意为"刺激"', originNoteEn: 'From Latin stimulare meaning "to stimulate"', example: 'stimulate, stimulus, instinct, instigate', words: [] },
  { root: 'struct', meaning: '建造', meaningEn: 'to build', origin: 'Latin', originNote: '源自拉丁语 struere，意为"建造"', originNoteEn: 'From Latin struere meaning "to build"', example: 'construct, structure, instruct, destroy', words: [] },
  { root: 'sub', meaning: '下', meaningEn: 'under', origin: 'Latin', originNote: '源自拉丁语 sub，意为"下"', originNoteEn: 'From Latin sub meaning "under"', example: 'subway, subtitle, submit, submarine', words: [] },
  { root: 'suc', meaning: '后，继承', meaningEn: 'after, to follow', origin: 'Latin', originNote: '源自拉丁语 succedere，意为"继承"', originNoteEn: 'From Latin succedere meaning "to follow"', example: 'succeed, successor, succession, succint', words: [] },
  { root: 'sue', meaning: '跟随', meaningEn: 'to follow', origin: 'Latin', originNote: '源自拉丁语 sequi，意为"跟随"', originNoteEn: 'From Latin sequi meaning "to follow"', example: 'pursue, ensue, prosecute, lawsuit', words: [] },
  { root: 'sum', meaning: '拿，取，总计', meaningEn: 'to take, total', origin: 'Latin', originNote: '源自拉丁语 sumere，意为"拿"', originNoteEn: 'From Latin sumere meaning "to take"', example: 'assume, consume, presume, resume', words: [] },
  { root: 'sumpt', meaning: '拿，取', meaningEn: 'to take', origin: 'Latin', originNote: '源自拉丁语 sumere，意为"拿"', originNoteEn: 'From Latin sumere meaning "to take"', example: 'presume, assumption, consumption, presumptuous', words: [] },
  { root: 'sup', meaning: '上', meaningEn: 'above', origin: 'Latin', originNote: '源自拉丁语 super，意为"上"', originNoteEn: 'From Latin super meaning "above"', example: 'supreme, superficial, superfluous, supervisor', words: [] },
  { root: 'super', meaning: '上，超', meaningEn: 'above, beyond', origin: 'Latin', originNote: '源自拉丁语 super，意为"上"', originNoteEn: 'From Latin super meaning "above"', example: 'superman, supermarket, superhighway', words: [] },
  { root: 'sur', meaning: '上，超', meaningEn: 'over, above', origin: 'Latin', originNote: '源自拉丁语 super，意为"上"', originNoteEn: 'From Latin super meaning "above"', example: 'surface, surplus, surpass, surreal', words: [] },
  { root: 'syn', meaning: '共同', meaningEn: 'together, with', origin: 'Greek', originNote: '源自希腊语 syn，意为"共同"', originNoteEn: 'From Greek syn meaning "together"', example: 'synchronize, synthesis, syndrome, synergy', words: [] },
  { root: 'tact/tang', meaning: '触', meaningEn: 'to touch', origin: 'Latin', originNote: '源自拉丁语 tangere，意为"触"', originNoteEn: 'From Latin tangere meaning "to touch"', example: 'contact, intact, tangible, tangent', words: [] },
  { root: 'tain', meaning: '拿，持', meaningEn: 'to hold, to take', origin: 'Latin', originNote: '源自拉丁语 tenere，意为"拿"', originNoteEn: 'From Latin tenere meaning "to hold"', example: 'contain, obtain, retain, sustain', words: [] },
  { root: 'techn', meaning: '技术', meaningEn: 'skill, art', origin: 'Greek', originNote: '源自希腊语 techne，意为"技术"', originNoteEn: 'From Greek techne meaning "art, skill"', example: 'technology, technical, technique, technocratic', words: [] },
  { root: 'tele', meaning: '远', meaningEn: 'far', origin: 'Greek', originNote: '源自希腊语 tele，意为"远"', originNoteEn: 'From Greek tele meaning "far"', example: 'telephone, television, telescope, telecommunication', words: [] },
  { root: 'tem/temp', meaning: '时间', meaningEn: 'time', origin: 'Latin', originNote: '源自拉丁语 tempus，意为"时间"', originNoteEn: 'From Latin tempus meaning "time"', example: 'temporal, contemporary, temporary, tempo', words: [] },
  { root: 'temper', meaning: '调节', meaningEn: 'to moderate', origin: 'Latin', originNote: '源自拉丁语 temperare，意为"调节"', originNoteEn: 'From Latin temperare meaning "to moderate"', example: 'temper, temperate, temperature, temperament', words: [] },
  { root: 'tempt', meaning: '尝试', meaningEn: 'to try', origin: 'Latin', originNote: '源自拉丁语 temptare，意为"尝试"', originNoteEn: 'From Latin temptare meaning "to try"', example: 'tempt, attempt, temptation, contempt', words: [] },
  { root: 'ten', meaning: '拿，持', meaningEn: 'to hold', origin: 'Latin', originNote: '源自拉丁语 tenere，意为"拿"', originNoteEn: 'From Latin tenere meaning "to hold"', example: 'tenure, tenable, tenant, retention', words: [] },
  { root: 'tend', meaning: '伸展', meaningEn: 'to stretch', origin: 'Latin', originNote: '源自拉丁语 tendere，意为"伸展"', originNoteEn: 'From Latin tendere meaning "to stretch"', example: 'extend, intend, pretend, attend', words: [] },
  { root: 'tens', meaning: '伸展', meaningEn: 'to stretch', origin: 'Latin', originNote: '源自拉丁语 tendere，意为"伸展"', originNoteEn: 'From Latin tendere meaning "to stretch"', example: 'tense, tension, extensive, intensive', words: [] },
  { root: 'tent', meaning: '伸展，尝试', meaningEn: 'to stretch, to try', origin: 'Latin', originNote: '源自拉丁语 tentare，意为"尝试"', originNoteEn: 'From Latin tentare meaning "to try"', example: 'attempt, contend, intention, attention', words: [] },
  { root: 'term', meaning: '界限，术语', meaningEn: 'boundary, term', origin: 'Latin', originNote: '源自拉丁语 terminus，意为"界限"', originNoteEn: 'From Latin terminus meaning "boundary"', example: 'term, terminal, determine, exterminate', words: [] },
  { root: 'terra', meaning: '地球，土地', meaningEn: 'earth, land', origin: 'Latin', originNote: '源自拉丁语 terra，意为"土地"', originNoteEn: 'From Latin terra meaning "earth"', example: 'territory, terrace, terrain, Mediterranean', words: [] },
  { root: 'test', meaning: '测试，证明', meaningEn: 'to test, to witness', origin: 'Latin', originNote: '源自拉丁语 testis，意为"证人"', originNoteEn: 'From Latin testis meaning "witness"', example: 'test, testify, protest, contest', words: [] },
  { root: 'text', meaning: '编织，文本', meaningEn: 'to weave, text', origin: 'Latin', originNote: '源自拉丁语 texere，意为"编织"', originNoteEn: 'From Latin texere meaning "to weave"', example: 'text, context, textile, texture', words: [] },
  { root: 'the', meaning: '放置', meaningEn: 'to put', origin: 'Greek', originNote: '源自希腊语 tithenai，意为"放置"', originNoteEn: 'From Greek tithenai meaning "to put"', example: 'theme, thesis, hypothesis, synthesis', words: [] },
  { root: 'theo', meaning: '神', meaningEn: 'god', origin: 'Greek', originNote: '源自希腊语 theos，意为"神"', originNoteEn: 'From Greek theos meaning "god"', example: 'theology, theory, theater, atheism', words: [] },
  { root: 'therm', meaning: '热', meaningEn: 'heat', origin: 'Greek', originNote: '源自希腊语 thermos，意为"热"', originNoteEn: 'From Greek thermos meaning "hot"', example: 'thermometer, thermal, thermostat, hypothermia', words: [] },
  { root: 'tim', meaning: '害怕', meaningEn: 'to fear', origin: 'Latin', originNote: '源自拉丁语 timere，意为"害怕"', originNoteEn: 'From Latin timere meaning "to fear"', example: 'timid, timorous, intimidate, timidity', words: [] },
  { root: 'ting', meaning: '触碰', meaningEn: 'to touch', origin: 'Latin', originNote: '源自拉丁语 tangere，意为"触"', originNoteEn: 'From Latin tangere meaning "to touch"', example: 'contingent, intangible, tingle', words: [] },
  { root: 'tin', meaning: '持有', meaningEn: 'to hold', origin: 'Latin', originNote: '源自拉丁语 tenere，意为"持有"', originNoteEn: 'From Latin tenere meaning "to hold"', example: 'continue, perpetuate, continent, content', words: [] },
  { root: 'tire', meaning: '拉', meaningEn: 'to draw, to pull', origin: 'Latin', originNote: '源自拉丁语 trahere，意为"拉"', originNoteEn: 'From Latin trahere meaning "to draw"', example: 'tire, entire, retired, untired', words: [] },
  { root: 'tort', meaning: '扭曲', meaningEn: 'to twist', origin: 'Latin', originNote: '源自拉丁语 torquere，意为"扭曲"', originNoteEn: 'From Latin torquere meaning "to twist"', example: 'torture, distort, contort, torsion', words: [] },
  { root: 'tour', meaning: '转', meaningEn: 'to turn', origin: 'Latin', originNote: '源自拉丁语 tornare，意为"转"', originNoteEn: 'From Latin tornare meaning "to turn"', example: 'tour, tourist, tournament, contour', words: [] },
  { root: 'tox', meaning: '毒', meaningEn: 'poison', origin: 'Greek', originNote: '源自希腊语 toxikon，意为"毒"', originNoteEn: 'From Greek toxikon meaning "poison"', example: 'toxic, intoxicate, antidote, toxicity', words: [] },
  { root: 'tract', meaning: '拉', meaningEn: 'to draw, to pull', origin: 'Latin', originNote: '源自拉丁语 trahere，意为"拉"', originNoteEn: 'From Latin trahere meaning "to draw"', example: 'attract, contract, extract, subtract', words: [] },
  { root: 'trai', meaning: '拉，训练', meaningEn: 'to draw, to train', origin: 'Latin', originNote: '源自拉丁语 trahere，意为"拉"', originNoteEn: 'From Latin trahere meaning "to draw"', example: 'train, trait, trail, portrait', words: [] },
  { root: 'trans', meaning: '穿过', meaningEn: 'across, through', origin: 'Latin', originNote: '源自拉丁语 trans，意为"穿过"', originNoteEn: 'From Latin trans meaning "through"', example: 'transport, transform, transmit, translate', words: [] },
  { root: 'treat', meaning: '对待', meaningEn: 'to handle', origin: 'Latin', originNote: '源自古法语 traiter，意为"对待"', originNoteEn: 'From Old French traiter meaning "to treat"', example: 'treat, treatment, treaty, maltreat', words: [] },
  { root: 'trem', meaning: '颤抖', meaningEn: 'to tremble', origin: 'Latin', originNote: '源自拉丁语 tremere，意为"颤抖"', originNoteEn: 'From Latin tremere meaning "to tremble"', example: 'tremble, tremor, tremendous, tremulous', words: [] },
  { root: 'tri', meaning: '三', meaningEn: 'three', origin: 'Latin', originNote: '源自拉丁语 tres，意为"三"', originNoteEn: 'From Latin tres meaning "three"', example: 'triangle, triple, tricycle, tripod', words: [] },
  { root: 'trib', meaning: '给', meaningEn: 'to give', origin: 'Latin', originNote: '源自拉丁语 tribere，意为"给"', originNoteEn: 'From Latin tribere meaning "to give"', example: 'tribute, contribute, distribute, attribute', words: [] },
  { root: 'tribu', meaning: '给', meaningEn: 'to give', origin: 'Latin', originNote: '源自拉丁语 tribere，意为"给"', originNoteEn: 'From Latin tribere meaning "to give"', example: 'tribute, contribute, distribute, attribute', words: [] },
  { root: 'trich', meaning: '毛发', meaningEn: 'hair', origin: 'Greek', originNote: '源自希腊语 thrix，意为"毛发"', originNoteEn: 'From Greek thrix meaning "hair"', example: 'trichology, trichinosis, trichiasis', words: [] },
  { root: 'trig', meaning: '触发', meaningEn: 'trigger', origin: 'Latin', originNote: '源自拉丁语 triggere，意为"触发"', originNoteEn: 'From Latin triggere meaning "to trigger"', example: 'trigger, intrigue, trick', words: [] },
  { root: 'trim', meaning: '三', meaningEn: 'three', origin: 'Latin', originNote: '源自拉丁语 tri，意为"三"', originNoteEn: 'From Latin tri meaning "three"', example: 'trimester, trinity, trivial, triple', words: [] },
  { root: 'trop', meaning: '转，变化', meaningEn: 'to turn, change', origin: 'Greek', originNote: '源自希腊语 tropos，意为"转"', originNoteEn: 'From Greek tropos meaning "turn"', example: 'tropical, trophy, troposphere, heliotrope', words: [] },
  { root: 'troph', meaning: '营养', meaningEn: 'nourishment', origin: 'Greek', originNote: '源自希腊语 trophe，意为"营养"', originNoteEn: 'From Greek trophe meaning "nourishment"', example: 'trophy, atrophy, hypertrophy, photosynthesis', words: [] },
  { root: 'tru', meaning: '真实', meaningEn: 'true, trust', origin: 'Latin', originNote: '源自拉丁语 verus，意为"真实的"', originNoteEn: 'From Latin verus meaning "true"', example: 'true, trust, truth, truthful', words: [] },
  { root: 'tuit', meaning: '教导', meaningEn: 'to teach', origin: 'Latin', originNote: '源自拉丁语 docere，意为"教导"', originNoteEn: 'From Latin docere meaning "to teach"', example: 'tuition, tutor, tutorial, intuitive', words: [] },
  { root: 'turb', meaning: '扰乱', meaningEn: 'to disturb', origin: 'Latin', originNote: '源自拉丁语 turbare，意为"扰乱"', originNoteEn: 'From Latin turbare meaning "to disturb"', example: 'disturb, turbine, turbulence, perturb', words: [] },
  { root: 'turn', meaning: '转', meaningEn: 'to turn', origin: 'Latin', originNote: '源自拉丁语 tornare，意为"转"', originNoteEn: 'From Latin tornare meaning "to turn"', example: 'turn, return, turnaround, turnover', words: [] },
  { root: 'twist', meaning: '扭', meaningEn: 'to twist', origin: 'Anglo-Saxon', originNote: '源自古英语 twistan，意为"扭"', originNoteEn: 'From Old English twistan meaning "to twist"', example: 'twist, twisty, twisted, twistiness', words: [] },
  { root: 'typ', meaning: '类型', meaningEn: 'type', origin: 'Greek', originNote: '源自希腊语 typos，意为"模型"', originNoteEn: 'From Greek typos meaning "model"', example: 'type, typical, typography, prototype', words: [] },
  { root: 'ultim', meaning: '最后', meaningEn: 'last', origin: 'Latin', originNote: '源自拉丁语 ultimus，意为"最后的"', originNoteEn: 'From Latin ultimus meaning "last"', example: 'ultimate, ultimately, ultimatum', words: [] },
  { root: 'ultra', meaning: '以外', meaningEn: 'beyond', origin: 'Latin', originNote: '源自拉丁语 ultra，意为"以外"', originNoteEn: 'From Latin ultra meaning "beyond"', example: 'ultraviolet, ultrasonic, ultra-modern, ultrasound', words: [] },
  { root: 'um', meaning: '关于', meaningEn: 'about', origin: 'Latin', originNote: '源自拉丁语 umbra，意为"影子"', originNoteEn: 'From Latin umbra meaning "shadow"', example: 'umbrella, umbrage, umbral, umbra', words: [] },
  { root: 'un', meaning: '不', meaningEn: 'not', origin: 'Anglo-Saxon', originNote: '源自盎格鲁-撒克逊语，意为"不"', originNoteEn: 'From Anglo-Saxon meaning "not"', example: 'unhappy, undo, unclear, unknown', words: [] },
  { root: 'uni', meaning: '一', meaningEn: 'one', origin: 'Latin', originNote: '源自拉丁语 unus，意为"一"', originNoteEn: 'From Latin unus meaning "one"', example: 'unite, union, unique, universe', words: [] },
  { root: 'urb', meaning: '城市', meaningEn: 'city', origin: 'Latin', originNote: '源自拉丁语 urbs，意为"城市"', originNoteEn: 'From Latin urbs meaning "city"', example: 'urban, suburb, suburb, interurban', words: [] },
  { root: 'urg', meaning: '推，驱', meaningEn: 'to push, to drive', origin: 'Latin', originNote: '源自拉丁语 urgere，意为"推"', originNoteEn: 'From Latin urgere meaning "to push"', example: 'urge, urgent, surcharge, surge', words: [] },
  { root: 'us', meaning: '使用', meaningEn: 'to use', origin: 'Latin', originNote: '源自拉丁语 uti，意为"使用"', originNoteEn: 'From Latin uti meaning "to use"', example: 'use, usual, utensil, usury', words: [] },
  { root: 'vac', meaning: '空', meaningEn: 'empty', origin: 'Latin', originNote: '源自拉丁语 vacuus，意为"空的"', originNoteEn: 'From Latin vacuus meaning "empty"', example: 'vacant, vacation, vacuum, evacuate', words: [] },
  { root: 'vad', meaning: '走', meaningEn: 'to go', origin: 'Latin', originNote: '源自拉丁语 vadere，意为"走"', originNoteEn: 'From Latin vadere meaning "to go"', example: 'invade, pervade, evade, wade', words: [] },
  { root: 'vag', meaning: '漫游', meaningEn: 'to wander', origin: 'Latin', originNote: '源自拉丁语 vagari，意为"漫游"', originNoteEn: 'From Latin vagari meaning "to wander"', example: 'vague, vagary, vagrant, vagus', words: [] },
  { root: 'val', meaning: '强，价值', meaningEn: 'strong, worth', origin: 'Latin', originNote: '源自拉丁语 valere，意为"强壮、有价值"', originNoteEn: 'From Latin valere meaning "to be strong, to be worth"', example: 'value, valid, evaluate, equivalent', words: [] },
  { root: 'van', meaning: '空，前卫', meaningEn: 'empty, front', origin: 'Latin', originNote: '源自拉丁语 vanus，意为"空的"', originNoteEn: 'From Latin vanus meaning "empty"', example: 'vanish, vanity, van, vanguard', words: [] },
  { root: 'vapor', meaning: '蒸汽', meaningEn: 'steam, vapor', origin: 'Latin', originNote: '源自拉丁语 vapor，意为"蒸汽"', originNoteEn: 'From Latin vapor meaning "steam"', example: 'vapor, evaporate, vaporize, vaporous', words: [] },
  { root: 'var', meaning: '变化', meaningEn: 'to vary', origin: 'Latin', originNote: '源自拉丁语 variare，意为"变化"', originNoteEn: 'From Latin variare meaning "to vary"', example: 'vary, variable, variety, various', words: [] },
  { root: 'vas', meaning: '容器', meaningEn: 'vessel', origin: 'Latin', originNote: '源自拉丁语 vas，意为"容器"', originNoteEn: 'From Latin vas meaning "vessel"', example: 'vase, vascular, vasectomy, vessel', words: [] },
  { root: 'vect', meaning: '携带', meaningEn: 'to carry', origin: 'Latin', originNote: '源自拉丁语 vehere，意为"携带"', originNoteEn: 'From Latin vehere meaning "to carry"', example: 'vector, convect, inveigh, vehicle', words: [] },
  { root: 'veg', meaning: '活跃', meaningEn: 'to lively', origin: 'Latin', originNote: '源自拉丁语 vegere，意为"使活跃"', originNoteEn: 'From Latin vegere meaning "to enliven"', example: 'vegetable, vegetation, vegan, vigorous', words: [] },
  { root: 'veh', meaning: '携带', meaningEn: 'to carry', origin: 'Latin', originNote: '源自拉丁语 vehere，意为"携带"', originNoteEn: 'From Latin vehere meaning "to carry"', example: 'vehicle, vection, vehicular', words: [] },
  { root: 'ven', meaning: '来', meaningEn: 'to come', origin: 'Latin', originNote: '源自拉丁语 venire，意为"来"', originNoteEn: 'From Latin venire meaning "to come"', example: 'avenue, convenient, event, venture', words: [] },
  { root: 'vend', meaning: '卖', meaningEn: 'to sell', origin: 'Latin', originNote: '源自拉丁语 vendere，意为"卖"', originNoteEn: 'From Latin vendere meaning "to sell"', example: 'vendor, vendetta, vending, vendition', words: [] },
  { root: 'vent', meaning: '来，风', meaningEn: 'to come, wind', origin: 'Latin', originNote: '源自拉丁语 venire，意为"来"', originNoteEn: 'From Latin venire meaning "to come"', example: 'advent, convention, event, prevent', words: [] },
  { root: 'verb', meaning: '词', meaningEn: 'word', origin: 'Latin', originNote: '源自拉丁语 verbum，意为"词"', originNoteEn: 'From Latin verbum meaning "word"', example: 'verb, verbal, adverb, proverb', words: [] },
  { root: 'verd', meaning: '绿', meaningEn: 'green', origin: 'Old French', originNote: '源自古法语 verd，意为"绿"', originNoteEn: 'From Old French verd meaning "green"', example: 'verdant, verdict, verdigris, verditer', words: [] },
  { root: 'verg', meaning: '倾向', meaningEn: 'to incline', origin: 'Latin', originNote: '源自拉丁语 vergere，意为"倾斜"', originNoteEn: 'From Latin vergere meaning "to incline"', example: 'converge, diverge, Verger', words: [] },
  { root: 'vert', meaning: '转', meaningEn: 'to turn', origin: 'Latin', originNote: '源自拉丁语 vertere，意为"转"', originNoteEn: 'From Latin vertere meaning "to turn"', example: 'convert, reverse, version, controversy', words: [64, 78] },
  { root: 'vest', meaning: '衣服', meaningEn: 'clothing', origin: 'Latin', originNote: '源自拉丁语 vestis，意为"衣服"', originNoteEn: 'From Latin vestis meaning "clothing"', example: 'vest, vestment, invest, divest', words: [] },
  { root: 'vet', meaning: '老兵，兽医', meaningEn: 'veteran, animal doctor', origin: 'Latin', originNote: '源自拉丁语 vetus，意为"老的"', originNoteEn: 'From Latin vetus meaning "old"', example: 'veteran, veterinary, vet', words: [] },
  { root: 'vi', meaning: '道路，看', meaningEn: 'way, to see', origin: 'Latin', originNote: '源自拉丁语 via，意为"道路"，videre意为"看"', originNoteEn: 'From Latin via meaning "way" and videre meaning "to see"', example: 'via, viaduct, obvious, previous', words: [] },
  { root: 'vict', meaning: '征服', meaningEn: 'to conquer', origin: 'Latin', originNote: '源自拉丁语 vincere，意为"征服"', originNoteEn: 'From Latin vincere meaning "to conquer"', example: 'victor, victory, victorian, victory', words: [] },
  { root: 'vid', meaning: '看', meaningEn: 'to see', origin: 'Latin', originNote: '源自拉丁语 videre，意为"看"', originNoteEn: 'From Latin videre meaning "to see"', example: 'video, evident, provide, improvise', words: [] },
  { root: 'vig', meaning: '生命，活力', meaningEn: 'life, vigor', origin: 'Latin', originNote: '源自拉丁语 vigere，意为"旺盛"', originNoteEn: 'From Latin vigere meaning "to flourish"', example: 'vigor, vigilant, vital, vitality', words: [] },
  { root: 'vil', meaning: '卑鄙', meaningEn: 'base, vile', origin: 'Latin', originNote: '源自拉丁语 vilis，意为"卑鄙的"', originNoteEn: 'From Latin vilis meaning "base"', example: 'vile, villain, vilify, vileness', words: [] },
  { root: 'vin', meaning: '葡萄藤，酒', meaningEn: 'vine, wine', origin: 'Latin', originNote: '源自拉丁语 vinea，意为"葡萄园"', originNoteEn: 'From Latin vinea meaning "vineyard"', example: 'vine, vineyard, vintage, wine', words: [] },
  { root: 'vinc', meaning: '征服', meaningEn: 'to conquer', origin: 'Latin', originNote: '源自拉丁语 vincere，意为"征服"', originNoteEn: 'From Latin vincere meaning "to conquer"', example: 'convince, invincible, vict-vincible', words: [] },
  { root: 'viol', meaning: '暴力', meaningEn: 'violence', origin: 'Latin', originNote: '源自拉丁语 violentus，意为"猛烈的"', originNoteEn: 'From Latin violentus meaning "violent"', example: 'violent, violation, violate, violence', words: [] },
  { root: 'vir', meaning: '男人', meaningEn: 'man', origin: 'Latin', originNote: '源自拉丁语 vir，意为"男人"', originNoteEn: 'From Latin vir meaning "man"', example: 'virtue, virile, virtual, virus', words: [] },
  { root: 'vis', meaning: '看', meaningEn: 'to see', origin: 'Latin', originNote: '源自拉丁语 videre，意为"看"', originNoteEn: 'From Latin videre meaning "to see"', example: 'vision, visible, video, evidence', words: [] },
  { root: 'vit', meaning: '生命', meaningEn: 'life', origin: 'Latin', originNote: '源自拉丁语 vita，意为"生命"', originNoteEn: 'From Latin vita meaning "life"', example: 'vital, vitamin, vitality, devitalize', words: [] },
  { root: 'viv', meaning: '活', meaningEn: 'to live', origin: 'Latin', originNote: '源自拉丁语 vivere，意为"活"', originNoteEn: 'From Latin vivere meaning "to live"', example: 'vivid, vital, revive, survive, vivid', words: [] },
  { root: 'voc', meaning: '声音，叫', meaningEn: 'voice, to call', origin: 'Latin', originNote: '源自拉丁语 vox，意为"声音"', originNoteEn: 'From Latin vox meaning "voice"', example: 'vocal, vocabulary, evoke, invoke', words: [] },
  { root: 'vod', meaning: '声音', meaningEn: 'voice', origin: 'Latin', originNote: '源自拉丁语 vox，意为"声音"', originNoteEn: 'From Latin vox meaning "voice"', example: 'voucher, vouch, vocal, vocabulary', words: [] },
  { root: 'vol', meaning: '意志，卷', meaningEn: 'will, to roll', origin: 'Latin', originNote: '源自拉丁语 velle，意为"意志"，volvere意为"卷"', originNoteEn: 'From Latin velle meaning "will" and volvere meaning "to roll"', example: 'volunteer, volition, volume, revolve', words: [] },
  { root: 'volunt', meaning: '意志', meaningEn: 'will', origin: 'Latin', originNote: '源自拉丁语 velle，意为"意志"', originNoteEn: 'From Latin velle meaning "will"', example: 'volunteer, voluntary, involuntarily, volition', words: [] },
  { root: 'vor', meaning: '吃', meaningEn: 'to eat', origin: 'Latin', originNote: '源自拉丁语 vorare，意为"吃"', originNoteEn: 'From Latin vorare meaning "to eat"', example: 'voracious, carnivorous, herbivorous, omnivorous', words: [] },
  { root: 'vot', meaning: '誓言', meaningEn: 'vow', origin: 'Latin', originNote: '源自拉丁语 votum，意为"誓言"', originNoteEn: 'From Latin votum meaning "vow"', example: 'vote,devote, votive, devotation', words: [] },
  { root: 'vulg', meaning: '普通', meaningEn: 'common', origin: 'Latin', originNote: '源自拉丁语 vulgus，意为"普通人"', originNoteEn: 'From Latin vulgus meaning "common people"', example: 'vulgar, vulgarize, divuLgate, vulgate', words: [] },
  { root: 'vulner', meaning: '伤口', meaningEn: 'wound', origin: 'Latin', originNote: '源自拉丁语 vulnus，意为"伤口"', originNoteEn: 'From Latin vulnus meaning "wound"', example: 'vulnerable, invulnerable, vulnerability', words: [] },
  { root: 'ward', meaning: '守护，方向', meaningEn: 'to guard, direction', origin: 'Anglo-Saxon', originNote: '源自古英语 weard，意为"守护"', originNoteEn: 'From Old English weard meaning "guard"', example: 'ward, award, steward, backward', words: [] },
  { root: 'warm', meaning: '温暖', meaningEn: 'warm', origin: 'Anglo-Saxon', originNote: '源自古英语 wearm，意为"温暖"', originNoteEn: 'From Old English wearm meaning "warm"', example: 'warm, warmth, warm-up, warm-hearted', words: [] },
  { root: 'way', meaning: '道路', meaningEn: 'way', origin: 'Anglo-Saxon', originNote: '源自古英语 weg，意为"道路"', originNoteEn: 'From Old English weg meaning "road"', example: 'way, subway, highway, freeway', words: [] },
  { root: 'wealth', meaning: '财富', meaningEn: 'wealth', origin: 'Anglo-Saxon', originNote: '源自古英语 wela，意为"财富"', originNoteEn: 'From Old English wela meaning "wealth"', example: 'wealth, wealthy, commonwealth', words: [] },
  { root: 'wear', meaning: '穿', meaningEn: 'to wear', origin: 'Anglo-Saxon', originNote: '源自古英语 werian，意为"穿"', originNoteEn: 'From Old English werian meaning "to wear"', example: 'wear, wearable, wearisome, underwear', words: [] },
  { root: 'wise', meaning: '方式，智慧', meaningEn: 'way, wise', origin: 'Anglo-Saxon', originNote: '源自古英语 wise，意为"方式"', originNoteEn: 'From Old English wise meaning "manner"', example: 'wise, wisdom, likewise, otherwise', words: [] },
  { root: 'wish', meaning: '希望', meaningEn: 'to wish', origin: 'Anglo-Saxon', originNote: '源自古英语 wyscan，意为"希望"', originNoteEn: 'From Old English wyscan meaning "to wish"', example: 'wish, wistful, wishful, wishbone', words: [] },
  { root: 'with', meaning: '对抗，背', meaningEn: 'against, back', origin: 'Anglo-Saxon', originNote: '源自古英语 with，意为"对抗"', originNoteEn: 'From Old English with meaning "against"', example: 'withdraw, withhold, withstand, within', words: [] },
  { root: 'work', meaning: '工作', meaningEn: 'work', origin: 'Anglo-Saxon', originNote: '源自古英语 wyrcan，意为"工作"', originNoteEn: 'From Old English wyrcan meaning "to work"', example: 'work, homework, workspace, network', words: [] },
  { root: 'worth', meaning: '价值', meaningEn: 'worth', origin: 'Anglo-Saxon', originNote: '源自古英语 worth，意为"价值"', originNoteEn: 'From Old English worth meaning "worth"', example: 'worth, worthy, worthless, worthless', words: [] },
  { root: 'writ', meaning: '写', meaningEn: 'to write', origin: 'Anglo-Saxon', originNote: '源自古英语 writan，意为"写"', originNoteEn: 'From Old English writan meaning "to write"', example: 'write, writ, writer, writable', words: [] },
  { root: 'xyl', meaning: '木', meaningEn: 'wood', origin: 'Greek', originNote: '源自希腊语 xylon，意为"木"', originNoteEn: 'From Greek xylon meaning "wood"', example: 'xylem, xylophone, xylophilous, xylogen', words: [] },
  { root: 'xen', meaning: '外，陌生', meaningEn: 'foreign, strange', origin: 'Greek', originNote: '源自希腊语 xenos，意为"陌生人"', originNoteEn: 'From Greek xenos meaning "stranger"', example: 'xenophobia, xenon, xenogenesis, xenial', words: [] },
  { root: 'yester', meaning: '昨天', meaningEn: 'yesterday', origin: 'Anglo-Saxon', originNote: '源自古英语 geostran，意为"昨天"', originNoteEn: 'From Old English geostran meaning "yesterday"', example: 'yesterday, yesteryear, yester-night', words: [] },
  { root: 'young', meaning: '年轻', meaningEn: 'young', origin: 'Anglo-Saxon', originNote: '源自古英语 geong，意为"年轻"', originNoteEn: 'From Old English geong meaning "young"', example: 'young, youthful, youngster, youngling', words: [] },
  { root: 'zeal', meaning: '热心', meaningEn: 'enthusiasm', origin: 'Greek', originNote: '源自希腊语 zelos，意为"热心"', originNoteEn: 'From Greek zelos meaning "enthusiasm"', example: 'zeal, zealous, jealous, zealot', words: [] },
  { root: 'zero', meaning: '零', meaningEn: 'zero, nothing', origin: 'Greek', originNote: '源自阿拉伯语 sifr，通过希腊语传入欧洲', originNoteEn: 'From Arabic sifr, transmitted through Greek', example: 'zero, zeroize, zero-sum', words: [] },
  { root: 'zest', meaning: '热心，兴趣', meaningEn: 'enthusiasm, interest', origin: 'Old French', originNote: '源自古法语 zeste，意为"热心"', originNoteEn: 'From Old French zeste meaning "enthusiasm"', example: 'zest, zesty, zestful', words: [] },
  { root: 'zo', meaning: '动物', meaningEn: 'animal', origin: 'Greek', originNote: '源自希腊语 zoon，意为"动物"', originNoteEn: 'From Greek zoon meaning "animal"', example: 'zoo, zodiac, zoology, zoologist, zombie', words: [] }
];

export const prefixGroups: PrefixGroup[] = [
  { prefix: 'a-', meaning: '不，非，无', meaningEn: 'not, without', origin: 'Greek', originNote: '源自希腊语 a-/an-，意为"不、非"', originNoteEn: 'From Greek a-/an- meaning "not, without"', words: [] },
  { prefix: 'ab-', meaning: '离开，远离', meaningEn: 'away from', origin: 'Latin', originNote: '源自拉丁语 ab，意为"离开"', originNoteEn: 'From Latin ab meaning "away from"', words: [] },
  { prefix: 'ac-', meaning: '朝向，增加', meaningEn: 'to, toward, near', origin: 'Latin', originNote: '源自拉丁语 ac，意为"朝向"', originNoteEn: 'From Latin ac meaning "to, toward"', words: [] },
  { prefix: 'ad-', meaning: '朝向，增加', meaningEn: 'to, toward', origin: 'Latin', originNote: '源自拉丁语 ad，意为"朝向"', originNoteEn: 'From Latin ad meaning "to, toward"', words: [] },
  { prefix: 'af-', meaning: '朝向，增加', meaningEn: 'to, toward', origin: 'Latin', originNote: '源自拉丁语 ad，意为"朝向"', originNoteEn: 'From Latin ad meaning "to, toward"', words: [] },
  { prefix: 'ag-', meaning: '朝向，行动', meaningEn: 'to, toward, doing', origin: 'Latin', originNote: '源自拉丁语 agere，意为"行动"', originNoteEn: 'From Latin agere meaning "to do"', words: [] },
  { prefix: 'al-', meaning: '全部，共同', meaningEn: 'all, completely', origin: 'Latin', originNote: '源自拉丁语 al-，意为"全部"', originNoteEn: 'From Latin al- meaning "all"', words: [] },
  { prefix: 'am-', meaning: '周围，全', meaningEn: 'around, both', origin: 'Latin', originNote: '源自拉丁语 am-，意为"周围"', originNoteEn: 'From Latin am- meaning "around"', words: [] },
  { prefix: 'an-', meaning: '不，无', meaningEn: 'not, without', origin: 'Greek', originNote: '源自希腊语 an-，意为"不、非"', originNoteEn: 'From Greek an- meaning "not, without"', words: [] },
  { prefix: 'ana-', meaning: '上，再', meaningEn: 'up, again', origin: 'Greek', originNote: '源自希腊语 ana，意为"上、再"', originNoteEn: 'From Greek ana meaning "up, again"', words: [] },
  { prefix: 'ante-', meaning: '前，在...之前', meaningEn: 'before, in front', origin: 'Latin', originNote: '源自拉丁语 ante，意为"前"', originNoteEn: 'From Latin ante meaning "before"', words: [] },
  { prefix: 'anti-', meaning: '反对，对抗', meaningEn: 'against', origin: 'Greek', originNote: '源自希腊语 anti，意为"反对"', originNoteEn: 'From Greek anti meaning "against"', words: [] },
  { prefix: 'ap-', meaning: '朝向', meaningEn: 'to, toward', origin: 'Latin', originNote: '源自拉丁语 ad，意为"朝向"', originNoteEn: 'From Latin ad meaning "to, toward"', words: [] },
  { prefix: 'ar-', meaning: '朝向，使', meaningEn: 'to, toward', origin: 'Latin', originNote: '源自拉丁语 ad，意为"朝向"', originNoteEn: 'From Latin ad meaning "to, toward"', words: [] },
  { prefix: 'as-', meaning: '朝向，使', meaningEn: 'to, toward', origin: 'Latin', originNote: '源自拉丁语 ad，意为"朝向"', originNoteEn: 'From Latin ad meaning "to, toward"', words: [] },
  { prefix: 'at-', meaning: '朝向', meaningEn: 'to, toward', origin: 'Latin', originNote: '源自拉丁语 ad，意为"朝向"', originNoteEn: 'From Latin ad meaning "to, toward"', words: [] },
  { prefix: 'auto-', meaning: '自己，自动', meaningEn: 'self, automatic', origin: 'Greek', originNote: '源自希腊语 autos，意为"自己"', originNoteEn: 'From Greek autos meaning "self"', words: [] },
  { prefix: 'be-', meaning: '使...，关于', meaningEn: 'to make, about', origin: 'Anglo-Saxon', originNote: '源自盎格鲁-撒克逊语 be-', originNoteEn: 'From Anglo-Saxon be-', words: [] },
  { prefix: 'bi-', meaning: '二，双', meaningEn: 'two, twice', origin: 'Latin', originNote: '源自拉丁语 bi，意为"二"', originNoteEn: 'From Latin bi meaning "two"', words: [] },
  { prefix: 'by-', meaning: '在旁边，副的', meaningEn: 'near, side', origin: 'Anglo-Saxon', originNote: '源自盎格鲁-撒克逊语 by-', originNoteEn: 'From Anglo-Saxon by-', words: [] },
  { prefix: 'circum-', meaning: '周围，环绕', meaningEn: 'around', origin: 'Latin', originNote: '源自拉丁语 circum，意为"周围"', originNoteEn: 'From Latin circum meaning "around"', words: [] },
  { prefix: 'co-/col-/com-/con-', meaning: '共同，一起，完全', meaningEn: 'together, with, completely', origin: 'Latin', originNote: '源自拉丁语 cum，意为"一起、完全"', originNoteEn: 'From Latin cum meaning "with, together"', words: [] },
  { prefix: 'contra-', meaning: '反对，相对', meaningEn: 'against, opposite', origin: 'Latin', originNote: '源自拉丁语 contra，意为"反对"', originNoteEn: 'From Latin contra meaning "against"', words: [] },
  { prefix: 'counter-', meaning: '反对，相对', meaningEn: 'against, opposite', origin: 'Latin', originNote: '源自拉丁语 contra，意为"反对"', originNoteEn: 'From Latin contra meaning "against"', words: [] },
  { prefix: 'de-', meaning: '向下，去除，相反', meaningEn: 'down, away, opposite', origin: 'Latin', originNote: '源自拉丁语 de，意为"向下、去除"', originNoteEn: 'From Latin de meaning "down, away"', words: [] },
  { prefix: 'deca-', meaning: '十', meaningEn: 'ten', origin: 'Greek', originNote: '源自希腊语 deka，意为"十"', originNoteEn: 'From Greek deka meaning "ten"', words: [] },
  { prefix: 'demi-', meaning: '半', meaningEn: 'half', origin: 'Latin', originNote: '源自拉丁语 demi，意为"半"', originNoteEn: 'From Latin demi meaning "half"', words: [] },
  { prefix: 'di-', meaning: '二，双', meaningEn: 'two, twice', origin: 'Greek', originNote: '源自希腊语 di-，意为"二"', originNoteEn: 'From Greek di- meaning "two"', words: [] },
  { prefix: 'dia-', meaning: '穿过，之间', meaningEn: 'through, between', origin: 'Greek', originNote: '源自希腊语 dia，意为"穿过"', originNoteEn: 'From Greek dia meaning "through"', words: [] },
  { prefix: 'dis-', meaning: '不，分离，取消', meaningEn: 'not, apart, opposite', origin: 'Latin', originNote: '源自拉丁语 dis，意为"分开、否定"', originNoteEn: 'From Latin dis meaning "apart, not"', words: [] },
  { prefix: 'dys-', meaning: '不良，困难', meaningEn: 'bad, difficult', origin: 'Greek', originNote: '源自希腊语 dys-，意为"不良"', originNoteEn: 'From Greek dys- meaning "bad"', words: [] },
  { prefix: 'e-/ec-/ef-', meaning: '出，外', meaningEn: 'out, from', origin: 'Latin', originNote: '源自拉丁语 ex，意为"出、外"', originNoteEn: 'From Latin ex meaning "out, from"', words: [] },
  { prefix: 'em-/en-', meaning: '使...，进入', meaningEn: 'to make, in', origin: 'Greek', originNote: '源自希腊语 en-，意为"使..."', originNoteEn: 'From Greek en- meaning "in"', words: [] },
  { prefix: 'endo-', meaning: '内', meaningEn: 'within, inside', origin: 'Greek', originNote: '源自希腊语 endon，意为"内"', originNoteEn: 'From Greek endon meaning "within"', words: [] },
  { prefix: 'epi-', meaning: '在...之上', meaningEn: 'upon, above', origin: 'Greek', originNote: '源自希腊语 epi，意为"在...之上"', originNoteEn: 'From Greek epi meaning "upon"', words: [] },
  { prefix: 'eu-', meaning: '好，优', meaningEn: 'good, well', origin: 'Greek', originNote: '源自希腊语 eu，意为"好"', originNoteEn: 'From Greek eu meaning "good"', words: [] },
  { prefix: 'ex-', meaning: '出，外，前', meaningEn: 'out, from, former', origin: 'Latin', originNote: '源自拉丁语 ex，意为"出、外"', originNoteEn: 'From Latin ex meaning "out, from"', words: [] },
  { prefix: 'exo-', meaning: '外', meaningEn: 'outside', origin: 'Greek', originNote: '源自希腊语 exo，意为"外"', originNoteEn: 'From Greek exo meaning "outside"', words: [] },
  { prefix: 'extra-', meaning: '额外，超过', meaningEn: 'beyond, outside', origin: 'Latin', originNote: '源自拉丁语 extra，意为"额外"', originNoteEn: 'From Latin extra meaning "beyond"', words: [] },
  { prefix: 'for-', meaning: '禁止，离去', meaningEn: 'away, not', origin: 'Anglo-Saxon', originNote: '源自盎格鲁-撒克逊语 for-', originNoteEn: 'From Anglo-Saxon for-', words: [] },
  { prefix: 'fore-', meaning: '前，预先', meaningEn: 'before, in front', origin: 'Anglo-Saxon', originNote: '源自盎格鲁-撒克逊语 fore-', originNoteEn: 'From Anglo-Saxon fore-', words: [] },
  { prefix: 'geo-', meaning: '地球，土地', meaningEn: 'earth, land', origin: 'Greek', originNote: '源自希腊语 ge，意为"地球"', originNoteEn: 'From Greek ge meaning "earth"', words: [] },
  { prefix: 'hemi-', meaning: '半', meaningEn: 'half', origin: 'Greek', originNote: '源自希腊语 hemi-，意为"半"', originNoteEn: 'From Greek hemi- meaning "half"', words: [] },
  { prefix: 'hepta-', meaning: '七', meaningEn: 'seven', origin: 'Greek', originNote: '源自希腊语 hepta，意为"七"', originNoteEn: 'From Greek hepta meaning "seven"', words: [] },
  { prefix: 'hetero-', meaning: '异，不同', meaningEn: 'different, other', origin: 'Greek', originNote: '源自希腊语 heteros，意为"异"', originNoteEn: 'From Greek heteros meaning "other"', words: [] },
  { prefix: 'hexa-', meaning: '六', meaningEn: 'six', origin: 'Greek', originNote: '源自希腊语 hex，意为"六"', originNoteEn: 'From Greek hex meaning "six"', words: [] },
  { prefix: 'holo-', meaning: '全部', meaningEn: 'whole, entire', origin: 'Greek', originNote: '源自希腊语 holos，意为"全部"', originNoteEn: 'From Greek holos meaning "whole"', words: [] },
  { prefix: 'homo-', meaning: '相同', meaningEn: 'same', origin: 'Greek', originNote: '源自希腊语 homos，意为"相同"', originNoteEn: 'From Greek homos meaning "same"', words: [] },
  { prefix: 'hydro-', meaning: '水', meaningEn: 'water', origin: 'Greek', originNote: '源自希腊语 hydor，意为"水"', originNoteEn: 'From Greek hydor meaning "water"', words: [] },
  { prefix: 'hyper-', meaning: '超过，过度', meaningEn: 'over, above, excessive', origin: 'Greek', originNote: '源自希腊语 hyper，意为"超过"', originNoteEn: 'From Greek hyper meaning "over"', words: [] },
  { prefix: 'hypo-', meaning: '下，低，少', meaningEn: 'under, below, less', origin: 'Greek', originNote: '源自希腊语 hypo，意为"下"', originNoteEn: 'From Greek hypo meaning "under"', words: [] },
  { prefix: 'il-', meaning: '不，无', meaningEn: 'not', origin: 'Latin', originNote: '源自拉丁语 in-，意为"不"', originNoteEn: 'From Latin in- meaning "not"', words: [] },
  { prefix: 'im-', meaning: '不，向内，使...', meaningEn: 'not, in, to make', origin: 'Latin', originNote: '源自拉丁语 in-，意为"不、向内"', originNoteEn: 'From Latin in- meaning "not, in"', words: [] },
  { prefix: 'in-', meaning: '不，向内', meaningEn: 'not, into', origin: 'Latin', originNote: '源自拉丁语 in，意为"不、向内"', originNoteEn: 'From Latin in meaning "not, into"', words: [] },
  { prefix: 'infra-', meaning: '在下，在内', meaningEn: 'below, under', origin: 'Latin', originNote: '源自拉丁语 infra，意为"在下"', originNoteEn: 'From Latin infra meaning "below"', words: [] },
  { prefix: 'inter-', meaning: '在...之间', meaningEn: 'between, among', origin: 'Latin', originNote: '源自拉丁语 inter，意为"在...之间"', originNoteEn: 'From Latin inter meaning "between"', words: [] },
  { prefix: 'intra-', meaning: '在内', meaningEn: 'within, inside', origin: 'Latin', originNote: '源自拉丁语 intra，意为"在内"', originNoteEn: 'From Latin intra meaning "within"', words: [] },
  { prefix: 'ir-', meaning: '不，无', meaningEn: 'not', origin: 'Latin', originNote: '源自拉丁语 in-，意为"不"', originNoteEn: 'From Latin in- meaning "not"', words: [] },
  { prefix: 'iso-', meaning: '相等', meaningEn: 'equal', origin: 'Greek', originNote: '源自希腊语 isos，意为"相等"', originNoteEn: 'From Greek isos meaning "equal"', words: [] },
  { prefix: 'macro-', meaning: '大，宏', meaningEn: 'large, long', origin: 'Greek', originNote: '源自希腊语 makros，意为"大"', originNoteEn: 'From Greek makros meaning "large"', words: [] },
  { prefix: 'mal-/male-', meaning: '坏，不良', meaningEn: 'bad, ill', origin: 'Latin', originNote: '源自拉丁语 malus，意为"坏"', originNoteEn: 'From Latin malus meaning "bad"', words: [] },
  { prefix: 'meta-', meaning: '变，元，超', meaningEn: 'change, beyond, after', origin: 'Greek', originNote: '源自希腊语 meta，意为"变、元"', originNoteEn: 'From Greek meta meaning "change"', words: [] },
  { prefix: 'micro-', meaning: '小，微', meaningEn: 'small, millionth', origin: 'Greek', originNote: '源自希腊语 mikros，意为"小"', originNoteEn: 'From Greek mikros meaning "small"', words: [] },
  { prefix: 'milli-', meaning: '千分之一', meaningEn: 'thousandth', origin: 'Latin', originNote: '源自拉丁语 milli，意为"千分之一"', originNoteEn: 'From Latin milli meaning "thousandth"', words: [] },
  { prefix: 'mini-', meaning: '小', meaningEn: 'small, little', origin: 'Latin', originNote: '源自拉丁语 minimus，意为"最小"', originNoteEn: 'From Latin minimus meaning "smallest"', words: [] },
  { prefix: 'mis-', meaning: '错误', meaningEn: 'wrong, badly', origin: 'Anglo-Saxon', originNote: '源自盎格鲁-撒克逊语，意为"错误"', originNoteEn: 'From Anglo-Saxon meaning "wrong"', words: [] },
  { prefix: 'mono-', meaning: '单一', meaningEn: 'one, single', origin: 'Greek', originNote: '源自希腊语 monos，意为"单一"', originNoteEn: 'From Greek monos meaning "single"', words: [] },
  { prefix: 'multi-', meaning: '多', meaningEn: 'many, much', origin: 'Latin', originNote: '源自拉丁语 multus，意为"多"', originNoteEn: 'From Latin multus meaning "many"', words: [] },
  { prefix: 'neo-', meaning: '新', meaningEn: 'new, recent', origin: 'Greek', originNote: '源自希腊语 neos，意为"新"', originNoteEn: 'From Greek neos meaning "new"', words: [] },
  { prefix: 'non-', meaning: '不，非', meaningEn: 'not', origin: 'Latin', originNote: '源自拉丁语 non，意为"不"', originNoteEn: 'From Latin non meaning "not"', words: [] },
  { prefix: 'nova-', meaning: '新', meaningEn: 'new', origin: 'Latin', originNote: '源自拉丁语 novus，意为"新"', originNoteEn: 'From Latin novus meaning "new"', words: [] },
  { prefix: 'ob-', meaning: '对面，反', meaningEn: 'against, toward', origin: 'Latin', originNote: '源自拉丁语 ob，意为"对面、反"', originNoteEn: 'From Latin ob meaning "against"', words: [] },
  { prefix: 'octa-/octo-', meaning: '八', meaningEn: 'eight', origin: 'Greek', originNote: '源自希腊语 oktw，意为"八"', originNoteEn: 'From Greek oktw meaning "eight"', words: [] },
  { prefix: 'of-', meaning: '朝向，使', meaningEn: 'to, toward', origin: 'Latin', originNote: '源自拉丁语 ob，意为"朝向"', originNoteEn: 'From Latin ob meaning "to, toward"', words: [] },
  { prefix: 'omni-', meaning: '全，所有', meaningEn: 'all, every', origin: 'Latin', originNote: '源自拉丁语 omnis，意为"全"', originNoteEn: 'From Latin omnis meaning "all"', words: [] },
  { prefix: 'op-', meaning: '朝向，反', meaningEn: 'to, toward, against', origin: 'Latin', originNote: '源自拉丁语 ob，意为"朝向"', originNoteEn: 'From Latin ob meaning "to, toward"', words: [] },
  { prefix: 'out-', meaning: '出，超过', meaningEn: 'out, beyond', origin: 'Anglo-Saxon', originNote: '源自盎格鲁-撒克逊语 out-', originNoteEn: 'From Anglo-Saxon out-', words: [] },
  { prefix: 'over-', meaning: '过度，在...之上', meaningEn: 'over, too much', origin: 'Anglo-Saxon', originNote: '源自盎格鲁-撒克逊语，意为"过度、在...之上"', originNoteEn: 'From Anglo-Saxon meaning "over, too much"', words: [] },
  { prefix: 'pan-', meaning: '全，泛', meaningEn: 'all, entire', origin: 'Greek', originNote: '源自希腊语 pan，意为"全"', originNoteEn: 'From Greek pan meaning "all"', words: [] },
  { prefix: 'para-', meaning: '旁边，辅助', meaningEn: 'beside, beyond', origin: 'Greek', originNote: '源自希腊语 para，意为"旁边"', originNoteEn: 'From Greek para meaning "beside"', words: [] },
  { prefix: 'penta-', meaning: '五', meaningEn: 'five', origin: 'Greek', originNote: '源自希腊语pente，意为"五"', originNoteEn: 'From Greek pente meaning "five"', words: [] },
  { prefix: 'per-', meaning: '通过，完全，坏', meaningEn: 'through, completely, very', origin: 'Latin', originNote: '源自拉丁语 per，意为"通过、完全"', originNoteEn: 'From Latin per meaning "through"', words: [] },
  { prefix: 'peri-', meaning: '周围', meaningEn: 'around, about', origin: 'Greek', originNote: '源自希腊语 peri，意为"周围"', originNoteEn: 'From Greek peri meaning "around"', words: [] },
  { prefix: 'poly-', meaning: '多', meaningEn: 'many, much', origin: 'Greek', originNote: '源自希腊语 polys，意为"多"', originNoteEn: 'From Greek polys meaning "many"', words: [] },
  { prefix: 'post-', meaning: '后，在...之后', meaningEn: 'after, behind', origin: 'Latin', originNote: '源自拉丁语 post，意为"后"', originNoteEn: 'From Latin post meaning "after"', words: [] },
  { prefix: 'pre-', meaning: '前，预先', meaningEn: 'before, in front', origin: 'Latin', originNote: '源自拉丁语 prae，意为"前"', originNoteEn: 'From Latin prae meaning "before"', words: [] },
  { prefix: 'pro-', meaning: '前，赞成', meaningEn: 'before, for, forward', origin: 'Latin', originNote: '源自拉丁语 pro，意为"前、赞成"', originNoteEn: 'From Latin pro meaning "before, for"', words: [] },
  { prefix: 'proto-', meaning: '原始，第一', meaningEn: 'first, primary', origin: 'Greek', originNote: '源自希腊语 protos，意为"第一"', originNoteEn: 'From Greek protos meaning "first"', words: [] },
  { prefix: 'pseudo-', meaning: '伪，假', meaningEn: 'false, fake', origin: 'Greek', originNote: '源自希腊语 pseudos，意为"伪"', originNoteEn: 'From Greek pseudos meaning "false"', words: [] },
  { prefix: 'quadri-/quadru-', meaning: '四', meaningEn: 'four', origin: 'Latin', originNote: '源自拉丁语 quattuor，意为"四"', originNoteEn: 'From Latin quattuor meaning "four"', words: [] },
  { prefix: 'quinti-', meaning: '五', meaningEn: 'fifth', origin: 'Latin', originNote: '源自拉丁语 quintus，意为"第五"', originNoteEn: 'From Latin quintus meaning "fifth"', words: [] },
  { prefix: 're-', meaning: '再，重新', meaningEn: 'again, back', origin: 'Latin', originNote: '源自拉丁语 re，意为"再、重新"', originNoteEn: 'From Latin re meaning "again, back"', words: [] },
  { prefix: 'retro-', meaning: '向后', meaningEn: 'backward, behind', origin: 'Latin', originNote: '源自拉丁语 retro，意为"向后"', originNoteEn: 'From Latin retro meaning "backward"', words: [] },
  { prefix: 'se-', meaning: '分离，离开', meaningEn: 'apart, away', origin: 'Latin', originNote: '源自拉丁语 se，意为"分离"', originNoteEn: 'From Latin se meaning "apart"', words: [] },
  { prefix: 'semi-', meaning: '半', meaningEn: 'half, partly', origin: 'Latin', originNote: '源自拉丁语 semi，意为"半"', originNoteEn: 'From Latin semi meaning "half"', words: [] },
  { prefix: 'septem-/sept-', meaning: '七', meaningEn: 'seven', origin: 'Latin', originNote: '源自拉丁语 septem，意为"七"', originNoteEn: 'From Latin septem meaning "seven"', words: [] },
  { prefix: 'sex-', meaning: '六', meaningEn: 'six', origin: 'Latin', originNote: '源自拉丁语 sex，意为"六"', originNoteEn: 'From Latin sex meaning "six"', words: [] },
  { prefix: 'sub-', meaning: '下，在...下面', meaningEn: 'under, below', origin: 'Latin', originNote: '源自拉丁语 sub，意为"在...下面"', originNoteEn: 'From Latin sub meaning "under"', words: [] },
  { prefix: 'suc-/suf-/sug-/sup-', meaning: '下，在下', meaningEn: 'under, below', origin: 'Latin', originNote: '源自拉丁语 sub，意为"在下"', originNoteEn: 'From Latin sub meaning "under"', words: [] },
  { prefix: 'super-', meaning: '超，在...之上', meaningEn: 'above, over, beyond', origin: 'Latin', originNote: '源自拉丁语 super，意为"超、在...之上"', originNoteEn: 'From Latin super meaning "above, over"', words: [] },
  { prefix: 'supra-', meaning: '在上，超过', meaningEn: 'above, beyond', origin: 'Latin', originNote: '源自拉丁语 supra，意为"在上"', originNoteEn: 'From Latin supra meaning "above"', words: [] },
  { prefix: 'sur-', meaning: '上，超', meaningEn: 'over, above', origin: 'Latin', originNote: '源自拉丁语 super，意为"上、超"', originNoteEn: 'From Latin super meaning "over"', words: [] },
  { prefix: 'sym-/syn-', meaning: '共同，一起', meaningEn: 'together, with', origin: 'Greek', originNote: '源自希腊语 syn，意为"共同"', originNoteEn: 'From Greek syn meaning "together"', words: [] },
  { prefix: 'tele-', meaning: '远', meaningEn: 'far, distant', origin: 'Greek', originNote: '源自希腊语 tele，意为"远"', originNoteEn: 'From Greek tele meaning "far"', words: [] },
  { prefix: 'tetra-', meaning: '四', meaningEn: 'four', origin: 'Greek', originNote: '源自希腊语 tetra，意为"四"', originNoteEn: 'From Greek tetra meaning "four"', words: [] },
  { prefix: 'trans-', meaning: '穿过，转移', meaningEn: 'across, through', origin: 'Latin', originNote: '源自拉丁语 trans，意为"穿过、转移"', originNoteEn: 'From Latin trans meaning "across"', words: [] },
  { prefix: 'tri-', meaning: '三', meaningEn: 'three', origin: 'Greek', originNote: '源自希腊语 treis，意为"三"', originNoteEn: 'From Greek treis meaning "three"', words: [] },
  { prefix: 'twi-', meaning: '二，双', meaningEn: 'two, twice', origin: 'Anglo-Saxon', originNote: '源自盎格鲁-撒克逊语 twi-，意为"二"', originNoteEn: 'From Anglo-Saxon twi- meaning "two"', words: [] },
  { prefix: 'ultra-', meaning: '超，过度', meaningEn: 'beyond, excessive', origin: 'Latin', originNote: '源自拉丁语 ultra，意为"超"', originNoteEn: 'From Latin ultra meaning "beyond"', words: [] },
  { prefix: 'un-', meaning: '不，非，相反', meaningEn: 'not, opposite', origin: 'Anglo-Saxon', originNote: '源自盎格鲁-撒克逊语 un-，意为"不、非"', originNoteEn: 'From Anglo-Saxon un- meaning "not"', words: [] },
  { prefix: 'under-', meaning: '在下，不足', meaningEn: 'under, below, not enough', origin: 'Anglo-Saxon', originNote: '源自盎格鲁-撒克逊语 under-，意为"在下、不足"', originNoteEn: 'From Anglo-Saxon under- meaning "under"', words: [] },
  { prefix: 'uni-', meaning: '一，单一', meaningEn: 'one, single', origin: 'Latin', originNote: '源自拉丁语 unus，意为"一"', originNoteEn: 'From Latin unus meaning "one"', words: [] },
  { prefix: 'up-', meaning: '向上', meaningEn: 'up, upward', origin: 'Anglo-Saxon', originNote: '源自盎格鲁-撒克逊语 up-，意为"向上"', originNoteEn: 'From Anglo-Saxon up- meaning "up"', words: [] },
  { prefix: 'vice-', meaning: '副，代理', meaningEn: 'in place of, deputy', origin: 'Latin', originNote: '源自拉丁语 vice，意为"副、代理"', originNoteEn: 'From Latin vice meaning "in place of"', words: [] },
  { prefix: 'with-', meaning: '对抗，背', meaningEn: 'against, back', origin: 'Anglo-Saxon', originNote: '源自盎格鲁-撒克逊语 with-，意为"对抗"', originNoteEn: 'From Anglo-Saxon with- meaning "against"', words: [] }
];

export const suffixGroups: SuffixGroup[] = [
  { suffix: '-able', meaning: '能够...的', meaningEn: 'capable of, able to', type: 'adjective', words: [] },
  { suffix: '-ability', meaning: '可能性，能力', meaningEn: 'ability, possibility', type: 'noun', words: [] },
  { suffix: '-aceous', meaning: '具有...性质的', meaningEn: 'having the nature of', type: 'adjective', words: [] },
  { suffix: '-acity', meaning: '性质，倾向', meaningEn: 'quality, tendency', type: 'noun', words: [] },
  { suffix: '-ade', meaning: '行为，结果', meaningEn: 'action, result', type: 'noun', words: [] },
  { suffix: '-age', meaning: '行为，状态，费用', meaningEn: 'action, state, fee', type: 'noun', words: [] },
  { suffix: '-al', meaning: '与...相关的', meaningEn: 'relating to', type: 'adjective', words: [] },
  { suffix: '-ality', meaning: '性质，状态', meaningEn: 'quality, state', type: 'noun', words: [] },
  { suffix: '-ally', meaning: '副词后缀', meaningEn: 'adverb suffix', type: 'adverb', words: [] },
  { suffix: '-ance', meaning: '行为，状态', meaningEn: 'action, state', type: 'noun', words: [] },
  { suffix: '-ancy', meaning: '状态，性质', meaningEn: 'state, quality', type: 'noun', words: [] },
  { suffix: '-ant', meaning: '做...的人，具有...性质的', meaningEn: 'one who does, having the quality', type: 'noun', words: [] },
  { suffix: '-ar', meaning: '与...有关的', meaningEn: 'relating to', type: 'adjective', words: [] },
  { suffix: '-ard', meaning: '做...的人（贬义）', meaningEn: 'one who does (pejorative)', type: 'noun', words: [] },
  { suffix: '-arian', meaning: '从事...的人', meaningEn: 'one who practices', type: 'noun', words: [] },
  { suffix: '-arium', meaning: '场所，容器', meaningEn: 'place, container', type: 'noun', words: [] },
  { suffix: '-ary', meaning: '与...相关的', meaningEn: 'relating to', type: 'adjective', words: [] },
  { suffix: '-ate', meaning: '使...化', meaningEn: 'to make, to cause', type: 'verb', words: [] },
  { suffix: '-ation', meaning: '行为，状态，结果', meaningEn: 'action, state, result', type: 'noun', words: [] },
  { suffix: '-ative', meaning: '与...相关的', meaningEn: 'relating to', type: 'adjective', words: [] },
  { suffix: '-bility', meaning: '可能性', meaningEn: 'possibility', type: 'noun', words: [] },
  { suffix: '-cide', meaning: '杀...剂', meaningEn: 'killer of', type: 'noun', words: [] },
  { suffix: '-cracy', meaning: '统治，支配', meaningEn: 'rule, dominion', type: 'noun', words: [] },
  { suffix: '-craft', meaning: '技艺，工艺', meaningEn: 'skill, craft', type: 'noun', words: [] },
  { suffix: '-cy', meaning: '状态，职位', meaningEn: 'state, office', type: 'noun', words: [] },
  { suffix: '-dom', meaning: '领域，状态', meaningEn: 'domain, state', type: 'noun', words: [] },
  { suffix: '-due', meaning: '应得的', meaningEn: 'owed, due', type: 'adjective', words: [] },
  { suffix: '-dysis', meaning: '变化过程', meaningEn: 'process of changing', type: 'noun', words: [] },
  { suffix: '-eal', meaning: '与...相关的', meaningEn: 'relating to', type: 'adjective', words: [] },
  { suffix: '-ectomy', meaning: '切除术', meaningEn: 'surgical removal', type: 'noun', words: [] },
  { suffix: '-ed', meaning: '过去式/形容词后缀', meaningEn: 'past tense/adjective suffix', type: 'verb', words: [] },
  { suffix: '-ee', meaning: '被...的人', meaningEn: 'one who is affected', type: 'noun', words: [] },
  { suffix: '-eer', meaning: '从事...的人', meaningEn: 'one who deals with', type: 'noun', words: [] },
  { suffix: '-emia', meaning: '血液状态', meaningEn: 'blood condition', type: 'noun', words: [] },
  { suffix: '-en', meaning: '使...化，由...制成', meaningEn: 'to make, to become', type: 'verb', words: [] },
  { suffix: '-ence', meaning: '行为，状态', meaningEn: 'action, state', type: 'noun', words: [] },
  { suffix: '-ency', meaning: '状态，性质', meaningEn: 'state, quality', type: 'noun', words: [] },
  { suffix: '-end', meaning: '需要...的', meaningEn: 'needing, requiring', type: 'adjective', words: [] },
  { suffix: '-ent', meaning: '具有...性质的', meaningEn: 'having the quality', type: 'adjective', words: [] },
  { suffix: '-er', meaning: '做...的人', meaningEn: 'one who does', type: 'noun', words: [] },
  { suffix: '-ern', meaning: '方向，场所', meaningEn: 'direction, place', type: 'noun', words: [] },
  { suffix: '-ery', meaning: '行为，场所，集合', meaningEn: 'action, place, collection', type: 'noun', words: [] },
  { suffix: '-ese', meaning: '某国/地区的语言或人', meaningEn: 'language or people of a place', type: 'noun', words: [] },
  { suffix: '-esque', meaning: '如...的', meaningEn: 'in the style of', type: 'adjective', words: [] },
  { suffix: '-ess', meaning: '女性', meaningEn: 'feminine', type: 'noun', words: [] },
  { suffix: '-ette', meaning: '小，模仿', meaningEn: 'small, imitation', type: 'noun', words: [] },
  { suffix: '-ety', meaning: '状态，性质', meaningEn: 'state, quality', type: 'noun', words: [] },
  { suffix: '-eur', meaning: '人', meaningEn: 'person', type: 'noun', words: [] },
  { suffix: '-faction', meaning: '形成...化', meaningEn: 'making, causing', type: 'noun', words: [] },
  { suffix: '-fic', meaning: '使...的', meaningEn: 'making, causing', type: 'adjective', words: [] },
  { suffix: '-fiction', meaning: '虚构，捏造', meaningEn: 'making up', type: 'noun', words: [] },
  { suffix: '-fier', meaning: '使...的人或物', meaningEn: 'one who makes', type: 'noun', words: [] },
  { suffix: '-fold', meaning: '倍', meaningEn: 'times, multiplied by', type: 'adjective', words: [] },
  { suffix: '-form', meaning: '形状，形态', meaningEn: 'shape, form', type: 'adjective', words: [] },
  { suffix: '-ful', meaning: '充满...的', meaningEn: 'full of', type: 'adjective', words: [] },
  { suffix: '-fy', meaning: '使...化', meaningEn: 'to make, to cause', type: 'verb', words: [] },
  { suffix: '-gam', meaning: '婚姻，交配', meaningEn: 'marriage, mating', type: 'noun', words: [] },
  { suffix: '-gen', meaning: '产生...的物质', meaningEn: 'producing, generating', type: 'noun', words: [] },
  { suffix: '-genesis', meaning: '起源，发生', meaningEn: 'origin, creation', type: 'noun', words: [] },
  { suffix: '-gonic', meaning: '产生的', meaningEn: 'producing', type: 'adjective', words: [] },
  { suffix: '-gram', meaning: '书写物，图表', meaningEn: 'writing, drawing', type: 'noun', words: [] },
  { suffix: '-graph', meaning: '书写物，记录器', meaningEn: 'writing, instrument for recording', type: 'noun', words: [] },
  { suffix: '-grapher', meaning: '书写者，记录者', meaningEn: 'one who writes', type: 'noun', words: [] },
  { suffix: '-graphy', meaning: '书写，记录法', meaningEn: 'writing, recording method', type: 'noun', words: [] },
  { suffix: '-guard', meaning: '守护者', meaningEn: 'one who guards', type: 'noun', words: [] },
  { suffix: '-hood', meaning: '身份，状态', meaningEn: 'state, condition', type: 'noun', words: [] },
  { suffix: '-ial', meaning: '与...相关的', meaningEn: 'relating to', type: 'adjective', words: [] },
  { suffix: '-ian', meaning: '与...有关的', meaningEn: 'relating to', type: 'adjective', words: [] },
  { suffix: '-iatric', meaning: '医疗的', meaningEn: 'medical', type: 'adjective', words: [] },
  { suffix: '-ible', meaning: '能够...的', meaningEn: 'capable of', type: 'adjective', words: [] },
  { suffix: '-ic', meaning: '与...相关的', meaningEn: 'relating to', type: 'adjective', words: [] },
  { suffix: '-ical', meaning: '与...相关的', meaningEn: 'relating to', type: 'adjective', words: [] },
  { suffix: '-ice', meaning: '行为，状态', meaningEn: 'action, state', type: 'noun', words: [] },
  { suffix: '-ician', meaning: '专家，技术人员', meaningEn: 'expert, technician', type: 'noun', words: [] },
  { suffix: '-ics', meaning: '学科，体系', meaningEn: 'science, system', type: 'noun', words: [] },
  { suffix: '-ide', meaning: '化合物', meaningEn: 'chemical compound', type: 'noun', words: [] },
  { suffix: '-ie', meaning: '小，亲昵', meaningEn: 'diminutive, affectionate', type: 'noun', words: [] },
  { suffix: '-ify', meaning: '使...化', meaningEn: 'to make', type: 'verb', words: [] },
  { suffix: '-ile', meaning: '与...有关的', meaningEn: 'relating to', type: 'adjective', words: [] },
  { suffix: '-ility', meaning: '可能性，性质', meaningEn: 'possibility, quality', type: 'noun', words: [] },
  { suffix: '-in', meaning: '化学物质', meaningEn: 'chemical substance', type: 'noun', words: [] },
  { suffix: '-ine', meaning: '与...相关的', meaningEn: 'relating to', type: 'adjective', words: [] },
  { suffix: '-ing', meaning: '正在...的', meaningEn: 'present participle', type: 'verb', words: [] },
  { suffix: '-ion', meaning: '行为，状态', meaningEn: 'action, state', type: 'noun', words: [] },
  { suffix: '-ious', meaning: '具有...性质的', meaningEn: 'full of, characterized by', type: 'adjective', words: [] },
  { suffix: '-ise', meaning: '使...化（动词后缀）', meaningEn: 'to make, to cause', type: 'verb', words: [] },
  { suffix: '-ish', meaning: '像...的', meaningEn: 'like, tending to', type: 'adjective', words: [] },
  { suffix: '-ism', meaning: '主义，行为，状态', meaningEn: 'doctrine, practice, state', type: 'noun', words: [] },
  { suffix: '-ist', meaning: '从事...的人', meaningEn: 'one who practices', type: 'noun', words: [] },
  { suffix: '-istic', meaning: '与...相关的', meaningEn: 'relating to', type: 'adjective', words: [] },
  { suffix: '-it', meaning: '行为，结果', meaningEn: 'action, result', type: 'noun', words: [] },
  { suffix: '-ite', meaning: '与...有关的人或物', meaningEn: 'relating to, product', type: 'noun', words: [] },
  { suffix: '-ition', meaning: '行为，状态', meaningEn: 'action, state', type: 'noun', words: [] },
  { suffix: '-itious', meaning: '具有...性质的', meaningEn: 'characterized by', type: 'adjective', words: [] },
  { suffix: '-ity', meaning: '性质，状态', meaningEn: 'quality, state', type: 'noun', words: [] },
  { suffix: '-ium', meaning: '化学元素，场所', meaningEn: 'chemical element, place', type: 'noun', words: [] },
  { suffix: '-ive', meaning: '具有...性质的', meaningEn: 'having the quality of', type: 'adjective', words: [] },
  { suffix: '-ivory', meaning: '性质，状态', meaningEn: 'quality, state', type: 'noun', words: [] },
  { suffix: '-ize', meaning: '使...化', meaningEn: 'to make, to cause', type: 'verb', words: [] },
  { suffix: '-kin', meaning: '小', meaningEn: 'little', type: 'noun', words: [] },
  { suffix: '-less', meaning: '没有...的', meaningEn: 'without', type: 'adjective', words: [] },
  { suffix: '-let', meaning: '小', meaningEn: 'little, small', type: 'noun', words: [] },
  { suffix: '-like', meaning: '像...的', meaningEn: 'resembling', type: 'adjective', words: [] },
  { suffix: '-ling', meaning: '小，年轻', meaningEn: 'little, young', type: 'noun', words: [] },
  { suffix: '-loger', meaning: '研究者', meaningEn: 'one who studies', type: 'noun', words: [] },
  { suffix: '-logical', meaning: '...学的', meaningEn: 'relating to study of', type: 'adjective', words: [] },
  { suffix: '-logist', meaning: '...学家', meaningEn: 'one who studies', type: 'noun', words: [] },
  { suffix: '-logy', meaning: '...学', meaningEn: 'study of', type: 'noun', words: [] },
  { suffix: '-ly', meaning: '副词后缀', meaningEn: 'adverb suffix', type: 'adverb', words: [] },
  { suffix: '-man', meaning: '人', meaningEn: 'person', type: 'noun', words: [] },
  { suffix: '-matic', meaning: '与...相关的', meaningEn: 'relating to', type: 'adjective', words: [] },
  { suffix: '-ment', meaning: '行为，状态，手段', meaningEn: 'action, state, means', type: 'noun', words: [] },
  { suffix: '-meter', meaning: '测量仪器', meaningEn: 'measuring instrument', type: 'noun', words: [] },
  { suffix: '-metry', meaning: '测量法', meaningEn: 'measurement', type: 'noun', words: [] },
  { suffix: '-mony', meaning: '结果，状态', meaningEn: 'result, state', type: 'noun', words: [] },
  { suffix: '-most', meaning: '最...的', meaningEn: 'most', type: 'adjective', words: [] },
  { suffix: '-ness', meaning: '性质，状态', meaningEn: 'quality, state', type: 'noun', words: [] },
  { suffix: '-nik', meaning: '...的人', meaningEn: 'one associated with', type: 'noun', words: [] },
  { suffix: '-o', meaning: '名词后缀', meaningEn: 'noun suffix', type: 'noun', words: [] },
  { suffix: '-ock', meaning: '小', meaningEn: 'little', type: 'noun', words: [] },
  { suffix: '-ode', meaning: '类似物', meaningEn: 'like, resembling', type: 'noun', words: [] },
  { suffix: '-oid', meaning: '像...的', meaningEn: 'resembling', type: 'adjective', words: [] },
  { suffix: '-oma', meaning: '肿瘤', meaningEn: 'tumor', type: 'noun', words: [] },
  { suffix: '-on', meaning: '物质，物理学后缀', meaningEn: 'substance, physics suffix', type: 'noun', words: [] },
  { suffix: '-one', meaning: '化学化合物', meaningEn: 'chemical compound', type: 'noun', words: [] },
  { suffix: '-opia', meaning: '视力', meaningEn: 'vision', type: 'noun', words: [] },
  { suffix: '-opsy', meaning: '看见，观察', meaningEn: 'seeing, viewing', type: 'noun', words: [] },
  { suffix: '-or', meaning: '做...的人或物', meaningEn: 'one who does', type: 'noun', words: [] },
  { suffix: '-ory', meaning: '与...相关的', meaningEn: 'relating to', type: 'adjective', words: [] },
  { suffix: '-osis', meaning: '状态，过程', meaningEn: 'state, process', type: 'noun', words: [] },
  { suffix: '-otic', meaning: '与...相关的', meaningEn: 'relating to', type: 'adjective', words: [] },
  { suffix: '-ous', meaning: '具有...性质的', meaningEn: 'full of, characterized by', type: 'adjective', words: [] },
  { suffix: '-path', meaning: '疗法，患者', meaningEn: 'therapy, patient', type: 'noun', words: [] },
  { suffix: '-pathic', meaning: '与...相关的', meaningEn: 'relating to', type: 'adjective', words: [] },
  { suffix: '-pathy', meaning: '感情，疗法', meaningEn: 'feeling, therapy', type: 'noun', words: [] },
  { suffix: '-penia', meaning: '缺乏，不足', meaningEn: 'lack, deficiency', type: 'noun', words: [] },
  { suffix: '-phage', meaning: '吞噬...的', meaningEn: 'eating, devouring', type: 'noun', words: [] },
  { suffix: '-phagia', meaning: '吞噬', meaningEn: 'eating', type: 'noun', words: [] },
  { suffix: '-phile', meaning: '爱好...的', meaningEn: 'loving, fond of', type: 'noun', words: [] },
  { suffix: '-philia', meaning: '爱好，亲和', meaningEn: 'love, affinity', type: 'noun', words: [] },
  { suffix: '-phobe', meaning: '恐惧...的', meaningEn: 'fearing', type: 'noun', words: [] },
  { suffix: '-phobia', meaning: '恐惧症', meaningEn: 'fear of', type: 'noun', words: [] },
  { suffix: '-phone', meaning: '声音', meaningEn: 'sound', type: 'noun', words: [] },
  { suffix: '-phony', meaning: '声音', meaningEn: 'sound', type: 'noun', words: [] },
  { suffix: '-phy', meaning: '生长，发育', meaningEn: 'growth', type: 'noun', words: [] },
  { suffix: '-plasm', meaning: '形成物，原生质', meaningEn: 'formation, living substance', type: 'noun', words: [] },
  { suffix: '-plastic', meaning: '成形的', meaningEn: 'forming', type: 'adjective', words: [] },
  { suffix: '-ple', meaning: '倍', meaningEn: 'fold', type: 'adjective', words: [] },
  { suffix: '-plex', meaning: '倍', meaningEn: 'fold', type: 'noun', words: [] },
  { suffix: '-pnea', meaning: '呼吸', meaningEn: 'breathing', type: 'noun', words: [] },
  { suffix: '-pod', meaning: '足，脚', meaningEn: 'foot', type: 'noun', words: [] },
  { suffix: '-poiesis', meaning: '产生，形成', meaningEn: 'making, formation', type: 'noun', words: [] },
  { suffix: '-porosis', meaning: '稀疏，疏松', meaningEn: 'condition of porosity', type: 'noun', words: [] },
  { suffix: '-presis', meaning: '压缩', meaningEn: 'compression', type: 'noun', words: [] },
  { suffix: '-psychosis', meaning: '心理状态', meaningEn: 'mental condition', type: 'noun', words: [] },
  { suffix: '-ptosis', meaning: '下垂', meaningEn: 'falling, dropping', type: 'noun', words: [] },
  { suffix: '-pump', meaning: '泵', meaningEn: 'pump', type: 'noun', words: [] },
  { suffix: '-punk', meaning: '...的人', meaningEn: 'person associated with', type: 'noun', words: [] },
  { suffix: '-py', meaning: '脓', meaningEn: 'pus', type: 'noun', words: [] },
  { suffix: '-rrhea', meaning: '流动，排出', meaningEn: 'flow, discharge', type: 'noun', words: [] },
  { suffix: '-ry', meaning: '行为，集合', meaningEn: 'action, collection', type: 'noun', words: [] },
  { suffix: '-s', meaning: '复数/副词后缀', meaningEn: 'plural/adverb suffix', type: 'noun', words: [] },
  { suffix: '-samine', meaning: '化学物质', meaningEn: 'chemical substance', type: 'noun', words: [] },
  { suffix: '-scape', meaning: '景色，景观', meaningEn: 'landscape, view', type: 'noun', words: [] },
  { suffix: '-scope', meaning: '观察仪器', meaningEn: 'instrument for viewing', type: 'noun', words: [] },
  { suffix: '-scopy', meaning: '检查，观察', meaningEn: 'examination, viewing', type: 'noun', words: [] },
  { suffix: '-seal', meaning: '密封', meaningEn: 'to close tightly', type: 'verb', words: [] },
  { suffix: '-ship', meaning: '身份，技能', meaningEn: 'state, skill', type: 'noun', words: [] },
  { suffix: '-sis', meaning: '行为，结果', meaningEn: 'action, result', type: 'noun', words: [] },
  { suffix: '-some', meaning: '引起...的', meaningEn: 'tending to, causing', type: 'adjective', words: [] },
  { suffix: '-sophy', meaning: '智慧，知识', meaningEn: 'wisdom, knowledge', type: 'noun', words: [] },
  { suffix: '-sphere', meaning: '球体，范围', meaningEn: 'ball, sphere', type: 'noun', words: [] },
  { suffix: '-stat', meaning: '稳定器', meaningEn: 'stabilizing device', type: 'noun', words: [] },
  { suffix: '-statin', meaning: '抑制剂', meaningEn: 'inhibitor', type: 'noun', words: [] },
  { suffix: '-ster', meaning: '...的人', meaningEn: 'one who is', type: 'noun', words: [] },
  { suffix: '-sthesis', meaning: '感觉', meaningEn: 'sensation', type: 'noun', words: [] },
  { suffix: '-stome', meaning: '口', meaningEn: 'mouth', type: 'noun', words: [] },
  { suffix: '-stream', meaning: '流动', meaningEn: 'flowing', type: 'noun', words: [] },
  { suffix: '-stress', meaning: '女性', meaningEn: 'feminine', type: 'noun', words: [] },
  { suffix: '-struct', meaning: '建造', meaningEn: 'to build', type: 'verb', words: [] },
  { suffix: '-syl', meaning: '一起', meaningEn: 'together', type: 'adverb', words: [] },
  { suffix: '-syn', meaning: '一起', meaningEn: 'together', type: 'adverb', words: [] },
  { suffix: '-taxis', meaning: '排列，秩序', meaningEn: 'arrangement, order', type: 'noun', words: [] },
  { suffix: '-teen', meaning: '十几', meaningEn: 'teenage', type: 'noun', words: [] },
  { suffix: '-th', meaning: '行为，结果，序数', meaningEn: 'action, result, ordinal', type: 'noun', words: [] },
  { suffix: '-therapy', meaning: '疗法', meaningEn: 'treatment', type: 'noun', words: [] },
  { suffix: '-thermal', meaning: '热的', meaningEn: 'relating to heat', type: 'adjective', words: [] },
  { suffix: '-therm', meaning: '热', meaningEn: 'heat', type: 'noun', words: [] },
  { suffix: '-therapy', meaning: '疗法', meaningEn: 'treatment', type: 'noun', words: [] },
  { suffix: '-th', meaning: '序数词后缀', meaningEn: 'ordinal number suffix', type: 'noun', words: [] },
  { suffix: '-tinct', meaning: '着色的', meaningEn: 'colored', type: 'adjective', words: [] },
  { suffix: '-tion', meaning: '行为，状态', meaningEn: 'action, state', type: 'noun', words: [] },
  { suffix: '-tious', meaning: '具有...性质的', meaningEn: 'characterized by', type: 'adjective', words: [] },
  { suffix: '-tocia', meaning: '分娩，出生', meaningEn: 'childbirth, birth', type: 'noun', words: [] },
  { suffix: '-tome', meaning: '切割器械', meaningEn: 'cutting instrument', type: 'noun', words: [] },
  { suffix: '-tonomy', meaning: '切割，分割', meaningEn: 'cutting, division', type: 'noun', words: [] },
  { suffix: '-tress', meaning: '女性行为者', meaningEn: 'feminine agent', type: 'noun', words: [] },
  { suffix: '-trient', meaning: '营养物', meaningEn: 'nutrient', type: 'noun', words: [] },
  { suffix: '-trophic', meaning: '营养的', meaningEn: 'relating to nutrition', type: 'adjective', words: [] },
  { suffix: '-tropin', meaning: '激素', meaningEn: 'hormone', type: 'noun', words: [] },
  { suffix: '-tude', meaning: '性质，状态', meaningEn: 'quality, state', type: 'noun', words: [] },
  { suffix: '-ture', meaning: '行为，结果', meaningEn: 'action, result', type: 'noun', words: [] },
  { suffix: '-ty', meaning: '性质，状态', meaningEn: 'quality, state', type: 'noun', words: [] },
  { suffix: '-ular', meaning: '小...的', meaningEn: 'resembling, small', type: 'adjective', words: [] },
  { suffix: '-ule', meaning: '小', meaningEn: 'little', type: 'noun', words: [] },
  { suffix: '-ulent', meaning: '充满...的', meaningEn: 'full of', type: 'adjective', words: [] },
  { suffix: '-um', meaning: '场所，结构', meaningEn: 'place, structure', type: 'noun', words: [] },
  { suffix: '-unique', meaning: '独特的', meaningEn: 'unique', type: 'adjective', words: [] },
  { suffix: '-ure', meaning: '行为，结果', meaningEn: 'action, result', type: 'noun', words: [] },
  { suffix: '-uretic', meaning: '利尿的', meaningEn: 'diuretic', type: 'adjective', words: [] },
  { suffix: '-uria', meaning: '尿液状态', meaningEn: 'urine condition', type: 'noun', words: [] },
  { suffix: '-valent', meaning: '价的', meaningEn: 'valent', type: 'adjective', words: [] },
  { suffix: '-valent', meaning: '价值的', meaningEn: 'relating to value', type: 'adjective', words: [] },
  { suffix: '-value', meaning: '价值', meaningEn: 'worth', type: 'noun', words: [] },
  { suffix: '-ward', meaning: '向...的', meaningEn: 'in the direction of', type: 'adverb', words: [] },
  { suffix: '-wards', meaning: '向...', meaningEn: 'in the direction of', type: 'adverb', words: [] },
  { suffix: '-ware', meaning: '物品，器皿', meaningEn: 'articles, vessels', type: 'noun', words: [] },
  { suffix: '-ways', meaning: '方式', meaningEn: 'manner, way', type: 'adverb', words: [] },
  { suffix: '-way', meaning: '方式，道路', meaningEn: 'manner, road', type: 'noun', words: [] },
  { suffix: '-wise', meaning: '以...方式', meaningEn: 'in the manner of', type: 'adverb', words: [] },
  { suffix: '-woman', meaning: '女性', meaningEn: 'female', type: 'noun', words: [] },
  { suffix: '-wood', meaning: '木材', meaningEn: 'wood', type: 'noun', words: [] },
  { suffix: '-work', meaning: '工作，制品', meaningEn: 'work, product', type: 'noun', words: [] },
  { suffix: '-worm', meaning: '蠕虫', meaningEn: 'worm', type: 'noun', words: [] },
  { suffix: '-worth', meaning: '价值', meaningEn: 'worth', type: 'noun', words: [] },
  { suffix: '-worthy', meaning: '值得...的', meaningEn: 'deserving of', type: 'adjective', words: [] },
  { suffix: '-x', meaning: '复数后缀', meaningEn: 'plural suffix', type: 'noun', words: [] },
  { suffix: '-yl', meaning: '化学基团', meaningEn: 'chemical group', type: 'noun', words: [] },
  { suffix: '-zine', meaning: '化学物质', meaningEn: 'chemical substance', type: 'noun', words: [] },
  { suffix: '-zoon', meaning: '动物', meaningEn: 'animal', type: 'noun', words: [] }
];