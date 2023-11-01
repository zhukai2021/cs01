# 导入需要的包
#coding=utf-8
from PIL import Image, ImageDraw, ImageFont
import string
import os
import warnings
import requests
warnings.filterwarnings("ignore")

# 背景尺寸
#bg_size = (1080, 1920)
# 生成一张尺寸为 750x1334 背景色为黄色的图片
#bg = Image.new('RGB', bg_size, color=(255,255,0))
bg=Image.open("7203.png")#.convert("RGBA")
bg_size =bg.size



# 字体大小
font_size = int(bg.size[0]/30)
# 文字内容
font = ImageFont.truetype("hwxw.ttf", font_size)
draw = ImageDraw.Draw(bg)
t1='啊啊啊'
t='s的响琐琐碎碎琐琐碎碎仄仄仄仄仄仄仄仄仄仄仄仄仄仄仄仄仄仄仄仄仄仄仄仄仄仄仄吱吱吱吱琐琐碎碎琐琐\n碎碎琐琐碎碎少时诵仄仄仄仄仄仄仄仄仄仄仄仄仄仄仄仄仄仄仄仄仄仄仄仄仄仄仄仄仄仄仄仄仄仄诗书少时诵诗\n书少时诵诗书少时诵诗\n书\n是\n水水水水试试所三三四四琐\n琐碎碎所声。小熊好\n喜欢自己的小花伞啊！他每\n天起床\n后的第一件事，就是\n跑，好像真的快下雨了，连s地唱\n着歌，好像在说：“雨滴\n雨滴快快下！”不一会儿，真的下\n雨了，雨滴“s伞在\n雨中跑\n跑跳跳，快活极了！'



text_width = font.getsize(t1)
draw.text(    (  (bg_size[0]-text_width[0])/2,5*text_width[1]  )    , t1,(0,0,0), font=font)


j=''
j1=''
j2=1
print(type('\n'))
for i in t:
    j=j+i
    # print(t.index(i))
    # print(t[t.index(i)])
    #text_width =
    if i == '\n':
        j1 = j1 + j
        j = ''
        j2 = j2 + 1
    if(font.getsize(j)[0]>0.80*bg_size[0]):
        j1=j1+j+'\n'
        j=''
        j2=j2+1




j1=j1+j


text_width = font.getsize(j1)
draw.text(    (  0.1*bg_size[0],6*text_width[1]  )    , j1,(0,0,0), font=font)

#==================================


# 要保存图片的路径
img_path = os.path.join('.', 'output', 'center_text.jpg')

# 保存图片
#bg.save(img_path)
bg.show()
print('保存成功 at {}'.format(img_path))