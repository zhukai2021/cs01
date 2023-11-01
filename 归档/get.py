import requests
import json




headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.93 Safari/537.36 Edg/96.0.1054.53'}
url = "https://api.oick.cn/dog/api.php"

#html.encoding = 'gbk'

#print(html.text)
#d = json.loads(html.text)
#print(d)
#print(type(d))
#print(d)
for i in range(0,2000):
        html = requests.get(url, headers=headers)
        print(html.text)