const fs = require('fs');
const path = require('path');

const moreWords = [
  { id: "word_31", word: "acquire", meaning: "v. 获得；学到", level: "IELTS7", root: "quire", rootMeaning: "追求；询问", rootMeaningEn: "seek; ask", rootOrigin: "Latin", rootOriginNote: "源自拉丁语 acquirere", relatedWords: [], phonetic: "/əˈkwaɪə/", frequency: "高频" },
  { id: "word_32", word: "acquisition", meaning: "n. 获得；收购", level: "IELTS7", root: "quire", rootMeaning: "追求", rootMeaningEn: "seek", rootOrigin: "Latin", rootOriginNote: "源自拉丁语 acquisitio", relatedWords: [], phonetic: "/ˌækwɪˈzɪʃn/", frequency: "中频" },
  { id: "word_33", word: "across", meaning: "prep. 横过；穿过 adv. 横过", level: "IELTS5", root: "cross", rootMeaning: "交叉；横过", rootMeaningEn: "cross", rootOrigin: "Old English", rootOriginNote: "由 a- + cross 组成", relatedWords: [], phonetic: "/əˈkrɒs/", frequency: "高频" },
  { id: "word_34", word: "active", meaning: "adj. 积极的；活跃的", level: "IELTS5", root: "act", rootMeaning: "行动；表演", rootMeaningEn: "act; do", rootOrigin: "Latin", rootOriginNote: "源自拉丁语 activus", relatedWords: [], phonetic: "/ˈæktɪv/", frequency: "高频" },
  { id: "word_35", word: "activity", meaning: "n. 活动；行动", level: "IELTS5", root: "act", rootMeaning: "行动", rootMeaningEn: "act", rootOrigin: "Latin", rootOriginNote: "由 activ(e) + ity 组成", relatedWords: [], phonetic: "/ækˈtɪvəti/", frequency: "高频" },
  { id: "word_36", word: "actor", meaning: "n. 演员", level: "IELTS5", root: "act", rootMeaning: "行动；表演", rootMeaningEn: "act", rootOrigin: "Latin", rootOriginNote: "源自拉丁语 actor", relatedWords: [], phonetic: "/ˈæktə/", frequency: "高频" },
  { id: "word_37", word: "actual", meaning: "adj. 实际的；真实的", level: "IELTS6", root: "act", rootMeaning: "行动", rootMeaningEn: "act; deed", rootOrigin: "Latin", rootOriginNote: "源自拉丁语 actualis", relatedWords: [], phonetic: "/ˈæktʃuəl/", frequency: "高频" },
  { id: "word_38", word: "adapt", meaning: "v. 适应；改编", level: "IELTS6", root: "apt", rootMeaning: "适合；适应", rootMeaningEn: "fit; suitable", rootOrigin: "Latin", rootOriginNote: "源自拉丁语 adaptare", relatedWords: [], phonetic: "/əˈdæpt/", frequency: "高频" },
  { id: "word_39", word: "addition", meaning: "n. 增加；加法", level: "IELTS6", root: "add", rootMeaning: "加；增加", rootMeaningEn: "add; increase", rootOrigin: "Latin", rootOriginNote: "源自拉丁语 additio", relatedWords: [], phonetic: "/əˈdɪʃn/", frequency: "高频" },
  { id: "word_40", word: "additional", meaning: "adj. 额外的；附加的", level: "IELTS6", root: "add", rootMeaning: "加", rootMeaningEn: "add", rootOrigin: "Latin", rootOriginNote: "由 addition + al 组成", relatedWords: [], phonetic: "/əˈdɪʃənl/", frequency: "高频" },
  { id: "word_41", word: "address", meaning: "n. 地址；演说 v. 演说；处理", level: "IELTS6", root: "dress", rootMeaning: "整理；穿着", rootMeaningEn: "direct; arrange", rootOrigin: "Old French", rootOriginNote: "源自古法语 addresser", relatedWords: [], phonetic: "/əˈdres/", frequency: "高频" },
  { id: "word_42", word: "adequate", meaning: "adj. 足够的；适当的", level: "IELTS7", root: "equ", rootMeaning: "相等；公平", rootMeaningEn: "equal; fair", rootOrigin: "Latin", rootOriginNote: "源自拉丁语 adaequatus", relatedWords: [], phonetic: "/ˈædɪkwət/", frequency: "中频" },
  { id: "word_43", word: "adjust", meaning: "v. 调整；调节", level: "IELTS6", root: "just", rootMeaning: "正确；法律", rootMeaningEn: "right; law", rootOrigin: "Latin", rootOriginNote: "源自拉丁语 ajustare", relatedWords: [], phonetic: "/əˈdʒʌst/", frequency: "中频" },
  { id: "word_44", word: "administration", meaning: "n. 管理；行政", level: "IELTS7", root: "min", rootMeaning: "小；少；管理", rootMeaningEn: "small; less; manage", rootOrigin: "Latin", rootOriginNote: "源自拉丁语 administratio", relatedWords: [], phonetic: "/ədˌmɪnɪˈstreɪʃn/", frequency: "高频" },
  { id: "word_45", word: "admire", meaning: "v. 钦佩；欣赏", level: "IELTS6", root: "mir", rootMeaning: "看；惊奇", rootMeaningEn: "look; wonder", rootOrigin: "Latin", rootOriginNote: "源自拉丁语 admirari", relatedWords: [], phonetic: "/ədˈmaɪə/", frequency: "中频" },
  { id: "word_46", word: "admit", meaning: "v. 承认；允许进入", level: "IELTS5", root: "mit", rootMeaning: "送；放出", rootMeaningEn: "send; let go", rootOrigin: "Latin", rootOriginNote: "源自拉丁语 admittere", relatedWords: [], phonetic: "/ədˈmɪt/", frequency: "高频" },
  { id: "word_47", word: "adopt", meaning: "v. 采用；收养", level: "IELTS6", root: "opt", rootMeaning: "选择", rootMeaningEn: "choose", rootOrigin: "Latin", rootOriginNote: "源自拉丁语 adoptare", relatedWords: [], phonetic: "/əˈdɒpt/", frequency: "高频" },
  { id: "word_48", word: "adult", meaning: "n. 成年人 adj. 成年的", level: "IELTS5", root: "adult", rootMeaning: "成熟", rootMeaningEn: "grown up", rootOrigin: "Latin", rootOriginNote: "源自拉丁语 adultus", relatedWords: [], phonetic: "/ˈædʌlt/", frequency: "高频" },
  { id: "word_49", word: "advance", meaning: "v. 前进；推进 n. 进展", level: "IELTS6", root: "vanc", rootMeaning: "前面；在前", rootMeaningEn: "before; in front", rootOrigin: "Old French", rootOriginNote: "源自古法语 avancer", relatedWords: [], phonetic: "/ədˈvɑːns/", frequency: "高频" },
  { id: "word_50", word: "advanced", meaning: "adj. 先进的；高级的", level: "IELTS6", root: "vanc", rootMeaning: "前", rootMeaningEn: "front", rootOrigin: "Old French", rootOriginNote: "由 advance + d 组成", relatedWords: [], phonetic: "/ədˈvɑːnst/", frequency: "高频" },
  { id: "word_51", word: "advantage", meaning: "n. 优势；好处", level: "IELTS5", root: "vant", rootMeaning: "前面；利益", rootMeaningEn: "front; profit", rootOrigin: "Old French", rootOriginNote: "源自古法语 avantage", relatedWords: [], phonetic: "/ədˈvɑːntɪdʒ/", frequency: "高频" },
  { id: "word_52", word: "adventure", meaning: "n. 冒险；奇遇", level: "IELTS6", root: "vent", rootMeaning: "来；发生", rootMeaningEn: "come; happen", rootOrigin: "Latin", rootOriginNote: "源自古法语 aventure", relatedWords: [], phonetic: "/ədˈventʃə/", frequency: "中频" },
  { id: "word_53", word: "advertise", meaning: "v. 做广告；宣传", level: "IELTS6", root: "vert", rootMeaning: "转；翻转", rootMeaningEn: "turn; change", rootOrigin: "Latin", rootOriginNote: "源自古法语 advertise", relatedWords: [], phonetic: "/ˈædvətaɪz/", frequency: "高频" },
  { id: "word_54", word: "advertisement", meaning: "n. 广告；宣传", level: "IELTS5", root: "vert", rootMeaning: "转", rootMeaningEn: "turn", rootOrigin: "Latin", rootOriginNote: "由 advertise + ment 组成", relatedWords: [], phonetic: "/ədˈvɜːtɪsmənt/", frequency: "高频" },
  { id: "word_55", word: "advice", meaning: "n. 建议；劝告", level: "IELTS5", root: "vis", rootMeaning: "看", rootMeaningEn: "see", rootOrigin: "Old French", rootOriginNote: "源自古法语 advis", relatedWords: [], phonetic: "/ədˈvaɪs/", frequency: "高频" },
  { id: "word_56", word: "advise", meaning: "v. 建议；劝告", level: "IELTS6", root: "vis", rootMeaning: "看", rootMeaningEn: "see", rootOrigin: "Old French", rootOriginNote: "源自古法语 aviser", relatedWords: [], phonetic: "/ədˈvaɪz/", frequency: "高频" },
  { id: "word_57", word: "affair", meaning: "n. 事件；事务", level: "IELTS6", root: "fair", rootMeaning: "做；完成", rootMeaningEn: "do; perform", rootOrigin: "Old French", rootOriginNote: "源自古法语 afaire", relatedWords: [], phonetic: "/əˈfeə/", frequency: "中频" },
  { id: "word_58", word: "affect", meaning: "v. 影响；感染", level: "IELTS5", root: "fect", rootMeaning: "做；产生", rootMeaningEn: "do; make", rootOrigin: "Latin", rootOriginNote: "源自拉丁语 afficere", relatedWords: [], phonetic: "/əˈfekt/", frequency: "高频" },
  { id: "word_59", word: "affection", meaning: "n. 喜爱；感情", level: "IELTS7", root: "fect", rootMeaning: "做；感动", rootMeaningEn: "do; move", rootOrigin: "Latin", rootOriginNote: "源自古法语 affection", relatedWords: [], phonetic: "/əˈfekʃn/", frequency: "中频" },
  { id: "word_60", word: "afford", meaning: "v. 负担得起；提供", level: "IELTS5", root: "ford", rootMeaning: "前面；执行", rootMeaningEn: "before; perform", rootOrigin: "Old English", rootOriginNote: "源自盎格鲁-撒克逊语 geforthian", relatedWords: [], phonetic: "/əˈfɔːd/", frequency: "高频" }
];

const filePath = path.join(__dirname, '../src/data/mockWords.ts');
let content = fs.readFileSync(filePath, 'utf-8');
content = content.slice(0, -3);
const newContent = JSON.stringify(moreWords, null, 2);
content += ',\n' + newContent.slice(1, -1) + '\n];\n';
fs.writeFileSync(filePath, content);
console.log('已添加 ' + moreWords.length + ' 个单词');