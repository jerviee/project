const fs = require('fs');

const data = fs.readFileSync('/home/fred/workspace/memoryworld-project/src/data/mockWords.ts', 'utf8');
const match = data.match(/export const mockWords: IELTSWord\[\] = \[([\s\S]*?)\];/);

if (match) {
  const words = JSON.parse('[' + match[1] + ']');
  
  const enTemplates = [
    'Public awareness of this concept has increased significantly.',
    'The importance of this concept cannot be overstated in modern life.',
    'The theory of this concept provides a framework for understanding this phenomenon.',
    'Practical skills related to this concept are highly valued in the workplace.',
    'Many factors contribute to the development of this concept in society.',
    'The study of this concept has made significant progress in recent years.',
    'Researchers are constantly exploring new aspects of this concept.',
    'The application of this concept has revolutionized various industries.'
  ];
  
  const chineseTemplates = [
    '公众对{meaning}的认识显著提高。',
    '在现代生活中，{meaning}的重要性怎么强调都不为过。',
    '{meaning}的理论为理解这一现象提供了框架。',
    '与{meaning}相关的实践技能在工作场所受到高度重视。',
    '许多因素促成了社会{meaning}的发展。',
    '近年来，{meaning}的研究取得了重大进展。',
    '研究人员不断探索{meaning}的新方面。',
    '{meaning}的应用革新了各个行业。'
  ];
  
  let fixed = 0;
  
  words.forEach((w, idx) => {
    let meaning = w.meaning || '';
    
    // 只取第一个分号前的部分
    if (meaning.includes('；')) {
      meaning = meaning.split('；')[0];
    }
    
    // 清理meaning：去掉词性标记（n./v./adj./adv.等）
    meaning = meaning.replace(/^(n\.|v\.|adj\.|adv\.|pron\.|prep\.|conj\.|int\.|art\.)/gi, '');
    meaning = meaning.replace(/\/(n\.|v\.|adj\.|adv\.)/gi, '');
    
    // 去掉括号内容（包括词根信息）
    meaning = meaning.replace(/\（[^）]*\）/g, '');
    meaning = meaning.replace(/\([^)]*\)/g, '');
    
    // 去掉引号
    meaning = meaning.replace(/['"]/g, '');
    
    // 去掉末尾的的地（但保留单个汉字的词）
    if (meaning.endsWith('的') && meaning.length > 2) {
      meaning = meaning.slice(0, -1);
    }
    
    meaning = meaning.trim();
    
    // 如果meaning为空或太短，使用单词本身
    if (!meaning || meaning.length < 1) {
      meaning = w.word;
    }
    
    const templateIdx = idx % enTemplates.length;
    const enExample = enTemplates[templateIdx];
    const zhExample = chineseTemplates[templateIdx].replace('{meaning}', meaning);
    
    w.example = enExample + '\n' + zhExample;
    fixed++;
  });
  
  console.log('更新了', fixed, '个例句');
  
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
