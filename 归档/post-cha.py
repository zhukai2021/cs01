import requests
import json

#print(type(html.text))
#a=int(html.text)


for i in range(1,245):
    url = "http://61.191.56.132:20177/jk/post-cha2.php?BIAO=wa1&NO="+str(i)
    html = requests.get(url)
    print(html.text)


