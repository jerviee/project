import re

# 读取原始文件内容（从 git 获取）
import subprocess
original_content = subprocess.check_output(['git', 'show', 'HEAD:src/data/writing.ts']).decode('utf-8')

# 读取当前文件内容
with open('src/data/writing.ts', 'r', encoding='utf-8') as f:
    current_content = f.read()

# 使用正则表达式提取原始文件中的 fullParagraphs
# 模式：匹配完整的 fullParagraphs 对象
full_paragraphs_pattern = r'(fullParagraphs:\s*\{[^}]+\}\s*),\s*vocabulary:'

# 找到所有 fullParagraphs
matches = re.findall(full_paragraphs_pattern, original_content, re.DOTALL)

print(f"找到 {len(matches)} 个 fullParagraphs")

# 将 fullParagraphs 添加到当前文件中
# 模式：在 vocabulary: 之前添加 fullParagraphs
current_content = re.sub(
    r',\s*(vocabulary:\s*\[\])',
    r',\n    fullParagraphs: {\n      introduction: "",\n      body1: "",\n      body2: "",\n      conclusion: ""\n    },\n    \1',
    current_content
)

# 写入文件
with open('src/data/writing.ts', 'w', encoding='utf-8') as f:
    f.write(current_content)

print("fullParagraphs 字段已添加！")
