function Circle(x, y, dx, dy, radius, width, height) {
  this.x = x
  this.y = y
  this.dx = dx
  this.dy = dy
  this.radius = radius
  this.width = width
  this.height = height

  // draw background
  this.draw = function (c) {
    c.beginPath()
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
    c.strokeStyle = 'green'
    c.stroke()
  }

  // update animation
  this.update = function (c) {
    if (this.x + this.radius > this.width || this.x - this.radius < 0) this.dx = -this.dx
    if (this.y + this.radius > this.height || this.y - this.radius < 0) this.dy = -this.dy

    this.x += this.dx
    this.y += this.dy

    this.draw(c)
  }
}

export { Circle }
