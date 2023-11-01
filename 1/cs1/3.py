from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from time import sleep
from selenium.webdriver.common.by import By

options = Options()
options.add_experimental_option("debuggerAddress", "127.0.0.1:9527")
bro = webdriver.Chrome(options=options)

url = 'https://xh.newrank.cn/content/notes/notesSearch'
bro.get(url)
