import json

with open('/home/fred/workspace/memoryworld-project/src/data/mockWords.ts', 'r') as f:
    content = f.read()

start = content.find('export const mockWords: IELTSWord[] = [')
end = content.find('];', start)
json_str = content[start+41:end].strip()
words = json.loads(json_str)

# 查找arise及其后面的单词
for i, w in enumerate(words):
    if w['word'].lower() == 'arise':
        print(f'arise 在索引 {i}')
        if i + 1 < len(words):
            print(f'下一个单词是: {words[i+1][" word\]}')
