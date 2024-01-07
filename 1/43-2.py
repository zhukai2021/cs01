import os

# 视频文件路径
for f1 in range(500,600):
    video_path = "D:/1/bg1.mp4"
    # 图片文件路径
    image_path = f'D:/2/a{str(f1)}.png'
    # 输出视频文件路径
    output_path = f'D:/33/a{str(f1)}.mp4'

    # 构建FFmpeg命令
    command = f'ffmpeg -i {video_path} -i {image_path} -filter_complex "overlay=10:100" {output_path}'

    # 执行命令
    os.system(command)
