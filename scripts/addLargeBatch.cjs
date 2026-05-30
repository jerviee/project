const fs = require('fs');
const path = require('path');

const words = [
  { id: "word_181", word: "astonish", meaning: "v. 使惊讶", level: "IELTS7", root: "ton", rootMeaning: "雷；声音", rootMeaningEn: "thunder; sound", rootOrigin: "Greek", rootOriginNote: "源自希腊语 existēmi", relatedWords: [], phonetic: "/əˈstɒnɪʃ/", frequency: "中频" },
  { id: "word_182", word: "astronomy", meaning: "n. 天文学", level: "IELTS7", root: "nom", rootMeaning: "法律；规则", rootMeaningEn: "law; rule", rootOrigin: "Greek", rootOriginNote: "源自希腊语 astronomia", relatedWords: [], phonetic: "/əˈstrɒnəmi/", frequency: "中频" },
  { id: "word_183", word: "atmosphere", meaning: "n. 大气；气氛", level: "IELTS6", root: "sph", rootMeaning: "球体", rootMeaningEn: "ball; sphere", rootOrigin: "Greek", rootOriginNote: "由 atm(o) + sphere 组成", relatedWords: [], phonetic: "/ˈætməsfɪə/", frequency: "高频" },
  { id: "word_184", word: "attach", meaning: "v. 附上；贴上", level: "IELTS6", root: "tach", rootMeaning: "钉；连接", rootMeaningEn: "nail; tie", rootOrigin: "Old French", rootOriginNote: "源自古法语 attacher", relatedWords: [], phonetic: "/əˈtætʃ/", frequency: "高频" },
  { id: "word_185", word: "attack", meaning: "v./n. 攻击；进攻", level: "IELTS5", root: "tack", rootMeaning: "钉；攻击", rootMeaningEn: "nail; assault", rootOrigin: "Old French", rootOriginNote: "源自古法语 ataquer", relatedWords: [], phonetic: "/əˈtæk/", frequency: "高频" },
  { id: "word_186", word: "attempt", meaning: "v./n. 尝试；企图", level: "IELTS5", root: "tempt", rootMeaning: "尝试；诱惑", rootMeaningEn: "try; tempt", rootOrigin: "Latin", rootOriginNote: "源自古法语 attempter", relatedWords: [], phonetic: "/əˈtempt/", frequency: "高频" },
  { id: "word_187", word: "attend", meaning: "v. 参加；照顾", level: "IELTS6", root: "tend", rootMeaning: "伸展；照顾", rootMeaningEn: "stretch; care for", rootOrigin: "Latin", rootOriginNote: "源自拉丁语 attendere", relatedWords: [], phonetic: "/əˈtend/", frequency: "高频" },
  { id: "word_188", word: "attention", meaning: "n. 注意；注意力", level: "IELTS5", root: "tend", rootMeaning: "伸展；关心", rootMeaningEn: "stretch; care", rootOrigin: "Latin", rootOriginNote: "源自拉丁语 attentio", relatedWords: [], phonetic: "/əˈtenʃn/", frequency: "高频" },
  { id: "word_189", word: "attitude", meaning: "n. 态度；看法", level: "IELTS6", root: "apt", rootMeaning: "适合；能力", rootMeaningEn: "fit; ability", rootOrigin: "French", rootOriginNote: "源自法语 attitude", relatedWords: [], phonetic: "/ˈætɪtjuːd/", frequency: "高频" },
  { id: "word_190", word: "attorney", meaning: "n. 律师；代理人", level: "IELTS7", root: "turn", rootMeaning: "转；委托", rootMeaningEn: "turn; entrust", rootOrigin: "Old French", rootOriginNote: "源自古法语 atorner", relatedWords: [], phonetic: "/əˈtɜːni/", frequency: "中频" },
  { id: "word_191", word: "attract", meaning: "v. 吸引；引起", level: "IELTS5", root: "tract", rootMeaning: "拉；抽", rootMeaningEn: "draw; pull", rootOrigin: "Latin", rootOriginNote: "源自拉丁语 attrahere", relatedWords: [], phonetic: "/əˈtrækt/", frequency: "高频" },
  { id: "word_192", word: "attraction", meaning: "n. 吸引力；吸引物", level: "IELTS6", root: "tract", rootMeaning: "拉", rootMeaningEn: "draw; pull", rootOrigin: "Latin", rootOriginNote: "由 attract + ion 组成", relatedWords: [], phonetic: "/əˈtrækʃn/", frequency: "高频" },
  { id: "word_193", word: "attractive", meaning: "adj. 吸引人的；有魅力的", level: "IELTS5", root: "tract", rootMeaning: "拉", rootMeaningEn: "draw; pull", rootOrigin: "Latin", rootOriginNote: "由 attract + ive 组成", relatedWords: [], phonetic: "/əˈtræktɪv/", frequency: "高频" },
  { id: "word_194", word: "attribute", meaning: "v. 归因于 n. 属性", level: "IELTS7", root: "tribute", rootMeaning: "给予；分配", rootMeaningEn: "give; assign", rootOrigin: "Latin", rootOriginNote: "源自拉丁语 attribuere", relatedWords: [], phonetic: "/əˈtrɪbjuːt/", frequency: "高频" },
  { id: "word_195", word: "audience", meaning: "n. 观众；听众", level: "IELTS6", root: "aud", rootMeaning: "听", rootMeaningEn: "hear; listen", rootOrigin: "Latin", rootOriginNote: "源自古法语 audience", relatedWords: [], phonetic: "/ˈɔːdiəns/", frequency: "高频" },
  { id: "word_196", word: "author", meaning: "n. 作者；作家", level: "IELTS6", root: "auth", rootMeaning: "创造；权威", rootMeaningEn: "create; origin", rootOrigin: "Latin", rootOriginNote: "源自古法语 auteur", relatedWords: [], phonetic: "/ˈɔːθə/", frequency: "高频" },
  { id: "word_197", word: "authority", meaning: "n. 权威；权力", level: "IELTS6", root: "auth", rootMeaning: "创造；来源", rootMeaningEn: "create; origin", rootOrigin: "Latin", rootOriginNote: "源自古法语 autorite", relatedWords: [], phonetic: "/ɔːˈθɒrəti/", frequency: "高频" },
  { id: "word_198", word: "automatic", meaning: "adj. 自动的；无意识的", level: "IELTS7", root: "mat", rootMeaning: "准备；动", rootMeaningEn: "ready; move", rootOrigin: "Greek", rootOriginNote: "源自希腊语 automatos", relatedWords: [], phonetic: "/ˌɔːtəˈmætɪk/", frequency: "中频" },
  { id: "word_199", word: "available", meaning: "adj. 可用的；可获得的", level: "IELTS6", root: "vail", rootMeaning: "价值；有用", rootMeaningEn: "value; be worth", rootOrigin: "Old French", rootOriginNote: "由 avail + able 组成", relatedWords: [], phonetic: "/əˈveɪləbl/", frequency: "高频" },
  { id: "word_200", word: "average", meaning: "n. 平均；平均水平", level: "IELTS5", root: "aver", rootMeaning: "损坏；平等", rootMeaningEn: "damage; equal", rootOrigin: "Arabic", rootOriginNote: "源自阿拉伯语 awar", relatedWords: [], phonetic: "/ˈævərɪdʒ/", frequency: "高频" },
  { id: "word_201", word: "avoid", meaning: "v. 避免；避开", level: "IELTS6", root: "void", rootMeaning: "空；无效", rootMeaningEn: "empty; invalid", rootOrigin: "Old French", rootOriginNote: "源自古法语 eviter", relatedWords: [], phonetic: "/əˈvɔɪd/", frequency: "高频" },
  { id: "word_202", word: "awake", meaning: "v. 醒来；唤醒 adj. 醒着的", level: "IELTS6", root: "wake", rootMeaning: "醒；监视", rootMeaningEn: "be watchful", rootOrigin: "Old English", rootOriginNote: "由 a- + wake 组成", relatedWords: [], phonetic: "/əˈweɪk/", frequency: "中频" },
  { id: "word_203", word: "award", meaning: "n. 奖励；奖品 v. 授予", level: "IELTS6", root: "ward", rootMeaning: "守护；奖励", rootMeaningEn: "guard; prize", rootOrigin: "Old English", rootOriginNote: "源自盎格鲁-撒克逊语 weord", relatedWords: [], phonetic: "/əˈwɔːd/", frequency: "高频" },
  { id: "word_204", word: "aware", meaning: "adj. 意识到的；知道的", level: "IELTS5", root: "war", rootMeaning: "注意；观察", rootMeaningEn: "watch; heed", rootOrigin: "Old English", rootOriginNote: "源自盎格鲁-撒克逊语 gewær", relatedWords: [], phonetic: "/əˈweə/", frequency: "高频" },
  { id: "word_205", word: "away", meaning: "adv. 离开；远处", level: "IELTS5", root: "way", rootMeaning: "路；方式", rootMeaningEn: "road; path", rootOrigin: "Old English", rootOriginNote: "由 a- + way 组成", relatedWords: [], phonetic: "/əˈweɪ/", frequency: "高频" },
  { id: "word_206", word: "awful", meaning: "adj. 可怕的；极度的", level: "IELTS6", root: "awe", rootMeaning: "敬畏；恐惧", rootMeaningEn: "dread; fear", rootOrigin: "Old English", rootOriginNote: "由 awe + ful 组成", relatedWords: [], phonetic: "/ˈɔːfl/", frequency: "中频" },
  { id: "word_207", word: "awkward", meaning: "adj. 尴尬的；笨拙的", level: "IELTS7", root: "awk", rootMeaning: "笨拙；错误", rootMeaningEn: "clumsy; wrong", rootOrigin: "Old Norse", rootOriginNote: "源自古诺尔斯语 afugr", relatedWords: [], phonetic: "/ˈɔːkwəd/", frequency: "中频" },
  { id: "word_208", word: "background", meaning: "n. 背景；经历", level: "IELTS6", root: "ground", rootMeaning: "地面；基础", rootMeaningEn: "ground; base", rootOrigin: "Old English", rootOriginNote: "由 back + ground 组成", relatedWords: [], phonetic: "/ˈbækɡraʊnd/", frequency: "高频" },
  { id: "word_209", word: "bacteria", meaning: "n. 细菌", level: "IELTS7", root: "bacter", rootMeaning: "小棒；细菌", rootMeaningEn: "little rod; germ", rootOrigin: "Greek", rootOriginNote: "源自希腊语 bakterion", relatedWords: [], phonetic: "/bækˈtɪəriə/", frequency: "中频" },
  { id: "word_210", word: "bad", meaning: "adj. 坏的；差的", level: "IELTS5", root: "bad", rootMeaning: "坏；恶", rootMeaningEn: "evil; wicked", rootOrigin: "Old English", rootOriginNote: "源自盎格鲁-撒克逊语 bæddel", relatedWords: [], phonetic: "/bæd/", frequency: "高频" }
];

const filePath = path.join(__dirname, '../src/data/mockWords.ts');
let content = fs.readFileSync(filePath, 'utf-8');
content = content.slice(0, -3);
const newContent = JSON.stringify(words, null, 2);
content += ',\n' + newContent.slice(1, -1) + '\n];\n';
fs.writeFileSync(filePath, content);
console.log('已添加 ' + words.length + ' 个单词');