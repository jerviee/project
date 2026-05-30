const fs = require('fs');
const path = require('path');

const newWords = [
  { id: "word_369", word: "target", meaning: "n. 目标；靶子 v. 瞄准", level: "IELTS5", root: "targ", rootMeaning: "目标", rootMeaningEn: "goal; aim", rootOrigin: "Old Norse", rootOriginNote: "源自古诺尔斯语 taðr，意为目标或目的", relatedWords: [], phonetic: "/ˈtɑːɡɪt/", frequency: "高频" },
  { id: "word_370", word: "task", meaning: "n. 任务；工作", level: "IELTS5", root: "task", rootMeaning: "任务", rootMeaningEn: "work; duty", rootOrigin: "Old French", rootOriginNote: "源自古法语 tasque，意为税或任务", relatedWords: [], phonetic: "/tɑːsk/", frequency: "高频" },
  { id: "word_371", word: "taste", meaning: "n. 味道；品尝 v. 品尝", level: "IELTS5", root: "tast", rootMeaning: "触摸；味道", rootMeaningEn: "touch; flavor", rootOrigin: "Old French", rootOriginNote: "源自古法语 taster，意为触摸或品尝", relatedWords: [], phonetic: "/teɪst/", frequency: "高频" },
  { id: "word_372", word: "tax", meaning: "n. 税；负担 v. 征税", level: "IELTS6", root: "tax", rootMeaning: "税", rootMeaningEn: "rate; charge", rootOrigin: "Latin", rootOriginNote: "源自拉丁语 taxa，由 taxare（评估）派生", relatedWords: [], phonetic: "/tæks/", frequency: "高频" },
  { id: "word_373", word: "teach", meaning: "v. 教；教导", level: "IELTS5", root: "teach", rootMeaning: "教", rootMeaningEn: "instruct", rootOrigin: "Old English", rootOriginNote: "源自盎格鲁-撒克逊语 tæcan，意为展示或教导", relatedWords: [], phonetic: "/tiːtʃ/", frequency: "高频" },
  { id: "word_374", word: "teacher", meaning: "n. 教师；老师", level: "IELTS5", root: "teach", rootMeaning: "教", rootMeaningEn: "teach", rootOrigin: "Old English", rootOriginNote: "由 teach + er 组成", relatedWords: [], phonetic: "/ˈtiːtʃə/", frequency: "高频" },
  { id: "word_375", word: "team", meaning: "n. 团队；小组", level: "IELTS5", root: "team", rootMeaning: "团队", rootMeaningEn: "group; crew", rootOrigin: "Old English", rootOriginNote: "源自盎格鲁-撒克逊语 team，意为后代或团队", relatedWords: [], phonetic: "/tiːm/", frequency: "高频" },
  { id: "word_376", word: "technical", meaning: "adj. 技术的；专业的", level: "IELTS6", root: "techn", rootMeaning: "技艺；技术", rootMeaningEn: "art; skill", rootOrigin: "Greek", rootOriginNote: "源自希腊语 techne，意为技艺或技能", relatedWords: [], phonetic: "/ˈteknɪkl/", frequency: "中频" },
  { id: "word_377", word: "technique", meaning: "n. 技术；技巧", level: "IELTS6", root: "techn", rootMeaning: "技艺", rootMeaningEn: "art; skill", rootOrigin: "Greek", rootOriginNote: "源自希腊语 techne + ique", relatedWords: [], phonetic: "/tekˈniːk/", frequency: "高频" },
  { id: "word_378", word: "technology", meaning: "n. 科技；技术", level: "IELTS6", root: "techn", rootMeaning: "技艺", rootMeaningEn: "art; skill", rootOrigin: "Greek", rootOriginNote: "由 techno + logy 组成", relatedWords: [], phonetic: "/tekˈnɒlədʒi/", frequency: "高频" },
  { id: "word_379", word: "teenager", meaning: "n. 青少年", level: "IELTS5", root: "teen", rootMeaning: "十几岁", rootMeaningEn: "thirteen to nineteen", rootOrigin: "English", rootOriginNote: "由 teen + age + er 组成", relatedWords: [], phonetic: "/ˈtiːneɪdʒə/", frequency: "高频" },
  { id: "word_380", word: "temporary", meaning: "adj. 临时的；暂时的", level: "IELTS6", root: "tempor", rootMeaning: "时间；暂时的", rootMeaningEn: "time; brief", rootOrigin: "Latin", rootOriginNote: "源自拉丁语 temporarius，由 tempus（时间）派生", relatedWords: [], phonetic: "/ˈtemprəri/", frequency: "中频" },
  { id: "word_381", word: "tendency", meaning: "n. 倾向；趋势", level: "IELTS7", root: "tend", rootMeaning: "伸展；倾向", rootMeaningEn: "stretch; incline", rootOrigin: "Latin", rootOriginNote: "源自拉丁语 tendentia，由 tendere（伸展）派生", relatedWords: [], phonetic: "/ˈtendənsi/", frequency: "中频" },
  { id: "word_382", word: "tender", meaning: "adj. 温柔的；嫩的 v. 提供", level: "IELTS7", root: "tend", rootMeaning: "伸展；照看", rootMeaningEn: "stretch; care for", rootOrigin: "Latin", rootOriginNote: "源自拉丁语 tener，意为柔软或温柔", relatedWords: [], phonetic: "/ˈtendə/", frequency: "中频" },
  { id: "word_383", word: "term", meaning: "n. 学期；术语；条款", level: "IELTS5", root: "term", rootMeaning: "界限；术语", rootMeaningEn: "boundary; word", rootOrigin: "Latin", rootOriginNote: "源自拉丁语 terminus，意为边界或终点", relatedWords: [], phonetic: "/tɜːm/", frequency: "高频" },
  { id: "word_384", word: "terminal", meaning: "adj. 终点的；末端的 n. 终点", level: "IELTS7", root: "term", rootMeaning: "界限", rootMeaningEn: "boundary; end", rootOrigin: "Latin", rootOriginNote: "源自拉丁语 terminalis，由 terminus（边界）派生", relatedWords: [], phonetic: "/ˈtɜːmɪnl/", frequency: "中频" },
  { id: "word_385", word: "territory", meaning: "n. 领土；领域", level: "IELTS7", root: "terr", rootMeaning: "土地；地球", rootMeaningEn: "earth; land", rootOrigin: "Latin", rootOriginNote: "源自拉丁语 territorium，由 terra（土地）派生", relatedWords: [], phonetic: "/ˈterətri/", frequency: "高频" },
  { id: "word_386", word: "terror", meaning: "n. 恐怖；恐惧", level: "IELTS7", root: "terr", rootMeaning: "惊吓", rootMeaningEn: "frighten", rootOrigin: "Latin", rootOriginNote: "源自拉丁语 terror，由 terrere（使恐惧）派生", relatedWords: [], phonetic: "/ˈterə/", frequency: "中频" },
  { id: "word_387", word: "test", meaning: "n./v. 测试；检验", level: "IELTS5", root: "test", rootMeaning: "证据；测试", rootMeaningEn: "proof; trial", rootOrigin: "Latin", rootOriginNote: "源自拉丁语 testis，意为证人或证据", relatedWords: [], phonetic: "/test/", frequency: "高频" },
  { id: "word_388", word: "text", meaning: "n. 文本；课文", level: "IELTS5", root: "text", rootMeaning: "编织；文本", rootMeaningEn: "weave; writing", rootOrigin: "Latin", rootOriginNote: "源自拉丁语 textus，意为编织或文本", relatedWords: [], phonetic: "/tekst/", frequency: "高频" }
];

const filePath = path.join(__dirname, '../src/data/mockWords.ts');
let content = fs.readFileSync(filePath, 'utf-8');
content = content.slice(0, -3);
const newContent = JSON.stringify(newWords, null, 2);
content += ',\n' + newContent.slice(1, -1) + '\n];\n';
fs.writeFileSync(filePath, content);
console.log(`已添加 ${newWords.length} 个T开头新单词`);