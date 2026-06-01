import re

# 翻译函数
def translate_title(title):
    translations = {
        "agree/disagree type - technology and interpersonal relationships": "同意/不同意类 - 科技与人际关系",
        "agree/disagree type - television violence": "同意/不同意类 - 电视暴力",
        "agree/disagree type - advertising impact": "同意/不同意类 - 广告影响",
        "agree/disagree type - celebrity culture": "同意/不同意类 - 名人文化",
        "agree/disagree type - animal rights": "同意/不同意类 - 动物权利",
        "agree/disagree type - online privacy": "同意/不同意类 - 在线隐私",
        "agree/disagree type - family education": "同意/不同意类 - 家庭教育",
        "agree/disagree type - artistic value": "同意/不同意类 - 艺术价值",
        "agree/disagree type - printed books": "同意/不同意类 - 纸质书籍",
        "agree/disagree type - traditional festivals": "同意/不同意类 - 传统节日",
        "agree/disagree type - technology dependency": "同意/不同意类 - 科技依赖",
        "agree/disagree type - remote learning": "同意/不同意类 - 远程学习",
        "agree/disagree type - car use": "同意/不同意类 - 汽车使用",
        "agree/disagree type - artificial intelligence threat": "同意/不同意类 - 人工智能威胁",
        "agree/disagree type - online shopping": "同意/不同意类 - 网上购物",
        "agree/disagree type - foreign language learning": "同意/不同意类 - 外语学习",
        "discussion type - traditional and modern education": "讨论类 - 传统与现代教育",
        "discussion type - urban and rural life": "讨论类 - 城市与乡村生活",
        "discussion type - face-to-face and online communication": "讨论类 - 面对面与在线沟通",
        "discussion type - self-study and classroom learning": "讨论类 - 自学与课堂学习",
        "discussion type - saving and consumption": "讨论类 - 储蓄与消费",
        "discussion type - public and private healthcare": "讨论类 - 公共与私人医疗",
        "discussion type - team and individual work": "讨论类 - 团队与个人工作",
        "discussion type - reading and watching television": "讨论类 - 阅读与看电视",
        "discussion type - travel approaches": "讨论类 - 旅行方式",
    }
    return translations.get(title, "")

def translate_topic(topic):
    translations = {
        "Technology has made our lives more isolated. To what extent do you agree or disagree?": "科技使我们的生活更加孤立。你在多大程度上同意或不同意？",
        "Watching violence on television encourages aggressive behavior in children. To what extent do you agree or disagree?": "观看电视暴力会助长儿童的攻击性行为。你在多大程度上同意或不同意？",
        "Advertising has a negative effect on people's lives. To what extent do you agree or disagree?": "广告对人们的生活有负面影响。你在多大程度上同意或不同意？",
        "Celebrity culture has a negative effect on young people. To what extent do you agree or disagree?": "名人文化对年轻人有负面影响。你在多大程度上同意或不同意？",
        "Animals should be used in scientific research. To what extent do you agree or disagree?": "动物应该用于科学研究。你在多大程度上同意或不同意？",
        "Privacy is not important in the digital age. To what extent do you agree or disagree?": "在数字时代隐私不重要。你在多大程度上同意或不同意？",
        "Parents should be stricter with their children. To what extent do you agree or disagree?": "父母应该对孩子更严格。你在多大程度上同意或不同意？",
        "Governments should spend more money on art. To what extent do you agree or disagree?": "政府应该在艺术上投入更多资金。你在多大程度上同意或不同意？",
        "Printed books will soon be replaced by digital books. To what extent do you agree or disagree?": "纸质书籍很快将被数字书籍取代。你在多大程度上同意或不同意？",
        "Traditional festivals are losing their significance. To what extent do you agree or disagree?": "传统节日正在失去其意义。你在多大程度上同意或不同意？",
    }
    return translations.get(topic, "")

def add_structure_cn(template):
    structure_cn = '''
    structureCN: {
      introduction: "有人认为[话题]。我在很大程度上同意/不同意这一说法。",
      body1: "我持此观点的主要原因之一是[原因1]。例如，[例子1]。这表明[结论1]。",
      body2: "另一个原因是[原因2]。研究表明[证据]。因此，[结果]。",
      conclusion: "总之，我坚信[重申观点]。这是因为[总结1]和[总结2]。"
    },'''
    return re.sub(r'(structure:\s*\{[^}]+\})', r'\1,' + structure_cn, template, flags=re.DOTALL)

def add_paragraphs_cn(template):
    paragraphs_cn = '''
    fullParagraphsCN: {
      introduction: "有人认为[话题]。我认为这个说法在很大程度上是正确的，原因有几点。",
      body1: "支持这一观点的主要原因之一是[原因1]。例如，最近的研究表明[例子]。这表明[结论1]。",
      body2: "另一个原因是[原因2]。研究表明[证据]。因此，[结果]。",
      conclusion: "总之，我坚信[观点]。这是因为[总结]。"
    },'''
    return re.sub(r'(fullParagraphs:\s*\{[^}]+\})', r'\1,' + paragraphs_cn, template, flags=re.DOTALL)

# 读取文件
with open('src/data/writing.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# 找到所有模板并添加中文翻译
pattern = r'(export const essayTemplates: EssayTemplate\[\] = \[)(.*?)(\];)'
match = re.search(pattern, content, re.DOTALL)
if match:
    templates_content = match.group(2)
    
    # 拆分每个模板
    templates = re.findall(r'\{\s*id:\s*\d+[^}]+\}', templates_content, re.DOTALL)
    
    new_templates = []
    for template in templates:
        # 添加中文标题
        if 'titleCN:' not in template:
            title_match = re.search(r'title:\s*["\'](.+?)["\']', template)
            if title_match:
                title_en = title_match.group(1)
                title_cn = translate_title(title_en)
                template = re.sub(r'(title:\s*["\'].+?["\'])', r'\1,\n    titleCN: "' + title_cn + '"', template)
        
        # 添加中文话题
        if 'topicCN:' not in template:
            topic_match = re.search(r'topic:\s*["\'](.+?)["\']', template)
            if topic_match:
                topic_en = topic_match.group(1)
                topic_cn = translate_topic(topic_en)
                template = re.sub(r'(topic:\s*["\'].+?["\'])', r'\1,\n    topicCN: "' + topic_cn + '"', template)
        
        # 添加中文结构
        if 'structureCN:' not in template:
            template = add_structure_cn(template)
        
        # 添加中文段落
        if 'fullParagraphsCN:' not in template:
            template = add_paragraphs_cn(template)
        
        new_templates.append(template)
    
    # 重新组合内容
    new_content = match.group(1) + '\n' + ',\n'.join(new_templates) + '\n' + match.group(3)
    content = re.sub(pattern, new_content, content, flags=re.DOTALL)
    
    # 写入文件
    with open('src/data/writing.ts', 'w', encoding='utf-8') as f:
        f.write(content)
    
    print(f"已处理 {len(new_templates)} 个模板！")
else:
    print("未找到 essayTemplates")
