var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

var width = 20;
var height = 20;

var dx = 0;
var dy = 0;

var snake = { x: 20, y: 0 };

var d = 'right';

setInterval(draw, 10);
addEventListener('keydown', controller);

function draw() {
  clearCanvas();
  drawSnake();
}

function clearCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function drawSnake() {

  if (d === 'right') {
    dx++;
  }

  if (d === 'down') {
    dy++;
  }

  if (d === 'left') {
    dx--;
  }

  if (d === 'up') {
    dy--;
  }

  if (dx > 20) {
    snake.x += 20;
    
    dx = 0;
    dy = 0;
  }

  if (dx < -20) {
    snake.x -= 20;
    
    dx = 0;
    dy = 0;
  }

  if (dy > 20) {
    snake.y += 20;
    
    dx = 0;
    dy = 0;
  }

  if (dy < -20) {
    snake.y -= 20;
    
    dx = 0;
    dy = 0;
  }
  
  ctx.fillRect(snake.x, snake.y, width, height);
}

function controller(e) {
  var key = e.key;

  if (e.repeat) return;

  if (key === 'ArrowRight') {
    d = 'right';
  }

  if (key === 'ArrowDown') {
    d = 'down'
  }

  if (key === 'ArrowLeft') {
    d = 'left'
  }

  if (key === 'ArrowUp') {
    d = 'up';
  }
}