var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

var x = 0;
var y = 0;
var width = 20;
var height = 20;

var dx = 0;
var dy = 0;

var s = 20;

var dir = 'right'

function clearCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

setInterval(() => {

  clearCanvas();

  // loading vector to move
  if (dir === 'right') {
    dx++;
  }

  if (dir === 'down') {
    dy++;
  }

  if (dir === 'left') {
    dx--;
  }

  if (dir === 'up') {
    dy--;
  }

  // move to right 
  if (dx > s) {
    x += s;
    dx = 0
  }

  // move to left
  if (dx < -s) {
    x -= s;
    dx = 0
  }

  // move to down
  if (dy > s) {
    y += s;
    dy = 0;
  }

  // move to up
  if (dy < -s) {
    y -= s;
    dy = 0;
  }

  if (x > canvas.width - width) {
    x = canvas.width - width;
  }

  ctx.fillRect(x, y, width, height);

}, 10);


addEventListener('keydown', (e) => {
  if (e.key === 'ArrowRight') {
    dir = 'right'
    dx += s;
  }

  if (e.key === 'ArrowDown') {
    dir = 'down'
    dy += s;
  }

  if (e.key === 'ArrowLeft') {
    dir = 'left'
    dx -= s;
  }

  if (e.key === 'ArrowUp') {
    dir = 'up'
    dy -= s;
  }
})