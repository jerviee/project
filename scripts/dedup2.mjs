import fs from 'fs';

console.log('正在读取mockWords.ts...');
const content = fs.readFileSync('src/data/mockWords.ts', 'utf8');

// 使用更可靠的方法：按行处理，跟踪括号层级
const lines = content.split('\n');
const words = [];
let currentWord = [];
let braceLevel = 0;
let inRelatedWords = false;
let arrayLevel = 0;

for (const line of lines) {
    if (line.includes('{') && !line.trim().startsWith('//')) {
        braceLevel++;
    }
    if (line.includes('[') && !line.trim().startsWith('//')) {
        if (line.includes('relatedWords')) {
            inRelatedWords = true;
        }
        arrayLevel++;
    }
    if (line.includes(']') && !line.trim().startsWith('//')) {
        arrayLevel--;
        if (inRelatedWords && arrayLevel === 1) { // relatedWords数组结束
            inRelatedWords = false;
        }
    }
    if (line.includes('}') && !line.trim().startsWith('//')) {
        braceLevel--;
    }
    
    if (braceLevel > 0) {
        currentWord.push(line);
    }
    
    // 当braceLevel回到1且不在relatedWords内部时，一个单词对象结束
    if (braceLevel === 1 && !inRelatedWords && currentWord.length > 0 && line.includes('  }')) {
        words.push(currentWord.join('\n'));
        currentWord = [];
    }
}

console.log(`找到 ${words.length} 个单词对象`);

// 使用Map去重
const uniqueWords = new Map();
words.forEach(wordStr => {
    const idMatch = wordStr.match(/id:\s*["']([^"']+)["']/);
    if (idMatch) {
        const id = idMatch[1];
        if (!uniqueWords.has(id)) {
            uniqueWords.set(id, wordStr);
        }
    }
});

console.log(`去重后保留 ${uniqueWords.size} 个单词`);
console.log(`删除了 ${words.length - uniqueWords.size} 个重复单词`);

// 构建新的文件内容
const newContent = `export interface IELTSWord {
  id: string;
  word: string;
  meaning: string;
  level: string;
  root: string;
  rootMeaning: string;
  rootMeaningEn: string;
  rootOrigin: string;
  rootOriginNote: string;
  relatedWords: { word: string; meaning: string; level: string }[];
  phonetic: string;
  frequency: string;
}

export const mockWords: IELTSWord[] = [
${Array.from(uniqueWords.values()).join(',\n')}
];`;

// 写入文件
fs.writeFileSync('src/data/mockWords.ts', newContent, 'utf8');
console.log('✅ 去重完成！新文件已保存');

// 简单验证
const newContentCheck = fs.readFileSync('src/data/mockWords.ts', 'utf8');
const wordCount = (newContentCheck.match(/id:\s*"/g) || []).length;
console.log(`验证: 文件中共有 ${wordCount} 个单词`);