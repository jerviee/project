const fs = require('fs');
const path = require('path');

const newWords = [
  { id: "word_389", word: "ultimate", meaning: "adj. 最终的；基本的", level: "IELTS7", root: "ultim", rootMeaning: "最后的", rootMeaningEn: "last; final", rootOrigin: "Latin", rootOriginNote: "源自拉丁语 ultimus，意为最远的或最终的", relatedWords: [], phonetic: "/ˈʌltɪmət/", frequency: "高频" },
  { id: "word_390", word: "unable", meaning: "adj. 不会的；不能的", level: "IELTS6", root: "able", rootMeaning: "能够", rootMeaningEn: "capable", rootOrigin: "Latin", rootOriginNote: "由 un-（不）+ able 组成", relatedWords: [], phonetic: "/ʌnˈeɪbl/", frequency: "高频" },
  { id: "word_391", word: "uncertainty", meaning: "n. 不确定；犹豫", level: "IELTS7", root: "certain", rootMeaning: "确定", rootMeaningEn: "sure", rootOrigin: "Latin", rootOriginNote: "由 un- + certain + ty 组成", relatedWords: [], phonetic: "/ʌnˈsɜːtnti/", frequency: "中频" },
  { id: "word_392", word: "undergo", meaning: "v. 经历；遭受", level: "IELTS7", root: "under", rootMeaning: "在...下", rootMeaningEn: "below; beneath", rootOrigin: "Old English", rootOriginNote: "由 under + go 组成", relatedWords: [], phonetic: "/ˌʌndəˈɡəʊ/", frequency: "中频" },
  { id: "word_393", word: "undergraduate", meaning: "n. 本科生", level: "IELTS6", root: "graduate", rootMeaning: "毕业", rootMeaningEn: "finish degree", rootOrigin: "Latin", rootOriginNote: "由 under + graduate 组成", relatedWords: [], phonetic: "/ˌʌndəˈɡrædʒuət/", frequency: "高频" },
  { id: "word_394", word: "underlie", meaning: "v. 构成...的基础", level: "IELTS7", root: "lie", rootMeaning: "躺；位于", rootMeaningEn: "lie; be situated", rootOrigin: "Old English", rootOriginNote: "由 under + lie 组成", relatedWords: [], phonetic: "/ˌʌndəˈlaɪ/", frequency: "中频" },
  { id: "word_395", word: "understand", meaning: "v. 理解；懂", level: "IELTS5", root: "stand", rootMeaning: "站；理解", rootMeaningEn: "stand; comprehend", rootOrigin: "Old English", rootOriginNote: "由 under + stand 组成", relatedWords: [], phonetic: "/ˌʌndəˈstænd/", frequency: "高频" },
  { id: "word_396", word: "undertake", meaning: "v. 承担；着手", level: "IELTS7", root: "take", rootMeaning: "拿；做", rootMeaningEn: "take; do", rootOrigin: "Old English", rootOriginNote: "由 under + take 组成", relatedWords: [], phonetic: "/ˌʌndəˈteɪk/", frequency: "中频" },
  { id: "word_397", word: "unemployment", meaning: "n. 失业；失业率", level: "IELTS6", root: "employ", rootMeaning: "雇佣", rootMeaningEn: "hire; use", rootOrigin: "Latin", rootOriginNote: "由 un- + employment 组成", relatedWords: [], phonetic: "/ˌʌnɪmˈplɔɪmənt/", frequency: "高频" },
  { id: "word_398", word: "unexpected", meaning: "adj. 意外的；突然的", level: "IELTS6", root: "expect", rootMeaning: "期待", rootMeaningEn: "look for", rootOrigin: "Latin", rootOriginNote: "由 un- + expected 组成", relatedWords: [], phonetic: "/ˌʌnɪkˈspektɪd/", frequency: "中频" },
  { id: "word_399", word: "unfair", meaning: "adj. 不公平的", level: "IELTS6", root: "fair", rootMeaning: "公平", rootMeaningEn: "just; equitable", rootOrigin: "Old English", rootOriginNote: "由 un- + fair 组成", relatedWords: [], phonetic: "/ˌʌnˈfeə/", frequency: "中频" },
  { id: "word_400", word: "unfortunate", meaning: "adj. 不幸的；遗憾的", level: "IELTS6", root: "fortune", rootMeaning: "运气", rootMeaningEn: "luck", rootOrigin: "Latin", rootOriginNote: "由 un- + fortunate 组成", relatedWords: [], phonetic: "/ʌnˈfɔːtʃənət/", frequency: "中频" },
  { id: "word_401", word: "unify", meaning: "v. 统一；使一致", level: "IELTS7", root: "uni", rootMeaning: "一", rootMeaningEn: "one", rootOrigin: "Latin", rootOriginNote: "源自拉丁语 unificare，由 unus（一）+ facere（做）组成", relatedWords: [], phonetic: "/ˈjuːnɪfaɪ/", frequency: "中频" },
  { id: "word_402", word: "union", meaning: "n. 联盟；工会", level: "IELTS6", root: "uni", rootMeaning: "一", rootMeaningEn: "one", rootOrigin: "Latin", rootOriginNote: "源自拉丁语 unio，由 unus（一）派生", relatedWords: [], phonetic: "/ˈjuːniən/", frequency: "高频" },
  { id: "word_403", word: "unique", meaning: "adj. 独特的；唯一的", level: "IELTS6", root: "uni", rootMeaning: "一", rootMeaningEn: "one", rootOrigin: "Latin", rootOriginNote: "源自拉丁语 unicus，由 unus（一）派生", relatedWords: [], phonetic: "/juːˈniːk/", frequency: "高频" },
  { id: "word_404", word: "unit", meaning: "n. 单位；单元", level: "IELTS5", root: "uni", rootMeaning: "一", rootMeaningEn: "one", rootOrigin: "Latin", rootOriginNote: "源自拉丁语 unitas，由unus（一）派生", relatedWords: [], phonetic: "/ˈjuːnɪt/", frequency: "高频" },
  { id: "word_405", word: "unite", meaning: "v. 联合；团结", level: "IELTS6", root: "uni", rootMeaning: "一", rootMeaningEn: "one", rootOrigin: "Latin", rootOriginNote: "源自拉丁语 unitus，由unire（统一）派生", relatedWords: [], phonetic: "/juːˈnaɪt/", frequency: "高频" },
  { id: "word_406", word: "unity", meaning: "n. 统一；团结", level: "IELTS7", root: "uni", rootMeaning: "一", rootMeaningEn: "one", rootOrigin: "Latin", rootOriginNote: "源自拉丁语 unitas，由unus（一）派生", relatedWords: [], phonetic: "/ˈjuːnəti/", frequency: "中频" },
  { id: "word_407", word: "universal", meaning: "adj. 普遍的；通用的", level: "IELTS7", root: "vers", rootMeaning: "转；万能", rootMeaningEn: "turn; world", rootOrigin: "Latin", rootOriginNote: "源自拉丁语 universalis，由universus（全体）派生", relatedWords: [], phonetic: "/ˌjuːnɪˈvɜːsl/", frequency: "中频" },
  { id: "word_408", word: "universe", meaning: "n. 宇宙；世界", level: "IELTS6", root: "vers", rootMeaning: "转；世界", rootMeaningEn: "turn; world", rootOrigin: "Latin", rootOriginNote: "源自拉丁语 universum，由unus（一）+ vertere（转）组成", relatedWords: [], phonetic: "/ˈjuːnɪvɜːs/", frequency: "高频" }
];

const filePath = path.join(__dirname, '../src/data/mockWords.ts');
let content = fs.readFileSync(filePath, 'utf-8');
content = content.slice(0, -3);
const newContent = JSON.stringify(newWords, null, 2);
content += ',\n' + newContent.slice(1, -1) + '\n];\n';
fs.writeFileSync(filePath, content);
console.log(`已添加 ${newWords.length} 个U开头新单词`);