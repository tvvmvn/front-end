export default function drawObstacles() {
  for (var i=0; i<obstacles.length; i++) {
    var obstacle = obstacles[i];

    if (obstacle.active) {
      obstacle.y++
      
      ctx.fillStyle = "#000";
      ctx.fillRect(obstacle.x, obstacle.y, obstacle.width, obstacle.height);
      
      // hole
      ctx.fillStyle = "#fff";
      ctx.fillRect(obstacle.hole, obstacle.y, 40, obstacle.height);

      // collision detection
      var collided_v = (y < obstacle.y + obstacle.height) && (y + height > obstacle.y);
      var collided_h = (x < obstacle.hole) || (x + width > obstacle.hole + 40);
  
      if (collided_v && collided_h) {
        clearInterval(interval);
        alert("GAME OVER");
        document.location.reload();
      }
      
      if (obstacle.y > canvas.height) {
        score++;
        obstacle.active = false;

        if (score === obstacles.length) {
          clearInterval(interval);
          alert("YOU WIN");
          document.location.reload();
        }
      }
    }
  }
}