const fs = require('fs');
const path = require('path');

const newWords = [
  { id: "word_289", word: "object", meaning: "n. 物体；目标 v. 反对", level: "IELTS5", root: "ject", rootMeaning: "投掷；抛", rootMeaningEn: "throw; cast", rootOrigin: "Latin", rootOriginNote: "源自拉丁语 objectus，由 ob-（对面）+ jacere（投）组成", relatedWords: [], phonetic: "/ˈɒbdʒɪkt/", frequency: "高频" },
  { id: "word_290", word: "objective", meaning: "adj. 客观的 n. 目标", level: "IELTS7", root: "ject", rootMeaning: "投掷", rootMeaningEn: "throw", rootOrigin: "Latin", rootOriginNote: "由 object 派生而来", relatedWords: [], phonetic: "/əbˈdʒektɪv/", frequency: "高频" },
  { id: "word_291", word: "obtain", meaning: "v. 获得；得到", level: "IELTS6", root: "tain", rootMeaning: "握住；获得", rootMeaningEn: "hold; gain", rootOrigin: "Latin", rootOriginNote: "源自拉丁语 obtinere，由 ob-（完全）+ tenere（握）组成", relatedWords: [], phonetic: "/əbˈteɪn/", frequency: "高频" },
  { id: "word_292", word: "obvious", meaning: "adj. 明显的；当然的", level: "IELTS6", root: "vi", rootMeaning: "路；看", rootMeaningEn: "way; see", rootOrigin: "Latin", rootOriginNote: "源自拉丁语 obvius，由 ob-（在前面）+ via（路）组成", relatedWords: [], phonetic: "/ˈɒbviəs/", frequency: "高频" },
  { id: "word_293", word: "occasion", meaning: "n. 场合；时机", level: "IELTS7", root: "cad", rootMeaning: "落下；发生", rootMeaningEn: "fall; happen", rootOrigin: "Latin", rootOriginNote: "源自拉丁语 occasio，由 ob-（到）+ cadere（落下）组成", relatedWords: [], phonetic: "/əˈkeɪʒn/", frequency: "中频" },
  { id: "word_294", word: "occupy", meaning: "v. 占领；占据", level: "IELTS7", root: "cup", rootMeaning: "拿；抓", rootMeaningEn: "take; seize", rootOrigin: "Latin", rootOriginNote: "源自拉丁语 occupare，由 ob-（完全）+ capere（拿）组成", relatedWords: [], phonetic: "/ˈɒkjʊpaɪ/", frequency: "高频" },
  { id: "word_295", word: "occur", meaning: "v. 发生；出现", level: "IELTS6", root: "cur", rootMeaning: "跑；发生", rootMeaningEn: "run; happen", rootOrigin: "Latin", rootOriginNote: "源自拉丁语 occurrere，由 ob-（对面）+ currere（跑）组成", relatedWords: [], phonetic: "/əˈkɜː/", frequency: "高频" },
  { id: "word_296", word: "ocean", meaning: "n. 海洋", level: "IELTS5", root: "oce", rootMeaning: "海洋", rootMeaningEn: "ocean", rootOrigin: "Greek", rootOriginNote: "源自希腊语 okeanos，意为大洋", relatedWords: [], phonetic: "/ˈəʊʃn/", frequency: "高频" },
  { id: "word_297", word: "odd", meaning: "adj. 奇数的；奇怪的", level: "IELTS6", root: "odd", rootMeaning: "奇数；剩余", rootMeaningEn: "strange; remaining", rootOrigin: "Old Norse", rootOriginNote: "源自古诺尔斯语 odda，意为三角", relatedWords: [], phonetic: "/ɒd/", frequency: "中频" },
  { id: "word_298", word: "odds", meaning: "n. 几率；胜算", level: "IELTS7", root: "odd", rootMeaning: "奇数", rootMeaningEn: "strange", rootOrigin: "Old Norse", rootOriginNote: "由 odd 派生而来", relatedWords: [], phonetic: "/ɒdz/", frequency: "中频" },
  { id: "word_299", word: "offend", meaning: "v. 冒犯；使生气", level: "IELTS7", root: "fend", rootMeaning: "打击；挡开", rootMeaningEn: "strike; ward off", rootOrigin: "Latin", rootOriginNote: "源自拉丁语 offendere，由 of-（对面）+ fendere（打击）组成", relatedWords: [], phonetic: "/əˈfend/", frequency: "中频" },
  { id: "word_300", word: "offer", meaning: "v. 提供；提出 n. 提议", level: "IELTS5", root: "fer", rootMeaning: "拿；带来", rootMeaningEn: "bring; carry", rootOrigin: "Latin", rootOriginNote: "源自拉丁语 offerre，由 ob-（到）+ ferre（拿）组成", relatedWords: [], phonetic: "/ˈɒfə/", frequency: "高频" },
  { id: "word_301", word: "official", meaning: "adj. 官方的；正式的 n. 官员", level: "IELTS6", root: "fic", rootMeaning: "做；形成", rootMeaningEn: "do; make", rootOrigin: "Latin", rootOriginNote: "源自拉丁语 officialis，由 officium（公职）派生", relatedWords: [], phonetic: "/əˈfɪʃl/", frequency: "高频" },
  { id: "word_302", word: "often", meaning: "adv. 经常；常常", level: "IELTS5", root: "oft", rootMeaning: "经常", rootMeaningEn: "frequently", rootOrigin: "Old English", rootOriginNote: "源自盎格鲁-撒克逊语 oft，意为经常或常常", relatedWords: [], phonetic: "/ˈɒfn/", frequency: "高频" },
  { id: "word_303", word: "once", meaning: "adv. 一次；曾经", level: "IELTS5", root: "one", rootMeaning: "一", rootMeaningEn: "one", rootOrigin: "Old English", rootOriginNote: "由 one + -ce 组成", relatedWords: [], phonetic: "/wʌns/", frequency: "高频" },
  { id: "word_304", word: "operate", meaning: "v. 操作；运转", level: "IELTS6", root: "oper", rootMeaning: "工作；操作", rootMeaningEn: "work", rootOrigin: "Latin", rootOriginNote: "源自拉丁语 operari，由 opus（工作）派生", relatedWords: [], phonetic: "/ˈɒpəreɪt/", frequency: "高频" },
  { id: "word_305", word: "operation", meaning: "n. 操作；手术", level: "IELTS6", root: "oper", rootMeaning: "工作", rootMeaningEn: "work", rootOrigin: "Latin", rootOriginNote: "由 operate 派生而来", relatedWords: [], phonetic: "/ˌɒpəˈreɪʃn/", frequency: "高频" },
  { id: "word_306", word: "opportunity", meaning: "n. 机会；时机", level: "IELTS6", root: "port", rootMeaning: "门；机会", rootMeaningEn: "gate; chance", rootOrigin: "Latin", rootOriginNote: "源自拉丁语 opportunitas，由 ob-（对面）+ portus（港口）组成", relatedWords: [], phonetic: "/ˌɒpəˈtjuːnəti/", frequency: "高频" },
  { id: "word_307", word: "oppose", meaning: "v. 反对；抵抗", level: "IELTS6", root: "pos", rootMeaning: "放置；反对", rootMeaningEn: "place; against", rootOrigin: "Latin", rootOriginNote: "源自拉丁语 oppponere，由 ob-（对面）+ ponere（放）组成", relatedWords: [], phonetic: "/əˈpəʊz/", frequency: "高频" },
  { id: "word_308", word: "opposite", meaning: "adj. 相反的；对面的", level: "IELTS6", root: "pos", rootMeaning: "放置", rootMeaningEn: "place", rootOrigin: "Latin", rootOriginNote: "由 oppose 派生而来", relatedWords: [], phonetic: "/ˈɒpəzɪt/", frequency: "高频" }
];

const filePath = path.join(__dirname, '../src/data/mockWords.ts');
let content = fs.readFileSync(filePath, 'utf-8');
content = content.slice(0, -3);
const newContent = JSON.stringify(newWords, null, 2);
content += ',\n' + newContent.slice(1, -1) + '\n];\n';
fs.writeFileSync(filePath, content);
console.log(`已添加 ${newWords.length} 个O开头新单词`);