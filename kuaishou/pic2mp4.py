import cv2
import time
import os
from PIL import Image, ImageDraw, ImageFont

for i in range(1,1000):
    mu1='E:\one1t\OneDrive - 356h31\pic\8-31/a'+str(i)+'.png'
    mu2='E:\one1t\OneDrive - 356h31\pic\832/a'+str(i)+'.mp4'
    isExist = os.path.exists(mu1)
    print(isExist)
    if (isExist==False):
        continue
    bg = Image.open(mu1)  # .convert("RGBA")
    bg_size = bg.size
    videoWriter = cv2.VideoWriter(mu2, cv2.VideoWriter_fourcc(*'MJPG'), 0.5,bg_size)
    img = cv2.imread(mu1)
    a = 0
    while a < 8:
        videoWriter.write(img)
        #img = cv2.resize(img, (1125, 2436))
        a += 1
    videoWriter.release()




# videoWriter.write(img)
# 如下让每张图显示1秒，具体与fps相等
# retval = cv.VideoWriter.open(filename, fourcc, fps, frameSize[, isColor])
# - 保存视频为test.avi，可以选择mp4等
# - fps为25,即每秒25张图片
# - 视频尺寸大小为1920,1080
# - isColor可以为true,flase选择是否有颜色

# for i in range(1, 2):
#     # 加载图片，图片更多可以改变上面的10
#     #img = cv2.imread('./img/p' + str(i) + '.jpg')
#     img = cv2.imread('7202.jpg')
#     img = cv2.resize(img, (720, 1280))
    # 如果每张图片为只显示一下，就用如下代码
    # videoWriter.write(img)

    # 如下让每张图显示1秒，具体与fps相等
#     a = 0
#     while a < 12:
#         videoWriter.write(img)
#         a += 1
#
# videoWriter.release()