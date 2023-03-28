var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

// T rex
var trex = new Image();
trex.src = 't-rex.png'
var trexX = 40;
var trexY = 135;
var trexWidth = 60;
var trexHeight = 60;

// Cacti
var cacti = new Image();
cacti.src = 'cacti.png';
var cactiX = canvas.width;
var cactiY = 155;
var cactiWidth = 40;
var cactiHeight = 40;

// Background
var background = new Image();
background.src = 'background.png'
var x1 = 0;
var x2 = canvas.width;

// .
var down = false;
var pressed = false;
var dx = -2;

setInterval(() => {

  /* Clear canvas */
  ctx.clearRect(0, 0, canvas.width, canvas.height);


  /* background */
  // ctx.drawImage(background, x1, 0, canvas.width, 200);
  // ctx.drawImage(background, x2, 0, canvas.width, 200);

  // if (x1 <= -canvas.width) {
  //   x1 = canvas.width;
  // }
  
  // if (x2 <= -canvas.width) {
  //   x2 = canvas.width;
  // }

  // x1 += dx;
  // x2 += dx;


  /* Trex */
  if (pressed && !down) {
    trexY -= 4;
  }

  if (trexY < 20) {
    down = true
    pressed = false
  }

  if (down) {
    trexY += 4;
  }

  if (trexY >= 135) {
    trexY = 135;
    down = false;
  }

  ctx.drawImage(trex, trexX, trexY, trexWidth, trexHeight);


  /* Cacti */
  if (cactiX < 0 - cacti.width) {
    cactiX = canvas.width;
  }

  cactiX += dx;

  ctx.drawImage(cacti, cactiX, cactiY, cactiWidth, cactiHeight);


  /* Collision detection */
  // console.log(trexX)
  // console.log(trexX + trex.width)
  // console.log(trexY)
  // console.log(trexY + trex.height)

  trexX 

  if (cactiX < trexX + trexWidth) {
    if (trexY + trexWidth < cactiY)
    if (cactiX + cactiWidth > trexX) {
      console.log('collide')
    }
  } 

}, 10) 

console.log(cacti.width)
console.log(cacti.height)


addEventListener('keydown', (e) => {
  pressed = true;
})

// addEventListener('keyup', (e) => {
//   pressed = false;
// })





