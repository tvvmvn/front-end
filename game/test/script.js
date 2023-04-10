var canvas = document.getElementById('canvas')
var ctx = canvas.getContext('2d');


var actor = {
  x: 100,
  y: 200 - 20,
  width: 20,
  height: 20
}

var up = false;
var down = false;
var left = false;
var right = false;

var blocked = false;

function drawActor() {

  // JUMP
  if (up) {
    actor.y -= actor.y / 50
  }

  if (actor.y < 100) {
    up = false;
    down = true;
  }

  // FALL
  if (down) {
    actor.y += actor.y / 50;
  }

  if (actor.y > canvas.height - 20) {
    down = false;
    blocked = false
  }

  // LEFT
  if (left) {
    actor.x -= 3
  }

  if (actor.x < 0) {
    actor.x = 0
  }

  // RIGHT
  if (right) {
    actor.x += 3
  }

  if (actor.x + actor.width > canvas.width) {
    actor.x = canvas.width - actor.width
  }

  ctx.fillRect(actor.x, actor.y, actor.width, actor.height);
}

function clearCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

setInterval(() => {
  clearCanvas();

  drawActor()

}, 10)

addEventListener('keydown', (e) => {

  console.log(e.key, e.repeat)

  
  if (!blocked) {
    if (e.repeat) return;
    
    if (e.key === 'ArrowUp') {
      up = true;
      blocked = true;
    }
  }
  
  if (e.key === 'ArrowLeft') {
    left = true;
  }

  if (e.key === 'ArrowRight') {
    right = true;
  }

})

addEventListener('keyup', (e) => {
  if (e.key === 'ArrowLeft') {
    left = false;
  }

  if (e.key === 'ArrowRight') {
    right = false;
  }
})