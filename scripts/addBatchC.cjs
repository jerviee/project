const fs = require('fs');
const path = require('path');

const words = [
  { id: "word_121", word: "anything", meaning: "pron. 任何事", level: "IELTS5", root: "thing", rootMeaning: "事情；东西", rootMeaningEn: "thing; object", rootOrigin: "Old English", rootOriginNote: "由 any + thing 组成", relatedWords: [], phonetic: "/ˈeniθɪŋ/", frequency: "高频" },
  { id: "word_122", word: "anyway", meaning: "adv. 无论如何", level: "IELTS6", root: "way", rootMeaning: "方式", rootMeaningEn: "manner", rootOrigin: "Old English", rootOriginNote: "由 any + way 组成", relatedWords: [], phonetic: "/ˈeniweɪ/", frequency: "高频" },
  { id: "word_123", word: "anywhere", meaning: "adv. 任何地方", level: "IELTS5", root: "where", rootMeaning: "哪里", rootMeaningEn: "what place", rootOrigin: "Old English", rootOriginNote: "由 any + where 组成", relatedWords: [], phonetic: "/ˈeniweə/", frequency: "高频" },
  { id: "word_124", word: "apart", meaning: "adv. 分开；相隔", level: "IELTS6", root: "part", rootMeaning: "部分；分开", rootMeaningEn: "portion; separate", rootOrigin: "Latin", rootOriginNote: "源自古法语 a part", relatedWords: [], phonetic: "/əˈpɑːt/", frequency: "高频" },
  { id: "word_125", word: "apartment", meaning: "n. 公寓；房间", level: "IELTS5", root: "part", rootMeaning: "部分", rootMeaningEn: "part; portion", rootOrigin: "French", rootOriginNote: "源自法语 appartement", relatedWords: [], phonetic: "/əˈpɑːtmənt/", frequency: "高频" },
  { id: "word_126", word: "apologize", meaning: "v. 道歉；谢罪", level: "IELTS6", root: "log", rootMeaning: "说；谈话", rootMeaningEn: "speak; talk", rootOrigin: "Greek", rootOriginNote: "由 apo + logy 组成", relatedWords: [], phonetic: "/əˈpɒlədʒaɪz/", frequency: "中频" },
  { id: "word_127", word: "apparent", meaning: "adj. 明显的；表面上的", level: "IELTS7", root: "par", rootMeaning: "出现；看见", rootMeaningEn: "appear; see", rootOrigin: "Old French", rootOriginNote: "源自古法语 aparant", relatedWords: [], phonetic: "/əˈpærənt/", frequency: "中频" },
  { id: "word_128", word: "appeal", meaning: "v./n. 呼吁；吸引", level: "IELTS6", root: "peal", rootMeaning: "呼吁；请求", rootMeaningEn: "call; beg", rootOrigin: "Latin", rootOriginNote: "源自古法语 apeal", relatedWords: [], phonetic: "/əˈpiːl/", frequency: "高频" },
  { id: "word_129", word: "appear", meaning: "v. 出现；显得", level: "IELTS5", root: "pear", rootMeaning: "出现；看见", rootMeaningEn: "come in sight", rootOrigin: "Old French", rootOriginNote: "源自古法语 appear", relatedWords: [], phonetic: "/əˈpɪə/", frequency: "高频" },
  { id: "word_130", word: "appearance", meaning: "n. 外表；出现", level: "IELTS6", root: "pear", rootMeaning: "出现", rootMeaningEn: "appear", rootOrigin: "Old French", rootOriginNote: "由 appear + ance 组成", relatedWords: [], phonetic: "/əˈpɪərəns/", frequency: "高频" },
  { id: "word_131", word: "appetite", meaning: "n. 食欲；欲望", level: "IELTS7", root: "pet", rootMeaning: "追求；渴望", rootMeaningEn: "seek; long for", rootOrigin: "Latin", rootOriginNote: "源自拉丁语 appetitus", relatedWords: [], phonetic: "/ˈæpɪtaɪt/", frequency: "中频" },
  { id: "word_132", word: "applaud", meaning: "v. 鼓掌；称赞", level: "IELTS7", root: "plaud", rootMeaning: "鼓掌；赞许", rootMeaningEn: "clap; praise", rootOrigin: "Latin", rootOriginNote: "源自拉丁语 applaudere", relatedWords: [], phonetic: "/əˈplɔːd/", frequency: "中频" },
  { id: "word_133", word: "apple", meaning: "n. 苹果", level: "IELTS5", root: "apple", rootMeaning: "苹果", rootMeaningEn: "apple", rootOrigin: "Old English", rootOriginNote: "源自盎格鲁-撒克逊语 æppel", relatedWords: [], phonetic: "/ˈæpl/", frequency: "高频" },
  { id: "word_134", word: "application", meaning: "n. 应用；申请", level: "IELTS6", root: "ply", rootMeaning: "折叠；应用", rootMeaningEn: "fold; apply", rootOrigin: "Latin", rootOriginNote: "源自拉丁语 applicatio", relatedWords: [], phonetic: "/ˌæplɪˈkeɪʃn/", frequency: "高频" },
  { id: "word_135", word: "apply", meaning: "v. 申请；应用", level: "IELTS5", root: "ply", rootMeaning: "折叠；应用", rootMeaningEn: "fold; put on", rootOrigin: "Old French", rootOriginNote: "源自古法语 apliquer", relatedWords: [], phonetic: "/əˈplaɪ/", frequency: "高频" },
  { id: "word_136", word: "appoint", meaning: "v. 任命；指定", level: "IELTS7", root: "point", rootMeaning: "点；指定", rootMeaningEn: "point; fix", rootOrigin: "Old French", rootOriginNote: "源自古法语 appointer", relatedWords: [], phonetic: "/əˈpɔɪnt/", frequency: "中频" },
  { id: "word_137", word: "appointment", meaning: "n. 约会；任命", level: "IELTS6", root: "point", rootMeaning: "点", rootMeaningEn: "point; fixing", rootOrigin: "Old French", rootOriginNote: "由 appoint + ment 组成", relatedWords: [], phonetic: "/əˈpɔɪntmənt/", frequency: "中频" },
  { id: "word_138", word: "appreciate", meaning: "v. 感激；欣赏", level: "IELTS6", root: "preci", rootMeaning: "价值；价格", rootMeaningEn: "price; value", rootOrigin: "Latin", rootOriginNote: "源自拉丁语 appretiari", relatedWords: [], phonetic: "/əˈpriːʃieɪt/", frequency: "高频" },
  { id: "word_139", word: "approach", meaning: "v. 接近；靠近 n. 方法", level: "IELTS5", root: "proach", rootMeaning: "接近", rootMeaningEn: "draw near", rootOrigin: "Old French", rootOriginNote: "源自古法语 aprocher", relatedWords: [], phonetic: "/əˈprəʊtʃ/", frequency: "高频" },
  { id: "word_140", word: "appropriate", meaning: "adj. 适当的 v. 拨款", level: "IELTS7", root: "prop", rootMeaning: "适当；占有", rootMeaningEn: "proper; own", rootOrigin: "Latin", rootOriginNote: "源自拉丁语 appropriatus", relatedWords: [], phonetic: "/əˈprəʊpriət/", frequency: "高频" },
  { id: "word_141", word: "approve", meaning: "v. 批准；赞成", level: "IELTS7", root: "prov", rootMeaning: "证明；批准", rootMeaningEn: "prove; test", rootOrigin: "Latin", rootOriginNote: "由 ap- + prove 组成", relatedWords: [], phonetic: "/əˈpruːv/", frequency: "中频" },
  { id: "word_142", word: "approximate", meaning: "adj. 大约的；近似的", level: "IELTS7", root: "proxim", rootMeaning: "接近；最近", rootMeaningEn: "near; close", rootOrigin: "Latin", rootOriginNote: "源自拉丁语 approximare", relatedWords: [], phonetic: "/əˈprɒksɪmət/", frequency: "中频" },
  { id: "word_143", word: "arbitrary", meaning: "adj. 任意的；武断的", level: "IELTS7", root: "bit", rootMeaning: "选择；决定", rootMeaningEn: "choose; decide", rootOrigin: "Latin", rootOriginNote: "源自拉丁语 arbitrarius", relatedWords: [], phonetic: "/ˈɑːbɪtrəri/", frequency: "中频" },
  { id: "word_144", word: "architect", meaning: "n. 建筑师", level: "IELTS7", root: "arch", rootMeaning: "主要的；统治", rootMeaningEn: "chief; rule", rootOrigin: "Greek", rootOriginNote: "源自希腊语 arkhi- + tektōn", relatedWords: [], phonetic: "/ˈɑːkɪtekt/", frequency: "中频" },
  { id: "word_145", word: "architecture", meaning: "n. 建筑学；建筑风格", level: "IELTS7", root: "arch", rootMeaning: "主要", rootMeaningEn: "chief", rootOrigin: "Greek", rootOriginNote: "由 architect + ure 组成", relatedWords: [], phonetic: "/ˈɑːkɪtektʃə/", frequency: "中频" },
  { id: "word_146", word: "area", meaning: "n. 区域；面积", level: "IELTS5", root: "area", rootMeaning: "区域；空地", rootMeaningEn: "open space; region", rootOrigin: "Latin", rootOriginNote: "源自拉丁语 area", relatedWords: [], phonetic: "/ˈeəriə/", frequency: "高频" },
  { id: "word_147", word: "argue", meaning: "v. 争论；争辩", level: "IELTS5", root: "argu", rootMeaning: "清楚；证明", rootMeaningEn: "make clear; prove", rootOrigin: "Latin", rootOriginNote: "源自拉丁语 arguere", relatedWords: [], phonetic: "/ˈɑːɡjuː/", frequency: "高频" },
  { id: "word_148", word: "argument", meaning: "n. 争论；论据", level: "IELTS6", root: "argu", rootMeaning: "清楚；争论", rootMeaningEn: "make clear; dispute", rootOrigin: "Latin", rootOriginNote: "源自古法语 argument", relatedWords: [], phonetic: "/ˈɑːɡjumənt/", frequency: "高频" },
  { id: "word_149", word: "arise", meaning: "v. 出现；产生", level: "IELTS7", root: "rise", rootMeaning: "升起；上升", rootMeaningEn: "get up; rise", rootOrigin: "Old English", rootOriginNote: "由 a- + rise 组成", relatedWords: [], phonetic: "/əˈraɪz/", frequency: "高频" },
  { id: "word_150", word: "arm", meaning: "n. 手臂；武器 v. 武装", level: "IELTS5", root: "arm", rootMeaning: "手臂；武器", rootMeaningEn: "arm; weapon", rootOrigin: "Old English", rootOriginNote: "源自盎格鲁-撒克逊语 arm", relatedWords: [], phonetic: "/ɑːm/", frequency: "高频" }
];

const filePath = path.join(__dirname, '../src/data/mockWords.ts');
let content = fs.readFileSync(filePath, 'utf-8');
content = content.slice(0, -3);
const newContent = JSON.stringify(words, null, 2);
content += ',\n' + newContent.slice(1, -1) + '\n];\n';
fs.writeFileSync(filePath, content);
console.log('已添加 ' + words.length + ' 个单词');