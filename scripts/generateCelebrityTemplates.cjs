const fs = require('fs');

const celebrityTopics = [
  {
    id: 101,
    title: '谷爱凌 - 坚持与突破',
    type: 'agree/disagree',
    topic: 'Success comes from hard work and perseverance. To what extent do you agree with this statement?',
    speaker: '谷爱凌',
    speakerTitle: '自由式滑雪奥运冠军',
    style: '励志进取型',
    styleNote: '谷爱凌的发言充满正能量，强调努力、坚持和突破自我的重要性。她的风格特点是：1）用个人经历举例；2）强调热爱与激情；3）鼓励年轻人勇敢尝试；4）展现自信与谦逊的平衡。',
    structure: {
      introduction: '[话题]. I completely agree with this view, as demonstrated by the inspiring journey of [名人].',
      body1: 'Firstly, [名人] exemplifies the power of hard work through [具体事例]. For example, [细节]. This shows that [结论].',
      body2: 'Secondly, [名人] emphasizes the importance of [价值观]. She once said, "[名言]". This demonstrates that [道理].',
      conclusion: 'In conclusion, [名人]\'s story proves that [总结]. Her journey inspires us to [号召].'
    },
    fullParagraphs: {
      introduction: 'Success comes from hard work and perseverance. I completely agree with this view, as demonstrated by the inspiring journey of Eileen Gu (谷爱凌), the freestyle skiing Olympic champion.',
      body1: 'Firstly, Eileen Gu exemplifies the power of hard work through her rigorous training regime. From a young age, she dedicated countless hours to perfecting her skills, often training in harsh weather conditions. For example, she once trained for 8 hours a day during the winter, even when temperatures dropped below -20 degrees Celsius. This shows that extraordinary achievements require extraordinary effort, and there are no shortcuts to success.',
      body2: 'Secondly, Eileen Gu emphasizes the importance of passion and self-belief. She once said, "I do sports because I love it, not because I want to win." This demonstrates that true success comes from genuine passion rather than external pressure. Her ability to stay focused on her love for skiing, even during challenging times, has been key to her achievements.',
      conclusion: 'In conclusion, Eileen Gu\'s story proves that success is the result of hard work, perseverance, and passion. Her journey inspires us to pursue our dreams with dedication and courage, knowing that every effort brings us closer to our goals.'
    },
    vocabulary: ['perseverance', 'exemplify', 'rigorous', 'dedication', 'passion', 'self-belief', 'inspire']
  },
  {
    id: 102,
    title: '谷爱凌 - 跨界与多元化',
    type: 'advantages/disadvantages',
    topic: 'Discuss the advantages of pursuing multiple interests and talents.',
    speaker: '谷爱凌',
    speakerTitle: '自由式滑雪奥运冠军',
    style: '多元发展型',
    styleNote: '谷爱凌作为学霸运动员，展现了跨界发展的优势。她的风格特点是：1）强调全面发展；2）展示多领域成就；3）鼓励探索不同可能性；4）体现东西方文化融合。',
    structure: {
      introduction: '[话题] has become increasingly relevant in today\'s fast-changing world.',
      body1: 'One major advantage is [好处1]. As demonstrated by [名人], [例子]. This contributes to [结果].',
      body2: 'Another benefit is [好处2]. [名人]\'s experience shows that [道理]. For instance, [事例].',
      conclusion: 'Overall, [总结好处]. [名人]\'s journey shows that [启示].'
    },
    fullParagraphs: {
      introduction: 'Pursuing multiple interests and talents has become increasingly relevant in today\'s fast-changing world, as exemplified by Eileen Gu.',
      body1: 'One major advantage is the development of diverse skills and perspectives. Eileen Gu is not only an Olympic champion but also an accomplished pianist and a top student. This diverse background has helped her approach challenges from different angles and adapt quickly to new situations. For example, her musical training has enhanced her sense of rhythm and precision, which translates to better performance on the slopes.',
      body2: 'Another benefit is the ability to find balance and avoid burnout. By pursuing multiple passions, individuals can switch between activities and maintain enthusiasm. Eileen Gu has spoken about how playing the piano helps her relax and recharge after intense training sessions. This cross-training approach has contributed to her sustained success in both sports and academics.',
      conclusion: 'Overall, pursuing multiple interests fosters adaptability, creativity, and resilience. Eileen Gu\'s journey shows that embracing diverse talents can lead to greater fulfillment and success in all areas of life.'
    },
    vocabulary: ['diverse', 'perspectives', 'adapt', 'precision', 'resilience', 'fulfillment', 'embrace']
  },
  {
    id: 103,
    title: 'Gwynne Shotwell - 领导力与创新',
    type: 'discuss both views',
    topic: 'Some people believe leadership is about control, while others think it\'s about empowering others. Discuss both views and give your opinion.',
    speaker: 'Gwynne Shotwell',
    speakerTitle: 'SpaceX总裁',
    style: '务实领导型',
    styleNote: 'Gwynne Shotwell作为SpaceX的总裁，展现了强硬而务实的领导风格。她的特点是：1）结果导向；2）敢于冒险；3）强调团队合作；4）关注长远目标；5）在男性主导领域中展现自信。',
    structure: {
      introduction: 'There is a debate about [话题]. This essay will discuss both perspectives and draw insights from [名人]\'s leadership style.',
      body1: 'On one hand, [观点1] has merit. Supporters argue that [理由]. However, [名人]\'s approach shows [不同观点].',
      body2: 'On the other hand, [观点2] aligns with modern leadership principles. [名人] exemplifies this through [事例].',
      conclusion: 'In my opinion, [个人观点]. [名人]\'s success demonstrates that [总结].'
    },
    fullParagraphs: {
      introduction: 'There is a debate about whether leadership is about control or empowerment. This essay will discuss both perspectives and draw insights from Gwynne Shotwell, the President of SpaceX.',
      body1: 'On one hand, traditional views of leadership emphasize control and authority. Supporters argue that clear direction and decisive action are essential for achieving ambitious goals. However, Gwynne Shotwell\'s approach shows that control alone is not sufficient. While she maintains high standards and clear expectations, she also recognizes the importance of trusting her team.',
      body2: 'On the other hand, empowering others aligns with modern leadership principles. Gwynne Shotwell exemplifies this through her collaborative approach at SpaceX. She has built a culture where engineers and innovators are encouraged to take ownership and propose bold ideas. For example, she has spoken about giving her team autonomy to solve problems, which has led to breakthroughs like reusable rocket technology.',
      conclusion: 'In my opinion, effective leadership combines both structure and empowerment. Gwynne Shotwell\'s success demonstrates that the best leaders provide clear vision while trusting their team to execute. This balance creates a culture of innovation and accountability that drives extraordinary achievements.'
    },
    vocabulary: ['empower', 'collaborative', 'autonomy', 'breakthrough', 'accountability', 'execute', 'vision']
  },
  {
    id: 104,
    title: 'Gwynne Shotwell - 风险与机遇',
    type: 'problem/solution',
    topic: 'How can organizations embrace calculated risk-taking to drive innovation?',
    speaker: 'Gwynne Shotwell',
    speakerTitle: 'SpaceX总裁',
    style: '风险进取型',
    styleNote: 'Gwynne Shotwell以敢于承担风险著称，带领SpaceX实现多次突破。她的风格是：1）接受失败是成功的一部分；2）鼓励大胆尝试；3）数据驱动决策；4）快速迭代改进。',
    structure: {
      introduction: '[问题] is crucial for organizations aiming to innovate. Drawing from [名人]\'s experience, we can identify several strategies.',
      body1: 'One key approach is [策略1]. At [公司], [措施]. This allows [结果].',
      body2: 'Another strategy involves [策略2]. [名人] believes that [理念]. For example, [事例].',
      conclusion: 'In conclusion, [总结策略]. [名人]\'s leadership shows that [启示].'
    },
    fullParagraphs: {
      introduction: 'Embracing calculated risk-taking is crucial for organizations aiming to innovate, especially in rapidly evolving industries. Drawing from Gwynne Shotwell\'s experience at SpaceX, we can identify several effective strategies.',
      body1: 'One key approach is creating a culture that accepts failure as part of the learning process. At SpaceX, Shotwell has fostered an environment where employees are not punished for taking well-reasoned risks that don\'t succeed. This allows teams to experiment freely and learn from setbacks. For instance, the early failures of the Falcon 1 rocket were seen as valuable lessons rather than disasters, ultimately leading to the success of subsequent models.',
      body2: 'Another strategy involves balancing ambition with rigorous planning. Shotwell believes in setting audacious goals while maintaining meticulous attention to detail. For example, SpaceX\'s goal of colonizing Mars requires enormous risk, but the company mitigates this through incremental testing and data-driven decision-making. This combination of bold vision and careful execution has enabled SpaceX to achieve milestones once thought impossible.',
      conclusion: 'In conclusion, organizations can drive innovation by fostering a risk-tolerant culture and balancing ambition with planning. Gwynne Shotwell\'s leadership shows that calculated risk-taking, when combined with learning from failure and data-driven decision-making, can lead to transformative breakthroughs.'
    },
    vocabulary: ['calculated', 'innovate', 'mitigate', 'incremental', 'transformative', 'breakthrough', 'ambitious']
  },
  {
    id: 105,
    title: '黄仁勋 - 远见与技术创新',
    type: 'agree/disagree',
    topic: 'Technological innovation is driven more by vision than by incremental improvements. To what extent do you agree?',
    speaker: '黄仁勋 (Jensen Huang)',
    speakerTitle: 'NVIDIA创始人兼CEO',
    style: '远见前瞻型',
    styleNote: '黄仁勋以其远见卓识和对技术趋势的精准判断著称。他的演讲风格特点是：1）宏大愿景描绘；2）技术深度与通俗解释结合；3）强调计算的未来；4）激情澎湃的表达方式；5）使命感驱动。',
    structure: {
      introduction: '[话题]. I agree with this statement, as demonstrated by [名人]\'s leadership at [公司].',
      body1: 'Firstly, [名人] has shown that [远见]. For example, [事例]. This demonstrates [结论].',
      body2: 'Secondly, [公司]\'s success comes from [创新方式]. As [名人] said, "[名言]".',
      conclusion: 'In conclusion, [总结]. [名人]\'s approach proves that [道理].'
    },
    fullParagraphs: {
      introduction: 'Technological innovation is driven more by vision than by incremental improvements. I agree with this statement, as demonstrated by Jensen Huang\'s leadership at NVIDIA.',
      body1: 'Firstly, Jensen Huang has shown remarkable foresight in identifying emerging technology trends. Early in NVIDIA\'s history, he recognized the potential of GPU computing beyond just graphics, envisioning its applications in artificial intelligence and scientific computing. For example, NVIDIA invested heavily in CUDA, a parallel computing platform, when most competitors focused only on gaming graphics. This visionary bet positioned NVIDIA as a leader in AI hardware.',
      body2: 'Secondly, NVIDIA\'s success comes from transformative innovations rather than small improvements. As Jensen Huang said, "The most important thing is to see around corners." This philosophy has led to breakthrough products like the Tensor Core GPUs that power modern AI systems. By focusing on the big picture rather than incremental tweaks, NVIDIA has consistently stayed ahead of the competition.',
      conclusion: 'In conclusion, visionary leadership drives transformative technological innovation. Jensen Huang\'s approach proves that seeing the future and betting big on emerging trends creates more value than incremental improvements alone.'
    },
    vocabulary: ['foresight', 'transformative', 'breakthrough', 'visionary', 'emerging', 'innovation', 'envision']
  },
  {
    id: 106,
    title: '黄仁勋 - 计算的未来',
    type: 'advantages/disadvantages',
    topic: 'Discuss the advantages of accelerated computing in advancing scientific research.',
    speaker: '黄仁勋 (Jensen Huang)',
    speakerTitle: 'NVIDIA创始人兼CEO',
    style: '技术热情型',
    styleNote: '黄仁勋对计算技术充满热情，善于将复杂技术概念转化为令人兴奋的愿景。他的风格是：1）富有感染力的表达；2）使用生动比喻；3）强调计算的革命性影响；4）展示技术的人文价值。',
    structure: {
      introduction: '[话题] has become increasingly important in modern scientific research.',
      body1: 'One major advantage is [好处1]. As [公司] demonstrates, [例子]. This leads to [结果].',
      body2: 'Another benefit is [好处2]. [名人] explains that [道理]. For instance, [事例].',
      conclusion: 'Overall, [总结]. The future of [领域] depends on [关键因素].'
    },
    fullParagraphs: {
      introduction: 'Accelerated computing has become increasingly important in advancing modern scientific research, as championed by Jensen Huang and NVIDIA.',
      body1: 'One major advantage is the ability to process massive datasets and complex simulations at unprecedented speeds. NVIDIA\'s GPUs have enabled breakthroughs in fields like climate modeling, drug discovery, and astrophysics. For example, researchers can now simulate molecular interactions in real-time, significantly accelerating the development of new medications. This leads to faster scientific progress and solutions to global challenges.',
      body2: 'Another benefit is democratizing access to advanced computing resources. Jensen Huang explains that accelerated computing is no longer limited to supercomputing centers but is now accessible to researchers worldwide through cloud platforms. For instance, universities and small research teams can now run complex AI models that were previously only available to large corporations. This democratization fosters innovation and collaboration across borders.',
      conclusion: 'Overall, accelerated computing transforms scientific research by enabling faster discoveries and broader access. The future of scientific progress depends on continued advancements in computing technology and making these tools widely available to researchers everywhere.'
    },
    vocabulary: ['accelerated', 'simulations', 'democratizing', 'unprecedented', 'collaboration', 'innovation', 'transforms']
  },
  {
    id: 107,
    title: '谷爱凌 - 文化融合',
    type: 'discuss both views',
    topic: 'Some people think cultural diversity creates challenges, while others believe it enriches society. Discuss both views and give your opinion.',
    speaker: '谷爱凌',
    speakerTitle: '自由式滑雪奥运冠军',
    style: '文化桥梁型',
    styleNote: '谷爱凌作为中美混血运动员，展现了文化融合的独特视角。她的风格是：1）强调文化交流的价值；2）展示东西方文化的融合；3）倡导相互理解；4）以自身经历促进文化对话。',
    structure: {
      introduction: 'There is a debate about [话题]. [名人]\'s experience offers valuable insights into this issue.',
      body1: 'On one hand, [挑战观点]. Some argue that [理由]. However, [名人]\'s story shows [不同视角].',
      body2: 'On the other hand, [积极观点] has significant benefits. [名人] exemplifies this through [事例].',
      conclusion: 'In my opinion, [个人观点]. [名人]\'s journey demonstrates [启示].'
    },
    fullParagraphs: {
      introduction: 'There is a debate about whether cultural diversity creates challenges or enriches society. Eileen Gu\'s experience as a Chinese-American athlete offers valuable insights into this issue.',
      body1: 'On one hand, some argue that cultural diversity can create misunderstandings and conflicts. Differences in values, traditions, and communication styles can lead to tensions in workplaces and communities. However, Eileen Gu\'s story shows that these challenges can be overcome through openness and curiosity. She has spoken about how growing up in both cultures taught her to appreciate different perspectives.',
      body2: 'On the other hand, cultural diversity enriches society by fostering creativity and innovation. Eileen Gu exemplifies this through her unique perspective. She combines the discipline of Chinese training methods with the individualism of American sports culture, creating a unique approach that has led to her success. Her ability to bridge two cultures has made her a role model for young people worldwide.',
      conclusion: 'In my opinion, cultural diversity is a strength that enriches society when approached with openness and respect. Eileen Gu\'s journey demonstrates that embracing different cultures can lead to personal growth and contribute to global understanding.'
    },
    vocabulary: ['diversity', 'enrich', 'perspectives', 'bridging', 'embracing', 'appreciate', 'global']
  },
  {
    id: 108,
    title: 'Gwynne Shotwell - 女性领导力',
    type: 'problem/solution',
    topic: 'What can be done to promote more women in leadership positions in STEM fields?',
    speaker: 'Gwynne Shotwell',
    speakerTitle: 'SpaceX总裁',
    style: '女性赋权型',
    styleNote: 'Gwynne Shotwell作为航空航天领域的杰出女性领导者，倡导性别平等和女性赋权。她的风格是：1）以身作则；2）强调能力而非性别；3）支持女性职业发展；4）打破刻板印象。',
    structure: {
      introduction: '[问题] is a pressing issue that requires attention. Drawing from [名人]\'s experience, we can identify effective solutions.',
      body1: 'One approach is [策略1]. [名人] has advocated for [措施]. For example, [事例].',
      body2: 'Another solution involves [策略2]. Creating [环境] can help [结果].',
      conclusion: 'In conclusion, [总结]. [名人]\'s leadership shows that [启示].'
    },
    fullParagraphs: {
      introduction: 'Promoting more women in leadership positions in STEM fields is a pressing issue that requires attention. Drawing from Gwynne Shotwell\'s experience at SpaceX, we can identify effective solutions.',
      body1: 'One approach is providing mentorship and support networks for women in STEM. Gwynne Shotwell has advocated for mentorship programs that connect women with experienced leaders in the field. For example, SpaceX has implemented initiatives to support women engineers and create a more inclusive workplace culture. These programs help address the lack of role models and provide guidance for career advancement.',
      body2: 'Another solution involves challenging stereotypes and promoting gender-neutral evaluation criteria. Creating objective hiring and promotion processes that focus on skills and achievements rather than gender can help level the playing field. Shotwell has emphasized that leadership should be based on competence, not gender, and has worked to create an environment where everyone has equal opportunities to succeed.',
      conclusion: 'In conclusion, promoting women in STEM leadership requires mentorship, inclusive cultures, and objective evaluation. Gwynne Shotwell\'s leadership shows that when organizations prioritize equality and meritocracy, they can attract and retain talented women who drive innovation and success.'
    },
    vocabulary: ['mentorship', 'inclusive', 'stereotypes', 'meritocracy', 'competence', 'advancement', 'innovation']
  },
  {
    id: 109,
    title: '黄仁勋 - 创业精神',
    type: 'agree/disagree',
    topic: 'Entrepreneurial success depends more on resilience than on initial ideas. To what extent do you agree?',
    speaker: '黄仁勋 (Jensen Huang)',
    speakerTitle: 'NVIDIA创始人兼CEO',
    style: '坚韧创业型',
    styleNote: '黄仁勋作为连续创业者，展现了非凡的韧性和坚持。他的风格是：1）分享创业艰难历程；2）强调坚持的重要性；3）鼓励从失败中学习；4）展现对事业的执着热爱。',
    structure: {
      introduction: '[话题]. I agree with this statement, as demonstrated by [名人]\'s entrepreneurial journey.',
      body1: 'Firstly, [名人] faced [挑战]. For example, [事例]. His resilience helped [结果].',
      body2: 'Secondly, [公司]\'s success came from [坚持]. As [名人] said, "[名言]".',
      conclusion: 'In conclusion, [总结]. [名人]\'s story proves that [道理].'
    },
    fullParagraphs: {
      introduction: 'Entrepreneurial success depends more on resilience than on initial ideas. I agree with this statement, as demonstrated by Jensen Huang\'s journey building NVIDIA.',
      body1: 'Firstly, Jensen Huang faced numerous challenges in NVIDIA\'s early years. The company struggled financially and nearly went bankrupt multiple times. For example, in the late 1990s, NVIDIA bet heavily on 3D graphics at a time when the market was skeptical. His resilience and belief in the technology helped the company survive and eventually thrive. This shows that even the best ideas require perseverance to succeed.',
      body2: 'Secondly, NVIDIA\'s success came from continuous adaptation and learning from failures. As Jensen Huang said, "Fail often, fail fast, but never fail to learn." This philosophy has guided NVIDIA through technological shifts and market changes. For instance, when the gaming market slowed, NVIDIA pivoted to AI and data center computing, a move that required significant resilience and long-term vision.',
      conclusion: 'In conclusion, entrepreneurial success requires more than just a good idea—it demands resilience, adaptability, and the courage to persist through challenges. Jensen Huang\'s story proves that resilience is the foundation upon which great companies are built.'
    },
    vocabulary: ['resilience', 'perseverance', 'adaptation', 'pivoted', 'entrepreneurial', 'thrive', 'persist']
  },
  {
    id: 110,
    title: '谷爱凌 - 心理健康',
    type: 'problem/solution',
    topic: 'How can athletes maintain good mental health under high-pressure competition?',
    speaker: '谷爱凌',
    speakerTitle: '自由式滑雪奥运冠军',
    style: '心理健康倡导者',
    styleNote: '谷爱凌公开谈论心理健康问题，展现了运动员面对压力的积极态度。她的风格是：1）坦诚分享个人经历；2）倡导积极心理习惯；3）强调平衡的重要性；4）鼓励寻求帮助。',
    structure: {
      introduction: '[问题] is increasingly important in high-performance sports. [名人]\'s approach offers valuable insights.',
      body1: 'One key strategy is [方法1]. [名人] practices [措施]. For example, [事例].',
      body2: 'Another approach involves [方法2]. Maintaining [平衡] helps [结果].',
      conclusion: 'In conclusion, [总结]. [名人]\'s example shows that [启示].'
    },
    fullParagraphs: {
      introduction: 'Maintaining good mental health under high-pressure competition is increasingly important in high-performance sports. Eileen Gu\'s approach offers valuable insights for athletes facing intense pressure.',
      body1: 'One key strategy is developing healthy coping mechanisms and mindfulness practices. Eileen Gu has spoken about using meditation and visualization to manage stress before competitions. For example, she incorporates breathing exercises into her pre-competition routine to stay focused and calm. These practices help athletes maintain mental clarity and perform at their best under pressure.',
      body2: 'Another approach involves maintaining a balanced lifestyle outside of competition. Eileen Gu emphasizes the importance of pursuing other interests, spending time with family, and allowing herself to rest. This balance helps prevent burnout and maintains overall well-being. She has also been open about seeking support when needed, breaking down the stigma around mental health in sports.',
      conclusion: 'In conclusion, athletes can maintain good mental health through mindfulness practices and balanced lifestyles. Eileen Gu\'s example shows that prioritizing mental well-being is not a sign of weakness but a key component of athletic success.'
    },
    vocabulary: ['mindfulness', 'coping', 'visualization', 'burnout', 'well-being', 'stigma', 'clarity']
  }
];

const existingData = fs.readFileSync('./src/data/writing.ts', 'utf8');

const lastBracketIndex = existingData.lastIndexOf('];');
if (lastBracketIndex === -1) {
  console.error('Could not find the essayTemplates array');
  process.exit(1);
}

const beforeTemplates = existingData.substring(0, lastBracketIndex);
const afterTemplates = existingData.substring(lastBracketIndex);

const newTemplates = JSON.stringify(celebrityTopics, null, 2);
const updatedContent = beforeTemplates + ',\n' + newTemplates.substring(1, newTemplates.length - 1) + afterTemplates;

fs.writeFileSync('./src/data/writing.ts', updatedContent, 'utf8');
console.log(`Added ${celebrityTopics.length} celebrity essay templates successfully!`);
console.log(`Total essay templates now: ${85 + celebrityTopics.length}`);
