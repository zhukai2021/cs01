# 导入库
import requests
from bs4 import BeautifulSoup
import pandas as pd
import re
from lxml import etree # 导入etree模块

# 定义请求头
headers= {
    "User-Agent": "Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 10.0; WOW64; Trident/7.0; .NET4.0C; .NET4.0E; Tablet PC 2.0; wbx 1.0.0; wbxapp 1.0.0; Zoom 3.6.0)"}
# 定义初始网址
start_url = 'https://baijiahao.baidu.com/s?id=1752922381470290486'

cookies = {}
# 定义空列表，用于存储数据
note_links = [] # 笔记链接

# 发送请求，获取响应
response = requests.get(start_url, headers=headers)
response.encoding = 'utf-8-sig'
# 解析响应，得到HTML文本
html = response.text
print(html)
# # 使用BeautifulSoup解析HTML文本
# pattern = r'href="/explore/(\w+)"'  # 匹配 href="/explore/" 后面的一串字符

# matches = re.findall(pattern, html)  # 使用 findall 方法找到所有匹配项
# #新建空数组
# wz1 = []
# if matches:
#     # 打印所有匹配项
#     for match in matches:
#         url = "https://www.xiaohongshu.com/explore/" + match
#         #print(url)
#         wz1.append(url)
#         #print(match)
# else:
#     print("没有找到匹配项")
# print(wz1)    

# #遍历数组wz1

        