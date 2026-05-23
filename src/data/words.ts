export interface Word {
  id: number;
  word: string;
  phonetic: string;
  meaning: string;
  example: string;
  level: 'IELTS5' | 'IELTS6' | 'IELTS7' | 'IELTS8';
  category: string;
}

export const ieltsWords: Word[] = [
  {
    id: 1,
    word: 'accommodate',
    phonetic: '/əˈkɒmədeɪt/',
    meaning: 'v. 容纳；适应；提供住宿',
    example: 'The hotel can accommodate up to 200 guests.',
    level: 'IELTS6',
    category: '动词'
  },
  {
    id: 2,
    word: 'substantial',
    phonetic: '/səbˈstænʃl/',
    meaning: 'adj. 大量的；实质的；坚固的',
    example: 'There has been a substantial increase in sales.',
    level: 'IELTS6',
    category: '形容词'
  },
  {
    id: 3,
    word: 'phenomenon',
    phonetic: '/fɪˈnɒmɪnən/',
    meaning: 'n. 现象；非凡的人或事',
    example: 'The Northern Lights is a natural phenomenon.',
    level: 'IELTS6',
    category: '名词'
  },
  {
    id: 4,
    word: 'comprehensive',
    phonetic: '/ˌkɒmprɪˈhensɪv/',
    meaning: 'adj. 综合的；全面的；有理解力的',
    example: 'We need a comprehensive approach to solve this problem.',
    level: 'IELTS7',
    category: '形容词'
  },
  {
    id: 5,
    word: 'demonstrate',
    phonetic: '/ˈdemənstreɪt/',
    meaning: 'v. 证明；展示；示威',
    example: 'The experiment demonstrates the theory clearly.',
    level: 'IELTS6',
    category: '动词'
  },
  {
    id: 6,
    word: 'significant',
    phonetic: '/sɪɡˈnɪfɪkənt/',
    meaning: 'adj. 重大的；显著的；有意义的',
    example: 'There is a significant difference between the two methods.',
    level: 'IELTS6',
    category: '形容词'
  },
  {
    id: 7,
    word: 'perspective',
    phonetic: '/pəˈspektɪv/',
    meaning: 'n. 观点；视角；透视法',
    example: 'Try to see things from a different perspective.',
    level: 'IELTS6',
    category: '名词'
  },
  {
    id: 8,
    word: 'consequence',
    phonetic: '/ˈkɒnsɪkwəns/',
    meaning: 'n. 结果；后果；重要性',
    example: 'Every action has its consequences.',
    level: 'IELTS6',
    category: '名词'
  },
  {
    id: 9,
    word: 'environment',
    phonetic: '/ɪnˈvaɪrənmənt/',
    meaning: 'n. 环境；周围状况；自然环境',
    example: 'We must protect the natural environment.',
    level: 'IELTS5',
    category: '名词'
  },
  {
    id: 10,
    word: 'contribute',
    phonetic: '/kənˈtrɪbjuːt/',
    meaning: 'v. 贡献；捐献；投稿',
    example: 'Everyone should contribute to society.',
    level: 'IELTS6',
    category: '动词'
  },
  {
    id: 11,
    word: 'fundamental',
    phonetic: '/ˌfʌndəˈmentl/',
    meaning: 'adj. 基本的；根本的；重要的',
    example: 'This is a fundamental principle of physics.',
    level: 'IELTS6',
    category: '形容词'
  },
  {
    id: 12,
    word: 'interaction',
    phonetic: '/ˌɪntərˈækʃn/',
    meaning: 'n. 相互作用；互动；交流',
    example: 'Social interaction is important for mental health.',
    level: 'IELTS7',
    category: '名词'
  },
  {
    id: 13,
    word: 'inevitable',
    phonetic: '/ɪnˈevɪtəbl/',
    meaning: 'adj. 不可避免的；必然的',
    example: 'Change is inevitable in life.',
    level: 'IELTS7',
    category: '形容词'
  },
  {
    id: 14,
    word: 'potential',
    phonetic: '/pəˈtenʃl/',
    meaning: 'adj. 潜在的；n. 潜力',
    example: 'The project has great potential for success.',
    level: 'IELTS6',
    category: '形容词/名词'
  },
  {
    id: 15,
    word: 'approach',
    phonetic: '/əˈprəʊtʃ/',
    meaning: 'v./n. 接近；方法；途径',
    example: 'We need a new approach to this problem.',
    level: 'IELTS5',
    category: '动词/名词'
  },
  {
    id: 16,
    word: 'influence',
    phonetic: '/ˈɪnfluəns/',
    meaning: 'n./v. 影响；势力',
    example: 'Parents have a great influence on their children.',
    level: 'IELTS5',
    category: '名词/动词'
  },
  {
    id: 17,
    word: 'opportunity',
    phonetic: '/ˌɒpəˈtjuːnəti/',
    meaning: 'n. 机会；时机',
    example: 'This is a great opportunity for growth.',
    level: 'IELTS5',
    category: '名词'
  },
  {
    id: 18,
    word: 'technology',
    phonetic: '/tekˈnɒlədʒi/',
    meaning: 'n. 技术；科技',
    example: 'Modern technology has changed our lives.',
    level: 'IELTS5',
    category: '名词'
  },
  {
    id: 19,
    word: 'benefit',
    phonetic: '/ˈbenɪfɪt/',
    meaning: 'n./v. 利益；好处；有益于',
    example: 'Regular exercise has many health benefits.',
    level: 'IELTS5',
    category: '名词/动词'
  },
  {
    id: 20,
    word: 'challenge',
    phonetic: '/ˈtʃælɪndʒ/',
    meaning: 'n./v. 挑战；质疑',
    example: 'Life is full of challenges.',
    level: 'IELTS5',
    category: '名词/动词'
  },
  {
    id: 21,
    word: 'globalization',
    phonetic: '/ˌɡləʊbəlaɪˈzeɪʃn/',
    meaning: 'n. 全球化',
    example: 'Globalization has increased international trade.',
    level: 'IELTS7',
    category: '名词'
  },
  {
    id: 22,
    word: 'sustainability',
    phonetic: '/səˌsteɪnəˈbɪləti/',
    meaning: 'n. 可持续性；永续性',
    example: 'Sustainability is crucial for future generations.',
    level: 'IELTS7',
    category: '名词'
  },
  {
    id: 23,
    word: 'innovation',
    phonetic: '/ˌɪnəˈveɪʃn/',
    meaning: 'n. 创新；革新',
    example: 'Innovation drives economic growth.',
    level: 'IELTS7',
    category: '名词'
  },
  {
    id: 24,
    word: 'collaborate',
    phonetic: '/kəˈlæbəreɪt/',
    meaning: 'v. 合作；协作',
    example: 'We need to collaborate to achieve our goals.',
    level: 'IELTS7',
    category: '动词'
  },
  {
    id: 25,
    word: 'analyze',
    phonetic: '/ˈænəlaɪz/',
    meaning: 'v. 分析；解析',
    example: 'Let me analyze the data first.',
    level: 'IELTS6',
    category: '动词'
  }
];

export const wordCategories = ['全部', '动词', '名词', '形容词', '形容词/名词', '动词/名词'];
export const wordLevels = ['全部', 'IELTS5', 'IELTS6', 'IELTS7', 'IELTS8'];
