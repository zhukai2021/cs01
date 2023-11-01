import cv2
from PIL import Image, ImageDraw, ImageFont
import time
import numpy as np

# 设置视频参数
FPS = 10
VIDEO_WIDTH = 640
VIDEO_HEIGHT = 480
VIDEO_FILENAME = '1\\text_video.mp4'

# 设置字体和字号
FONT_FILENAME = '1\\kt.ttf'
FONT_SIZE = 30

# 创建视频写入器
fourcc = cv2.VideoWriter_fourcc(*'mp4v')
video_writer = cv2.VideoWriter(VIDEO_FILENAME, fourcc, FPS, (VIDEO_WIDTH, VIDEO_HEIGHT))

# 创建空白图片
img = Image.new('RGB', (VIDEO_WIDTH, VIDEO_HEIGHT), color='black')
draw = ImageDraw.Draw(img)

# 加载字体
font = ImageFont.truetype(FONT_FILENAME, FONT_SIZE)

# 待显示的字符串
text = '欲穷千里目，更上一层楼'

# 逐个绘制字符
for i in range(len(text)):
    # 绘制当前字符
    draw.text((10, 10), text[:i+1], font=font, fill='white')
    
    # 将图片转换为OpenCV格式并写入视频
    img_cv = cv2.cvtColor(np.array(img), cv2.COLOR_RGB2BGR)
    video_writer.write(img_cv)
    
    # 等待一段时间，控制绘制速度
    time.sleep(0.1)

# 释放资源
video_writer.release()