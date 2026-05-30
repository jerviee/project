import fs from 'fs';

console.log('正在读取mockWords.ts...');
const content = fs.readFileSync('src/data/mockWords.ts', 'utf8');

// 提取所有单词对象
const wordRegex = /\{[\s\S]*?\}/g;
const wordMatches = content.match(wordRegex);

console.log(`找到 ${wordMatches.length} 个单词对象`);

// 使用Map去重，保留第一次出现的单词
const uniqueWords = new Map();
const duplicateIds = [];

wordMatches.forEach(wordStr => {
    const idMatch = wordStr.match(/id:\s*["']([^"']+)["']/);
    if (idMatch) {
        const id = idMatch[1];
        if (!uniqueWords.has(id)) {
            uniqueWords.set(id, wordStr);
        } else {
            duplicateIds.push(id);
        }
    }
});

console.log(`去重后保留 ${uniqueWords.size} 个单词`);
console.log(`删除了 ${duplicateIds.length} 个重复单词`);

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

export const mockWords: IELTSWord[] = [\n  ` + Array.from(uniqueWords.values()).join(',\n  ') + '\n];';

// 写入文件
fs.writeFileSync('src/data/mockWords.ts', newContent, 'utf8');
console.log('✅ 去重完成！新文件已保存');

// 验证语法
import { execSync } from 'child_process';
try {
    execSync('npx tsc --noEmit', { stdio: 'ignore' });
    console.log('✅ TypeScript语法检查通过');
} catch (error) {
    console.log('❌ TypeScript语法检查失败:', error.message);
}