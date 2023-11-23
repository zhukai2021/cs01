# import subprocess

# # 设置输入视频路径和输出路径
# input_video_path = "E:924.mp4"
# output_video_path = "E:output_925.mp4"
# # 设置目标宽度和高度
# target_width = 1080
# target_height = 1920

# # 构建FFmpeg命令
# ffmpeg_cmd = f'ffmpeg -i {input_video_path} -vf "scale={target_width}:{target_height}:force_original_aspect_ratio=decrease,pad={target_width}:{target_height}:(ow-iw)/2:(oh-ih)/2" -c:a copy {output_video_path}'

# # 执行FFmpeg命令
# subprocess.call(ffmpeg_cmd, shell=True)

# print("转换完成！")


import subprocess

# 设置输入视频路径、输出路径和背景图片路径
input_video_path = "D:/1/1.mp4"
output_video_path = "D:/1/output_926.mp4"
background_image_path = "D:/1/9242.png"

# 设置目标宽度和高度
target_width = 1080
target_height = 1920

# 构建FFmpeg命令
ffmpeg_cmd = f'ffmpeg -i {input_video_path} -i {background_image_path} -filter_complex "[0:v]scale={target_width}:{target_height}:force_original_aspect_ratio=decrease,pad={target_width}:{target_height}:(ow-iw)/2:(oh-ih)/2 [v0]; [v0][1:v]overlay=(main_w-overlay_w)/2:(main_h-overlay_h)/2" -c:a copy {output_video_path}'

# 执行FFmpeg命令
subprocess.call(ffmpeg_cmd, shell=True)

print("转换完成！")