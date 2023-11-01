# 以下是一个简单的文字游戏，请自行补充完整：

print("欢迎来到探险游戏！")
print("你醒来发现自己被困在一个神秘的山洞里。")

direction = input("请问你要往哪个方向走？前、后、左、右？")

if direction == "前":
    print("你继续朝前走，发现了一个宝藏箱！")
    print("你打开宝藏箱，里面装满了黄金！")
    print("恭喜你，你赢得了游戏！")
elif direction == "后":
    print("你朝后走，发现了一个可怕的怪物！")
    print("怪物拿起了一把武器，准备攻击你！")
    weapon = input("你有没有武器可以反击？（有/没有）")
    if weapon == "有":
        print("你准备好了武器，击败了怪物！")
        print("恭喜你，你赢得了游戏！")
    elif weapon == "没有":
        print("你没有武器，怪物把你击败了！")
        print("很遗憾，你输掉了游戏。")
elif direction == "左":
    print("你朝左走，发现了一个小湖！")
    print("你走到小湖边，发现里面有一条活龙！")
    drag = input("你想怎么做？（逃跑/攻击）")
    if drag == "逃跑":
        print("你跑开了，龙没有追到你！")
        print("恭喜你，你赢得了游戏！")
    elif drag == "攻击":
        print("你想攻击龙，但龙太强大了，把你打败了！")
        print("很遗憾，你输掉了游戏。")
elif direction == "右":
    print("你朝右走，发现了一个小村庄！")
    print("村民们很友善，给你提供了帮助，带你出了这个山洞！")
    print("恭喜你，你赢得了游戏！")

else:
    print("你的输入有误，请重新开始游戏！")