import requests
import json




headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.93 Safari/537.36 Edg/96.0.1054.53',
    'X-User-Token':'IGdjfOgHkqTuo1PJT9ijxYDkkVuSQJCp'
}

url = "http://v2.jinrishici.com/sentence"
html = requests.get(url, headers=headers)
#html.encoding = 'gbk'
list1=[]
print(html.json())
list1.append(html.json()['data']['origin']['title'])
list1.append(html.json()['data']['origin']['dynasty']+'*'+html.json()['data']['origin']['author'])


for i in range(0,len(html.json()['data']['origin']['content'])):
    list1.append(html.json()['data']['origin']['content'][i])
list1.append('-')
list1.append(html.json()['data']['content'])
list1.append(html.json()['data']['origin']['translate'])
print(list1)
for i1 in list1:
    print(i1)

# log(r.body.json());
# log(r.body.json().data.origin.content.length);
# log(r.body.json().data.origin.title)
# log(r.body.json().data.origin.dynasty)
# log(r.body.json().data.origin.author)
# for (i = 0; i < r.body.json().data.origin.content.length; i++) {// 3kaishi
# log(r.body.json().data.origin.content[i])

#}