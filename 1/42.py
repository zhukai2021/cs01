import subprocess  
import time  
import os  
  
# 定义FFmpeg的命令  
ffmpeg_cmd = [  
    'ffmpeg',  
    '-f', 'rawvideo',  
    '-pix_fmt', 'rgb24',  
    '-s', '640x480',  # 视频的分辨率  
    '-r', '30',  # 帧率  
    '-i', '-',  # 输入文件是标准输入（stdin）  
    '-c:v', 'libx264',  # 使用H.264编码器  
    '-c:a', 'aac',  # 使用AAC音频编码器  
    '-b:a', '192k',  # 音频比特率  
    '-f', 'mp4',  # 输出文件格式  
    '-'  # 输出文件也是标准输出（stdout）  
]  
  
# 定义视频的帧  
frames = []  
for i in range(10):  # 生成10帧  
    data = os.urandom(640 * 480 * 3)  # 随机生成一个RGB颜色值作为像素值  
    frames.append(data)  
  
# 将帧写入临时文件  
with open('frames.raw', 'wb') as f:  
    for frame in frames:  
        f.write(frame)  
  
# 使用FFmpeg合并帧并生成视频文件  
with open('frames.raw', 'rb') as f:  
    with subprocess.Popen(ffmpeg_cmd, stdin=f, stderr=subprocess.PIPE) as p:  
        p.stderr.close()  
        time.sleep(1)  # 等待FFmpeg完成视频的生成