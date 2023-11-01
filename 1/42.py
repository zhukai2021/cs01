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


# 点击图片上传按钮
web.find_element(By.CLASS_NAME, 'soutu-btn').click()
time.sleep(5)
# 找到上传图片元素
upload_pic_input = web.find_element(By.CLASS_NAME, 'upload-pic')
# 直接上传
upload_pic_input.send_keys(r'D:1/9242.PNG')

time.sleep(5)