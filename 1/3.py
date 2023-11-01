import requests
from lxml import etree

# 请求页码的 URL
url = 'https://so.gushiwen.cn/mingju/juv_78888abf4c88.aspx'

# 发送请求，获取网页内容
response = requests.get(url)

# 解析网页内容
html = etree.HTML(response.content)

# 获取诗词名句的标题和内容
title = html.xpath('/html/body/div[2]/div[1]/div[2]/div[1]/h1')[0].text
content = html.xpath('/html/body/div[2]/div[1]/div[2]/div[1]/div/*/text()')
for i in range(len(content)):
    print(content[i])
print('标题：', title)