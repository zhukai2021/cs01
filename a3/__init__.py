from ascript.android import action
import time
import random

# 获取屏幕高度和宽度（如果无法通过 action.screen 获取，可以硬编码）
screen_width = 1080  # 替换为实际屏幕宽度
screen_height = 2400  # 替换为实际屏幕高度

# 定义滑动范围
start_x = screen_width // 2  # 起始X坐标（屏幕中心）
start_y = screen_height * 0.8  # 起始Y坐标（屏幕下方80%）
end_x = screen_width // 2  # 结束X坐标（屏幕中心）
end_y = screen_height * 0.2  # 结束Y坐标（屏幕上方20%）
print(f"第0 次向上滑动完成")
# 主函数
def main():
    for i in range(100):  # 滑动100次
        action.slide(start_x, start_y, end_x, end_y, 200)  # 模拟向上滑动
        print(f"第 {i + 1} 次向上滑动完成")
        
        # 随机等待5到10秒
        wait_time = random.uniform(5, 10)
        time.sleep(wait_time)
        
        # 模拟向下滑动（返回）
        # action.slide(end_x, end_y, start_x, start_y, 200)
        # print(f"第 {i + 1} 次向下滑动完成")
        
        # 随机等待5到10秒
        wait_time = random.uniform(5, 10)
        time.sleep(wait_time)

# 执行主函数

main()
 