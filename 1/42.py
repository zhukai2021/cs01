import os

# 视频文件路径
def pic2mp4(image_path,video_path,output_path):
  
    # 输出视频文件路径
  

    # 构建FFmpeg命令
    command = f'ffmpeg -i {video_path} -i {image_path} -filter_complex "overlay=10:100" {output_path}'

    # 执行命令
    os.system(command)

# 视频文件路径
out='D:/x1/2-5/2'
xzlj='C:/Users/ly1/Downloads/24020201/'
mp4 = "D:/x1/bg1.mp4"
for f1 in range(1,2):
   pic=f'{xzlj}{f1}.png'
   print(pic,mp4,out)
   pic2mp4(pic,mp4,out)