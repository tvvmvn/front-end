var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

// Frog
var frog = { 
  x: (canvas.width - 20) / 2, 
  y: canvas.height - 20, 
  width: 20, 
  height: 20,
  lives: 3
};

// Rafts
var logs1 = [
  { x: 0, y: 20, width: 80, height: 20 },
  { x: 120, y: 20, width: 80, height: 20 },
  { x: 280, y: 20, width: 80, height: 20 },
]

var turtles1 = [
  { x: 0, y: 40, width: 40, height: 20 },
  { x: 80, y: 40, width: 40, height: 20 },
  { x: 200, y: 40, width: 40, height: 20 },
  { x: 280, y: 40, width: 40, height: 20 },
]

var logs2 = [
  { x: 0, y: 60, width: 120, height: 20 },
  { x: 200, y: 60, width: 120, height: 20 },
]

var logs3 = [
  { x: 0, y: 80, width: 60, height: 20 },
  { x: 140, y: 80, width: 60, height: 20 },
  { x: 240, y: 80, width: 60, height: 20 },
]

var turtles2 = [
  { x: 0, y: 100, width: 60, height: 20 },
  { x: 80, y: 100, width: 60, height: 20 },
  { x: 200, y: 100, width: 60, height: 20 },
  { x: 280, y: 100, width: 60, height: 20 },
]

// Obstacles
var trucks = [
  { x: 0, y: 140, width: 40, height: 20 },
  { x: 200, y: 140, width: 40, height: 20 },
]

var fOnes1 = [
  { x: 0, y: 160, width: 20, height: 20 },
  { x: 200, y: 160, width: 20, height: 20 },
]

var cars = [
  { x: 0, y: 180, width: 20, height: 20 },
  { x: 240, y: 180, width: 20, height: 20 },
]

var buldozers = [
  { x: 0, y: 200, width: 20, height: 20 },
  { x: 200, y: 200, width: 20, height: 20 },
]

var fOnes2 = [
  { x: 0, y: 220, width: 20, height: 20 },
  { x: 100, y: 220, width: 20, height: 20 },
]

// Draw
function drawRafts(a, v) {
  for (var i=0; i<a.length; i++) {
    var o = a[i];

    o.x += v;

    if (v < 0) { // to left
      if (o.x + o.width < 0) {
        o.x = canvas.width;
      }
    } else { // to right    
      if (o.x > canvas.width) {
        o.x = -o.width
      }
    }

    var c1 = frog.x + frog.width > o.x;
    var c2 = frog.x < o.x + o.width;
    var c3 = frog.y === o.y;

    if (c1 && c2 && c3) {
      frog.x += v;
    } 

    ctx.fillStyle = '#ddd';
    ctx.fillRect(o.x, o.y, o.width, o.height);
  }
}

function drawObstacles(a, v, rtl) {
  for (var i=0; i<a.length; i++) {
    var o = a[i];
    
    o.x += v;

    if (v < 0) { // to left
      if (o.x + o.width < 0) {
        o.x = canvas.width;
      }
    } else { // to right
      if (o.x > canvas.width) {
        o.x = -o.width
      }
    }

    var c1 = frog.x + frog.width > o.x;
    var c2 = frog.x < o.x + o.width;
    var c3 = frog.y === o.y;

    if (c1 && c2 && c3) {
      console.log('collided')
      frog.lives--;
      frog.x = (canvas.width - 20) /2;
      frog.y = canvas.height - 20; 
    }

    ctx.fillStyle = '#000';
    ctx.fillRect(o.x, o.y, o.width, o.height);
  }
}

function drawFrog() {
  ctx.fillStyle = '#f00'
  ctx.fillRect(frog.x, frog.y, frog.width, frog.height);
}

function drawLives() {
  ctx.font = '16px Arial';
  ctx.fillStyle = '#000';
  ctx.fillText('lives ' + frog.lives, 0, 20);
}

function clearCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

setInterval(() => {
  clearCanvas();

  drawRafts(logs1, 0.75);
  drawRafts(turtles1, -1);
  drawRafts(logs2, 1)
  drawRafts(logs3, 0.5);
  drawRafts(turtles2, -1);
  
  drawObstacles(trucks, -0.2);
  drawObstacles(fOnes1, 1);
  drawObstacles(cars, -0.5);
  drawObstacles(buldozers, 0.2);
  drawObstacles(fOnes2, -0.5);

  drawFrog()
  drawLives()
}, 10)

addEventListener('keydown', (e) => {
  if (e.key === 'ArrowUp') {
    frog.y -= 20;
  }
  if (e.key === 'ArrowDown') {
    frog.y += 20;
  }
  if (e.key === 'ArrowLeft') {
    frog.x -= 20;
  }
  if (e.key === 'ArrowRight') {
    frog.x += 20;
  }
})  