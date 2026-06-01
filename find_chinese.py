import re

# 读取文件
with open('src/data/writing.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# 找到所有包含中文的行
lines = content.split('\n')
chinese_lines = []
for i, line in enumerate(lines):
    if re.search(r'[\u4e00-\u9fff]', line):
        # 提取中文词汇
        chinese_chars = re.findall(r'[\u4e00-\u9fff]+', line)
        chinese_lines.append({
            'line_num': i+1,
            'line': line,
            'chinese_words': chinese_chars
        })

# 统计所有中文词汇
all_chinese = []
for item in chinese_lines:
    all_chinese.extend(item['chinese_words'])

# 去重并排序
unique_chinese = sorted(set(all_chinese))

print(f"找到 {len(unique_chinese)} 个独特的中文词汇:")
for word in unique_chinese:
    print(f"  '{word}'")

print(f"\n总共 {len(all_chinese)} 个中文字符出现")
