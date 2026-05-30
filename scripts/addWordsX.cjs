const fs = require('fs');
const path = require('path');

const newWords = [
  { id: "word_449", word: "yield", meaning: "v. 产生；让步 n. 产量", level: "IELTS7", root: "yield", rootMeaning: "给出；生产", rootMeaningEn: "give way; produce", rootOrigin: "Old English", rootOriginNote: "源自盎格鲁-撒克逊语 gieldan，意为支付或生产", relatedWords: [], phonetic: "/jiːld/", frequency: "中频" },
  { id: "word_450", word: "young", meaning: "adj. 年轻的；青年的 n. 青年", level: "IELTS5", root: "young", rootMeaning: "年轻", rootMeaningEn: "not old", rootOrigin: "Old English", rootOriginNote: "源自盎格鲁-撒克逊语 geong", relatedWords: [], phonetic: "/jʌŋ/", frequency: "高频" },
  { id: "word_451", word: "youth", meaning: "n. 青年；青春", level: "IELTS5", root: "young", rootMeaning: "年轻", rootMeaningEn: "young age", rootOrigin: "Old English", rootOriginNote: "源自盎格鲁-撒克逊语 geogop", relatedWords: [], phonetic: "/juːθ/", frequency: "高频" },
  { id: "word_452", word: "zeal", meaning: "n. 热情；热心", level: "IELTS7", root: "zeal", rootMeaning: "热心；热情", rootMeaningEn: "ardor; enthusiasm", rootOrigin: "Greek", rootOriginNote: "源自希腊语 zelos，意为热心或竞争", relatedWords: [], phonetic: "/ziːl/", frequency: "中频" },
  { id: "word_453", word: "zero", meaning: "n. 零；零点 num. 零", level: "IELTS5", root: "zero", rootMeaning: "零", rootMeaningEn: "nothing; nil", rootOrigin: "Arabic", rootOriginNote: "源自阿拉伯语 sifr，意为空或零", relatedWords: [], phonetic: "/ˈzɪərəʊ/", frequency: "高频" },
  { id: "word_454", word: "zone", meaning: "n. 区域；地带", level: "IELTS6", root: "zon", rootMeaning: "带；区域", rootMeaningEn: "belt; region", rootOrigin: "Greek", rootOriginNote: "源自希腊语 zone，意为带或区域", relatedWords: [], phonetic: "/zəʊn/", frequency: "高频" },
  { id: "word_455", word: "zoom", meaning: "v. 快速移动；放大 n. 缩放", level: "IELTS6", root: "zoom", rootMeaning: "嗡嗡声；快速", rootMeaningEn: "humming sound; move fast", rootOrigin: "English", rootOriginNote: "拟声词，模仿快速移动的声音", relatedWords: [], phonetic: "/zuːm/", frequency: "中频" },
  { id: "word_456", word: "abstract", meaning: "adj. 抽象的 n. 摘要", level: "IELTS7", root: "stract", rootMeaning: "拉；抽取", rootMeaningEn: "draw; pull", rootOrigin: "Latin", rootOriginNote: "源自拉丁语 abstractus，由 abs-（离开）+ trahere（拉）组成", relatedWords: [], phonetic: "/ˈæbstrækt/", frequency: "中频" },
  { id: "word_457", word: "abundance", meaning: "n. 丰富；大量", level: "IELTS7", root: "bund", rootMeaning: "多；充足", rootMeaningEn: "full; overflow", rootOrigin: "Latin", rootOriginNote: "源自拉丁语 abundantia，由 ab-（充满）+ undare（流动）派生", relatedWords: [], phonetic: "/əˈbʌndəns/", frequency: "中频" },
  { id: "word_458", word: "academy", meaning: "n. 学院；研究院", level: "IELTS7", root: "acad", rootMeaning: "学院；知识", rootMeaningEn: "school; knowledge", rootOrigin: "Greek", rootOriginNote: "源自希腊语 akademeia，由 Akademos（英雄）派生", relatedWords: [], phonetic: "/əˈkædəmi/", frequency: "中频" },
  { id: "word_459", word: "accelerate", meaning: "v. 加速；加快", level: "IELTS7", root: "cel", rootMeaning: "快；速度", rootMeaningEn: "swift; speed", rootOrigin: "Latin", rootOriginNote: "源自拉丁语 accelerare，由 ad-（加强）+ celer（快）组成", relatedWords: [], phonetic: "/əkˈseləreɪt/", frequency: "中频" },
  { id: "word_460", word: "acceptance", meaning: "n. 接受；认可", level: "IELTS7", root: "cept", rootMeaning: "拿；接受", rootMeaningEn: "take; receive", rootOrigin: "Latin", rootOriginNote: "源自拉丁语 acceptare，由 ac-（到）+ capere（拿）组成", relatedWords: [], phonetic: "/əkˈseptəns/", frequency: "中频" },
  { id: "word_461", word: "access", meaning: "n. 进入；访问 v. 访问", level: "IELTS6", root: "cess", rootMeaning: "走；进入", rootMeaningEn: "go; approach", rootOrigin: "Latin", rootOriginNote: "源自拉丁语 accessus，由 ad-（到）+ cedere（走）组成", relatedWords: [], phonetic: "/ˈækses/", frequency: "高频" },
  { id: "word_462", word: "accessible", meaning: "adj. 可进入的；易接近的", level: "IELTS7", root: "cess", rootMeaning: "走", rootMeaningEn: "go", rootOrigin: "Latin", rootOriginNote: "由 access + ible 组成", relatedWords: [], phonetic: "/əkˈsesəbl/", frequency: "中频" },
  { id: "word_463", word: "accident", meaning: "n. 事故；意外", level: "IELTS5", root: "cid", rootMeaning: "落下；发生", rootMeaningEn: "fall; happen", rootOrigin: "Latin", rootOriginNote: "源自拉丁语 accident，由 ad-（到）+ cadere（落）组成", relatedWords: [], phonetic: "/ˈæksɪdənt/", frequency: "高频" },
  { id: "word_464", word: "accompany", meaning: "v. 陪伴；伴随", level: "IELTS7", root: "compan", rootMeaning: "伙伴；面包", rootMeaningEn: "bread; companion", rootOrigin: "Old French", rootOriginNote: "由 ac- + compagne（伙伴）组成", relatedWords: [], phonetic: "/əˈkʌmpəni/", frequency: "中频" },
  { id: "word_465", word: "accomplish", meaning: "v. 完成；实现", level: "IELTS7", root: "plish", rootMeaning: "完成；充满", rootMeaningEn: "complete; fill", rootOrigin: "Latin", rootOriginNote: "源自拉丁语 accomplish，由 ad-（加强）+ complere（完成）组成", relatedWords: [], phonetic: "/əˈkʌmplɪʃ/", frequency: "中频" },
  { id: "word_466", word: "account", meaning: "n. 账户；说明 v. 解释", level: "IELTS6", root: "count", rootMeaning: "数；计算", rootMeaningEn: "count; number", rootOrigin: "Old French", rootOriginNote: "由 ac- + count 组成", relatedWords: [], phonetic: "/əˈkaʊnt/", frequency: "高频" },
  { id: "word_467", word: "accountant", meaning: "n. 会计；会计师", level: "IELTS6", root: "count", rootMeaning: "计算", rootMeaningEn: "count", rootOrigin: "Old French", rootOriginNote: "由 account + ant 组成", relatedWords: [], phonetic: "/əˈkaʊntənt/", frequency: "中频" },
  { id: "word_468", word: "accumulate", meaning: "v. 积累；堆积", level: "IELTS7", root: "cumul", rootMeaning: "堆积；积累", rootMeaningEn: "heap; pile", rootOrigin: "Latin", rootOriginNote: "源自拉丁语 accumulare，由 ad-（加强）+ cumulus（堆积）组成", relatedWords: [], phonetic: "/əˈkjuːmjʊleɪt/", frequency: "中频" }
];

const filePath = path.join(__dirname, '../src/data/mockWords.ts');
let content = fs.readFileSync(filePath, 'utf-8');
content = content.slice(0, -3);
const newContent = JSON.stringify(newWords, null, 2);
content += ',\n' + newContent.slice(1, -1) + '\n];\n';
fs.writeFileSync(filePath, content);
console.log(`已添加 ${newWords.length} 个X/Y/Z及其他开头新单词`);