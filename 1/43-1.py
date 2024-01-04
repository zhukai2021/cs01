
input_file= "D:/1/2.mp4"
output_file = "D:/1/output_5.mp4"
input_audio= "D:/1/1001.mp3"
x= 600
y= 0
width= 607
height= 1080

from moviepy.editor import VideoFileClip, AudioFileClip
from moviepy.audio.fx.all import audio_loop
import os
def hs1(jg1):
    background_image_path = f"D:/31/a{jg1}.png"
    if os.path.exists(background_image_path):
        print("文件存在")
    else:
        print("文件不存在")
        return

    def crop_video_with_looping_audio(input_video, input_audio, output_file, x, y, width, height):
        # 打开音频文件并循环
        audio = AudioFileClip(input_audio)
        # 获取音频剪辑


        # 打开视频文件
        video = VideoFileClip(input_video)
        video = video.subclip(0, audio.duration)


        # 检查视频尺寸
        video_width, video_height = video.size
        if x + width > video_width or y + height > video_height:
            raise ValueError("裁剪区域超出视频范围")

        # 裁剪视频的指定区域
        cropped_video = video.subclip(0, video.duration).crop(x1=x, y1=y, x2=x+width, y2=y+height)

        # 打开音频文件并循环
        
        looped_audio = audio_loop(audio, duration=cropped_video.duration)

        # 将音频设置到裁剪后的视频中
        video_with_audio = cropped_video.set_audio(looped_audio)

        # 保存带有循环音频的视频
        video_with_audio.write_videofile(output_file, codec="libx264", audio_codec="aac")

    # 调用函数进行视频裁剪并添加循环音频
    #crop_video_with_looping_audio('input.mp4', 'audio.mp3', 'output.mp4', 100, 100, 400, 300)
    crop_video_with_looping_audio(input_file, input_audio,output_file,x,y,width,height)
    import subprocess


    input_video_path = "D:/1/output_5.mp4"
    output_video_path = f"D:/1/2/a{jg1}.mp4"
    background_image_path = f"D:/31/a{jg1}.png"

    # 设置目标宽度和高度
    target_width = 1080
    target_height = 1920

    # 构建FFmpeg命令
    ffmpeg_cmd = f'ffmpeg -i {input_video_path} -i {background_image_path} -filter_complex "[0:v]scale={target_width}:{target_height}:force_original_aspect_ratio=decrease,pad={target_width}:{target_height}:(ow-iw)/2:(oh-ih)/2 [v0]; [v0][1:v]overlay=(main_w-overlay_w)/2:(main_h-overlay_h)/2" -c:a copy -y {output_video_path}'

    # 执行FFmpeg命令
    subprocess.call(ffmpeg_cmd, shell=True)

    print("转换完成！")

for i1 in range(101,104):
    hs1(str(i1))
print("转换完成！")

