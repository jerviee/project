const fs = require('fs');
const path = require('path');

const baseWords = [
  { id: "word_1", word: "abandon", meaning: "v. 放弃；抛弃", level: "IELTS6", root: "band", rootMeaning: "捆绑", rootMeaningEn: "bind", rootOrigin: "Old French", rootOriginNote: "源自古法语 abandonner", relatedWords: [], phonetic: "/əˈbændən/", frequency: "中频" },
  { id: "word_2", word: "ability", meaning: "n. 能力", level: "IELTS5", root: "able", rootMeaning: "能够", rootMeaningEn: "capable", rootOrigin: "Latin", rootOriginNote: "源自拉丁语abilitas", relatedWords: [], phonetic: "/əˈbɪləti/", frequency: "高频" },
  { id: "word_3", word: "able", meaning: "adj. 能干的；能够的", level: "IELTS5", root: "able", rootMeaning: "能够", rootMeaningEn: "capable", rootOrigin: "Latin", rootOriginNote: "源自拉丁语 habile", relatedWords: [], phonetic: "/ˈeɪbl/", frequency: "高频" },
  { id: "word_4", word: "abnormal", meaning: "adj. 异常的；反常的", level: "IELTS7", root: "norm", rootMeaning: "规范；标准", rootMeaningEn: "rule; standard", rootOrigin: "Latin", rootOriginNote: "源自拉丁语 abnormis", relatedWords: [], phonetic: "/æbˈnɔːml/", frequency: "中频" },
  { id: "word_5", word: "abolish", meaning: "v. 废除；取消", level: "IELTS7", root: "bol", rootMeaning: "毁灭", rootMeaningEn: "destroy", rootOrigin: "Latin", rootOriginNote: "源自拉丁语 abolere", relatedWords: [], phonetic: "/əˈbɒlɪʃ/", frequency: "中频" },
  { id: "word_6", word: "absence", meaning: "n. 缺席；缺乏", level: "IELTS6", root: "sence", rootMeaning: "存在", rootMeaningEn: "presence", rootOrigin: "Latin", rootOriginNote: "源自拉丁语 absentia", relatedWords: [], phonetic: "/ˈæbsəns/", frequency: "高频" },
  { id: "word_7", word: "absent", meaning: "adj. 缺席的；缺少的", level: "IELTS7", root: "sence", rootMeaning: "存在", rootMeaningEn: "presence", rootOrigin: "Latin", rootOriginNote: "源自拉丁语 absens", relatedWords: [], phonetic: "/ˈæbsənt/", frequency: "中频" },
  { id: "word_8", word: "absolute", meaning: "adj. 绝对的；完全的", level: "IELTS7", root: "solute", rootMeaning: "溶解；解决", rootMeaningEn: "loosen; solve", rootOrigin: "Latin", rootOriginNote: "源自拉丁语 absolutus", relatedWords: [], phonetic: "/ˈæbsəluːt/", frequency: "中频" },
  { id: "word_9", word: "absorb", meaning: "v. 吸收；吸引", level: "IELTS6", root: "sorb", rootMeaning: "吸收", rootMeaningEn: "suck in", rootOrigin: "Latin", rootOriginNote: "源自拉丁语 absorbere", relatedWords: [], phonetic: "/əbˈzɔːb/", frequency: "高频" },
  { id: "word_10", word: "abstract", meaning: "adj. 抽象的 n. 摘要", level: "IELTS7", root: "stract", rootMeaning: "拉；抽取", rootMeaningEn: "draw; pull", rootOrigin: "Latin", rootOriginNote: "源自拉丁语 abstractus", relatedWords: [], phonetic: "/ˈæbstrækt/", frequency: "中频" },
  { id: "word_11", word: "abundance", meaning: "n. 丰富；大量", level: "IELTS7", root: "bund", rootMeaning: "多；充足", rootMeaningEn: "full; overflow", rootOrigin: "Latin", rootOriginNote: "源自拉丁语 abundantia", relatedWords: [], phonetic: "/əˈbʌndəns/", frequency: "中频" },
  { id: "word_12", word: "abundant", meaning: "adj. 丰富的；大量的", level: "IELTS7", root: "bund", rootMeaning: "多", rootMeaningEn: "full", rootOrigin: "Latin", rootOriginNote: "源自拉丁语 abundans", relatedWords: [], phonetic: "/əˈbʌndənt/", frequency: "中频" },
  { id: "word_13", word: "academic", meaning: "adj. 学术的；学院的", level: "IELTS6", root: "demic", rootMeaning: "人民；学问", rootMeaningEn: "people; learning", rootOrigin: "Greek", rootOriginNote: "源自希腊语 akademeia", relatedWords: [], phonetic: "/ˌækəˈdemɪk/", frequency: "高频" },
  { id: "word_14", word: "academy", meaning: "n. 学院；研究院", level: "IELTS7", root: "acad", rootMeaning: "学院；知识", rootMeaningEn: "school; knowledge", rootOrigin: "Greek", rootOriginNote: "源自希腊语 akademeia", relatedWords: [], phonetic: "/əˈkædəmi/", frequency: "中频" },
  { id: "word_15", word: "accelerate", meaning: "v. 加速；加快", level: "IELTS7", root: "cel", rootMeaning: "快；速度", rootMeaningEn: "swift; speed", rootOrigin: "Latin", rootOriginNote: "源自拉丁语 accelerare", relatedWords: [], phonetic: "/əkˈseləreɪt/", frequency: "中频" },
  { id: "word_16", word: "accept", meaning: "v. 接受；承认", level: "IELTS5", root: "cept", rootMeaning: "拿；接受", rootMeaningEn: "take; receive", rootOrigin: "Latin", rootOriginNote: "源自拉丁语 acceptare", relatedWords: [], phonetic: "/əkˈsept/", frequency: "高频" },
  { id: "word_17", word: "acceptance", meaning: "n. 接受；认可", level: "IELTS7", root: "cept", rootMeaning: "拿；接受", rootMeaningEn: "take; receive", rootOrigin: "Latin", rootOriginNote: "源自拉丁语 acceptare", relatedWords: [], phonetic: "/əkˈseptəns/", frequency: "中频" },
  { id: "word_18", word: "access", meaning: "n. 进入；访问 v. 访问", level: "IELTS6", root: "cess", rootMeaning: "走；进入", rootMeaningEn: "go; approach", rootOrigin: "Latin", rootOriginNote: "源自拉丁语 accessus", relatedWords: [], phonetic: "/ˈækses/", frequency: "高频" },
  { id: "word_19", word: "accessible", meaning: "adj. 可进入的；易接近的", level: "IELTS7", root: "cess", rootMeaning: "走", rootMeaningEn: "go", rootOrigin: "Latin", rootOriginNote: "由 access + ible 组成", relatedWords: [], phonetic: "/əkˈsesəbl/", frequency: "中频" },
  { id: "word_20", word: "accident", meaning: "n. 事故；意外", level: "IELTS5", root: "cid", rootMeaning: "落下；发生", rootMeaningEn: "fall; happen", rootOrigin: "Latin", rootOriginNote: "源自拉丁语 accident", relatedWords: [], phonetic: "/ˈæksɪdənt/", frequency: "高频" },
  { id: "word_21", word: "accompany", meaning: "v. 陪伴；伴随", level: "IELTS7", root: "compan", rootMeaning: "伙伴；面包", rootMeaningEn: "bread; companion", rootOrigin: "Old French", rootOriginNote: "由 ac- + compagne 组成", relatedWords: [], phonetic: "/əˈkʌmpəni/", frequency: "中频" },
  { id: "word_22", word: "accomplish", meaning: "v. 完成；实现", level: "IELTS7", root: "plish", rootMeaning: "完成；充满", rootMeaningEn: "complete; fill", rootOrigin: "Latin", rootOriginNote: "源自拉丁语 accomplish", relatedWords: [], phonetic: "/əˈkʌmplɪʃ/", frequency: "中频" },
  { id: "word_23", word: "account", meaning: "n. 账户；说明 v. 解释", level: "IELTS6", root: "count", rootMeaning: "数；计算", rootMeaningEn: "count; number", rootOrigin: "Old French", rootOriginNote: "由 ac- + count 组成", relatedWords: [], phonetic: "/əˈkaʊnt/", frequency: "高频" },
  { id: "word_24", word: "accountant", meaning: "n. 会计；会计师", level: "IELTS6", root: "count", rootMeaning: "计算", rootMeaningEn: "count", rootOrigin: "Old French", rootOriginNote: "由 account + ant 组成", relatedWords: [], phonetic: "/əˈkaʊntənt/", frequency: "中频" },
  { id: "word_25", word: "accumulate", meaning: "v. 积累；堆积", level: "IELTS7", root: "cumul", rootMeaning: "堆积；积累", rootMeaningEn: "heap; pile", rootOrigin: "Latin", rootOriginNote: "源自拉丁语 accumulare", relatedWords: [], phonetic: "/əˈkjuːmjʊleɪt/", frequency: "中频" },
  { id: "word_26", word: "accurate", meaning: "adj. 精确的；准确的", level: "IELTS6", root: "cur", rootMeaning: "关心；精确", rootMeaningEn: "care; exact", rootOrigin: "Latin", rootOriginNote: "源自拉丁语 accuratus", relatedWords: [], phonetic: "/ˈækjərət/", frequency: "高频" },
  { id: "word_27", word: "achieve", meaning: "v. 达到；完成", level: "IELTS5", root: "chieve", rootMeaning: "完成；达到", rootMeaningEn: "accomplish; reach", rootOrigin: "Old French", rootOriginNote: "源自古法语 achiever", relatedWords: [], phonetic: "/əˈtʃiːv/", frequency: "高频" },
  { id: "word_28", word: "achievement", meaning: "n. 成就；成绩", level: "IELTS6", root: "chieve", rootMeaning: "完成", rootMeaningEn: "accomplish", rootOrigin: "Old French", rootOriginNote: "由 achieve + ment 组成", relatedWords: [], phonetic: "/əˈtʃiːvmənt/", frequency: "高频" },
  { id: "word_29", word: "acid", meaning: "n. 酸；酸性物质 adj. 酸的", level: "IELTS7", root: "acid", rootMeaning: "酸", rootMeaningEn: "sour", rootOrigin: "Latin", rootOriginNote: "源自拉丁语 acidus", relatedWords: [], phonetic: "/ˈæsɪd/", frequency: "中频" },
  { id: "word_30", word: "acknowledge", meaning: "v. 承认；确认", level: "IELTS7", root: "know", rootMeaning: "知道", rootMeaningEn: "know", rootOrigin: "Old English", rootOriginNote: "由 ac- + knowledge 组成", relatedWords: [], phonetic: "/əkˈnɒlɪdʒ/", frequency: "高频" }
];

const filePath = path.join(__dirname, '../src/data/mockWords.ts');
const interfaceContent = `export interface IELTSWord {
  id: string;
  word: string;
  meaning: string;
  level: string;
  root: string;
  rootMeaning: string;
  rootMeaningEn: string;
  rootOrigin: string;
  rootOriginNote: string;
  relatedWords: { word: string; meaning: string; level: string }[];
  phonetic: string;
  frequency: string;
}

export const mockWords: IELTSWord[] = [
`;

const content = interfaceContent + baseWords.map(w => '  ' + JSON.stringify(w, null, 2)).join(',\n') + '\n];\n';
fs.writeFileSync(filePath, content);
console.log('已创建包含 ' + baseWords.length + ' 个单词的基础文件');