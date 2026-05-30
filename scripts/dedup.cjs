const fs = require('fs');
const path = require('path');

function extractAndDeduplicate() {
  const wordsFilePath = path.join(__dirname, '../src/data/words.ts');
  const mockWordsFilePath = path.join(__dirname, '../src/data/mockWords.ts');

  console.log('读取 words.ts 文件...');
  const content = fs.readFileSync(wordsFilePath, 'utf-8');

  console.log('提取单词数据...');
  const seen = new Map();
  const uniqueWords = [];

  const lines = content.split('\n');
  let currentWord = {};
  let braceCount = 0;
  let inWordEntry = false;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const trimmedLine = line.trim();

    if (trimmedLine === '{' && !inWordEntry) {
      inWordEntry = true;
      currentWord = {};
      braceCount = 1;
      continue;
    }

    if (inWordEntry) {
      braceCount += (trimmedLine.match(/\{/g) || []).length;
      braceCount -= (trimmedLine.match(/\}/g) || []).length;

      if (trimmedLine.startsWith('id:')) {
        const m = trimmedLine.match(/id:\s*(\d+)/);
        if (m) currentWord.id = m[1];
      }
      if (trimmedLine.startsWith('word:')) {
        const m = trimmedLine.match(/word:\s*'([^']+)'/);
        if (m) currentWord.word = m[1];
      }
      if (trimmedLine.startsWith('phonetic:')) {
        const m = trimmedLine.match(/phonetic:\s*'([^']*)'/);
        if (m) currentWord.phonetic = m[1];
      }
      if (trimmedLine.startsWith('meaning:')) {
        const m = trimmedLine.match(/meaning:\s*'([^']*)'/);
        if (m) currentWord.meaning = m[1];
      }
      if (trimmedLine.startsWith('level:')) {
        const m = trimmedLine.match(/level:\s*'([^']*)'/);
        if (m) currentWord.level = m[1];
      }

      if (trimmedLine.startsWith('root:')) {
        const m = line.match(/root:\s*'([^']+)'/);
        if (m) currentWord.root = m[1];
      }
      if (trimmedLine.startsWith('rootMeaning:')) {
        const m = line.match(/rootMeaning:\s*'([^']+)'/);
        if (m) currentWord.rootMeaning = m[1];
      }
      if (trimmedLine.startsWith('rootMeaningEn:')) {
        const m = line.match(/rootMeaningEn:\s*'([^']+)'/);
        if (m) currentWord.rootMeaningEn = m[1];
      }
      if (trimmedLine.startsWith('rootOrigin:')) {
        const m = line.match(/rootOrigin:\s*'([^']+)'/);
        if (m) currentWord.rootOrigin = m[1];
      }
      if (trimmedLine.startsWith('rootOriginNote:')) {
        const m = line.match(/rootOriginNote:\s*'([^']+)'/);
        if (m) currentWord.rootOriginNote = m[1];
      }

      if (braceCount === 0 && currentWord.id && currentWord.word) {
        const lowerWord = currentWord.word.toLowerCase();
        if (!seen.has(lowerWord)) {
          seen.set(lowerWord, true);

          const frequencyMap = {
            'IELTS5': '低频',
            'IELTS6': '中频',
            'IELTS7': '高频',
            'IELTS8': '高频'
          };

          uniqueWords.push({
            id: `word_${currentWord.id}`,
            word: currentWord.word,
            meaning: currentWord.meaning || '',
            level: currentWord.level || 'IELTS5',
            root: currentWord.root || '',
            rootMeaning: currentWord.rootMeaning || '',
            rootMeaningEn: currentWord.rootMeaningEn || '',
            rootOrigin: currentWord.rootOrigin || '',
            rootOriginNote: currentWord.rootOriginNote || '',
            relatedWords: [],
            phonetic: currentWord.phonetic || '',
            frequency: frequencyMap[currentWord.level] || '低频'
          });
        } else {
          console.log(`重复单词: ${currentWord.word}`);
        }
        currentWord = {};
        inWordEntry = false;
      }
    }
  }

  console.log(`共提取到 ${uniqueWords.length} 个唯一单词`);

  uniqueWords.sort((a, b) => a.word.localeCompare(b.word));

  const output = `export interface IELTSWord {
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

export const mockWords: IELTSWord[] = ${JSON.stringify(uniqueWords, null, 2)};
`;

  fs.writeFileSync(mockWordsFilePath, output);
  console.log('已生成 mockWords.ts');
}

extractAndDeduplicate();