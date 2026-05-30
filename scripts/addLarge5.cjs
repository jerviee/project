const fs = require('fs');
const path = require('path');

const words = [
  { id: "word_301", word: "book", meaning: "n. 书；书本 v. 预订", level: "IELTS5", root: "book", rootMeaning: "书", rootMeaningEn: "written work", rootOrigin: "Old English", rootOriginNote: "源自盎格鲁-撒克逊语 boc", relatedWords: [], phonetic: "/bʊk/", frequency: "高频" },
  { id: "word_302", word: "boom", meaning: "n. 繁荣；隆隆声 v. 兴旺", level: "IELTS6", root: "boom", rootMeaning: "轰鸣；繁荣", rootMeaningEn: "thunder; prosper", rootOrigin: "Dutch", rootOriginNote: "源自荷兰语 boom", relatedWords: [], phonetic: "/buːm/", frequency: "中频" },
  { id: "word_303", word: "boot", meaning: "n. 靴子 v. 启动", level: "IELTS5", root: "boot", rootMeaning: "靴子", rootMeaningEn: "footwear; start", rootOrigin: "Old French", rootOriginNote: "源自古法语 bote", relatedWords: [], phonetic: "/buːt/", frequency: "高频" },
  { id: "word_304", word: "border", meaning: "n. 边界；边境", level: "IELTS6", root: "bord", rootMeaning: "边缘；边界", rootMeaningEn: "edge; boundary", rootOrigin: "Old French", rootOriginNote: "源自古法语 bordure", relatedWords: [], phonetic: "/ˈbɔːdə/", frequency: "高频" },
  { id: "word_305", word: "bore", meaning: "v. 使厌烦；钻孔 n. 孔", level: "IELTS6", root: "bore", rootMeaning: "钻；烦", rootMeaningEn: "drill; weary", rootOrigin: "Old English", rootOriginNote: "源自盎格鲁-撒克逊语 borian", relatedWords: [], phonetic: "/bɔː/", frequency: "中频" },
  { id: "word_306", word: "born", meaning: "adj. 天生的；出生的", level: "IELTS5", root: "bear", rootMeaning: "生育；携带", rootMeaningEn: "brought into life", rootOrigin: "Old English", rootOriginNote: "由 bear 的过去分词", relatedWords: [], phonetic: "/bɔːn/", frequency: "高频" },
  { id: "word_307", word: "borrow", meaning: "v. 借；借用", level: "IELTS5", root: "borrow", rootMeaning: "借", rootMeaningEn: "take temporarily", rootOrigin: "Old English", rootOriginNote: "源自盎格鲁-撒克逊语 borgian", relatedWords: [], phonetic: "/ˈbɒrəʊ/", frequency: "高频" },
  { id: "word_308", word: "boss", meaning: "n. 老板；上司", level: "IELTS5", root: "boss", rootMeaning: "主人；领导者", rootMeaningEn: "master; leader", rootOrigin: "Dutch", rootOriginNote: "源自荷兰语 baas", relatedWords: [], phonetic: "/bɒs/", frequency: "高频" },
  { id: "word_309", word: "both", meaning: "adj./pron. 两者都", level: "IELTS5", root: "both", rootMeaning: "两者", rootMeaningEn: "the two; each of two", rootOrigin: "Old English", rootOriginNote: "源自盎格鲁-撒克逊语 bōth", relatedWords: [], phonetic: "/bəʊθ/", frequency: "高频" },
  { id: "word_310", word: "bottle", meaning: "n. 瓶子", level: "IELTS5", root: "bottle", rootMeaning: "瓶子", rootMeaningEn: "container", rootOrigin: "Old French", rootOriginNote: "源自古法语 bouteille", relatedWords: [], phonetic: "/ˈbɒtl/", frequency: "高频" },
  { id: "word_311", word: "bottom", meaning: "n. 底部；底端", level: "IELTS5", root: "bottom", rootMeaning: "底；基础", rootMeaningEn: "base; lowest part", rootOrigin: "Old English", rootOriginNote: "源自盎格鲁-撒克逊语 botm", relatedWords: [], phonetic: "/ˈbɒtəm/", frequency: "高频" },
  { id: "word_312", word: "bounce", meaning: "v. 弹跳；反弹", level: "IELTS6", root: "bounce", rootMeaning: "弹起", rootMeaningEn: "spring; rebound", rootOrigin: "Old French", rootOriginNote: "源自古法语 boncer", relatedWords: [], phonetic: "/baʊns/", frequency: "中频" },
  { id: "word_313", word: "bound", meaning: "adj. 一定的；受约束的", level: "IELTS6", root: "bind", rootMeaning: "捆绑", rootMeaningEn: "obliged; tied", rootOrigin: "Old English", rootOriginNote: "由 bind 的过去分词", relatedWords: [], phonetic: "/baʊnd/", frequency: "高频" },
  { id: "word_314", word: "boundary", meaning: "n. 边界；界限", level: "IELTS6", root: "bound", rootMeaning: "边界", rootMeaningEn: "limit; border", rootOrigin: "Old French", rootOriginNote: "由 bound + ary 组成", relatedWords: [], phonetic: "/ˈbaʊndəri/", frequency: "高频" },
  { id: "word_315", word: "bow", meaning: "v. 鞠躬；弯腰 n. 弓", level: "IELTS6", root: "bow", rootMeaning: "弯曲；鞠躬", rootMeaningEn: "bend; curve", rootOrigin: "Old English", rootOriginNote: "源自盎格鲁-撒克逊语 boga", relatedWords: [], phonetic: "/bəʊ/", frequency: "中频" },
  { id: "word_316", word: "bowl", meaning: "n. 碗；钵", level: "IELTS5", root: "bowl", rootMeaning: "碗", rootMeaningEn: "deep dish", rootOrigin: "Old English", rootOriginNote: "源自盎格鲁-撒克逊语 bolla", relatedWords: [], phonetic: "/bəʊl/", frequency: "高频" },
  { id: "word_317", word: "box", meaning: "n. 盒子；箱子 v. 拳击", level: "IELTS5", root: "box", rootMeaning: "盒子", rootMeaningEn: "container; fight", rootOrigin: "Old English", rootOriginNote: "源自盎格鲁-撒克逊语 box", relatedWords: [], phonetic: "/bɒks/", frequency: "高频" },
  { id: "word_318", word: "boy", meaning: "n. 男孩；小伙子", level: "IELTS5", root: "boy", rootMeaning: "男孩", rootMeaningEn: "male child", rootOrigin: "Middle English", rootOriginNote: "源自中古英语 boy", relatedWords: [], phonetic: "/bɔɪ/", frequency: "高频" },
  { id: "word_319", word: "brain", meaning: "n. 大脑；头脑", level: "IELTS5", root: "brain", rootMeaning: "脑", rootMeaningEn: "organ of thought", rootOrigin: "Old English", rootOriginNote: "源自盎格鲁-撒克逊语 bragen", relatedWords: [], phonetic: "/breɪn/", frequency: "高频" },
  { id: "word_320", word: "branch", meaning: "n. 树枝；分支", level: "IELTS6", root: "branch", rootMeaning: "分支", rootMeaningEn: "limb; division", rootOrigin: "Old French", rootOriginNote: "源自古法语 branche", relatedWords: [], phonetic: "/brɑːntʃ/", frequency: "高频" },
  { id: "word_321", word: "brand", meaning: "n. 品牌；商标 v. 烙印", level: "IELTS6", root: "brand", rootMeaning: "火；烙印", rootMeaningEn: "burn; mark", rootOrigin: "Old English", rootOriginNote: "源自盎格鲁-撒克逊语 brand", relatedWords: [], phonetic: "/brænd/", frequency: "高频" },
  { id: "word_322", word: "brass", meaning: "n. 黄铜；铜管乐器", level: "IELTS6", root: "brass", rootMeaning: "黄铜", rootMeaningEn: "alloy of copper", rootOrigin: "Old English", rootOriginNote: "源自盎格鲁-撒克逊语 bræs", relatedWords: [], phonetic: "/brɑːs/", frequency: "中频" },
  { id: "word_323", word: "brave", meaning: "adj. 勇敢的；无畏的", level: "IELTS5", root: "brave", rootMeaning: "勇敢", rootMeaningEn: "courageous", rootOrigin: "Old French", rootOriginNote: "源自古法语 brave", relatedWords: [], phonetic: "/breɪv/", frequency: "高频" },
  { id: "word_324", word: "bread", meaning: "n. 面包；生计", level: "IELTS5", root: "bread", rootMeaning: "面包", rootMeaningEn: "food made of flour", rootOrigin: "Old English", rootOriginNote: "源自盎格鲁-撒克逊语 bread", relatedWords: [], phonetic: "/bred/", frequency: "高频" },
  { id: "word_325", word: "break", meaning: "v. 打破；违反 n. 休息", level: "IELTS5", root: "break", rootMeaning: "破；裂", rootMeaningEn: "smash; violate", rootOrigin: "Old English", rootOriginNote: "源自盎格鲁-撒克逊语 brecan", relatedWords: [], phonetic: "/breɪk/", frequency: "高频" },
  { id: "word_326", word: "breakfast", meaning: "n. 早餐", level: "IELTS5", root: "fast", rootMeaning: "禁食", rootMeaningEn: "go without food", rootOrigin: "Old English", rootOriginNote: "由 break + fast 组成", relatedWords: [], phonetic: "/ˈbrekfəst/", frequency: "高频" },
  { id: "word_327", word: "breath", meaning: "n. 呼吸；气息", level: "IELTS5", root: "breathe", rootMeaning: "呼吸", rootMeaningEn: "air in lungs", rootOrigin: "Old English", rootOriginNote: "源自盎格鲁-撒克逊语 bræð", relatedWords: [], phonetic: "/breθ/", frequency: "高频" },
  { id: "word_328", word: "breathe", meaning: "v. 呼吸；呼气", level: "IELTS5", root: "breath", rootMeaning: "呼吸", rootMeaningEn: "inhale; exhale", rootOrigin: "Old English", rootOriginNote: "源自盎格鲁-撒克逊语 bræþan", relatedWords: [], phonetic: "/briːð/", frequency: "高频" },
  { id: "word_329", word: "brick", meaning: "n. 砖；砖块", level: "IELTS5", root: "brick", rootMeaning: "砖", rootMeaningEn: "block of clay", rootOrigin: "Old English", rootOriginNote: "源自盎格鲁-撒克逊语 bric", relatedWords: [], phonetic: "/brɪk/", frequency: "高频" },
  { id: "word_330", word: "bridge", meaning: "n. 桥；桥梁", level: "IELTS5", root: "bridge", rootMeaning: "桥", rootMeaningEn: "structure over water", rootOrigin: "Old English", rootOriginNote: "源自盎格鲁-撒克逊语 brycg", relatedWords: [], phonetic: "/brɪdʒ/", frequency: "高频" }
];

const filePath = path.join(__dirname, '../src/data/mockWords.ts');
let content = fs.readFileSync(filePath, 'utf-8');
content = content.slice(0, -3);
const newContent = JSON.stringify(words, null, 2);
content += ',\n' + newContent.slice(1, -1) + '\n];\n';
fs.writeFileSync(filePath, content);
console.log('已添加 ' + words.length + ' 个单词');