// import Obstacle from './obstacle.js';

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

// Obstacles
var truck = { width: 40, height: 20, v: 0.2, rtl: true };
var fomulaOne1 = { width: 20, height: 20, v: 1, rtl: false };
var car = { width: 20, height: 20, v: 0.75, rtl: true }
var buldozer = { width: 20, height: 20, v: 0.5, rtl: false };
var fomulaOne2 = { width: 20, height: 20, v: 0.75, rtl: true };

var trucks = initializeObstacle(200, 140, truck.width, truck.height);
var fomulaOnes1 = initializeObstacle(200, 160, fomulaOne1.width, fomulaOne1.height);
var cars = initializeObstacle(200, 180, car.width, car.height);
var buldozers = initializeObstacle(200, 200, buldozer.width, buldozer.height);
var fomulaOnes2 = initializeObstacle(100, 220, fomulaOne2.width, fomulaOne2.height);

function initializeObstacle(x, y, width, height) {
  var obstacles = []

  for (var i=0; i<2; i++) {
    obstacles[i] = { x: i * x, y, width, height };
  }

  return obstacles;
}

function drawObstacle(obstacles, v, rtl) {
  for (var i=0; i<obstacles.length; i++) {
    var obstacle = obstacles[i];

    if (rtl) {
      obstacle.x -= v;
      if (obstacle.x + obstacle.width < 0) {
        obstacle.x = canvas.width;
      }
    } else {      
      obstacle.x += v;
      if (obstacle.x > canvas.width) {
        obstacle.x = -obstacle.width
      }
    }

    ctx.fillStyle = '#000';
    ctx.fillRect(obstacle.x, obstacle.y, obstacle.width, obstacle.height);
  }
}

// Turtles
var turtle1 = { width: 40, height: 20, v: 1, rtl: true };
var turtle2 = { width: 60, height: 20, v: 0.75, rtl: true };

var turtles1 = initilizeTurtle(100, 40, turtle1.width, turtle1.height);
var turtles2 = initilizeTurtle(100, 100, turtle2.width, turtle2.height);

function initilizeTurtle(x, y, width, height) {
  var turtles = [];
  
  for (var i=0; i<4; i++) {
    turtles[i] = { x: i * x, y, width, height, status: 3 }
  }

  return turtles;
}

function drawTurtle(turtles, v, rtl) {
  for (var i=0; i<turtles.length; i++) {
    var turtle = turtles[i];
    
    if (rtl) {
      turtle.x -= v;
      if (turtle.x + turtle.width < 0) {
        turtle.x = canvas.width;
      }
    } else {      
      turtle.x += v;
      if (turtle.x > canvas.width) {
        turtle.x = -turtle.width
      }
    }
    
    ctx.fillRect(turtle.x, turtle.y, turtle.width, turtle.height);
  }
}

// VIEW
function clearCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

setInterval(() => {
  clearCanvas();

  drawObstacle(trucks, truck.v, truck.rtl);
  drawObstacle(fomulaOnes1, fomulaOne1.v, fomulaOne1.rtl);
  drawObstacle(cars, car.v, car.rtl);
  drawObstacle(buldozers, buldozer.v, buldozer.rtl);
  drawObstacle(fomulaOnes2, fomulaOne2.v, fomulaOne2.rtl);

  drawTurtle(turtles1, turtle1.v, turtle1.rtl);
  drawTurtle(turtles2, turtle2.v, turtle2.rtl);
}, 10)
