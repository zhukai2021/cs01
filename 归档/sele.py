from selenium.webdriver import Chrome
from lxml import etree
import time
import json
from selenium.webdriver.common.by import By
from selenium import webdriver
import re
from bs4 import BeautifulSoup
import csv
from selenium.webdriver.common.keys import Keys
import requests
import json
import csv
from urllib import parse

options = webdriver.ChromeOptions()
# options.add_argument('--headless')# 无界面
# options.add_argument('--disable-gpu')#禁用GPU
# options.add_experimental_option('excludeSwitches', ['enable-automation'])# 设置为开发者模式
# options.add_argument("--disable-blink-features=AutomationControlled")#防止检测
options.add_experimental_option("debuggerAddress", "127.0.0.1:9527")
web = webdriver.Chrome(options=options)
headers = {
    'User-Agent': "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.80 Mobile Safari/537.36 Edg/98.0.1108.43"
}
#print(1111)
#web.save_screenshot("1/baidu.png")
# web.save_screenshot('1/all.png')
# print(web.page_source)

# div1 = web.find_elements(By.XPATH, '/html/body/div[4]/div[4]/div/div[2]/div[1]/a')
# l1=[]
# for lj1 in div1:
#     if lj1.get_attribute('href').find('gsgg')<0:
#         print(lj1.get_attribute('href'))
#         l1.append(lj1.get_attribute('href'))
#
# print(l1)
# for l2 in l1:
#     web.get(l2)
#     time.sleep(4)
#     div2 = web.find_elements(By.XPATH, '/html/body/div[4]/div[4]/div[3]/h1')[0].text
#     print(div2)
#     time.sleep(4)

# web.get(l2)
# time.sleep(4)
div2 = web.find_elements(By.XPATH, '/html/body/div[4]/div[4]/div[3]/h1')[0].text
print(div2)
time.sleep(0.5)


ex='(.*?)\n\n文章来源.*?时间：(.*?) '
ex1=re.findall(ex,div2,re.S)
print(ex1[0][0])
print(ex1[0][1])
print(web.current_url)
with open('mq.txt',mode='a',encoding = 'utf-8') as f:
	f.write(ex1[0][0]+','+str(ex1[0][1])+','+str(web.current_url)+'\n')
