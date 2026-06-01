import re

# 读取文件
with open('src/data/writing.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# 修复混合词汇
fixes = [
    # 修复连在一起的单词
    ("definite性", "definite nature"),
    ("两种", "two"),
    ("让步relationship", "concession relationship"),
    ("technology依赖", "technology dependency"),
    ("remote学习", "remote learning"),
    ("汽车use", "car use"),
    ("artificial intelligence威胁", "artificial intelligence threat"),
    ("线上shopping", "online shopping"),
    ("外语学习", "foreign language learning"),
    ("传统and现代", "traditional and modern"),
    ("education", "education"),
    ("城市and乡村生活", "urban and rural life"),
    ("face面and线上", "face-to-face and online"),
    ("communicate", "communication"),
    ("自学and课堂学习", "self-study and classroom learning"),
    ("储蓄andconsume", "saving and consumption"),
    ("公共and私人医疗", "public and private healthcare"),
    ("团队and个人work", "team and individual work"),
    ("阅读and看电视", "reading and watching television"),
    ("travelapproach", "travel approaches"),
    
    # 更多常见中文词汇
    ("依赖", "dependency"),
    ("学习", "learning"),
    ("汽车", "car"),
    ("威胁", "threat"),
    ("线上", "online"),
    ("外语", "foreign language"),
    ("传统", "traditional"),
    ("现代", "modern"),
    ("教育", "education"),
    ("城市", "urban"),
    ("乡村", "rural"),
    ("生活", "life"),
    ("面", "face"),
    ("自学", "self-study"),
    ("课堂", "classroom"),
    ("储蓄", "saving"),
    ("公共", "public"),
    ("私人", "private"),
    ("医疗", "healthcare"),
    ("团队", "team"),
    ("个人", "individual"),
    ("阅读", "reading"),
    ("看", "watching"),
    ("电视", "television"),
    ("双边", "two-sided"),
    ("discusstype", "discussion type"),
    ("agreedisagree", "agree/disagree"),
    
    # 修复之前可能误处理的
    ("atruths", "a truths"),
    ("thas", "that has"),
    
    # 修复标题中的问题
    ("agree/disagreetype", "agree/disagree type"),
    ("双边discusstype", "discussion type"),
    
    # 修复body中的问题
    ("modern soc", "modern society"),
    ("exces", "excessive"),
    ("exces", "excessive"),
    ("pre", "prevalent"),
    ("moder", "modern"),
]

# 执行替换
for old, new in fixes:
    content = content.replace(old, new)

# 写入文件
with open('src/data/writing.ts', 'w', encoding='utf-8') as f:
    f.write(content)

print("混合词汇修复完成！")

# 检查剩余中文
remaining_chinese = re.findall(r'[\u4e00-\u9fff]', content)
if remaining_chinese:
    print(f"仍有 {len(remaining_chinese)} 个中文字符未替换")
else:
    print("所有中文词汇已成功替换！")
