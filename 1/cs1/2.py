import requests
import csv

# 发送HTTP GET请求，获取接口返回的数据
response = requests.get('https://v2.jinrishici.com/sentence')

# 从返回的JSON数据中提取诗句、作者和来源分类
data = response.json()
sentence = data['data']['content']
author = data['data']['origin']['author']
category = data['data']['matchTags'][0]

# 将数据保存到CSV文件中
with open('poem.csv', 'a', newline='', encoding='utf-8') as csvfile:
    writer = csv.writer(csvfile)
    writer.writerow([sentence, author, category])