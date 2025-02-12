from ascript.android import action
from ascript.android.node import Selector
import time
from ascript.android import system

# 根据应用名称启动. PS:启动略慢于包名启动


def download_file(url):
    try:
        # 打开手机浏览器（假设浏览器的图标在屏幕上的某个位置）
        # 这里的坐标需要根据您手机上的浏览器图标位置调整
        system.open("X浏览器")  # 点击浏览器图标打开浏览器

        # 等待浏览器启动
        time.sleep(3)

        # 获取浏览器地址栏控件
        address_bar = Selector().id("com.android.chrome:id/url_bar").find()

        if address_bar:
            # 点击地址栏
            address_bar.click()

            # 输入下载链接
            action.input(url)

            # 模拟按下回车键，访问链接
            action.Key.enter()

            # 等待页面加载
            time.sleep(5)

            # 查找下载按钮（假设下载按钮在页面上的某个位置）
            download_button = Selector().desc("下载").find()

            if download_button:
                # 点击下载按钮触发下载
                download_button.click()
                print("下载已开始，等待下载完成...")
                time.sleep(10)  # 等待文件下载完成（根据文件大小调整时间）

                # 提示用户下载完成
                action.catch_click("点击屏幕任意位置以确认下载完成")
                print("下载完成！")
            else:
                print("未找到下载按钮，请手动完成下载。")
        else:
            print("未找到浏览器地址栏，请手动输入链接。")

    except Exception as e:
        print(f"下载过程中出错: {e}")


# 下载链接
url = "http://152.69.193.99:5244/d/bdp1/d1/1.mp4?sign=tVhGNnEk0PjJ_YksS4vYmEOjorCuBeipi_UhJ-ZIS-A=:0"
download_file(url)