var canvas = document.getElementById('canvas')
var ctx = canvas.getContext('2d')
var width = canvas.width
var height = canvas.height

var rand = function (x = 1) {
  return Math.random() * x
}

let round = function (num = 1, x = 1) {
  return parseFloat(num.toFixed(x))
}

randomColor = function (x = 1) {
  return 'hsla(' + (Math.random() * 360) + ', 75%, 50%, ' + x + ')'
}
blackColor = function (x = 1) {
  return 'hsla(' + (Math.random() * 360) + ', 0%, 0%, ' + x + ')'
}

class pixel {
  constructor() {
    this.size = size
    this.x = rand(R)
    this.y = rand(R)
    this.xSpeed = (rand() - .5) / 4
    this.ySpeed = (rand() - .5) / 4
    this.ang = rand(Math.PI * 2)
    this.color = randomColor(1)
  }
  draw() {
    ctx.fillRect(this.x, this.y, this.size, this.size)
    ctx.rotate(this.ang)
  }
  move() {
    this.x += this.xSpeed
    this.y += this.ySpeed
  }
  bounce() {
    if (this.x < 0 || this.x > R) {
      this.xSpeed = -this.xSpeed
      ctx.fillStyle = randomColor(a)
      a *= .815
      //this.xSpeed *= .815
      //ang *= 1.15
      this.size *= 1.15
    }
    if (this.y < 0 || this.y > R) {
      this.ySpeed = -this.ySpeed
      ctx.fillStyle = randomColor(a)
      a *= .815
      //this.ySpeed *= .815
      //ang *= 1.15
      this.size *= 1.15
    }
  }
}

ctx.translate(500, 500)    

let R = 250
size = 1
let a = 1
let ang = rand(Math.PI * 2)  
let point = new pixel()
ctx.fillStyle = randomColor(a)

//setInterval(function () {
while (a > 0.0075) {
  //while (size < 1.2) {
  point.draw()
  point.bounce()
  point.move()
}
 
