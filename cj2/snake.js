// 获取游戏板
var gameBoard = document.getElementById('game-board');

// 设置游戏板的大小
var gridSize = 20;
var rows = Math.floor(gameBoard.offsetHeight / gridSize);
var columns = Math.floor(gameBoard.offsetWidth / gridSize);

// 定义贪吃蛇的初始位置和长度
var snake = [
  {x: Math.floor(columns / 2), y: Math.floor(rows / 2)},
  {x: Math.floor(columns / 2) + 1, y: Math.floor(rows / 2)},
  {x: Math.floor(columns / 2) + 2, y: Math.floor(rows / 2)}
];

// 定义初始方向
var direction = 'left';

// 定义得分和食物的位置
var score = 0;
var food = generateFood();

// 监听键盘事件，改变方向
document.addEventListener('keydown', function(event) {
  if (event.keyCode == 37 && direction != 'right') {
    direction = 'left';
  } else if (event.keyCode == 38 && direction != 'down') {
    direction = 'up';
  } else if (event.keyCode == 39 && direction != 'left') {
    direction = 'right';
  } else if (event.keyCode == 40 && direction != 'up') {
    direction = 'down';
  }
});

// 游戏循环
setInterval(function() {
  moveSnake();
}, 100);

// 移动贪吃蛇
function moveSnake() {
  // 将新的贪吃蛇头部添加到贪吃蛇的数组中
  var newHead = {x: snake[0].x, y: snake[0].y};
  if (direction == 'left') {
    newHead.x--;
  } else if (direction == 'up') {
    newHead.y--;
  } else if (direction == 'right') {
    newHead.x++;
  } else if (direction == 'down') {
    newHead.y++;
  }
  snake.unshift(newHead);

  // 检查贪吃蛇是否吃到食物
  if (snake[0].x == food.x && snake[0].y == food.y) {
    // 生成新的食物和增加分数
    food = generateFood();
    score += 10;
  } else {
    // 从贪吃蛇的数组中删除尾部，以便贪吃蛇动起来
    snake.pop();
  }

  // 检查贪吃蛇是否碰到边界或者自己的身体
if (snake[0].x < 0 || snake[0].x >= columns || snake[0].y < 0 || snake[0].y >= rows) {
// 游戏结束
alert('游戏结束！得分：' + score);
location.reload();
}
for (var i = 1; i < snake.length; i++) {
if (snake[0].x == snake[i].x && snake[0].y == snake[i].y) {
// 游戏结束
alert('游戏结束！得分：' + score);
location.reload();
}
}

// 更新游戏板上的贪吃蛇和食物
drawSnake();
drawFood();
}

// 生成新的食物
function generateFood() {
var foodX = Math.floor(Math.random() * columns);
var foodY = Math.floor(Math.random() * rows);
return {x: foodX, y: foodY};
}

// 在游戏板上绘制贪吃蛇
function drawSnake() {
var snakeElements = document.getElementsByClassName('snake');
while (snakeElements.length > 0) {
snakeElements[0].parentNode.removeChild(snakeElements[0]);
}
for (var i = 0; i < snake.length; i++) {
var snakeElement = document.createElement('div');
snakeElement.className = 'snake';
snakeElement.style.left = (snake[i].x * gridSize) + 'px';
snakeElement.style.top = (snake[i].y * gridSize) + 'px';
gameBoard.appendChild(snakeElement);
}
}

// 在游戏板上绘制食物
function drawFood() {
var foodElement = document.getElementsByClassName('food')[0];
if (foodElement) {
foodElement.parentNode.removeChild(foodElement);
}
var newFoodElement = document.createElement('div');
newFoodElement.className = 'food';
newFoodElement.style.left = (food.x * gridSize) + 'px';
newFoodElement.style.top = (food.y * gridSize) + 'px';
gameBoard.appendChild(newFoodElement);
}