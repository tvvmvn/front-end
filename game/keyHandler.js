export function keyDownHandler(e) {
  if (e.key === "ArrowLeft") {
    isLeftPressed = true;
  }

  if (e.key === "ArrowRight") {
    isRightPressed = true;
  }
}

export function keyUpHandler(e) {
  if (e.key === "ArrowLeft") {
    isLeftPressed = false;
  }

  if (e.key === "ArrowRight") {
    isRightPressed = false;
  }
}