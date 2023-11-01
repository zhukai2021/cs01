from selenium.webdriver.common.by import By
from selenium import webdriver
import time
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.action_chains import ActionChains
from lxml import etree
import re
import pyperclip
options = webdriver.ChromeOptions()
# options.add_argument('--headless')# 无界面
# options.add_argument('--disable-gpu')#禁用GPU
# options.add_experimental_option('excludeSwitches', ['enable-automation'])# 设置为开发者模式
# options.add_argument("--disable-blink-features=AutomationControlled")#防止检测
options.add_experimental_option("debuggerAddress", "127.0.0.1:9527")
web = webdriver.Chrome(options=options)
# headers = {
#     'content-type': 'application/json',
#     # 'Cookie': 'clientid=3; did=web_e2bb6fd1fd7b3657c30500605fa62386; client_key=65890b29; userId=1901499766; kpf=PC_WEB; kpn=KUAISHOU_VISION; kuaishou.server.web_st=ChZrdWFpc2hvdS5zZXJ2ZXIud2ViLnN0EqABmi3C17zqPQakAOELx56nLw29oSiIMUUzwqxVLr0sGBh8ELiwODmiHvUw640HPd8VWsQxfWXY1YvrsExuKz-o-PkVk3nYIq42ywsVX96Wn75JlOZFSPKa_X7BSqsSwUzafWGIL0b9OyUbYTfJslZuvy9NiTzA14Z2Q3rYf1IfTJKih8-6HVphZxiXFQ0ozO2hEozKbGwHcmB_MMy2rF7tYRoSuDcrlwmr6APhXfdZrBO5uo0FIiBY7507ZbwWPed4-JSGCqQ0KmEvFiperw0f53K92GtC9CgFMAE; kuaishou.server.web_ph=4484357fdb26f29c2bad73ee64a5391bb0d7',
#     'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.159 Safari/537.36'
# }
jg1=[]
jg2=[]
#print(web.current_url)
while 1:
    dz1 = web.current_url
    time.sleep(2)
    #web.find_element(By.ID,'root').send_keys(Keys.DOWN)

    #print(web.current_url)
    #print(web.page_source)
    #mouse = web.find_element(By.XPATH,'//*[@id=\"douyin-right-container\"]/div[2]/main/div[1]/div[2]/div/div[1]/div[4]')
    mouse = web.find_element(By.XPATH,'//*[@id=\"sliderVideo\"]/div[1]/div[1]/div/div[1]/div[2]/div[5]')

    ActionChains(web).move_to_element(mouse).perform()
    time.sleep(2)
    e=web.find_element(By.XPATH,"//*[@id=\"sliderVideo\"]/div[1]/div[1]/div/div[1]/div[2]/div[5]/div[2]/div/div/div/button[4]")

    #web.swich_to.frame(e)
    e.click()
    #web.execute_script('arguments[0].click()',e)
    b = pyperclip.paste() # 粘贴的内容，甚至可以存在变量
    # pyperclip.copy("")  # 清空
    print(f"我是复制的内容：{b}")
    b1 = re.findall('https?://(?:[-\w.]|(?:%[\da-fA-F]{2}))+/\w+/',b)
    b2 = re.findall('/(.*?)http', b)
    print(b1[0])
    print(b2[0])
    jg1.append(b1[0])
    jg2.append(b2[0])
    time.sleep(2)

    ActionChains(web).send_keys(Keys.UP).perform()

    if web.current_url == dz1:
        print('没有了')
        break
print(jg1)
print(jg2)
with open('test1.txt','w') as f:
   f.write(jg1)
with open('test2.txt','w') as f:
   f.write(jg2)

