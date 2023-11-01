import cv2
import time
import os
from PIL import Image, ImageDraw, ImageFont
from moviepy.editor import *

# mu1='E:1.png'
# mu2='E:2.png'
# mu3='E:3.png'
for i in range(6, 21, 3):

    mu1=f'E:1\\b{i}.png'
    mu2=f'E:1\\b{i+1}.png'
    mu3=f'E:1\\b{i+2}.png'
    mu0='E:1.mp4'
    bg = Image.open(mu1)  # .convert("RGBA")
    bg_size = bg.size
    videoWriter = cv2.VideoWriter(mu0, cv2.VideoWriter_fourcc(*'mp4v'), 2,bg_size)
    img1 = cv2.imread(mu1)
    img2 = cv2.imread(mu2)
    img3 = cv2.imread(mu3)
    # img1 = cv2.resize(img1, (720, 1280))
    # img2 = cv2.resize(img2, (720, 1280))
    # img3 = cv2.resize(img3, (720, 1280))
    a = 0
    while a < 3:
        videoWriter.write(img1)
        #img = cv2.resize(img, (1125, 2436))
        a += 1
    a = 0
    while a < 3:
        videoWriter.write(img2)
        #img = cv2.resize(img, (1125, 2436))
        a += 1
    a = 0
    while a < 3:
        videoWriter.write(img3)
        #img = cv2.resize(img, (1125, 2436))
        a += 1
    a = 0
    while a < 5:
        videoWriter.write(img1)
        #img = cv2.resize(img, (1125, 2436))
        a += 1
    a = 0
    while a < 5:
        videoWriter.write(img2)
        #img = cv2.resize(img, (1125, 2436))
        a += 1
    a = 0
    while a < 5:
        videoWriter.write(img3)
        #img = cv2.resize(img, (1125, 2436))
        a += 1
    videoWriter.release()
    # 加载视频文件
    video = VideoFileClip('E:1.mp4')

    # 加载音乐文件
    audio = AudioFileClip('E:62.mp3')

    # 添加音乐到视频中
    video_with_audio = video.set_audio(audio)

    # 保存视频文件
    video_with_audio.write_videofile(f'E:1\\2\\b{int(i/3+4)}.mp4', fps=video.fps)

