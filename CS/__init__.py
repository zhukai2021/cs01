
print("Hello AS!")

print("Hello World")
from ascript.android import system


#system.open("快手免费小说")

from ascript.android.node import Selector


# node =  Selector().text("^书架$")

# if node.find():
#     node.parent(1).click().find()
#     print('找到书架')
    
# else:
#     print('没有找到任何控件')

#Selector().id("com.kuaishou.kgx.novel:id/read_info").text("未读").parent(1).click().find()

#click(,0.8*y)

# 获取屏幕信息
# from ascript.android.system import Device
# display = Device.display()
# x,y=display.widthPixels,display.heightPixels
# from ascript.android import action
# for i in range(1, 1111):  

#     action.click(0.95*x,0.8*y)
#     import random  
#     import time
#     time.sleep(random.randint(11, 24))

# node =  Selector().text("^今日已达上限$")

# if node.find():
#     print('找到今日已达上限')
    
# else:
#     print('没有找到任何控件')