const fs = require('fs');
const { detectRoot, generateExample, getOriginNote } = require('./wordGeneratorLib.cjs');

const allWords = fs.readFileSync('/home/fred/workspace/memoryworld-project/scripts/wordList.txt', 'utf8')
  .split('\n')
  .map(w => w.trim())
  .filter(w => w.length > 0);

const existingData = fs.readFileSync('/home/fred/workspace/memoryworld-project/src/data/mockWords.ts', 'utf8');
const existingMatch = existingData.match(/export const mockWords: IELTSWord\[\] = \[([\s\S]*?)\];/);
let existingWords = new Map();

if (existingMatch) {
  try {
    const existing = JSON.parse('[' + existingMatch[1] + ']');
    existing.forEach(w => {
      if (w.word) {
        if (!w.example) {
          w.example = generateExample(w.word, w.meaning || w.level);
        }
        existingWords.set(w.word.toLowerCase(), w);
      }
    });
    console.log('Loaded ' + existingWords.size + ' existing words');
  } catch(e) {
    console.log('Could not parse existing words:', e.message);
  }
}

const frequencyLevels = ['IELTS5', 'IELTS6', 'IELTS7', 'IELTS8'];
const frequencies = ['高频', '中频', '低频'];

let generated = 0;
let skipped = 0;

allWords.forEach((word, idx) => {
  const lowerWord = word.toLowerCase();
  
  if (existingWords.has(lowerWord)) {
    skipped++;
    return;
  }
  
  const rootInfo = detectRoot(word);
  const level = frequencyLevels[idx % frequencyLevels.length];
  const freq = frequencies[idx % frequencies.length];
  
  let root, rootMeaning, rootMeaningEn, rootOrigin, rootOriginNote;
  
  if (rootInfo) {
    root = rootInfo.root;
    rootMeaning = rootInfo.meaning;
    rootMeaningEn = rootInfo.meaningEn;
    rootOrigin = rootInfo.origin;
    rootOriginNote = getOriginNote(word, rootOrigin);
  } else {
    root = word.substring(0, 3) || word.substring(0, 2);
    rootMeaning = '词根';
    rootMeaningEn = 'root';
    rootOrigin = 'Latin';
    rootOriginNote = '源自拉丁语 ' + word.toLowerCase();
  }
  
  const example = generateExample(word, '含义');
  const meaning = level;
  
  existingWords.set(lowerWord, {
    id: 'word_' + (existingWords.size + 1),
    word: word,
    meaning: meaning,
    level: level,
    root: root,
    rootMeaning: rootMeaning,
    rootMeaningEn: rootMeaningEn,
    rootOrigin: rootOrigin,
    rootOriginNote: rootOriginNote,
    relatedWords: [],
    phonetic: '/' + word.toLowerCase().replace(/[^a-z]/g, '') + '/',
    frequency: freq,
    example: example
  });
  
  generated++;
});

console.log('Generated ' + generated + ' new words, skipped ' + skipped + ' existing');
console.log('Total words: ' + existingWords.size);

const sortedWords = Array.from(existingWords.values()).sort((a, b) => 
  a.word.localeCompare(b.word)
);

sortedWords.forEach((w, idx) => {
  w.id = 'word_' + (idx + 1);
});

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
  example: string;
}

export const mockWords: IELTSWord[] = ${JSON.stringify(sortedWords, null, 2)};`;

fs.writeFileSync('/home/fred/workspace/memoryworld-project/src/data/mockWords.ts', output);
console.log('Saved to mockWords.ts');
