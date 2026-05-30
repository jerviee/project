const fs = require('fs');
const path = require('path');

const words = [
  { id: "word_91", word: "alter", meaning: "v. 改变；修改", level: "IELTS7", root: "alter", rootMeaning: "其他；改变", rootMeaningEn: "other; change", rootOrigin: "Latin", rootOriginNote: "源自拉丁语 alter", relatedWords: [], phonetic: "/ˈɔːltə/", frequency: "中频" },
  { id: "word_92", word: "alternative", meaning: "adj. 供选择的；替代的", level: "IELTS7", root: "alter", rootMeaning: "改变", rootMeaningEn: "change", rootOrigin: "Latin", rootOriginNote: "由 alter + native 组成", relatedWords: [], phonetic: "/ɔːlˈtɜːnətɪv/", frequency: "高频" },
  { id: "word_93", word: "although", meaning: "conj. 虽然；尽管", level: "IELTS5", root: "though", rootMeaning: "虽然", rootMeaningEn: "even if", rootOrigin: "Old English", rootOriginNote: "由 all + though 组成", relatedWords: [], phonetic: "/ɔːlˈðəʊ/", frequency: "高频" },
  { id: "word_94", word: "always", meaning: "adv. 总是；永远", level: "IELTS5", root: "way", rootMeaning: "方式；道路", rootMeaningEn: "manner; road", rootOrigin: "Old English", rootOriginNote: "由 all + way 组成", relatedWords: [], phonetic: "/ˈɔːlweɪz/", frequency: "高频" },
  { id: "word_95", word: "amaze", meaning: "v. 使惊奇；使惊叹", level: "IELTS6", root: "maz", rootMeaning: "困惑；惊奇", rootMeaningEn: "puzzle; bewilder", rootOrigin: "Old English", rootOriginNote: "源自盎格鲁-撒克逊语 amasian", relatedWords: [], phonetic: "/əˈmeɪz/", frequency: "中频" },
  { id: "word_96", word: "ambition", meaning: "n. 野心；雄心", level: "IELTS7", root: "amb", rootMeaning: "周围；两边", rootMeaningEn: "around; both", rootOrigin: "Latin", rootOriginNote: "源自拉丁语 ambitio", relatedWords: [], phonetic: "/æmˈbɪʃn/", frequency: "中频" },
  { id: "word_97", word: "ambitious", meaning: "adj. 有雄心的；热望的", level: "IELTS7", root: "amb", rootMeaning: "周围", rootMeaningEn: "around", rootOrigin: "Latin", rootOriginNote: "由 ambition 派生", relatedWords: [], phonetic: "/æmˈbɪʃəs/", frequency: "中频" },
  { id: "word_98", word: "among", meaning: "prep. 在...之中", level: "IELTS5", root: "mong", rootMeaning: "混合；在...之中", rootMeaningEn: "mix; in the middle", rootOrigin: "Old English", rootOriginNote: "源自盎格鲁-撒克逊语 onmang", relatedWords: [], phonetic: "/əˈmʌŋ/", frequency: "高频" },
  { id: "word_99", word: "amount", meaning: "n. 数量；总额 v. 合计", level: "IELTS5", root: "mount", rootMeaning: "山；上升", rootMeaningEn: "mountain; ascend", rootOrigin: "Old French", rootOriginNote: "源自古法语 amonter", relatedWords: [], phonetic: "/əˈmaʊnt/", frequency: "高频" },
  { id: "word_100", word: "ample", meaning: "adj. 充足的；丰富的", level: "IELTS7", root: "amp", rootMeaning: "大；多", rootMeaningEn: "large; more", rootOrigin: "Latin", rootOriginNote: "源自拉丁语 amplus", relatedWords: [], phonetic: "/ˈæmpl/", frequency: "中频" },
  { id: "word_101", word: "amuse", meaning: "v. 逗笑；使愉快", level: "IELTS6", root: "mus", rootMeaning: "娱乐；消遣", rootMeaningEn: "entertainment; pastime", rootOrigin: "French", rootOriginNote: "源自古法语 amuser", relatedWords: [], phonetic: "/əˈmjuːz/", frequency: "中频" },
  { id: "word_102", word: "analyze", meaning: "v. 分析；分解", level: "IELTS7", root: "ly", rootMeaning: "解开；分析", rootMeaningEn: "loosen; dissolve", rootOrigin: "Greek", rootOriginNote: "源自希腊语 analyein", relatedWords: [], phonetic: "/ˈænəlaɪz/", frequency: "高频" },
  { id: "word_103", word: "analysis", meaning: "n. 分析；分解", level: "IELTS6", root: "ly", rootMeaning: "解开", rootMeaningEn: "loosen", rootOrigin: "Greek", rootOriginNote: "源自希腊语 analysis", relatedWords: [], phonetic: "/əˈnæləsɪs/", frequency: "高频" },
  { id: "word_104", word: "ancestor", meaning: "n. 祖先；祖宗", level: "IELTS7", root: "anc", rootMeaning: "先前；古老", rootMeaningEn: "before; ancient", rootOrigin: "Latin", rootOriginNote: "源自古法语 ancestre", relatedWords: [], phonetic: "/ˈænsestə/", frequency: "中频" },
  { id: "word_105", word: "ancient", meaning: "adj. 古代的；古老的", level: "IELTS6", root: "anc", rootMeaning: "先前；古老", rootMeaningEn: "old; former", rootOrigin: "Old French", rootOriginNote: "源自古法语 ancien", relatedWords: [], phonetic: "/ˈeɪnʃənt/", frequency: "高频" },
  { id: "word_106", word: "anger", meaning: "n. 愤怒；怒火 v. 使发怒", level: "IELTS6", root: "ang", rootMeaning: "紧；痛苦", rootMeaningEn: "tight; pain", rootOrigin: "Old Norse", rootOriginNote: "源自古诺尔斯语 angr", relatedWords: [], phonetic: "/ˈæŋɡə/", frequency: "中频" },
  { id: "word_107", word: "angle", meaning: "n. 角；角度 v. 斜移", level: "IELTS6", root: "ang", rootMeaning: "角；弯曲", rootMeaningEn: "corner; bend", rootOrigin: "Latin", rootOriginNote: "源自拉丁语 angulus", relatedWords: [], phonetic: "/ˈæŋɡl/", frequency: "中频" },
  { id: "word_108", word: "angry", meaning: "adj. 生气的；愤怒的", level: "IELTS5", root: "ang", rootMeaning: "愤怒", rootMeaningEn: "anger", rootOrigin: "Old Norse", rootOriginNote: "由 anger 派生", relatedWords: [], phonetic: "/ˈæŋɡri/", frequency: "高频" },
  { id: "word_109", word: "animal", meaning: "n. 动物 adj. 动物的", level: "IELTS5", root: "anim", rootMeaning: "呼吸；灵魂", rootMeaningEn: "breath; soul", rootOrigin: "Latin", rootOriginNote: "源自拉丁语 animal", relatedWords: [], phonetic: "/ˈænɪml/", frequency: "高频" },
  { id: "word_110", word: "announce", meaning: "v. 宣布；通知", level: "IELTS6", root: "nounce", rootMeaning: "说；报告", rootMeaningEn: "say; report", rootOrigin: "Latin", rootOriginNote: "源自古法语 anoncer", relatedWords: [], phonetic: "/əˈnaʊns/", frequency: "高频" },
  { id: "word_111", word: "annoy", meaning: "v. 使烦恼；打扰", level: "IELTS6", root: "noi", rootMeaning: "知道；烦恼", rootMeaningEn: "know; anger", rootOrigin: "Old French", rootOriginNote: "源自古法语 anoier", relatedWords: [], phonetic: "/əˈnɔɪ/", frequency: "中频" },
  { id: "word_112", word: "annual", meaning: "adj. 年度的；每年的", level: "IELTS7", root: "ann", rootMeaning: "年", rootMeaningEn: "year", rootOrigin: "Latin", rootOriginNote: "源自拉丁语 annuus", relatedWords: [], phonetic: "/ˈænjuəl/", frequency: "高频" },
  { id: "word_113", word: "another", meaning: "adj. 另一个；再一个", level: "IELTS5", root: "other", rootMeaning: "其他的", rootMeaningEn: "other", rootOrigin: "Old English", rootOriginNote: "由 an + other 组成", relatedWords: [], phonetic: "/əˈnʌðə/", frequency: "高频" },
  { id: "word_114", word: "answer", meaning: "n./v. 回答；答复", level: "IELTS5", root: "swer", rootMeaning: "回答", rootMeaningEn: "reply", rootOrigin: "Old English", rootOriginNote: "源自盎格鲁-撒克逊语 andswaru", relatedWords: [], phonetic: "/ˈɑːnsə/", frequency: "高频" },
  { id: "word_115", word: "anticipate", meaning: "v. 预期；期望", level: "IELTS7", root: "cip", rootMeaning: "拿；抓", rootMeaningEn: "take; grasp", rootOrigin: "Latin", rootOriginNote: "源自拉丁语 anticipare", relatedWords: [], phonetic: "/ænˈtɪsɪpeɪt/", frequency: "中频" },
  { id: "word_116", word: "anxiety", meaning: "n. 焦虑；渴望", level: "IELTS7", root: "anx", rootMeaning: "焦虑；紧张", rootMeaningEn: "worry; concern", rootOrigin: "Latin", rootOriginNote: "源自拉丁语 anxietas", relatedWords: [], phonetic: "/æŋˈzaɪəti/", frequency: "中频" },
  { id: "word_117", word: "anxious", meaning: "adj. 焦虑的；担心的", level: "IELTS6", root: "anx", rootMeaning: "焦虑", rootMeaningEn: "worry; troubled", rootOrigin: "Latin", rootOriginNote: "源自拉丁语 anxious", relatedWords: [], phonetic: "/ˈæŋkʃəs/", frequency: "中频" },
  { id: "word_118", word: "any", meaning: "adj. 任何的；任一", level: "IELTS5", root: "any", rootMeaning: "任一；一些", rootMeaningEn: "one; some", rootOrigin: "Old English", rootOriginNote: "源自盎格鲁-撒克逊语 ænig", relatedWords: [], phonetic: "/ˈeni/", frequency: "高频" },
  { id: "word_119", word: "anybody", meaning: "pron. 任何人", level: "IELTS5", root: "body", rootMeaning: "身体；人", rootMeaningEn: "body; person", rootOrigin: "Old English", rootOriginNote: "由 any + body 组成", relatedWords: [], phonetic: "/ˈenibɒdi/", frequency: "高频" },
  { id: "word_120", word: "anyone", meaning: "pron. 任何人", level: "IELTS5", root: "one", rootMeaning: "一；人", rootMeaningEn: "one; person", rootOrigin: "Old English", rootOriginNote: "由 any + one 组成", relatedWords: [], phonetic: "/ˈeniwʌn/", frequency: "高频" }
];

const filePath = path.join(__dirname, '../src/data/mockWords.ts');
let content = fs.readFileSync(filePath, 'utf-8');
content = content.slice(0, -3);
const newContent = JSON.stringify(words, null, 2);
content += ',\n' + newContent.slice(1, -1) + '\n];\n';
fs.writeFileSync(filePath, content);
console.log('已添加 ' + words.length + ' 个单词');