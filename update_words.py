import re

with open('src/data/mockWords.ts', 'r') as f:
    content = f.read()

# 提取JSON部分
match = re.search(r'export const mockWords: IELTSWord\[\] = (\[[\s\S]*?\]);', content)
import json
words = json.loads(match.group(1))

# 更新cab单词
for w in words:
    if w['word'] == 'cab':
        w['prefix'] = ''
        w['prefixMeaning'] = ''
        w['prefixMeaningEn'] = ''
        w['root'] = 'cab'
        w['rootMeaning'] = '马车；驾驶'
        w['rootMeaningEn'] = 'carriage; drive'
        w['rootOrigin'] = 'Latin'
        w['rootOriginNote'] = '源自拉丁语 carrus（四轮马车）'
        w['suffix'] = ''
        w['suffixMeaning'] = ''
        w['suffixMeaningEn'] = ''

with open('src/data/mockWords.ts', 'w') as f:
    f.write('export interface IELTSWord {\n  id: string;\n  word: string;\n  meaning: string;\n  level: string;\n  prefix?: string;\n  prefixMeaning?: string;\n  prefixMeaningEn?: string;\n  root: string;\n  rootMeaning: string;\n  rootMeaningEn: string;\n  rootOrigin: string;\n  rootOriginNote: string;\n  suffix?: string;\n  suffixMeaning?: string;\n  suffixMeaningEn?: string;\n  relatedWords: { word: string; meaning: string; level: string }[];\n  phonetic: string;\n  frequency: string;\n  example: string;\n}\n\nexport const mockWords: IELTSWord[] = ' + json.dumps(words, ensure_ascii=False, indent=2) + ';')

print('Updated cab')
