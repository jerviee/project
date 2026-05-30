const fs = require('fs');
const path = require('path');

const words = [
  { id: "word_241", word: "behave", meaning: "v. 表现；行为", level: "IELTS6", root: "have", rootMeaning: "拥有；持有", rootMeaningEn: "hold; possess", rootOrigin: "Old English", rootOriginNote: "由 be- + have 组成", relatedWords: [], phonetic: "/bɪˈheɪv/", frequency: "高频" },
  { id: "word_242", word: "behavior", meaning: "n. 行为；举止", level: "IELTS6", root: "have", rootMeaning: "持有；表现", rootMeaningEn: "hold; conduct", rootOrigin: "Old English", rootOriginNote: "由 behave + or 组成", relatedWords: [], phonetic: "/bɪˈheɪvjə/", frequency: "高频" },
  { id: "word_243", word: "behind", meaning: "prep. 在...后面 adv. 在后", level: "IELTS5", root: "hind", rootMeaning: "后面", rootMeaningEn: "back; rear", rootOrigin: "Old English", rootOriginNote: "由 be- + hind 组成", relatedWords: [], phonetic: "/bɪˈhaɪnd/", frequency: "高频" },
  { id: "word_244", word: "being", meaning: "n. 存在；生命；人", level: "IELTS5", root: "be", rootMeaning: "是；存在", rootMeaningEn: "exist; live", rootOrigin: "Old English", rootOriginNote: "由 be + ing 组成", relatedWords: [], phonetic: "/ˈbiːɪŋ/", frequency: "高频" },
  { id: "word_245", word: "belief", meaning: "n. 信念；信仰", level: "IELTS6", root: "lieve", rootMeaning: "相信；爱", rootMeaningEn: "believe; love", rootOrigin: "Old English", rootOriginNote: "源自盎格鲁-撒克逊语 geleafa", relatedWords: [], phonetic: "/bɪˈliːf/", frequency: "高频" },
  { id: "word_246", word: "believe", meaning: "v. 相信；认为", level: "IELTS5", root: "lieve", rootMeaning: "相信", rootMeaningEn: "trust; think", rootOrigin: "Old English", rootOriginNote: "源自盎格鲁-撒克逊语 believe", relatedWords: [], phonetic: "/bɪˈliːv/", frequency: "高频" },
  { id: "word_247", word: "bell", meaning: "n. 钟；铃声", level: "IELTS5", root: "bell", rootMeaning: "钟", rootMeaningEn: "ringing instrument", rootOrigin: "Old English", rootOriginNote: "源自盎格鲁-撒克逊语 bell", relatedWords: [], phonetic: "/bel/", frequency: "高频" },
  { id: "word_248", word: "belong", meaning: "v. 属于", level: "IELTS5", root: "long", rootMeaning: "长；属于", rootMeaningEn: "be attached to", rootOrigin: "Old English", rootOriginNote: "由 be- + long 组成", relatedWords: [], phonetic: "/bɪˈlɒŋ/", frequency: "高频" },
  { id: "word_249", word: "below", meaning: "prep. 在...下面 adv. 在下方", level: "IELTS5", root: "low", rootMeaning: "低；下方", rootMeaningEn: "under; beneath", rootOrigin: "Old English", rootOriginNote: "由 be- + low 组成", relatedWords: [], phonetic: "/bɪˈləʊ/", frequency: "高频" },
  { id: "word_250", word: "belt", meaning: "n. 带子；腰带", level: "IELTS6", root: "belt", rootMeaning: "带子", rootMeaningEn: "strip; girdle", rootOrigin: "Old English", rootOriginNote: "源自盎格鲁-撒克逊语 belt", relatedWords: [], phonetic: "/belt/", frequency: "中频" },
  { id: "word_251", word: "bench", meaning: "n. 长凳；工作台", level: "IELTS5", root: "bench", rootMeaning: "长凳", rootMeaningEn: "long seat", rootOrigin: "Old English", rootOriginNote: "源自盎格鲁-撒克逊语 benc", relatedWords: [], phonetic: "/bentʃ/", frequency: "高频" },
  { id: "word_252", word: "bend", meaning: "v. 弯曲；俯身 n. 弯曲", level: "IELTS6", root: "bend", rootMeaning: "弯曲", rootMeaningEn: "curve; turn", rootOrigin: "Old English", rootOriginNote: "源自盎格鲁-撒克逊语 bendan", relatedWords: [], phonetic: "/bend/", frequency: "中频" },
  { id: "word_253", word: "beneath", meaning: "prep. 在...之下 adv. 在下方", level: "IELTS6", root: "neath", rootMeaning: "下方；在...之下", rootMeaningEn: "below; under", rootOrigin: "Old English", rootOriginNote: "由 be- + neath 组成", relatedWords: [], phonetic: "/bɪˈniːθ/", frequency: "中频" },
  { id: "word_254", word: "benefit", meaning: "n. 利益；好处 v. 有益于", level: "IELTS5", root: "fit", rootMeaning: "适合；利益", rootMeaningEn: "suitable; good", rootOrigin: "Old French", rootOriginNote: "源自古法语 bienfait", relatedWords: [], phonetic: "/ˈbenɪfɪt/", frequency: "高频" },
  { id: "word_255", word: "bent", meaning: "adj. 弯曲的；决心的", level: "IELTS6", root: "bend", rootMeaning: "弯曲", rootMeaningEn: "curved; determined", rootOrigin: "Old English", rootOriginNote: "由 bend 的过去分词", relatedWords: [], phonetic: "/bent/", frequency: "中频" },
  { id: "word_256", word: "beside", meaning: "prep. 在...旁边", level: "IELTS5", root: "side", rootMeaning: "边；旁边", rootMeaningEn: "by the side of", rootOrigin: "Old English", rootOriginNote: "由 be- + side 组成", relatedWords: [], phonetic: "/bɪˈsaɪd/", frequency: "高频" },
  { id: "word_257", word: "besides", meaning: "adv. 此外 prep. 除...之外", level: "IELTS5", root: "side", rootMeaning: "边", rootMeaningEn: "side; in addition", rootOrigin: "Old English", rootOriginNote: "由 beside + s 组成", relatedWords: [], phonetic: "/bɪˈsaɪdz/", frequency: "高频" },
  { id: "word_258", word: "best", meaning: "adj. 最好的 adv. 最好地", level: "IELTS5", root: "good", rootMeaning: "好", rootMeaningEn: "good; superior", rootOrigin: "Old English", rootOriginNote: "源自盎格鲁-撒克逊语 betst", relatedWords: [], phonetic: "/best/", frequency: "高频" },
  { id: "word_259", word: "better", meaning: "adj. 更好的 adv. 更好地", level: "IELTS5", root: "good", rootMeaning: "好", rootMeaningEn: "good; superior", rootOrigin: "Old English", rootOriginNote: "源自盎格鲁-撒克逊语 betera", relatedWords: [], phonetic: "/ˈbetə/", frequency: "高频" },
  { id: "word_260", word: "between", meaning: "prep. 在...之间", level: "IELTS5", root: "two", rootMeaning: "二；两个", rootMeaningEn: "two; pair", rootOrigin: "Old English", rootOriginNote: "由 be- + tween 组成", relatedWords: [], phonetic: "/bɪˈtwiːn/", frequency: "高频" },
  { id: "word_261", word: "beyond", meaning: "prep. 超过；在...那边", level: "IELTS6", root: "yond", rootMeaning: "那边；在远处", rootMeaningEn: "on that side; farther", rootOrigin: "Old English", rootOriginNote: "由 be- + yond 组成", relatedWords: [], phonetic: "/bɪˈjɒnd/", frequency: "高频" },
  { id: "word_262", word: "bicycle", meaning: "n. 自行车", level: "IELTS5", root: "cycle", rootMeaning: "圆；循环", rootMeaningEn: "circle; wheel", rootOrigin: "Greek", rootOriginNote: "由 bi- + cycle 组成", relatedWords: [], phonetic: "/ˈbaɪsɪkl/", frequency: "高频" },
  { id: "word_263", word: "big", meaning: "adj. 大的；重要的", level: "IELTS5", root: "big", rootMeaning: "大", rootMeaningEn: "large; great", rootOrigin: "Old Norse", rootOriginNote: "源自古诺尔斯语 bigg", relatedWords: [], phonetic: "/bɪɡ/", frequency: "高频" },
  { id: "word_264", word: "bill", meaning: "n. 账单；钞票 v. 给...开账单", level: "IELTS5", root: "bill", rootMeaning: "法案；账单", rootMeaningEn: "document; invoice", rootOrigin: "Latin", rootOriginNote: "源自拉丁语 billa", relatedWords: [], phonetic: "/bɪl/", frequency: "高频" },
  { id: "word_265", word: "billion", meaning: "num. 十亿", level: "IELTS5", root: "bill", rootMeaning: "百万", rootMeaningEn: "million", rootOrigin: "French", rootOriginNote: "由 bi- + llion 组成", relatedWords: [], phonetic: "/ˈbɪljən/", frequency: "高频" },
  { id: "word_266", word: "bind", meaning: "v. 捆绑；约束", level: "IELTS7", root: "band", rootMeaning: "捆绑", rootMeaningEn: "tie; constrain", rootOrigin: "Old English", rootOriginNote: "源自盎格鲁-撒克逊语 bindan", relatedWords: [], phonetic: "/baɪnd/", frequency: "中频" },
  { id: "word_267", word: "biology", meaning: "n. 生物学", level: "IELTS6", root: "bio", rootMeaning: "生命", rootMeaningEn: "life; living", rootOrigin: "Greek", rootOriginNote: "由 bio + logy 组成", relatedWords: [], phonetic: "/baɪˈɒlədʒi/", frequency: "高频" },
  { id: "word_268", word: "bird", meaning: "n. 鸟；鸟类", level: "IELTS5", root: "bird", rootMeaning: "鸟", rootMeaningEn: "feathered creature", rootOrigin: "Old English", rootOriginNote: "源自盎格鲁-撒克逊语 brid", relatedWords: [], phonetic: "/bɜːd/", frequency: "高频" },
  { id: "word_269", word: "birth", meaning: "n. 出生；起源", level: "IELTS5", root: "bear", rootMeaning: "生产；携带", rootMeaningEn: "bear; produce", rootOrigin: "Old Norse", rootOriginNote: "源自古诺尔斯语 byrðr", relatedWords: [], phonetic: "/bɜːθ/", frequency: "高频" },
  { id: "word_270", word: "birthday", meaning: "n. 生日", level: "IELTS5", root: "day", rootMeaning: "日；天", rootMeaningEn: "day of birth", rootOrigin: "Old English", rootOriginNote: "由 birth + day 组成", relatedWords: [], phonetic: "/ˈbɜːθdeɪ/", frequency: "高频" }
];

const filePath = path.join(__dirname, '../src/data/mockWords.ts');
let content = fs.readFileSync(filePath, 'utf-8');
content = content.slice(0, -3);
const newContent = JSON.stringify(words, null, 2);
content += ',\n' + newContent.slice(1, -1) + '\n];\n';
fs.writeFileSync(filePath, content);
console.log('已添加 ' + words.length + ' 个单词');