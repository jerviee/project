import re

# 读取文件
with open('src/data/writing.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# 修复所有缺少逗号的情况
# 在 structureCN 之前添加逗号
content = re.sub(
    r'(\n      }),\n      structureCN',
    r'\n      },\n      structureCN',
    content
)

# 修复多余的逗号
content = re.sub(r'topicCN: "请添加中文翻译",,', 'topicCN: "请添加中文翻译",', content)

# 修复 titleCN 为空字符串的情况
content = re.sub(r'titleCN: "",\n', 'titleCN: "请添加中文翻译",\n', content)

# 写入文件
with open('src/data/writing.ts', 'w', encoding='utf-8') as f:
    f.write(content)

print("文件修复完成！")
