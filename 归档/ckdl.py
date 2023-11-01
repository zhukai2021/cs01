import re
from selenium import webdriver
import json
from lxml import etree
import time
from selenium.webdriver.common.by import By
from bs4 import BeautifulSoup
# 填写webdriver的保存目录
options = webdriver.ChromeOptions()
#options.add_argument('--headless')
options.add_argument('--disable-gpu')
options.add_experimental_option('excludeSwitches', ['enable-automation'])# 设置为开发者模式
options.add_argument("--disable-blink-features=AutomationControlled")
web=webdriver.Chrome(options=options)
# 记得写完整的url 包括http和https
web.get('https://music.163.com/#/my/m/music/playlist?id=7064696330')
# 首先清除由于浏览器打开已有的cookies
web.delete_all_cookies()
with open('douyin1/cookies1.txt', 'r') as f:
    # 使用json读取cookies 注意读取的是文件 所以用load而不是loads
    cookies_list = json.load(f)
    # 方法1 将expiry类型变为int
    for cookie in cookies_list:
        # 并不是所有cookie都含有expiry 所以要用dict的get方法来获取
        if isinstance(cookie.get('expiry'), float):
            cookie['expiry'] = int(cookie['expiry'])
        web.add_cookie(cookie)
#time.sleep(1)
web.refresh()
#time.sleep(1)
fr=web.find_element(By.ID,'g_iframe')
web.switch_to.frame(fr)
#time.sleep(1)
ll=web.page_source
#pa=BeautifulSoup(ll,"html.parser")
#pa1=pa.find_all("div",class_="cntwrap")[0:15]
#tb1=web.find_element(By.CLASS_NAME,'m-table ')
#tb1=str(tb1)
#tr1=BeautifulSoup(ll,"html.parser")
#tr2=tr1.find("table",class_="m-table")
#tr3=tr1.find_all('a')[0:]
#tr3=str(tr3)
#ll1=web.find_elements(By.TAG_NAME,'tr')[0:]
#print(type(web))
kk = BeautifulSoup(ll, "html.parser")
kk1=kk.find_all('tr')
list1=[]
for kk2 in kk1[1:]:
    #kk3=str(kk2.find('a'))#.split("\"")
    #kk3=str(kk2.find('a'))
    kk3=kk2.find('a')['href']
    #zz= re.search("id=(?P<wa>.*?)>",kk3)
    #print(zz.group())
    kk4='https://music.163.com/#'+kk3+'\n'
    with open("test.txt", "a") as f:
        f.write(kk4)  # 自带文件关闭功能，不需要再写f.close()
#for ll2 in ll1:
   # ll3=ll2.get_attribute('innerHTML')
    #ll4=BeautifulSoup(ll3,'lxml')
   # ll5 = ll4.find("a")['href']
    #l5=str(ll5)
    #zz= re1.search(ll5)
    #print(zz.group('wa'))
    #print(ll5)
    #zz1=zz.group()
    #print(zz.group())
#print(tr2.text)
#print(tr1)
print('11111111')
#web.close()