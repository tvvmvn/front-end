var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');


var upPressed = false;


setInterval(draw, 10);

var x = 50;
var y = 200;

var dy = -2;

var obstacleX = 400;

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  // Stage
  ctx.beginPath();
  ctx.moveTo(0, 250);
  ctx.lineTo(400, 250);
  ctx.stroke();

  // Obstacles
  obstacleX--;

  ctx.fillRect(obstacleX, 240, 10, 10);

  if (obstacleX < 0) {
    obstacleX = 400;
  }
  
  // Actor
  if (y < 120) {
    dy = 2
  }
  
  if (y > 200) {
    y = 200;
    dy = -2
    upPressed = false;
  }
  
  if (upPressed) {
    y += dy;
  } 

  ctx.fillRect(x, y, 25, 50);
}


addEventListener('keydown', (e) => {
  if (e.key === 'ArrowUp') {
    upPressed = true;
  }
})

// addEventListener('keyup', (e) => {
//   if (e.key === 'ArrowUp') {
//     upPressed = false;
//   }
// })