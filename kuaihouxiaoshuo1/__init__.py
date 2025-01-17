from airscript.action import slide
import time

#928

# 从(100,200) 滑动到 (300,400) 滑动时间为3000毫秒

# 写一个循环,每3秒执行一次 ,执行100秒 
# for i in range(132):
#     slide(200,800,300,300,200)
#     time.sleep(6)



# 获取屏幕信息
from ascript.android.system import Device
display = Device.display()
# 屏幕宽度
print(display.widthPixels)
# 屏幕高度
print(display.heightPixels)
# 屏幕密度
print(display.density)
import random
from ascript.android import action
for i in range(1032):
    
    action.click(display.widthPixels*0.95,display.heightPixels*0.8)
    #随机延迟15到30秒
    print(i)
    
    time.sleep(15+15*random.random())

