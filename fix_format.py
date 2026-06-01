import re

# 读取文件
with open('src/data/writing.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# 修复格式问题
# 1. 修复 structureCN 后面的双逗号
content = content.replace('    },,\n{', '    },\n  {')

# 2. 修复模板之间缺少的逗号
content = content.replace('fullParagraphsCN: {\n      introduction:', ',\n    fullParagraphsCN: {\n      introduction:')

# 3. 修复空的 topicCN
content = content.replace('topicCN: "",', 'topicCN: "请添加中文翻译",')

# 写入文件
with open('src/data/writing.ts', 'w', encoding='utf-8') as f:
    f.write(content)

print("格式修复完成！")
