import re

# 读取文件内容
with open('src/data/writing.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# 更新接口定义
# 添加 titleCN 和 topicCN
content = re.sub(
    r'(title:\s*string;)',
    r'\1\n  titleCN?: string;',
    content
)

content = re.sub(
    r'(topic:\s*string;)',
    r'\1\n  topicCN?: string;',
    content
)

# 添加 structureCN
content = re.sub(
    r'(structure:\s*\{[^}]+\}\s*;)',
    r'\1\n  structureCN: {\n    introduction: string;\n    body1: string;\n    body2: string;\n    conclusion: string;\n  };',
    content,
    flags=re.DOTALL
)

# 添加 fullParagraphsCN（在 fullParagraphs 之后）
content = re.sub(
    r'(fullParagraphs:\s*\{[^}]+\}\s*;)',
    r'\1\n  fullParagraphsCN?: {\n    introduction: string;\n    body1: string;\n    body2: string;\n    conclusion: string;\n  };',
    content,
    flags=re.DOTALL
)

# 写入文件
with open('src/data/writing.ts', 'w', encoding='utf-8') as f:
    f.write(content)

print("接口定义已更新！")
