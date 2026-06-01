import re

# 读取文件内容
with open('src/data/writing.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# 修复结构问题：移除 structure 后面多余的 }
content = re.sub(
    r'(structure:\s*\{[^}]+\})\}\,',
    r'\1,',
    content,
    flags=re.DOTALL
)

# 添加 structureCN 字段
chinese_structure = '''
    structureCN: {
      introduction: "有人认为[话题]。我在很大程度上同意/不同意这一说法。",
      body1: "我持此观点的主要原因之一是[原因1]。例如，[例子1]。这表明[结论1]。",
      body2: "另一个原因是[原因2]。研究表明[证据]。因此，[结果]。",
      conclusion: "总之，我坚信[重申观点]。这是因为[总结1]和[总结2]。"
    },'''

# 在 structure 后面添加 structureCN
content = re.sub(
    r'(structure:\s*\{[^}]+\})\,',
    r'\1,' + chinese_structure,
    content,
    flags=re.DOTALL
)

# 写入文件
with open('src/data/writing.ts', 'w', encoding='utf-8') as f:
    f.write(content)

print("结构问题已修复，structureCN 已添加！")
