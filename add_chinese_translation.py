import re

# 读取文件
with open('src/data/writing.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# 1. 修改接口定义，添加中文翻译字段
content = content.replace(
    'export interface EssayTemplate {\n  id: number;\n  title: string;\n  type: "agree/disagree" | \'discuss both views\' | \'advantages/disadvantages\' | \'problem/solution\';\n  topic: string;\n  speaker?: string;\n  speakerTitle?: string;\n  style?: string;\n  styleNote?: string;\n  structure: {\n    introduction: string;\n    body1: string;\n    body2: string;\n    conclusion: string;\n  };\n  fullParagraphs: {\n    introduction: string;\n    body1: string;\n    body2: string;\n    conclusion: string;\n  };\n  vocabulary: string[];\n}',
    'export interface EssayTemplate {\n  id: number;\n  title: string;\n  titleCN?: string;\n  type: "agree/disagree" | \'discuss both views\' | \'advantages/disadvantages\' | \'problem/solution\';\n  topic: string;\n  topicCN?: string;\n  speaker?: string;\n  speakerTitle?: string;\n  style?: string;\n  styleNote?: string;\n  structure: {\n    introduction: string;\n    body1: string;\n    body2: string;\n    conclusion: string;\n  };\n  structureCN: {\n    introduction: string;\n    body1: string;\n    body2: string;\n    conclusion: string;\n  };\n  fullParagraphs: {\n    introduction: string;\n    body1: string;\n    body2: string;\n    conclusion: string;\n  };\n  fullParagraphsCN: {\n    introduction: string;\n    body1: string;\n    body2: string;\n    conclusion: string;\n  };\n  vocabulary: string[];\n}'
)

# 写入文件
with open('src/data/writing.ts', 'w', encoding='utf-8') as f:
    f.write(content)

print("接口定义已更新！")
