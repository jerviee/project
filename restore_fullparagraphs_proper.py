import re
import subprocess

# 读取原始文件内容（从 git 获取）
original_content = subprocess.check_output(['git', 'show', 'HEAD:src/data/writing.ts']).decode('utf-8')

# 读取当前文件内容
with open('src/data/writing.ts', 'r', encoding='utf-8') as f:
    current_content = f.read()

# 使用正则表达式提取原始文件中的所有模板
# 模式：匹配完整的模板对象
template_pattern = r'\{\s*id:\s*(\d+)[^}]+\}'

# 从原始文件提取所有模板
original_templates = re.findall(template_pattern, original_content, re.DOTALL)

# 创建一个字典来存储每个模板的 fullParagraphs
full_paragraphs_dict = {}

# 从原始文件中提取每个模板的 fullParagraphs
for template in re.finditer(r'(\{\s*id:\s*\d+[^}]+\})', original_content, re.DOTALL):
    template_str = template.group(1)
    # 提取 id
    id_match = re.search(r'id:\s*(\d+)', template_str)
    if id_match:
        template_id = id_match.group(1)
        # 提取 fullParagraphs
        fp_match = re.search(r'fullParagraphs:\s*\{([^}]+)\}', template_str, re.DOTALL)
        if fp_match:
            full_paragraphs_dict[template_id] = fp_match.group(1)

print(f"找到 {len(full_paragraphs_dict)} 个带有 fullParagraphs 的模板")

# 现在将 fullParagraphs 添加到当前文件中
# 对于每个模板，在 vocabulary 之前添加 fullParagraphs

# 定义一个替换函数
def add_full_paragraphs(match):
    template_id = match.group(1)
    structureCN_end = match.group(2)
    vocabulary = match.group(3)
    
    # 获取对应的 fullParagraphs
    if template_id in full_paragraphs_dict:
        fp_content = full_paragraphs_dict[template_id]
        return f'{structureCN_end},\n    fullParagraphs: {{{fp_content}}},\n    {vocabulary}'
    else:
        # 如果没有找到，添加空的 fullParagraphs
        return f'{structureCN_end},\n    fullParagraphs: {{\n      introduction: "",\n      body1: "",\n      body2: "",\n      conclusion: ""\n    }},\n    {vocabulary}'

# 使用正则表达式进行替换
# 模式：匹配模板结构，找到 structureCN 结束和 vocabulary 开始的位置
pattern = r'id:\s*(\d+)[^}]*(structureCN:\s*\{[^}]+\}\s*),\s*(vocabulary:\s*\[\])'
current_content = re.sub(pattern, add_full_paragraphs, current_content, flags=re.DOTALL)

# 写入文件
with open('src/data/writing.ts', 'w', encoding='utf-8') as f:
    f.write(current_content)

print("fullParagraphs 字段已成功恢复！")
