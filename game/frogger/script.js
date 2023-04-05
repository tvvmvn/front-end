var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

var size = 50;

// obstacles
var cars = []
var buldozers = []
var trucks = [];


function initializeObstacles(vehicles, x, y, width, height) {
  for (var i=0; i<4; i++) {
    vehicles.push({ x: i * x, y, width, height });
  }
}



initializeObstacles(cars, 100, 0, 20, 20);
initializeObstacles(buldozers, 100, 100, 40, 40);
initializeObstacles(trucks, 100, 200, 60, 60);


console.log(cars)
console.log(buldozers)



setInterval(() => {

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // draw each obstacles
  drawObstacles(cars, true)
  drawObstacles(buldozers, false)
  drawObstacles(trucks, true)

}, 10)


function drawObstacles(obstacles, rtl) {

  for (var i=0; i<obstacles.length; i++) {


    // out of canvas
    if (rtl) {
      if (obstacles[i].x < 0 - size) {
        obstacles[i].x = canvas.width;
      }
    } else {
      if (obstacles[i].x > canvas.width) {
        obstacles[i].x = 0 - size;
      }
    }


    // moving
    if (rtl) {
      var left = obstacles[i].x;
      left--;
      obstacles[i].x = left;
    } else {
      var left = obstacles[i].x;
      left++;
      obstacles[i].x = left;
    }



    // y and size
    var y = obstacles[i].y;
    var width = obstacles[i].width;
    var height = obstacles[i].height;



    // draw
    ctx.fillRect(left, y, width, height);
  }
}

