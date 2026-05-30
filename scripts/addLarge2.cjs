const fs = require('fs');
const path = require('path');

const words = [
  { id: "word_211", word: "balance", meaning: "n. 平衡；余额 v. 平衡", level: "IELTS6", root: "bil", rootMeaning: "两个；双", rootMeaningEn: "two; both", rootOrigin: "Latin", rootOriginNote: "源自拉丁语 bilanx", relatedWords: [], phonetic: "/ˈbæləns/", frequency: "高频" },
  { id: "word_212", word: "ball", meaning: "n. 球；舞会", level: "IELTS5", root: "ball", rootMeaning: "球", rootMeaningEn: "round body; sphere", rootOrigin: "Old French", rootOriginNote: "源自古法语 bal", relatedWords: [], phonetic: "/bɔːl/", frequency: "高频" },
  { id: "word_213", word: "ban", meaning: "v. 禁止；取缔 n. 禁止", level: "IELTS6", root: "ban", rootMeaning: "公告；禁止", rootMeaningEn: "prohibit; forbid", rootOrigin: "Old English", rootOriginNote: "源自盎格鲁-撒克逊语 banna", relatedWords: [], phonetic: "/bæn/", frequency: "中频" },
  { id: "word_214", word: "band", meaning: "n. 带；乐队 v. 联合", level: "IELTS6", root: "band", rootMeaning: "捆绑；带子", rootMeaningEn: "bind; strip", rootOrigin: "Old German", rootOriginNote: "源自日耳曼语 bandi", relatedWords: [], phonetic: "/bænd/", frequency: "高频" },
  { id: "word_215", word: "bank", meaning: "n. 银行；河岸", level: "IELTS5", root: "bank", rootMeaning: "长凳；银行", rootMeaningEn: "bench; ridge", rootOrigin: "Old Italian", rootOriginNote: "源自意大利语 banca", relatedWords: [], phonetic: "/bæŋk/", frequency: "高频" },
  { id: "word_216", word: "bar", meaning: "n. 酒吧；条 v. 禁止", level: "IELTS5", root: "bar", rootMeaning: "棒；栏杆", rootMeaningEn: "rod; gate", rootOrigin: "Old French", rootOriginNote: "源自古法语 barre", relatedWords: [], phonetic: "/bɑː/", frequency: "高频" },
  { id: "word_217", word: "barrier", meaning: "n. 障碍；屏障", level: "IELTS7", root: "bar", rootMeaning: "棒；阻挡", rootMeaningEn: "rod; block", rootOrigin: "Old French", rootOriginNote: "由 bar + rier 组成", relatedWords: [], phonetic: "/ˈbæriə/", frequency: "高频" },
  { id: "word_218", word: "base", meaning: "n. 基础；基地 v. 基于", level: "IELTS5", root: "bas", rootMeaning: "底部；基础", rootMeaningEn: "bottom; foundation", rootOrigin: "Greek", rootOriginNote: "源自希腊语 basis", relatedWords: [], phonetic: "/beɪs/", frequency: "高频" },
  { id: "word_219", word: "basic", meaning: "adj. 基础的；基本的", level: "IELTS5", root: "bas", rootMeaning: "基础", rootMeaningEn: "base; foundation", rootOrigin: "Greek", rootOriginNote: "由 base + ic 组成", relatedWords: [], phonetic: "/ˈbeɪsɪk/", frequency: "高频" },
  { id: "word_220", word: "basically", meaning: "adv. 基本上；主要地", level: "IELTS6", root: "bas", rootMeaning: "基础", rootMeaningEn: "base; essential", rootOrigin: "Greek", rootOriginNote: "由 basic + al + ly 组成", relatedWords: [], phonetic: "/ˈbeɪsɪkli/", frequency: "高频" },
  { id: "word_221", word: "basis", meaning: "n. 基础；根据", level: "IELTS6", root: "bas", rootMeaning: "基础", rootMeaningEn: "base; foundation", rootOrigin: "Greek", rootOriginNote: "源自希腊语 basis", relatedWords: [], phonetic: "/ˈbeɪsɪs/", frequency: "高频" },
  { id: "word_222", word: "basket", meaning: "n. 篮子", level: "IELTS5", root: "basket", rootMeaning: "篮子", rootMeaningEn: "container", rootOrigin: "Old English", rootOriginNote: "源自盎格鲁-撒克逊语 basket", relatedWords: [], phonetic: "/ˈbɑːskɪt/", frequency: "高频" },
  { id: "word_223", word: "bath", meaning: "n. 沐浴；浴室", level: "IELTS5", root: "bath", rootMeaning: "沐浴", rootMeaningEn: "washing", rootOrigin: "Old English", rootOriginNote: "源自盎格鲁-撒克逊语 bæp", relatedWords: [], phonetic: "/bɑːθ/", frequency: "高频" },
  { id: "word_224", word: "bathroom", meaning: "n. 浴室；卫生间", level: "IELTS5", root: "room", rootMeaning: "房间", rootMeaningEn: "space; chamber", rootOrigin: "Old English", rootOriginNote: "由 bath + room 组成", relatedWords: [], phonetic: "/ˈbɑːθruːm/", frequency: "高频" },
  { id: "word_225", word: "battery", meaning: "n. 电池；蓄电池", level: "IELTS6", root: "beat", rootMeaning: "打；击", rootMeaningEn: "strike; hit", rootOrigin: "Old French", rootOriginNote: "源自古法语 baterie", relatedWords: [], phonetic: "/ˈbætri/", frequency: "中频" },
  { id: "word_226", word: "battle", meaning: "n./v. 战斗；斗争", level: "IELTS5", root: "bat", rootMeaning: "打；战斗", rootMeaningEn: "fight; strike", rootOrigin: "Old French", rootOriginNote: "源自古法语 bataille", relatedWords: [], phonetic: "/ˈbætl/", frequency: "高频" },
  { id: "word_227", word: "beach", meaning: "n. 海滩；湖滨", level: "IELTS5", root: "beach", rootMeaning: "海滩", rootMeaningEn: "shore; coast", rootOrigin: "Old English", rootOriginNote: "源自盎格鲁-撒克逊语 bæce", relatedWords: [], phonetic: "/biːtʃ/", frequency: "高频" },
  { id: "word_228", word: "bear", meaning: "v. 承受；忍受 n. 熊", level: "IELTS5", root: "bear", rootMeaning: "携带；忍耐", rootMeaningEn: "carry; endure", rootOrigin: "Old English", rootOriginNote: "源自盎格鲁-撒克逊语 beran", relatedWords: [], phonetic: "/beə/", frequency: "高频" },
  { id: "word_229", word: "beat", meaning: "v. 打败；敲打 n. 节拍", level: "IELTS5", root: "beat", rootMeaning: "打；敲", rootMeaningEn: "strike; hit", rootOrigin: "Old English", rootOriginNote: "源自盎格鲁-撒克逊语 beatan", relatedWords: [], phonetic: "/biːt/", frequency: "高频" },
  { id: "word_230", word: "beautiful", meaning: "adj. 美丽的；美好的", level: "IELTS5", root: "beaut", rootMeaning: "美；美丽", rootMeaningEn: "beauty; lovely", rootOrigin: "Old French", rootOriginNote: "由 beauty + ful 组成", relatedWords: [], phonetic: "/ˈbjuːtɪfl/", frequency: "高频" },
  { id: "word_231", word: "beauty", meaning: "n. 美；美人", level: "IELTS5", root: "beaut", rootMeaning: "美", rootMeaningEn: "beautiful; loveliness", rootOrigin: "Old French", rootOriginNote: "源自古法语 beaute", relatedWords: [], phonetic: "/ˈbjuːti/", frequency: "高频" },
  { id: "word_232", word: "because", meaning: "conj. 因为", level: "IELTS5", root: "cause", rootMeaning: "原因", rootMeaningEn: "reason; cause", rootOrigin: "Old English", rootOriginNote: "由 by + cause 组成", relatedWords: [], phonetic: "/bɪˈkɒz/", frequency: "高频" },
  { id: "word_233", word: "become", meaning: "v. 变成；成为", level: "IELTS5", root: "come", rootMeaning: "来；变成", rootMeaningEn: "arrive; grow", rootOrigin: "Old English", rootOriginNote: "由 be- + come 组成", relatedWords: [], phonetic: "/bɪˈkʌm/", frequency: "高频" },
  { id: "word_234", word: "bed", meaning: "n. 床；河床", level: "IELTS5", root: "bed", rootMeaning: "床", rootMeaningEn: "sleeping place", rootOrigin: "Old English", rootOriginNote: "源自盎格鲁-撒克逊语 bedd", relatedWords: [], phonetic: "/bed/", frequency: "高频" },
  { id: "word_235", word: "bedroom", meaning: "n. 卧室", level: "IELTS5", root: "room", rootMeaning: "房间", rootMeaningEn: "chamber; space", rootOrigin: "Old English", rootOriginNote: "由 bed + room 组成", relatedWords: [], phonetic: "/ˈbedruːm/", frequency: "高频" },
  { id: "word_236", word: "beer", meaning: "n. 啤酒", level: "IELTS5", root: "beer", rootMeaning: "啤酒", rootMeaningEn: "malted liquor", rootOrigin: "Old English", rootOriginNote: "源自盎格鲁-撒克逊语 beor", relatedWords: [], phonetic: "/bɪə/", frequency: "高频" },
  { id: "word_237", word: "before", meaning: "prep. 在...之前 adv. 以前", level: "IELTS5", root: "fore", rootMeaning: "前面；预先", rootMeaningEn: "front; ahead", rootOrigin: "Old English", rootOriginNote: "由 be- + fore 组成", relatedWords: [], phonetic: "/bɪˈfɔː/", frequency: "高频" },
  { id: "word_238", word: "begin", meaning: "v. 开始；启动", level: "IELTS5", root: "gin", rootMeaning: "开始", rootMeaningEn: "start; open", rootOrigin: "Old German", rootOriginNote: "源自德语 beginnen", relatedWords: [], phonetic: "/bɪˈɡɪn/", frequency: "高频" },
  { id: "word_239", word: "beginning", meaning: "n. 开始；起点", level: "IELTS5", root: "gin", rootMeaning: "开始", rootMeaningEn: "start; opening", rootOrigin: "Old German", rootOriginNote: "由 begin + n + ing 组成", relatedWords: [], phonetic: "/bɪˈɡɪnɪŋ/", frequency: "高频" },
  { id: "word_240", word: "behalf", meaning: "n. 代表；利益", level: "IELTS7", root: "half", rootMeaning: "半；部分", rootMeaningEn: "half; part", rootOrigin: "Old English", rootOriginNote: "由 be- + half 组成", relatedWords: [], phonetic: "/bɪˈhɑːf/", frequency: "高频" }
];

const filePath = path.join(__dirname, '../src/data/mockWords.ts');
let content = fs.readFileSync(filePath, 'utf-8');
content = content.slice(0, -3);
const newContent = JSON.stringify(words, null, 2);
content += ',\n' + newContent.slice(1, -1) + '\n];\n';
fs.writeFileSync(filePath, content);
console.log('已添加 ' + words.length + ' 个单词');