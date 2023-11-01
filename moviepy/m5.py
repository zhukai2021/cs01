

from moviepy.editor import VideoFileClip,ImageClip,CompositeVideoClip

#from moviepy.editor import *
video =VideoFileClip("11.mp4")
from PIL import Image
mask=Image.new('RGBA',(video.size[0],10),color=(255,255,255))
mask3=Image.new('RGBA',(10,video.size[1]),color=(255,255,255))
mask4=Image.new('RGBA',(video.size[0],video.size[1]),color=(0,0,0))
# #im0=Image.new('RGB', (400,600), color=(202,209,10))
mask.save('007.png')
mask3.save('0071.png')
mask4.save('0072.png')
#mask.rotate(90).save('0071.png')
# im0=im0.transpose(Image.ROTATE_90)
#mask.transpose(Image.ROTATE_90).save('0071.png')
#mask.show()
#print(type(mask))

mask=mask1=ImageClip('007.png')
mask2=mask3 =ImageClip('0071.png')
mask4 =ImageClip('0072.png')
#print(type(mask1))





#设置一个图片对象
# position= ()#位置
# duration =v #时长
#mask =ImageClip("3.png")
#mask4=mask.set_opacity(0.8)
mask   =mask.set_position((0,video.size[1]*0.33)).set_duration(video.duration)
mask1 =mask1.set_position((0,video.size[1]*0.66)).set_duration(video.duration)
mask2 =mask2.set_position((video.size[0]*0.33,0)).set_duration(video.duration)
mask3 =mask3.set_position((video.size[0]*0.66,0)).set_duration(video.duration)
mask4  =mask4.set_position((0,0)).set_duration(video.duration).set_opacity(0.5)
#mask =mask.resize(height=500)
print(video.size)

clip_list =[video,mask,mask1,mask2,mask3,mask4] #视频列表，后面优先级更高，mask放到后面
final_clip =CompositeVideoClip(clip_list)
final_clip.write_videofile("mask.mp4")