import re

# 读取文件内容
with open('src/data/writing.ts', 'r', encoding='utf-8') as f:
    lines = f.readlines()

# 在 title 后面添加 titleCN
for i in range(len(lines)):
    if 'title: "' in lines[i] and 'essayTemplates' in ''.join(lines[:i]):
        # 检查是否已经有 titleCN
        if i+1 < len(lines) and 'titleCN' not in lines[i+1]:
            indent = len(lines[i]) - len(lines[i].lstrip())
            title_match = re.search(r'title:\s*"([^"]+)"', lines[i])
            title_cn = "请添加中文标题"
            if title_match:
                title = title_match.group(1)
                # 简单的标题翻译
                title_cn_map = {
                    "同意/不同意类 - 科技与人际关系": "Agree/Disagree - Tech & Relationships",
                    "同意/不同意类 - 电视暴力影响": "Agree/Disagree - TV Violence",
                    "同意/不同意类 - 广告的影响": "Agree/Disagree - Advertising",
                    "同意/不同意类 - 名人文化影响": "Agree/Disagree - Celebrity Culture",
                    "同意/不同意类 - 动物权利": "Agree/Disagree - Animal Rights",
                }
                title_cn = title_cn_map.get(title, title)
            lines.insert(i+1, ' ' * indent + f'titleCN: "{title_cn}",\n')
    
    # 在 topic 后面添加 topicCN
    if 'topic: "' in lines[i] and 'essayTemplates' in ''.join(lines[:i]):
        if i+1 < len(lines) and 'topicCN' not in lines[i+1]:
            indent = len(lines[i]) - len(lines[i].lstrip())
            topic_match = re.search(r'topic:\s*"([^"]+)"', lines[i])
            topic_cn = "请添加中文话题"
            if topic_match:
                topic = topic_match.group(1)
                topic_cn_map = {
                    "Technology has made our lives more isolated. To what extent do you agree or disagree?": "科技使我们的生活更加孤立。你在多大程度上同意或不同意？",
                    "Watching violence on television encourages aggressive behavior in children. To what extent do you agree or disagree?": "观看电视暴力会助长儿童的攻击性行为。你在多大程度上同意或不同意？",
                    "Advertising has a negative impact on society. To what extent do you agree or disagree?": "广告对社会有负面影响。你在多大程度上同意或不同意？",
                    "Celebrity culture has a negative effect on young people. To what extent do you agree or disagree?": "名人文化对年轻人有负面影响。你在多大程度上同意或不同意？",
                    "Animals should have the same rights as humans. To what extent do you agree or disagree?": "动物应该拥有与人类相同的权利。你在多大程度上同意或不同意？",
                }
                topic_cn = topic_cn_map.get(topic, "请添加中文话题")
            lines.insert(i+1, ' ' * indent + f'topicCN: "{topic_cn}",\n')
    
    # 在 structure 的 closing } 后面添加 structureCN
    if 'structure: {' in lines[i] and 'essayTemplates' in ''.join(lines[:i]):
        # 找到结构块的结束位置
        depth = 1
        j = i + 1
        while j < len(lines) and depth > 0:
            depth += lines[j].count('{') - lines[j].count('}')
            j += 1
        # 在结构块结束后添加 structureCN
        indent = len(lines[j-1]) - len(lines[j-1].lstrip())
        structure_cn = '''    structureCN: {
      introduction: "有人认为[话题]。我在很大程度上同意/不同意这一说法。",
      body1: "我持此观点的主要原因之一是[原因1]。例如，[例子1]。这表明[结论1]。",
      body2: "另一个原因是[原因2]。研究表明[证据]。因此，[结果]。",
      conclusion: "总之，我坚信[重申观点]。这是因为[总结1]和[总结2]。"
    },'''
        lines.insert(j, ' ' * (indent - 4) + structure_cn + '\n')

# 写入文件
with open('src/data/writing.ts', 'w', encoding='utf-8') as f:
    f.writelines(lines)

print("中文翻译字段已成功添加！")
