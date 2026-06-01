import re

# 读取文件
with open('src/data/writing.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# 在每个模板对象之间添加逗号
# 模式: 在 "}," 后面直接跟着 "{ id:" 的地方添加逗号
content = re.sub(r'    },\n  \{(\s*id:\s*\d+)', r'    },\n  },\n  {\1', content)

# 写入文件
with open('src/data/writing.ts', 'w', encoding='utf-8') as f:
    f.write(content)

print("逗号修复完成！")
