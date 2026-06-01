import re

# 读取文件
with open('src/data/writing.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# 修复被错误分割的字符串
content = content.replace(
    '''topic: "Parents should be held responsible for their children',
    topicCN: ""s behavior. To what extent do you agree or disagree?",''',
    '''topic: "Parents should be held responsible for their children's behavior. To what extent do you agree or disagree?",
    topicCN: "请添加中文翻译",'''
)

# 写入文件
with open('src/data/writing.ts', 'w', encoding='utf-8') as f:
    f.write(content)

print("引号修复完成！")
