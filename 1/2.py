# import json
# import pymysql


# db = pymysql.connect(host='152.69.193.99',
#                         port=3306,
#                         user='jk',
#                         password='11223344',
#                         database='jk')

# # 使用 cursor() 方法创建一个游标对象 cursor
# cursor = db.cursor()

# # SQL 插入语句
# a = 1
# b = json.dumps(2,ensure_ascii=False)
# sql = "INSERT INTO shi2(NO,WA) VALUES ('%s', '%s')" % (a, b)
# try:
#     # 执行sql语句
#     cursor.execute(sql)
#     # 提交到数据库执行
#     db.commit()
#     print('成功')
# except:
#     # 如果发生错误则回滚
#     db.rollback()
#     print('失败')

# # 关闭数据库连接
# db.close()

# 导入需要的包
#coding=utf-8
import json
from PIL import Image, ImageDraw, ImageFont
import string
import os
import warnings
import requests
#warnings.filterwarnings("ignore")
from lxml import etree
import pymysql

headers = {
'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.93 Safari/537.36 Edg/96.0.1054.53'}




# 背景尺寸
#bg_size = (1080, 1920)
# 生成一张尺寸为 750x1334 背景色为黄色的图片
#bg = Image.new('RGB', bg_size, color=(255,255,0))

#print(bg.size)
#print(int(bg.size[0]/18))


# 字体大小
for i0 in range(1,10):
    str0 = ""
    list0 = []
    bg = Image.open("7206.jpg")  # .convert("RGBA")
    bg_size = bg.size
    font_size = int(bg.size[0]/18)
    # 文字内容
    font = ImageFont.truetype("hwxw.ttf", font_size)
    draw = ImageDraw.Draw(bg)
    url='https://www.gswen.com.cn/poetry/'+str(i0)+'.html'
    r = requests.get(url, headers=headers)
    r.encoding = 'utf-8'
    r2 = etree.HTML(r.text)
    #print(r.text)
    #print(r2)
    r5 = r2.xpath("//*[contains(@id,'viewbox')]/h1")
    if (r5 == []):
        continue
    print(r5[0].text)
    list0.append(r5[0].text)


    r5=r2.xpath("//*[contains(@id,'viewbox')]/div[1]/div[1]/a[1]/text()")
    print(r5[0])
    r6=r2.xpath("//*[contains(@id,'viewbox')]/div[1]/div[1]/a[2]/text()")
    print(r6[0])
    list0.append(r5[0]+'-'+r6[0])

    r5=r2.xpath("//*[@class=\"conview conview_main show\"]/text()")
    if(r5==[]):
        r5.append('')


    for r6 in r5:
        print(r6)
        list0.append(r6.strip())#诗词

    r5=r2.xpath("//*[contains(@id,'viewbox')]/dl[1]/dd[3]/p/span/text()")


    for r6 in r5:
        str0=str0+r6#翻译
    print(str0)
    list0.append(str0)
    r7=r2.xpath("//*[contains(@id,'viewbox')]/dl[1]/dd[5]/p/text()")#解析
    if(r7==[]):
        r7.append('')
    print(r7[0])
    list0.append(r7[0])
    print(list0)
    url = f'https://api.gswen.com.cn/yuyin/out/gushi/{i0}.mp3'
    response = requests.get(url)
    with open(f'E:\\1\\1\\a-{str(i0)}.mp3', 'wb') as f:
        f.write(response.content)
    
    db = pymysql.connect(host='152.69.193.99',
                        port=3306,
                        user='jk',
                        password='11223344',
                        database='jk')
     # 使用 cursor() 方法创建一个游标对象 cursor
    cursor = db.cursor()

    # SQL 插入语句
    a = i0
    b = json.dumps(list0,ensure_ascii=False)
    sql = "INSERT INTO shi2(NO,WA) VALUES ('%s', '%s')" % (a, b)
    try:
        # 执行sql语句
        cursor.execute(sql)
        # 提交到数据库执行
        db.commit()
        print('成功')
    except:
        # 如果发生错误则回滚
        db.rollback()
        print('失败')

    # 关闭数据库连接
    db.close()



