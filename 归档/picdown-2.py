import requests
from lxml.html import tostring
import re
from lxml import etree
ii=1
iii=1
for i in range(2,39):
    url='https://www.3gbizhi.com/wallMV/index_'+str(i)+'.html'
    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.93 Safari/537.36 Edg/96.0.1054.53'}
    r = requests.get(url, headers=headers)
    r.encoding = 'utf-8'
    r2 = etree.HTML(r.text)
    r4 = r2.xpath("/html/body/div[5]/ul//li/a/@href")
    for r5 in r4:
        # print(r5)
        r = requests.get(r5, headers=headers)
        # print(r.text)

        # r.encoding = 'gbk'
        r2 = etree.HTML(r.text)
        # exit()
        #print(r)

        r6 = r2.xpath("/html/body/div[4]/div[1]/a[4]/img/@src")
        r7 = r2.xpath("/html/body/div[4]/div[1]/a[4]/img/@alt")
        try:
            r = requests.get(r6[0], headers=headers)
        except:
            print("结束循环")
            continue
        else:
            pass
            #print("继续循环")



        try:
            with open('./a2/' + 'd' + str(ii) + '--' + str(iii)+'---'+r7[0] + '.jpg', 'wb') as f:
                f.write(r.content)
        except IOError:
            print("Error: 没有找到文件或读取文件失败")
        else:
            print("内容写入文件成功")
        if iii>2:
            ii=ii+1
            iii=1
        else:
            iii = iii+1








# <li><a href="https://pic.netbian.com/tupian/27808.html" target="_blank"><img src="https://pic.netbian.com/uploads/allimg/210727/000113-16273152736fb6.jpg" alt="白蛇2青蛇劫起3440x1440带鱼屏壁纸" /><b>
    # print(type(r1.text))
    # with open('r1.html','w',encoding='gbk') as f:
    #  f.write(r1)

