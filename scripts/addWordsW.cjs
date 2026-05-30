const fs = require('fs');
const path = require('path');

const newWords = [
  { id: "word_429", word: "wage", meaning: "n. 工资；报酬 v. 从事", level: "IELTS6", root: "wag", rootMeaning: "拿；付", rootMeaningEn: "pledge; pay", rootOrigin: "Old French", rootOriginNote: "源自古法语 wage，意为保证金或工资", relatedWords: [], phonetic: "/weɪdʒ/", frequency: "高频" },
  { id: "word_430", word: "wait", meaning: "v. 等；等待", level: "IELTS5", root: "wait", rootMeaning: "等待", rootMeaningEn: "stay; await", rootOrigin: "Old French", rootOriginNote: "源自古法语 waitier，意为等待", relatedWords: [], phonetic: "/weɪt/", frequency: "高频" },
  { id: "word_431", word: "wake", meaning: "v. 醒来；唤醒", level: "IELTS5", root: "wak", rootMeaning: "醒；监视", rootMeaningEn: "be awake; watch", rootOrigin: "Old English", rootOriginNote: "源自盎格鲁-撒克逊语 wacian，意为醒或监视", relatedWords: [], phonetic: "/weɪk/", frequency: "高频" },
  { id: "word_432", word: "walk", meaning: "v. 走；步行 n. 步行", level: "IELTS5", root: "walk", rootMeaning: "走", rootMeaningEn: "go on foot", rootOrigin: "Old English", rootOriginNote: "源自盎格鲁-撒克逊语 wealcan，意为滚动或走", relatedWords: [], phonetic: "/wɔːk/", frequency: "高频" },
  { id: "word_433", word: "want", meaning: "v. 想要；需要 n. 需要", level: "IELTS5", root: "want", rootMeaning: "缺少；想要", rootMeaningEn: "lack; desire", rootOrigin: "Old Norse", rootOriginNote: "源自古诺尔斯语 vant，意为缺少或想要", relatedWords: [], phonetic: "/wɒnt/", frequency: "高频" },
  { id: "word_434", word: "war", meaning: "n. 战争；冲突", level: "IELTS5", root: "war", rootMeaning: "战争", rootMeaningEn: "battle; conflict", rootOrigin: "Old English", rootOriginNote: "源自盎格鲁-撒克逊语 wyrre，意为战争", relatedWords: [], phonetic: "/wɔː/", frequency: "高频" },
  { id: "word_435", word: "warm", meaning: "adj. 温暖的；热心的 v. 加热", level: "IELTS5", root: "warm", rootMeaning: "温暖", rootMeaningEn: "hot; enthusiastic", rootOrigin: "Old English", rootOriginNote: "源自盎格鲁-撒克逊语 wearm", relatedWords: [], phonetic: "/wɔːm/", frequency: "高频" },
  { id: "word_436", word: "warn", meaning: "v. 警告；提醒", level: "IELTS6", root: "warn", rootMeaning: "警告；提醒", rootMeaningEn: "alert; caution", rootOrigin: "Old English", rootOriginNote: "源自盎格鲁-撒克逊语 wearnian，意为警告", relatedWords: [], phonetic: "/wɔːn/", frequency: "高频" },
  { id: "word_437", word: "wash", meaning: "v. 洗；洗涤 n. 洗涤", level: "IELTS5", root: "wash", rootMeaning: "洗", rootMeaningEn: "clean with water", rootOrigin: "Old English", rootOriginNote: "源自盎格鲁-撒克逊语 wascan", relatedWords: [], phonetic: "/wɒʃ/", frequency: "高频" },
  { id: "word_438", word: "waste", meaning: "v. 浪费；消耗 n. 浪费 adj. 废弃的", level: "IELTS5", root: "wast", rootMeaning: "浪费", rootMeaningEn: "desolate; spend", rootOrigin: "Old French", rootOriginNote: "源自古法语 waster，意为消耗或破坏", relatedWords: [], phonetic: "/weɪst/", frequency: "高频" },
  { id: "word_439", word: "watch", meaning: "v. 观看；注视 n. 手表；监视", level: "IELTS5", root: "watch", rootMeaning: "看；监视", rootMeaningEn: "look; guard", rootOrigin: "Old English", rootOriginNote: "源自盎格鲁-撒克逊语 wæccan，意为醒着或监视", relatedWords: [], phonetic: "/wɒtʃ/", frequency: "高频" },
  { id: "word_440", word: "water", meaning: "n. 水 v. 浇水", level: "IELTS5", root: "water", rootMeaning: "水", rootMeaningEn: "water", rootOrigin: "Old English", rootOriginNote: "源自盎格鲁-撒克逊语 wæter", relatedWords: [], phonetic: "/ˈwɔːtə/", frequency: "高频" },
  { id: "word_441", word: "wave", meaning: "n. 波浪；波动 v. 挥手", level: "IELTS5", root: "wav", rootMeaning: "波动；飘动", rootMeaningEn: "move; flutter", rootOrigin: "Old English", rootOriginNote: "源自盎格鲁-撒克逊语 wafian，意为波动或飘动", relatedWords: [], phonetic: "/weɪv/", frequency: "高频" },
  { id: "word_442", word: "way", meaning: "n. 方式；道路", level: "IELTS5", root: "way", rootMeaning: "路；方式", rootMeaningEn: "road; method", rootOrigin: "Old English", rootOriginNote: "源自盎格鲁-撒克逊语 weg", relatedWords: [], phonetic: "/weɪ/", frequency: "高频" },
  { id: "word_443", word: "weak", meaning: "adj. 弱的；虚弱的", level: "IELTS5", root: "weak", rootMeaning: "弱", rootMeaningEn: "not strong", rootOrigin: "Old English", rootOriginNote: "源自盎格鲁-撒克逊语 wac，意为弱或软", relatedWords: [], phonetic: "/wiːk/", frequency: "高频" },
  { id: "word_444", word: "weakness", meaning: "n. 弱点；软弱", level: "IELTS6", root: "weak", rootMeaning: "弱", rootMeaningEn: "not strong", rootOrigin: "Old English", rootOriginNote: "由 weak + ness 组成", relatedWords: [], phonetic: "/ˈwiːknəs/", frequency: "中频" },
  { id: "word_445", word: "wealth", meaning: "n. 财富；丰富", level: "IELTS5", root: "wealth", rootMeaning: "财富；幸福", rootMeaningEn: "riches; happiness", rootOrigin: "Old English", rootOriginNote: "源自盎格鲁-撒克逊语 wela，意为财富或幸福", relatedWords: [], phonetic: "/welθ/", frequency: "高频" },
  { id: "word_446", word: "wealthy", meaning: "adj. 富有的；富裕的", level: "IELTS6", root: "wealth", rootMeaning: "财富", rootMeaningEn: "rich", rootOrigin: "Old English", rootOriginNote: "由 wealth + y 组成", relatedWords: [], phonetic: "/ˈwelθi/", frequency: "高频" },
  { id: "word_447", word: "weapon", meaning: "n. 武器；兵器", level: "IELTS6", root: "weap", rootMeaning: "武器", rootMeaningEn: "tool for fighting", rootOrigin: "Old English", rootOriginNote: "源自盎格鲁-撒克逊语 wæpen", relatedWords: [], phonetic: "/ˈwepən/", frequency: "中频" },
  { id: "word_448", word: "wear", meaning: "v. 穿；戴 n. 穿着", level: "IELTS5", root: "wear", rootMeaning: "穿；磨损", rootMeaningEn: "have on; use", rootOrigin: "Old English", rootOriginNote: "源自盎格鲁-撒克逊语 werian，意为穿或佩戴", relatedWords: [], phonetic: "/weə/", frequency: "高频" }
];

const filePath = path.join(__dirname, '../src/data/mockWords.ts');
let content = fs.readFileSync(filePath, 'utf-8');
content = content.slice(0, -3);
const newContent = JSON.stringify(newWords, null, 2);
content += ',\n' + newContent.slice(1, -1) + '\n];\n';
fs.writeFileSync(filePath, content);
console.log(`已添加 ${newWords.length} 个W开头新单词`);