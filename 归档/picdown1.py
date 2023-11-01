import requests
from lxml.html import tostring
import re
from lxml import etree
for i in range(2,54):
    url='https://pic.netbian.com/4kyingshi/index_'+str(i)+'.html'
    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.93 Safari/537.36 Edg/96.0.1054.53'}
    r = requests.get(url, headers=headers)
    r.encoding = 'gbk'
    # r1=r.text.replace("/tupian/", "https://pic.netbian.com/tupian/").replace("/uploads/", "https://pic.netbian.com/uploads/")
    r2 = etree.HTML(r.text)
    r4 = r2.xpath("/html/body/div[2]/div/div[3]")[0]
    r5 = etree.tostring(r4, encoding="gbk", pretty_print=True, method="html").decode('gbk')  # 可以正常显示中文
    r1 = r5.replace("href=\"", "href=\"https://pic.netbian.com").replace("src=\"", "src=\"https://pic.netbian.com")
    print(r1)
    print(type(r1))
    z = re.compile(
        r"<li><a href=\"(?P<a1>.*?)\" target=\"_blank\"><img src=\"(?P<a2>.*?)\" alt=\"(?P<a3>.*?)\"><b>(?P<a4>.*?)</b></a></li>",
        re.S)
    # z=re.compile(r"<li>.*?</li>",re.S)
    z1 = z.finditer(r1)
    for b1 in z1:
        print(b1.group("a1"))
        print(b1.group("a4"))
        r = requests.get(b1.group("a1"), headers=headers)
        print(r.text)
        r.encoding = 'gbk'
        # r1=r.text.replace("/tupian/", "https://pic.netbian.com/tupian/").replace("/uploads/", "https://pic.netbian.com/uploads/")
        r2 = etree.HTML(r.text)
        r4 = r2.xpath("/html/body/div[2]/div[1]/div[2]/div[1]/div[2]/a/img/@src")
        print('https://pic.netbian.com' + r4[0])
        r = requests.get('https://pic.netbian.com' + r4[0], headers=headers)
        print(r)
        try:
            with open('./a/' + b1.group("a4") + '.jpg', 'wb') as f:
                f.write(r.content)
        except IOError:
            print("Error: 没有找到文件或读取文件失败")

        else:
            print("内容写入文件成功")



    # <li><a href="https://pic.netbian.com/tupian/27808.html" target="_blank"><img src="https://pic.netbian.com/uploads/allimg/210727/000113-16273152736fb6.jpg" alt="白蛇2青蛇劫起3440x1440带鱼屏壁纸" /><b>
    # print(type(r1.text))
    # with open('r1.html','w',encoding='gbk') as f:
    #  f.write(r1)

