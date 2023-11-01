# # Import everything needed to edit video clips
# from moviepy.editor import *
#
# # Load myHolidays.mp4 and select the subclip 00:00:50 - 00:00:60
# clip = VideoFileClip("yms.mp4").subclip(50,60)
#
# # Reduce the audio volume (volume x 0.8)
# clip = clip.volumex(0.8)
#
# # Generate a text clip. You can customize the font, color, etc.
# txt_clip = TextClip("My Holidays 2013",fontsize=70,color='white')
#
# # Say that you want it to appear 10s at the center of the screen
# txt_clip = txt_clip.set_pos('center').set_duration(10)
#
# # Overlay the text clip on the first video clip
# video = CompositeVideoClip([clip, txt_clip])
#
# # Write the result to a file (many options available !)
# video.write_videofile("myHolidays_edited.webm")

import matplotlib.pyplot as plt
import numpy as np
from moviepy.editor import VideoClip
from moviepy.video.io.bindings import mplfig_to_npimage

x = np.linspace(-2, 2, 200)

duration = 10

fig, ax = plt.subplots()
def make_frame(t):
    ax.clear()
    ax.plot(x, np.sinc(x**2) + np.sin(x + 2*np.pi/duration * t), lw=3)
    ax.set_ylim(-1.5, 2.5)
    return mplfig_to_npimage(fig)

animation = VideoClip(make_frame, duration=duration)
#animation.save_frame('fil.png', t=0)
#animation.write_gif("sinc_mpl.gif", fps=20)
#animation = np.float(animation)

#animation.write_videofile('66.mp4',fps=32)

# plt.imshow(x, cmap='RdBu')
# animation = plt.colorbar(label='color bar settings')
#plt.show()
#animation.ipython_display(fps=20, loop=True, autoplay=True)
# path='bird_small.png'
# image=plt.imread(path)
#plt.imshow(animation)
#animation.sho