const fs = require('fs');
const path = require('path');

const words = [
  { id: "word_61", word: "afraid", meaning: "adj. 害怕的；担心的", level: "IELTS5", root: "fray", rootMeaning: "战斗；恐惧", rootMeaningEn: "fight; fear", rootOrigin: "Old French", rootOriginNote: "源自古法语 affeer", relatedWords: [], phonetic: "/əˈfreɪd/", frequency: "高频" },
  { id: "word_62", word: "after", meaning: "prep. 在...之后 conj. 在...以后", level: "IELTS5", root: "aft", rootMeaning: "后面", rootMeaningEn: "behind", rootOrigin: "Old English", rootOriginNote: "源自盎格鲁-撒克逊语 æfter", relatedWords: [], phonetic: "/ˈɑːftə/", frequency: "高频" },
  { id: "word_63", word: "afternoon", meaning: "n. 下午", level: "IELTS5", root: "noon", rootMeaning: "正午", rootMeaningEn: "midday", rootOrigin: "Old English", rootOriginNote: "由 after + noon 组成", relatedWords: [], phonetic: "/ˌɑːftəˈnuːn/", frequency: "高频" },
  { id: "word_64", word: "again", meaning: "adv. 再；又", level: "IELTS5", root: "gain", rootMeaning: "获得", rootMeaningEn: "gain; against", rootOrigin: "Old English", rootOriginNote: "源自盎格鲁-撒克逊语 ongægn", relatedWords: [], phonetic: "/əˈɡen/", frequency: "高频" },
  { id: "word_65", word: "against", meaning: "prep. 反对；靠着", level: "IELTS5", root: "gain", rootMeaning: "对面；相反", rootMeaningEn: "opposite; contrary", rootOrigin: "Old English", rootOriginNote: "源自盎格鲁-撒克逊语 ongægn", relatedWords: [], phonetic: "/əˈɡenst/", frequency: "高频" },
  { id: "word_66", word: "age", meaning: "n. 年龄；时代 v. 变老", level: "IELTS5", root: "age", rootMeaning: "年龄；时代", rootMeaningEn: "period; era", rootOrigin: "Old French", rootOriginNote: "源自古法语 aage", relatedWords: [], phonetic: "/eɪdʒ/", frequency: "高频" },
  { id: "word_67", word: "agency", meaning: "n. 代理；机构", level: "IELTS6", root: "ag", rootMeaning: "做；行动", rootMeaningEn: "do; act", rootOrigin: "Latin", rootOriginNote: "源自拉丁语 agentia", relatedWords: [], phonetic: "/ˈeɪdʒənsi/", frequency: "高频" },
  { id: "word_68", word: "agent", meaning: "n. 代理人；代理商", level: "IELTS6", root: "ag", rootMeaning: "做；行动", rootMeaningEn: "do; act", rootOrigin: "Latin", rootOriginNote: "源自拉丁语 agent", relatedWords: [], phonetic: "/ˈeɪdʒənt/", frequency: "高频" },
  { id: "word_69", word: "aggressive", meaning: "adj. 侵略性的；好斗的", level: "IELTS7", root: "gress", rootMeaning: "走；步", rootMeaningEn: "walk; step", rootOrigin: "Latin", rootOriginNote: "源自拉丁语 aggredi", relatedWords: [], phonetic: "/əˈɡresɪv/", frequency: "中频" },
  { id: "word_70", word: "agree", meaning: "v. 同意；赞成", level: "IELTS5", root: "gree", rootMeaning: "高兴；同意", rootMeaningEn: "pleasing; will", rootOrigin: "Old French", rootOriginNote: "源自古法语 agreeer", relatedWords: [], phonetic: "/əˈɡriː/", frequency: "高频" },
  { id: "word_71", word: "agreement", meaning: "n. 协议；同意", level: "IELTS6", root: "gree", rootMeaning: "同意", rootMeaningEn: "please; will", rootOrigin: "Old French", rootOriginNote: "由 agree + ment 组成", relatedWords: [], phonetic: "/əˈɡriːmənt/", frequency: "高频" },
  { id: "word_72", word: "agriculture", meaning: "n. 农业；农学", level: "IELTS7", root: "agri", rootMeaning: "田地；农业", rootMeaningEn: "field; land", rootOrigin: "Latin", rootOriginNote: "源自拉丁语 agricultura", relatedWords: [], phonetic: "/ˈæɡrɪkʌltʃə/", frequency: "中频" },
  { id: "word_73", word: "ahead", meaning: "adv. 在前面；向前", level: "IELTS5", root: "head", rootMeaning: "头；前面", rootMeaningEn: "head; front", rootOrigin: "Old English", rootOriginNote: "由 a- + head 组成", relatedWords: [], phonetic: "/əˈhed/", frequency: "高频" },
  { id: "word_74", word: "aid", meaning: "v./n. 帮助；援助", level: "IELTS6", root: "aid", rootMeaning: "帮助", rootMeaningEn: "help; assist", rootOrigin: "Old French", rootOriginNote: "源自古法语 aidier", relatedWords: [], phonetic: "/eɪd/", frequency: "高频" },
  { id: "word_75", word: "aim", meaning: "v. 瞄准；致力于 n. 目标", level: "IELTS5", root: "aim", rootMeaning: "目标；瞄准", rootMeaningEn: "goal; direct", rootOrigin: "Old French", rootOriginNote: "源自古法语 aesmer", relatedWords: [], phonetic: "/eɪm/", frequency: "高频" },
  { id: "word_76", word: "air", meaning: "n. 空气；天空 v. 通风", level: "IELTS5", root: "air", rootMeaning: "空气；天空", rootMeaningEn: "atmosphere; sky", rootOrigin: "Latin", rootOriginNote: "源自拉丁语 aer", relatedWords: [], phonetic: "/eə/", frequency: "高频" },
  { id: "word_77", word: "aircraft", meaning: "n. 飞机；航空器", level: "IELTS6", root: "craft", rootMeaning: "工艺；飞机", rootMeaningEn: "skill; vehicle", rootOrigin: "Old English", rootOriginNote: "由 air + craft 组成", relatedWords: [], phonetic: "/ˈeəkrɑːft/", frequency: "中频" },
  { id: "word_78", word: "airline", meaning: "n. 航空公司；航线", level: "IELTS6", root: "line", rootMeaning: "线；航线", rootMeaningEn: "line; route", rootOrigin: "English", rootOriginNote: "由 air + line 组成", relatedWords: [], phonetic: "/ˈeəlaɪn/", frequency: "高频" },
  { id: "word_79", word: "airport", meaning: "n. 机场；航空站", level: "IELTS5", root: "port", rootMeaning: "港口；通道", rootMeaningEn: "harbor; gate", rootOrigin: "English", rootOriginNote: "由 air + port 组成", relatedWords: [], phonetic: "/ˈeəpɔːt/", frequency: "高频" },
  { id: "word_80", word: "alarm", meaning: "n. 警报；惊恐 v. 警告", level: "IELTS6", root: "arm", rootMeaning: "武器；武装", rootMeaningEn: "weapon; armed", rootOrigin: "Old French", rootOriginNote: "源自古法语 alarme", relatedWords: [], phonetic: "/əˈlɑːm/", frequency: "中频" },
  { id: "word_81", word: "album", meaning: "n. 相册；专辑", level: "IELTS6", root: "alb", rootMeaning: "白", rootMeaningEn: "white", rootOrigin: "Latin", rootOriginNote: "源自拉丁语 album", relatedWords: [], phonetic: "/ˈælbəm/", frequency: "中频" },
  { id: "word_82", word: "alcohol", meaning: "n. 酒精；酒", level: "IELTS6", root: "alcohol", rootMeaning: "酒精", rootMeaningEn: "spirit; wine", rootOrigin: "Arabic", rootOriginNote: "源自阿拉伯语 al-kuhl", relatedWords: [], phonetic: "/ˈælkəhɒl/", frequency: "中频" },
  { id: "word_83", word: "alike", meaning: "adj. 相似的 adv. 相似地", level: "IELTS7", root: "like", rootMeaning: "像；喜欢", rootMeaningEn: "similar; please", rootOrigin: "Old English", rootOriginNote: "由 a- + like 组成", relatedWords: [], phonetic: "/əˈlaɪk/", frequency: "中频" },
  { id: "word_84", word: "alive", meaning: "adj. 活着的；有活力的", level: "IELTS5", root: "live", rootMeaning: "生活；居住", rootMeaningEn: "life; dwell", rootOrigin: "Old English", rootOriginNote: "由 a- + live 组成", relatedWords: [], phonetic: "/əˈlaɪv/", frequency: "高频" },
  { id: "word_85", word: "allow", meaning: "v. 允许；给予", level: "IELTS5", root: "low", rootMeaning: "给予；放置", rootMeaningEn: "give; place", rootOrigin: "Old French", rootOriginNote: "源自古法语 alouer", relatedWords: [], phonetic: "/əˈlaʊ/", frequency: "高频" },
  { id: "word_86", word: "almost", meaning: "adv. 几乎；差不多", level: "IELTS5", root: "most", rootMeaning: "最多；最大", rootMeaningEn: "most; greatest", rootOrigin: "Old English", rootOriginNote: "由 al- + most 组成", relatedWords: [], phonetic: "/ˈɔːlməʊst/", frequency: "高频" },
  { id: "word_87", word: "alone", meaning: "adj./adv. 单独的；孤独的", level: "IELTS5", root: "one", rootMeaning: "一；单独", rootMeaningEn: "single; solitary", rootOrigin: "Old English", rootOriginNote: "由 all + one 组成", relatedWords: [], phonetic: "/əˈləʊn/", frequency: "高频" },
  { id: "word_88", word: "along", meaning: "prep. 沿着 adv. 向前；一起", level: "IELTS5", root: "long", rootMeaning: "长；长的", rootMeaningEn: "length; extended", rootOrigin: "Old English", rootOriginNote: "由 all + ong 组成", relatedWords: [], phonetic: "/əˈlɒŋ/", frequency: "高频" },
  { id: "word_89", word: "already", meaning: "adv. 已经", level: "IELTS5", root: "ready", rootMeaning: "准备好的", rootMeaningEn: "prepared; ready", rootOrigin: "Old English", rootOriginNote: "由 al- + ready 组成", relatedWords: [], phonetic: "/ɔːlˈredi/", frequency: "高频" },
  { id: "word_90", word: "also", meaning: "adv. 也；同样", level: "IELTS5", root: "all", rootMeaning: "全部；所有", rootMeaningEn: "all; wholly", rootOrigin: "Old English", rootOriginNote: "源自盎格鲁-撒克逊语 ealswa", relatedWords: [], phonetic: "/ˈɔːlsəʊ/", frequency: "高频" }
];

const filePath = path.join(__dirname, '../src/data/mockWords.ts');
let content = fs.readFileSync(filePath, 'utf-8');
content = content.slice(0, -3);
const newContent = JSON.stringify(words, null, 2);
content += ',\n' + newContent.slice(1, -1) + '\n];\n';
fs.writeFileSync(filePath, content);
console.log('已添加 ' + words.length + ' 个单词');