import re

# 读取文件内容
with open('src/data/writing.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# 定义标题翻译映射
title_translations = {
    "agree/disagree type - technology and interpersonal relationships": "同意/不同意类 - 科技与人际关系",
    "agree/disagree type - television violence": "同意/不同意类 - 电视暴力",
    "agree/disagree type - advertising impact": "同意/不同意类 - 广告影响",
    "agree/disagree type - celebrity culture": "同意/不同意类 - 名人文化",
    "agree/disagree type - animal rights": "同意/不同意类 - 动物权利",
    "agree/disagree type - environmental protection": "同意/不同意类 - 环境保护",
    "agree/disagree type - family education": "同意/不同意类 - 家庭教育",
    "agree/disagree type - artistic value": "同意/不同意类 - 艺术价值",
    "agree/disagree type - urbanization": "同意/不同意类 - 城市化",
    "agree/disagree type - social media": "同意/不同意类 - 社交媒体",
    "agree/disagree type - online education": "同意/不同意类 - 在线教育",
    "agree/disagree type - work-life balance": "同意/不同意类 - 工作与生活平衡",
}

# 定义话题翻译映射
topic_translations = {
    "Technology has made our lives more isolated. To what extent do you agree or disagree?": "科技使我们的生活更加孤立。你在多大程度上同意或不同意？",
    "Watching violence on television encourages aggressive behavior in children. To what extent do you agree or disagree?": "观看电视暴力会助长儿童的攻击性行为。你在多大程度上同意或不同意？",
    "Advertising has a negative impact on society. To what extent do you agree or disagree?": "广告对社会有负面影响。你在多大程度上同意或不同意？",
    "Celebrity culture has a negative effect on young people. To what extent do you agree or disagree?": "名人文化对年轻人有负面影响。你在多大程度上同意或不同意？",
    "Animals should have the same rights as humans. To what extent do you agree or disagree?": "动物应该拥有与人类相同的权利。你在多大程度上同意或不同意？",
}

# 中文结构模板
chinese_structure = {
    "introduction": "有人认为[话题]。我在很大程度上同意/不同意这一说法。",
    "body1": "我持此观点的主要原因之一是[原因1]。例如，[例子1]。这表明[结论1]。",
    "body2": "另一个原因是[原因2]。研究表明[证据]。因此，[结果]。",
    "conclusion": "总之，我坚信[重申观点]。这是因为[总结1]和[总结2]。"
}

# 使用正则表达式匹配每个模板并添加中文翻译
def add_chinese_to_template(match):
    template_str = match.group(1)
    
    # 添加 titleCN
    title_match = re.search(r'title:\s*"([^"]+)"', template_str)
    if title_match:
        title = title_match.group(1)
        title_cn = title_translations.get(title, "请添加中文标题")
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
    
    # 添加 structureCN
    if 'structure: {' in template_str:
        structure_cn_str = '''    structureCN: {
      introduction: "''' + chinese_structure['introduction'] + '''",
      body1: "''' + chinese_structure['body1'] + '''",
      body2: "''' + chinese_structure['body2'] + '''",
      conclusion: "''' + chinese_structure['conclusion'] + '''"
    },'''
        template_str = re.sub(
            r'(structure:\s*\{[^}]+\}\s*),',
            r'\1,\n' + structure_cn_str,
            template_str,
            flags=re.DOTALL
        )
    
    return '{' + template_str + '}'

# 匹配所有模板对象
pattern = r'\{(\s*id:\s*\d+[^}]+\})'
content = re.sub(pattern, add_chinese_to_template, content, flags=re.DOTALL)

# 写入文件
with open('src/data/writing.ts', 'w', encoding='utf-8') as f:
    f.write(content)

print("中文翻译已成功添加到所有模板！")
