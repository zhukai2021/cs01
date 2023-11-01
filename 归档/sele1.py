from selenium import webdriver
import time
from selenium.webdriver.common.by import By
from selenium import webdriver
import re

options = webdriver.ChromeOptions()
options.add_argument('--disable-gpu')  # 禁用gpu
options.add_argument('--ignore-certificate-errors') #忽略一些莫名的问题
options.add_experimental_option('excludeSwitches', ['enable-automation'])  # 开启开发者模式
options.add_argument('--disable-blink-features=AutomationControlled')  # 谷歌88版以上防止被检测
options.add_argument('--headless')  # 无界面
web = webdriver.Chrome(options=options)  # 将chromedriver放到Python安装目录Scripts文件夹下

l1=[]
url1=['http://www.cnmq.com.cn/plus/search.php?keyword=%E7%88%B1%E5%8D%AB%E5%8A%9E&PageNo=1','http://www.cnmq.com.cn/plus/search.php?keyword=%E7%88%B1%E5%8D%AB%E5%8A%9E&PageNo=2']
for url2 in url1:
    web.get(url2)
    time.sleep(4)
    div1 = web.find_elements(By.XPATH, '/html/body/div[4]/div[4]/div/div[2]/div[1]/a')

    for lj1 in div1:
        if lj1.get_attribute('href').find('gsgg')<0:
            print(lj1.get_attribute('href'))
            l1.append(lj1.get_attribute('href'))



print(l1)
ii=1
for l2 in l1:
    web.get(l2)
    time.sleep(4)
    div2 = web.find_elements(By.XPATH, '/html/body/div[4]/div[4]/div[3]/h1')[0].text
    print(div2)

    ex = '(.*?)\n\n文章来源.*?时间：(.*?) '
    ex1 = re.findall(ex, div2, re.S)
    print(ex1[0][0])
    print(ex1[0][1])
    print(web.current_url)
    with open('mq.txt', mode='a', encoding='utf-8') as f:
        f.write(ex1[0][0] + ',' + str(ex1[0][1]) + ',' + str(web.current_url) + '\n')

    time.sleep(4)
    js_height = "return document.body.clientHeight"
    k = 1
    height = web.execute_script(js_height)
    while True:
        if k * 500 < height:
            js_move = "window.scrollTo(0,{})".format(k * 500)
            web.execute_script(js_move)
            time.sleep(0.2)
            height = web.execute_script(js_height)
            k += 1
        else:
            break
    # 注：必须开启无界面模式，即：--headless
    # 接下来是全屏的关键，用js获取页面的宽高，如果有其他需要用js的部分也可以用这个方法
    width = web.execute_script("return document.body.scrollWidth")
    height = web.execute_script("return document.body.scrollHeight")
    # 将浏览器的宽高设置成刚刚获取的宽高
    web.set_window_size(width, height)
    time.sleep(1)
    # 截图并关掉浏览器
    png_file = f'1/{ii}.png'
    web.save_screenshot(png_file)

    time.sleep(0.5)
    ii=ii+1




# url = f"http://www.cnmq.com.cn/dfbm/rdgz/31011.html"
# driver.get(url)
# time.sleep(1)
# js_height = "return document.body.clientHeight"
# k = 1
# height = driver.execute_script(js_height)
# while True:
#     if k * 500 < height:
#         js_move = "window.scrollTo(0,{})".format(k * 500)
#         driver.execute_script(js_move)
#         time.sleep(0.2)
#         height = driver.execute_script(js_height)
#         k += 1
#     else:
#         break
# # 注：必须开启无界面模式，即：--headless
# # 接下来是全屏的关键，用js获取页面的宽高，如果有其他需要用js的部分也可以用这个方法
# width = driver.execute_script("return document.body.scrollWidth")
# height = driver.execute_script("return document.body.scrollHeight")
# # 将浏览器的宽高设置成刚刚获取的宽高
# driver.set_window_size(width, height)
# time.sleep(1)
# # 截图并关掉浏览器
# png_file = f'1/1.png'
# driver.save_screenshot(png_file)


time.sleep(0.5)
web.close()