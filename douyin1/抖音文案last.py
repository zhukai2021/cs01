# -*- coding: utf-8 -*-
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
import pymysql
options = webdriver.ChromeOptions()
import os
# options.add_argument('--headless')# 无界面
# options.add_argument('--disable-gpu')#禁用GPU
# options.add_experimental_option('excludeSwitches', ['enable-automation'])# 设置为开发者模式
# options.add_argument("--disable-blink-features=AutomationControlled")#防止检测
options.add_experimental_option("debuggerAddress", "127.0.0.1:9527")
web = webdriver.Chrome(options=options)
headers = {
    'User-Agent': "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.80 Mobile Safari/537.36 Edg/98.0.1108.43"
}
BIAO='dya1206'
dir_name = 'E:/one1t/OneDrive - 356h31/fenlei/'+BIAO+'/'
if not os.path.exists(dir_name):  # os模块判断并创建
    os.mkdir(dir_name)

db = pymysql.connect(host='152.69.193.99',
                             port=3306,
                             user='jk',
                             password='11223344',
                             database='jk',charset='utf8mb4'

                     )


cursor = db.cursor()
sql = "SELECT COUNT(*) FROM "+BIAO
try:
    # 执行sql语句
    cursor.execute(sql)
    results = cursor.fetchall()
    i1=results[0][0]+1
    print(i1)
    #i1=int(i1)
except:
    # 如果发生错误则回滚
    #db.rollback()
    print('失败')
    exit()

# 关闭数据库连接
db.close()
for i in range(15000):
    div1 = web.find_elements(By.XPATH, '//*[@id="root"]/div/div[2]/div/div/div/div[2]/div[2]/div[2]/div[2]/div/div')
    div1 = div1[0].get_attribute('innerHTML')
    web.find_element(By.TAG_NAME, 'body').send_keys(Keys.END)
    time.sleep(1)
    if div1 == '暂时没有更多了':
        print('到底了')
        break
    else:
        print('还没有到底')




li1 = web.find_elements(By.TAG_NAME, 'ul')[-1].find_elements(By.TAG_NAME,
                                                             'li')  # .find_elements(By.TAG_NAME,'img')#.get_attribute('innerHTM')
for li2 in li1:
    try:

        img2 = li2.find_element(By.TAG_NAME, 'img').get_attribute('alt')
        url2 = li2.find_element(By.TAG_NAME, 'a').get_attribute('href')
        url0 = url2.split('/')[-1]
        url3 = f'https://www.iesdouyin.com/web/api/v2/aweme/iteminfo/?item_ids={url0}'
        # print(img2)
        # print(url3)
        print(url0)
        print(url3)

        r = requests.get(url=url3, headers=headers, stream=True)
        # 输出访问状态，如为<200>即为访问成功
        # print("初始访问状态:", r)
        # 使用json解析获取的网页内容
        data_json = json.loads(r.text)
        # 使用json解析网页后，data_json的内容为dict格式，我们可以通过以下方式查看健名
        # print(type(data_json))
        # print(data_json)
        # print(len('extra'))
        desc = data_json['item_list'][0]['desc']
        print(desc)

        url4 = data_json['item_list'][0]['video']['play_addr']['url_list'][0]
        url41 = data_json['item_list'][0]['video']['origin_cover']['url_list'][0]
        #print(r.text)
        # print(url4)
        # print(url41)
        #url5 = f'https://aweme.snssdk.com/aweme/v1/play/?video_id={url4}&ratio=720p&line=0'
        #print(url5)
        print(i1)
        print(url4)
        url4=str(url4).replace('playwm' , 'play')
        print(url4)

        r = requests.get(url4, headers=headers)
        r1 = requests.get(url41, headers=headers)
        with open(dir_name +'a2-'+str(i1) + '.mp4', 'wb') as f:
            f.write(r.content)
            f.close()
        with open(dir_name + 'b2-' + str(i1) + '.jpeg', 'wb') as f:
            f.write(r1.content)
            f.close()

        db = pymysql.connect(host='152.69.193.99',
                     port=3306,
                     user='jk',
                     password='11223344',
                     database='jk',charset='utf8mb4'


)

        # 使用 cursor() 方法创建一个游标对象 cursor
        cursor = db.cursor()

        # SQL 插入语句

        sql = "INSERT INTO %s(NO,WA) VALUES ('%s', '%s')" % (BIAO,i1, desc)
        # # 执行sql语句
        # cursor.execute(sql)
        # # 提交到数据库执行
        # db.commit()
        # print('成功')
        try:
            # 执行sql语句
            cursor.execute(sql)
            # 提交到数据库执行
            db.commit()
            print('成功')
        except:
            # 如果发生错误则回滚
            db.rollback()
            print('失败')

        #关闭数据库连接
        db.close()

        i1 = i1 + 1
        #break

    except:
        print("错误")
print(11111111)
