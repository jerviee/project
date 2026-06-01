import re

# 读取原始文件内容
with open('src/data/writing.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# 更新接口定义，添加中文翻译字段
# 首先找到 EssayTemplate 接口定义并更新
content = re.sub(
    r'(export interface EssayTemplate \{[^}]+\n  structure:\s*\{[^}]+\}\s*;)',
    r'\1\n  structureCN: {\n    introduction: string;\n    body1: string;\n    body2: string;\n    conclusion: string;\n  };',
    content,
    flags=re.DOTALL
)

# 更新 fullParagraphs 为可选，并添加 fullParagraphsCN
content = re.sub(
    r'(fullParagraphs:\s*\{[^}]+\}\s*;)',
    r'\1\n  fullParagraphsCN?: {\n    introduction: string;\n    body1: string;\n    body2: string;\n    conclusion: string;\n  };',
    content,
    flags=re.DOTALL
)

# 更新 title 和 topic 字段添加可选的中文翻译
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

# 写入文件
with open('src/data/writing.ts', 'w', encoding='utf-8') as f:
    f.write(content)

print("接口定义已更新！")
