const fs = require('fs');
const path = require('path');

const words = [
  { id: "word_271", word: "biscuit", meaning: "n. 饼干", level: "IELTS5", root: "biscuit", rootMeaning: "饼干", rootMeaningEn: "cookie; cracker", rootOrigin: "Old French", rootOriginNote: "源自古法语 bescuit", relatedWords: [], phonetic: "/ˈbɪskɪt/", frequency: "高频" },
  { id: "word_272", word: "bishop", meaning: "n. 主教", level: "IELTS7", root: "shop", rootMeaning: "主教", rootMeaningEn: "overseer; priest", rootOrigin: "Greek", rootOriginNote: "源自希腊语 episkopos", relatedWords: [], phonetic: "/ˈbɪʃəp/", frequency: "中频" },
  { id: "word_273", word: "bit", meaning: "n. 一点；少量", level: "IELTS5", root: "bite", rootMeaning: "咬；一点", rootMeaningEn: "piece; morsel", rootOrigin: "Old English", rootOriginNote: "由 bite 的名词化", relatedWords: [], phonetic: "/bɪt/", frequency: "高频" },
  { id: "word_274", word: "bite", meaning: "v./n. 咬；咬伤", level: "IELTS6", root: "bite", rootMeaning: "咬", rootMeaningEn: "cut with teeth", rootOrigin: "Old English", rootOriginNote: "源自盎格鲁-撒克逊语 bitan", relatedWords: [], phonetic: "/baɪt/", frequency: "中频" },
  { id: "word_275", word: "bitter", meaning: "adj. 苦的；痛苦的", level: "IELTS6", root: "bite", rootMeaning: "咬；苦", rootMeaningEn: "sharp; painful", rootOrigin: "Old English", rootOriginNote: "源自盎格鲁-撒克逊语 biter", relatedWords: [], phonetic: "/ˈbɪtə/", frequency: "中频" },
  { id: "word_276", word: "black", meaning: "adj. 黑色的 n. 黑色", level: "IELTS5", root: "black", rootMeaning: "黑", rootMeaningEn: "dark; opposite of white", rootOrigin: "Old English", rootOriginNote: "源自盎格鲁-撒克逊语 blæc", relatedWords: [], phonetic: "/blæk/", frequency: "高频" },
  { id: "word_277", word: "blade", meaning: "n. 刀片；叶片", level: "IELTS6", root: "blade", rootMeaning: "刀刃；叶片", rootMeaningEn: "sharp edge; leaf", rootOrigin: "Old English", rootOriginNote: "源自盎格鲁-撒克逊语 blæd", relatedWords: [], phonetic: "/bleɪd/", frequency: "中频" },
  { id: "word_278", word: "blame", meaning: "v./n. 责备；责怪", level: "IELTS5", root: "blas", rootMeaning: "中伤；责备", rootMeaningEn: "find fault; criticize", rootOrigin: "Old French", rootOriginNote: "源自古短语 blamer", relatedWords: [], phonetic: "/bleɪm/", frequency: "高频" },
  { id: "word_279", word: "blank", meaning: "adj. 空白的 n. 空白", level: "IELTS6", root: "blank", rootMeaning: "白色；空白", rootMeaningEn: "white; empty", rootOrigin: "Old French", rootOriginNote: "源自古法语 blanc", relatedWords: [], phonetic: "/blæŋk/", frequency: "高频" },
  { id: "word_280", word: "blanket", meaning: "n. 毯子；覆盖层", level: "IELTS5", root: "blank", rootMeaning: "白；覆盖", rootMeaningEn: "white; covering", rootOrigin: "Old French", rootOriginNote: "由 blank + et 组成", relatedWords: [], phonetic: "/ˈblæŋkɪt/", frequency: "高频" },
  { id: "word_281", word: "blast", meaning: "n. 爆炸；冲击 v. 炸毁", level: "IELTS6", root: "blast", rootMeaning: "爆炸；一阵风", rootMeaningEn: "explosion; gust", rootOrigin: "Old English", rootOriginNote: "源自盎格鲁-撒克逊语 blæst", relatedWords: [], phonetic: "/blɑːst/", frequency: "中频" },
  { id: "word_282", word: "blaze", meaning: "v. 燃烧；闪耀 n. 火焰", level: "IELTS7", root: "blaze", rootMeaning: "燃烧；火焰", rootMeaningEn: "burn; flame", rootOrigin: "Old English", rootOriginNote: "源自盎格鲁-撒克逊语 blæse", relatedWords: [], phonetic: "/bleɪz/", frequency: "中频" },
  { id: "word_283", word: "bleed", meaning: "v. 流血；渗出", level: "IELTS6", root: "blood", rootMeaning: "血", rootMeaningEn: "lose blood", rootOrigin: "Old English", rootOriginNote: "源自盎格鲁-撒克逊语 bledan", relatedWords: [], phonetic: "/bliːd/", frequency: "中频" },
  { id: "word_284", word: "blend", meaning: "v. 混合；融合 n. 混合物", level: "IELTS6", root: "blend", rootMeaning: "混合", rootMeaningEn: "mix; combine", rootOrigin: "Old English", rootOriginNote: "源自盎格鲁-撒克逊语 blendan", relatedWords: [], phonetic: "/blend/", frequency: "中频" },
  { id: "word_285", word: "bless", meaning: "v. 祝福；保佑", level: "IELTS7", root: "bless", rootMeaning: "祝福；赞美", rootMeaningEn: "make holy; praise", rootOrigin: "Old English", rootOriginNote: "源自盎格鲁-撒克逊语 bledsian", relatedWords: [], phonetic: "/bles/", frequency: "中频" },
  { id: "word_286", word: "blind", meaning: "adj. 瞎的；盲目的 v. 使失明", level: "IELTS5", root: "blind", rootMeaning: "盲的", rootMeaningEn: "unable to see", rootOrigin: "Old English", rootOriginNote: "源自盎格鲁-撒克逊语 blind", relatedWords: [], phonetic: "/blaɪnd/", frequency: "高频" },
  { id: "word_287", word: "block", meaning: "n. 块；街区 v. 阻塞", level: "IELTS5", root: "block", rootMeaning: "块；木块", rootMeaningEn: "solid mass; obstacle", rootOrigin: "Old French", rootOriginNote: "源自古法语 bloc", relatedWords: [], phonetic: "/blɒk/", frequency: "高频" },
  { id: "word_288", word: "blood", meaning: "n. 血；血液", level: "IELTS5", root: "blood", rootMeaning: "血", rootMeaningEn: "vital fluid", rootOrigin: "Old English", rootOriginNote: "源自盎格鲁-撒克逊语 blod", relatedWords: [], phonetic: "/blʌd/", frequency: "高频" },
  { id: "word_289", word: "bloom", meaning: "v. 开花；成长 n. 花", level: "IELTS6", root: "bloom", rootMeaning: "开花；繁盛", rootMeaningEn: "flower; flourish", rootOrigin: "Old Norse", rootOriginNote: "源自古诺尔斯语 blōm", relatedWords: [], phonetic: "/bluːm/", frequency: "中频" },
  { id: "word_290", word: "blow", meaning: "v. 吹；打击 n. 吹；一击", level: "IELTS5", root: "blow", rootMeaning: "吹；打", rootMeaningEn: "make air; strike", rootOrigin: "Old English", rootOriginNote: "源自盎格鲁-撒克逊语 blowan", relatedWords: [], phonetic: "/bləʊ/", frequency: "高频" },
  { id: "word_291", word: "blue", meaning: "adj. 蓝色的；忧郁的", level: "IELTS5", root: "blue", rootMeaning: "蓝色", rootMeaningEn: "color of sky", rootOrigin: "Old French", rootOriginNote: "源自古法语 bleu", relatedWords: [], phonetic: "/bluː/", frequency: "高频" },
  { id: "word_292", word: "board", meaning: "n. 木板；董事会 v. 上船", level: "IELTS5", root: "board", rootMeaning: "板；甲板", rootMeaningEn: "plank; table", rootOrigin: "Old English", rootOriginNote: "源自盎格鲁-撒克逊语 bord", relatedWords: [], phonetic: "/bɔːd/", frequency: "高频" },
  { id: "word_293", word: "boat", meaning: "n. 船；小船", level: "IELTS5", root: "boat", rootMeaning: "船", rootMeaningEn: "small vessel", rootOrigin: "Old English", rootOriginNote: "源自盎格鲁-撒克逊语 bat", relatedWords: [], phonetic: "/bəʊt/", frequency: "高频" },
  { id: "word_294", word: "body", meaning: "n. 身体；主体", level: "IELTS5", root: "body", rootMeaning: "身体", rootMeaningEn: "physical form", rootOrigin: "Old English", rootOriginNote: "源自盎格鲁-撒克逊语 bodig", relatedWords: [], phonetic: "/ˈbɒdi/", frequency: "高频" },
  { id: "word_295", word: "boil", meaning: "v. 沸腾；煮沸", level: "IELTS5", root: "boil", rootMeaning: "沸腾", rootMeaningEn: "bubble; cook", rootOrigin: "Latin", rootOriginNote: "源自拉丁语 bullire", relatedWords: [], phonetic: "/bɔɪl/", frequency: "中频" },
  { id: "word_296", word: "bold", meaning: "adj. 大胆的；粗体的", level: "IELTS6", root: "bold", rootMeaning: "大胆；勇敢", rootMeaningEn: "brave; thick", rootOrigin: "Old English", rootOriginNote: "源自盎格鲁-撒克逊语 bald", relatedWords: [], phonetic: "/bəʊld/", frequency: "中频" },
  { id: "word_297", word: "bolt", meaning: "n. 螺栓；闪电 v. 闩上", level: "IELTS6", root: "bolt", rootMeaning: "门闩；螺栓", rootMeaningEn: "fastener; bar", rootOrigin: "Old English", rootOriginNote: "源自盎格鲁-撒克逊语 bolt", relatedWords: [], phonetic: "/bəʊlt/", frequency: "中频" },
  { id: "word_298", word: "bomb", meaning: "n. 炸弹 v. 轰炸", level: "IELTS5", root: "bomb", rootMeaning: "炸弹", rootMeaningEn: "explosive device", rootOrigin: "Greek", rootOriginNote: "源自希腊语 bombos", relatedWords: [], phonetic: "/bɒm/", frequency: "高频" },
  { id: "word_299", word: "bond", meaning: "n. 债券；联系 v. 结合", level: "IELTS6", root: "band", rootMeaning: "带子；连接", rootMeaningEn: "bind; tie", rootOrigin: "Old English", rootOriginNote: "源自盎格鲁-撒克逊语 bind", relatedWords: [], phonetic: "/bɒnd/", frequency: "高频" },
  { id: "word_300", word: "bone", meaning: "n. 骨头；骨骼", level: "IELTS5", root: "bone", rootMeaning: "骨", rootMeaningEn: "skeletal tissue", rootOrigin: "Old English", rootOriginNote: "源自盎格鲁-撒克逊语 ban", relatedWords: [], phonetic: "/bəʊn/", frequency: "高频" }
];

const filePath = path.join(__dirname, '../src/data/mockWords.ts');
let content = fs.readFileSync(filePath, 'utf-8');
content = content.slice(0, -3);
const newContent = JSON.stringify(words, null, 2);
content += ',\n' + newContent.slice(1, -1) + '\n];\n';
fs.writeFileSync(filePath, content);
console.log('已添加 ' + words.length + ' 个单词');