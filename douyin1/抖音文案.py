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
options = webdriver.ChromeOptions()
#options.add_argument('--headless')# 无界面
options.add_argument('--disable-gpu')#禁用GPU
options.add_experimental_option('excludeSwitches', ['enable-automation'])# 设置为开发者模式
options.add_argument("--disable-blink-features=AutomationControlled")#防止检测
web=webdriver.Chrome(options=options)

# web.delete_all_cookies()
# web.get('https://www.douyin.com/user/MS4wLjABAAAAAcmVwMFIdd0qlVFtT9JIojnpTFRK93UpLgFXqshM3o3IQiWNHVWX2mPKyvI5wkkA')
# with open('cookies2.txt', 'r') as f:
#     # 使用json读取cookies 注意读取的是文件 所以用load而不是loads
#     cookies_list = json.load(f)
#     # 方法1 将expiry类型变为int
#     for cookie in cookies_list:
#         # 并不是所有cookie都含有expiry 所以要用dict的get方法来获取
#         if isinstance(cookie.get('expiry'), float):
#             cookie['expiry'] = int(cookie['expiry'])
#         web.add_cookie(cookie)
# #time.sleep(1)
# web.refresh()

with open('csv/cs5.csv', mode='a', encoding='utf-8', newline='') as f:
    fieldnames = ('1', '2')
    writer = csv.DictWriter(f, fieldnames=fieldnames)
    writer.writeheader()
with open("csv/AAA.txt", "r") as f:
    nr=f.readlines()
for n1 in nr:
    n1=n1.strip('\n')
    print(n1)
    try:
        web.get(n1)
    except:
        print("结束循环")
        continue
    else:
        pass
        # print("继续循环")
    #time.sleep(1)
    for i in range(15):
        web.find_element(By.TAG_NAME,'body').send_keys(Keys.END)
        time.sleep(1)

    ll=web.page_source
    pa=BeautifulSoup(ll,"html.parser")
    #print(pa)
    pa1=pa.find_all("img")
    for pa2 in pa1:
        try:
            pa2 = str(pa2['alt'])
            print(pa2)
        except:
            print("错误")

        #print(fg[0],fg[1],sj,dz.group('wa'),tt1[0],tt1[1],gc)
        # try:
        #     print(fg[0], fg[1], sj, dz1, tt1[0], tt1[1], gc)
        #     with open('cs5.csv', 'a', encoding='utf-8', newline='') as f:
        #         writer = csv.DictWriter(f, fieldnames=fieldnames)
        #         writer.writerow(
        #             {'1': str(fg[0]), '2': str(fg[1]), '3': str(sj), '4': str(dz1), '5': str(tt1[0]), '6': str(tt1[1]),'7': str(gc)})
        # except:
        #     print("错误")
        # # else:
        # #     pass
        #     #print("继续循环")


print(11111111)

   # print(pa2)
    #dr = re.compile(r'<[^>]+>', re.S)
    #dd = dr.sub('', pa3)
    #dd1=pa3.split('：',1)
    #dd2=dd1[1].split("|",2)
    #dd3=dd2[1].replace('('or')','')
    #dd3 = dd3.replace(')', '')
    #print(dd1[0],dd2[0],dd3)
   #print(sj)




