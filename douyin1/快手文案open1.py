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
# options.add_argument('--headless')# 无界面
# options.add_argument('--disable-gpu')#禁用GPU
# options.add_experimental_option('excludeSwitches', ['enable-automation'])# 设置为开发者模式
# options.add_argument("--disable-blink-features=AutomationControlled")#防止检测
options.add_experimental_option("debuggerAddress", "127.0.0.1:9527")
web = webdriver.Chrome(options=options)
headers = {
    'content-type': 'application/json',
    # 'Cookie': 'clientid=3; did=web_e2bb6fd1fd7b3657c30500605fa62386; client_key=65890b29; userId=1901499766; kpf=PC_WEB; kpn=KUAISHOU_VISION; kuaishou.server.web_st=ChZrdWFpc2hvdS5zZXJ2ZXIud2ViLnN0EqABmi3C17zqPQakAOELx56nLw29oSiIMUUzwqxVLr0sGBh8ELiwODmiHvUw640HPd8VWsQxfWXY1YvrsExuKz-o-PkVk3nYIq42ywsVX96Wn75JlOZFSPKa_X7BSqsSwUzafWGIL0b9OyUbYTfJslZuvy9NiTzA14Z2Q3rYf1IfTJKih8-6HVphZxiXFQ0ozO2hEozKbGwHcmB_MMy2rF7tYRoSuDcrlwmr6APhXfdZrBO5uo0FIiBY7507ZbwWPed4-JSGCqQ0KmEvFiperw0f53K92GtC9CgFMAE; kuaishou.server.web_ph=4484357fdb26f29c2bad73ee64a5391bb0d7',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.159 Safari/537.36'
}
db = pymysql.connect(host='http://152.69.193.99',
                             port=3306,
                             user='jk',
                             password='11223344',
                             database='jk',charset='utf8mb4'

                     )

BIAO='YY1K1'
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
print(web.current_url)
print(web.current_url.replace('https://www.kuaishou.com/profile/', ''))
# print(len(div1))
#print(web.page_source)
for i in range(15000):
    # div1 = web.find_elements(By.XPATH, '//*[@id="app"]/div[1]/section/div/div/div[1]/div[1]/div[2]/div/div/div/div[293]/div')
    # div1 = div1[0].get_attribute('innerHTML')
    web.find_element(By.TAG_NAME, 'body').send_keys(Keys.END)
    time.sleep(1)
    if '已经到底了' in web.page_source:
        print('到底了')
        break
    else:
        print('还没有到底')

with open('csv/ks1.csv', mode='a', encoding='utf-8', newline='') as f:
    fieldnames = ('1', '2')
    writer = csv.DictWriter(f, fieldnames=fieldnames)
    writer.writeheader()
i2 = 1
# li1 = web.find_elements(By.TAG_NAME, 'ul')[-1].find_elements(By.TAG_NAME,'li')  # .find_elements(By.TAG_NAME,'img')#.get_attribute('alt')
li1 = web.find_elements(By.CLASS_NAME,
                        'card-link')  # [0].find_elements(By.CLASS_NAME, 'poster-img')[0].get_attribute('src')
# li2 = re.findall("Key=(.*?)\.jpg",str(li1))[0]
# print(li2)
# print(li1)
sz1 = []
for li2 in li1:
    li2 = li2.find_elements(By.CLASS_NAME, 'poster-img')[0].get_attribute('src')
    li2 = re.findall("Key=(.*?)\.jpg", li2)[0]

    sz1.append(li2)
print(sz1)

for i0 in sz1:
    #try:

    # web.get('https://www.kuaishou.com/profile/3xbaixp44q5pbw4')
    # li2 = li2.find_elements(By.CLASS_NAME, 'poster-img')[0].get_attribute('src')
    # li2 = re.findall("Key=(.*?)\.jpg", li2)[0]
    # url1 = 'https://www.kuaishou.com/short-video/' + li2 + '?authorId=' + web.current_url.replace(
    #     'https://www.kuaishou.com/profile/', '')
    # print(url1)

    # r = requests.get(url='https://www.kuaishou.com/short-video/3x32yi3a5px89ys', headers=headers, stream=True)
        web.get('https://www.kuaishou.com/short-video/' + i0)
        time.sleep(4)
        # print(web.page_source)
        w1 = re.findall("https://v\d.kwaicdn.com.*?&amp;tt", web.page_source)[0]
        w2 = re.findall("video-info-title.*?>(.*?)</div>", web.page_source,re.S)[0]
        th1 = re.compile(r'<[^>]+>', re.S)
        w2 = th1.sub('', w2)#
        w3=re.findall("poster=\"(.*?)\"", web.page_source,re.S)[0]


        # w1 = re.findall("\"codecs\":null,\"url\":\"(.*?)\"", r.text)[-1]
        # w2 = re.findall("<title>(.*?)-", r.text)[-1]
        #print(web.page_source)
        print(i2)
        print(w1)
        print(w2)
        print(w3)
        time.sleep(2)
        r = requests.get(w1, headers=headers)
        r1 = requests.get(w3, headers=headers)
        with open('E:one1t/OneDrive - 356h31/fenlei/YY1K1/' +'a2-'+str(i1) + '.mp4', 'wb') as f:
            f.write(r.content)
            f.close()
        with open('E:one1t/OneDrive - 356h31/fenlei/YY1K1/' + 'b2-' + str(i1) + '.jpg', 'wb') as f:
            f.write(r1.content)
            f.close()
        with open('csv/ks1.csv', 'a', encoding='utf-8', newline='') as f:
            writer = csv.DictWriter(f, fieldnames=fieldnames)
            writer.writerow({'1': i2, '2': w2})
            f.close()
        i2=i2+1

#
    # except:
    #
    #     print("错误")
print(11111111)
