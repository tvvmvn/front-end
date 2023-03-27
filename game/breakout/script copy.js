// Canvas and Pencil
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
let paddleWidth = 75;
let paddleX = (canvas.width - paddleWidth) / 2;
let leftPressed = false;
let rightPressed = false;


// Bricks
let brickRowCount = 3;
let brickColumnCount = 5;
let brickWidth = 75;
let brickHeight = 20;
let brickMargin = 10;
let brickOffsetLeft = 30;
let brickOffsetTop = 30;
let bricks = []

for (let c = 0; c < brickColumnCount; c++) {
  bricks[c] = [];

  for (let r = 0; r < brickRowCount; r++) {
    bricks[c][r] = { x: 0, y: 0, status: 1 }
  }
}

console.log(bricks);

// Score
let score = 0;


// Lives
let lives = 2;


function drawBall() {
  ctx.beginPath();
  ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
  ctx.fill();
}

function drawPaddle() {
  // fillRect(left, top, width, height);
  ctx.fillRect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight);
}

function drawBricks() {
  for (let c = 0; c < brickColumnCount; c++) {  
    for (let r = 0; r < brickRowCount; r++) {
      let brick = bricks[c][r];
      
      brick.x = c * (brickWidth + brickMargin) + brickOffsetLeft;
      brick.y = r * (brickHeight + brickMargin) + brickOffsetTop;
      
      // Draw alive bricks
      if (brick.status === 1) {
        ctx.fillRect(brick.x, brick.y, brickWidth, brickHeight);
  
        // when collision occur
        let inBlockHorizontal = x > brick.x - ballRadius && x < brick.x + brickWidth + ballRadius;
        let inBlockVertical = y > brick.y - ballRadius && y < brick.y + brickHeight + ballRadius;
        
        if (inBlockHorizontal && inBlockVertical) {
          dy = -dy;
          brick.status = 0;
          score++;

          // All of bricks is collided
          if (score === brickColumnCount * brickRowCount) {
            alert('YOU WIN');
            document.location.reload();
          }
        }
      }
      
    }
  }
}

function drawScore() {
  ctx.font = "16px Arial";
  ctx.fillText(`Score: ${score}`, 8, 20);
}

function drawLives() {
  ctx.font = "16px Arial";
  ctx.fillText(`Lives: ${lives}`, canvas.width - 65, 20);
}

function draw() {

  /* let this method clear whole area */
  // clearRect(x:left, y:top, x:bottom, y:right)
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  drawBall();
  drawPaddle();
  drawBricks();
  drawScore();
  drawLives();


  /* Arrow key control */
  if (leftPressed) {
    paddleX -= 6; 

    if (paddleX < 0) {
      paddleX = 0;
    }
  }

  if (rightPressed) {
    paddleX += 6;

    if (paddleX + paddleWidth > canvas.width) {
      paddleX = canvas.width - paddleWidth;
    }
  }


  /* when ball against wall */
  
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

    let inPaddle = x > paddleX && x < paddleX + paddleWidth;
    
    if (inPaddle) {
      dy = -dy;
    } else {
      lives--;
      
      // no lives 
      if (!lives) {
        alert('GAME OVER');
        return document.location.reload();
      }

      // reset
      x = canvas.width / 2;
      y = canvas.height - 30;
      paddleX = (canvas.width - paddleWidth) / 2
      dx = 2;
      dy = -2;
    }
  }

  // left
  if (x < 0 + ballRadius) {
    dx = -dx;
  }


  /* update x, y */
  x += dx;
  y += dy;
}

// move paddle
document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowRight') {
    rightPressed = true;
  }
  if (e.key === 'ArrowLeft') {
    leftPressed = true;
  }
});


// stop paddle
document.addEventListener('keyup', (e) => {
  if (e.key === 'ArrowRight') {
    rightPressed = false;
  }
  if (e.key === 'ArrowLeft') {
    leftPressed = false;
  }
});

setInterval(draw, 10);
