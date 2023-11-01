import cv2

input_file= "D:/1/2.mp4"
output_file = "D:/1/output_4.mp4"
x= 300
y= 0
width= 607
height= 1080
def crop_video(input_file, output_file, x, y, width, height):
    # 打开视频文件
    video = cv2.VideoCapture(input_file)

    # 获取视频的宽度和高度
    video_width = int(video.get(cv2.CAP_PROP_FRAME_WIDTH))
    video_height = int(video.get(cv2.CAP_PROP_FRAME_HEIGHT))

    # 创建输出视频的编码器
    fourcc = cv2.VideoWriter_fourcc(*'mp4v')
    out = cv2.VideoWriter(output_file, fourcc, 25.0, (width, height))

    while True:
        # 读取视频帧
        ret, frame = video.read()

        if not ret:
            break

        # 裁剪视频帧的指定区域
        cropped_frame = frame[y:y+height, x:x+width]

        # 将裁剪后的帧写入输出视频
        out.write(cropped_frame)

        # 显示裁剪后的帧
        cv2.imshow('Cropped Frame', cropped_frame)
        if cv2.waitKey(1) & 0xFF == ord('q'):
            break

    # 释放资源
    video.release()
    out.release()
    cv2.destroyAllWindows()

    

# 调用函数进行视频裁剪
crop_video(input_file, output_file,x,y,width,height)