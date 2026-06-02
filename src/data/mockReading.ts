export interface ReadingPassage {
  id: number;
  title: string;
  titleCN?: string;
  topic: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  wordCount: number;
  passage: string;
  passageCN?: string;
  questions: ReadingQuestion[];
}

export interface ReadingQuestion {
  id: number;
  type: 'Multiple Choice' | 'True/False/Not Given' | 'Matching Headings' | 'Sentence Completion' | 'Summary Completion' | 'Matching Features';
  question: string;
  options?: string[];
  answer: string;
  explanation?: string;
}

export const mockReadingPassages: ReadingPassage[] = [
  {
    id: 1,
    title: 'The History of Artificial Intelligence',
    titleCN: '人工智能的历史',
    topic: 'Technology',
    difficulty: 'Medium',
    wordCount: 450,
    passage: 'Artificial Intelligence (AI) is not a modern invention. The concept of machines that can think dates back to ancient Greek mythology, where mechanical beings were described in tales of gods and heroes. However, the formal study of AI as a scientific discipline began in the mid-20th century. In 1956, a group of researchers gathered at Dartmouth College for a summer conference that would define the field. They coined the term "artificial intelligence" and laid the groundwork for decades of research.\n\nThe early years of AI research were marked by optimism and significant funding. Researchers believed that creating truly intelligent machines was just around the corner. However, progress was slower than anticipated, leading to periods known as "AI winters" when funding and interest declined. Despite these challenges, breakthroughs continued to occur. The development of machine learning algorithms in the 1980s and 1990s revolutionized the field, enabling computers to learn from data rather than relying on explicit programming.\n\nToday, AI is an integral part of daily life. Virtual assistants like Siri and Alexa use natural language processing to interact with users. Machine learning algorithms power recommendation systems on streaming platforms and social media. Self-driving cars rely on computer vision and sensor fusion to navigate roads safely. The field continues to evolve rapidly, with advancements in deep learning and neural networks pushing the boundaries of what AI can accomplish.',
    passageCN: '人工智能（AI）并非现代发明。能够思考的机器概念可以追溯到古希腊神话，在那里，机械生物被描述在神和英雄的故事中。然而，作为一门科学学科的人工智能正式研究始于20世纪中叶。1956年，一群研究人员聚集在达特茅斯学院参加一个夏季会议，这次会议定义了该领域。他们创造了"人工智能"这个术语，并为几十年的研究奠定了基础。\n\n人工智能研究的早期以乐观和大量资金为标志。研究人员相信创造真正智能的机器指日可待。然而，进展比预期的要慢，导致了所谓的"人工智能寒冬"时期，资金和兴趣下降。尽管面临这些挑战，突破仍在继续发生。20世纪80年代和90年代机器学习算法的发展彻底改变了该领域，使计算机能够从数据中学习，而不是依赖显式编程。\n\n今天，人工智能已成为日常生活不可或缺的一部分。像Siri和Alexa这样的虚拟助手使用自然语言处理与用户互动。机器学习算法为流媒体平台和社交媒体上的推荐系统提供动力。自动驾驶汽车依靠计算机视觉和传感器融合来安全导航道路。随着深度学习和神经网络的进步突破人工智能的能力边界，该领域继续快速发展。',
    questions: [
      {
        id: 1,
        type: 'Multiple Choice',
        question: 'When was the term "artificial intelligence" first coined?',
        options: ['1945', '1956', '1968', '1980'],
        answer: '1956',
        explanation: 'The term was coined at the Dartmouth College conference in 1956.'
      },
      {
        id: 2,
        type: 'True/False/Not Given',
        question: 'AI research has always received consistent funding.',
        answer: 'False',
        explanation: 'The passage mentions "AI winters" when funding declined.'
      },
      {
        id: 3,
        type: 'Sentence Completion',
        question: 'Machine learning algorithms enabled computers to learn from ______.',
        answer: 'data',
        explanation: 'The passage states that machine learning allows computers to learn from data.'
      }
    ]
  },
  {
    id: 2,
    title: 'Urbanization and Its Effects',
    titleCN: '城市化及其影响',
    topic: 'Environment',
    difficulty: 'Medium',
    wordCount: 420,
    passage: 'Urbanization is the process by which rural populations migrate to cities, transforming landscapes and societies. Over the past century, the world has witnessed an unprecedented shift from rural to urban living. In 1950, only 30% of the global population lived in cities; today, that figure exceeds 55%, and it is projected to reach 68% by 2050.\n\nThe rapid growth of cities brings both opportunities and challenges. Urban areas serve as engines of economic growth, attracting businesses and creating jobs. They offer better access to education, healthcare, and cultural amenities. However, rapid urbanization also strains infrastructure and resources. Overcrowding, traffic congestion, and pollution are common problems in large cities. Housing shortages and rising costs often lead to the development of informal settlements or slums.\n\nSustainable urban planning is essential to address these challenges. Smart city initiatives integrate technology to improve efficiency and quality of life. Green spaces and public transportation systems help reduce environmental impact. By prioritizing sustainable development, cities can become healthier, more livable places for all residents.',
    passageCN: '城市化是农村人口向城市迁移、改变景观和社会的过程。在过去的一个世纪里，世界见证了从农村生活向城市生活的前所未有的转变。1950年，只有30%的全球人口居住在城市；今天，这个数字超过了55%，预计到2050年将达到68%。\n\n城市的快速发展带来了机遇和挑战。城市地区作为经济增长的引擎，吸引企业并创造就业机会。它们提供更好的教育、医疗和文化设施。然而，快速的城市化也给基础设施和资源带来压力。过度拥挤、交通堵塞和污染是大城市常见的问题。住房短缺和成本上升往往导致非正规住区或贫民窟的发展。\n\n可持续城市规划对于应对这些挑战至关重要。智慧城市倡议整合技术以提高效率和生活质量。绿地和公共交通系统有助于减少环境影响。通过优先考虑可持续发展，城市可以成为所有居民更健康、更宜居的地方。',
    questions: [
      {
        id: 1,
        type: 'Multiple Choice',
        question: 'What percentage of the global population lived in cities in 1950?',
        options: ['20%', '30%', '45%', '55%'],
        answer: '30%',
        explanation: 'The passage states that 30% of the global population lived in cities in 1950.'
      },
      {
        id: 2,
        type: 'True/False/Not Given',
        question: 'Urbanization has only positive effects on society.',
        answer: 'False',
        explanation: 'The passage mentions both opportunities and challenges of urbanization.'
      },
      {
        id: 3,
        type: 'Sentence Completion',
        question: 'Smart city initiatives use ______ to improve urban efficiency.',
        answer: 'technology',
        explanation: 'The passage states that smart city initiatives integrate technology.'
      }
    ]
  },
  {
    id: 3,
    title: 'The Importance of Biodiversity',
    titleCN: '生物多样性的重要性',
    topic: 'Environment',
    difficulty: 'Easy',
    wordCount: 380,
    passage: 'Biodiversity refers to the variety of life on Earth, encompassing all living organisms from tiny microbes to large mammals. It is essential for maintaining healthy ecosystems and providing vital services to humanity. Ecosystems with high biodiversity are more resilient to environmental changes and better able to recover from disturbances.\n\nBiodiversity provides numerous benefits. Forests absorb carbon dioxide and produce oxygen, helping regulate the climate. Wetlands filter water and prevent flooding. Pollinators like bees and butterflies enable plant reproduction, supporting agriculture. Many medicines are derived from plants and animals found in diverse ecosystems.\n\nUnfortunately, biodiversity is declining at an alarming rate. Human activities such as deforestation, pollution, and climate change are destroying habitats and driving species to extinction. Conservation efforts are crucial to protect remaining biodiversity. Establishing protected areas, promoting sustainable practices, and raising awareness about environmental issues can help preserve Earth\'s natural heritage for future generations.',
    passageCN: '生物多样性指的是地球上生命的多样性，包括从微小的微生物到大型哺乳动物的所有生物。它对于维持健康的生态系统和为人类提供重要服务至关重要。生物多样性高的生态系统对环境变化更具弹性，能够更好地从干扰中恢复。\n\n生物多样性提供了许多好处。森林吸收二氧化碳并产生氧气，有助于调节气候。湿地过滤水并防止洪水。蜜蜂和蝴蝶等传粉者使植物繁殖成为可能，支持农业。许多药物来自在多样化生态系统中发现的植物和动物。\n\n不幸的是，生物多样性正在以惊人的速度下降。森林砍伐、污染和气候变化等人类活动正在破坏栖息地并导致物种灭绝。保护努力对于保护剩余的生物多样性至关重要。建立保护区、促进可持续实践以及提高对环境问题的认识有助于为后代保护地球的自然遗产。',
    questions: [
      {
        id: 1,
        type: 'Multiple Choice',
        question: 'What does biodiversity refer to?',
        options: ['Human diversity', 'Variety of life on Earth', 'Technological diversity', 'Cultural diversity'],
        answer: 'Variety of life on Earth',
        explanation: 'Biodiversity is defined as the variety of life on Earth.'
      },
      {
        id: 2,
        type: 'True/False/Not Given',
        question: 'Biodiversity is increasing worldwide.',
        answer: 'False',
        explanation: 'The passage states that biodiversity is declining at an alarming rate.'
      },
      {
        id: 3,
        type: 'Sentence Completion',
        question: '______ help regulate the climate by absorbing carbon dioxide.',
        answer: 'Forests',
        explanation: 'The passage states that forests absorb carbon dioxide.'
      }
    ]
  },
  {
    id: 4,
    title: 'The Evolution of Communication',
    titleCN: '通信的演变',
    topic: 'Technology',
    difficulty: 'Easy',
    wordCount: 350,
    passage: 'Human communication has evolved dramatically over time. In ancient times, people relied on spoken language and simple writing systems. The invention of the printing press in the 15th century revolutionized communication, making books and information accessible to a wider audience. The telegraph, invented in the 19th century, enabled instant long-distance communication for the first time.\n\nThe 20th century brought even more transformative technologies. Radio and television allowed mass communication, bringing news and entertainment into homes worldwide. The internet, developed in the late 20th century, connected billions of people and created new forms of communication like email and social media. Today, smartphones enable constant connectivity, allowing people to communicate anytime, anywhere.\n\nThese advancements have profoundly changed how societies function. Information spreads faster than ever before, connecting people across cultures and continents. While technology has brought many benefits, it also presents challenges such as information overload and privacy concerns.',
    passageCN: '人类通信随着时间发生了巨大变化。在古代，人们依赖口头语言和简单的书写系统。15世纪印刷机的发明彻底改变了通信，使书籍和信息能够被更广泛的受众获取。19世纪发明的电报首次实现了即时长途通信。\n\n20世纪带来了更具变革性的技术。广播和电视实现了大众传播，将新闻和娱乐带入了全球各地的家庭。20世纪末发展起来的互联网连接了数十亿人，并创造了电子邮件和社交媒体等新的通信形式。今天，智能手机实现了持续连接，让人们可以随时随地进行通信。\n\n这些进步深刻地改变了社会的运作方式。信息传播比以往任何时候都快，连接着不同文化和大陆的人们。虽然技术带来了许多好处，但它也带来了信息过载和隐私问题等挑战。',
    questions: [
      {
        id: 1,
        type: 'Multiple Choice',
        question: 'When was the printing press invented?',
        options: ['14th century', '15th century', '16th century', '17th century'],
        answer: '15th century',
        explanation: 'The printing press was invented in the 15th century.'
      },
      {
        id: 2,
        type: 'True/False/Not Given',
        question: 'The telegraph was invented after the internet.',
        answer: 'False',
        explanation: 'The telegraph was invented in the 19th century, before the internet.'
      },
      {
        id: 3,
        type: 'Sentence Completion',
        question: '______ enabled instant long-distance communication for the first time.',
        answer: 'The telegraph',
        explanation: 'The passage states that the telegraph enabled instant long-distance communication.'
      }
    ]
  },
  {
    id: 5,
    title: 'Education Systems Around the World',
    titleCN: '全球教育体系',
    topic: 'Education',
    difficulty: 'Medium',
    wordCount: 430,
    passage: 'Education systems vary significantly across the globe, reflecting cultural values, economic conditions, and historical contexts. In many Western countries, education follows a progressive model that emphasizes critical thinking and creativity. Students often have more autonomy in choosing their courses and pursuing their interests.\n\nIn contrast, education systems in many Asian countries tend to be more structured and exam-focused. There is a strong emphasis on academic achievement and discipline. Students typically follow a standardized curriculum and face intense competition for admission to top universities. This approach has produced impressive results in international assessments, but critics argue it may stifle creativity.\n\nRegardless of the system, the goal of education remains the same: to prepare students for success in life. Effective education combines knowledge acquisition with the development of essential skills like problem-solving, communication, and collaboration. As societies evolve, education systems must adapt to meet changing needs and prepare students for the challenges of the future.',
    passageCN: '全球各地的教育体系差异很大，反映了文化价值观、经济条件和历史背景的不同。在许多西方国家，教育遵循强调批判性思维和创造力的进步模式。学生在选择课程和追求兴趣方面通常有更多的自主权。\n\n相比之下，许多亚洲国家的教育体系往往更加结构化和以考试为重点。非常强调学业成绩和纪律。学生通常遵循标准化课程，并面临进入顶尖大学的激烈竞争。这种方法在国际评估中取得了令人印象深刻的成绩，但批评者认为它可能会扼杀创造力。\n\n无论采用哪种体系，教育的目标都是相同的：为学生的人生成功做好准备。有效的教育将知识获取与解决问题、沟通和协作等基本技能的发展相结合。随着社会的发展，教育体系必须适应不断变化的需求，为学生应对未来的挑战做好准备。',
    questions: [
      {
        id: 1,
        type: 'Multiple Choice',
        question: 'What do Western education systems emphasize?',
        options: ['Memorization', 'Critical thinking', 'Standardized testing', 'Discipline'],
        answer: 'Critical thinking',
        explanation: 'Western education emphasizes critical thinking and creativity.'
      },
      {
        id: 2,
        type: 'True/False/Not Given',
        question: 'All education systems have the same structure.',
        answer: 'False',
        explanation: 'The passage states that education systems vary significantly across the globe.'
      },
      {
        id: 3,
        type: 'Sentence Completion',
        question: 'Effective education combines knowledge acquisition with the development of ______ skills.',
        answer: 'essential',
        explanation: 'The passage states that effective education combines knowledge with essential skills.'
      }
    ]
  },
  {
    id: 6,
    title: 'Renewable Energy Sources',
    titleCN: '可再生能源',
    topic: 'Environment',
    difficulty: 'Hard',
    wordCount: 480,
    passage: 'Renewable energy is derived from naturally replenishing sources such as sunlight, wind, water, and geothermal heat. Unlike fossil fuels, these sources produce little to no greenhouse gas emissions, making them crucial for combating climate change. Solar energy, captured through photovoltaic panels, is one of the fastest-growing renewable technologies. Wind power, generated by turbines, has also become increasingly cost-competitive with traditional energy sources.\n\nHydropower, which harnesses the energy of flowing water, is the oldest and most widely used renewable energy source. Geothermal energy utilizes heat from beneath the Earth\'s surface, providing consistent and reliable power in regions with active geothermal activity. Biomass energy, derived from organic matter like plants and waste, offers a sustainable alternative to fossil fuels for heating and electricity generation.\n\nDespite their benefits, renewable energy sources face challenges. Solar and wind energy are intermittent, requiring effective energy storage solutions. The initial cost of installing renewable energy systems can be high, though costs have decreased significantly in recent years. Policy support and technological innovation are essential to accelerate the transition to a renewable energy future.',
    passageCN: '可再生能源来自阳光、风、水和地热能等自然补给资源。与化石燃料不同，这些能源几乎不产生温室气体排放，使其成为应对气候变化的关键。通过光伏板捕获的太阳能是增长最快的可再生技术之一。由涡轮机产生的风力发电也变得越来越具有成本竞争力，可与传统能源相媲美。\n\n水力发电利用流动水的能量，是最古老且使用最广泛的可再生能源。地热能利用地球表面以下的热量，在地热活动活跃的地区提供稳定可靠的电力。生物质能来自植物和废物等有机物，为化石燃料提供了一种可持续的替代方案，用于供暖和发电。\n\n尽管有这些好处，可再生能源也面临挑战。太阳能和风能是间歇性的，需要有效的储能解决方案。安装可再生能源系统的初始成本可能很高，尽管近年来成本大幅下降。政策支持和技术创新对于加速向可再生能源未来的转型至关重要。',
    questions: [
      {
        id: 1,
        type: 'Multiple Choice',
        question: 'Which renewable energy source is the oldest?',
        options: ['Solar', 'Wind', 'Hydropower', 'Geothermal'],
        answer: 'Hydropower',
        explanation: 'Hydropower is described as the oldest renewable energy source.'
      },
      {
        id: 2,
        type: 'True/False/Not Given',
        question: 'Renewable energy produces more greenhouse gases than fossil fuels.',
        answer: 'False',
        explanation: 'The passage states renewable energy produces little to no greenhouse gas emissions.'
      },
      {
        id: 3,
        type: 'Sentence Completion',
        question: 'Solar and wind energy are ______, requiring energy storage solutions.',
        answer: 'intermittent',
        explanation: 'The passage states solar and wind energy are intermittent.'
      }
    ]
  },
  {
    id: 7,
    title: 'The Psychology of Happiness',
    titleCN: '幸福心理学',
    topic: 'Society',
    difficulty: 'Hard',
    wordCount: 500,
    passage: 'Happiness is a universal human pursuit, yet its definition and sources vary widely. Psychologists have identified several key factors that contribute to happiness. Positive relationships, meaningful work, and good health are consistently cited as essential components. Additionally, practicing gratitude and mindfulness has been shown to increase overall well-being.\n\nResearch suggests that genetics play a role in happiness, with studies indicating that about 50% of happiness is determined by inherited traits. However, this leaves significant room for personal choice and environmental factors to influence happiness levels. People who engage in regular physical activity, maintain strong social connections, and pursue goals that align with their values tend to report higher levels of happiness.\n\nInterestingly, wealth and material possessions have a limited impact on happiness beyond meeting basic needs. Once people have enough money to cover essential expenses like food, shelter, and healthcare, additional income contributes little to overall well-being. This phenomenon, known as the "hedonic treadmill," suggests that people quickly adapt to new levels of wealth, returning to their baseline level of happiness.',
    passageCN: '幸福是人类普遍追求的目标，但其定义和来源差异很大。心理学家已经确定了几个有助于幸福的关键因素。积极的人际关系、有意义的工作和良好的健康状况一直被认为是基本要素。此外，实践感恩和正念已被证明可以提高整体幸福感。\n\n研究表明，遗传因素在幸福中发挥作用，研究表明大约50%的幸福感由遗传特征决定。然而，这为个人选择和环境因素影响幸福感留下了很大空间。定期进行体育锻炼、保持强大的社会联系并追求与自身价值观一致目标的人往往报告更高的幸福感。\n\n有趣的是，财富和物质财富对幸福感的影响在满足基本需求之外是有限的。一旦人们有足够的钱支付食物、住房和医疗保健等基本开支，额外收入对整体幸福感的贡献就很小。这种被称为"享乐跑步机"的现象表明，人们会迅速适应新的财富水平，回到他们的幸福基准水平。',
    questions: [
      {
        id: 1,
        type: 'Multiple Choice',
        question: 'What percentage of happiness is estimated to be determined by genetics?',
        options: ['25%', '50%', '75%', '100%'],
        answer: '50%',
        explanation: 'The passage states that about 50% of happiness is determined by inherited traits.'
      },
      {
        id: 2,
        type: 'True/False/Not Given',
        question: 'Wealth has a significant impact on happiness regardless of income level.',
        answer: 'False',
        explanation: 'The passage explains the hedonic treadmill phenomenon where wealth has limited impact beyond basic needs.'
      },
      {
        id: 3,
        type: 'Sentence Completion',
        question: 'The phenomenon where people adapt to new wealth levels is called the ______ treadmill.',
        answer: 'hedonic',
        explanation: 'The passage refers to this as the "hedonic treadmill."'
      }
    ]
  },
  {
    id: 8,
    title: 'Tourism and Cultural Preservation',
    titleCN: '旅游业与文化保护',
    topic: 'Society',
    difficulty: 'Medium',
    wordCount: 440,
    passage: 'Tourism can be a double-edged sword for cultural preservation. On one hand, it provides economic incentives to protect historical sites and traditions. Revenue from tourism often funds conservation efforts and supports local communities. Cultural tourism also raises awareness about the importance of preserving heritage, fostering appreciation for diverse cultures.\n\nOn the other hand, mass tourism can threaten cultural integrity. Large numbers of visitors can damage fragile historical sites through wear and tear. Commercialization often dilutes authentic cultural experiences, as traditions are modified to cater to tourist expectations. Additionally, the influx of tourists can disrupt local communities and drive up living costs.\n\nSustainable tourism practices seek to balance economic benefits with cultural preservation. Responsible tourism initiatives promote respect for local cultures and environments. By limiting visitor numbers, supporting local businesses, and educating tourists about cultural sensitivity, destinations can preserve their heritage while still benefiting from tourism revenue.',
    passageCN: '旅游业对于文化保护来说是一把双刃剑。一方面，它为保护历史遗址和传统提供了经济激励。旅游业收入通常用于资助保护工作并支持当地社区。文化旅游还提高了人们对保护遗产重要性的认识，促进了对多元文化的欣赏。\n\n另一方面，大众旅游可能威胁文化完整性。大量游客会因磨损损坏脆弱的历史遗址。商业化往往会淡化真实的文化体验，因为传统会被修改以迎合游客的期望。此外，游客的涌入会扰乱当地社区并推高生活成本。\n\n可持续旅游实践力求平衡经济效益与文化保护。负责任的旅游倡议促进对当地文化和环境的尊重。通过限制游客数量、支持当地企业以及对游客进行文化敏感性教育，目的地可以在从旅游业收入中受益的同时保护其遗产。',
    questions: [
      {
        id: 1,
        type: 'Multiple Choice',
        question: 'What is one positive effect of tourism on cultural preservation?',
        options: ['Increased pollution', 'Funding for conservation', 'Cultural dilution', 'Higher living costs'],
        answer: 'Funding for conservation',
        explanation: 'Tourism revenue often funds conservation efforts.'
      },
      {
        id: 2,
        type: 'True/False/Not Given',
        question: 'Mass tourism always benefits cultural preservation.',
        answer: 'False',
        explanation: 'The passage states mass tourism can threaten cultural integrity.'
      },
      {
        id: 3,
        type: 'Sentence Completion',
        question: '______ tourism seeks to balance economic benefits with cultural preservation.',
        answer: 'Sustainable',
        explanation: 'The passage describes sustainable tourism practices.'
      }
    ]
  },
  {
    id: 9,
    title: 'The Future of Work',
    titleCN: '未来的工作',
    topic: 'Work',
    difficulty: 'Hard',
    wordCount: 470,
    passage: 'The nature of work is undergoing profound transformation. Advances in technology, particularly artificial intelligence and automation, are reshaping industries and job markets. While some jobs may be replaced by machines, new roles are emerging that require human skills like creativity, emotional intelligence, and complex problem-solving.\n\nRemote work has become increasingly prevalent, accelerated by the COVID-19 pandemic. Many companies now offer flexible work arrangements, allowing employees to work from anywhere. This shift has benefits for both workers and employers, including reduced commuting time and lower overhead costs. However, it also presents challenges such as maintaining work-life balance and fostering team cohesion.\n\nThe gig economy, characterized by short-term contracts and freelance work, is also growing. Platforms like Uber and Airbnb have created new opportunities for independent workers. While this provides flexibility, it often lacks the stability and benefits of traditional employment. As the workforce evolves, individuals must continuously update their skills to remain competitive in a rapidly changing job market.',
    passageCN: '工作的性质正在发生深刻变革。技术进步，特别是人工智能和自动化，正在重塑行业和就业市场。虽然有些工作可能会被机器取代，但新的角色正在出现，这些角色需要创造力、情商和复杂问题解决能力等人类技能。\n\n远程工作变得越来越普遍，COVID-19大流行加速了这一趋势。许多公司现在提供灵活的工作安排，允许员工在任何地方工作。这种转变对工人和雇主都有好处，包括减少通勤时间和降低间接成本。然而，它也带来了挑战，例如保持工作与生活的平衡和促进团队凝聚力。\n\n以短期合同和自由职业为特征的零工经济也在增长。优步和爱彼迎等平台为独立工作者创造了新机会。虽然这提供了灵活性，但它往往缺乏传统就业的稳定性和福利。随着劳动力的发展，个人必须不断更新技能，以在快速变化的就业市场中保持竞争力。',
    questions: [
      {
        id: 1,
        type: 'Multiple Choice',
        question: 'What skills are becoming more important in the future workplace?',
        options: ['Repetitive tasks', 'Creativity and emotional intelligence', 'Manual labor', 'Data entry'],
        answer: 'Creativity and emotional intelligence',
        explanation: 'The passage states new roles require human skills like creativity and emotional intelligence.'
      },
      {
        id: 2,
        type: 'True/False/Not Given',
        question: 'Remote work only has benefits and no challenges.',
        answer: 'False',
        explanation: 'The passage mentions challenges like maintaining work-life balance.'
      },
      {
        id: 3,
        type: 'Sentence Completion',
        question: 'The ______ economy is characterized by short-term contracts and freelance work.',
        answer: 'gig',
        explanation: 'The passage describes the gig economy.'
      }
    ]
  },
  {
    id: 10,
    title: 'The Science of Sleep',
    titleCN: '睡眠科学',
    topic: 'Health',
    difficulty: 'Medium',
    wordCount: 410,
    passage: 'Sleep is essential for human health and well-being. During sleep, the body repairs itself, and the brain consolidates memories. Adults typically need 7-9 hours of sleep per night, though individual needs vary. Lack of sleep can have serious consequences, including impaired cognitive function, weakened immune system, and increased risk of chronic diseases.\n\nSleep occurs in cycles, each lasting about 90 minutes. These cycles consist of non-rapid eye movement (NREM) sleep and rapid eye movement (REM) sleep. NREM sleep is divided into three stages, with deep sleep occurring in stages 3. REM sleep, characterized by rapid eye movements and vivid dreams, is particularly important for memory consolidation and emotional regulation.\n\nSeveral factors can disrupt sleep, including stress, caffeine, and irregular sleep schedules. Establishing a consistent bedtime routine and creating a sleep-friendly environment can improve sleep quality. Avoiding screens before bed, keeping the bedroom cool and dark, and limiting caffeine intake are simple yet effective strategies for better sleep.',
    passageCN: '睡眠对人类健康和福祉至关重要。在睡眠期间，身体会自我修复，大脑会巩固记忆。成年人通常每晚需要7-9小时的睡眠，尽管个体需求有所不同。睡眠不足会产生严重后果，包括认知功能受损、免疫系统减弱以及慢性疾病风险增加。\n\n睡眠以周期形式发生，每个周期持续约90分钟。这些周期包括非快速眼动（NREM）睡眠和快速眼动（REM）睡眠。非快速眼动睡眠分为三个阶段，深度睡眠发生在第三阶段。快速眼动睡眠以快速眼球运动和生动的梦境为特征，对记忆巩固和情绪调节尤为重要。\n\n有几个因素会扰乱睡眠，包括压力、咖啡因和不规律的睡眠时间表。建立一致的就寝时间习惯并创造一个有利于睡眠的环境可以提高睡眠质量。睡前避免使用屏幕、保持卧室凉爽黑暗以及限制咖啡因摄入是改善睡眠的简单而有效的策略。',
    questions: [
      {
        id: 1,
        type: 'Multiple Choice',
        question: 'How many hours of sleep do adults typically need?',
        options: ['4-6 hours', '7-9 hours', '10-12 hours', '12+ hours'],
        answer: '7-9 hours',
        explanation: 'The passage states adults typically need 7-9 hours of sleep.'
      },
      {
        id: 2,
        type: 'True/False/Not Given',
        question: 'REM sleep is not important for memory.',
        answer: 'False',
        explanation: 'The passage states REM sleep is particularly important for memory consolidation.'
      },
      {
        id: 3,
        type: 'Sentence Completion',
        question: 'Each sleep cycle lasts approximately ______ minutes.',
        answer: '90',
        explanation: 'The passage states each sleep cycle lasts about 90 minutes.'
      }
    ]
  },
  {
    id: 11,
    title: 'The Rise of E-commerce',
    titleCN: '电子商务的兴起',
    topic: 'Technology',
    difficulty: 'Easy',
    wordCount: 360,
    passage: 'E-commerce has transformed the way people shop and do business. Online shopping has grown exponentially over the past two decades, driven by improvements in internet access, secure payment systems, and mobile technology. Today, consumers can purchase almost anything online, from groceries to luxury goods, with just a few clicks.\n\nThe convenience of e-commerce is one of its greatest advantages. Shoppers can browse and compare products at any time, without leaving their homes. Online retailers often offer lower prices than brick-and-mortar stores due to lower overhead costs. Additionally, e-commerce provides access to a global marketplace, allowing consumers to purchase products from around the world.\n\nHowever, e-commerce also presents challenges. Concerns about privacy and security remain, as online transactions involve sharing personal and financial information. The environmental impact of packaging and shipping is another concern. Despite these challenges, e-commerce continues to grow, with mobile commerce becoming increasingly popular as more people use smartphones for online shopping.',
    passageCN: '电子商务改变了人们购物和做生意的方式。在过去二十年里，由于互联网接入、安全支付系统和移动技术的改善，网上购物呈指数级增长。今天，消费者只需点击几下鼠标，就可以在网上购买几乎任何东西，从杂货到奢侈品。\n\n电子商务的便利性是其最大的优势之一。购物者可以随时浏览和比较产品，无需离开家。由于较低的间接成本，在线零售商通常提供比实体店更低的价格。此外，电子商务提供了进入全球市场的机会，允许消费者购买来自世界各地的产品。\n\n然而，电子商务也带来了挑战。随着在线交易涉及共享个人和财务信息，对隐私和安全的担忧依然存在。包装和运输对环境的影响是另一个关注点。尽管面临这些挑战，电子商务继续增长，随着越来越多的人使用智能手机进行在线购物，移动商务变得越来越流行。',
    questions: [
      {
        id: 1,
        type: 'Multiple Choice',
        question: 'What has driven the growth of e-commerce?',
        options: ['Decline in internet access', 'Improvements in technology', 'Higher prices online', 'Limited product selection'],
        answer: 'Improvements in technology',
        explanation: 'E-commerce growth is driven by improvements in internet access, secure payment systems, and mobile technology.'
      },
      {
        id: 2,
        type: 'True/False/Not Given',
        question: 'Online retailers always charge higher prices than physical stores.',
        answer: 'False',
        explanation: 'The passage states online retailers often offer lower prices.'
      },
      {
        id: 3,
        type: 'Sentence Completion',
        question: '______ commerce is becoming increasingly popular with smartphone users.',
        answer: 'Mobile',
        explanation: 'The passage mentions mobile commerce is growing in popularity.'
      }
    ]
  },
  {
    id: 12,
    title: 'Climate Change and Agriculture',
    titleCN: '气候变化与农业',
    topic: 'Environment',
    difficulty: 'Hard',
    wordCount: 490,
    passage: 'Climate change poses significant challenges to global agriculture. Rising temperatures, changing precipitation patterns, and extreme weather events are disrupting crop production and threatening food security. Heatwaves can damage crops, while droughts and floods destroy farmland and reduce yields.\n\nThe impact of climate change on agriculture is not uniform. Regions already experiencing water scarcity face increased pressure, while areas with higher rainfall may see changes in growing seasons. Small-scale farmers, who often lack resources to adapt, are particularly vulnerable. Additionally, climate change affects livestock, with heat stress reducing productivity and increasing mortality rates.\n\nAdaptation strategies are essential for ensuring food security in a changing climate. Developing drought-resistant crop varieties, improving water management systems, and implementing sustainable farming practices can help mitigate the effects of climate change. Policy interventions, such as providing farmers with access to climate information and financial support, are also crucial. By taking proactive measures, societies can build resilience and ensure agricultural productivity for future generations.',
    passageCN: '气候变化给全球农业带来了重大挑战。气温上升、降水模式变化和极端天气事件正在扰乱作物生产并威胁粮食安全。热浪会损害作物，而干旱和洪水会破坏农田并降低产量。\n\n气候变化对农业的影响并不均匀。已经面临水资源短缺的地区面临更大压力，而降雨量较高的地区可能会看到生长季节的变化。往往缺乏适应资源的小规模农民特别脆弱。此外，气候变化影响牲畜，热应激会降低生产力并提高死亡率。\n\n适应战略对于在气候变化中确保粮食安全至关重要。开发抗旱作物品种、改善水资源管理系统以及实施可持续农业实践有助于减轻气候变化的影响。政策干预，如为农民提供气候信息和财政支持，也至关重要。通过采取积极措施，社会可以建立韧性并确保后代的农业生产力。',
    questions: [
      {
        id: 1,
        type: 'Multiple Choice',
        question: 'Which group is particularly vulnerable to climate change in agriculture?',
        options: ['Large agribusinesses', 'Small-scale farmers', 'Urban consumers', 'Government officials'],
        answer: 'Small-scale farmers',
        explanation: 'Small-scale farmers lack resources to adapt to climate change.'
      },
      {
        id: 2,
        type: 'True/False/Not Given',
        question: 'Climate change has no impact on livestock.',
        answer: 'False',
        explanation: 'The passage states climate change affects livestock with heat stress.'
      },
      {
        id: 3,
        type: 'Sentence Completion',
        question: '______-resistant crop varieties can help mitigate climate change effects.',
        answer: 'Drought',
        explanation: 'The passage mentions developing drought-resistant crop varieties.'
      }
    ]
  },
  {
    id: 13,
    title: 'The Role of Media in Society',
    topic: 'Society',
    difficulty: 'Medium',
    wordCount: 420,
    passage: 'Media plays a vital role in shaping public opinion and informing citizens. Through newspapers, television, radio, and the internet, media provides news, entertainment, and educational content. It serves as a watchdog, holding those in power accountable and promoting transparency in governance.\n\nHowever, the media landscape has changed dramatically with the rise of digital platforms. Social media allows anyone to share information, which has democratized content creation but also led to the spread of misinformation. The 24-hour news cycle and clickbait headlines often prioritize sensationalism over accuracy, contributing to information overload and polarization.\n\nMedia literacy has become essential in today\'s society. Being able to critically evaluate information, identify bias, and distinguish between credible and unreliable sources is crucial. By developing media literacy skills, individuals can navigate the complex media landscape and make informed decisions.',
    questions: [
      {
        id: 1,
        type: 'Multiple Choice',
        question: 'What is one role of media as a watchdog?',
        options: ['Entertaining audiences', 'Holding those in power accountable', 'Selling products', 'Providing weather forecasts'],
        answer: 'Holding those in power accountable',
        explanation: 'Media serves as a watchdog by holding those in power accountable.'
      },
      {
        id: 2,
        type: 'True/False/Not Given',
        question: 'Digital platforms have only positive effects on media.',
        answer: 'False',
        explanation: 'The passage mentions digital platforms have led to misinformation spread.'
      },
      {
        id: 3,
        type: 'Sentence Completion',
        question: '______ literacy helps individuals critically evaluate information.',
        answer: 'Media',
        explanation: 'The passage discusses the importance of media literacy.'
      }
    ]
  },
  {
    id: 14,
    title: 'Advances in Medical Technology',
    topic: 'Health',
    difficulty: 'Hard',
    wordCount: 460,
    passage: 'Medical technology has advanced dramatically in recent decades, improving diagnosis, treatment, and patient outcomes. Diagnostic tools like MRI and CT scans provide detailed images of the body, enabling early detection of diseases. Minimally invasive surgical techniques reduce recovery times and improve patient comfort.\n\nPrecision medicine, which tailors treatments to individual patients based on their genetic makeup, is revolutionizing healthcare. This approach allows doctors to prescribe medications and therapies that are most likely to be effective for each patient, minimizing side effects and improving outcomes. Artificial intelligence is also playing an increasingly important role in medicine, from assisting with diagnosis to optimizing treatment plans.\n\nTelemedicine has become more prevalent, allowing patients to consult with healthcare providers remotely. This is particularly beneficial for patients in rural areas or those with limited mobility. Wearable devices that monitor vital signs provide real-time health data, enabling proactive healthcare management. As technology continues to advance, the future of medicine looks promising, with the potential to improve health outcomes for people worldwide.',
    questions: [
      {
        id: 1,
        type: 'Multiple Choice',
        question: 'What is precision medicine?',
        options: ['One-size-fits-all treatment', 'Tailoring treatments to individual patients', 'Traditional medicine', 'Alternative therapies'],
        answer: 'Tailoring treatments to individual patients',
        explanation: 'Precision medicine tailors treatments based on individual genetic makeup.'
      },
      {
        id: 2,
        type: 'True/False/Not Given',
        question: 'Telemedicine is only useful for urban patients.',
        answer: 'False',
        explanation: 'Telemedicine is particularly beneficial for patients in rural areas.'
      },
      {
        id: 3,
        type: 'Sentence Completion',
        question: '______ devices monitor vital signs and provide real-time health data.',
        answer: 'Wearable',
        explanation: 'The passage mentions wearable devices for health monitoring.'
      }
    ]
  },
  {
    id: 15,
    title: 'The Impact of Social Media on Relationships',
    topic: 'Society',
    difficulty: 'Medium',
    wordCount: 400,
    passage: 'Social media has transformed how people connect and maintain relationships. Platforms like Facebook, Instagram, and Twitter allow individuals to stay in touch with friends and family, share life events, and build communities around shared interests. Long-distance relationships are easier to maintain, and people can connect with others who share similar hobbies or experiences.\n\nHowever, social media also presents challenges. The curated nature of social media posts often leads to social comparison, where people compare their lives to others\' highlight reels, potentially causing feelings of inadequacy or low self-esteem. Cyberbullying is another significant issue, with online harassment affecting people of all ages. Additionally, excessive social media use can lead to decreased face-to-face interaction and may negatively impact mental health.\n\nFinding a healthy balance is key. Using social media mindfully, setting boundaries, and prioritizing in-person connections can help individuals enjoy the benefits while minimizing the risks. By being aware of both the positive and negative aspects, people can use social media in ways that enhance, rather than detract from, their relationships and well-being.',
    questions: [
      {
        id: 1,
        type: 'Multiple Choice',
        question: 'What is one benefit of social media for relationships?',
        options: ['Cyberbullying', 'Social comparison', 'Maintaining long-distance relationships', 'Decreased face-to-face interaction'],
        answer: 'Maintaining long-distance relationships',
        explanation: 'Social media makes long-distance relationships easier to maintain.'
      },
      {
        id: 2,
        type: 'True/False/Not Given',
        question: 'Social media only has positive effects on relationships.',
        answer: 'False',
        explanation: 'The passage discusses several challenges including social comparison and cyberbullying.'
      },
      {
        id: 3,
        type: 'Sentence Completion',
        question: 'Finding a healthy ______ is key to using social media mindfully.',
        answer: 'balance',
        explanation: 'The passage states finding a healthy balance is key.'
      }
    ]
  },
  {
    id: 16,
    title: 'The History of Aviation',
    topic: 'Technology',
    difficulty: 'Easy',
    wordCount: 370,
    passage: 'The history of aviation is a story of human ingenuity and perseverance. For centuries, humans dreamed of flying like birds. Early attempts at flight included hot air balloons and gliders, but it was not until the early 20th century that powered flight became a reality. In 1903, the Wright brothers achieved the first successful powered flight in Kitty Hawk, North Carolina.\n\nThe development of aviation accelerated rapidly in the following decades. World War I spurred advances in aircraft technology, leading to faster and more maneuverable planes. Commercial aviation began in the 1920s, with airlines offering passenger service between cities. The jet engine, developed in the 1940s, revolutionized air travel, making long-distance flights faster and more comfortable.\n\nToday, air travel is an essential part of modern life, connecting people and businesses across the globe. Advances in technology continue to improve safety, efficiency, and environmental performance. From small propeller planes to massive commercial jets, aviation has come a long way since those first tentative flights over a century ago.',
    questions: [
      {
        id: 1,
        type: 'Multiple Choice',
        question: 'When was the first successful powered flight?',
        options: ['1890', '1903', '1914', '1920'],
        answer: '1903',
        explanation: 'The Wright brothers achieved the first successful powered flight in 1903.'
      },
      {
        id: 2,
        type: 'True/False/Not Given',
        question: 'Commercial aviation began before World War I.',
        answer: 'False',
        explanation: 'Commercial aviation began in the 1920s, after World War I.'
      },
      {
        id: 3,
        type: 'Sentence Completion',
        question: 'The ______ engine revolutionized air travel in the 1940s.',
        answer: 'jet',
        explanation: 'The jet engine revolutionized air travel.'
      }
    ]
  },
  {
    id: 17,
    title: 'Food Security in the 21st Century',
    topic: 'Environment',
    difficulty: 'Hard',
    wordCount: 480,
    passage: 'Food security is a pressing global issue in the 21st century. With a growing population expected to reach 9 billion by 2050, ensuring adequate food supply for all is a significant challenge. Climate change, water scarcity, and land degradation further complicate this issue, threatening agricultural productivity.\n\nSeveral strategies are being pursued to address food security. Sustainable agriculture practices aim to produce food while preserving natural resources. This includes crop rotation, organic farming, and agroforestry. Biotechnology, including genetically modified crops, offers the potential to increase yields and develop crops that are resistant to pests, drought, and disease.\n\nReducing food waste is another critical component. Approximately one-third of all food produced globally is wasted, from farm to table. Improving storage and transportation infrastructure, educating consumers about food waste, and implementing policies to reduce waste can help ensure more food reaches those in need. International cooperation and investment in agricultural research are also essential to build a sustainable and secure food system for the future.',
    questions: [
      {
        id: 1,
        type: 'Multiple Choice',
        question: 'What is the projected global population by 2050?',
        options: ['7 billion', '8 billion', '9 billion', '10 billion'],
        answer: '9 billion',
        explanation: 'The global population is expected to reach 9 billion by 2050.'
      },
      {
        id: 2,
        type: 'True/False/Not Given',
        question: 'No food is wasted globally.',
        answer: 'False',
        explanation: 'Approximately one-third of all food produced is wasted.'
      },
      {
        id: 3,
        type: 'Sentence Completion',
        question: '______ agriculture practices aim to produce food while preserving natural resources.',
        answer: 'Sustainable',
        explanation: 'The passage describes sustainable agriculture practices.'
      }
    ]
  },
  {
    id: 18,
    title: 'The Importance of Physical Exercise',
    topic: 'Health',
    difficulty: 'Easy',
    wordCount: 350,
    passage: 'Physical exercise is essential for maintaining good health and well-being. Regular physical activity has numerous benefits for both the body and mind. It strengthens the cardiovascular system, improves muscle strength and flexibility, and helps maintain a healthy weight. Exercise also boosts mood and reduces symptoms of anxiety and depression by releasing endorphins, the body\'s natural "feel-good" chemicals.\n\nThe World Health Organization recommends at least 150 minutes of moderate-intensity aerobic exercise or 75 minutes of vigorous-intensity exercise per week, along with muscle-strengthening activities at least twice a week. Activities like walking, swimming, cycling, and dancing are excellent forms of exercise that can be enjoyed by people of all ages.\n\nIncorporating exercise into daily life doesn\'t have to be complicated. Taking the stairs instead of the elevator, walking or biking to work, and doing simple exercises at home are easy ways to stay active. By making physical activity a regular part of routine, individuals can improve their overall health and quality of life.',
    questions: [
      {
        id: 1,
        type: 'Multiple Choice',
        question: 'How many minutes of moderate-intensity exercise does WHO recommend weekly?',
        options: ['60 minutes', '100 minutes', '150 minutes', '200 minutes'],
        answer: '150 minutes',
        explanation: 'WHO recommends 150 minutes of moderate-intensity aerobic exercise weekly.'
      },
      {
        id: 2,
        type: 'True/False/Not Given',
        question: 'Exercise only benefits physical health, not mental health.',
        answer: 'False',
        explanation: 'Exercise boosts mood and reduces anxiety and depression.'
      },
      {
        id: 3,
        type: 'Sentence Completion',
        question: 'Exercise releases ______, the body\'s natural "feel-good" chemicals.',
        answer: 'endorphins',
        explanation: 'Exercise releases endorphins.'
      }
    ]
  },
  {
    id: 19,
    title: 'Global Migration Patterns',
    topic: 'Society',
    difficulty: 'Medium',
    wordCount: 430,
    passage: 'Migration has been a constant feature of human history, driven by factors such as economic opportunity, political instability, and environmental change. In recent decades, global migration patterns have become more complex, with people moving within and between countries for various reasons.\n\nEconomic migration remains the most common driver, as people seek better job opportunities and higher living standards. Many migrants move from developing to developed countries, where wages are higher and social services are more accessible. Political migration, often due to conflict or persecution, has increased in recent years, with millions of people displaced from their homes.\n\nEnvironmental factors are also playing an increasingly important role in migration. Climate change, natural disasters, and resource scarcity are forcing people to leave their communities in search of safer and more sustainable living conditions. This trend is expected to continue as the effects of climate change become more pronounced.\n\nMigration has significant social, economic, and cultural impacts on both sending and receiving countries. While it can bring economic benefits and cultural diversity, it also presents challenges such as integration issues and strain on resources. Understanding migration patterns and addressing the underlying causes is essential for creating effective policies that benefit both migrants and host communities.',
    questions: [
      {
        id: 1,
        type: 'Multiple Choice',
        question: 'What is the most common driver of migration?',
        options: ['Environmental factors', 'Economic opportunity', 'Political instability', 'Cultural reasons'],
        answer: 'Economic opportunity',
        explanation: 'Economic migration is the most common driver.'
      },
      {
        id: 2,
        type: 'True/False/Not Given',
        question: 'Migration has no challenges for host countries.',
        answer: 'False',
        explanation: 'Migration presents challenges like integration issues and resource strain.'
      },
      {
        id: 3,
        type: 'Sentence Completion',
        question: '______ factors are increasingly driving migration due to climate change.',
        answer: 'Environmental',
        explanation: 'Environmental factors are playing a larger role in migration.'
      }
    ]
  },
  {
    id: 20,
    title: 'The Future of Transportation',
    topic: 'Technology',
    difficulty: 'Hard',
    wordCount: 470,
    passage: 'Transportation is undergoing a transformative shift, driven by advances in technology and changing societal needs. Electric vehicles (EVs) are becoming increasingly popular as concerns about climate change grow. Governments and manufacturers are investing heavily in EV technology, with many countries announcing plans to phase out internal combustion engine vehicles in the coming decades.\n\nAutonomous vehicles, or self-driving cars, are another major development. Companies like Tesla, Waymo, and Uber are testing autonomous technology, with the goal of creating safer and more efficient transportation systems. While fully autonomous vehicles are still in development, semi-autonomous features like adaptive cruise control and lane-keeping assistance are already available in many cars.\n\nPublic transportation is also evolving, with improvements in high-speed rail and smart transit systems. Cities are investing in infrastructure to make public transport more efficient and user-friendly, encouraging more people to choose sustainable transportation options. Additionally, alternative modes of transport like electric scooters and bikes are becoming more common in urban areas, providing flexible and eco-friendly ways to travel short distances.\n\nThe future of transportation promises to be more sustainable, efficient, and connected. By embracing new technologies and prioritizing sustainability, societies can create transportation systems that meet the needs of people while minimizing environmental impact.',
    questions: [
      {
        id: 1,
        type: 'Multiple Choice',
        question: 'What technology is becoming increasingly popular due to climate concerns?',
        options: ['Internal combustion engines', 'Electric vehicles', 'Steam engines', 'Horse-drawn carriages'],
        answer: 'Electric vehicles',
        explanation: 'Electric vehicles are growing in popularity due to climate concerns.'
      },
      {
        id: 2,
        type: 'True/False/Not Given',
        question: 'Fully autonomous vehicles are already widely available.',
        answer: 'False',
        explanation: 'Fully autonomous vehicles are still in development.'
      },
      {
        id: 3,
        type: 'Sentence Completion',
        question: 'High-speed ______ is improving as part of evolving public transportation.',
        answer: 'rail',
        explanation: 'The passage mentions improvements in high-speed rail.'
      }
    ]
  },
  {
    id: 21,
    title: 'The Importance of Early Childhood Education',
    topic: 'Education',
    difficulty: 'Medium',
    wordCount: 420,
    passage: 'Early childhood education plays a crucial role in a child\'s development. From birth to age five, children\'s brains develop rapidly, making this period critical for learning and growth. Quality early education programs provide children with opportunities to develop cognitive, social, and emotional skills that form the foundation for future academic success.\n\nResearch shows that children who participate in high-quality early education programs are more likely to succeed in school, have better social skills, and are more prepared for the challenges of adulthood. These programs often include activities that promote language development, problem-solving, and creativity. They also help children learn how to interact with peers and adults, building important social-emotional skills.\n\nInvesting in early childhood education has long-term benefits for individuals and society. Children who receive quality early education are more likely to graduate from high school, attend college, and have successful careers. They also tend to be healthier and more engaged citizens. By prioritizing early childhood education, societies can create a stronger foundation for future generations.',
    questions: [
      {
        id: 1,
        type: 'Multiple Choice',
        question: 'What age range is considered early childhood?',
        options: ['0-3 years', '0-5 years', '3-8 years', '5-12 years'],
        answer: '0-5 years',
        explanation: 'The passage states early childhood is from birth to age five.'
      },
      {
        id: 2,
        type: 'True/False/Not Given',
        question: 'Early childhood education has no long-term benefits.',
        answer: 'False',
        explanation: 'The passage states investing in early childhood education has long-term benefits.'
      },
      {
        id: 3,
        type: 'Sentence Completion',
        question: 'Quality early education helps develop cognitive, social, and ______ skills.',
        answer: 'emotional',
        explanation: 'The passage mentions cognitive, social, and emotional skills.'
      }
    ]
  },
  {
    id: 22,
    title: 'Water Conservation',
    topic: 'Environment',
    difficulty: 'Easy',
    wordCount: 360,
    passage: 'Water conservation is essential for sustainable living. Freshwater is a finite resource, and demand is increasing due to population growth, agriculture, and industry. Many regions around the world face water scarcity, making conservation efforts crucial.\n\nThere are many simple ways to conserve water in daily life. Fixing leaky faucets, using water-efficient appliances, and reducing outdoor water use are effective strategies. In agriculture, drip irrigation and precision watering techniques can significantly reduce water waste. Industries can also implement water recycling and reuse systems.\n\nGovernments play an important role in water conservation through policies and regulations. Water pricing structures that reflect the true cost of water can encourage conservation. Public education campaigns can raise awareness about the importance of water conservation and provide practical tips. By working together, individuals, communities, and governments can ensure sustainable water use for future generations.',
    questions: [
      {
        id: 1,
        type: 'Multiple Choice',
        question: 'What is one way to conserve water in daily life?',
        options: ['Leaving faucets running', 'Fixing leaky faucets', 'Using more water for gardening', 'Wasting water intentionally'],
        answer: 'Fixing leaky faucets',
        explanation: 'Fixing leaky faucets is mentioned as a water conservation strategy.'
      },
      {
        id: 2,
        type: 'True/False/Not Given',
        question: 'Freshwater is an infinite resource.',
        answer: 'False',
        explanation: 'The passage states freshwater is a finite resource.'
      },
      {
        id: 3,
        type: 'Sentence Completion',
        question: '______ irrigation is a water-efficient technique used in agriculture.',
        answer: 'Drip',
        explanation: 'The passage mentions drip irrigation.'
      }
    ]
  },
  {
    id: 23,
    title: 'The Impact of Television on Children',
    topic: 'Society',
    difficulty: 'Medium',
    wordCount: 400,
    passage: 'Television has a significant impact on children\'s development. While educational programs can be beneficial, excessive screen time can have negative effects. The American Academy of Pediatrics recommends limiting screen time for children under 18 months and encouraging high-quality programming for older children.\n\nEducational television programs can help children learn new skills, develop language abilities, and explore the world around them. Shows that promote social-emotional learning, problem-solving, and creativity can be particularly beneficial. However, passive viewing of non-educational content can lead to decreased attention spans and reduced physical activity.\n\nParents play a crucial role in managing their children\'s television use. Setting clear limits, choosing quality programs, and watching together can maximize the benefits and minimize the risks. By fostering a balanced approach to screen time, parents can help their children develop healthy media habits that will serve them well throughout their lives.',
    questions: [
      {
        id: 1,
        type: 'Multiple Choice',
        question: 'What does the American Academy of Pediatrics recommend for children under 18 months?',
        options: ['Unlimited screen time', 'No screen time', 'Limited screen time', 'Only educational programs'],
        answer: 'Limited screen time',
        explanation: 'The AAP recommends limiting screen time for children under 18 months.'
      },
      {
        id: 2,
        type: 'True/False/Not Given',
        question: 'All television viewing has negative effects on children.',
        answer: 'False',
        explanation: 'The passage states educational programs can be beneficial.'
      },
      {
        id: 3,
        type: 'Sentence Completion',
        question: 'Parents play a ______ role in managing children\'s television use.',
        answer: 'crucial',
        explanation: 'The passage states parents play a crucial role.'
      }
    ]
  },
  {
    id: 24,
    title: 'The Science of Nutrition',
    topic: 'Health',
    difficulty: 'Hard',
    wordCount: 470,
    passage: 'Nutrition is the study of how food affects the body. A balanced diet provides the nutrients needed for growth, energy, and maintenance of good health. Essential nutrients include carbohydrates, proteins, fats, vitamins, and minerals, each playing a unique role in the body.\n\nCarbohydrates are the body\'s primary source of energy, while proteins are essential for building and repairing tissues. Fats provide energy and help absorb fat-soluble vitamins. Vitamins and minerals are needed in smaller amounts but are crucial for various bodily functions, from immune support to bone health.\n\nUnderstanding nutritional needs changes throughout life. Children and adolescents require adequate nutrients for growth and development, while older adults may have different requirements due to changes in metabolism and activity levels. Factors such as age, gender, activity level, and health status all influence individual nutritional needs.\n\nMaking informed food choices is essential for maintaining good nutrition. Reading food labels, understanding portion sizes, and incorporating a variety of foods into the diet can help ensure balanced nutrition. By prioritizing nutrient-dense foods and limiting processed and sugary foods, individuals can support their overall health and well-being.',
    questions: [
      {
        id: 1,
        type: 'Multiple Choice',
        question: 'What are the body\'s primary source of energy?',
        options: ['Proteins', 'Fats', 'Carbohydrates', 'Vitamins'],
        answer: 'Carbohydrates',
        explanation: 'Carbohydrates are the body\'s primary source of energy.'
      },
      {
        id: 2,
        type: 'True/False/Not Given',
        question: 'Nutritional needs are the same for everyone.',
        answer: 'False',
        explanation: 'The passage states nutritional needs vary based on age, gender, activity level, etc.'
      },
      {
        id: 3,
        type: 'Sentence Completion',
        question: '______ are essential for building and repairing tissues.',
        answer: 'Proteins',
        explanation: 'Proteins are essential for building and repairing tissues.'
      }
    ]
  },
  {
    id: 25,
    title: 'The History of Printing',
    topic: 'Technology',
    difficulty: 'Easy',
    wordCount: 370,
    passage: 'The history of printing dates back to ancient times, with early forms of printing appearing in China as early as the 8th century. However, the invention of the movable-type printing press by Johannes Gutenberg in the 1440s revolutionized the spread of information. Gutenberg\'s press made books more affordable and accessible, leading to a significant increase in literacy rates across Europe.\n\nBefore Gutenberg\'s invention, books were hand-copied by scribes, a labor-intensive and expensive process. The printing press allowed for the mass production of books, making knowledge available to a wider audience. This had a profound impact on education, religion, and politics, contributing to the Renaissance and the spread of new ideas.\n\nOver time, printing technology continued to evolve. The development of offset printing in the 19th century made large-scale printing more efficient. Today, digital printing has further transformed the industry, allowing for on-demand printing and personalized publications. From Gutenberg\'s wooden press to modern digital printers, the history of printing reflects humanity\'s ongoing quest to share knowledge and ideas.',
    questions: [
      {
        id: 1,
        type: 'Multiple Choice',
        question: 'Who invented the movable-type printing press?',
        options: ['Isaac Newton', 'Johannes Gutenberg', 'Leonardo da Vinci', 'Galileo Galilei'],
        answer: 'Johannes Gutenberg',
        explanation: 'Gutenberg invented the movable-type printing press in the 1440s.'
      },
      {
        id: 2,
        type: 'True/False/Not Given',
        question: 'Books were mass-produced before Gutenberg\'s invention.',
        answer: 'False',
        explanation: 'Before Gutenberg, books were hand-copied by scribes.'
      },
      {
        id: 3,
        type: 'Sentence Completion',
        question: 'The printing press led to a significant increase in ______ rates.',
        answer: 'literacy',
        explanation: 'The passage states the printing press increased literacy rates.'
      }
    ]
  },
  {
    id: 26,
    title: 'Wildlife Conservation',
    topic: 'Environment',
    difficulty: 'Medium',
    wordCount: 440,
    passage: 'Wildlife conservation is essential for maintaining biodiversity and ecological balance. Human activities such as habitat destruction, poaching, and pollution have threatened many species with extinction. Conservation efforts aim to protect endangered species and their habitats, ensuring the survival of diverse ecosystems.\n\nProtected areas, such as national parks and wildlife reserves, play a crucial role in conservation. These areas provide safe havens for wildlife and help preserve natural habitats. Additionally, anti-poaching measures and wildlife trafficking laws help protect endangered species from illegal hunting and trade.\n\nCommunity involvement is also vital for successful conservation. Local communities often have valuable knowledge about wildlife and ecosystems. By involving communities in conservation efforts, we can create sustainable solutions that benefit both people and wildlife. Education and awareness campaigns help foster a culture of conservation, encouraging people to protect wildlife and their habitats.\n\nInternational cooperation is essential for addressing global conservation challenges. Many species migrate across borders, requiring coordinated efforts between countries. By working together, nations can protect migratory species and preserve biodiversity on a global scale.',
    questions: [
      {
        id: 1,
        type: 'Multiple Choice',
        question: 'What is one threat to wildlife mentioned in the passage?',
        options: ['Habitat preservation', 'Poaching', 'Conservation', 'Protected areas'],
        answer: 'Poaching',
        explanation: 'Poaching is identified as a threat to wildlife.'
      },
      {
        id: 2,
        type: 'True/False/Not Given',
        question: 'Wildlife conservation has no benefits for humans.',
        answer: 'False',
        explanation: 'The passage mentions community involvement and sustainable solutions benefiting people.'
      },
      {
        id: 3,
        type: 'Sentence Completion',
        question: '______ areas like national parks provide safe havens for wildlife.',
        answer: 'Protected',
        explanation: 'Protected areas play a crucial role in conservation.'
      }
    ]
  },
  {
    id: 27,
    title: 'The Psychology of Learning',
    topic: 'Education',
    difficulty: 'Hard',
    wordCount: 480,
    passage: 'The psychology of learning explores how people acquire knowledge and skills. Understanding learning processes can help educators design effective teaching strategies and improve educational outcomes. Several theories have been developed to explain how learning occurs, each offering valuable insights into the learning process.\n\nBehaviorism, one of the earliest learning theories, focuses on observable behaviors and how they are shaped by rewards and punishments. Cognitive learning theory emphasizes mental processes such as attention, memory, and problem-solving. Constructivism suggests that learners actively construct knowledge through experiences and interactions with their environment.\n\nMotivation plays a crucial role in learning. Intrinsic motivation, driven by personal interest and curiosity, is often more effective than extrinsic motivation, which comes from external rewards. Creating a supportive learning environment that fosters curiosity and engagement can enhance motivation and improve learning outcomes.\n\nIndividual differences also influence how people learn. Some learners prefer visual information, while others learn better through auditory or kinesthetic experiences. Recognizing and accommodating these differences can help educators meet the diverse needs of students. By understanding the psychology of learning, educators can create more effective and inclusive learning experiences for all students.',
    questions: [
      {
        id: 1,
        type: 'Multiple Choice',
        question: 'Which learning theory focuses on observable behaviors?',
        options: ['Constructivism', 'Cognitive learning theory', 'Behaviorism', 'Humanism'],
        answer: 'Behaviorism',
        explanation: 'Behaviorism focuses on observable behaviors shaped by rewards and punishments.'
      },
      {
        id: 2,
        type: 'True/False/Not Given',
        question: 'All learners have the same learning preferences.',
        answer: 'False',
        explanation: 'The passage mentions individual differences in learning preferences.'
      },
      {
        id: 3,
        type: 'Sentence Completion',
        question: '______ motivation comes from personal interest and curiosity.',
        answer: 'Intrinsic',
        explanation: 'Intrinsic motivation is driven by personal interest.'
      }
    ]
  },
  {
    id: 28,
    title: 'The Benefits of Reading',
    topic: 'Education',
    difficulty: 'Easy',
    wordCount: 350,
    passage: 'Reading is a fundamental skill that offers numerous benefits. It enhances vocabulary, improves comprehension, and stimulates imagination. Reading also helps develop critical thinking skills, as readers analyze and interpret information from various sources.\n\nRegular reading has been shown to reduce stress and improve mental well-being. Getting lost in a good book can provide an escape from daily pressures and promote relaxation. Additionally, reading fiction allows readers to experience different perspectives and cultures, fostering empathy and understanding.\n\nReading is essential for academic success. Students who read regularly perform better in school, develop stronger writing skills, and have a broader knowledge base. Reading for pleasure also encourages lifelong learning and intellectual growth.\n\nWith the rise of digital media, reading has evolved to include e-books and online content. While digital reading offers convenience, many people still prefer the tactile experience of reading physical books. Regardless of the format, the benefits of reading remain consistent, making it a valuable activity for people of all ages.',
    questions: [
      {
        id: 1,
        type: 'Multiple Choice',
        question: 'What is one benefit of reading mentioned in the passage?',
        options: ['Increased stress', 'Reduced vocabulary', 'Improved comprehension', 'Decreased imagination'],
        answer: 'Improved comprehension',
        explanation: 'Reading enhances vocabulary and improves comprehension.'
      },
      {
        id: 2,
        type: 'True/False/Not Given',
        question: 'Reading only benefits academic performance.',
        answer: 'False',
        explanation: 'Reading also reduces stress and improves mental well-being.'
      },
      {
        id: 3,
        type: 'Sentence Completion',
        question: 'Reading fiction fosters ______ and understanding.',
        answer: 'empathy',
        explanation: 'Reading fiction fosters empathy and understanding.'
      }
    ]
  },
  {
    id: 29,
    title: 'Urban Planning and Sustainability',
    topic: 'Environment',
    difficulty: 'Hard',
    wordCount: 460,
    passage: 'Urban planning plays a crucial role in creating sustainable cities. As urban populations grow, it is essential to design cities that are environmentally friendly, socially equitable, and economically viable. Sustainable urban planning incorporates principles that minimize environmental impact while enhancing quality of life.\n\nKey elements of sustainable urban planning include green infrastructure, public transportation, and mixed-use development. Green roofs, urban parks, and permeable surfaces help manage stormwater and reduce urban heat islands. Efficient public transportation systems reduce reliance on private cars, lowering carbon emissions and improving air quality.\n\nMixed-use development, which combines residential, commercial, and office spaces, promotes walkability and reduces the need for long commutes. Affordable housing initiatives ensure that cities remain accessible to people of all income levels. Additionally, smart city technologies can improve energy efficiency and resource management.\n\nEngaging communities in the planning process is essential for creating sustainable cities. Local residents have valuable insights into their neighborhoods\' needs and can contribute to more effective planning decisions. By prioritizing sustainability in urban planning, cities can become healthier, more resilient, and more livable places for all residents.',
    questions: [
      {
        id: 1,
        type: 'Multiple Choice',
        question: 'What is one element of sustainable urban planning?',
        options: ['Urban sprawl', 'Green infrastructure', 'Car-only transportation', 'Single-use development'],
        answer: 'Green infrastructure',
        explanation: 'Green infrastructure is a key element of sustainable urban planning.'
      },
      {
        id: 2,
        type: 'True/False/Not Given',
        question: 'Sustainable urban planning has no benefits for residents.',
        answer: 'False',
        explanation: 'Sustainable planning enhances quality of life and creates more livable cities.'
      },
      {
        id: 3,
        type: 'Sentence Completion',
        question: '______ development combines residential, commercial, and office spaces.',
        answer: 'Mixed-use',
        explanation: 'Mixed-use development combines different types of spaces.'
      }
    ]
  },
  {
    id: 30,
    title: 'The Evolution of Language',
    topic: 'Society',
    difficulty: 'Medium',
    wordCount: 410,
    passage: 'Language is a uniquely human ability that has evolved over thousands of years. From primitive sounds and gestures to complex written systems, language has played a central role in human communication and cultural development.\n\nThe origins of language are still debated, but evidence suggests that early humans developed communication systems to coordinate hunting, share information, and strengthen social bonds. Over time, these systems became more complex, with the development of grammar, syntax, and vocabulary.\n\nLanguage evolution is influenced by cultural, social, and technological factors. As societies change, language adapts to meet new needs. For example, the rise of the internet and digital communication has led to the creation of new words and forms of expression. Slang, acronyms, and emojis are examples of how language evolves to reflect contemporary culture.\n\nLanguage also plays a crucial role in identity and culture. It carries history, traditions, and values, connecting people across generations. Preserving linguistic diversity is important for maintaining cultural heritage and promoting understanding between different communities.',
    questions: [
      {
        id: 1,
        type: 'Multiple Choice',
        question: 'What has influenced language evolution?',
        options: ['Only biological factors', 'Cultural, social, and technological factors', 'No factors', 'Weather patterns'],
        answer: 'Cultural, social, and technological factors',
        explanation: 'Language evolution is influenced by cultural, social, and technological factors.'
      },
      {
        id: 2,
        type: 'True/False/Not Given',
        question: 'Language has remained unchanged over time.',
        answer: 'False',
        explanation: 'The passage states language evolves and adapts to new needs.'
      },
      {
        id: 3,
        type: 'Sentence Completion',
        question: 'Language plays a crucial role in identity and ______.',
        answer: 'culture',
        explanation: 'Language plays a crucial role in identity and culture.'
      }
    ]
  },
  {
    id: 31,
    title: 'The Future of Energy',
    topic: 'Environment',
    difficulty: 'Hard',
    wordCount: 490,
    passage: 'The future of energy is a critical issue facing humanity. As demand for energy continues to grow, transitioning to sustainable and renewable sources is essential for combating climate change and ensuring energy security. Renewable energy technologies such as solar, wind, and hydropower are becoming increasingly cost-competitive with fossil fuels.\n\nAdvancements in energy storage technology are addressing the intermittency challenge of renewable energy. Batteries and other storage systems allow excess energy to be stored for later use, ensuring a reliable energy supply even when the sun isn\'t shining or the wind isn\'t blowing. Smart grids are also playing a key role in managing energy distribution more efficiently.\n\nThe transition to renewable energy requires significant investment in infrastructure and technology. Governments and private companies are investing in research and development to improve the efficiency and affordability of renewable energy systems. Policy incentives such as tax credits and subsidies are encouraging the adoption of clean energy.\n\nIndividual actions also play a role in the energy transition. Energy conservation, energy-efficient appliances, and sustainable transportation choices can reduce energy consumption and support the shift to renewable energy. By working together at all levels, we can create a sustainable energy future that benefits both people and the planet.',
    questions: [
      {
        id: 1,
        type: 'Multiple Choice',
        question: 'What is addressing the intermittency challenge of renewable energy?',
        options: ['Energy storage technology', 'Fossil fuel plants', 'Energy waste', 'Coal mining'],
        answer: 'Energy storage technology',
        explanation: 'Energy storage addresses the intermittency challenge of renewables.'
      },
      {
        id: 2,
        type: 'True/False/Not Given',
        question: 'Renewable energy is more expensive than fossil fuels.',
        answer: 'False',
        explanation: 'The passage states renewables are becoming cost-competitive with fossil fuels.'
      },
      {
        id: 3,
        type: 'Sentence Completion',
        question: '______ grids help manage energy distribution more efficiently.',
        answer: 'Smart',
        explanation: 'Smart grids play a key role in efficient energy distribution.'
      }
    ]
  },
  {
    id: 32,
    title: 'The Importance of Sleep for Learning',
    topic: 'Health',
    difficulty: 'Medium',
    wordCount: 400,
    passage: 'Sleep plays a critical role in learning and memory. During sleep, the brain processes and consolidates information learned during the day. Research shows that getting adequate sleep improves attention, concentration, and problem-solving abilities.\n\nDifferent stages of sleep contribute to different aspects of learning. Deep sleep is particularly important for consolidating factual information and procedural memories. REM sleep, on the other hand, is associated with creative thinking and emotional processing.\n\nStudents who get enough sleep tend to perform better academically. They have better memory retention, are more alert in class, and make fewer errors on tests. Conversely, sleep deprivation can impair cognitive function, leading to poor academic performance and increased stress.\n\nEstablishing good sleep habits is essential for students. Creating a consistent sleep schedule, avoiding screens before bed, and creating a comfortable sleep environment can improve sleep quality. By prioritizing sleep, students can enhance their learning abilities and overall well-being.',
    questions: [
      {
        id: 1,
        type: 'Multiple Choice',
        question: 'What stage of sleep is important for consolidating factual information?',
        options: ['REM sleep', 'Light sleep', 'Deep sleep', 'Awake'],
        answer: 'Deep sleep',
        explanation: 'Deep sleep is important for consolidating factual information.'
      },
      {
        id: 2,
        type: 'True/False/Not Given',
        question: 'Sleep deprivation improves academic performance.',
        answer: 'False',
        explanation: 'Sleep deprivation impairs cognitive function and leads to poor academic performance.'
      },
      {
        id: 3,
        type: 'Sentence Completion',
        question: '______ sleep is associated with creative thinking.',
        answer: 'REM',
        explanation: 'REM sleep is associated with creative thinking.'
      }
    ]
  },
  {
    id: 33,
    title: 'Social Media and Politics',
    topic: 'Society',
    difficulty: 'Medium',
    wordCount: 430,
    passage: 'Social media has become a powerful tool in modern politics. It allows politicians and political movements to communicate directly with voters, bypassing traditional media channels. Social media platforms have played significant roles in political campaigns, protests, and social movements around the world.\n\nThe ability to reach large audiences quickly has made social media an essential tool for political communication. Politicians use platforms like Twitter and Facebook to share their messages, engage with supporters, and respond to critics. Social media also enables grassroots movements to organize and mobilize supporters, giving voice to marginalized groups.\n\nHowever, social media in politics also presents challenges. The spread of misinformation and disinformation can influence public opinion and undermine trust in democratic processes. Echo chambers, where people are only exposed to views that align with their own, can polarize society and hinder constructive dialogue.\n\nRegulating social media in political contexts is a complex issue. Balancing free speech with the need to prevent misinformation and protect democratic processes requires careful consideration. As social media continues to shape political discourse, finding ways to promote responsible use and ensure transparency will be essential.',
    questions: [
      {
        id: 1,
        type: 'Multiple Choice',
        question: 'What is one challenge of social media in politics?',
        options: ['Increased transparency', 'Spread of misinformation', 'Reduced polarization', 'Enhanced dialogue'],
        answer: 'Spread of misinformation',
        explanation: 'The passage mentions misinformation as a challenge.'
      },
      {
        id: 2,
        type: 'True/False/Not Given',
        question: 'Social media has no impact on political campaigns.',
        answer: 'False',
        explanation: 'Social media has played significant roles in political campaigns.'
      },
      {
        id: 3,
        type: 'Sentence Completion',
        question: '______ chambers can polarize society by limiting exposure to diverse views.',
        answer: 'Echo',
        explanation: 'Echo chambers polarize society by limiting exposure to diverse views.'
      }
    ]
  },
  {
    id: 34,
    title: 'Advances in Renewable Energy Technology',
    topic: 'Technology',
    difficulty: 'Hard',
    wordCount: 470,
    passage: 'Renewable energy technology is advancing rapidly, making clean energy more accessible and affordable. Solar photovoltaic (PV) technology has seen significant improvements in efficiency and cost reduction. New materials and manufacturing processes have made solar panels more efficient at converting sunlight into electricity.\n\nWind energy technology has also advanced, with larger and more efficient turbines being developed. Offshore wind farms are becoming more common, taking advantage of stronger and more consistent winds at sea. Floating wind turbines, which can be deployed in deeper waters, are expanding the potential for offshore wind energy.\n\nEnergy storage technology is another area of innovation. Lithium-ion batteries, already widely used in electric vehicles, are becoming more affordable and efficient for grid-scale energy storage. New battery technologies, such as solid-state batteries, promise even greater energy density and safety.\n\nThe integration of renewable energy into existing power grids is also improving. Smart grid technology allows for better management of energy supply and demand, enabling more efficient use of renewable energy. Demand response programs, which adjust energy consumption based on supply, help balance the grid and reduce reliance on fossil fuels.\n\nThese advancements are making renewable energy an increasingly viable alternative to traditional energy sources. As technology continues to improve, the transition to a sustainable energy future becomes more achievable.',
    questions: [
      {
        id: 1,
        type: 'Multiple Choice',
        question: 'What type of batteries are used in electric vehicles?',
        options: ['Lead-acid batteries', 'Lithium-ion batteries', 'Nickel-cadmium batteries', 'Zinc-carbon batteries'],
        answer: 'Lithium-ion batteries',
        explanation: 'Lithium-ion batteries are widely used in electric vehicles.'
      },
      {
        id: 2,
        type: 'True/False/Not Given',
        question: 'Renewable energy technology is not improving.',
        answer: 'False',
        explanation: 'The passage states renewable energy technology is advancing rapidly.'
      },
      {
        id: 3,
        type: 'Sentence Completion',
        question: '______ wind turbines can be deployed in deeper waters.',
        answer: 'Floating',
        explanation: 'Floating wind turbines can be deployed in deeper waters.'
      }
    ]
  },
  {
    id: 35,
    title: 'The Psychology of Motivation',
    topic: 'Society',
    difficulty: 'Hard',
    wordCount: 480,
    passage: 'Motivation is the driving force behind human behavior. Understanding what motivates people can help individuals achieve their goals and organizations improve productivity. Psychologists have identified several theories of motivation, each offering insights into what drives human action.\n\nMaslow\'s hierarchy of needs suggests that people are motivated by a hierarchy of needs, from basic physiological needs to self-actualization. Herzberg\'s two-factor theory distinguishes between hygiene factors, which prevent dissatisfaction, and motivators, which lead to satisfaction and motivation. Self-determination theory emphasizes the importance of autonomy, competence, and relatedness in fostering intrinsic motivation.\n\nIntrinsic motivation, which comes from within, is often more powerful and sustainable than extrinsic motivation, which comes from external rewards. When people are intrinsically motivated, they engage in activities because they find them enjoyable or meaningful, rather than for external rewards.\n\nMotivation can be influenced by various factors, including goal setting, feedback, and the work environment. Setting specific, challenging goals can increase motivation, while providing regular feedback helps individuals track their progress. A supportive work environment that values employees and provides opportunities for growth can also enhance motivation.\n\nUnderstanding motivation is essential for personal growth and organizational success. By fostering a motivating environment and aligning goals with personal values, individuals and organizations can achieve greater success and satisfaction.',
    questions: [
      {
        id: 1,
        type: 'Multiple Choice',
        question: 'Which theory emphasizes autonomy, competence, and relatedness?',
        options: ['Maslow\'s hierarchy', 'Herzberg\'s two-factor theory', 'Self-determination theory', 'Expectancy theory'],
        answer: 'Self-determination theory',
        explanation: 'Self-determination theory emphasizes autonomy, competence, and relatedness.'
      },
      {
        id: 2,
        type: 'True/False/Not Given',
        question: 'Extrinsic motivation is always more powerful than intrinsic motivation.',
        answer: 'False',
        explanation: 'The passage states intrinsic motivation is often more powerful.'
      },
      {
        id: 3,
        type: 'Sentence Completion',
        question: 'Setting specific, ______ goals can increase motivation.',
        answer: 'challenging',
        explanation: 'Setting specific, challenging goals can increase motivation.'
      }
    ]
  },
  {
    id: 36,
    title: 'The Impact of Climate Change on Wildlife',
    topic: 'Environment',
    difficulty: 'Medium',
    wordCount: 420,
    passage: 'Climate change is having a profound impact on wildlife around the world. Rising temperatures, changing precipitation patterns, and extreme weather events are disrupting ecosystems and threatening species survival. Many species are struggling to adapt to these rapid changes.\n\nPolar bears are among the most iconic victims of climate change. As sea ice melts due to rising temperatures, polar bears lose their hunting grounds and struggle to find food. Similarly, coral reefs are bleaching and dying as ocean temperatures rise, affecting the entire marine ecosystem.\n\nSpecies are also shifting their ranges in response to climate change, moving to cooler areas. However, habitat fragmentation and human development often prevent species from migrating successfully. This can lead to population declines and even extinction.\n\nConservation efforts are crucial for protecting wildlife from the impacts of climate change. Protecting and restoring habitats, creating wildlife corridors, and reducing greenhouse gas emissions are essential strategies. Additionally, captive breeding programs and assisted migration may be necessary for species that cannot adapt on their own.\n\nAddressing climate change requires global cooperation and immediate action. By reducing our carbon footprint and protecting biodiversity, we can help ensure the survival of wildlife for future generations.',
    questions: [
      {
        id: 1,
        type: 'Multiple Choice',
        question: 'What is threatening polar bears?',
        options: ['Increased sea ice', 'Melting sea ice', 'More hunting grounds', 'Cooler temperatures'],
        answer: 'Melting sea ice',
        explanation: 'Melting sea ice threatens polar bears by reducing their hunting grounds.'
      },
      {
        id: 2,
        type: 'True/False/Not Given',
        question: 'Climate change has no impact on marine ecosystems.',
        answer: 'False',
        explanation: 'Coral reef bleaching affects the entire marine ecosystem.'
      },
      {
        id: 3,
        type: 'Sentence Completion',
        question: '______ corridors help species migrate in response to climate change.',
        answer: 'Wildlife',
        explanation: 'Wildlife corridors help species migrate.'
      }
    ]
  },
  {
    id: 37,
    title: 'The Benefits of Bilingualism',
    topic: 'Education',
    difficulty: 'Easy',
    wordCount: 360,
    passage: 'Bilingualism, the ability to speak two languages fluently, offers numerous cognitive, social, and cultural benefits. Research shows that bilingual individuals often have better cognitive flexibility, problem-solving skills, and multitasking abilities. They also tend to have better memory and attention control.\n\nLearning a second language at a young age can enhance brain development and improve academic performance. Bilingual students often perform better in reading, writing, and mathematics. They also have a deeper understanding of language structure and can apply these skills to learning additional languages.\n\nBilingualism also promotes cultural awareness and empathy. Being able to communicate in multiple languages allows individuals to connect with people from different cultures and understand diverse perspectives. This can enhance social skills and promote global citizenship.\n\nIn today\'s interconnected world, bilingualism is becoming increasingly valuable. It can improve career opportunities, as many employers seek employees who can communicate with international clients and colleagues. By embracing bilingualism, individuals can enhance their personal and professional lives while contributing to a more connected and understanding world.',
    questions: [
      {
        id: 1,
        type: 'Multiple Choice',
        question: 'What is one cognitive benefit of bilingualism?',
        options: ['Reduced memory', 'Poor attention control', 'Better cognitive flexibility', 'Decreased problem-solving skills'],
        answer: 'Better cognitive flexibility',
        explanation: 'Bilingual individuals have better cognitive flexibility.'
      },
      {
        id: 2,
        type: 'True/False/Not Given',
        question: 'Bilingualism has no benefits for career opportunities.',
        answer: 'False',
        explanation: 'Bilingualism improves career opportunities.'
      },
      {
        id: 3,
        type: 'Sentence Completion',
        question: 'Bilingualism promotes cultural awareness and ______.',
        answer: 'empathy',
        explanation: 'Bilingualism promotes cultural awareness and empathy.'
      }
    ]
  },
  {
    id: 38,
    title: 'The History of Medicine',
    topic: 'Health',
    difficulty: 'Medium',
    wordCount: 440,
    passage: 'The history of medicine is a fascinating journey of discovery and innovation. From ancient healing practices to modern medical technology, medicine has evolved significantly over time. Early civilizations used herbs, plants, and rituals to treat illness, while modern medicine relies on scientific research and evidence-based treatments.\n\nThe ancient Greeks made significant contributions to medicine, with Hippocrates often referred to as the "father of medicine." He emphasized the importance of observation and clinical practice, laying the foundation for modern medical ethics. The development of the scientific method in the Renaissance led to significant advancements in medical understanding.\n\nThe 19th century brought revolutionary changes with the discovery of anesthesia, which made surgery safer and more comfortable. The germ theory of disease, proposed by Louis Pasteur and Robert Koch, transformed medicine by identifying the causes of infectious diseases and leading to the development of vaccines and antibiotics.\n\nToday, medicine continues to advance with innovations in genetics, immunology, and medical technology. Precision medicine, personalized treatments, and telemedicine are transforming healthcare delivery. As our understanding of the human body and disease continues to grow, the future of medicine looks promising, with the potential to improve health outcomes for people worldwide.',
    questions: [
      {
        id: 1,
        type: 'Multiple Choice',
        question: 'Who is known as the "father of medicine"?',
        options: ['Louis Pasteur', 'Hippocrates', 'Robert Koch', 'Galileo Galilei'],
        answer: 'Hippocrates',
        explanation: 'Hippocrates is referred to as the father of medicine.'
      },
      {
        id: 2,
        type: 'True/False/Not Given',
        question: 'Anesthesia was discovered in the 20th century.',
        answer: 'False',
        explanation: 'Anesthesia was discovered in the 19th century.'
      },
      {
        id: 3,
        type: 'Sentence Completion',
        question: 'The ______ theory of disease transformed medicine by identifying causes of infectious diseases.',
        answer: 'germ',
        explanation: 'The germ theory of disease transformed medicine.'
      }
    ]
  },
  {
    id: 39,
    title: 'Social Networks and Mental Health',
    topic: 'Society',
    difficulty: 'Hard',
    wordCount: 460,
    passage: 'Social networks have become an integral part of modern life, but their impact on mental health is complex. While social media can provide social support and connection, excessive use has been linked to various mental health issues, including anxiety, depression, and low self-esteem.\n\nOne of the main concerns is social comparison. Users often compare their lives to others\' highlight reels on social media, leading to feelings of inadequacy and envy. Cyberbullying is another significant issue, with online harassment affecting mental health and well-being.\n\nHowever, social networks can also have positive effects on mental health. They can provide a sense of community and belonging, especially for marginalized groups. Social media can also be a platform for raising awareness about mental health issues and connecting people with resources and support.\n\nFinding a healthy balance is essential. Setting boundaries on social media use, curating one\'s feed to include positive content, and prioritizing real-life connections can help mitigate the negative effects. Additionally, being mindful of how social media makes one feel and taking breaks when needed can promote better mental health.\n\nAs social media continues to evolve, understanding its impact on mental health becomes increasingly important. By using social networks mindfully and responsibly, individuals can enjoy the benefits while protecting their mental well-being.',
    questions: [
      {
        id: 1,
        type: 'Multiple Choice',
        question: 'What is one negative effect of social media on mental health?',
        options: ['Increased self-esteem', 'Social comparison leading to envy', 'Stronger real-life connections', 'Reduced anxiety'],
        answer: 'Social comparison leading to envy',
        explanation: 'Social comparison can lead to feelings of inadequacy and envy.'
      },
      {
        id: 2,
        type: 'True/False/Not Given',
        question: 'Social media only has negative effects on mental health.',
        answer: 'False',
        explanation: 'The passage mentions positive effects like social support and community.'
      },
      {
        id: 3,
        type: 'Sentence Completion',
        question: '______ one\'s social media feed to include positive content can help mental health.',
        answer: 'Curating',
        explanation: 'Curating one\'s feed can help mitigate negative effects.'
      }
    ]
  },
  {
    id: 40,
    title: 'The Future of Artificial Intelligence',
    topic: 'Technology',
    difficulty: 'Hard',
    wordCount: 490,
    passage: 'Artificial Intelligence (AI) is rapidly transforming various aspects of society, and its future holds both promise and challenges. Advances in machine learning, deep learning, and natural language processing are enabling AI systems to perform increasingly complex tasks, from autonomous vehicles to personalized healthcare.\n\nOne area of significant development is generative AI, which can create original content such as text, images, and music. Tools like ChatGPT and DALL-E have demonstrated the capabilities of generative AI, opening up new possibilities in creative fields, education, and business.\n\nAI is also transforming healthcare, with applications in diagnosis, drug discovery, and personalized medicine. Machine learning algorithms can analyze medical data to identify patterns and predict outcomes, helping doctors make more informed decisions. In education, AI-powered tools can provide personalized learning experiences, adapting to individual student needs.\n\nHowever, the rapid advancement of AI also raises important ethical and societal questions. Issues such as bias in AI algorithms, job displacement, and privacy concerns need to be addressed to ensure that AI benefits all of humanity. Additionally, the development of artificial general intelligence (AGI), a system that can understand or learn any intellectual task that a human can, presents both opportunities and risks.\n\nAs AI continues to evolve, it is essential to develop ethical frameworks and regulations that guide its development and use. By balancing innovation with responsibility, we can harness the power of AI to improve lives while mitigating potential risks.',
    questions: [
      {
        id: 1,
        type: 'Multiple Choice',
        question: 'What is generative AI capable of?',
        options: ['Only analyzing data', 'Creating original content', 'Replacing all human workers', 'Ignoring ethical concerns'],
        answer: 'Creating original content',
        explanation: 'Generative AI can create original content like text, images, and music.'
      },
      {
        id: 2,
        type: 'True/False/Not Given',
        question: 'AI has no applications in healthcare.',
        answer: 'False',
        explanation: 'AI is transforming healthcare with applications in diagnosis and drug discovery.'
      },
      {
        id: 3,
        type: 'Sentence Completion',
        question: '______ in AI algorithms is an important ethical concern.',
        answer: 'Bias',
        explanation: 'Bias in AI algorithms is mentioned as an ethical concern.'
      }
    ]
  },
  {
    id: 41,
    title: 'The Importance of Biodiversity for Ecosystems',
    topic: 'Environment',
    difficulty: 'Medium',
    wordCount: 410,
    passage: 'Biodiversity is essential for maintaining healthy ecosystems and supporting life on Earth. Ecosystems with high biodiversity are more resilient to environmental changes, better able to recover from disturbances, and more productive.\n\nEach species in an ecosystem plays a unique role, contributing to processes like nutrient cycling, pollination, and pest control. When species are lost, ecosystem functions can be disrupted, leading to declines in ecosystem services that humans depend on, such as clean air, water, and food production.\n\nBiodiversity also provides economic benefits through industries like agriculture, pharmaceuticals, and ecotourism. Many crops depend on pollinators like bees and butterflies, while pharmaceutical companies often derive medicines from plants and animals found in diverse ecosystems.\n\nUnfortunately, human activities are causing a rapid decline in biodiversity. Habitat destruction, pollution, overfishing, and climate change are threatening species at an unprecedented rate. Conservation efforts are crucial for protecting biodiversity and ensuring the sustainability of ecosystems.\n\nProtecting biodiversity is not just about saving individual species; it\'s about preserving the complex web of life that sustains our planet. By conserving biodiversity, we can ensure that ecosystems continue to provide the services we need for survival and well-being.',
    questions: [
      {
        id: 1,
        type: 'Multiple Choice',
        question: 'What is one benefit of high biodiversity?',
        options: ['Reduced ecosystem resilience', 'Disrupted nutrient cycling', 'Better ability to recover from disturbances', 'Lower productivity'],
        answer: 'Better ability to recover from disturbances',
        explanation: 'High biodiversity makes ecosystems more resilient.'
      },
      {
        id: 2,
        type: 'True/False/Not Given',
        question: 'Biodiversity has no economic benefits.',
        answer: 'False',
        explanation: 'Biodiversity provides economic benefits through agriculture, pharmaceuticals, and ecotourism.'
      },
      {
        id: 3,
        type: 'Sentence Completion',
        question: 'Many crops depend on ______ like bees and butterflies.',
        answer: 'pollinators',
        explanation: 'Crops depend on pollinators for reproduction.'
      }
    ]
  },
  {
    id: 42,
    title: 'The Psychology of Leadership',
    topic: 'Work',
    difficulty: 'Hard',
    wordCount: 470,
    passage: 'Leadership is a complex psychological phenomenon that plays a crucial role in organizations and society. Effective leaders possess a combination of traits, skills, and behaviors that inspire and guide others toward achieving common goals.\n\nTrait theories of leadership suggest that certain inherent characteristics, such as intelligence, confidence, and charisma, contribute to effective leadership. Behavioral theories focus on what leaders do, identifying different leadership styles like autocratic, democratic, and laissez-faire.\n\nTransformational leadership, which emphasizes inspiration and vision, has been shown to be particularly effective in motivating teams and driving innovation. Transformational leaders inspire their followers to exceed their own self-interests for the good of the organization, fostering commitment and loyalty.\n\nEmotional intelligence is also a key component of effective leadership. Leaders with high emotional intelligence can understand and manage their own emotions and those of others, enabling them to build strong relationships and navigate challenging situations.\n\nLeadership is not just about position or authority; it\'s about influence and the ability to inspire others. By developing leadership skills and understanding the psychological aspects of leadership, individuals can become more effective leaders in their personal and professional lives.',
    questions: [
      {
        id: 1,
        type: 'Multiple Choice',
        question: 'What type of leadership emphasizes inspiration and vision?',
        options: ['Autocratic leadership', 'Transformational leadership', 'Laissez-faire leadership', 'Transactional leadership'],
        answer: 'Transformational leadership',
        explanation: 'Transformational leadership emphasizes inspiration and vision.'
      },
      {
        id: 2,
        type: 'True/False/Not Given',
        question: 'Leadership is only about position and authority.',
        answer: 'False',
        explanation: 'Leadership is about influence, not just position.'
      },
      {
        id: 3,
        type: 'Sentence Completion',
        question: '______ intelligence is a key component of effective leadership.',
        answer: 'Emotional',
        explanation: 'Emotional intelligence is key to effective leadership.'
      }
    ]
  },
  {
    id: 43,
    title: 'The Impact of Technology on Education',
    topic: 'Education',
    difficulty: 'Medium',
    wordCount: 430,
    passage: 'Technology has transformed education in profound ways, changing how students learn and teachers teach. From online courses to interactive learning tools, technology has made education more accessible, engaging, and personalized.\n\nOnline learning platforms have expanded access to education, allowing students to learn from anywhere in the world. Massive Open Online Courses (MOOCs) provide free or low-cost access to courses from top universities, democratizing education and breaking down barriers to learning.\n\nInteractive technologies like virtual reality (VR) and augmented reality (AR) are enhancing learning experiences by making abstract concepts more concrete. VR can transport students to historical events or distant places, while AR overlays digital information onto the real world, creating immersive learning environments.\n\nEducational apps and software are also transforming teaching and learning. Adaptive learning platforms use algorithms to personalize instruction, adjusting to each student\'s needs and pace. This allows students to receive targeted support and challenges, improving learning outcomes.\n\nWhile technology offers many benefits, it also presents challenges. Digital divide, ensuring equitable access to technology, and maintaining student engagement in online environments are important considerations. By leveraging technology thoughtfully, educators can enhance teaching and create more effective learning experiences for all students.',
    questions: [
      {
        id: 1,
        type: 'Multiple Choice',
        question: 'What does MOOC stand for?',
        options: ['Massive Open Online Courses', 'Modern Online Learning Centers', 'Mobile Online Education Courses', 'Multi-Objective Online Classes'],
        answer: 'Massive Open Online Courses',
        explanation: 'MOOC stands for Massive Open Online Courses.'
      },
      {
        id: 2,
        type: 'True/False/Not Given',
        question: 'Technology has made education less accessible.',
        answer: 'False',
        explanation: 'Technology has made education more accessible.'
      },
      {
        id: 3,
        type: 'Sentence Completion',
        question: '______ reality can transport students to historical events or distant places.',
        answer: 'Virtual',
        explanation: 'Virtual reality enhances learning by creating immersive experiences.'
      }
    ]
  },
  {
    id: 44,
    title: 'Sustainable Agriculture Practices',
    topic: 'Environment',
    difficulty: 'Hard',
    wordCount: 480,
    passage: 'Sustainable agriculture is essential for meeting the world\'s food needs while protecting the environment. Traditional farming practices often deplete soil fertility, pollute water sources, and contribute to climate change. Sustainable agriculture aims to address these issues by adopting practices that maintain ecological balance.\n\nKey sustainable agriculture practices include crop rotation, which helps maintain soil health and prevent pest infestations. Cover cropping, where crops are grown to cover the soil between main crops, helps prevent erosion and improve soil fertility. Agroforestry, which integrates trees with crops or livestock, provides multiple benefits including carbon sequestration and biodiversity conservation.\n\nOrganic farming, which avoids synthetic fertilizers and pesticides, is another important sustainable practice. It promotes soil health, protects biodiversity, and reduces environmental pollution. Precision agriculture, using technology like GPS and sensors, allows farmers to apply resources more efficiently, reducing waste and environmental impact.\n\nSustainable agriculture also emphasizes water conservation through practices like drip irrigation and rainwater harvesting. Additionally, integrated pest management (IPM) combines biological, cultural, and chemical control methods to manage pests sustainably.\n\nBy adopting sustainable agriculture practices, farmers can produce food while protecting natural resources. This approach ensures that future generations will also have access to the resources they need to thrive.',
    questions: [
      {
        id: 1,
        type: 'Multiple Choice',
        question: 'What is one sustainable agriculture practice mentioned?',
        options: ['Soil depletion', 'Crop rotation', 'Synthetic fertilizers', 'Water pollution'],
        answer: 'Crop rotation',
        explanation: 'Crop rotation is a key sustainable agriculture practice.'
      },
      {
        id: 2,
        type: 'True/False/Not Given',
        question: 'Sustainable agriculture has no benefits for the environment.',
        answer: 'False',
        explanation: 'Sustainable agriculture protects the environment.'
      },
      {
        id: 3,
        type: 'Sentence Completion',
        question: '______ agriculture uses technology like GPS to apply resources efficiently.',
        answer: 'Precision',
        explanation: 'Precision agriculture uses technology for efficient resource application.'
      }
    ]
  },
  {
    id: 45,
    title: 'The Science of Happiness at Work',
    topic: 'Work',
    difficulty: 'Medium',
    wordCount: 400,
    passage: 'Happiness at work is essential for employee well-being and organizational success. Research shows that happy employees are more productive, creative, and engaged. They also have lower turnover rates and better physical and mental health.\n\nSeveral factors contribute to workplace happiness. Positive relationships with colleagues and supervisors create a supportive work environment. Opportunities for growth and development, including training and career advancement, help employees feel valued and motivated.\n\nWork-life balance is another important factor. Employees who can balance their work and personal lives are more satisfied and less stressed. Flexible work arrangements, such as remote work and flexible hours, can help employees achieve this balance.\n\nRecognition and appreciation also play a crucial role in workplace happiness. When employees feel recognized for their contributions, they are more motivated and engaged. Regular feedback and rewards, both monetary and non-monetary, can enhance employee satisfaction.\n\nCreating a happy workplace is not just good for employees; it\'s good for business. Happy employees contribute to a positive organizational culture, improve customer satisfaction, and drive business success. By prioritizing employee happiness, organizations can create a win-win situation for both employees and the company.',
    questions: [
      {
        id: 1,
        type: 'Multiple Choice',
        question: 'What is one benefit of happy employees?',
        options: ['Lower productivity', 'Higher turnover', 'Better mental health', 'Reduced creativity'],
        answer: 'Better mental health',
        explanation: 'Happy employees have better physical and mental health.'
      },
      {
        id: 2,
        type: 'True/False/Not Given',
        question: 'Work-life balance has no impact on workplace happiness.',
        answer: 'False',
        explanation: 'Work-life balance is an important factor in workplace happiness.'
      },
      {
        id: 3,
        type: 'Sentence Completion',
        question: '______ and appreciation play a crucial role in workplace happiness.',
        answer: 'Recognition',
        explanation: 'Recognition and appreciation enhance employee satisfaction.'
      }
    ]
  },
  {
    id: 46,
    title: 'The History of the Internet',
    topic: 'Technology',
    difficulty: 'Easy',
    wordCount: 370,
    passage: 'The internet is one of the most transformative inventions of the modern era. Its origins can be traced back to the 1960s when the United States Department of Defense developed ARPANET, a network designed to facilitate communication between research institutions.\n\nIn the 1980s, the development of the Transmission Control Protocol/Internet Protocol (TCP/IP) laid the foundation for the modern internet. This protocol suite allowed different networks to communicate with each other, creating a global network of networks.\n\nThe 1990s saw the rise of the World Wide Web, which made the internet accessible to the general public. Tim Berners-Lee invented the web browser and web server, making it easy for people to navigate and share information online. The introduction of graphical web browsers like Mosaic and Netscape popularized the web and led to an explosion in internet usage.\n\nToday, the internet is an integral part of daily life, connecting billions of people around the world. It has transformed communication, commerce, education, and entertainment. Social media, e-commerce, and online services have become essential tools for individuals and businesses alike.\n\nAs technology continues to evolve, the internet will likely become even more integrated into our lives, with advancements in areas like artificial intelligence, virtual reality, and the Internet of Things (IoT) shaping its future.',
    questions: [
      {
        id: 1,
        type: 'Multiple Choice',
        question: 'What was the predecessor to the internet?',
        options: ['World Wide Web', 'ARPANET', 'TCP/IP', 'Mosaic'],
        answer: 'ARPANET',
        explanation: 'ARPANET was the predecessor to the internet.'
      },
      {
        id: 2,
        type: 'True/False/Not Given',
        question: 'The World Wide Web was invented in the 1980s.',
        answer: 'False',
        explanation: 'The World Wide Web was invented in the 1990s.'
      },
      {
        id: 3,
        type: 'Sentence Completion',
        question: '______ laid the foundation for the modern internet.',
        answer: 'TCP/IP',
        explanation: 'TCP/IP laid the foundation for the modern internet.'
      }
    ]
  },
  {
    id: 47,
    title: 'Climate Change and Human Health',
    topic: 'Health',
    difficulty: 'Hard',
    wordCount: 460,
    passage: 'Climate change poses significant risks to human health. Rising temperatures, extreme weather events, and changing disease patterns are affecting health outcomes worldwide. Vulnerable populations, including children, the elderly, and low-income communities, are particularly at risk.\n\nHeat-related illnesses are becoming more common as temperatures rise. Heatwaves can cause heat exhaustion, heatstroke, and even death. Additionally, higher temperatures can worsen air quality, increasing respiratory problems and cardiovascular diseases.\n\nClimate change is also affecting the spread of infectious diseases. Warmer temperatures allow disease-carrying insects like mosquitoes to expand their ranges, increasing the risk of diseases like malaria, dengue fever, and Zika virus. Changes in precipitation patterns can also affect water quality, leading to an increase in waterborne illnesses.\n\nExtreme weather events such as hurricanes, floods, and wildfires are becoming more frequent and intense. These events can cause injuries, displacement, and mental health issues. They can also disrupt healthcare systems, making it difficult for people to access medical care.\n\nAddressing climate change is essential for protecting human health. Reducing greenhouse gas emissions, improving public health infrastructure, and developing early warning systems can help mitigate the health impacts of climate change. By taking action now, we can protect current and future generations from the health risks of a changing climate.',
    questions: [
      {
        id: 1,
        type: 'Multiple Choice',
        question: 'Which populations are particularly vulnerable to climate change?',
        options: ['Young adults', 'Children and the elderly', 'High-income communities', 'Healthcare workers'],
        answer: 'Children and the elderly',
        explanation: 'Vulnerable populations include children, the elderly, and low-income communities.'
      },
      {
        id: 2,
        type: 'True/False/Not Given',
        question: 'Climate change has no impact on infectious diseases.',
        answer: 'False',
        explanation: 'Climate change affects the spread of infectious diseases.'
      },
      {
        id: 3,
        type: 'Sentence Completion',
        question: 'Higher temperatures can worsen ______ quality, increasing respiratory problems.',
        answer: 'air',
        explanation: 'Higher temperatures worsen air quality.'
      }
    ]
  },
  {
    id: 48,
    title: 'Cultural Diversity in the Workplace',
    topic: 'Work',
    difficulty: 'Medium',
    wordCount: 420,
    passage: 'Cultural diversity in the workplace refers to the presence of employees from different cultural backgrounds, including differences in race, ethnicity, nationality, religion, and language. Embracing cultural diversity has numerous benefits for organizations and employees.\n\nDiverse teams are often more creative and innovative, as they bring different perspectives and approaches to problem-solving. They can also better understand and serve diverse customer bases, improving customer satisfaction and business success.\n\nCultural diversity also promotes learning and personal growth. Working with colleagues from different backgrounds helps employees develop cultural competence, empathy, and global awareness. This can enhance teamwork and create a more inclusive work environment.\n\nHowever, managing cultural diversity also presents challenges. Communication barriers, cultural misunderstandings, and unconscious bias can affect team dynamics. Organizations need to provide training and support to help employees navigate these challenges and create a truly inclusive workplace.\n\nBy fostering cultural diversity and inclusion, organizations can create a more productive, innovative, and harmonious work environment. This not only benefits employees but also contributes to the organization\'s overall success and competitiveness in a global marketplace.',
    questions: [
      {
        id: 1,
        type: 'Multiple Choice',
        question: 'What is one benefit of diverse teams?',
        options: ['Reduced creativity', 'Better problem-solving', 'Communication barriers', 'Unconscious bias'],
        answer: 'Better problem-solving',
        explanation: 'Diverse teams bring different perspectives to problem-solving.'
      },
      {
        id: 2,
        type: 'True/False/Not Given',
        question: 'Cultural diversity has no challenges in the workplace.',
        answer: 'False',
        explanation: 'The passage mentions challenges like communication barriers.'
      },
      {
        id: 3,
        type: 'Sentence Completion',
        question: 'Working with diverse colleagues helps develop cultural ______ and empathy.',
        answer: 'competence',
        explanation: 'Working with diverse colleagues develops cultural competence.'
      }
    ]
  },
  {
    id: 49,
    title: 'The Future of Work and Automation',
    topic: 'Work',
    difficulty: 'Hard',
    wordCount: 480,
    passage: 'Automation and artificial intelligence are transforming the future of work. While some jobs may be replaced by machines, new opportunities are emerging that require human skills and creativity. Understanding these changes is essential for preparing the workforce of tomorrow.\n\nAutomation is already affecting many industries, from manufacturing to customer service. Routine, repetitive tasks are most at risk of being automated, while jobs requiring creativity, emotional intelligence, and complex problem-solving are more resilient.\n\nThe rise of automation is creating new roles that didn\'t exist a decade ago. Jobs in data analysis, artificial intelligence development, and digital marketing are growing rapidly. Additionally, jobs that involve human interaction, such as healthcare, education, and social work, are likely to remain in demand.\n\nPreparing for the future of work requires adapting to new technologies and developing skills that complement automation. Lifelong learning, upskilling, and reskilling will be essential for staying competitive in the job market. Soft skills like communication, collaboration, and adaptability will become increasingly important.\n\nWhile automation presents challenges, it also offers opportunities for increased productivity, improved safety, and new forms of work. By embracing change and investing in human capital, societies can create a future of work that benefits everyone.',
    questions: [
      {
        id: 1,
        type: 'Multiple Choice',
        question: 'What type of jobs are most at risk of automation?',
        options: ['Creative jobs', 'Routine, repetitive tasks', 'Healthcare jobs', 'Education jobs'],
        answer: 'Routine, repetitive tasks',
        explanation: 'Routine, repetitive tasks are most at risk of automation.'
      },
      {
        id: 2,
        type: 'True/False/Not Given',
        question: 'All jobs will be replaced by automation.',
        answer: 'False',
        explanation: 'Jobs requiring human skills are more resilient.'
      },
      {
        id: 3,
        type: 'Sentence Completion',
        question: '______ learning and upskilling will be essential for future work.',
        answer: 'Lifelong',
        explanation: 'Lifelong learning is essential for adapting to future work.'
      }
    ]
  },
  {
    id: 50,
    title: 'The Importance of Mental Health Awareness',
    topic: 'Health',
    difficulty: 'Easy',
    wordCount: 350,
    passage: 'Mental health awareness is essential for promoting well-being and reducing stigma. Mental health affects every aspect of our lives, from our relationships to our work performance. Unfortunately, mental health issues are often misunderstood and stigmatized, preventing people from seeking help.\n\nRaising awareness about mental health helps break down barriers and encourages people to seek support when they need it. It also helps create a more supportive environment where people feel comfortable talking about their mental health struggles.\n\nMental health awareness campaigns educate the public about common mental health conditions like anxiety, depression, and bipolar disorder. They also provide information about available resources and support services, making it easier for people to access help.\n\nEmployers also play a crucial role in promoting mental health awareness in the workplace. Providing mental health support, flexible work arrangements, and training for managers can help create a mentally healthy work environment.\n\nBy prioritizing mental health awareness, we can create a society that values mental well-being as much as physical health. This not only benefits individuals but also strengthens communities and improves overall quality of life.',
    questions: [
      {
        id: 1,
        type: 'Multiple Choice',
        question: 'What is one benefit of mental health awareness?',
        options: ['Increased stigma', 'Preventing people from seeking help', 'Breaking down barriers', 'Misunderstanding mental health'],
        answer: 'Breaking down barriers',
        explanation: 'Mental health awareness helps break down barriers.'
      },
      {
        id: 2,
        type: 'True/False/Not Given',
        question: 'Mental health has no impact on work performance.',
        answer: 'False',
        explanation: 'Mental health affects work performance.'
      },
      {
        id: 3,
        type: 'Sentence Completion',
        question: '______ play a crucial role in promoting mental health awareness in the workplace.',
        answer: 'Employers',
        explanation: 'Employers play a crucial role in workplace mental health.'
      }
    ]
  }
];

export default mockReadingPassages;
