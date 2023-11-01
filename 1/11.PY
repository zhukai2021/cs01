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
# import pymysql
headers = {
'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.93 Safari/537.36 Edg/96.0.1054.53'}




# 背景尺寸
#bg_size = (1080, 1920)
# 生成一张尺寸为 750x1334 背景色为黄色的图片
#bg = Image.new('RGB', bg_size, color=(255,255,0))

#print(bg.size)
#print(int(bg.size[0]/18))


# 字体大小
for i0 in range(1,6):
    str0 = ""
    list0 = []
    bg = Image.open("D:/cs01/cs01/1/7208.png")  # .convert("RGBA")
    bg = bg.resize((1080, 1920))
    bg_size = bg.size
    font_size = int(bg.size[0]/18)
    # 文字内容
    font = ImageFont.truetype("D:/cs01/cs01/1/hwxw.ttf", font_size)
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
        list0.append(r6.strip())

    r5=r2.xpath("//*[contains(@id,'viewbox')]/dl[1]/dd[3]/p/span/text()")


    for r6 in r5:
        str0=str0+r6
    print(str0)
    list0.append(str0)
    r7=r2.xpath("//*[contains(@id,'viewbox')]/dl[1]/dd[5]/p/text()")
    if(r7==[]):
        r7.append('')
    print(r7[0])
    print(list0)
    list0.append(r7[0])


    w1=0.10*bg.size[1]
    for i1 in range(0,int(len(list0)-2)):
        print(i1)
        text_width = font.getsize(list0[i1])
        if(i1==0):
            font_size = int(bg.size[0] /15)
            font = ImageFont.truetype("D:/cs01/cs01/1/hwxw.ttf", font_size)
            text_width = font.getsize(list0[i1])
        if(i1==1):
            font_size = int(bg.size[0] / 27)
            font = ImageFont.truetype("D:/cs01/cs01/1/hwxw.ttf", font_size)
            text_width = font.getsize(str(list0[i1]))



        if (0.8*bg.size[0] < text_width[0]):
            font_size = int(0.8*bg.size[0] / len(str(list0[i1])))
            print(bg.size[0] ,text_width[0],bg.size[0] / text_width[0],bg.size[0]/18)
            font = ImageFont.truetype("hwxw.ttf", font_size)
            text_width = font.getsize(str(list0[i1]))


        draw.text((int((bg_size[0]-text_width[0])/2-2),w1-2), str(list0[i1]), font=font, fill='white', outline='white')
        draw.text((int((bg_size[0]-text_width[0])/2+2),w1-2), str(list0[i1]), font=font, fill='white', outline='white')
        draw.text((int((bg_size[0]-text_width[0])/2-2),w1+2), str(list0[i1]), font=font, fill='white', outline='white')
        draw.text((int((bg_size[0]-text_width[0])/2+2),w1+2), str(list0[i1]), font=font, fill='white', outline='white')
        draw.text((int((bg_size[0]-text_width[0])/2),w1), str(list0[i1]),(0,0,0), font=font)

        font_size = int(bg.size[0] / 18)
        font = ImageFont.truetype("D:/cs01/cs01/1/hwxw.ttf", font_size)
        w1 = w1 + 1.5 * text_width[1]


    #==================================
    font_size1 = int(bg.size[0] / 28)
    font1 = ImageFont.truetype("D:/cs01/cs01/1/kt.ttf", font_size1)
    t='        '+list0[-1]
    j=''
    j1=''
    j2=1
    for i in t:
        j=j+i
        #text_width =
        if(font1.getsize(j)[0]>0.8*bg_size[0]):
            j1=j1+j+'\n'
            j=''
            j2=j2+1
    j1=j1+j


    text_width1 = font1.getsize(j1)
    draw.text((0.08*bg_size[0]-1,1.03*5/3*(len(list0)+2)*text_width1[1]-1), j1, font=font1, fill='white', outline='white')
    draw.text((0.08*bg_size[0]+1,1.03*5/3*(len(list0)+2)*text_width1[1]-1), j1, font=font1, fill='white', outline='white')
    draw.text((0.08*bg_size[0]-1,1.03*5/3*(len(list0)+2)*text_width1[1]+1), j1, font=font1, fill='white', outline='white')
    draw.text((0.08*bg_size[0]+1,1.03*5/3*(len(list0)+2)*text_width1[1]+1), j1, font=font1, fill='white', outline='white')
    draw.text((0.08*bg_size[0],1.03*5/3*(len(list0)+2)*text_width1[1]), j1,(0,0,0), font=font1)

    

    # 保存图片
    bg.save('D:/3/' +'a'+str(i0)+'.png')
    #bg.show()
    print('保存成功 at {}')

