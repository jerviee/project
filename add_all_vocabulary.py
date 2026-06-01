import re

# 读取文件
with open('src/data/writing.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# 修复所有模板，添加 vocabulary 字段
# 模式：在 structureCN 对象的闭合大括号后，}, 之前添加 vocabulary: [],

# 找到所有 structureCN 结尾，添加 vocabulary
# 结构：structureCN: { ... },\n  },\n  { 或 ]; 或其他
pattern = r'(structureCN:\s*\{[^}]+\}\s*),(\s+\}\s*,\s*\}\s*,\s*\{)'
content = re.sub(pattern, r'\1, vocabulary: [],\2', content)

# 修复最后一个模板
pattern_last = r'(structureCN:\s*\{[^}]+\}\s*),(\s+\}\s*,\s*\];)'
content = re.sub(pattern_last, r'\1, vocabulary: [],\2', content)

# 写入文件
with open('src/data/writing.ts', 'w', encoding='utf-8') as f:
    f.write(content)

print("vocabulary 字段批量添加完成！")
