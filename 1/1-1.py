# 导入所需的库
import pygame
import random
import sys
import time
from collections import deque
pygame.init()
# 设置窗口大小和网格大小
SCREEN_WIDTH = 600
SCREEN_HEIGHT = 480
SIZE = 20

# 定义颜色常量
BLACK = (0, 0, 0) # 网格线颜色
WHITE = (255, 255, 255) # 文字颜色
RED = (255, 0, 0) # GAME OVER 的字体颜色
GREEN = (0, 255, 0) # 蛇的颜色
BLUE = (0, 0, 255) # 食物颜色
BG_COLOR = (40, 40, 60) # 背景色

# 定义方向常量
UP = (0, -1)
DOWN = (0, 1)
LEFT = (-1, 0)
RIGHT = (1, 0)

# 定义字体
FONT1 = pygame.font.SysFont('SimHei', 24) # 得分的字体
FONT2 = pygame.font.Font(None, 72) # GAME OVER 的字体

# 定义游戏区域的坐标范围
SCOPE_X = (0, SCREEN_WIDTH // SIZE - 1)
SCOPE_Y = (2, SCREEN_HEIGHT // SIZE - 1)

# 定义打印文本的函数
def print_text(screen, font, x, y, text, color=WHITE):
    img_text = font.render(text, True, color)
    screen.blit(img_text, (x, y))

# 定义初始化蛇的函数
def init_snake():
    snake = deque()
    snake.append((2, SCOPE_Y[0]))
    snake.append((1, SCOPE_Y[0]))
    snake.append((0, SCOPE_Y[0]))
    return snake

# 定义创建食物的函数
def create_food(snake):
    food_x = random.randint(SCOPE_X[0], SCOPE_X[1])
    food_y = random.randint(SCOPE_Y[0], SCOPE_Y[1])
    while (food_x, food_y) in snake: # 防止食物出现在蛇身上
        food_x = random.randint(SCOPE_X[0], SCOPE_X[1])
        food_y = random.randint(SCOPE_Y[0], SCOPE_Y[1])
    return food_x, food_y

# 定义游戏结束的函数
def game_over(screen):
    fwidth, fheight = FONT2.size('GAME OVER')
    print_text(screen, FONT2, (SCREEN_WIDTH - fwidth) // 2, (SCREEN_HEIGHT - fheight) // 2, 'GAME OVER', RED)
    pygame.display.update()
    pygame.time.wait(2000)
    pygame.quit()
    sys.exit()

# 主函数
def main():
    pygame.init() # 初始化pygame
    screen = pygame.display.set_mode((SCREEN_WIDTH, SCREEN_HEIGHT)) # 创建窗口
    pygame.display.set_caption('贪吃蛇') # 设置窗口标题
    clock = pygame.time.Clock() # 创建时钟对象
    snake = init_snake() # 初始化蛇
    food_x, food_y = create_food(snake) # 创建食物
    direction = RIGHT # 初始方向向右
    change_to = direction # 改变方向
    score = 0 # 得分
    orispeed = 0.5 # 初始速度
    speed = orispeed # 当前速度
    last_move_time = None # 上次移动时间
    pause = False # 是否暂停
    game_over_flag = False # 是否游戏结束
    start = False # 是否开始游戏

    while True: # 游戏主循环
        for event in pygame.event.get(): # 处理事件
            if event.type == pygame.QUIT: # 点击关闭按钮
                pygame.quit()
                sys.exit()
            elif event.type == pygame.KEYDOWN: # 按键事件
                if event.key == pygame.K_RETURN: # 回车键
                    if game_over_flag: # 如果游戏结束，重新开始
                        start = True
                        game_over_flag = False
                        snake = init_snake()
                        food_x, food_y = create_food(snake)
                        direction = RIGHT
                        change_to = direction
                        score = 0
                        speed = orispeed
                        last_move_time = time.time()
                elif event.key == pygame.K_SPACE: # 空格键
                    if not game_over_flag: # 如果游戏没有结束，暂停或继续
                        pause = not pause
                elif event.key in (pygame.K_w, pygame.K_UP): # W或上方向键
                    if change_to[1] != 1: # 防止掉头
                        change_to = UP
                elif event.key in (pygame.K_s, pygame.K_DOWN): # S或下方向键
                    if change_to[1] != -1: # 防止掉头
                        change_to = DOWN
                elif event.key in (pygame.K_a, pygame.K_LEFT): # A或左方向键
                    if change_to[0] != 1: # 防止掉头
                        change_to = LEFT
                elif event.key in (pygame.K_d, pygame.K_RIGHT): # D或右方向键
                    if change_to[0] != -1: # 防止掉头
                        change_to = RIGHT

        # 填充背景色
        screen.fill(BG_COLOR)
        # 画网格线
        for x in range(SIZE, SCREEN_WIDTH, SIZE):
            pygame.draw.line(screen, BLACK, (x, SCOPE_Y[0] * SIZE), (x, SCREEN_HEIGHT))
        for y in range(SCOPE_Y[0] * SIZE, SCREEN_HEIGHT, SIZE):
            pygame.draw.line(screen, BLACK, (0, y), (SCREEN_WIDTH, y))
        # 显示标题和得分
        print_text(screen, FONT1, 30, 7, '贪吃蛇')
        print_text(screen, FONT1, 450, 7, f'得分: {score}')
        # 移动蛇
        if not pause: # 如果没有暂停
            curTime = time.time() # 获取当前时间
            if curTime - last_move_time > speed: # 如果达到移动间隔
                if start: # 如果游戏开始
                    direction = change_to # 改变方向
                    next_s = (snake[0][0] + direction[0], snake[0][1] + direction[1]) # 计算下一个位置
                    if next_s[0] == food_x and next_s[1] == food_y: # 如果吃到食物
                        snake.appendleft(next_s) # 蛇头增加
                        food_x, food_y = create_food(snake) # 重新生成食物
                        score += 10 # 加分
                        speed = orispeed - 0.03 * (score // 100) # 提速
                    else: # 如果没有吃到食物
                        if SCOPE_X[0] <= next_s[0] <= SCOPE_X[1] and SCOPE_Y[0] <= next_s[1] <= SCOPE_Y[1] and next_s not in snake: # 如果没有撞墙或撞到自己
                            snake.appendleft(next_s) # 蛇头增加
                            snake.pop() # 蛇尾减少
                        else: # 如果撞墙或撞到自己
                            game_over_flag = True # 游戏结束
                last_move_time = curTime # 更新上次移动时间
        # 画食物
        pygame.draw.rect(screen, BLUE, (food_x * SIZE, food_y * SIZE, SIZE, SIZE))
        # 画蛇
        for s in snake:
            pygame.draw.rect(screen, GREEN, (s[0] * SIZE, s[1] * SIZE, SIZE, SIZE))
        # 判断游戏是否结束
        if game_over_flag:
            if start:
                game_over(screen) # 显示游戏结束画面
            else:
                print_text(screen, FONT2, (SCREEN_WIDTH - fwidth) // 2, (SCREEN_HEIGHT - fheight) // 2, '按回车开始', RED) # 显示开始提示
        # 刷新屏幕
        pygame.display.flip()
        # 设置帧率
        clock.tick(60)

# 运行主函数
if __name__ == '__main__':
    main()
