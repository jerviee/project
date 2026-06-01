import re

# 读取文件
with open('src/data/writing.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# 定义所有剩余的中文词汇映射
chinese_to_english = {
    # 单字
    '个': '',
    '之': '',
    '以': '',
    '们': '',
    '作': '',
    '元': '',
    '存': '',
    '如': '',
    '并': '',
    '怕': '',
    '文': '',
    '旨': '',
    '曾': '',
    '次': '',
    '此': '',
    '法': '',
    '潜': '',
    '点': '',
    '独': '',
    '男': '',
    '种': '',
    '第': '',
    '自': '',
    '话': '',
    '贯': '',
    '越': '',
    '边': '',
    '重': '',
    '野': '',
    '韧': '',
    
    # 双字及以上
    '丰富第': 'rich',
    '主导': 'dominant',
    '争议': 'controversy',
    '事': 'matter',
    '些': '',
    '些人': 'some people',
    '令人兴奋': 'exciting',
    '以其': 'with his',
    '以实际': 'with practical',
    '体现': 'reflect',
    '值得重': 'deserve',
    '允许': 'allow',
    '公开谈论': 'publicly talk about',
    '关怀': 'care',
    '其优点': 'its advantages',
    '凸显': 'highlight',
    '利益': 'interests',
    '别': 'other',
    '前央行行长': 'former central bank governor',
    '力': 'strength',
    '卓识': 'insight',
    '危机': 'crisis',
    '原': 'original',
    '原理': 'principle',
    '反思': 'reflection',
    '发言充满': 'speech full of',
    '变得越': 'becomes increasingly',
    '另': 'another',
    '可': 'can',
    '商': 'business',
    '善于': 'good at',
    '国': 'country',
    '国作': 'country as',
    '国家': 'country',
    '国角色': 'country role',
    '国际': 'international',
    '大胆': 'bold',
    '学霸': 'academic achiever',
    '安全': 'safety',
    '宝贵': 'valuable',
    '小企': 'small enterprises',
    '局限': 'limitations',
    '展现': 'show',
    '展现强硬而': 'show tough yet',
    '展现非凡韧': 'show extraordinary resilience',
    '平台': 'platform',
    '年轻人勇敢': 'young people to be brave',
    '当今': 'today',
    '手资料': 'first-hand information',
    '执着': 'dedication',
    '敢于': 'dare to',
    '杰出': 'outstanding',
    '桥梁': 'bridge',
    '汲取': 'draw',
    '流失': 'loss',
    '消失': 'disappearance',
    '澎湃': 'passionate',
    '激励': 'motivate',
    '热点': 'hotspots',
    '生命践行': 'practice with life',
    '电商先驱': 'e-commerce pioneer',
    '第四次工': 'fourth industrial',
    '系列': 'series',
    '美混血': 'mixed race',
    '能量': 'energy',
    '脱贫': 'poverty alleviation',
    '自信': 'confidence',
    '调研': 'research',
    '负责任大国': 'responsible major country',
    '资本主义': 'capitalism',
    '防范': 'prevention',
    '青少年': 'teenagers',
    '高水平': 'high level',
}

# 执行替换
for chinese, english in chinese_to_english.items():
    content = content.replace(chinese, english)

# 写入文件
with open('src/data/writing.ts', 'w', encoding='utf-8') as f:
    f.write(content)

print("清理完成！")

# 检查剩余中文
remaining_chinese = re.findall(r'[\u4e00-\u9fff]', content)
if remaining_chinese:
    print(f"仍有 {len(remaining_chinese)} 个中文字符未替换")
    print(f"剩余中文字符: {''.join(set(remaining_chinese))}")
else:
    print("所有中文词汇已成功清理！")
