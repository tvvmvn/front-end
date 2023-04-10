
var turtle = {
  width: 40,
  height: 20,
  x: canvas.width,
  y: 100,
  state: 3,
  setState() {
    setInterval(() => {
      this.state--;

      // console.log(this)

      if (this.state < 0) {
        this.state = 3;
      }
    }, 2000)
  }
}

export default turtle;