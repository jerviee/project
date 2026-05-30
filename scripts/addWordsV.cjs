const fs = require('fs');
const path = require('path');

const newWords = [
  { id: "word_409", word: "vacation", meaning: "n. 假期；休假", level: "IELTS5", root: "vac", rootMeaning: "空；闲暇", rootMeaningEn: "empty; leisure", rootOrigin: "Latin", rootOriginNote: "源自拉丁语 vacatio，由 vacare（空闲）派生", relatedWords: [], phonetic: "/vəˈkeɪʃn/", frequency: "高频" },
  { id: "word_410", word: "valid", meaning: "adj. 有效的；正当的", level: "IELTS7", root: "val", rootMeaning: "强；价值", rootMeaningEn: "strong; worth", rootOrigin: "Latin", rootOriginNote: "源自拉丁语 validus，由 valere（强大）派生", relatedWords: [], phonetic: "/ˈvælɪd/", frequency: "中频" },
  { id: "word_411", word: "value", meaning: "n. 价值；重要性 v. 重视", level: "IELTS5", root: "val", rootMeaning: "价值", rootMeaningEn: "worth; price", rootOrigin: "Latin", rootOriginNote: "源自拉丁语 valere，意为有价值", relatedWords: [], phonetic: "/ˈvæljuː/", frequency: "高频" },
  { id: "word_412", word: "variety", meaning: "n. 多样性；种类", level: "IELTS6", root: "var", rootMeaning: "变化；不同", rootMeaningEn: "change; differ", rootOrigin: "Latin", rootOriginNote: "源自拉丁语 varietas，由 varius（多样的）派生", relatedWords: [], phonetic: "/vəˈraɪəti/", frequency: "高频" },
  { id: "word_413", word: "various", meaning: "adj. 各种各样的", level: "IELTS5", root: "var", rootMeaning: "变化", rootMeaningEn: "change; differ", rootOrigin: "Latin", rootOriginNote: "源自拉丁语 varius，意为多样的", relatedWords: [], phonetic: "/ˈveəriəs/", frequency: "高频" },
  { id: "word_414", word: "vary", meaning: "v. 改变；变化", level: "IELTS6", root: "var", rootMeaning: "变化", rootMeaningEn: "change", rootOrigin: "Latin", rootOriginNote: "源自拉丁语 variare，由 varius（多样的）派生", relatedWords: [], phonetic: "/ˈveəri/", frequency: "高频" },
  { id: "word_415", word: "vast", meaning: "adj. 巨大的；广阔的", level: "IELTS6", root: "vast", rootMeaning: "广阔", rootMeaningEn: "wide; spacious", rootOrigin: "Latin", rootOriginNote: "源自拉丁语 vastus，意为空旷或巨大", relatedWords: [], phonetic: "/vɑːst/", frequency: "高频" },
  { id: "word_416", word: "vehicle", meaning: "n. 车辆；工具", level: "IELTS6", root: "veh", rootMeaning: "携带；运载", rootMeaningEn: "carry; convey", rootOrigin: "Latin", rootOriginNote: "源自拉丁语 vehiculum，由 vehere（携带）派生", relatedWords: [], phonetic: "/ˈviːəkl/", frequency: "高频" },
  { id: "word_417", word: "venture", meaning: "n./v. 冒险；企业", level: "IELTS7", root: "vent", rootMeaning: "来；冒险", rootMeaningEn: "come; risk", rootOrigin: "Old French", rootOriginNote: "源自古法语 aventurer，由 a-（到）+ venir（来）组成", relatedWords: [], phonetic: "/ˈventʃə/", frequency: "中频" },
  { id: "word_418", word: "verify", meaning: "v. 核实；验证", level: "IELTS7", root: "ver", rootMeaning: "真实", rootMeaningEn: "true", rootOrigin: "Latin", rootOriginNote: "源自拉丁语 verificare，由 verus（真实）+ facere（做）组成", relatedWords: [], phonetic: "/ˈverɪfaɪ/", frequency: "中频" },
  { id: "word_419", word: "version", meaning: "n. 版本；说法", level: "IELTS6", root: "vers", rootMeaning: "转；版本", rootMeaningEn: "turn; account", rootOrigin: "Latin", rootOriginNote: "源自拉丁语 versio，由 vertere（转）派生", relatedWords: [], phonetic: "/ˈvɜːʃn/", frequency: "高频" },
  { id: "word_420", word: "versus", meaning: "prep. 对； versus", level: "IELTS7", root: "vers", rootMeaning: "转", rootMeaningEn: "turn; against", rootOrigin: "Latin", rootOriginNote: "源自拉丁语 versus，意为转向", relatedWords: [], phonetic: "/ˈvɜːsəs/", frequency: "中频" },
  { id: "word_421", word: "very", meaning: "adv. 非常；很 adj. 恰好", level: "IELTS5", root: "ver", rootMeaning: "真", rootMeaningEn: "true", rootOrigin: "Old French", rootOriginNote: "源自古法语 verai，意为真实", relatedWords: [], phonetic: "/ˈveri/", frequency: "高频" },
  { id: "word_422", word: "victim", meaning: "n. 受害者；牺牲品", level: "IELTS6", root: "vic", rootMeaning: "征服；战胜", rootMeaningEn: "conquer; overcome", rootOrigin: "Latin", rootOriginNote: "源自拉丁语 victima，意为祭祀用的牺牲", relatedWords: [], phonetic: "/ˈvɪktɪm/", frequency: "高频" },
  { id: "word_423", word: "victory", meaning: "n. 胜利；成功", level: "IELTS6", root: "vic", rootMeaning: "征服", rootMeaningEn: "conquer", rootOrigin: "Latin", rootOriginNote: "源自拉丁语 victoria，由 vincere（征服）派生", relatedWords: [], phonetic: "/ˈvɪktəri/", frequency: "高频" },
  { id: "word_424", word: "view", meaning: "n. 观点；视野 v. 看待", level: "IELTS5", root: "vid", rootMeaning: "看", rootMeaningEn: "see; look", rootOrigin: "Latin", rootOriginNote: "源自拉丁语 videre，意为看或观点", relatedWords: [], phonetic: "/vjuː/", frequency: "高频" },
  { id: "word_425", word: "viewer", meaning: "n. 观看者；观众", level: "IELTS6", root: "view", rootMeaning: "看", rootMeaningEn: "see", rootOrigin: "English", rootOriginNote: "由 view + er 组成", relatedWords: [], phonetic: "/ˈvjuːə/", frequency: "中频" },
  { id: "word_426", word: "viewpoint", meaning: "n. 观点；看法", level: "IELTS6", root: "view", rootMeaning: "看", rootMeaningEn: "see", rootOrigin: "English", rootOriginNote: "由 view + point 组成", relatedWords: [], phonetic: "/ˈvjuːpɔɪnt/", frequency: "高频" },
  { id: "word_427", word: "vigorous", meaning: "adj. 有力的；精力充沛的", level: "IELTS7", root: "vigor", rootMeaning: "精力；活力", rootMeaningEn: "energy; strength", rootOrigin: "Latin", rootOriginNote: "源自拉丁语 vigorosus，由 vigor（精力）派生", relatedWords: [], phonetic: "/ˈvɪɡərəs/", frequency: "中频" },
  { id: "word_428", word: "violence", meaning: "n. 暴力；激烈", level: "IELTS6", root: "viol", rootMeaning: "暴力；违反", rootMeaningEn: "violence; force", rootOrigin: "Latin", rootOriginNote: "源自拉丁语 violentia，由 vis（力量）派生", relatedWords: [], phonetic: "/ˈvaɪələns/", frequency: "高频" }
];

const filePath = path.join(__dirname, '../src/data/mockWords.ts');
let content = fs.readFileSync(filePath, 'utf-8');
content = content.slice(0, -3);
const newContent = JSON.stringify(newWords, null, 2);
content += ',\n' + newContent.slice(1, -1) + '\n];\n';
fs.writeFileSync(filePath, content);
console.log(`已添加 ${newWords.length} 个V开头新单词`);