// ============================================
// 单词更新模板 - 用于更新单词的词根词源信息
// 使用方法: 修改 wordName 和更新内容后运行
// ============================================

const fs = require('fs');
const content = fs.readFileSync('/home/fred/workspace/memoryworld-project/src/data/mockWords.ts', 'utf-8');
const lines = content.split('\n');
let insideArray = false;
let jsonLines = [];

for (let line of lines) {
  if (line.includes('export const mockWords: IELTSWord[] = [')) {
    insideArray = true;
    jsonLines.push('[');
    continue;
  }
  if (insideArray) {
    if (line.trim() === '];') {
      jsonLines.push(']');
      break;
    }
    jsonLines.push(line);
  }
}

const jsonStr = jsonLines.join('\n');
const words = JSON.parse(jsonStr);

// ==================== 更新配置 ====================
const wordName = 'argument';  // 要更新的单词（小写）

words.forEach(w => {
  if (w.word.toLowerCase() === wordName) {
    // ---------- 修改以下内容 ----------
    w.prefix = '';                    // 前缀（无前缀则为空字符串）
    w.prefixMeaning = '';             // 前缀含义（中文）
    w.prefixMeaningEn = '';           // 前缀含义（英文）
    w.root = 'arg';                   // 词根
    w.rootMeaning = '证明；断言';      // 词根含义（中文）
    w.rootMeaningEn = 'prove; assert'; // 词根含义（英文）
    w.rootOrigin = 'Latin/French';    // 词源语言
    // 词源说明（包含前缀、后缀信息）
    w.rootOriginNote = '源自拉丁语 argumentum，经由古法语 argument 传入英语，来自拉丁语 arguere（证明）后缀：-ment（名词后缀，表示行为或结果）';
    w.suffix = '-ment';               // 后缀（无后缀则为空字符串）
    w.suffixMeaning = '名词后缀，表示行为或结果';  // 后缀含义（中文）
    w.suffixMeaningEn = 'noun suffix, denoting action or result'; // 后缀含义（英文）
    // ----------------------------------
  }
});

const output = 'export interface IELTSWord {\n  id: string;\n  word: string;\n  meaning: string;\n  level: string;\n  prefix?: string;\n  prefixMeaning?: string;\n  prefixMeaningEn?: string;\n  root: string;\n  rootMeaning: string;\n  rootMeaningEn: string;\n  rootOrigin: string;\n  rootOriginNote: string;\n  suffix?: string;\n  suffixMeaning?: string;\n  suffixMeaningEn?: string;\n  relatedWords: { word: string; meaning: string; level: string }[];\n  phonetic: string;\n  frequency: string;\n  example: string;\n}\n\nexport const mockWords: IELTSWord[] = ' + JSON.stringify(words, null, 2) + ';';

fs.writeFileSync('/home/fred/workspace/memoryworld-project/src/data/mockWords.ts', output);
console.log(Updated );
