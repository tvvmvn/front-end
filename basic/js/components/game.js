// Canvas and pencil
let canvas = document.getElementById('myCanvas');
let ctx = canvas.getContext('2d');

// Ball
let x = canvas.width / 2;
let y = canvas.height - 30;
let ballRadius = 10;
let dx = 2;
let dy = -2;

// Paddle
let paddleHeight = 5;
let paddleWidth = 80;
let paddleX = (canvas.width - paddleWidth) / 2;
let leftPressed = false;
let rightPressed = false;


function keyDownHandler(e) {
  console.log('keydown', e.key)

  if (e.key === 'ArrowRight') {
    rightPressed = true;
  }
  if (e.key === 'ArrowLeft') {
    leftPressed = true;
  }
}

function keyUpHandler(e) {
  console.log('keyup', e.key)

  if (e.key === 'ArrowRight') {
    rightPressed = false;
  }
  if (e.key === 'ArrowLeft') {
    leftPressed = false;
  }
}

// move paddle
document.addEventListener('keydown', keyDownHandler, false);
// stop paddle
document.addEventListener('keyup', keyUpHandler, false);


function draw() {
  /*
    clearRect(x:left, y:top, x:bottom, y:right)
  */
 // let this method clear whole area
 ctx.clearRect(0, 0, canvas.width, canvas.height);

  /*
    draw ball
  */
  ctx.beginPath();
  ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
  ctx.fillStyle = '#888';
  ctx.fill();
  ctx.closePath();

  /*
    draw paddle
   */

  ctx.beginPath();
  // rect(left, top, width, height);
  ctx.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight);
  ctx.fillStyle = '#333';
  ctx.fill();
  ctx.closePath();

  // right 
  if (x > canvas.width - ballRadius) {
    dx = -dx;
  }

  // top
  if (y < 0 + ballRadius) {
    dy = -dy;
  }
  
  // bottom
  if (y > canvas.height - ballRadius) {
    dy = -dy;
  }

  // left
  if (x < 0 + ballRadius) {
    dx = -dx;
  }

  // Arrow key - left
  if (leftPressed) {
    paddleX -= 6; 

    if (paddleX < 0) {
      paddleX = 0;
    }
  }

  // Arrow key - right
  if (rightPressed) {
    paddleX += 6;

    if (paddleX + paddleWidth > canvas.width) {
      paddleX = canvas.width - paddleWidth;
    }
  }

  x += dx;
  y += dy;
}

setInterval(draw, 10);