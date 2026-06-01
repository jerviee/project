import re

# 读取文件
with open('src/data/writing.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# 定义中文翻译映射
translations = {
    # 模板1: technology and interpersonal relationships
    "agree/disagree type - technology and interpersonal relationships": "同意/不同意类 - 科技与人际关系",
    "Technology has made our lives more isolated. To what extent do you agree or disagree?": "科技使我们的生活更加孤立。你在多大程度上同意或不同意？",
    "It is argued that [topic]. I agree/disagree with this statement to a large extent.": "有人认为[话题]。我在很大程度上同意/不同意这一说法。",
    "One of the main reasons why I hold this view is [reason1]. For example, [example1]. This demonstrates that [conclusion1].": "我持此观点的主要原因之一是[原因1]。例如，[例子1]。这表明[结论1]。",
    "Another reason is [reason2]. Research shows that [evidence]. Therefore, [result].": "另一个原因是[原因2]。研究表明[证据]。因此，[结果]。",
    "In conclusion, I strongly believe that [restate opinion]. This is because [summary1] and [summary2].": "总之，我坚信[重申观点]。这是因为[总结1]和[总结2]。",
    "It is argued that Technology has made our lives more isolated.. I believe this statement holds true to a significant extent for several reasons.": "有人认为科技使我们的生活更加孤立。我认为这个说法在很大程度上是正确的，原因有几点。",
    "One of the main reasons supporting this view is that interpersonal relationships has become increasingly prevalentvalent in modernn societyiety. For example, recent studies have shown that many people now rely heavily on technology for communication, which has fundamentally changed how we interact with one another. This demonstrates that the impact of technology is undeniable and far-reaching.": "支持这一观点的主要原因之一是人际关系在现代社会中变得越来越普遍。例如，最近的研究表明，许多人现在严重依赖技术进行沟通，这从根本上改变了我们彼此互动的方式。这表明技术的影响是不可否认的，而且影响深远。",
    "Another reason is that the consequences of technology and interpersonal relationships are becoming more apparent. Research indicates that excessivesivesive use of certain technologies can lead to social isolation and reduced face-to-face interaction. Therefore, it is clear that we need to consider the implications carefully before fully embracing these changes.": "另一个原因是技术和人际关系的后果正变得越来越明显。研究表明，过度使用某些技术可能导致社会孤立和面对面互动减少。因此，很明显，在完全接受这些变化之前，我们需要仔细考虑其影响。",
    "In conclusion, I strongly believe that technology has made our lives more isolated.. This is because the evidence clearly shows both the benefits and potential drawbacks, and we must approach this issue with caution and awareness.": "总之，我坚信科技使我们的生活更加孤立。这是因为证据清楚地显示了好处和潜在的缺点，我们必须谨慎和有意识地处理这个问题。",
    
    # 模板2: television violence
    "agree/disagree type - television violence": "同意/不同意类 - 电视暴力",
    "Watching violence on television encourages aggressive behavior in children. To what extent do you agree or disagree?": "观看电视暴力会助长儿童的攻击性行为。你在多大程度上同意或不同意？",
    
    # 模板3: advertising impact
    "agree/disagree type - advertising impact": "同意/不同意类 - 广告影响",
    "Advertising has a negative effect on people's lives. To what extent do you agree or disagree?": "广告对人们的生活有负面影响。你在多大程度上同意或不同意？",
    
    # 模板4: celebrity culture
    "agree/disagree type - celebrity culture": "同意/不同意类 - 名人文化",
    "Celebrity culture has a negative effect on young people. To what extent do you agree or disagree?": "名人文化对年轻人有负面影响。你在多大程度上同意或不同意？",
    
    # 模板5: animal rights
    "agree/disagree type - animal rights": "同意/不同意类 - 动物权利",
    "Animals should be used in scientific research. To what extent do you agree or disagree?": "动物应该用于科学研究。你在多大程度上同意或不同意？",
    
    # 模板6: online privacy
    "agree/disagree type - online privacy": "同意/不同意类 - 在线隐私",
    "Privacy is not important in the digital age. To what extent do you agree or disagree?": "在数字时代隐私不重要。你在多大程度上同意或不同意？",
    
    # 模板7: family education
    "agree/disagree type - family education": "同意/不同意类 - 家庭教育",
    "Parents should be stricter with their children. To what extent do you agree or disagree?": "父母应该对孩子更严格。你在多大程度上同意或不同意？",
    
    # 模板8: artistic value
    "agree/disagree type - artistic value": "同意/不同意类 - 艺术价值",
    "Governments should spend more money on art. To what extent do you agree or disagree?": "政府应该在艺术上投入更多资金。你在多大程度上同意或不同意？",
    
    # 模板9: printed books
    "agree/disagree type - printed books": "同意/不同意类 - 纸质书籍",
    "Printed books will soon be replaced by digital books. To what extent do you agree or disagree?": "纸质书籍很快将被数字书籍取代。你在多大程度上同意或不同意？",
    
    # 模板10: traditional festivals
    "agree/disagree type - traditional festivals": "同意/不同意类 - 传统节日",
    "Traditional festivals are losing their significance. To what extent do you agree or disagree?": "传统节日正在失去其意义。你在多大程度上同意或不同意？",
    
    # 通用翻译
    "compelling": "令人信服的",
    "convincing": "有说服力的",
    "persuasive": "劝说性的",
    "undeniable": "不可否认的",
    "significant": "重要的",
    "considerable": "相当大的",
    "substantial": "实质性的",
}

# 为每个模板添加中文翻译
# 先找到每个模板的位置并添加中文翻译字段
lines = content.split('\n')
new_lines = []
i = 0
while i < len(lines):
    line = lines[i]
    new_lines.append(line)
    
    # 找到模板开始
    if 'export const essayTemplates: EssayTemplate[] = [' in line:
        i += 1
        continue
    
    # 找到模板中的 title 字段
    if 'title:' in line and 'essayTemplates' in '\n'.join(new_lines[-20:]):
        # 提取标题
        match = re.search(r'title:\s*["\'](.+?)["\']', line)
        if match:
            title_en = match.group(1)
            title_cn = translations.get(title_en, "")
            
            # 添加中文标题
            indent = len(line) - len(line.lstrip())
            new_lines.append(' ' * indent + f'titleCN: "{title_cn}",')
    
    # 找到模板中的 topic 字段
    if 'topic:' in line and 'essayTemplates' in '\n'.join(new_lines[-20:]):
        # 提取话题
        match = re.search(r'topic:\s*["\'](.+?)["\']', line)
        if match:
            topic_en = match.group(1)
            topic_cn = translations.get(topic_en, "")
            
            # 添加中文话题
            indent = len(line) - len(line.lstrip())
            new_lines.append(' ' * indent + f'topicCN: "{topic_cn}",')
    
    # 找到 structure 结束的位置，添加 structureCN
    if 'structure:' in line and 'essayTemplates' in '\n'.join(new_lines[-20:]):
        # 找到结构块的结束
        indent = len(line) - len(line.lstrip())
        brace_count = 1
        j = i + 1
        while j < len(lines) and brace_count > 0:
            new_lines.append(lines[j])
            brace_count += lines[j].count('{') - lines[j].count('}')
            j += 1
        i = j - 1
        
        # 添加中文结构
        new_lines.append(' ' * indent + 'structureCN: {')
        new_lines.append(' ' * (indent + 2) + 'introduction: "有人认为[话题]。我在很大程度上同意/不同意这一说法。",')
        new_lines.append(' ' * (indent + 2) + 'body1: "我持此观点的主要原因之一是[原因1]。例如，[例子1]。这表明[结论1]。",')
        new_lines.append(' ' * (indent + 2) + 'body2: "另一个原因是[原因2]。研究表明[证据]。因此，[结果]。",')
        new_lines.append(' ' * (indent + 2) + 'conclusion: "总之，我坚信[重申观点]。这是因为[总结1]和[总结2]。"')
        new_lines.append(' ' * indent + '},')
        i += 1
        continue
    
    # 找到 fullParagraphs 结束的位置，添加 fullParagraphsCN
    if 'fullParagraphs:' in line and 'essayTemplates' in '\n'.join(new_lines[-20:]):
        # 找到段落块的结束
        indent = len(line) - len(line.lstrip())
        brace_count = 1
        j = i + 1
        while j < len(lines) and brace_count > 0:
            new_lines.append(lines[j])
            brace_count += lines[j].count('{') - lines[j].count('}')
            j += 1
        i = j - 1
        
        # 添加中文段落
        new_lines.append(' ' * indent + 'fullParagraphsCN: {')
        new_lines.append(' ' * (indent + 2) + 'introduction: "有人认为[话题]。我认为这个说法在很大程度上是正确的，原因有几点。",')
        new_lines.append(' ' * (indent + 2) + 'body1: "支持这一观点的主要原因之一是[原因1]。例如，最近的研究表明[例子]。这表明[结论1]。",')
        new_lines.append(' ' * (indent + 2) + 'body2: "另一个原因是[原因2]。研究表明[证据]。因此，[结果]。",')
        new_lines.append(' ' * (indent + 2) + 'conclusion: "总之，我坚信[观点]。这是因为[总结]。"')
        new_lines.append(' ' * indent + '},')
        i += 1
        continue
    
    i += 1

# 写入文件
with open('src/data/writing.ts', 'w', encoding='utf-8') as f:
    f.write('\n'.join(new_lines))

print("中文翻译已添加完成！")
