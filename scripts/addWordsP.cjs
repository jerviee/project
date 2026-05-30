const fs = require('fs');
const path = require('path');

const newWords = [
  { id: "word_309", word: "pace", meaning: "n. 步速；节奏", level: "IELTS6", root: "pac", rootMeaning: "步；走", rootMeaningEn: "step; walk", rootOrigin: "Latin", rootOriginNote: "源自拉丁语 passus，意为一步", relatedWords: [], phonetic: "/peɪs/", frequency: "高频" },
  { id: "word_310", word: "pack", meaning: "v. 包装；收拾 n. 背包", level: "IELTS5", root: "pack", rootMeaning: "包裹", rootMeaningEn: "bundle", rootOrigin: "Middle English", rootOriginNote: "源自中古英语 pakke，意为包裹", relatedWords: [], phonetic: "/pæk/", frequency: "中频" },
  { id: "word_311", word: "package", meaning: "n. 包裹；包装", level: "IELTS5", root: "pack", rootMeaning: "包裹", rootMeaningEn: "bundle", rootOrigin: "Middle English", rootOriginNote: "由 pack 派生而来", relatedWords: [], phonetic: "/ˈpækɪdʒ/", frequency: "高频" },
  { id: "word_312", word: "pain", meaning: "n. 疼痛；痛苦", level: "IELTS5", root: "pain", rootMeaning: "疼痛；惩罚", rootMeaningEn: "hurt; penalty", rootOrigin: "Old French", rootOriginNote: "源自古法语 paine，意为痛苦或努力", relatedWords: [], phonetic: "/peɪn/", frequency: "高频" },
  { id: "word_313", word: "painful", meaning: "adj. 疼痛的；痛苦的", level: "IELTS6", root: "pain", rootMeaning: "疼痛", rootMeaningEn: "hurt", rootOrigin: "Old French", rootOriginNote: "由 pain + ful 组成", relatedWords: [], phonetic: "/ˈpeɪnfl/", frequency: "中频" },
  { id: "word_314", word: "paint", meaning: "v. 绘画；涂漆 n. 油漆", level: "IELTS5", root: "paint", rootMeaning: "绘画；着色", rootMeaningEn: "depict; color", rootOrigin: "Old French", rootOriginNote: "源自古法语 painter，意为绘画", relatedWords: [], phonetic: "/peɪnt/", frequency: "高频" },
  { id: "word_315", word: "pair", meaning: "n. 一对；一双", level: "IELTS5", root: "pair", rootMeaning: "一对", rootMeaningEn: "two; couple", rootOrigin: "Old French", rootOriginNote: "源自古法语 paire，意为一对", relatedWords: [], phonetic: "/peə/", frequency: "高频" },
  { id: "word_316", word: "panel", meaning: "n. 面板；专门小组", level: "IELTS7", root: "pan", rootMeaning: "面板；布", rootMeaningEn: "cloth; flat surface", rootOrigin: "Latin", rootOriginNote: "源自拉丁语 panus，意为布或面板", relatedWords: [], phonetic: "/ˈpænl/", frequency: "高频" },
  { id: "word_317", word: "panic", meaning: "n./v. 恐慌；惊慌", level: "IELTS7", root: "pan", rootMeaning: "潘神", rootMeaningEn: "Pan", rootOrigin: "Greek", rootOriginNote: "源自希腊语 panikos，意为潘神的恐惧", relatedWords: [], phonetic: "/ˈpænɪk/", frequency: "中频" },
  { id: "word_318", word: "paper", meaning: "n. 纸；论文", level: "IELTS5", root: "pap", rootMeaning: "纸", rootMeaningEn: "paper", rootOrigin: "Latin", rootOriginNote: "源自拉丁语 papyrus，意为纸莎草纸", relatedWords: [], phonetic: "/ˈpeɪpə/", frequency: "高频" },
  { id: "word_319", word: "parallel", meaning: "adj. 平行的；类似的", level: "IELTS7", root: "all", rootMeaning: "别的；另外", rootMeaningEn: "other; beside", rootOrigin: "Greek", rootOriginNote: "源自希腊语 parallelos，由 para-（旁边）+ allelon（互相）组成", relatedWords: [], phonetic: "/ˈpærəlel/", frequency: "中频" },
  { id: "word_320", word: "parent", meaning: "n. 父亲；母亲；父母", level: "IELTS5", root: "par", rootMeaning: "产生；准备", rootMeaningEn: "produce; prepare", rootOrigin: "Latin", rootOriginNote: "源自拉丁语 parens，意为生父母", relatedWords: [], phonetic: "/ˈpeərənt/", frequency: "高频" },
  { id: "word_321", word: "part", meaning: "n. 部分；角色 v. 分开", level: "IELTS5", root: "part", rootMeaning: "部分；分开", rootMeaningEn: "portion; divide", rootOrigin: "Latin", rootOriginNote: "源自拉丁语 pars，意为部分", relatedWords: [], phonetic: "/pɑːt/", frequency: "高频" },
  { id: "word_322", word: "participate", meaning: "v. 参加；参与", level: "IELTS6", root: "cip", rootMeaning: "拿；抓", rootMeaningEn: "take; hold", rootOrigin: "Latin", rootOriginNote: "源自拉丁语 participare，由 pars（部分）+ capere（拿）组成", relatedWords: [], phonetic: "/pɑːˈtɪsɪpeɪt/", frequency: "高频" },
  { id: "word_323", word: "particular", meaning: "adj. 特别的；特定的", level: "IELTS6", root: "part", rootMeaning: "部分", rootMeaningEn: "portion", rootOrigin: "Latin", rootOriginNote: "源自拉丁语 particularis，由 pars（部分）派生", relatedWords: [], phonetic: "/pəˈtɪkjʊlə/", frequency: "高频" },
  { id: "word_324", word: "partly", meaning: "adv. 部分地；在一定程度上", level: "IELTS6", root: "part", rootMeaning: "部分", rootMeaningEn: "portion", rootOrigin: "Latin", rootOriginNote: "由 part + ly 组成", relatedWords: [], phonetic: "/ˈpɑːtli/", frequency: "高频" },
  { id: "word_325", word: "partner", meaning: "n. 伙伴；合伙人", level: "IELTS6", root: "part", rootMeaning: "部分", rootMeaningEn: "portion", rootOrigin: "Old French", rootOriginNote: "由 part + ner 组成，意为分享者", relatedWords: [], phonetic: "/ˈpɑːtnə/", frequency: "高频" },
  { id: "word_326", word: "pass", meaning: "v. 通过；经过 n. 通行证", level: "IELTS5", root: "pass", rootMeaning: "走；通过", rootMeaningEn: "go; move", rootOrigin: "Old French", rootOriginNote: "源自古法语 passer，意为走过", relatedWords: [], phonetic: "/pɑːs/", frequency: "高频" },
  { id: "word_327", word: "passage", meaning: "n. 通道；走廊；段落", level: "IELTS6", root: "pass", rootMeaning: "通过", rootMeaningEn: "go", rootOrigin: "Old French", rootOriginNote: "源自古法语 passage，由 passer 派生", relatedWords: [], phonetic: "/ˈpæsɪdʒ/", frequency: "高频" },
  { id: "word_328", word: "passenger", meaning: "n. 乘客；旅客", level: "IELTS5", root: "pass", rootMeaning: "通过", rootMeaningEn: "go", rootOrigin: "Old French", rootOriginNote: "由 pass + enger 组成", relatedWords: [], phonetic: "/ˈpæsɪndʒə/", frequency: "中频" }
];

const filePath = path.join(__dirname, '../src/data/mockWords.ts');
let content = fs.readFileSync(filePath, 'utf-8');
content = content.slice(0, -3);
const newContent = JSON.stringify(newWords, null, 2);
content += ',\n' + newContent.slice(1, -1) + '\n];\n';
fs.writeFileSync(filePath, content);
console.log(`已添加 ${newWords.length} 个P开头新单词`);