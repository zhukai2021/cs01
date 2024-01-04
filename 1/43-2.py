import os

# 视频文件路径
video_path = "D:/1/2-1.mp4"
# 图片文件路径
image_path = 'D:/1/a101.png'
# 输出视频文件路径
output_path = 'D:/1/output.mp4'

# 构建FFmpeg命令
command = f'ffmpeg -i {video_path} -i {image_path} -filter_complex "overlay=10:100" {output_path}'

# 执行命令
os.system(command)
