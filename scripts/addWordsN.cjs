const fs = require('fs');
const path = require('path');

const newWords = [
  { id: "word_269", word: "nation", meaning: "n. 国家；民族", level: "IELTS5", root: "nat", rootMeaning: "出生；民族", rootMeaningEn: "birth; people", rootOrigin: "Latin", rootOriginNote: "源自拉丁语 natio，意为出生或民族", relatedWords: [], phonetic: "/ˈneɪʃn/", frequency: "高频" },
  { id: "word_270", word: "native", meaning: "adj. 本地的；母语的", level: "IELTS6", root: "nat", rootMeaning: "出生", rootMeaningEn: "birth", rootOrigin: "Latin", rootOriginNote: "源自拉丁语 nativus，由 nasci（出生）派生", relatedWords: [], phonetic: "/ˈneɪtɪv/", frequency: "高频" },
  { id: "word_271", word: "natural", meaning: "adj. 自然的；天然的", level: "IELTS5", root: "nat", rootMeaning: "出生；自然", rootMeaningEn: "birth; nature", rootOrigin: "Latin", rootOriginNote: "源自拉丁语 naturalis，由 natura（自然）派生", relatedWords: [], phonetic: "/ˈnætʃrəl/", frequency: "高频" },
  { id: "word_272", word: "nature", meaning: "n. 自然；性质", level: "IELTS5", root: "nat", rootMeaning: "出生；本性", rootMeaningEn: "birth; essence", rootOrigin: "Latin", rootOriginNote: "源自拉丁语 natura，由 nasci（出生）派生", relatedWords: [], phonetic: "/ˈneɪtʃə/", frequency: "高频" },
  { id: "word_273", word: "necessary", meaning: "adj. 必要的；必然的", level: "IELTS5", root: "cess", rootMeaning: "走；让步", rootMeaningEn: "go; yield", rootOrigin: "Latin", rootOriginNote: "源自拉丁语 necessarius，由 ne-（不）+ cedere（退让）组成", relatedWords: [], phonetic: "/ˈnesəsəri/", frequency: "高频" },
  { id: "word_274", word: "negative", meaning: "adj. 消极的；否定的", level: "IELTS6", root: "neg", rootMeaning: "否认；拒绝", rootMeaningEn: "deny; refuse", rootOrigin: "Latin", rootOriginNote: "源自拉丁语 negativus，由 negare（否认）派生", relatedWords: [], phonetic: "/ˈneɡətɪv/", frequency: "高频" },
  { id: "word_275", word: "negotiate", meaning: "v. 谈判；协商", level: "IELTS7", root: "neg", rootMeaning: "否认；商谈", rootMeaningEn: "deny; bargain", rootOrigin: "Latin", rootOriginNote: "源自拉丁语 negotiari，由 neg-（否认）+ otium（闲暇）组成", relatedWords: [], phonetic: "/nɪˈɡəʊʃieɪt/", frequency: "高频" },
  { id: "word_276", word: "neglect", meaning: "v./n. 忽视；忽略", level: "IELTS7", root: "neg", rootMeaning: "否认；忽视", rootMeaningEn: "deny; ignore", rootOrigin: "Latin", rootOriginNote: "源自拉丁语 negligere，由 neg-（否认）+ legere（选择）组成", relatedWords: [], phonetic: "/nɪˈɡlekt/", frequency: "中频" },
  { id: "word_277", word: "neither", meaning: "adj./pron. 两者都不", level: "IELTS5", root: "ei", rootMeaning: "也不是", rootMeaningEn: "not either", rootOrigin: "Old English", rootOriginNote: "由 ne（不）+ either（两者任一）组成", relatedWords: [], phonetic: "/ˈnaɪðə/", frequency: "高频" },
  { id: "word_278", word: "nerve", meaning: "n. 神经；勇气", level: "IELTS7", root: "nerv", rootMeaning: "神经；活力", rootMeaningEn: "sinew; vigor", rootOrigin: "Latin", rootOriginNote: "源自拉丁语 nervus，意为筋或勇气", relatedWords: [], phonetic: "/nɜːv/", frequency: "中频" },
  { id: "word_279", word: "network", meaning: "n. 网络；网状系统", level: "IELTS6", root: "net", rootMeaning: "网", rootMeaningEn: "net", rootOrigin: "Old English", rootOriginNote: "由 net（网）+ work（工作）组合", relatedWords: [], phonetic: "/ˈnetwɜːk/", frequency: "高频" },
  { id: "word_280", word: "neutral", meaning: "adj. 中立的；中性的", level: "IELTS7", root: "neut", rootMeaning: "两者都不", rootMeaningEn: "neither", rootOrigin: "Latin", rootOriginNote: "源自拉丁语 neutralis，由 neuter（两者都不）派生", relatedWords: [], phonetic: "/ˈnjuːtrəl/", frequency: "中频" },
  { id: "word_281", word: "never", meaning: "adv. 从不；永不", level: "IELTS5", root: "ne", rootMeaning: "不", rootMeaningEn: "not", rootOrigin: "Old English", rootOriginNote: "由 ne（不）+ ever（曾经）组成", relatedWords: [], phonetic: "/ˈnevə/", frequency: "高频" },
  { id: "word_282", word: "nevertheless", meaning: "adv. 然而；仍然", level: "IELTS7", root: "never", rootMeaning: "从不", rootMeaningEn: "not", rootOrigin: "Old English", rootOriginNote: "由 never + the + less 组成", relatedWords: [], phonetic: "/ˌnevəðəˈles/", frequency: "中频" },
  { id: "word_283", word: "new", meaning: "adj. 新的；新鲜的", level: "IELTS5", root: "new", rootMeaning: "新", rootMeaningEn: "new", rootOrigin: "Old English", rootOriginNote: "源自盎格鲁-撒克逊语 niwe", relatedWords: [], phonetic: "/njuː/", frequency: "高频" },
  { id: "word_284", word: "news", meaning: "n. 新闻；消息", level: "IELTS5", root: "new", rootMeaning: "新", rootMeaningEn: "new", rootOrigin: "Old English", rootOriginNote: "由 new（新的）派生", relatedWords: [], phonetic: "/njuːz/", frequency: "高频" },
  { id: "word_285", word: "next", meaning: "adj. 下一个的；紧接的", level: "IELTS5", root: "nex", rootMeaning: "最近；其次", rootMeaningEn: "nearest; following", rootOrigin: "Old English", rootOriginNote: "源自盎格鲁-撒克逊语 niehsta，意为最近的", relatedWords: [], phonetic: "/nekst/", frequency: "高频" },
  { id: "word_286", word: "nor", meaning: "conj. 也不；也不是", level: "IELTS5", root: "nor", rootMeaning: "也不", rootMeaningEn: "not either", rootOrigin: "Old English", rootOriginNote: "源自盎格鲁-撒克逊语 nawer，意为也不", relatedWords: [], phonetic: "/nɔː/", frequency: "高频" },
  { id: "word_287", word: "normal", meaning: "adj. 正常的；标准的", level: "IELTS5", root: "norm", rootMeaning: "规范；标准", rootMeaningEn: "rule; standard", rootOrigin: "Latin", rootOriginNote: "源自拉丁语 normalis，由 norma（规则）派生", relatedWords: [], phonetic: "/ˈnɔːml/", frequency: "高频" },
  { id: "word_288", word: "notably", meaning: "adv. 尤其；特别地", level: "IELTS7", root: "not", rootMeaning: "知道；标记", rootMeaningEn: "know; mark", rootOrigin: "Latin", rootOriginNote: "由 notable（显著的）派生", relatedWords: [], phonetic: "/ˈnəʊtəbli/", frequency: "中频" }
];

const filePath = path.join(__dirname, '../src/data/mockWords.ts');
let content = fs.readFileSync(filePath, 'utf-8');
content = content.slice(0, -3);
const newContent = JSON.stringify(newWords, null, 2);
content += ',\n' + newContent.slice(1, -1) + '\n];\n';
fs.writeFileSync(filePath, content);
console.log(`已添加 ${newWords.length} 个N开头新单词`);