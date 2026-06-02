export interface SpeakingQuestion {
  id: number;
  topic: string;
  topicCN?: string;
  part: 'Part 1' | 'Part 2' | 'Part 3';
  question: string;
  questionCN?: string;
  modelAnswer: string;
  modelAnswerCN?: string;
}

export const mockSpeakingQuestions: SpeakingQuestion[] = [
  {
    id: 1,
    topic: 'Hobbies',
    topicCN: '爱好',
    part: 'Part 1',
    question: 'What hobbies do you have?',
    questionCN: '你有什么爱好？',
    modelAnswer: 'I have several hobbies that I enjoy in my free time. One of my favorites is reading. I love getting lost in a good book, whether it\'s a novel, a biography, or a self-help book. Reading helps me relax and also broadens my knowledge. Another hobby of mine is hiking. I enjoy spending time outdoors, exploring nature trails and enjoying the fresh air. It\'s a great way to stay active and clear my mind. Additionally, I like cooking. Experimenting with new recipes and creating delicious meals for my family and friends brings me a lot of joy.',
    modelAnswerCN: '我在业余时间有几个爱好。我最喜欢的之一是阅读。我喜欢沉浸在一本好书中，无论是小说、传记还是自助书籍。阅读帮助我放松，也拓宽了我的知识面。我的另一个爱好是徒步旅行。我喜欢在户外度过时光，探索自然小径，享受新鲜空气。这是保持活跃和理清思绪的好方法。此外，我喜欢烹饪。尝试新食谱并为家人和朋友制作美味的饭菜给我带来很多快乐。'
  },
  {
    id: 2,
    topic: 'Music',
    topicCN: '音乐',
    part: 'Part 1',
    question: 'What kind of music do you like?',
    questionCN: '你喜欢什么类型的音乐？',
    modelAnswer: 'I have quite diverse taste in music. I enjoy listening to various genres depending on my mood. When I\'m working or studying, I prefer instrumental music like classical or jazz because it helps me focus. For relaxation, I like acoustic music or soft pop. I also enjoy listening to rock music when I want to feel energized. One genre I\'ve recently gotten into is K-pop; I find the melodies and choreography very engaging. Overall, I believe music is a universal language that connects people and enhances our emotions.',
    modelAnswerCN: '我对音乐的品味相当多样化。根据我的心情，我喜欢听各种类型的音乐。当我工作或学习时，我更喜欢古典或爵士等器乐，因为它有助于我集中注意力。为了放松，我喜欢原声音乐或轻柔的流行音乐。当我想充满活力时，我也喜欢听摇滚音乐。我最近喜欢上的一种类型是K-pop；我发现旋律和编舞非常吸引人。总的来说，我相信音乐是一种连接人们并增强我们情感的通用语言。'
  },
  {
    id: 3,
    topic: 'Travel',
    topicCN: '旅行',
    part: 'Part 1',
    question: 'Do you like traveling?',
    questionCN: '你喜欢旅行吗？',
    modelAnswer: 'Yes, I absolutely love traveling! Exploring new places, experiencing different cultures, and meeting new people are some of my favorite things to do. Traveling broadens my perspective and allows me to learn about history, traditions, and ways of life that are different from my own. I especially enjoy visiting places with rich history and beautiful landscapes. So far, I\'ve traveled to several countries in Asia and Europe, and each trip has been a memorable experience. I believe traveling is not just about visiting new places but also about personal growth and self-discovery.',
    modelAnswerCN: '是的，我非常喜欢旅行！探索新地方、体验不同文化和结识新朋友是我最喜欢做的事情。旅行拓宽了我的视野，让我了解不同于自己的历史、传统和生活方式。我特别喜欢参观历史悠久、风景优美的地方。到目前为止，我已经去过亚洲和欧洲的几个国家，每次旅行都是一次难忘的经历。我相信旅行不仅仅是参观新地方，更是个人成长和自我发现的过程。'
  },
  {
    id: 4,
    topic: 'Food',
    topicCN: '食物',
    part: 'Part 1',
    question: 'What is your favorite food?',
    questionCN: '你最喜欢的食物是什么？',
    modelAnswer: 'My favorite food is definitely sushi. I love the combination of fresh fish, rice, and various toppings. The simplicity and elegance of sushi make it a truly special dish. I also enjoy trying different types of sushi, from classic ones like salmon and tuna to more adventurous options like uni (sea urchin) or toro (fatty tuna). Besides sushi, I\'m a big fan of Italian cuisine, especially homemade pasta with fresh tomato sauce. There\'s something comforting about a bowl of warm pasta that always makes me happy.',
    modelAnswerCN: '我最喜欢的食物绝对是寿司。我喜欢新鲜鱼、米饭和各种配料的组合。寿司的简约和优雅使其成为一道真正特别的菜肴。我也喜欢尝试不同类型的寿司，从经典的三文鱼和金枪鱼到更有冒险性的选择，如海胆或肥金枪鱼。除了寿司，我还是意大利菜的忠实粉丝，尤其是自制的意大利面配新鲜番茄酱。一碗温暖的意大利面总有一种令人舒适的感觉，总能让我开心。'
  },
  {
    id: 5,
    topic: 'Technology',
    topicCN: '科技',
    part: 'Part 1',
    question: 'How often do you use technology?',
    questionCN: '你多久使用一次科技产品？',
    modelAnswer: 'I use technology almost every day. Like most people, I rely on my smartphone for communication, checking emails, and staying updated with news and social media. I also use my laptop for work and studying. Technology has become an integral part of modern life, making many tasks more convenient and efficient. However, I try to balance my screen time by setting aside periods where I disconnect and spend time outdoors or reading a physical book. It\'s important to find a healthy balance between using technology and enjoying offline activities.',
    modelAnswerCN: '我几乎每天都使用科技产品。像大多数人一样，我依靠智能手机进行沟通、查看电子邮件以及了解新闻和社交媒体的最新动态。我也用笔记本电脑工作和学习。科技已经成为现代生活不可或缺的一部分，使许多任务更加便捷高效。然而，我尝试通过留出一些时间来断开连接，花时间在户外或阅读实体书来平衡我的屏幕时间。在使用科技和享受线下活动之间找到健康的平衡很重要。'
  },
  {
    id: 6,
    topic: 'Books',
    topicCN: '书籍',
    part: 'Part 1',
    question: 'Do you prefer reading books or e-books?',
    questionCN: '你更喜欢阅读纸质书还是电子书？',
    modelAnswer: 'I prefer reading physical books over e-books. There\'s something special about holding a book, turning the pages, and the smell of paper that e-books just can\'t replicate. Physical books also don\'t cause eye strain like screens do, and I find it easier to focus when reading a printed book. That said, I do appreciate e-books for their convenience when traveling or when I want to access a large library of books without carrying them around. But for a truly immersive reading experience, nothing beats a good old-fashioned book.',
    modelAnswerCN: '比起电子书，我更喜欢阅读纸质书。拿着一本书、翻页以及纸张的气味有一种特别的感觉，这是电子书无法复制的。纸质书也不会像屏幕那样造成眼睛疲劳，而且我发现阅读印刷书籍时更容易集中注意力。也就是说，我确实很欣赏电子书在旅行时或当我想访问大量书籍而不必随身携带时的便利性。但对于真正身临其境的阅读体验，没有什么能比得上一本老式的好书。'
  },
  {
    id: 7,
    topic: 'Friends',
    topicCN: '朋友',
    part: 'Part 1',
    question: 'How important are friends to you?',
    questionCN: '朋友对你来说有多重要？',
    modelAnswer: 'Friends are incredibly important to me. They are like a second family. Good friends provide support, laughter, and companionship through both good times and bad. They celebrate our successes and offer comfort during difficult periods. I value the deep connections I have with my close friends, and I make an effort to nurture these relationships by spending quality time together, whether it\'s going out for coffee, having deep conversations, or simply enjoying each other\'s company. I believe strong friendships contribute significantly to our overall happiness and well-being.',
    modelAnswerCN: '朋友对我来说非常重要。他们就像第二个家庭。好朋友在顺境和逆境中都提供支持、欢笑和陪伴。他们庆祝我们的成功，并在困难时期提供安慰。我珍惜与亲密朋友的深厚联系，并努力通过一起度过美好时光来培养这些关系，无论是出去喝咖啡、深入交谈，还是只是享受彼此的陪伴。我相信牢固的友谊对我们的整体幸福和福祉有很大贡献。'
  },
  {
    id: 8,
    topic: 'Weather',
    topicCN: '天气',
    part: 'Part 1',
    question: 'What kind of weather do you like best?',
    questionCN: '你最喜欢什么样的天气？',
    modelAnswer: 'My favorite kind of weather is a cool, sunny day with a gentle breeze. I love when the temperature is around 20-25 degrees Celsius, not too hot and not too cold. This kind of weather is perfect for outdoor activities like walking, hiking, or having a picnic. I also enjoy the feeling of sunlight on my skin and the fresh air. Rainy days can be nice too, especially when I\'m indoors with a good book and a cup of tea. But overall, I prefer mild, sunny weather that allows me to enjoy nature and be active outside.',
    modelAnswerCN: '我最喜欢的天气是凉爽、阳光明媚且有微风的日子。我喜欢温度在20-25摄氏度左右，不太热也不太冷。这种天气非常适合户外活动，如散步、徒步旅行或野餐。我也喜欢阳光照在皮肤上的感觉和新鲜空气。雨天也很不错，尤其是当我在室内拿着一本好书和一杯茶的时候。但总的来说，我更喜欢温和、阳光明媚的天气，让我能够享受大自然并在户外活动。'
  },
  {
    id: 9,
    topic: 'Family',
    topicCN: '家庭',
    part: 'Part 1',
    question: 'How often do you spend time with your family?',
    questionCN: '你多久和家人共度一次时光？',
    modelAnswer: 'I try to spend as much time as possible with my family. We usually have dinner together every evening, which is a great opportunity to catch up on each other\'s day. On weekends, we often do activities together like going to the park, watching a movie, or preparing meals as a family. Even simple moments like having breakfast together or taking a walk in the neighborhood mean a lot to me. I believe spending quality time with family strengthens our bonds and creates lasting memories. Since I live with my family, we get to see each other daily, which I really appreciate.',
    modelAnswerCN: '我尽量花尽可能多的时间与家人在一起。我们通常每天晚上一起吃晚饭，这是了解彼此一天情况的好机会。在周末，我们经常一起做活动，比如去公园、看电影或全家一起准备饭菜。即使是一起吃早餐或在附近散步这样简单的时刻对我来说也意义重大。我相信与家人共度美好时光会加强我们的联系并创造持久的回忆。由于我和家人住在一起，我们每天都能见到彼此，我非常感激这一点。'
  },
  {
    id: 10,
    topic: 'Work/Study',
    topicCN: '工作/学习',
    part: 'Part 1',
    question: 'Do you enjoy your work/studies?',
    questionCN: '你喜欢自己的工作/学习吗？',
    modelAnswer: 'Yes, I really enjoy my studies. I\'m currently studying [your major/program], and I find the subjects fascinating. The coursework challenges me in a positive way, and I love learning new things every day. What I enjoy most is the opportunity to explore different ideas and perspectives, and to develop critical thinking skills. Although there are times when it can be stressful, especially during exams or when working on big projects, the sense of accomplishment I feel when I understand a difficult concept or complete a challenging task makes it all worthwhile. Overall, I\'m grateful for the opportunity to pursue my education and grow both academically and personally.',
    modelAnswerCN: '是的，我非常喜欢我的学习。我目前正在学习[你的专业/课程]，我发现这些科目非常迷人。课程作业以积极的方式挑战我，我喜欢每天学习新东西。我最喜欢的是有机会探索不同的想法和观点，并培养批判性思维能力。虽然有时会有压力，特别是在考试期间或处理大型项目时，但当我理解一个困难的概念或完成一项具有挑战性的任务时，我感受到的成就感使这一切都值得。总的来说，我很感激有机会接受教育，并在学术和个人方面都得到成长。'
  },
  {
    id: 11,
    topic: 'Clothing',
    topicCN: '服装',
    part: 'Part 1',
    question: 'What kind of clothes do you like to wear?',
    questionCN: '你喜欢穿什么样的衣服？',
    modelAnswer: 'I prefer comfortable and casual clothing. I usually wear jeans or leggings paired with a t-shirt or a sweater. I like clothes that are easy to move around in and don\'t restrict my movement. For special occasions, I might dress up a bit more with a nice dress or a blouse with trousers. I also enjoy adding accessories like scarves or jewelry to enhance my outfit. Overall, my style is pretty laid-back, but I do pay attention to looking presentable and neat. I believe clothes should reflect one\'s personality, and my style is a mix of comfort and practicality.',
    modelAnswerCN: '我更喜欢舒适休闲的服装。我通常穿牛仔裤或紧身裤搭配T恤或毛衣。我喜欢穿起来容易活动且不限制我活动的衣服。在特殊场合，我可能会穿得更正式一些，比如穿漂亮的连衣裙或衬衫配裤子。我也喜欢添加围巾或珠宝等配饰来提升我的着装。总的来说，我的风格相当悠闲，但我确实注意保持得体和整洁。我相信衣服应该反映一个人的个性，而我的风格是舒适和实用的结合。'
  },
  {
    id: 12,
    topic: 'Animals',
    topicCN: '动物',
    part: 'Part 1',
    question: 'Do you like animals?',
    questionCN: '你喜欢动物吗？',
    modelAnswer: 'Yes, I absolutely love animals! I find them fascinating and believe they bring so much joy into our lives. I have a pet cat at home, and she\'s like a member of our family. I enjoy watching her play and cuddling with her. I also love observing wildlife when I\'m out hiking or visiting parks. Animals have such unique behaviors and personalities, and I think it\'s important to treat them with kindness and respect. I support animal welfare causes and believe in protecting endangered species. Overall, animals add so much beauty and diversity to our world.',
    modelAnswerCN: '是的，我绝对喜欢动物！我觉得它们非常迷人，相信它们给我们的生活带来了很多快乐。我家里有一只宠物猫，她就像我们家的一员。我喜欢看她玩耍并和她依偎在一起。我也喜欢在徒步旅行或参观公园时观察野生动物。动物有着如此独特的行为和个性，我认为以善良和尊重对待它们很重要。我支持动物福利事业，并相信保护濒危物种。总的来说，动物为我们的世界增添了如此多的美丽和多样性。'
  },
  {
    id: 13,
    topic: 'Photography',
    topicCN: '摄影',
    part: 'Part 1',
    question: 'Do you like taking photos?',
    questionCN: '你喜欢拍照吗？',
    modelAnswer: 'Yes, I enjoy taking photos as a hobby. I love capturing moments and memories through my camera lens. Whether it\'s a beautiful sunset, a special event with friends, or just everyday scenes that catch my eye, I find photography to be a creative outlet. I especially enjoy portrait photography and landscape photography. I like to experiment with different angles and lighting to create interesting compositions. Although I\'m not a professional photographer, I take pride in improving my skills and creating photos that tell a story. Looking back at my photos helps me relive happy moments and appreciate the beauty around me.',
    modelAnswerCN: '是的，我喜欢把拍照作为一种爱好。我喜欢通过相机镜头捕捉瞬间和回忆。无论是美丽的日落、与朋友的特殊活动，还是只是吸引我眼球的日常场景，我发现摄影是一种创造性的发泄方式。我特别喜欢人像摄影和风景摄影。我喜欢尝试不同的角度和光线来创造有趣的构图。虽然我不是专业摄影师，但我为提高自己的技能和创作能讲述故事的照片而感到自豪。回顾我的照片有助于我重温快乐时光并欣赏周围的美景。'
  },
  {
    id: 14,
    topic: 'Sports',
    topicCN: '运动',
    part: 'Part 1',
    question: 'What sports do you like to play?',
    questionCN: '你喜欢玩什么运动？',
    modelAnswer: 'I enjoy playing several sports in my free time. My favorite sport is badminton. I find it fast-paced and exciting, and it\'s a great way to stay active. I usually play with friends on weekends, and we have a lot of fun competing against each other. I also like swimming, especially during the summer months. It\'s a low-impact exercise that works the whole body. Additionally, I enjoy yoga for relaxation and flexibility. I find that practicing yoga helps me reduce stress and improve my posture. Overall, staying active through sports is important to me for both physical and mental well-being.',
    modelAnswerCN: '我喜欢在业余时间玩几种运动。我最喜欢的运动是羽毛球。我觉得它节奏快且令人兴奋，是保持活跃的好方法。我通常在周末和朋友一起玩，我们互相比赛很开心。我也喜欢游泳，尤其是在夏季。这是一种低冲击的运动，可以锻炼全身。此外，我喜欢瑜伽来放松和提高灵活性。我发现练习瑜伽有助于我减轻压力并改善姿势。总的来说，通过运动保持活跃对我的身心健康都很重要。'
  },
  {
    id: 15,
    topic: 'TV Shows',
    topicCN: '电视剧',
    part: 'Part 1',
    question: 'What kind of TV shows do you like to watch?',
    questionCN: '你喜欢看什么类型的电视剧？',
    modelAnswer: 'I enjoy watching a variety of TV shows depending on my mood. One of my favorite genres is drama, especially well-written series with compelling characters and storylines. I also like watching comedies because they help me relax and laugh after a long day. Documentaries are another favorite of mine—I find them educational and fascinating, covering topics like history, nature, and science. Additionally, I enjoy watching some reality TV shows, particularly those focused on cooking or travel. I think TV can be both entertaining and informative, and it\'s a great way to unwind and learn new things.',
    modelAnswerCN: '根据我的心情，我喜欢看各种类型的电视剧。我最喜欢的类型之一是戏剧，特别是那些有引人入胜的角色和故事情节的优秀剧集。我也喜欢看喜剧，因为它们帮助我在漫长的一天后放松和大笑。纪录片是我的另一个最爱——我发现它们既有教育意义又令人着迷，涵盖历史、自然和科学等主题。此外，我喜欢看一些真人秀节目，特别是那些专注于烹饪或旅行的节目。我认为电视既可以娱乐又可以提供信息，是放松和学习新事物的好方法。'
  },
  {
    id: 16,
    topic: 'Memories',
    topicCN: '回忆',
    part: 'Part 2',
    question: 'Describe a happy memory from your childhood.',
    questionCN: '描述一个你童年的快乐回忆。',
    modelAnswer: 'One of my happiest childhood memories is spending summer vacations at my grandparents\' house in the countryside. Every summer, my siblings and I would travel there and stay for a month. We would wake up early to help my grandfather tend to his garden—watering the vegetables, picking fresh fruits, and feeding the chickens. In the afternoons, we would play games like hide-and-seek in the fields or swim in the nearby river. Evenings were spent sitting on the porch, listening to my grandmother tell stories while we ate fresh watermelon. Those summer days were filled with laughter, adventure, and the simple joys of country life. What made it so special was the quality time I spent with my family and the freedom to explore nature. I often look back on those memories with great fondness, as they represent some of the happiest times of my childhood.',
    modelAnswerCN: '我最快乐的童年记忆之一是在乡下祖父母家度过暑假。每年夏天，我和兄弟姐妹都会去那里住一个月。我们会早起帮助爷爷打理他的花园——给蔬菜浇水、采摘新鲜水果、喂鸡。下午，我们会在田野里玩捉迷藏等游戏，或者在附近的河里游泳。晚上，我们坐在门廊上，一边吃新鲜西瓜，一边听奶奶讲故事。那些夏日充满了欢笑、冒险和乡村生活的简单乐趣。让它如此特别的是我与家人共度的美好时光以及探索自然的自由。我常常满怀深情地回顾这些记忆，因为它们代表了我童年最快乐的时光。'
  },
  {
    id: 17,
    topic: 'Celebrations',
    topicCN: '庆祝活动',
    part: 'Part 2',
    question: 'Describe a special celebration you attended.',
    questionCN: '描述一个你参加过的特别庆祝活动。',
    modelAnswer: 'One of the most memorable celebrations I attended was my best friend\'s wedding last year. It was a beautiful outdoor ceremony held in a garden venue decorated with flowers and fairy lights. The bride looked stunning in her white dress, and the groom was beaming with happiness. The ceremony was heartfelt, with touching vows that brought tears to many eyes. After the ceremony, we enjoyed a delicious dinner with speeches from family and friends. The dance floor opened later, and everyone had a wonderful time dancing and celebrating. What made this celebration so special was the love and joy shared by everyone present. It was a day filled with laughter, happy tears, and unforgettable moments. I felt grateful to be part of such a special occasion and witness two people I care about starting their life together.',
    modelAnswerCN: '我参加过的最难忘的庆祝活动之一是去年我最好朋友的婚礼。这是一场在花园场地举行的美丽户外仪式，场地装饰着鲜花和彩灯。新娘穿着白色礼服看起来美极了，新郎也洋溢着幸福的笑容。仪式非常感人，感人的誓言让许多人热泪盈眶。仪式结束后，我们享用了美味的晚餐，还有家人和朋友的演讲。后来舞池开放了，每个人都尽情跳舞和庆祝。让这个庆祝活动如此特别的是在场每个人分享的爱和喜悦。那一天充满了欢笑、幸福的泪水和难忘的时刻。我很感激能成为这样一个特殊场合的一部分，并见证我关心的两个人开始他们的共同生活。'
  },
  {
    id: 18,
    topic: 'Places',
    topicCN: '地方',
    part: 'Part 2',
    question: 'Describe a place you have visited that left a lasting impression.',
    questionCN: '描述一个你去过并留下深刻印象的地方。',
    modelAnswer: 'A place that left a lasting impression on me is Kyoto, Japan. I visited Kyoto during cherry blossom season, and it was absolutely breathtaking. The city is filled with ancient temples, traditional gardens, and beautiful cherry blossom trees in full bloom. One of the most memorable experiences was visiting Fushimi Inari Taisha, with its thousands of vermilion torii gates winding up the mountain. I also loved walking through the Arashiyama Bamboo Grove, where the tall bamboo stalks create a peaceful and serene atmosphere. The traditional tea houses and local cuisine, especially matcha desserts, added to the charm of the city. What struck me most was how Kyoto seamlessly blends ancient traditions with modern life. It felt like stepping back in time while still enjoying the comforts of modern amenities. Kyoto left me with a sense of wonder and a deep appreciation for Japanese culture and aesthetics.',
    modelAnswerCN: '给我留下深刻印象的地方是日本京都。我在樱花季节访问了京都，那里美得令人窒息。这座城市到处都是古老的寺庙、传统的花园和盛开的美丽樱花树。最难忘的经历之一是参观伏见稻荷大社，那里有成千上万的朱红色鸟居蜿蜒上山。我也喜欢漫步在岚山竹林中，高大的竹茎营造出宁静祥和的氛围。传统的茶馆和当地美食，尤其是抹茶甜点，为这座城市增添了魅力。最让我印象深刻的是京都如何将古老传统与现代生活无缝融合。感觉就像回到了过去，同时仍能享受现代设施的舒适。京都给我留下了惊奇感，并对日本文化和美学产生了深深的欣赏。'
  },
  {
    id: 19,
    topic: 'Objects',
    topicCN: '物品',
    part: 'Part 2',
    question: 'Describe an object that is important to you.',
    questionCN: '描述一个对你很重要的物品。',
    modelAnswer: 'An object that is very important to me is a small wooden box that belonged to my grandmother. She gave it to me before she passed away, and it holds great sentimental value. The box is hand-carved with intricate patterns and has a small brass lock. Inside, I keep letters my grandmother wrote to me, old photographs of our family, and a few small trinkets from my childhood. Every time I open the box, it brings back memories of spending time with my grandmother—her stories, her laughter, and the love she showered on me. The box serves as a tangible connection to her and reminds me of the lessons she taught me about kindness, patience, and family. It\'s not just an object; it\'s a precious keepsake that I will cherish forever.',
    modelAnswerCN: '对我来说非常重要的物品是一个属于我祖母的小木盒。她在去世前把它送给了我，它具有很大的情感价值。盒子是手工雕刻的，有复杂的图案和一个小铜锁。里面放着祖母写给我的信、我们家的老照片，以及我童年的一些小饰品。每次打开盒子，都会勾起我与祖母共度时光的回忆——她的故事、她的笑声，以及她给予我的爱。这个盒子是与她的有形联系，让我想起她教给我的关于善良、耐心和家庭的教训。它不仅仅是一件物品；它是我将永远珍惜的珍贵纪念品。'
  },
  {
    id: 20,
    topic: 'People',
    topicCN: '人物',
    part: 'Part 2',
    question: 'Describe a person who has influenced you greatly.',
    questionCN: '描述一个对你影响很大的人。',
    modelAnswer: 'The person who has influenced me the most is my mother. She has been my role model since I was a child. My mother is a hardworking, compassionate, and resilient woman. She raised my siblings and me single-handedly while pursuing her own career, and she always put our needs above her own. What I admire most about her is her positive attitude even in the face of challenges. No matter how difficult things got, she always remained optimistic and encouraged us to keep going. She taught me the importance of kindness, perseverance, and integrity. Through her example, I learned to be independent, empathetic, and to never give up on my dreams. My mother\'s love and guidance have shaped who I am today, and I am incredibly grateful for everything she has done for me.',
    modelAnswerCN: '对我影响最大的人是我的母亲。从小她就是我的榜样。我的母亲是一个勤劳、富有同情心且坚韧不拔的女人。她在追求自己事业的同时独自抚养我和我的兄弟姐妹，她总是把我们的需求放在自己的需求之上。我最钦佩她的是即使面对挑战，她也保持积极的态度。无论事情变得多么困难，她总是保持乐观，并鼓励我们继续前进。她教会了我善良、坚持和正直的重要性。通过她的榜样，我学会了独立、同理心，以及永不放弃我的梦想。母亲的爱和指导塑造了今天的我，我非常感激她为我所做的一切。'
  },
  {
    id: 21,
    topic: 'Events',
    topicCN: '事件',
    part: 'Part 2',
    question: 'Describe an important event in your life.',
    questionCN: '描述你生命中一个重要的事件。',
    modelAnswer: 'One of the most important events in my life was graduating from university. It was a moment of great pride and accomplishment. I had worked hard for four years, balancing academic studies with extracurricular activities and part-time work. On graduation day, the auditorium was filled with graduates, their families, and professors. When my name was called and I walked across the stage to receive my diploma, I felt a mix of emotions—excitement, relief, and a sense of achievement. After the ceremony, my family and friends gathered to celebrate with me. This event was significant because it marked the end of one chapter and the beginning of a new one. It gave me the confidence to pursue my career goals and embark on new adventures. Graduation taught me that hard work pays off and that I am capable of achieving great things when I set my mind to it.',
    modelAnswerCN: '我生命中最重要的事件之一是大学毕业。那是一个充满骄傲和成就感的时刻。四年来，我努力学习，平衡学业、课外活动和兼职工作。毕业那天，礼堂里坐满了毕业生、他们的家人和教授。当叫到我的名字，我走上舞台领取文凭时，我感到五味杂陈——兴奋、释然和成就感。仪式结束后，我的家人和朋友聚在一起为我庆祝。这个事件意义重大，因为它标志着一个章节的结束和一个新篇章的开始。它给了我追求职业目标和踏上新冒险的信心。毕业教会我努力工作会有回报，当我下定决心时，我能够取得伟大的成就。'
  },
  {
    id: 22,
    topic: 'Music',
    topicCN: '音乐',
    part: 'Part 2',
    question: 'Describe a song that has special meaning to you.',
    questionCN: '描述一首对你有特殊意义的歌曲。',
    modelAnswer: 'A song that has special meaning to me is "Somewhere Over the Rainbow" by Judy Garland. This song has been significant to me since I was a child. My grandmother used to sing it to me when I was feeling sad or scared, and it always brought me comfort. As I grew older, the song took on new meaning. It reminds me of my grandmother and the love she showed me. The lyrics about hope and dreams resonate deeply with me, especially during difficult times. I also love the melody—it\'s beautiful and timeless. Whenever I hear this song, it transports me back to my childhood and fills me with warm memories. It\'s not just a song; it\'s a connection to my past and a source of inspiration for the future.',
    modelAnswerCN: '对我有特殊意义的歌曲是朱迪·加兰的《彩虹之上》。这首歌从小就对我意义重大。当我感到悲伤或害怕时，我的祖母常唱给我听，它总能给我带来安慰。随着年龄的增长，这首歌有了新的意义。它让我想起我的祖母和她对我的爱。关于希望和梦想的歌词深深触动了我，尤其是在困难时期。我也喜欢这首旋律——它美丽而永恒。每当我听到这首歌，它就会带我回到童年，让我充满温暖的回忆。它不仅仅是一首歌；它是与我过去的联系，也是未来的灵感来源。'
  },
  {
    id: 23,
    topic: 'Books',
    topicCN: '书籍',
    part: 'Part 2',
    question: 'Describe a book that had a big impact on you.',
    questionCN: '描述一本对你影响很大的书。',
    modelAnswer: 'A book that had a profound impact on me is "The Alchemist" by Paulo Coelho. I read it during a challenging period in my life when I was unsure about my future direction. The story follows a young shepherd boy who embarks on a journey to find treasure, and along the way, he learns valuable lessons about following his dreams, listening to his heart, and embracing the journey rather than just focusing on the destination. The book taught me the importance of pursuing my passions and trusting the universe to guide me. It reminded me that every experience, whether good or bad, is part of a larger plan. Since reading it, I\'ve become more mindful of the signs around me and more willing to take risks to pursue what I truly want. "The Alchemist" continues to inspire me to live a life true to myself and to never lose hope, no matter how difficult things may seem.',
    modelAnswerCN: '对我影响深远的一本书是保罗·柯艾略的《牧羊少年奇幻之旅》。我在人生的一个充满挑战的时期读了这本书，当时我不确定自己未来的方向。故事讲述了一个年轻的牧羊男孩踏上寻找宝藏的旅程，一路上，他学到了关于追随梦想、倾听内心和拥抱旅程而不仅仅关注目的地的宝贵教训。这本书教会了我追求激情和相信宇宙指引我的重要性。它提醒我，每一次经历，无论好坏，都是更大计划的一部分。自从读了它，我变得更加关注周围的迹象，更愿意冒险去追求我真正想要的东西。《牧羊少年奇幻之旅》继续激励我过真实的生活，无论事情看起来多么困难，都永远不要失去希望。'
  },
  {
    id: 24,
    topic: 'Technology',
    topicCN: '科技',
    part: 'Part 3',
    question: 'How has technology changed the way people communicate?',
    questionCN: '科技如何改变了人们的沟通方式？',
    modelAnswer: 'Technology has revolutionized the way people communicate in numerous ways. First, it has made communication faster and more convenient. With smartphones and instant messaging apps, we can now send messages, make video calls, and share information with anyone, anywhere in the world, in real-time. This has bridged distances and made it easier to stay connected with friends and family who live far away. Social media platforms have also changed communication by allowing people to share their thoughts, experiences, and opinions with a large audience instantly. However, there are also some downsides. While technology has made communication more frequent, it has sometimes reduced the depth of face-to-face interactions. Many people now prefer texting over having meaningful conversations, which can lead to misunderstandings and a lack of emotional connection. Overall, technology has greatly enhanced our ability to communicate, but it\'s important to find a balance between digital and in-person interactions.',
    modelAnswerCN: '科技在许多方面彻底改变了人们的沟通方式。首先，它使沟通更快、更方便。有了智能手机和即时通讯应用，我们现在可以实时向世界任何地方的任何人发送消息、进行视频通话和分享信息。这缩短了距离，使与远方的朋友和家人保持联系变得更加容易。社交媒体平台也通过允许人们立即与大量受众分享他们的想法、经历和观点来改变沟通方式。然而，也有一些缺点。虽然科技使沟通更加频繁，但有时也减少了面对面互动的深度。现在许多人更喜欢发短信而不是进行有意义的对话，这可能导致误解和缺乏情感联系。总的来说，科技大大增强了我们的沟通能力，但在数字互动和面对面互动之间找到平衡很重要。'
  },
  {
    id: 25,
    topic: 'Education',
    topicCN: '教育',
    part: 'Part 3',
    question: 'What are the benefits of studying abroad?',
    questionCN: '出国留学有什么好处？',
    modelAnswer: 'Studying abroad offers numerous benefits that can enrich both personal and academic growth. First and foremost, it provides an opportunity to immerse oneself in a different culture, which broadens one\'s perspective and fosters cultural awareness. Living in a foreign country helps develop independence and adaptability, as students learn to navigate unfamiliar environments and solve problems on their own. Academically, studying abroad often provides access to top-tier universities and specialized programs that may not be available in one\'s home country. It also improves language skills significantly, as students are constantly exposed to the local language in real-life situations. Additionally, studying abroad enhances one\'s resume, making graduates more competitive in the global job market. It also encourages networking with people from diverse backgrounds, which can lead to valuable connections and opportunities. Overall, studying abroad is a transformative experience that promotes personal growth, cultural understanding, and academic excellence.',
    modelAnswerCN: '出国留学提供了许多好处，可以丰富个人和学术成长。首先，它提供了沉浸在不同文化中的机会，这拓宽了一个人的视野并培养了文化意识。生活在外国有助于培养独立性和适应能力，因为学生学会在不熟悉的环境中导航并独立解决问题。在学术上，出国留学通常可以接触到本国可能没有的顶尖大学和专业课程。它还能显著提高语言技能，因为学生在现实生活中不断接触当地语言。此外，出国留学可以增强个人简历，使毕业生在全球就业市场上更具竞争力。它还鼓励与来自不同背景的人建立联系，这可能带来宝贵的联系和机会。总的来说，出国留学是一种变革性的经历，促进个人成长、文化理解和学术卓越。'
  },
  {
    id: 26,
    topic: 'Environment',
    topicCN: '环境',
    part: 'Part 3',
    question: 'What can individuals do to protect the environment?',
    questionCN: '个人可以做些什么来保护环境？',
    modelAnswer: 'Individuals can play a significant role in protecting the environment through small, everyday actions. First, reducing waste is crucial. This includes recycling properly, using reusable bags and water bottles, and avoiding single-use plastics. Conserving energy is another important step—turning off lights and appliances when not in use, using energy-efficient devices, and opting for renewable energy sources when possible. Water conservation is also essential, such as fixing leaks, taking shorter showers, and using water-saving appliances. Supporting sustainable practices, like buying locally produced goods and choosing products with minimal packaging, can also make a difference. Additionally, individuals can advocate for environmental protection by participating in community clean-ups, supporting environmental organizations, and raising awareness about environmental issues. Even small changes in daily habits can add up to make a significant impact on preserving our planet for future generations.',
    modelAnswerCN: '个人可以通过日常的小行动在保护环境方面发挥重要作用。首先，减少浪费至关重要。这包括正确回收、使用可重复使用的袋子和水瓶，以及避免一次性塑料。节约能源是另一个重要步骤——不使用时关闭灯光和电器、使用节能设备，并尽可能选择可再生能源。节约用水也很重要，例如修复漏水、缩短淋浴时间和使用节水设备。支持可持续实践，如购买本地生产的商品和选择包装最少的产品，也能起到作用。此外，个人可以通过参与社区清洁、支持环保组织和提高对环境问题的认识来倡导环境保护。即使是日常习惯的微小改变，也能累积起来对为子孙后代保护我们的星球产生重大影响。'
  },
  {
    id: 27,
    topic: 'Work',
    topicCN: '工作',
    part: 'Part 3',
    question: 'How do you think the workplace will change in the future?',
    questionCN: '你认为未来工作场所会如何变化？',
    modelAnswer: 'The workplace is likely to undergo significant changes in the future due to technological advancements and evolving work preferences. One major trend is the rise of remote work, which became more prevalent during the pandemic and is expected to continue. Many companies are now offering flexible work arrangements, allowing employees to work from home or choose hybrid models. Technology will also play a bigger role, with automation and artificial intelligence taking over repetitive tasks, allowing employees to focus on more creative and strategic work. The gig economy is also expected to grow, with more people opting for freelance or contract work instead of traditional full-time jobs. Additionally, workplaces will likely become more diverse and inclusive, with a greater emphasis on employee well-being and work-life balance. There may also be a shift towards more collaborative and open office spaces that foster innovation and teamwork. Overall, the future workplace will be more flexible, technology-driven, and focused on employee satisfaction and productivity.',
    modelAnswerCN: '由于技术进步和不断变化的工作偏好，未来工作场所可能会发生重大变化。一个主要趋势是远程工作的兴起，这在疫情期间变得更加普遍，并预计将继续下去。许多公司现在提供灵活的工作安排，允许员工在家工作或选择混合模式。技术也将发挥更大的作用，自动化和人工智能将接管重复性任务，使员工能够专注于更具创造性和战略性的工作。零工经济预计也会增长，越来越多的人选择自由职业或合同工作而不是传统的全职工作。此外，工作场所可能会变得更加多样化和包容性，更加重视员工福利和工作与生活的平衡。也可能会转向更协作和开放的办公空间，以促进创新和团队合作。总的来说，未来的工作场所将更加灵活、技术驱动，并注重员工满意度和生产力。'
  },
  {
    id: 28,
    topic: 'Culture',
    topicCN: '文化',
    part: 'Part 3',
    question: 'How does globalization affect local cultures?',
    questionCN: '全球化如何影响当地文化？',
    modelAnswer: 'Globalization has both positive and negative effects on local cultures. On the positive side, it promotes cultural exchange and understanding between different societies. People have access to diverse cuisines, music, films, and traditions from around the world, which enriches their cultural experiences. Globalization also allows local cultures to gain international recognition, such as through UNESCO World Heritage sites or global festivals. However, there are also challenges. The spread of global brands, media, and consumer culture can lead to the homogenization of cultures, where local traditions and practices are replaced by more dominant global ones. This can result in the loss of unique cultural identities and traditions. Additionally, globalization can sometimes lead to cultural appropriation, where elements of one culture are taken and used without proper understanding or respect. To mitigate these negative effects, it\'s important to promote cultural preservation and ensure that local traditions are valued and protected while still embracing the benefits of global exchange.',
    modelAnswerCN: '全球化对当地文化既有积极影响也有消极影响。在积极方面，它促进了不同社会之间的文化交流和理解。人们可以接触到来自世界各地的多样化美食、音乐、电影和传统，这丰富了他们的文化体验。全球化还使当地文化能够获得国际认可，例如通过联合国教科文组织世界遗产或全球节日。然而，也存在挑战。全球品牌、媒体和消费文化的传播可能导致文化同质化，当地传统和习俗被更占主导地位的全球文化所取代。这可能导致独特文化身份和传统的丧失。此外，全球化有时会导致文化挪用，即一种文化的元素被未经适当理解或尊重地采用和使用。为了减轻这些负面影响，重要的是促进文化保护，并确保在拥抱全球交流带来的好处的同时，重视和保护当地传统。'
  },
  {
    id: 29,
    topic: 'Food',
    topicCN: '食物',
    part: 'Part 1',
    question: 'Do you prefer eating at home or in restaurants?',
    questionCN: '你更喜欢在家吃饭还是在餐厅吃饭？',
    modelAnswer: 'I enjoy both eating at home and in restaurants, depending on the occasion. Eating at home is comfortable and allows me to prepare meals exactly how I like them. I can control the ingredients and cooking methods, which is great for maintaining a healthy diet. It\'s also more cost-effective and provides an opportunity to spend quality time with family. On the other hand, eating out is a nice treat. It allows me to try new dishes and cuisines that I might not cook at home. Restaurants provide a social atmosphere, making them perfect for gatherings with friends or special occasions. I think the key is balance—enjoying home-cooked meals most of the time while treating myself to restaurant meals occasionally.',
    modelAnswerCN: '根据场合的不同，我既喜欢在家吃饭也喜欢在餐厅吃饭。在家吃饭很舒适，可以按照自己喜欢的方式准备饭菜。我可以控制食材和烹饪方法，这对保持健康饮食很有好处。它也更具成本效益，并提供了与家人共度美好时光的机会。另一方面，外出就餐是一种很好的享受。它让我可以尝试在家可能不会做的新菜品和美食。餐厅提供社交氛围，非常适合与朋友聚会或特殊场合。我认为关键是平衡——大部分时间享受家常菜，偶尔犒劳自己去餐厅吃饭。'
  },
  {
    id: 30,
    topic: 'Shopping',
    topicCN: '购物',
    part: 'Part 1',
    question: 'Do you prefer shopping online or in physical stores?',
    questionCN: '你更喜欢网上购物还是在实体店购物？',
    modelAnswer: 'I prefer a mix of both online and in-store shopping. Online shopping is incredibly convenient—I can browse and purchase items from the comfort of my home, compare prices easily, and have products delivered right to my door. It\'s especially great for items like books, electronics, or when I know exactly what I want. However, there are times when I prefer physical stores, especially for clothing or shoes, where I can try things on and feel the quality. In-store shopping also provides a more tactile experience and allows for instant gratification—no waiting for delivery. I think each method has its advantages, and I choose based on what I\'m buying and my mood. For everyday items, online shopping is my go-to, but for special purchases or when I want to enjoy the shopping experience, I head to the stores.',
    modelAnswerCN: '我更喜欢网上购物和实体店购物相结合。网上购物非常方便——我可以在家舒适地浏览和购买商品，轻松比较价格，并让商品直接送到家门口。对于书籍、电子产品或我确切知道想要什么的物品来说尤其好。然而，有些时候我更喜欢实体店，尤其是对于衣服或鞋子，我可以试穿并感受质量。实体店购物还提供更直观的体验，并能即时满足——无需等待送货。我认为每种方式都有其优势，我会根据购买的物品和我的心情来选择。对于日常用品，网上购物是我的首选，但对于特殊购买或想享受购物体验时，我会去商店。'
  },
  {
    id: 31,
    topic: 'Transportation',
    topicCN: '交通',
    part: 'Part 1',
    question: 'What is your favorite mode of transportation?',
    questionCN: '你最喜欢的交通工具是什么？',
    modelAnswer: 'My favorite mode of transportation is the bicycle. I love cycling because it\'s eco-friendly, affordable, and good for my health. Riding a bike allows me to enjoy the outdoors and get some exercise while commuting or running errands. It\'s also a great way to explore my city and discover new places. I appreciate that it doesn\'t produce any emissions and helps reduce traffic congestion. On weekends, I often go on longer bike rides with friends, which is a fun and active way to spend time together. While I do use other forms of transportation like buses or cars when needed, cycling is my preferred choice for short to medium distances. It combines practicality with enjoyment, making every journey feel like an adventure.',
    modelAnswerCN: '我最喜欢的交通工具是自行车。我喜欢骑自行车，因为它环保、实惠且对我的健康有益。骑自行车让我在通勤或办事时享受户外并锻炼身体。这也是探索我的城市和发现新地方的好方法。我很欣赏它不产生任何排放并有助于减少交通拥堵。在周末，我经常和朋友一起进行更长距离的骑行，这是一起度过时光的有趣且活跃的方式。虽然我确实在需要时使用其他交通工具如公共汽车或汽车，但骑自行车是我短到中等距离的首选。它将实用性与乐趣相结合，让每次旅程都感觉像一次冒险。'
  },
  {
    id: 32,
    topic: 'Time Management',
    topicCN: '时间管理',
    part: 'Part 1',
    question: 'How do you manage your time?',
    questionCN: '你如何管理时间？',
    modelAnswer: 'I manage my time by using a combination of planning tools and prioritization. I start each week by creating a to-do list and scheduling important tasks. I use a digital calendar to keep track of appointments, deadlines, and meetings. I also prioritize tasks based on their urgency and importance—focusing on high-priority tasks first and delegating or postponing less important ones. Time blocking is another strategy I use, where I allocate specific time slots for different activities like work, study, exercise, and relaxation. I try to avoid procrastination by breaking large tasks into smaller, manageable steps. Additionally, I make sure to include breaks and downtime in my schedule to avoid burnout. Being organized and disciplined helps me make the most of my time and achieve my goals without feeling overwhelmed.',
    modelAnswerCN: '我通过结合使用规划工具和优先级来管理我的时间。我每周开始时都会创建待办事项清单并安排重要任务。我使用数字日历来跟踪约会、截止日期和会议。我还根据任务的紧迫性和重要性来确定优先级——首先关注高优先级任务，并委托或推迟不太重要的任务。时间块是我使用的另一种策略，我为不同的活动如工作、学习、锻炼和放松分配特定的时间段。我通过将大型任务分解为更小、更易管理的步骤来尽量避免拖延。此外，我确保在我的日程安排中包括休息和休息时间，以避免倦怠。有条理和自律有助于我充分利用时间并实现目标，而不会感到不知所措。'
  },
  {
    id: 33,
    topic: 'Learning',
    topicCN: '学习',
    part: 'Part 1',
    question: 'Do you prefer learning alone or in a group?',
    questionCN: '你更喜欢独自学习还是小组学习？',
    modelAnswer: 'I prefer a balance between learning alone and in a group. Studying alone allows me to focus deeply and work at my own pace. I can concentrate on difficult topics without distractions and spend as much time as I need to understand concepts. It also helps me develop self-discipline and independent thinking skills. However, group learning has its advantages too. Discussing ideas with classmates or peers provides different perspectives and helps clarify confusing concepts. Group work encourages collaboration and can make learning more engaging and fun. I find that for subjects like language learning or problem-solving, group activities are particularly beneficial. For more complex or personal study goals, working alone is better. Ultimately, I think the best approach is to combine both methods depending on the subject and learning objectives.',
    modelAnswerCN: '我更喜欢独自学习和小组学习之间的平衡。独自学习让我能够深入专注并按照自己的节奏学习。我可以不受干扰地专注于困难的主题，并花尽可能多的时间来理解概念。它还有助于培养自律和独立思考能力。然而，小组学习也有其优势。与同学或同龄人讨论想法提供了不同的视角，并有助于澄清令人困惑的概念。小组工作鼓励协作，可以使学习更具吸引力和乐趣。我发现对于语言学习或解决问题等科目，小组活动特别有益。对于更复杂或个人的学习目标，独自学习更好。最终，我认为最好的方法是根据学科和学习目标结合两种方法。'
  },
  {
    id: 34,
    topic: 'Changes',
    topicCN: '变化',
    part: 'Part 1',
    question: 'Do you like changes?',
    questionCN: '你喜欢变化吗？',
    modelAnswer: 'I have mixed feelings about changes. On one hand, I appreciate that change is inevitable and often brings new opportunities and growth. Changes can push us out of our comfort zones and help us develop new skills and perspectives. I enjoy the excitement and challenge that come with trying new things or adapting to new situations. On the other hand, I also value stability and routine. Familiarity provides a sense of security and comfort. Major changes can be stressful, especially when they disrupt our daily lives or require significant adjustments. Overall, I think it\'s important to embrace changes that bring positive growth while also maintaining a sense of stability in our lives. Being adaptable is a valuable skill, but it\'s also okay to appreciate the comfort of routine.',
    modelAnswerCN: '我对变化有复杂的感受。一方面，我意识到变化是不可避免的，并且常常带来新的机会和成长。变化可以推动我们走出舒适区，帮助我们发展新的技能和视角。我喜欢尝试新事物或适应新环境带来的兴奋和挑战。另一方面，我也重视稳定和日常。熟悉感提供安全感和舒适感。重大变化可能会带来压力，特别是当它们扰乱我们的日常生活或需要重大调整时。总的来说，我认为在拥抱带来积极成长的变化的同时，保持生活中的稳定感很重要。适应能力是一项宝贵的技能，但欣赏日常的舒适也是可以的。'
  },
  {
    id: 35,
    topic: 'Daily Routine',
    topicCN: '日常作息',
    part: 'Part 1',
    question: 'Can you describe your daily routine?',
    questionCN: '你能描述一下你的日常作息吗？',
    modelAnswer: 'My daily routine usually starts with waking up early, around 7 AM. I like to start my day with a cup of coffee and some light stretching or yoga to wake up my body and mind. After that, I spend some time reading or listening to the news to stay informed. For breakfast, I usually have something simple like oatmeal or toast with fruit. Then I start my work or studies, which takes up most of my morning. I take a short break around mid-morning to stretch or have a snack. After lunch, I continue with my tasks, and in the afternoon, I try to incorporate some physical activity—either a walk outside or a quick workout. In the evening, I like to unwind by cooking dinner, watching a show, or spending time with family. Before bed, I read for about 30 minutes to relax. I usually go to bed around 11 PM, aiming for 8 hours of sleep. I find having a consistent routine helps me stay organized and productive while still allowing time for rest and relaxation.',
    modelAnswerCN: '我的日常作息通常从早上7点左右早起开始。我喜欢以一杯咖啡和一些轻度拉伸或瑜伽开始新的一天，让身心醒来。之后，我会花一些时间阅读或听新闻以保持信息灵通。早餐我通常吃一些简单的东西，比如燕麦片或配水果的吐司。然后我开始工作或学习，这占据了我上午的大部分时间。上午中段我会短暂休息一下，拉伸或吃点零食。午饭后，我继续我的任务，下午，我尝试加入一些体育活动——要么在外面散步，要么快速锻炼。晚上，我喜欢通过做饭、看节目或与家人共度时光来放松。睡前，我会阅读大约30分钟来放松。我通常在晚上11点左右上床睡觉，目标是睡8小时。我发现保持一致的作息有助于我保持有条理和高效，同时仍然有时间休息和放松。'
  },
  {
    id: 36,
    topic: 'New Year',
    topicCN: '新年',
    part: 'Part 2',
    question: 'Describe how you usually celebrate New Year.',
    questionCN: '描述你通常如何庆祝新年。',
    modelAnswer: 'I usually celebrate New Year with my family and close friends. On New Year\'s Eve, we typically gather at my parents\' house for a big dinner. My mom cooks a variety of traditional dishes, and we all help prepare the meal together. After dinner, we watch the countdown on TV and share stories from the past year. We also play games or do a puzzle together to pass the time. As midnight approaches, we get ready with sparklers and champagne. When the clock strikes twelve, we toast to the new year, exchange hugs, and make wishes for the coming year. The next day, we often have a lazy morning, then go for a walk or visit relatives. What I love most about New Year\'s is the sense of togetherness and hope for the future. It\'s a time to reflect on the past and look forward to new beginnings.',
    modelAnswerCN: '我通常与家人和亲密朋友一起庆祝新年。除夕夜，我们通常会聚集在父母家吃一顿丰盛的晚餐。妈妈会做各种传统菜肴，我们都会一起帮忙准备饭菜。晚饭后，我们在电视上看倒计时，并分享过去一年的故事。我们还一起玩游戏或拼图来打发时间。午夜临近时，我们准备好烟花和香槟。当钟声敲响十二点时，我们举杯庆祝新年，互相拥抱，并为来年许愿。第二天，我们通常会度过一个慵懒的早晨，然后去散步或拜访亲戚。我最喜欢新年的是团聚感和对未来的希望。这是反思过去并期待新开始的时刻。'
  },
  {
    id: 37,
    topic: 'Travel',
    topicCN: '旅行',
    part: 'Part 2',
    question: 'Describe a trip you took that didn\'t go as planned.',
    questionCN: '描述一次你计划外的旅行。',
    modelAnswer: 'Last year, I planned a weekend trip to a coastal town with my friends. We were looking forward to relaxing on the beach and exploring the local area. However, when we arrived, we discovered that a storm was approaching. The weather turned bad quickly—heavy rain and strong winds forced us to stay indoors most of the time. Our beach plans were ruined, and we couldn\'t do many of the activities we had planned. At first, we were disappointed, but we decided to make the best of it. We played board games, cooked together, and told stories late into the night. We even found a cozy café nearby where we spent hours chatting and trying local desserts. Although the trip didn\'t go as planned, we ended up having a great time together. It taught me that sometimes the unexpected moments can be the most memorable, and that spending quality time with friends is more important than sticking to a rigid itinerary.',
    modelAnswerCN: '去年，我和朋友们计划去一个沿海城镇度周末。我们期待在海滩上放松并探索当地。然而，当我们到达时，我们发现一场风暴即将来临。天气很快变坏——大雨和强风迫使我们大部分时间待在室内。我们的海滩计划泡汤了，我们无法做许多计划好的活动。起初，我们很失望，但我们决定尽量享受。我们玩棋盘游戏、一起做饭，并深夜讲故事。我们甚至在附近找到了一家温馨的咖啡馆，在那里我们花了几个小时聊天并尝试当地的甜点。尽管旅行没有按计划进行，但我们最终在一起度过了愉快的时光。它教会我，有时意想不到的时刻可能是最难忘的，与朋友共度美好时光比坚持严格的行程更重要。'
  },
  {
    id: 38,
    topic: 'Sports',
    topicCN: '运动',
    part: 'Part 2',
    question: 'Describe a sport you would like to learn.',
    questionCN: '描述一项你想学的运动。',
    modelAnswer: 'A sport I would love to learn is surfing. I\'ve always been fascinated by the idea of riding waves and being out in the ocean. Surfing seems like the perfect combination of physical challenge and connection with nature. I imagine the feeling of catching a wave and gliding across the water would be incredibly exhilarating. I\'ve seen videos of surfers and always admired their skill and the sense of freedom they seem to have. I think learning to surf would require patience and perseverance, as it takes time to master the balance and technique. I also love being in the ocean, so combining my love for the sea with a new skill would be wonderful. I hope to take surf lessons someday, maybe on a tropical vacation, and experience the thrill of riding my first wave.',
    modelAnswerCN: '我想学的运动是冲浪。我一直对冲浪和出海的想法着迷。冲浪似乎是身体挑战与自然联系的完美结合。我想象着抓住波浪并在水面上滑行的感觉会令人难以置信地振奋。我看过冲浪者的视频，总是钦佩他们的技巧和他们似乎拥有的自由感。我认为学习冲浪需要耐心和毅力，因为掌握平衡和技巧需要时间。我也喜欢在海洋里，所以将我对海洋的热爱与一项新技能结合起来会很棒。我希望有一天能上冲浪课，也许在热带度假时，并体验第一次冲浪的快感。'
  },
  {
    id: 39,
    topic: 'Art',
    topicCN: '艺术',
    part: 'Part 2',
    question: 'Describe a piece of art that you like.',
    questionCN: '描述一件你喜欢的艺术品。',
    modelAnswer: 'One piece of art that I truly admire is "Starry Night" by Vincent van Gogh. I first saw it in an art book when I was a child, and it has stayed with me ever since. The painting depicts a swirling night sky filled with stars and a crescent moon above a quiet village. What I love most about it is the vibrant colors and the dynamic brushstrokes that create a sense of movement and emotion. The deep blues and purples mixed with bright yellows create a mesmerizing contrast. Van Gogh\'s use of thick paint gives the artwork texture and depth, making it feel almost alive. The painting evokes a sense of wonder and tranquility, as if looking at a magical night sky. It\'s a masterpiece that continues to inspire artists and art lovers alike, and I feel lucky to have seen it in person at the Museum of Modern Art in New York.',
    modelAnswerCN: '我真正欣赏的一件艺术品是文森特·梵高的《星夜》。我小时候在一本艺术书上第一次看到它，从那以后它一直留在我的记忆中。这幅画描绘了一个旋转的夜空，星星和新月悬在安静的村庄上方。我最喜欢它的是充满活力的色彩和动态的笔触，创造出一种运动和情感的感觉。深蓝色和紫色与明亮的黄色混合在一起，形成迷人的对比。梵高使用厚重颜料赋予艺术品质感和深度，使其感觉几乎栩栩如生。这幅画唤起了一种惊奇和宁静的感觉，仿佛在看一个神奇的夜空。这是一件继续激励艺术家和艺术爱好者的杰作，我很幸运能在纽约现代艺术博物馆亲眼看到它。'
  },
  {
    id: 40,
    topic: 'Language',
    topicCN: '语言',
    part: 'Part 2',
    question: 'Describe a language you would like to learn.',
    questionCN: '描述一门你想学的语言。',
    modelAnswer: 'A language I would love to learn is Japanese. I\'ve always been interested in Japanese culture, from its rich history and traditions to its modern pop culture. Learning Japanese would allow me to better understand the nuances of Japanese art, literature, and cinema. I find the writing system fascinating—with its combination of kanji, hiragana, and katakana. It would be challenging, but I think mastering it would be incredibly rewarding. I also love Japanese cuisine, and being able to read menus and communicate with locals when traveling to Japan would enhance my experience. Additionally, learning Japanese would open up opportunities to connect with Japanese speakers and gain insights into a different way of thinking. I plan to start with basic lessons and practice regularly, focusing on speaking and listening skills first. I believe learning a new language is not just about words, but about understanding a whole new culture and perspective.',
    modelAnswerCN: '我想学的语言是日语。我一直对日本文化感兴趣，从其丰富的历史和传统到现代流行文化。学习日语将使我能够更好地理解日本艺术、文学和电影的细微差别。我发现书写系统很迷人——结合了汉字、平假名和片假名。这将是一项挑战，但我认为掌握它将是非常值得的。我也喜欢日本料理，能够在去日本旅行时阅读菜单并与当地人交流将增强我的体验。此外，学习日语将为与日语使用者建立联系并深入了解不同的思维方式提供机会。我计划从基础课程开始，定期练习，首先专注于口语和听力技能。我相信学习一门新语言不仅仅是学习单词，而是理解一种全新的文化和视角。'
  },
  {
    id: 41,
    topic: 'Jobs',
    topicCN: '工作',
    part: 'Part 3',
    question: 'What qualities do you think are important for a good leader?',
    questionCN: '你认为一个好的领导者应该具备哪些品质？',
    modelAnswer: 'A good leader should possess several key qualities. First and foremost, they need strong communication skills—being able to clearly articulate their vision and listen actively to their team members. Empathy is also crucial; a leader should understand and care about the needs and feelings of their team. Integrity and honesty are essential for building trust and credibility. A good leader should lead by example, demonstrating the values and work ethic they expect from others. They should also be decisive, able to make difficult decisions when necessary, while remaining open to feedback and different perspectives. Adaptability is important in today\'s fast-changing world, as leaders need to navigate challenges and adjust strategies accordingly. Additionally, a good leader should be supportive, encouraging their team members to grow and develop their skills. Finally, having a clear vision and the ability to inspire others to work towards a common goal is what sets great leaders apart.',
    modelAnswerCN: '一个好的领导者应该具备几个关键品质。首先，他们需要强大的沟通技巧——能够清晰地表达他们的愿景并积极倾听团队成员的意见。同理心也很重要；领导者应该理解并关心团队的需求和感受。正直和诚实对于建立信任和信誉至关重要。一个好的领导者应该以身作则，展示他们期望他人具备的价值观和职业道德。他们也应该果断，能够在必要时做出艰难的决定，同时保持开放的反馈和不同的观点。在当今快速变化的世界中，适应能力很重要，因为领导者需要应对挑战并相应地调整策略。此外，一个好的领导者应该是支持性的，鼓励团队成员成长和发展他们的技能。最后，有一个清晰的愿景和激励他人朝着共同目标努力的能力是伟大领导者的区别所在。'
  },
  {
    id: 42,
    topic: 'Media',
    topicCN: '媒体',
    part: 'Part 3',
    question: 'How does social media influence people\'s lives?',
    questionCN: '社交媒体如何影响人们的生活？',
    modelAnswer: 'Social media has a profound impact on people\'s lives, both positive and negative. On the positive side, it connects people across the globe, allowing friends and family to stay in touch regardless of distance. It provides a platform for sharing ideas, creativity, and information, enabling individuals to express themselves and build communities around shared interests. Social media also serves as a powerful tool for activism and raising awareness about important issues. However, there are downsides too. Excessive use can lead to addiction and negatively impact mental health, causing feelings of anxiety, depression, and low self-esteem, especially when comparing oneself to others\' curated online lives. It can also spread misinformation rapidly, leading to confusion and division. Additionally, privacy concerns are a significant issue, as personal data is often collected and used without consent. Overall, social media is a double-edged sword—it has the power to connect and empower, but it requires mindful use to avoid its negative effects.',
    modelAnswerCN: '社交媒体对人们的生活产生深远影响，既有积极的一面，也有消极的一面。在积极方面，它连接全球各地的人们，让朋友和家人无论距离远近都能保持联系。它提供了一个分享想法、创意和信息的平台，使个人能够表达自己并围绕共同兴趣建立社区。社交媒体也是行动主义和提高对重要问题认识的强大工具。然而，也有缺点。过度使用会导致成瘾并对心理健康产生负面影响，导致焦虑、抑郁和自卑感，尤其是在将自己与他人精心策划的在线生活进行比较时。它还可以迅速传播错误信息，导致混乱和分裂。此外，隐私问题是一个重大问题，因为个人数据经常在未经同意的情况下被收集和使用。总的来说，社交媒体是一把双刃剑——它有连接和赋权的力量，但需要谨慎使用以避免其负面影响。'
  },
  {
    id: 43,
    topic: 'Health',
    topicCN: '健康',
    part: 'Part 3',
    question: 'What can governments do to promote public health?',
    questionCN: '政府可以做些什么来促进公共健康？',
    modelAnswer: 'Governments play a crucial role in promoting public health through various initiatives. First, they can invest in healthcare infrastructure, ensuring that quality medical services are accessible to all citizens, especially in underserved areas. Implementing public health campaigns to raise awareness about healthy lifestyles, such as proper nutrition, regular exercise, and mental health, is also important. Governments can also regulate industries that impact health, such as food and beverage companies, to ensure products are safe and meet nutritional standards. Funding research into diseases and public health issues can lead to better treatments and prevention strategies. Additionally, creating public spaces like parks and bike lanes encourages physical activity. Governments can also implement policies to reduce pollution and improve air quality, which directly affects respiratory health. Finally, providing access to affordable healthcare and health education programs empowers individuals to take control of their own health. By combining these approaches, governments can create a healthier society for all.',
    modelAnswerCN: '政府通过各种举措在促进公共健康方面发挥着至关重要的作用。首先，他们可以投资于医疗基础设施，确保所有公民，特别是服务不足地区的公民都能获得优质医疗服务。实施公共卫生运动以提高对健康生活方式的认识，如适当的营养、定期锻炼和心理健康，也很重要。政府还可以监管影响健康的行业，如食品和饮料公司，以确保产品安全并符合营养标准。资助疾病和公共卫生问题的研究可以带来更好的治疗和预防策略。此外，创建公园和自行车道等公共空间鼓励体育活动。政府还可以实施政策来减少污染和改善空气质量，这直接影响呼吸系统健康。最后，提供负担得起的医疗保健和健康教育计划使个人能够掌控自己的健康。通过结合这些方法，政府可以为所有人创造一个更健康的社会。'
  },
  {
    id: 44,
    topic: 'Education',
    topicCN: '教育',
    part: 'Part 3',
    question: 'What are the advantages of online learning?',
    questionCN: '在线学习有什么优势？',
    modelAnswer: 'Online learning offers several significant advantages. First, it provides flexibility—students can learn at their own pace and schedule, making education accessible to those with work or family commitments. It also eliminates geographical barriers, allowing students to access courses from top universities worldwide without relocating. Online learning is often more cost-effective, as it reduces expenses related to travel, accommodation, and physical materials. Additionally, it offers a wide range of course options, including specialized subjects that may not be available locally. Interactive features like discussion forums and video lectures enhance the learning experience, and digital resources are often updated more frequently than traditional textbooks. Finally, online learning helps develop valuable skills like self-discipline, time management, and digital literacy, which are essential in today\'s technology-driven world.',
    modelAnswerCN: '在线学习提供了几个显著的优势。首先，它提供了灵活性——学生可以按照自己的节奏和时间表学习，使有工作或家庭责任的人能够接受教育。它还消除了地理障碍，使学生无需搬迁即可访问全球顶尖大学的课程。在线学习通常更具成本效益，因为它减少了与旅行、住宿和实体材料相关的费用。此外，它提供了广泛的课程选择，包括当地可能没有的专业科目。讨论论坛和视频讲座等互动功能增强了学习体验，数字资源通常比传统教科书更新更频繁。最后，在线学习有助于培养自律、时间管理和数字素养等宝贵技能，这些在当今技术驱动的世界中至关重要。'
  },
  {
    id: 45,
    topic: 'Technology',
    topicCN: '科技',
    part: 'Part 3',
    question: 'Is technology making our lives easier or more complicated?',
    questionCN: '科技是让我们的生活更轻松还是更复杂？',
    modelAnswer: 'Technology has both simplified and complicated our lives in different ways. On one hand, it has made many tasks easier and more efficient. Communication is instant, information is readily accessible, and everyday tasks like shopping, banking, and transportation are more convenient. Technology has also improved healthcare, education, and productivity. On the other hand, technology has introduced new complexities. We face information overload, cybersecurity threats, and constant connectivity that can lead to stress and burnout. There are also concerns about privacy and the digital divide. Additionally, while technology automates many tasks, it also requires constant learning to keep up with new tools and platforms. Overall, technology is a double-edged sword—it simplifies many aspects of life but introduces new challenges that require adaptation and mindful use.',
    modelAnswerCN: '科技在不同方面既简化了也复杂化了我们的生活。一方面，它使许多任务变得更轻松、更高效。沟通是即时的，信息易于获取，购物、银行和交通等日常任务更加方便。科技也改善了医疗保健、教育和生产力。另一方面，科技带来了新的复杂性。我们面临信息过载、网络安全威胁和持续连接，这可能导致压力和倦怠。还有隐私和数字鸿沟的担忧。此外，虽然技术自动化了许多任务，但它也需要不断学习以跟上新工具和平台的步伐。总的来说，科技是一把双刃剑——它简化了生活的许多方面，但带来了需要适应和谨慎使用的新挑战。'
  },
  {
    id: 46,
    topic: 'Family',
    topicCN: '家庭',
    part: 'Part 3',
    question: 'How has family life changed in recent years?',
    questionCN: '近年来家庭生活发生了怎样的变化？',
    modelAnswer: 'Family life has undergone significant changes in recent years. One major shift is the increasing number of dual-income families, as more women have entered the workforce. This has led to changes in traditional gender roles, with both parents sharing household responsibilities more equally. Family structures have also become more diverse, with an increase in single-parent families, blended families, and same-sex parent families. Technology has also impacted family life—while it helps families stay connected through video calls and messaging, it can also lead to less face-to-face interaction. Additionally, there has been a trend towards smaller families, with fewer children per household. Despite these changes, the importance of family remains strong, though the ways families interact and support each other have evolved to adapt to modern society.',
    modelAnswerCN: '近年来家庭生活发生了重大变化。一个主要变化是双收入家庭的数量增加，因为越来越多的女性进入劳动力市场。这导致了传统性别角色的变化，父母双方更平等地分担家务责任。家庭结构也变得更加多样化，单亲家庭、混合家庭和同性父母家庭有所增加。科技也影响了家庭生活——虽然它通过视频通话和消息传递帮助家庭保持联系，但它也可能导致面对面互动减少。此外，出现了家庭规模变小的趋势，每个家庭的孩子数量减少。尽管发生了这些变化，但家庭的重要性仍然很强，尽管家庭互动和相互支持的方式已经演变以适应现代社会。'
  },
  {
    id: 47,
    topic: 'Environment',
    topicCN: '环境',
    part: 'Part 3',
    question: 'Why is it important to protect endangered species?',
    questionCN: '为什么保护濒危物种很重要？',
    modelAnswer: 'Protecting endangered species is crucial for several reasons. First, every species plays a unique role in maintaining ecological balance. When a species becomes extinct, it can disrupt entire ecosystems, affecting other plants and animals that depend on it. Biodiversity ensures ecosystem resilience—greater diversity means ecosystems are better able to withstand changes like climate change or disease. Endangered species also have intrinsic value; each living organism has a right to exist, regardless of its usefulness to humans. Additionally, many species provide important ecosystem services, such as pollination, pest control, and water purification. From a practical standpoint, protecting endangered species can also preserve potential sources of medicine, food, and other resources. Finally, protecting endangered species is a moral responsibility—we have a duty to safeguard the planet for future generations and maintain the rich diversity of life on Earth.',
    modelAnswerCN: '保护濒危物种至关重要，原因有几个。首先，每个物种在维持生态平衡方面都发挥着独特的作用。当一个物种灭绝时，它可能会破坏整个生态系统，影响依赖它的其他植物和动物。生物多样性确保生态系统的复原力——更大的多样性意味着生态系统能够更好地抵御气候变化或疾病等变化。濒危物种也具有内在价值；每个生物都有生存的权利，无论它对人类有什么用处。此外，许多物种提供重要的生态系统服务，如授粉、害虫控制和水净化。从实际角度来看，保护濒危物种还可以保护潜在的药物、食品和其他资源来源。最后，保护濒危物种是一种道德责任——我们有责任为子孙后代保护地球，并维护地球上丰富的生命多样性。'
  },
  {
    id: 48,
    topic: 'Culture',
    topicCN: '文化',
    part: 'Part 3',
    question: 'Should governments fund the arts?',
    questionCN: '政府应该资助艺术吗？',
    modelAnswer: 'Governments should definitely fund the arts for several compelling reasons. First, the arts are essential for cultural preservation and expression. They help maintain traditions, celebrate diversity, and foster a sense of identity within communities. Funding the arts ensures that cultural heritage is passed down to future generations. Second, the arts contribute significantly to economic growth. They create jobs in various sectors, attract tourism, and stimulate local economies. Third, the arts have educational benefits—exposure to music, theater, and visual arts enhances creativity, critical thinking, and emotional intelligence, especially in children. Additionally, the arts provide social benefits by promoting community engagement and well-being. They offer a platform for dialogue, challenge societal norms, and encourage empathy. Finally, supporting the arts is an investment in human capital, as creative industries drive innovation and enrich the quality of life for all citizens.',
    modelAnswerCN: '政府绝对应该资助艺术，原因有几个。首先，艺术对于文化保护和表达至关重要。它们有助于维护传统、庆祝多样性并在社区内培养认同感。资助艺术确保文化遗产传承给后代。其次，艺术对经济增长贡献巨大。它们在各个部门创造就业机会，吸引旅游业，并刺激地方经济。第三，艺术具有教育益处——接触音乐、戏剧和视觉艺术可以增强创造力、批判性思维和情商，尤其是对儿童而言。此外，艺术通过促进社区参与和福祉提供社会效益。它们提供了一个对话平台，挑战社会规范，并鼓励同理心。最后，支持艺术是对人力资本的投资，因为创意产业推动创新并提高所有公民的生活质量。'
  },
  {
    id: 49,
    topic: 'Travel',
    topicCN: '旅行',
    part: 'Part 3',
    question: 'What are the benefits of international travel?',
    questionCN: '国际旅行有什么好处？',
    modelAnswer: 'International travel offers numerous benefits that enrich both personal and professional life. First, it broadens one\'s perspective by exposing travelers to different cultures, traditions, and ways of thinking. It fosters cultural awareness and empathy, breaking down stereotypes and promoting global understanding. Second, international travel enhances language skills. Immersing oneself in a foreign language environment accelerates learning and improves fluency. Third, it promotes personal growth by pushing individuals out of their comfort zones and building confidence, adaptability, and problem-solving skills. Travel also creates lasting memories and strengthens relationships, whether traveling with friends, family, or meeting new people. Professionally, international travel can expand one\'s network, provide insights into global markets, and enhance career prospects. Finally, it encourages curiosity and a lifelong love of learning, as every journey brings new discoveries and experiences.',
    modelAnswerCN: '国际旅行提供了许多丰富个人和职业生活的好处。首先，它通过让旅行者接触不同的文化、传统和思维方式来拓宽视野。它培养文化意识和同理心，打破刻板印象并促进全球理解。其次，国际旅行提高语言技能。沉浸在外语环境中可以加速学习并提高流利度。第三，它通过推动个人走出舒适区并培养信心、适应能力和解决问题的能力来促进个人成长。旅行还创造持久的记忆并加强人际关系，无论是与朋友、家人一起旅行还是结识新朋友。在职业方面，国际旅行可以扩大个人人脉，提供对全球市场的见解，并增强职业前景。最后，它鼓励好奇心和终身学习的热爱，因为每一次旅程都会带来新的发现和体验。'
  },
  {
    id: 50,
    topic: 'Work',
    topicCN: '工作',
    part: 'Part 3',
    question: 'Is it better to work for a large company or a small company?',
    questionCN: '在大公司工作好还是在小公司工作好？',
    modelAnswer: 'Both large and small companies offer distinct advantages, and the choice depends on individual preferences and career goals. Large companies typically provide more stability, comprehensive benefits packages, and opportunities for advancement within structured career paths. They often have greater resources for training, mentorship, and professional development. Large companies also offer more exposure to diverse projects and global networks. On the other hand, small companies often provide more autonomy and opportunities to take on varied responsibilities, allowing employees to develop a broader skill set. The work environment is usually more collaborative and personal, with closer relationships between colleagues. Small companies can also be more agile and innovative, allowing employees to have a direct impact on the company\'s success. Ultimately, the best choice depends on whether one values stability and structure (large company) or flexibility and autonomy (small company).',
    modelAnswerCN: '大公司和小公司都提供明显的优势，选择取决于个人偏好和职业目标。大公司通常提供更高的稳定性、全面的福利套餐以及在结构化职业道路上晋升的机会。他们通常拥有更多的培训、指导和专业发展资源。大公司还提供更多接触多样化项目和全球网络的机会。另一方面，小公司通常提供更多自主权和承担各种职责的机会，允许员工发展更广泛的技能。工作环境通常更具协作性和个人化，同事之间关系更密切。小公司也可以更敏捷和创新，让员工能够直接影响公司的成功。最终，最佳选择取决于个人是重视稳定性和结构（大公司）还是灵活性和自主权（小公司）。'
  }
];