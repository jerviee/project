import { mockWords } from '@/data/mockWords';
import { sentencePatterns, synonymGroups, essayTemplates, rootGroups, prefixGroups, suffixGroups } from '@/data/mockWriting';
import mockQuestions from '@/data/mockQuestions';

export interface Word {
  id: number;
  word: string;
  phonetic: string;
  meaning: string;
  example: string;
  level: 'IELTS5' | 'IELTS6' | 'IELTS7' | 'IELTS8';
  category: string;
  root: {
    prefix?: string;
    prefixMeaning?: string;
    prefixMeaningEn?: string;
    root: string;
    rootMeaning: string;
    rootMeaningEn: string;
    rootOrigin: 'Latin' | 'Greek' | 'Old French' | 'Anglo-Saxon';
    rootOriginNote: string;
    suffix?: string;
    suffixMeaning?: string;
    suffixMeaningEn?: string;
  };
  writingUsage: string;
  topic: string[];
}

export interface RootGroup {
  root: string;
  meaning: string;
  meaningEn: string;
  origin: 'Latin' | 'Greek' | 'Old French' | 'Anglo-Saxon';
  originNote: string;
  originNoteEn: string;
  example: string;
  words: number[];
}

export interface PrefixGroup {
  prefix: string;
  meaning: string;
  meaningEn: string;
  origin: 'Latin' | 'Greek' | 'Old French' | 'Anglo-Saxon';
  originNote: string;
  originNoteEn: string;
  words: number[];
}

export interface SuffixGroup {
  suffix: string;
  meaning: string;
  meaningEn: string;
  type: 'noun' | 'verb' | 'adjective' | 'adverb';
  words: number[];
}

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
  topic: string;
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

export interface IELTSQuestion {
  id: number;
  year: number;
  month: string;
  type: string;
  topic: string;
  question: string;
  modelAnswer: string;
  modelAnswerCN?: string;
  bandScore: string;
  keywords: string[];
}

export async function initDatabase(): Promise<void> {
  // 不需要真正初始化数据库
  return;
}

export async function loadMockData(): Promise<void> {
  console.log('Mock data loading completed successfully');
  return;
}

export async function getWords(filter?: { level?: string; category?: string; search?: string }): Promise<any[]> {
  let result = mockWords.map((word, index) => ({
    id: index + 1,
    word: word.word,
    phonetic: word.phonetic || '',
    meaning: word.meaning,
    example: word.example || '',
    level: word.level as any,
    category: '',
    root: {
      prefix: undefined,
      prefixMeaning: undefined,
      prefixMeaningEn: undefined,
      root: word.root || '',
      rootMeaning: word.rootMeaning || '',
      rootMeaningEn: word.rootMeaningEn || '',
      rootOrigin: word.rootOrigin as any || 'Latin',
      rootOriginNote: word.rootOriginNote || '',
      suffix: undefined,
      suffixMeaning: undefined,
      suffixMeaningEn: undefined,
    },
    writingUsage: '',
    topic: [],
  }));

  if (filter?.level && filter.level !== '全部') {
    result = result.filter(word => word.level === filter.level);
  }

  if (filter?.search) {
    const term = filter.search.toLowerCase();
    result = result.filter(word => 
      word.word.toLowerCase().includes(term) || 
      word.meaning.includes(term)
    );
  }

  return result;
}

export async function getWordById(id: number): Promise<any | null> {
  const words = await getWords();
  return words.find(word => word.id === id) || null;
}

export async function getRootGroups(): Promise<RootGroup[]> {
  return rootGroups;
}

export async function getPrefixGroups(): Promise<PrefixGroup[]> {
  return prefixGroups;
}

export async function getSuffixGroups(): Promise<SuffixGroup[]> {
  return suffixGroups;
}

export async function getSentencePatterns(type?: string): Promise<SentencePattern[]> {
  if (type && type !== '全部') {
    return sentencePatterns.filter(pattern => pattern.type === type);
  }
  return sentencePatterns;
}

export async function getSynonymGroups(): Promise<SynonymGroup[]> {
  return synonymGroups;
}

export async function getEssayTemplates(type?: string): Promise<EssayTemplate[]> {
  if (type && type !== '全部') {
    return essayTemplates.filter(template => template.type === type);
  }
  return essayTemplates;
}

export async function getIELTSQuestions(type?: string): Promise<IELTSQuestion[]> {
  let result = [...mockQuestions].sort((a, b) => {
    if (b.year !== a.year) return b.year - a.year;
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    return months.indexOf(b.month) - months.indexOf(a.month);
  });

  if (type && type !== '全部') {
    result = result.filter(q => q.type === type);
  }

  return result;
}

export async function updateUserProgress(_userId: string, _masteredWords: number[], _reviewWords: number[], _studyDays: number, _totalWords: number): Promise<void> {
  // 不需要真正更新数据库
  return;
}

export async function getUserProgress(_userId: string): Promise<{ masteredWords: number[], reviewWords: number[], studyDays: number, totalWordsStudied: number } | null> {
  return null;
}
