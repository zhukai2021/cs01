import requests
import json
data = {"fname": "K50"}
url = "http://61.191.56.132:20177/jk/post-cha.php"
html = requests.post(url, data=data)
print(html.text)
print(type(html.text))
a=int(html.text)


for i1 in range(0,10):
    data = {"fname": "K50", "age": str(a+1)}
    url = "http://61.191.56.132:20177/jk/post-gai.php"
    html = requests.post(url, data=data)
    print(html.text)
    a=a+1


# print(type(html.text))
# d = json.loads(html.text)
# print(d)
# print(type(d))
# for i in range(0,15):
#     print(d['data'][i]['index']+" "+d['data'][i]['title']+" "+d['data'][i]['hotValue'])