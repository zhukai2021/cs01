from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options
from webdriver_manager.chrome import ChromeDriverManager
import os
# 设置 ChromeDriver 的路径和启动参数
s = Service(ChromeDriverManager().install())
chrome_options = Options()
chrome_options.add_argument("--headless")
chrome_options.add_argument("--disable-extensions")
chrome_options.add_argument("--disable-gpu")
chrome_options.add_argument("--no-sandbox")
chrome_options.add_argument("--disable-dev-shm-usage")
chrome_options.add_argument("--user-agent=Mozilla/5.0 (Linux; Android 11; Pixel 4 XL) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.82 Mobile Safari/537.36")

# 创建 Chrome 浏览器对象
driver = webdriver.Chrome(service=s, options=chrome_options)


# 设置网页的大小为 360 x 640
driver.set_window_size(720, 1280*1.079)

# 创建一个 HTML 文件
# with open('index.html', 'w') as f:
#     f.write('<html><head><title>Example</title></head><body><h1>Hello, World!</h1></body></html>')

# 打开生成的 HTML 文件
driver.get('http://127.0.0.1/8.html')

# 等待页面加载完成
driver.implicitly_wait(10)

# 截取整个网页的截图并保存
driver.save_screenshot('screenshot.png')

# 关闭浏览器
driver.quit()