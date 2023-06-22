var ctx = canvas.getContext("2d");
var width = 20;
var height = 20;
var x = (canvas.width - width) / 2
var y = canvas.height - height;
var isLeftPressed = false;
var isRightPressed = false;
var score = 0;

var interval = setInterval(draw, 10);
addEventListener("keydown", keyDownHandler);
addEventListener("keyup", keyUpHandler)

var obstacles = [];

for (var j = 0; j < 10; j++) {
  var obstacle = { 
    x: 0, 
    y: 0, 
    active: false,
    width: 200,
    height: 20,
    hole: Math.ceil(Math.random() * 160)
  };

  obstacles.push(obstacle);
}

var k = 0;

// fire
setInterval(() => {
  if (k < obstacles.length) {
    obstacles[k].active = true;
    k++;
  }
}, 1000)

// console.log(obstacles);

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  if (isLeftPressed) {
    if (x > 0) x -= 2;
  }

  if (isRightPressed) {
    if (x + width < canvas.width) x += 2;
  }

  
  drawObstacles();
  
  drawScore()
  drawActor();
}

function drawObstacles() {
  for (var i=0; i<obstacles.length; i++) {
    var obstacle = obstacles[i];

    if (obstacle.active) {
      obstacle.y++
      
      ctx.fillStyle = "#000";
      ctx.fillRect(obstacle.x, obstacle.y, obstacle.width, obstacle.height);
      
      // hole
      ctx.fillStyle = "#fff";
      ctx.fillRect(obstacle.hole, obstacle.y, 40, obstacle.height);

      // collision detection
      var collided_v = (y < obstacle.y + obstacle.height) && (y + height > obstacle.y);
      var collided_h = (x < obstacle.hole) || (x + width > obstacle.hole + 40);
  
      if (collided_v && collided_h) {
        clearInterval(interval);
        alert("GAME OVER");
        document.location.reload();
      }
      
      if (obstacle.y > canvas.height) {
        score++;
        obstacle.active = false;

        if (score === obstacles.length) {
          clearInterval(interval);
          alert("YOU WIN");
          document.location.reload();
        }
      }
    }
  }
}

function drawActor() {
  ctx.fillStyle = "#f00"
  ctx.fillRect(x, y, width, height)
}

function drawScore() {
  ctx.font = "16px Arial";
  ctx.fillStyle = "#888";
  ctx.fillText(`rest: ${obstacles.length - score}`, 8, 20);
}

function keyDownHandler(e) {
  if (e.key === "ArrowLeft") {
    isLeftPressed = true;
  }

  if (e.key === "ArrowRight") {
    isRightPressed = true;
  }
}

function keyUpHandler(e) {
  if (e.key === "ArrowLeft") {
    isLeftPressed = false;
  }

  if (e.key === "ArrowRight") {
    isRightPressed = false;
  }
}