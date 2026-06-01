import re

# 读取文件
with open('src/data/writing.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# 修复模板之间缺少的逗号
# 找到 "}," 后面直接跟着 "{" 的地方，添加逗号
content = re.sub(r'    },\n  \{', '    },\n  },\n  {', content)

# 修复可能存在的其他格式问题
# 确保每个模板对象之间有正确的逗号分隔
content = re.sub(r'vocabulary:\s*\[.*?\]\s*\n  \{', r'vocabulary: [\1]\n  },\n  {', content, flags=re.DOTALL)

# 写入文件
with open('src/data/writing.ts', 'w', encoding='utf-8') as f:
    f.write(content)

print("逗号修复完成！")
