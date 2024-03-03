
print("Hello AS!")

print("Hello World")

import random  
import time
from ascript.android import system
from ascript.android.node import Selector
from ascript.android.system import Device
from ascript.android import action

system.open("快手免费小说")
time.sleep(11)


node =  Selector().text("^书架$")

if node.find():
    node.parent(1).click().find()
    time.sleep(5)
    print('找到书架')
    
else:
    print('没有找到任何控件')

Selector().id("com.kuaishou.kgx.novel:id/read_info").text("未读").parent(1).click().find()
time.sleep(5)
display = Device.display()
x,y=display.widthPixels,display.heightPixels

for i in range(1, 1511):  

    action.click(0.95*x,0.8*y)

    time.sleep(random.randint(11, 24))


# node =  Selector().text("^今日已达上限$")

# if node.find():
#     print('找到今日已达上限')
    
# else:
#     print('没有找到任何控件')


# node =  Selector().text("看视频领金币")

# if node.find():
#     node.click().find()
#     time.sleep(5)
#     print('找到看视频领金币')
    
# else:
#     print('没有看视频领金币')


# node =  Selector().id("com.kuaishou.kgx.novel:id/video_close_icon")

# if node.find():
#     node.click().find()
#     time.sleep(5)
#     print('找到看视频领金币')
    
# else:
#     print('没有看视频领金币')