import requests
from selenium import webdriver
from lxml import etree

# 定义要爬取的网页地址
#url = 'https://www.douyin.com/aweme/v1/web/aweme/detail/?aweme_id=7190042191169883427&aid=1128&version_name=23.5.0&device_platform=android&os_version=2333&X-Bogus=DFSzswSLEjvANnEftawF309WcBjK'
url='https://www.douyin.com/note/7210377281347341605'
# 发送 HTTP 请求获取网页内容
headers = {
    'accept': '*/*',
    'Connection': 'keep-alive',
    'Cookie': 'msToken=uTa38b9QFHB6JtEDzH9S4np17qxpG6OrROHQ8at2cBpoKfUb0UWmTkjCSpf72EcUrJgWTIoN6UgAv5BTXtCbOAhJcIRKyZIT7TMYapeOSpf;odin_tt=324fb4ea4a89c0c05827e18a1ed9cf9bf8a17f7705fcc793fec935b637867e2a5a9b8168c885554d029919117a18ba69; ttwid=1%7CWBuxH_bhbuTENNtACXoesI5QHV2Dt9-vkMGVHSRRbgY%7C1677118712%7C1d87ba1ea2cdf05d80204aea2e1036451dae638e7765b8a4d59d87fa05dd39ff; bd_ticket_guard_client_data=eyJiZC10aWNrZXQtZ3VhcmQtdmVyc2lvbiI6MiwiYmQtdGlja2V0LWd1YXJkLWNsaWVudC1jc3IiOiItLS0tLUJFR0lOIENFUlRJRklDQVRFIFJFUVVFU1QtLS0tLVxyXG5NSUlCRFRDQnRRSUJBREFuTVFzd0NRWURWUVFHRXdKRFRqRVlNQllHQTFVRUF3d1BZbVJmZEdsamEyVjBYMmQxXHJcbllYSmtNRmt3RXdZSEtvWkl6ajBDQVFZSUtvWkl6ajBEQVFjRFFnQUVKUDZzbjNLRlFBNUROSEcyK2F4bXAwNG5cclxud1hBSTZDU1IyZW1sVUE5QTZ4aGQzbVlPUlI4NVRLZ2tXd1FJSmp3Nyszdnc0Z2NNRG5iOTRoS3MvSjFJc3FBc1xyXG5NQ29HQ1NxR1NJYjNEUUVKRGpFZE1Cc3dHUVlEVlIwUkJCSXdFSUlPZDNkM0xtUnZkWGxwYmk1amIyMHdDZ1lJXHJcbktvWkl6ajBFQXdJRFJ3QXdSQUlnVmJkWTI0c0RYS0c0S2h3WlBmOHpxVDRBU0ROamNUb2FFRi9MQnd2QS8xSUNcclxuSURiVmZCUk1PQVB5cWJkcytld1QwSDZqdDg1czZZTVNVZEo5Z2dmOWlmeTBcclxuLS0tLS1FTkQgQ0VSVElGSUNBVEUgUkVRVUVTVC0tLS0tXHJcbiJ9',
    'Host': 'www.douyin.com',
    'Referer': 'https://www.douyin.com/',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36',
}
response = requests.get(url,headers=headers)
print(response.text)
with open('test.html','w') as f:
   f.write(response.text)

# from selenium import webdriver
#
# # 启动浏览器
# driver = webdriver.Chrome()
#
# # 加载 JavaScript 文件
# driver.get('test.js')
#
# # 运行 JavaScript 代码，并将结果返回给 Python 程序
# encrypted_text = driver.execute_script('return encrypt("Hello, world!");')
# print(encrypted_text)
#
# # 关闭浏览器
# driver.quit()