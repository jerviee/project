import re

# 读取文件内容
with open('src/data/writing.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# 定义中文结构模板
chinese_structure = '''    structureCN: {
      introduction: "有人认为[话题]。我在很大程度上同意/不同意这一说法。",
      body1: "我持此观点的主要原因之一是[原因1]。例如，[例子1]。这表明[结论1]。",
      body2: "另一个原因是[原因2]。研究表明[证据]。因此，[结果]。",
      conclusion: "总之，我坚信[重申观点]。这是因为[总结1]和[总结2]。"
    },'''

# 定义标题翻译映射
title_translations = {
    "同意/不同意类 - 科技与人际关系": "Agree/Disagree - Technology and Interpersonal Relationships",
    "同意/不同意类 - 电视暴力影响": "Agree/Disagree - Television Violence Impact",
    "同意/不同意类 - 广告的影响": "Agree/Disagree - Advertising Impact",
    "同意/不同意类 - 名人文化影响": "Agree/Disagree - Celebrity Culture Impact",
    "同意/不同意类 - 动物权利": "Agree/Disagree - Animal Rights",
}

# 定义话题翻译映射
topic_translations = {
    "Technology has made our lives more isolated. To what extent do you agree or disagree?": "科技使我们的生活更加孤立。你在多大程度上同意或不同意？",
    "Watching violence on television encourages aggressive behavior in children. To what extent do you agree or disagree?": "观看电视暴力会助长儿童的攻击性行为。你在多大程度上同意或不同意？",
    "Advertising has a negative impact on society. To what extent do you agree or disagree?": "广告对社会有负面影响。你在多大程度上同意或不同意？",
    "Celebrity culture has a negative effect on young people. To what extent do you agree or disagree?": "名人文化对年轻人有负面影响。你在多大程度上同意或不同意？",
    "Animals should have the same rights as humans. To what extent do you agree or disagree?": "动物应该拥有与人类相同的权利。你在多大程度上同意或不同意？",
}

# 找到 essayTemplates 数组的开始和结束位置
templates_start = content.find('export const essayTemplates: EssayTemplate[] = [')
if templates_start == -1:
    print("未找到 essayTemplates")
    exit()

# 找到数组结束位置
array_content = content[templates_start:]
# 计算括号匹配来找到结束位置
depth = 1
end_pos = 0
for i, char in enumerate(array_content[1:], start=1):
    if char == '[':
        depth += 1
    elif char == ']':
        depth -= 1
        if depth == 0:
            end_pos = i
            break

templates_end = templates_start + end_pos
templates_content = content[templates_start:templates_end+1]

# 处理每个模板
def process_template(match):
    template_str = match.group(1)
    
    # 添加 titleCN
    title_match = re.search(r'title:\s*"([^"]+)"', template_str)
    if title_match:
        title = title_match.group(1)
        title_cn = title_translations.get(title, title)  # 默认使用原标题
        template_str = re.sub(
            r'(title:\s*"[^"]+")',
            r'\1,\n    titleCN: "' + title_cn + '"',
            template_str
        )
    
    # 添加 topicCN
    topic_match = re.search(r'topic:\s*"([^"]+)"', template_str)
    if topic_match:
        topic = topic_match.group(1)
        topic_cn = topic_translations.get(topic, "请添加中文话题")
        template_str = re.sub(
            r'(topic:\s*"[^"]+")',
            r'\1,\n    topicCN: "' + topic_cn + '"',
            template_str
        )
    
    # 添加 structureCN（在 structure 后面）
    template_str = re.sub(
        r'(structure:\s*\{[^}]+\})\,',
        r'\1,' + chinese_structure,
        template_str,
        flags=re.DOTALL
    )
    
    return '{' + template_str + '}'

# 匹配每个模板对象（在 essayTemplates 数组内）
pattern = r'\{(\s*id:\s*\d+[^}]+\})'
processed_templates = re.sub(pattern, process_template, templates_content, flags=re.DOTALL)

# 替换原内容
new_content = content[:templates_start] + processed_templates + content[templates_end+1:]

# 写入文件
with open('src/data/writing.ts', 'w', encoding='utf-8') as f:
    f.write(new_content)

print("中文翻译字段已成功添加到所有模板！")
