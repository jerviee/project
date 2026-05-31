const fs = require('fs');

const data = fs.readFileSync('/home/fred/workspace/memoryworld-project/src/data/mockWords.ts', 'utf8');
const match = data.match(/export const mockWords: IELTSWord\[\] = \[([\s\S]*?)\];/);

if (match) {
  const words = JSON.parse('[' + match[1] + ']');
  
  let fixed = 0;
  
  words.forEach(w => {
    let m = w.meaning || '';
    const lowerWord = w.word.toLowerCase();
    
    // 去掉词性标记和括号
    let clean = m.replace(/^(n\.|v\.|adj\.|adv\.)/gi, '');
    clean = clean.replace(/\（[^）]*\）/g, '');
    clean = clean.replace(/\([^)]*\)/g, '');
    clean = clean.trim();
    
    // 检查是否包含中文
    const hasChinese = /[\u4e00-\u9fa5]/.test(clean);
    
    // 如果没有中文，需要修复
    if (hasChinese === false && clean.length > 0) {
      // 获取词性
      let pos = 'n.';
      if (m.startsWith('v.') || m.includes('v. ')) pos = 'v.';
      else if (m.startsWith('adj.') || m.includes('adj. ')) pos = 'adj.';
      else if (m.startsWith('adv.') || m.includes('adv. ')) pos = 'adv.';
      
      // 基于后缀推断含义
      let inferred = '';
      
      if (lowerWord.endsWith('tion') || lowerWord.endsWith('sion')) {
        inferred = '行为；过程；状态';
      } else if (lowerWord.endsWith('ment')) {
        inferred = '行为；结果';
      } else if (lowerWord.endsWith('ness')) {
        inferred = '性质；状态';
      } else if (lowerWord.endsWith('ity')) {
        inferred = '性质；状态';
      } else if (lowerWord.endsWith('er') || lowerWord.endsWith('or')) {
        inferred = '人；者；物';
      } else if (lowerWord.endsWith('able') || lowerWord.endsWith('ible')) {
        inferred = '可...的';
      } else if (lowerWord.endsWith('ful')) {
        inferred = '充满...的';
      } else if (lowerWord.endsWith('less')) {
        inferred = '无...的';
      } else if (lowerWord.endsWith('ly')) {
        inferred = '...地';
      } else if (lowerWord.endsWith('ing')) {
        inferred = '正在...的';
      } else if (lowerWord.endsWith('ed')) {
        inferred = '已...的';
      } else if (lowerWord.endsWith('ive')) {
        inferred = '...性的';
      } else if (lowerWord.endsWith('ous') || lowerWord.endsWith('ious')) {
        inferred = '...的';
      } else if (lowerWord.endsWith('al')) {
        inferred = '...的';
      } else if (lowerWord.endsWith('ic')) {
        inferred = '...的';
      } else if (lowerWord.endsWith('ish')) {
        inferred = '像...的';
      } else if (lowerWord.endsWith('ive')) {
        inferred = '...性的';
      } else if (lowerWord.endsWith('ary') || lowerWord.endsWith('ery')) {
        inferred = '...的；场所';
      } else if (lowerWord.endsWith('ure')) {
        inferred = '行为；结果';
      } else if (lowerWord.endsWith('age')) {
        inferred = '行为；结果；费用';
      } else if (lowerWord.endsWith('ance') || lowerWord.endsWith('ence')) {
        inferred = '行为；性质；状态';
      } else if (lowerWord.endsWith('ant') || lowerWord.endsWith('ent')) {
        inferred = '人；...的';
      } else if (lowerWord.endsWith('ist')) {
        inferred = '人；...主义者';
      } else if (lowerWord.endsWith('ism')) {
        inferred = '主义；行为';
      } else if (lowerWord.endsWith('dom')) {
        inferred = '领域；状态';
      } else if (lowerWord.endsWith('ship')) {
        inferred = '关系；身份';
      } else if (lowerWord.endsWith('hood')) {
        inferred = '时期；身份';
      } else if (lowerWord.endsWith('th')) {
        inferred = '行为；状态';
      } else if (lowerWord.endsWith('ple') || lowerWord.endsWith('ble') || lowerWord.endsWith('tle')) {
        inferred = '倍的；...的';
      } else if (lowerWord.endsWith('ate')) {
        inferred = '使...；...的';
      }
      
      if (inferred) {
        w.meaning = pos + inferred;
      } else {
        // 无法推断，使用单词本身
        w.meaning = pos + w.word;
      }
      fixed++;
    }
  });
  
  console.log('修复了', fixed, '个单词的meaning');
  
  const output = 'export interface IELTSWord {\n' +
    '  id: string;\n' +
    '  word: string;\n' +
    '  meaning: string;\n' +
    '  level: string;\n' +
    '  root: string;\n' +
    '  rootMeaning: string;\n' +
    '  rootMeaningEn: string;\n' +
    '  rootOrigin: string;\n' +
    '  rootOriginNote: string;\n' +
    '  relatedWords: { word: string; meaning: string; level: string }[];\n' +
    '  phonetic: string;\n' +
    '  frequency: string;\n' +
    '  example: string;\n' +
    '}\n\n' +
    'export const mockWords: IELTSWord[] = ' + JSON.stringify(words, null, 2) + ';';
  
  fs.writeFileSync('/home/fred/workspace/memoryworld-project/src/data/mockWords.ts', output);
  console.log('保存成功!');
}
