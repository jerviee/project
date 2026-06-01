import re

# 读取文件
with open('src/data/writing.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# 修复模式：在 structureCN 对象结束后，模板对象结束之前添加 vocabulary: []
# 结构应该是: structureCN: { ... },\n    vocabulary: [],\n  },

# 首先，处理没有 vocabulary 的模板
# 匹配 pattern: structureCN: { ... },\n  },
pattern1 = r'(structureCN:\s*\{[^}]+\}\s*),\n  (\},)'
content = re.sub(pattern1, r'\1, vocabulary: [],\n  \2', content)

# 处理最后一个模板
pattern2 = r'(structureCN:\s*\{[^}]+\}\s*),\n(\s*\];)'
content = re.sub(pattern2, r'\1, vocabulary: [],\n\2', content)

# 写入文件
with open('src/data/writing.ts', 'w', encoding='utf-8') as f:
    f.write(content)

print("vocabulary 字段修复完成！")
