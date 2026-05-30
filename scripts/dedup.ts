import * as fs from 'fs';
import * as path from 'path';

interface WordRoot {
  prefix?: string;
  prefixMeaning?: string;
  prefixMeaningEn?: string;
  root: string;
  rootMeaning: string;
  rootMeaningEn: string;
  rootOrigin: string;
  rootOriginNote: string;
  suffix?: string;
  suffixMeaning?: string;
  suffixMeaningEn?: string;
}

interface Word {
  id: number;
  word: string;
  phonetic: string;
  meaning: string;
  example: string;
  level: string;
  category: string;
  root: WordRoot;
  writingUsage?: string;
  topic?: string[];
}

interface IELTSWord {
  id: string;
  word: string;
  meaning: string;
  level: string;
  root: string;
  rootMeaning: string;
  rootMeaningEn: string;
  rootOrigin: string;
  rootOriginNote: string;
  relatedWords: { word: string; meaning: string; level: string }[];
  phonetic: string;
  frequency: string;
}

const wordsFilePath = path.join(__dirname, '../src/data/words.ts');
const mockWordsFilePath = path.join(__dirname, '../src/data/mockWords.ts');

function extractWordsFromFile(filePath: string): Word[] {
  const content = fs.readFileSync(filePath, 'utf-8');
  
  const match = content.match(/export const ieltsWords: Word\[\] = (\[.+\])/s);
  if (!match) {
    console.error('无法提取单词数据');
    return [];
  }
  
  try {
    return JSON.parse(match[1]);
  } catch (e) {
    console.error('解析单词数据失败:', e);
    return [];
  }
}

function convertToIELTSWord(word: Word): IELTSWord {
  const frequencyMap: Record<string, string> = {
    'IELTS5': '低频',
    'IELTS6': '中频',
    'IELTS7': '高频',
    'IELTS8': '高频'
  };
  
  return {
    id: `word_${word.id}`,
    word: word.word,
    meaning: word.meaning,
    level: word.level,
    root: word.root.root,
    rootMeaning: word.root.rootMeaning,
    rootMeaningEn: word.root.rootMeaningEn,
    rootOrigin: word.root.rootOrigin,
    rootOriginNote: word.root.rootOriginNote,
    relatedWords: [],
    phonetic: word.phonetic,
    frequency: frequencyMap[word.level] || '低频'
  };
}

function deduplicateWords(words: IELTSWord[]): IELTSWord[] {
  const seen = new Set<string>();
  const uniqueWords: IELTSWord[] = [];
  
  for (const word of words) {
    const lowerWord = word.word.toLowerCase();
    if (!seen.has(lowerWord)) {
      seen.add(lowerWord);
      uniqueWords.push(word);
    } else {
      console.log(`重复单词: ${word.word}`);
    }
  }
  
  return uniqueWords.sort((a, b) => a.word.localeCompare(b.word));
}

function generateMockWordsFile(words: IELTSWord[]): string {
  const wordsJson = JSON.stringify(words, null, 2)
    .replace(/"([^"]+)":/g, ' $1:')
    .replace(/"/g, "'");
  
  return `export interface IELTSWord {
  id: string;
  word: string;
  meaning: string;
  level: string;
  root: string;
  rootMeaning: string;
  rootMeaningEn: string;
  rootOrigin: string;
  rootOriginNote: string;
  relatedWords: { word: string; meaning: string; level: string }[];
  phonetic: string;
  frequency: string;
}

export const mockWords: IELTSWord[] = ${wordsJson};
`;
}

async function main() {
  console.log('开始提取单词数据...');
  const words = extractWordsFromFile(wordsFilePath);
  console.log(`共提取到 ${words.length} 个单词`);
  
  console.log('转换为 IELTSWord 格式...');
  const ieltsWords = words.map(convertToIELTSWord);
  
  console.log('去重中...');
  const uniqueWords = deduplicateWords(ieltsWords);
  console.log(`去重后剩余 ${uniqueWords.length} 个单词`);
  
  console.log('生成 mockWords.ts 文件...');
  const output = generateMockWordsFile(uniqueWords);
  fs.writeFileSync(mockWordsFilePath, output);
  
  console.log('完成!');
}

main().catch(console.error);
