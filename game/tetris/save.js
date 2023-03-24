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






