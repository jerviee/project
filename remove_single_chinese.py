import re

# 读取文件
with open('src/data/writing.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# 删除所有中文字符
content = re.sub(r'[\u4e00-\u9fff]', '', content)

# 写入文件
with open('src/data/writing.ts', 'w', encoding='utf-8') as f:
    f.write(content)

print("所有中文字符已删除！")

# 验证
remaining_chinese = re.findall(r'[\u4e00-\u9fff]', content)
if remaining_chinese:
    print(f"仍有 {len(remaining_chinese)} 个中文字符")
else:
    print("验证通过：文件中已没有中文字符！")
