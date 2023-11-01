from selenium.webdriver import Chrome
from lxml import etree
import time
from selenium.webdriver.common.by import By
from selenium import webdriver
import re
from bs4 import BeautifulSoup
import csv
options = webdriver.ChromeOptions()
options.add_argument('--headless')
options.add_argument('--disable-gpu')
options.add_experimental_option('excludeSwitches', ['enable-automation'])# 设置为开发者模式
options.add_argument("--disable-blink-features=AutomationControlled")
web=webdriver.Chrome(options=options)
with open('cs2.csv', mode='a', encoding='utf-8', newline='') as f:
    fieldnames = ('1', '2', '3', '4', '5', '6', '7')
    writer = csv.DictWriter(f, fieldnames=fieldnames)
    writer.writeheader()
with open("test.txt", "r") as f:
    nr=f.readlines()
for n1 in nr:
    n1=n1.strip('\n')
    print(n1)
    web.get(n1)
    #time.sleep(1)
    fr=web.find_element(By.ID,'g_iframe')
    web.switch_to.frame(fr)
    time.sleep(1)
    ll=web.page_source
    pa=BeautifulSoup(ll,"html.parser")
    pa1=pa.find_all("div",class_="cntwrap")[0:15]
    for pa2 in pa1:
        pa2=str(pa2)
        pa3=BeautifulSoup(pa2,"html.parser")
        yh=pa3.find("div",class_="cnt f-brk").text
        fg=yh.split('：')
        sj =pa3.find("div",class_="time s-fc4").text
        #dz=re.search('</i> \((?P<wa>.*?)\)',pa2)
        dz = pa3.find_all("a",href="javascript:void(0)")[1].text
        dz1=str(dz).strip(" (").strip(")")
        gc=pa.find("div",id="lyric-content").text
        tt=web.title
        tt1=tt.split(' - ')
        #print(dz1)
        #print(fg[0],fg[1],sj,dz.group('wa'),tt1[0],tt1[1],gc)
        print(fg[0], fg[1], sj, dz1, tt1[0], tt1[1], gc)
        with open('cs2.csv', 'a', encoding='utf-8',newline='') as f:
            writer = csv.DictWriter(f, fieldnames=fieldnames)
            writer.writerow({'1': str(fg[0]), '2': str(fg[1]), '3': str(sj), '4': str(dz1), '5': str(tt1[0]), '6': str(tt1[1]), '7': str(gc)})
            #writer.writerow({'first_name': 'Baked', 'last_name': 'Beans'})
            #writer.writerow({'first_name': 'Lovely', 'last_name': 'Spam'})
            #writer.writerow({'first_name': 'Wonderful', 'last_name': 'Spam'})
    #break

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




