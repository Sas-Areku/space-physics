import {keyPress, Input} from './Inputs'

let x1 = 0
let y1 = 0

let x2 = -1024
let y2 = -1024

let x3 = -1024
let y3 = 0

let x4 = 0
let y4 = -1024

let speed = 1

let Main = () => {
  const ctx = document.getElementById("ctx").getContext("2d")

  let background = document.getElementById('background')

  keyPress()

  // Move background
  if (Input.left) {
    x1 += speed
    x2 += speed
    x3 += speed
    x4 += speed
  }

  if (Input.right) {
    x1 -= speed
    x2 -= speed
    x3 -= speed
    x4 -= speed
  }

  if (Input.up) {
    y1 += speed
    y2 += speed
    y3 += speed
    y4 += speed
  }

  if (Input.down) {
    y1 -= speed
    y2 -= speed
    y3 -= speed
    y4 -= speed
  }

  // Repeat background
  if (x1 <= -1024) x1 = x2 + 1024
  if (x1 >= 1024) x1 = x2 - 1024
  if (y1 <= -1024) y1 = y4 + 1024
  if (y1 >= 1024) y1 = y4 - 1024

  if (x2 <= -1024) x2 = x1 + 1024
  if (x2 >= 1024) x2 = x1 - 1024
  if (y2 <= -1024) y2 = y3 + 1024
  if (y2 >= 1024) y2 = y3 - 1024

  if (x3 <= -1024) x3 = x4 + 1024
  if (x3 >= 1024) x3 = x4 - 1024
  if (y3 <= -1024) y3 = y2 + 1024
  if (y3 >= 1024) y3 = y2 - 1024

  if (x4 <= -1024) x4 = x3 + 1024
  if (x4 >= 1024) x4 = x3 - 1024
  if (y4 <= -1024) y4 = y1 + 1024
  if (y4 >= 1024) y4 = y1 - 1024

  ctx.save()
  ctx.fillStyle = '#000000'
  ctx.fillRect(0, 0, 1024, 768)

  ctx.drawImage(background, x1, y1)
  ctx.drawImage(background, x2, y2)
  ctx.drawImage(background, x3, y3)
  ctx.drawImage(background, x4, y4)

  ctx.fillStyle = '#0080FF'
  ctx.fillRect(512, 384, 20, 20)
  ctx.restore()
}

export default Main