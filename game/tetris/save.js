var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var x = 150;
var y = 0;
var left = true;
var right = true;
var blocks = [];
var lives = 1;


setInterval(buildView, 10);
// block is falling by itself
// setInterval(() => {
//   y += 30;
// }, 1000)


function drawStackedBlocks() {
  for (var i=0; i<blocks.length; i++) {
    
    // if one of the blocks touched the top. 
    if (blocks[i].y === 30) {
      lives--;
    }

    ctx.fillRect(blocks[i].x, blocks[i].y, 30, 30);
  }
}


function drawFallingBlock() {
  ctx.fillRect(x, y, 30, 30);
}

function initializeFallingBlock() {
  x = 150;
  y = 0;
}

function addBlock() {
  left = true;
  right = true;

  // when block is put on the other block.
  for (var i=0; i<blocks.length; i++) {
    if (blocks[i].x === x - 30 && blocks[i].y === y) {
      left = false;
    }
    
    if (blocks[i].x === x + 30 && blocks[i].y === y) {
      right = false;
    }

    if (blocks[i].x === x && blocks[i].y === y + 30) {
      var block = { id: Math.random(), x, y };

      blocks.push(block);
      initializeFallingBlock();
    }
  }

  // when block is put on the bottom.
  if (y === 270) {
    var block = { id: Math.random(), x, y};
    blocks.push(block);
    initializeFallingBlock()
  }
}

function gameOver() {
  if (lives === 0) {
    alert('Game Over');
    document.location.reload()
  }
}

function buildView() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  gameOver();
  drawFallingBlock();
  addBlock();
  drawStackedBlocks();
}


addEventListener('keydown', (e) => {
  if (e.key === 'ArrowLeft') {
    if (x === 0 || !left) return;
    x-= 30;
  }

  if (e.key == 'ArrowRight') {
    if (x + 30 === 300 || !right) return;
    x += 30;
  }

  if (e.key === 'ArrowDown') {
    y += 30;
  }
})











var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var num = 0;
var square = 20;
var x = 0;
var y = 0;

var offsetX = 0;
var offsetY = 0;

var blocks = [];

var l = [
  [
    [1,0,0],
    [1,0,0],
    [1,1,0],
  ],
  [
    [0,0,0],
    [1,1,1],
    [1,0,0],
  ],
  [
    [1,1,0],
    [0,1,0],
    [0,1,0],
  ],
  [
    [0,0,0],
    [0,0,1],
    [1,1,1],
  ],
]

var z = [
  [
    [1,0,0],
    [1,1,0],
    [0,1,0],
  ],
  [
    [0,0,0],
    [0,1,1],
    [1,1,0],
  ],
]

var shape = z;

var stacked = false;

function drawNewBlock(sh) {

  if (stacked) return;

  for (var r=0; r<3; r++) {
    for (var c=0; c<3; c++) {
      
      var position = sh[num];

      let filled = position[r][c]; // 0 or 1

      offsetX = ((square) * c) + x;
      offsetY = ((square) * r) + y;

      if (filled) {
        ctx.fillRect(offsetX, offsetY, square, square)
      }

      if (offsetY === 280) {
        blocks.push(position);
        stacked = true;
      } 
    }
  }
}

function drawStackedBlocks() {
  for (var c=0; c<15; c++) {
    for (var r=0; r<15; r++) {

      ctx.strokeRect(20 * c, 20 * r, 20, 20)
    }
  }
}


setInterval(() => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  drawNewBlock(shape);

  drawStackedBlocks();

}, 10)

addEventListener('keydown', (e) => {
  if (e.key === 'ArrowUp') {
    num++;

    if (num === shape.length) {
      num = 0;
    }
  }

  if (e.key === 'ArrowLeft') {
    x -= 20;
  }
  if (e.key === 'ArrowRight') {
    x += 20;
  }
  if (e.key === 'ArrowDown') {
    y += 20;
  }
})