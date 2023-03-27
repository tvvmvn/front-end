var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

var x = 0;
var y = 0;
var square = 30;

var leftPressed = false;
var rightPressed = false;
var downPressed = false;

var blocks = [];

for (var r=0; r<10; r++) {
  blocks[r] = [];

  for (c=0; c<5; c++) {
    blocks[r][c] = { offsetX: c * square, offsetY: r * square, status: 0 };
  }
}


function drawGrid() {
  for (var r=0; r<10; r++) {
    for (c=0; c<5; c++) {
      var block = blocks[r][c];

      // reached bottom
      if (y === 270) {
        if (x === block.offsetX && y === block.offsetY) {
          block.status = 1;
          
          x = 0;
          y = 0;
        }
      }
      
      // stacked on other block.
      if (block.status) {
        if (x === block.offsetX && y === block.offsetY - square) {
          blocks[r-1][c].status = 1;
          
          x = 0;
          y = 0;
        }
      }

      // to right against stacked block
      if (block.status) {
        if (x + square === block.offsetX && y === block.offsetY) {
          x -= square;
        }
      }
      
      // draw all stacked blocks
      if (block.status) {
        ctx.fillRect(block.offsetX, block.offsetY, square, square);
      }  
    }
  }
}

setInterval(draw, 10);

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  drawGrid();

  // new block
  ctx.fillRect(x, y, square, square);
}


addEventListener('keydown', (e) => {
  if (e.key === 'ArrowLeft') {
    x -= square;
  }
  if (e.key === 'ArrowRight') {
    x += square;
  }
  if (e.key === 'ArrowDown') {
    y += square;
  }
})

