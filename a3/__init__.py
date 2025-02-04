from airscript.action import slide
import time

# 定义滑动操作
def swipe_screen():
    slide(200, 1200, 300, 300, 200)  # 从 (200, 1200) 滑动到 (300, 300) 滑动时间为 200 毫秒

# 循环执行滑动操作
end_time = time.time() + 100  # 总共执行 100 秒

while time.time() < end_time:
    swipe_screen()  # 执行滑动操作
    time.sleep(3)  # 每 3 秒执行一次