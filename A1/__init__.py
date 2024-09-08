from airscript.action import slide
import time



# 从(100,200) 滑动到 (300,400) 滑动时间为3000毫秒

# 写一个循环,每3秒执行一次 ,执行100秒 
for i in range(32):
    slide(200,1200,300,400,900)