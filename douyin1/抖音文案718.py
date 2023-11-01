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

# print(div1)
# print(len(div1))

# for i in range(15000):
#     div1 = web.find_elements(By.XPATH, '/html/body/div[2]/div[1]/div[3]/div[3]/div/div/div[3]/div[2]/div[2]/div[2]/div/div')
#     div1 = div1[0].get_attribute('innerHTML')
#     web.find_element(By.TAG_NAME, 'body').send_keys(Keys.END)
#     time.sleep(1)
#     if div1 == '暂时没有更多了':
#         print('到底了')
#         break
#     else:
#         print('还没有到底')

# with open('cs5.csv', mode='a', encoding='utf-8', newline='') as f:
#     fieldnames = ('1', '2')
#     writer = csv.DictWriter(f, fieldnames=fieldnames)
#     writer.writeheader()
# with open("AAA.txt", "r") as f:
#     nr=f.readlines()
# for n1 in nr:
#     n1=n1.strip('\n')
#     print(n1)
#     try:
#         web.get(n1)
#     except:
#         print("结束循环")
#         continue
#     else:
#         pass
#         # print("继续循环")
#     #time.sleep(1)
#print(web.page_source)
# with open('csv/cs79.csv', mode='a', encoding='utf-8', newline='') as f:
#     fieldnames = ('1', '2')
#     writer = csv.DictWriter(f, fieldnames=fieldnames)
#     writer.writeheader()
# i1 = 1
li1 = web.find_elements(By.TAG_NAME, 'ul')[-1].find_elements(By.TAG_NAME,
                                                             'li')  # .find_elements(By.TAG_NAME,'img')#.get_attribute('innerHTM')
sz1=[]
for li2 in li1:
    # try:
        img2 = li2.find_element(By.TAG_NAME, 'img').get_attribute('alt')
        url2 = li2.find_element(By.TAG_NAME, 'a').get_attribute('href')
        url0 = url2.split('/')[-1]
        print(img2)
        print(url2)
        sz1.append(url2)

       
        # r = requests.get(url5, headers=headers)
        #w2 = re.findall("%2C%22playAddr%22%3A%5B%7B%22src%22%3A%22%2F%2F(.*?)%7D%2C", r.text, re.S)[0]


        # with open('./dy1/' +'a1-'+str(i1) + '.mp4', 'wb') as f:
        #     f.write(r.content)
        #     f.close()
        # with open('csv/cs79.csv', 'a', encoding='utf-8', newline='') as f:
        #     writer = csv.DictWriter(f, fieldnames=fieldnames)
        #     writer.writerow({'1': i1, '2': desc})
        #     f.close()
        # i1 = i1 + 1

    # except:
    #     print("错误")
print(sz1)
