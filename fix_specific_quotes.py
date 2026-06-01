# 读取文件
with open('src/data/writing.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# 修复第一个问题
content = content.replace(
    '''topic: "Learning a second language is essential in today',
    topicCN: ""s world. To what extent do you agree or disagree?",''',
    '''topic: "Learning a second language is essential in today's world. To what extent do you agree or disagree?",
    topicCN: "请添加中文翻译",'''
)

# 修复第二个问题
content = content.replace(
    '''topic: "Video games have a negative impact on children',
    topicCN: ""s development. To what extent do you agree or disagree?",''',
    '''topic: "Video games have a negative impact on children's development. To what extent do you agree or disagree?",
    topicCN: "请添加中文翻译",'''
)

# 写入文件
with open('src/data/writing.ts', 'w', encoding='utf-8') as f:
    f.write(content)

print("引号修复完成！")
