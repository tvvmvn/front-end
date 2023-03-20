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


// Bricks
let brickRowCount = 3;
let brickColumnCount = 5;
let brickWidth = 75;
let brickHeight = 20;
let brickPadding = 10;
let brickOffsetLeft = 30;
let brickOffsetTop = 30;
let bricks = []

for (let c = 0; c < brickColumnCount; c++) {
  bricks[c] = [];

  for (let r = 0; r < brickRowCount; r++) {
    bricks[c][r] = {x: 0, y: 0, status: 1}
  }
}

// console.log(bricks);


// Score
let score = 0;


// Lives
let lives = 2;


function drawBricks() {
  for (let c = 0; c < brickColumnCount; c++) {  
    for (let r = 0; r < brickRowCount; r++) {
      let brick = bricks[c][r];
      
      brick.x = c * (brickWidth + brickPadding) + brickOffsetLeft;
      brick.y = r * (brickHeight + brickPadding) + brickOffsetTop;
      
      if (brick.status === 1) {
        // creat rect...
        ctx.beginPath();
        ctx.rect(brick.x, brick.y, brickWidth, brickHeight);
        ctx.fillStyle = "#333";
        ctx.fill();
        ctx.closePath();
  
        // when collision occur
        if (
          x > brick.x &&
          x < brick.x + brickWidth &&
          y > brick.y &&
          y < brick.y + brickHeight
        ) {
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


// move paddle
document.addEventListener('keydown', (e) => {
  console.log('keydown', e.key)

  if (e.key === 'ArrowRight') {
    rightPressed = true;
  }
  if (e.key === 'ArrowLeft') {
    leftPressed = true;
  }
});


// stop paddle
document.addEventListener('keyup', (e) => {
  console.log('keyup', e.key)

  if (e.key === 'ArrowRight') {
    rightPressed = false;
  }
  if (e.key === 'ArrowLeft') {
    leftPressed = false;
  }
});


function draw() {

  /* clearRect(x:left, y:top, x:bottom, y:right) */
  // let this method clear whole area
  ctx.clearRect(0, 0, canvas.width, canvas.height);


  /* draw ball */
  ctx.beginPath();
  ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
  ctx.fillStyle = '#333';
  ctx.fill();
  ctx.closePath();


  /* draw paddle */
  ctx.beginPath();
  // rect(left, top, width, height);
  ctx.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight);
  ctx.fillStyle = '#333';
  ctx.fill();
  ctx.closePath();


  /* Draw bricks*/
  drawBricks();


  /* Score */
  ctx.font = "16px Arial";
  ctx.fillStyle = "#333";
  ctx.fillText(`Score: ${score}`, 8, 20);


  /* Lives */
  ctx.font = "16px Arial";
  ctx.fillStyle = "#333";
  ctx.fillText(`Lives: ${lives}`, canvas.width - 65, 20);


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
    
    if (x > paddleX && x < paddleX + paddleWidth) {
      dy = -dy;
    } else {
      lives--;
      
      // lives = 0
      if (!lives) {
        alert('GAME OVER');
        return document.location.reload();
      }

      x = canvas.width / 2;
      y = canvas.height - 30;
      paddleX = (canvas.width - paddleWidth) / 2
      dx = 2;
      dy = -dy;
    }
  }

  // left
  if (x < 0 + ballRadius) {
    dx = -dx;
  }


  // Increase (x, y)
  x += dx;
  y += dy;
}


setInterval(draw, 10);