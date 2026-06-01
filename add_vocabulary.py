import re

# 读取文件
with open('src/data/writing.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# 找到所有缺少 vocabulary 的模板对象
# 模式：在 structureCN 对象的结尾之后，添加 vocabulary: []
# 但是需要确保还没有添加过

# 首先，修复已经添加但缺少逗号的情况
content = re.sub(
    r'(\n      }),\n(\s*\}\),)',
    r'\1,\n\2',
    content
)

# 修复最后一个模板
content = re.sub(
    r'(\n      }),\n(\];)',
    r'\1,\n    vocabulary: [],\n\2',
    content
)

# 写入文件
with open('src/data/writing.ts', 'w', encoding='utf-8') as f:
    f.write(content)

print("vocabulary 字段添加完成！")
