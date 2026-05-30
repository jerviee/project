const fs = require('fs');
const path = require('path');

const words = [
  { id: "word_151", word: "army", meaning: "n. 军队；陆军", level: "IELTS5", root: "arm", rootMeaning: "武器；武装", rootMeaningEn: "weapon; armed", rootOrigin: "Old French", rootOriginNote: "由 arm + y 组成", relatedWords: [], phonetic: "/ˈɑːmi/", frequency: "高频" },
  { id: "word_152", word: "around", meaning: "prep. 围绕；在...附近", level: "IELTS5", root: "round", rootMeaning: "圆形；周围", rootMeaningEn: "circle; round", rootOrigin: "Old French", rootOriginNote: "由 a- + round 组成", relatedWords: [], phonetic: "/əˈraʊnd/", frequency: "高频" },
  { id: "word_153", word: "arrange", meaning: "v. 安排；整理", level: "IELTS6", root: "range", rootMeaning: "排列；范围", rootMeaningEn: "put in order; rank", rootOrigin: "Old French", rootOriginNote: "由 ar- + range 组成", relatedWords: [], phonetic: "/əˈreɪndʒ/", frequency: "高频" },
  { id: "word_154", word: "arrangement", meaning: "n. 安排；整理", level: "IELTS6", root: "range", rootMeaning: "排列", rootMeaningEn: "order; rank", rootOrigin: "Old French", rootOriginNote: "由 arrange + ment 组成", relatedWords: [], phonetic: "/əˈreɪndʒmənt/", frequency: "中频" },
  { id: "word_155", word: "arrest", meaning: "v./n. 逮捕；拘留", level: "IELTS6", root: "rest", rootMeaning: "停止；休息", rootMeaningEn: "stop; remainder", rootOrigin: "Old French", rootOriginNote: "源自古法语 arester", relatedWords: [], phonetic: "/əˈrest/", frequency: "中频" },
  { id: "word_156", word: "arrival", meaning: "n. 到达；到来", level: "IELTS6", root: "riv", rootMeaning: "河岸；到达", rootMeaningEn: "river bank; come to shore", rootOrigin: "Old French", rootOriginNote: "由 arrive + al 组成", relatedWords: [], phonetic: "/əˈraɪvl/", frequency: "高频" },
  { id: "word_157", word: "arrive", meaning: "v. 到达；到来", level: "IELTS5", root: "riv", rootMeaning: "河岸", rootMeaningEn: "river bank", rootOrigin: "Old French", rootOriginNote: "源自古法语 ariver", relatedWords: [], phonetic: "/əˈraɪv/", frequency: "高频" },
  { id: "word_158", word: "arrow", meaning: "n. 箭；箭头", level: "IELTS6", root: "ar", rootMeaning: "弓；箭", rootMeaningEn: "bow; missile", rootOrigin: "Old English", rootOriginNote: "源自盎格鲁-撒克逊语 earh", relatedWords: [], phonetic: "/ˈærəʊ/", frequency: "中频" },
  { id: "word_159", word: "article", meaning: "n. 文章；条款", level: "IELTS5", root: "art", rootMeaning: "关节；文章", rootMeaningEn: "joint; item", rootOrigin: "Latin", rootOriginNote: "源自古法语 article", relatedWords: [], phonetic: "/ˈɑːtɪkl/", frequency: "高频" },
  { id: "word_160", word: "artificial", meaning: "adj. 人造的；虚假的", level: "IELTS7", root: "art", rootMeaning: "技能；艺术", rootMeaningEn: "skill; art", rootOrigin: "Latin", rootOriginNote: "源自拉丁语 artificialis", relatedWords: [], phonetic: "/ˌɑːtɪˈfɪʃl/", frequency: "中频" },
  { id: "word_161", word: "artist", meaning: "n. 艺术家；艺人", level: "IELTS5", root: "art", rootMeaning: "艺术", rootMeaningEn: "art; skill", rootOrigin: "Old French", rootOriginNote: "由 art + ist 组成", relatedWords: [], phonetic: "/ˈɑːtɪst/", frequency: "高频" },
  { id: "word_162", word: "artistic", meaning: "adj. 艺术的；精美的", level: "IELTS6", root: "art", rootMeaning: "艺术", rootMeaningEn: "art", rootOrigin: "French", rootOriginNote: "由 artist + ic 组成", relatedWords: [], phonetic: "/ɑːˈtɪstɪk/", frequency: "中频" },
  { id: "word_163", word: "aside", meaning: "adv. 在旁边；到一边", level: "IELTS6", root: "side", rootMeaning: "边；旁边", rootMeaningEn: "edge; boundary", rootOrigin: "Old English", rootOriginNote: "由 a- + side 组成", relatedWords: [], phonetic: "/əˈsaɪd/", frequency: "高频" },
  { id: "word_164", word: "ask", meaning: "v. 问；要求", level: "IELTS5", root: "ask", rootMeaning: "问；询问", rootMeaningEn: "inquire; request", rootOrigin: "Old English", rootOriginNote: "源自盎格鲁-撒克逊语 āscian", relatedWords: [], phonetic: "/ɑːsk/", frequency: "高频" },
  { id: "word_165", word: "asleep", meaning: "adj. 睡着的", level: "IELTS5", root: "sleep", rootMeaning: "睡眠", rootMeaningEn: "sleep", rootOrigin: "Old English", rootOriginNote: "由 a- + sleep 组成", relatedWords: [], phonetic: "/əˈsliːp/", frequency: "高频" },
  { id: "word_166", word: "aspect", meaning: "n. 方面；外观", level: "IELTS6", root: "spec", rootMeaning: "看；外观", rootMeaningEn: "look; appearance", rootOrigin: "Latin", rootOriginNote: "源自拉丁语 aspectus", relatedWords: [], phonetic: "/ˈæspekt/", frequency: "高频" },
  { id: "word_167", word: "assemble", meaning: "v. 集合；组装", level: "IELTS7", root: "semble", rootMeaning: "一起；类似", rootMeaningEn: "together; like", rootOrigin: "Old French", rootOriginNote: "源自古法语 assembler", relatedWords: [], phonetic: "/əˈsembl/", frequency: "中频" },
  { id: "word_168", word: "assembly", meaning: "n. 集会；装配", level: "IELTS7", root: "semble", rootMeaning: "集合", rootMeaningEn: "gather together", rootOrigin: "Old French", rootOriginNote: "由 assemble + y 组成", relatedWords: [], phonetic: "/əˈsembli/", frequency: "中频" },
  { id: "word_169", word: "assert", meaning: "v. 断言；主张", level: "IELTS7", root: "sert", rootMeaning: "加入；声称", rootMeaningEn: "join; claim", rootOrigin: "Latin", rootOriginNote: "源自拉丁语 asserere", relatedWords: [], phonetic: "/əˈsɜːt/", frequency: "中频" },
  { id: "word_170", word: "assess", meaning: "v. 评估；评定", level: "IELTS7", root: "sess", rootMeaning: "坐；定居", rootMeaningEn: "sit; settle", rootOrigin: "Latin", rootOriginNote: "源自拉丁语 assidere", relatedWords: [], phonetic: "/əˈses/", frequency: "高频" },
  { id: "word_171", word: "asset", meaning: "n. 资产；财产", level: "IELTS6", root: "as", rootMeaning: "足够；价值", rootMeaningEn: "enough; worth", rootOrigin: "Old French", rootOriginNote: "源自古法语 asez", relatedWords: [], phonetic: "/ˈæset/", frequency: "高频" },
  { id: "word_172", word: "assign", meaning: "v. 分配；指派", level: "IELTS7", root: "sign", rootMeaning: "标记；指定", rootMeaningEn: "mark; designate", rootOrigin: "Old French", rootOriginNote: "源自古法语 assigner", relatedWords: [], phonetic: "/əˈsaɪn/", frequency: "中频" },
  { id: "word_173", word: "assignment", meaning: "n. 作业；任务", level: "IELTS6", root: "sign", rootMeaning: "标记", rootMeaningEn: "mark; appoint", rootOrigin: "Old French", rootOriginNote: "由 assign + ment 组成", relatedWords: [], phonetic: "/əˈsaɪnmənt/", frequency: "高频" },
  { id: "word_174", word: "assist", meaning: "v. 帮助；协助", level: "IELTS6", root: "sist", rootMeaning: "站；支持", rootMeaningEn: "stand; support", rootOrigin: "Latin", rootOriginNote: "源自拉丁语 assistere", relatedWords: [], phonetic: "/əˈsɪst/", frequency: "高频" },
  { id: "word_175", word: "assistance", meaning: "n. 帮助；援助", level: "IELTS6", root: "sist", rootMeaning: "站；支持", rootMeaningEn: "stand; help", rootOrigin: "Latin", rootOriginNote: "由 assist + ance 组成", relatedWords: [], phonetic: "/əˈsɪstəns/", frequency: "高频" },
  { id: "word_176", word: "assistant", meaning: "n. 助手；助理", level: "IELTS6", root: "sist", rootMeaning: "站", rootMeaningEn: "stand; help", rootOrigin: "Latin", rootOriginNote: "由 assist + ant 组成", relatedWords: [], phonetic: "/əˈsɪstənt/", frequency: "高频" },
  { id: "word_177", word: "associate", meaning: "v. 联系；结交", level: "IELTS6", root: "soci", rootMeaning: "社会；同伴", rootMeaningEn: "companion; ally", rootOrigin: "Latin", rootOriginNote: "源自拉丁语 associare", relatedWords: [], phonetic: "/əˈsəʊʃieɪt/", frequency: "高频" },
  { id: "word_178", word: "association", meaning: "n. 协会；联想", level: "IELTS6", root: "soci", rootMeaning: "社会", rootMeaningEn: "companion; society", rootOrigin: "Latin", rootOriginNote: "由 associate + ion 组成", relatedWords: [], phonetic: "/əˌsəʊsiˈeɪʃn/", frequency: "高频" },
  { id: "word_179", word: "assume", meaning: "v. 假设；认为", level: "IELTS6", root: "sume", rootMeaning: "拿；采取", rootMeaningEn: "take; grasp", rootOrigin: "Latin", rootOriginNote: "源自拉丁语 assumere", relatedWords: [], phonetic: "/əˈsjuːm/", frequency: "高频" },
  { id: "word_180", word: "assure", meaning: "v. 保证；使确信", level: "IELTS7", root: "sure", rootMeaning: "确定；确信", rootMeaningEn: "certain; secure", rootOrigin: "Old French", rootOriginNote: "源自古法语 assurer", relatedWords: [], phonetic: "/əˈʃɔː/", frequency: "高频" }
];

const filePath = path.join(__dirname, '../src/data/mockWords.ts');
let content = fs.readFileSync(filePath, 'utf-8');
content = content.slice(0, -3);
const newContent = JSON.stringify(words, null, 2);
content += ',\n' + newContent.slice(1, -1) + '\n];\n';
fs.writeFileSync(filePath, content);
console.log('已添加 ' + words.length + ' 个单词');