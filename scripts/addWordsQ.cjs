const fs = require('fs');
const path = require('path');

const newWords = [
  { id: "word_329", word: "quality", meaning: "n. 质量；品质", level: "IELTS5", root: "qual", rootMeaning: "何种；性质", rootMeaningEn: "what kind", rootOrigin: "Latin", rootOriginNote: "源自拉丁语 qualitas，由 qualis（何种的）派生", relatedWords: [], phonetic: "/ˈkwɒləti/", frequency: "高频" },
  { id: "word_330", word: "quantity", meaning: "n. 数量；量", level: "IELTS5", root: "quant", rootMeaning: "多少", rootMeaningEn: "how much", rootOrigin: "Latin", rootOriginNote: "源自拉丁语 quantitas，由 quantus（多少）派生", relatedWords: [], phonetic: "/ˈkwɒntəti/", frequency: "高频" },
  { id: "word_331", word: "quarter", meaning: "n. 四分之一；一刻钟", level: "IELTS5", root: "quart", rootMeaning: "四分之一", rootMeaningEn: "fourth", rootOrigin: "Latin", rootOriginNote: "源自古法语 quart，意为四分之一", relatedWords: [], phonetic: "/ˈkwɔːtə/", frequency: "高频" },
  { id: "word_332", word: "question", meaning: "n. 问题；疑问 v. 询问", level: "IELTS5", root: "quest", rootMeaning: "寻求；询问", rootMeaningEn: "seek; ask", rootOrigin: "Latin", rootOriginNote: "源自拉丁语 quaestio，由 quaerere（问）派生", relatedWords: [], phonetic: "/ˈkwestʃən/", frequency: "高频" },
  { id: "word_333", word: "quick", meaning: "adj. 快的；迅速的", level: "IELTS5", root: "quick", rootMeaning: "活着的；快的", rootMeaningEn: "alive; swift", rootOrigin: "Old English", rootOriginNote: "源自盎格鲁-撒克逊语 cwic，意为活的或快的", relatedWords: [], phonetic: "/kwɪk/", frequency: "高频" },
  { id: "word_334", word: "quickly", meaning: "adv. 快速地", level: "IELTS5", root: "quick", rootMeaning: "快", rootMeaningEn: "swift", rootOrigin: "Old English", rootOriginNote: "由 quick + ly 组成", relatedWords: [], phonetic: "/ˈkwɪkli/", frequency: "高频" },
  { id: "word_335", word: "quiet", meaning: "adj. 安静的；平静的", level: "IELTS5", root: "quiet", rootMeaning: "安静", rootMeaningEn: "calm; still", rootOrigin: "Latin", rootOriginNote: "源自拉丁语 quietus，意为休息或安静", relatedWords: [], phonetic: "/ˈkwaɪət/", frequency: "高频" },
  { id: "word_336", word: "quite", meaning: "adv. 很；相当", level: "IELTS5", root: "quit", rootMeaning: "完全；结束", rootMeaningEn: "complete; free", rootOrigin: "Old French", rootOriginNote: "源自古法语 quite，意为自由或完全", relatedWords: [], phonetic: "/kwaɪt/", frequency: "高频" },
  { id: "word_337", word: "quote", meaning: "v. 引用；引述", level: "IELTS7", root: "quot", rootMeaning: "引用", rootMeaningEn: "cite", rootOrigin: "Latin", rootOriginNote: "源自拉丁语 quotare，意为标记或引用", relatedWords: [], phonetic: "/kwəʊt/", frequency: "高频" },
  { id: "word_338", word: "race", meaning: "n. 种族；竞赛 v. 比赛", level: "IELTS5", root: "rac", rootMeaning: "种族；跑", rootMeaningEn: "run; lineage", rootOrigin: "Old French", rootOriginNote: "源自古法语 race，意为氏族或跑", relatedWords: [], phonetic: "/reɪs/", frequency: "高频" },
  { id: "word_339", word: "radical", meaning: "adj. 根本的；激进的", level: "IELTS7", root: "radic", rootMeaning: "根", rootMeaningEn: "root", rootOrigin: "Latin", rootOriginNote: "源自拉丁语 radicalis，由 radix（根）派生", relatedWords: [], phonetic: "/ˈrædɪkl/", frequency: "中频" },
  { id: "word_340", word: "random", meaning: "adj. 随机的；随意的", level: "IELTS7", root: "rand", rootMeaning: "跑；冲", rootMeaningEn: "run; rush", rootOrigin: "Old French", rootOriginNote: "源自古法语 randon，意为奔跑或随机", relatedWords: [], phonetic: "/ˈrændəm/", frequency: "中频" },
  { id: "word_341", word: "range", meaning: "n. 范围；山脉 v. 排列", level: "IELTS5", root: "rang", rootMeaning: "行；顺序", rootMeaningEn: "row; order", rootOrigin: "Old French", rootOriginNote: "源自古法语 range，意为排列或行", relatedWords: [], phonetic: "/reɪndʒ/", frequency: "高频" },
  { id: "word_342", word: "rank", meaning: "n. 等级；军衔 v. 排列", level: "IELTS6", root: "rang", rootMeaning: "行；等级", rootMeaningEn: "row; grade", rootOrigin: "Old French", rootOriginNote: "源自古法语 rang，意为行或等级", relatedWords: [], phonetic: "/ræŋk/", frequency: "高频" },
  { id: "word_343", word: "rapid", meaning: "adj. 快速的；急促的", level: "IELTS6", root: "rap", rootMeaning: "抢；快", rootMeaningEn: "seize; swift", rootOrigin: "Latin", rootOriginNote: "源自拉丁语 rapidus，意为快速的", relatedWords: [], phonetic: "/ˈræpɪd/", frequency: "中频" },
  { id: "word_344", word: "rare", meaning: "adj. 稀有的；稀薄的", level: "IELTS6", root: "rar", rootMeaning: "稀有的", rootMeaningEn: "uncommon", rootOrigin: "Latin", rootOriginNote: "源自拉丁语 rarus，意为稀少或稀疏", relatedWords: [], phonetic: "/reə/", frequency: "中频" },
  { id: "word_345", word: "rate", meaning: "n. 比率；速度 v. 评估", level: "IELTS5", root: "rat", rootMeaning: "计算；评估", rootMeaningEn: "compute; estimate", rootOrigin: "Latin", rootOriginNote: "源自拉丁语 rata，意为计算或比例", relatedWords: [], phonetic: "/reɪt/", frequency: "高频" },
  { id: "word_346", word: "rather", meaning: "adv. 相当；宁可", level: "IELTS5", root: "rath", rootMeaning: "早；相当", rootMeaningEn: "early; rather", rootOrigin: "Old English", rootOriginNote: "源自盎格鲁-撒克逊语 hrathe，意为快速或相当", relatedWords: [], phonetic: "/ˈrɑːðə/", frequency: "高频" },
  { id: "word_347", word: "ratio", meaning: "n. 比率；比例", level: "IELTS7", root: "rat", rootMeaning: "计算；比例", rootMeaningEn: "reckon; proportion", rootOrigin: "Latin", rootOriginNote: "源自拉丁语 ratio，意为计算或理由", relatedWords: [], phonetic: "/ˈreɪʃiəʊ/", frequency: "中频" },
  { id: "word_348", word: "rational", meaning: "adj. 理性的；合理的", level: "IELTS7", root: "rat", rootMeaning: "计算；理性", rootMeaningEn: "reason", rootOrigin: "Latin", rootOriginNote: "源自拉丁语 rationalis，由 ratio（理性）派生", relatedWords: [], phonetic: "/ˈræʃnəl/", frequency: "中频" }
];

const filePath = path.join(__dirname, '../src/data/mockWords.ts');
let content = fs.readFileSync(filePath, 'utf-8');
content = content.slice(0, -3);
const newContent = JSON.stringify(newWords, null, 2);
content += ',\n' + newContent.slice(1, -1) + '\n];\n';
fs.writeFileSync(filePath, content);
console.log(`已添加 ${newWords.length} 个Q/R开头新单词`);