# 导入需要的包11111
#coding=utf-8
import json
from PIL import Image, ImageDraw, ImageFont
import string
import os
import warnings
import requests
warnings.filterwarnings("ignore")
from lxml import etree
import pymysql
headers = {
'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.93 Safari/537.36 Edg/96.0.1054.53'}

import pymysql

# 连接到数据库
conn = pymysql.connect(
        host='152.69.193.99',
        user='jk',
        password='11223344',
        db='jk',
        charset='utf8mb4',
        cursorclass=pymysql.cursors.DictCursor
    )

# 创建一个游标对象以执行查询
cursor = conn.cursor()


mu0=['7207.png,7207.png,7207.png']


# 字体大小
for i0 in range(84,85):
    sql = f"SELECT * FROM shi WHERE NO= '{i0}'"
    cursor.execute(sql)

    # 获取符合条件的行
    row = cursor.fetchone()

    # 打印结果
    if row:
        pass
    else:
        print(f"没有找到值为 {value} 的行")
   
    # list1=list(row.values())
    list1=list(row.values())
    list1=eval(list1[1])
    print(list1[-1])
    print(list1[-2])
    print(list1[0])
    print(list1[1])
    print(len(list1))
    for li in list1[2:-3]:
        print(li)

    print(list1)
    # print(list1[1])
    # str0 = ""
    # list1 = []
    bg = Image.open("7207.png")  # .convert("RGBA")
    bg_size = bg.size
    font_size = int(bg.size[0]/18)
    # 文字内容
    font = ImageFont.truetype("hwxw.ttf", font_size)
    draw = ImageDraw.Draw(bg)
    


    w1=0.10*bg.size[1]
    for i1 in range(0,int(len(list1)-2)):
        print(i1)
        text_width = font.getsize(list1[i1])
        if(i1==0):
            font_size = int(bg.size[0] /15)
            font = ImageFont.truetype("hwxw.ttf", font_size)
            text_width = font.getsize(list1[i1])
        if(i1==1):
            font_size = int(bg.size[0] / 27)
            font = ImageFont.truetype("hwxw.ttf", font_size)
            text_width = font.getsize(str(list1[i1]))



        if (0.8*bg.size[0] < text_width[0]):
            font_size = int(0.8*bg.size[0] / len(str(list1[i1])))
            print(bg.size[0] ,text_width[0],bg.size[0] / text_width[0],bg.size[0]/18)
            font = ImageFont.truetype("hwxw.ttf", font_size)
            text_width = font.getsize(str(list1[i1]))


        draw.text((int((bg_size[0]-text_width[0])/2),w1+20), str(list1[i1]),(0,0,0), font=font)

        font_size = int(bg.size[0] / 18)
        font = ImageFont.truetype("hwxw.ttf", font_size)
        w1 = w1 + 1.5 * text_width[1]


    # #==================================
    # font_size1 = int(bg.size[0] / 30)
    # font1 = ImageFont.truetype("kt.ttf", font_size1)
    # t='        '+list1[-1]
    # j=''
    # j1=''
    # j2=1
    # for i in t:
    #     j=j+i
    #     #text_width =
    #     if(font1.getsize(j)[0]>0.40*bg_size[0]):
    #         j1=j1+j+'\n'
    #         j=''
    #         j2=j2+1
    # j1=j1+j


    # text_width1 = font1.getsize(j1)
    # draw.text(    (  0.05*bg_size[0],1.03*5/3*(len(list1)+2)*text_width1[1]+20  )    , j1,(0,0,0), font=font1)

    # #==================================
    font_size2 = int(bg.size[0] / 25)
    font2 = ImageFont.truetype("汉仪夏日体简.ttf", font_size2)
    t='    '+list1[-2]
    j=''
    j1=''
    j2=1
    for i in t:
        j=j+i
        #text_width =
        if(font2.getsize(j)[0]>0.80*bg_size[0]):
            j1=j1+j+'\n'
            j=''
            j2=j2+1
    j1=j1+j


    text_width2 = font2.getsize(j1)
    draw.text(    (  0.08*bg_size[0],1.03*5/3*(len(list1)+2)*text_width2[1]+10 )    , j1,(0,0,0), font=font2)

    #要保存图片的路径
    #img_path = os.path.join('.', 'output', 'center_text.jpg')

    # 保存图片
    bg.save('D:/31/' +'a'+str(i0)+'.png')
    #bg.show()
    print('保存成功 at {}')

    # db = pymysql.connect(host='61.191.56.132',
    #                      port=20178,
    #                      user='r',
    #                      password='11223344',
    #                      database='jk')

    # # 使用 cursor() 方法创建一个游标对象 cursor
    # cursor = db.cursor()

    # # SQL 插入语句
    # a = i0
    # b = json.dumps(list1,ensure_ascii=False)
    # sql = "INSERT INTO shi(NO,WA) VALUES ('%s', '%s')" % (a, b)
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

    # 关闭数据库连接
conn.close()
