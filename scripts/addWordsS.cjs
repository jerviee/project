const fs = require('fs');
const path = require('path');

const newWords = [
  { id: "word_349", word: "sacrifice", meaning: "v./n. 牺牲；献祭", level: "IELTS7", root: "sac", rootMeaning: "神圣", rootMeaningEn: "holy", rootOrigin: "Latin", rootOriginNote: "源自拉丁语 sacrificium，由 sacer（神圣）+ facere（做）组成", relatedWords: [], phonetic: "/ˈsækrɪfaɪs/", frequency: "中频" },
  { id: "word_350", word: "safe", meaning: "adj. 安全的；可靠的", level: "IELTS5", root: "saf", rootMeaning: "安全", rootMeaningEn: "secure", rootOrigin: "Old French", rootOriginNote: "源自古法语 sauf，意为安全", relatedWords: [], phonetic: "/seɪf/", frequency: "高频" },
  { id: "word_351", word: "safety", meaning: "n. 安全；平安", level: "IELTS5", root: "saf", rootMeaning: "安全", rootMeaningEn: "safe", rootOrigin: "Old French", rootOriginNote: "由 safe + ty 组成", relatedWords: [], phonetic: "/ˈseɪfti/", frequency: "高频" },
  { id: "word_352", word: "salary", meaning: "n. 薪水；工资", level: "IELTS6", root: "sal", rootMeaning: "盐", rootMeaningEn: "salt", rootOrigin: "Latin", rootOriginNote: "源自拉丁语 salarium，意为盐的配给或工资", relatedWords: [], phonetic: "/ˈsæləri/", frequency: "高频" },
  { id: "word_353", word: "sample", meaning: "n. 样本；样品 v. 抽样", level: "IELTS6", root: "samp", rootMeaning: "部分；样本", rootMeaningEn: "part; specimen", rootOrigin: "Old French", rootOriginNote: "源自古法语 essample，意为例子或样本", relatedWords: [], phonetic: "/ˈsɑːmpl/", frequency: "高频" },
  { id: "word_354", word: "satisfy", meaning: "v. 使满意；满足", level: "IELTS6", root: "sat", rootMeaning: "足够；满", rootMeaningEn: "enough; full", rootOrigin: "Latin", rootOriginNote: "源自拉丁语 satisfacere，由 satis（足够）+ facere（做）组成", relatedWords: [], phonetic: "/ˈsætɪsfaɪ/", frequency: "高频" },
  { id: "word_355", word: "save", meaning: "v. 拯救；保存 prep. 除了", level: "IELTS5", root: "sav", rootMeaning: "安全；拯救", rootMeaningEn: "safe; rescue", rootOrigin: "Latin", rootOriginNote: "源自拉丁语 salvare，意为拯救或保存", relatedWords: [], phonetic: "/seɪv/", frequency: "高频" },
  { id: "word_356", word: "scale", meaning: "n. 规模；刻度 v. 攀登", level: "IELTS6", root: "scal", rootMeaning: "梯子；规模", rootMeaningEn: "ladder; size", rootOrigin: "Latin", rootOriginNote: "源自拉丁语 scala，意为梯子或刻度", relatedWords: [], phonetic: "/skeɪl/", frequency: "高频" },
  { id: "word_357", word: "scare", meaning: "v. 惊吓；使恐惧 n. 恐慌", level: "IELTS6", root: "scar", rootMeaning: "惊吓", rootMeaningEn: "frighten", rootOrigin: "Old Norse", rootOriginNote: "源自古诺尔斯语 skirra，意为惊吓", relatedWords: [], phonetic: "/skeə/", frequency: "中频" },
  { id: "word_358", word: "scenario", meaning: "n. 情节；方案", level: "IELTS7", root: "scen", rootMeaning: "场景", rootMeaningEn: "scene", rootOrigin: "Italian", rootOriginNote: "源自意大利语 scenario，意为舞台场景", relatedWords: [], phonetic: "/səˈnɑːriəʊ/", frequency: "中频" },
  { id: "word_359", word: "scene", meaning: "n. 场景；景色", level: "IELTS6", root: "scen", rootMeaning: "场景", rootMeaningEn: "stage; view", rootOrigin: "Greek", rootOriginNote: "源自希腊语 skene，意为舞台或场景", relatedWords: [], phonetic: "/siːn/", frequency: "高频" },
  { id: "word_360", word: "schedule", meaning: "n. 时间表；日程 v. 安排", level: "IELTS6", root: "sched", rootMeaning: "纸片；时间表", rootMeaningEn: "paper; time", rootOrigin: "Latin", rootOriginNote: "源自拉丁语 scheda，意为纸片或时间表", relatedWords: [], phonetic: "/ˈʃedjuːl/", frequency: "高频" },
  { id: "word_361", word: "scheme", meaning: "n. 计划；方案 v. 策划", level: "IELTS7", root: "schem", rootMeaning: "计划；形式", rootMeaningEn: "plan; form", rootOrigin: "Greek", rootOriginNote: "源自希腊语 schema，意为计划或形式", relatedWords: [], phonetic: "/skiːm/", frequency: "中频" },
  { id: "word_362", word: "scholar", meaning: "n. 学者", level: "IELTS7", root: "schol", rootMeaning: "学校；学习", rootMeaningEn: "school; learn", rootOrigin: "Latin", rootOriginNote: "源自拉丁语 scholasticus，由 schola（学校）派生", relatedWords: [], phonetic: "/ˈskɒlə/", frequency: "中频" },
  { id: "word_363", word: "scholarship", meaning: "n. 奖学金；学问", level: "IELTS7", root: "schol", rootMeaning: "学校", rootMeaningEn: "school", rootOrigin: "Latin", rootOriginNote: "由 scholar + ship 组成", relatedWords: [], phonetic: "/ˈskɒləʃɪp/", frequency: "中频" },
  { id: "word_364", word: "science", meaning: "n. 科学", level: "IELTS5", root: "sci", rootMeaning: "知道", rootMeaningEn: "know", rootOrigin: "Latin", rootOriginNote: "源自拉丁语 scientia，由 scire（知道）派生", relatedWords: [], phonetic: "/ˈsaɪəns/", frequency: "高频" },
  { id: "word_365", word: "scientific", meaning: "adj. 科学的", level: "IELTS6", root: "sci", rootMeaning: "知道", rootMeaningEn: "know", rootOrigin: "Latin", rootOriginNote: "由 science + ific 组成", relatedWords: [], phonetic: "/ˌsaɪənˈtɪfɪk/", frequency: "高频" },
  { id: "word_366", word: "scope", meaning: "n. 范围；余地", level: "IELTS7", root: "scop", rootMeaning: "看；范围", rootMeaningEn: "see; range", rootOrigin: "Greek", rootOriginNote: "源自希腊语 skopos，意为目标或范围", relatedWords: [], phonetic: "/skəʊp/", frequency: "中频" },
  { id: "word_367", word: "score", meaning: "n. 分数；二十 v. 评分", level: "IELTS5", root: "scor", rootMeaning: "刻痕；分数", rootMeaningEn: "notch; twenty", rootOrigin: "Old Norse", rootOriginNote: "源自古诺尔斯语 skor，意为刻痕或二十", relatedWords: [], phonetic: "/skɔː/", frequency: "高频" },
  { id: "word_368", word: "screen", meaning: "n. 屏幕；银幕 v. 审查", level: "IELTS6", root: "screen", rootMeaning: "屏幕；掩藏", rootMeaningEn: "partition; hide", rootOrigin: "Old French", rootOriginNote: "源自古法语 escren，意为隔板或屏幕", relatedWords: [], phonetic: "/skriːn/", frequency: "高频" }
];

const filePath = path.join(__dirname, '../src/data/mockWords.ts');
let content = fs.readFileSync(filePath, 'utf-8');
content = content.slice(0, -3);
const newContent = JSON.stringify(newWords, null, 2);
content += ',\n' + newContent.slice(1, -1) + '\n];\n';
fs.writeFileSync(filePath, content);
console.log(`已添加 ${newWords.length} 个S开头新单词`);