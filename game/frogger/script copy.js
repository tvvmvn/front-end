var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

var obstacles1 = [];
var obstacles2 = [];
var obstacles3 = [];
var size = 50;

for (var i=0; i<4; i++) {
  obstacles1.push({ x: i * 100, y: 0, width: size, height: size });
}

for (var i=0; i<4; i++) {
  obstacles2.push({ x: i * 100, y: 100, width: size, height: size });
}

for (var i=0; i<4; i++) {
  obstacles3.push({ x: i * 100, y: 200, width: size, height: size });
}

var left1;
var left2;
var left3;

setInterval(() => {

  ctx.clearRect(0, 0, canvas.width, canvas.height);


  drawObstacles1();
  drawObstacles2();
  drawObstacles3();

}, 10)

function drawObstacles1() {
  for (var i=0; i<obstacles1.length; i++) {

    if (obstacles1[i].x < 0 - size) {
      obstacles1[i].x = canvas.width;
    }

    // left
    left1 = obstacles1[i].x;
    left1--;
    obstacles1[i].x = left1;


    var y = obstacles1[i].y;
    var width = obstacles1[i].width;
    var height = obstacles1[i].height;


    ctx.fillRect(left1, y, width, height);
  }
}

function drawObstacles2() {
  for (var i=0; i<obstacles2.length; i++) {

    if (obstacles2[i].x > canvas.width) {
      obstacles2[i].x = 0 - size;
    }

    // left
    left2 = obstacles2[i].x;
    left2++;
    obstacles2[i].x = left2;


    var y = obstacles2[i].y;
    var width = obstacles2[i].width;
    var height = obstacles2[i].height;


    ctx.fillRect(left2, y, width, height);
  }
}

function drawObstacles3() {
  for (var i=0; i<obstacles3.length; i++) {

    if (obstacles3[i].x < 0 - size) {
      obstacles3[i].x = canvas.width;
    }

    // left
    left3 = obstacles3[i].x;
    left3--;
    obstacles3[i].x = left3;


    var y = obstacles3[i].y;
    var width = obstacles3[i].width;
    var height = obstacles3[i].height;


    ctx.fillRect(left3, y, width, height);
  }
}


function drawObstacles() {

}