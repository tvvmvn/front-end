var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

var width = 20;
var height = 20;
var x = 40;
var y = 0;

var vx = 0;
var vy = 0;
var s = 20;
var d = 'right';

var bx = 20;
var by = 0;
var bbx = 0;
var bby = 0;

var snake = [{ x: 40, y: 0 }, { x: 20, y: 0 }, { x: 0, y: 0 }];

setInterval(draw, 10);
addEventListener('keydown', controller);

function clearCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function draw() {
  clearCanvas();

  // loading vector to move
  if (d === 'right') { vx++; }
  if (d === 'down') { vy++; }
  if (d === 'left') { vx--; }
  if (d === 'up') { vy--; }

  // move to right 
  if (vx > s) {
    bbx = bx; bby = by;
    bx = x; by = y;
    x += s;

    vx = 0
  }

  // move to down
  if (vy > s) {
    bbx = bx; bby = by;
    bx = x; by = y;
    y += s;

    vy = 0;
  }

  // move to left
  if (vx < -s) {
    bbx = bx; bby = by;
    bx = x; by = y;
    x -= s;

    vx = 0;
  }

  // move to up
  if (vy < -s) {
    bbx = bx; bby = by;
    bx = x; by = y;
    y -= s;
    
    vy = 0;
  }
  
  // body
  ctx.fillStyle = '#888';
  ctx.fillRect(bbx, bby, width, height);
  ctx.fillRect(bx, by, width, height);
  
  // head
  ctx.fillStyle = '#000';
  ctx.fillRect(x, y, width, height);
}

function controller(e) {
  var key = e.key;

  if (key === 'ArrowRight') {
    d = 'right'
    vx += s;
  }

  if (key === 'ArrowDown') {
    d = 'down'
    vy += s;
  }

  if (key === 'ArrowLeft') {
    d = 'left'
    vx -= s;
  }

  if (key === 'ArrowUp') {
    d = 'up'
    vy -= s;
  }
}









var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

var vx = 0;
var vy = 0;
var s = 20;
var prevD;
var d = 'right';

var width = 20;
var height = 20;

var snake = [
  { x: 80, y: 0 }, 
  { x: 60, y: 0 }, 
  { x: 40, y: 0 }, 
  { x: 20, y: 0 }, 
  { x: 0, y: 0 }
]

var { x, y } = snake[0];

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

  // change direction
  if (d !== prevD) { 
    if (d === 'right') { x += 20; }
    if (d === 'down') { y += 20; }
    if (d === 'left') { x -= 20; }
    if (d === 'up') { y -= 20; }
  }

  // loading vector to move
  if (d === 'right') { vx++; }
  if (d === 'down') { vy++; }
  if (d === 'left') { vx--; }
  if (d === 'up') { vy--; }

  // move to right 
  if (vx > s) {
    x = snake[0].x + s;
    move();
  }

  // move to down
  if (vy > s) {
    y = snake[0].y + s;
    move();
  }

  // move to left
  if (vx < -s) {
    x = snake[0].x - s;
    move();
  }

  // move to up
  if (vy < -s) {
    y = snake[0].y - s;
    move();
  }

  for (var i = 0; i < snake.length; i++) {
    ctx.fillRect(snake[i].x, snake[i].y, width, height);
  }

  prevD = d;
}

function move() {
  snake[4] = snake[3];
  snake[3] = snake[2];
  snake[2] = snake[1];
  snake[1] = snake[0];
  snake[0] = { x, y };
  
  vx = 0;
  vy = 0;
}

function controller(e) {
  var key = e.key;

  if (key === 'ArrowRight') {
    d = 'right'
  }

  if (key === 'ArrowDown') {
    d = 'down'
  }

  if (key === 'ArrowLeft') {
    d = 'left'
  }

  if (key === 'ArrowUp') {
    d = 'up'
  }
}