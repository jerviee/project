import re

# 读取文件
with open('src/data/writing.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# 修复所有被错误分割的字符串
# 模式: topic: "...children',  topicCN: ""s..." 应该是 topic: "...children's..."
content = re.sub(
    r'topic:\s*"([^"]+)children\',\s*\n\s*topicCN:\s*""s\s*([^"]+)"',
    r'topic: "\1children\'s \2",\n      topicCN: "请添加中文翻译",',
    content
)

# 写入文件
with open('src/data/writing.ts', 'w', encoding='utf-8') as f:
    f.write(content)

print("所有引号修复完成！")
