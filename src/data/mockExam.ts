export interface ExamQuestion {
  id: number;
  type: 'listening' | 'reading' | 'writing' | 'speaking';
  section: number;
  question: string;
  options?: string[];
  correctAnswer?: string;
  imageUrl?: string;
  audioUrl?: string;
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

export const mockExams: Exam[] = [
  {
    id: 1,
    title: '雅思全真模拟考试 1',
    year: 2024,
    month: 'March',
    difficulty: 'medium',
    totalTime: 180,
    questions: [
      // Listening Section
      {
        id: 1,
        type: 'listening',
        section: 1,
        question: 'Listen to the conversation and answer the questions.',
        audioUrl: 'https://example.com/audio1.mp3',
        timeLimit: 30,
        tips: ['仔细听数字和拼写', '注意同义词替换'],
      },
      // Reading Section
      {
        id: 2,
        type: 'reading',
        section: 1,
        question: 'Read the following passage and answer the questions.',
        correctAnswer: 'B',
        timeLimit: 60,
        tips: ['先看题目再读文章', '注意关键词定位'],
      },
      // Writing Task 1
      {
        id: 3,
        type: 'writing',
        section: 1,
        question: 'The chart below shows the percentage of households with access to technology in the UK between 1996 and 2003.',
        timeLimit: 20,
        bandScoreGuide: 'Task Achievement > Coherence & Cohesion > Lexical Resource > Grammatical Range',
        tips: ['描述趋势变化', '进行数据对比', '包含最高最低点'],
      },
      // Writing Task 2
      {
        id: 4,
        type: 'writing',
        section: 2,
        question: 'Some people think that schools should teach children how to be good citizens and workers, rather than only focus on academic subjects. To what extent do you agree or disagree?',
        timeLimit: 40,
        bandScoreGuide: 'Task Response > Coherence & Cohesion > Lexical Resource > Grammatical Range',
        tips: ['给出明确观点', '提供具体例子', '结构清晰', '词汇丰富多变'],
      },
      // Speaking Part 1
      {
        id: 5,
        type: 'speaking',
        section: 1,
        question: 'Let\'s talk about your free time. What do you like to do when you have free time?',
        timeLimit: 4,
        tips: ['回答要详细', '加入个人感受', '使用连接词'],
      },
      // Speaking Part 2
      {
        id: 6,
        type: 'speaking',
        section: 2,
        question: 'Describe a book that you have read and enjoyed. You should say - what the book was - when you read it - what it was about - and explain why you enjoyed it.',
        timeLimit: 2,
        tips: ['准备1分钟笔记', '分点描述', '讲述个人体验'],
      },
    ],
  },
  {
    id: 2,
    title: '雅思全真模拟考试 2',
    year: 2024,
    month: 'June',
    difficulty: 'hard',
    totalTime: 180,
    questions: [
      {
        id: 1,
        type: 'listening',
        section: 1,
        question: 'Section 1 - Complete the notes below. Write NO MORE THAN TWO WORDS AND/OR A NUMBER for each answer.',
        timeLimit: 30,
      },
      {
        id: 2,
        type: 'writing',
        section: 1,
        question: 'The two maps below show an island, before and after some tourist facilities were built.',
        timeLimit: 20,
        bandScoreGuide: 'Task Achievement > Coherence & Cohesion > Lexical Resource > Grammatical Range',
      },
      {
        id: 3,
        type: 'writing',
        section: 2,
        question: 'Some people believe that university education should be free for all students. To what extent do you agree or disagree?',
        timeLimit: 40,
        bandScoreGuide: 'Task Response > Coherence & Cohesion > Lexical Resource > Grammatical Range',
      },
    ],
  },
];
