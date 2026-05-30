const fs = require('fs');
const path = require('path');

const newWords = [
  {
    id: "word_225",
    word: "job",
    meaning: "n. 工作；职业",
    level: "IELTS5",
    root: "job",
    rootMeaning: "工作",
    rootMeaningEn: "work; task",
    rootOrigin: "Middle English",
    rootOriginNote: "源自中古英语 jobbe，意为工作或任务",
    relatedWords: [],
    phonetic: "/dʒɒb/",
    frequency: "高频"
  },
  {
    id: "word_226",
    word: "join",
    meaning: "v. 加入；连接",
    level: "IELTS5",
    root: "join",
    rootMeaning: "结合；连接",
    rootMeaningEn: "connect; unite",
    rootOrigin: "Old French",
    rootOriginNote: "源自古法语 joiner，意为连接或结合",
    relatedWords: [],
    phonetic: "/dʒɔɪn/",
    frequency: "高频"
  },
  {
    id: "word_227",
    word: "joint",
    meaning: "adj. 联合的；共同的 n. 关节；接头",
    level: "IELTS6",
    root: "join",
    rootMeaning: "连接",
    rootMeaningEn: "join",
    rootOrigin: "Old French",
    rootOriginNote: "由 join 派生而来",
    relatedWords: [],
    phonetic: "/dʒɔɪnt/",
    frequency: "中频"
  },
  {
    id: "word_228",
    word: "journal",
    meaning: "n. 日记；期刊",
    level: "IELTS6",
    root: "journ",
    rootMeaning: "日",
    rootMeaningEn: "day",
    rootOrigin: "Latin",
    rootOriginNote: "源自拉丁语 diurnalis，由 dies（日）派生",
    relatedWords: [],
    phonetic: "/ˈdʒɜːnl/",
    frequency: "中频"
  },
  {
    id: "word_229",
    word: "journey",
    meaning: "n. 旅行；旅程",
    level: "IELTS5",
    root: "journ",
    rootMeaning: "日；天",
    rootMeaningEn: "day",
    rootOrigin: "Old French",
    rootOriginNote: "源自古法语 journee，意为一天或旅程",
    relatedWords: [],
    phonetic: "/ˈdʒɜːni/",
    frequency: "高频"
  },
  {
    id: "word_230",
    word: "judge",
    meaning: "n. 法官；裁判 v. 判断；审判",
    level: "IELTS6",
    root: "judg",
    rootMeaning: "判断；法律",
    rootMeaningEn: "to judge; law",
    rootOrigin: "Latin",
    rootOriginNote: "源自拉丁语 judex，由 jus（法律）+ dicere（说）组成",
    relatedWords: [],
    phonetic: "/dʒʌdʒ/",
    frequency: "高频"
  },
  {
    id: "word_231",
    word: "judgement",
    meaning: "n. 判断；审判",
    level: "IELTS6",
    root: "judg",
    rootMeaning: "判断",
    rootMeaningEn: "judge",
    rootOrigin: "Latin",
    rootOriginNote: "由 judge 派生而来",
    relatedWords: [],
    phonetic: "/ˈdʒʌdʒmənt/",
    frequency: "高频"
  },
  {
    id: "word_232",
    word: "justify",
    meaning: "v. 证明合法；辩护",
    level: "IELTS7",
    root: "just",
    rootMeaning: "正确；法律",
    rootMeaningEn: "right; law",
    rootOrigin: "Latin",
    rootOriginNote: "源自拉丁语 justificare，由 jus（法律）+ facere（做）组成",
    relatedWords: [],
    phonetic: "/ˈdʒʌstɪfaɪ/",
    frequency: "高频"
  },
  {
    id: "word_233",
    word: "justify",
    meaning: "v. 证明合理；为...辩护",
    level: "IELTS7",
    root: "just",
    rootMeaning: "公正",
    rootMeaningEn: "righteous",
    rootOrigin: "Latin",
    rootOriginNote: "源自拉丁语 justificare",
    relatedWords: [],
    phonetic: "/ˈdʒʌstɪfaɪ/",
    frequency: "高频"
  }
];

const filePath = path.join(__dirname, '../src/data/mockWords.ts');
let content = fs.readFileSync(filePath, 'utf-8');

content = content.slice(0, -3);

const newContent = JSON.stringify(newWords, null, 2);

content += ',\n' + newContent.slice(1, -1) + '\n];\n';

fs.writeFileSync(filePath, content);
console.log(`已添加 ${newWords.length} 个J开头新单词`);