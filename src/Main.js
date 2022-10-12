import {keyPress, Input} from './Inputs'

let x = 0
let y = 0
let speed = 10

let Main = () => {
  const ctx = document.getElementById("ctx").getContext("2d")

  keyPress()

  if (Input.left && x > 0) {
    x -= speed
  }

  if (Input.right && x < 1024 - 20) {
    x += speed
  }

  if (Input.up && y > 0) {
    y -= speed
  }

  if (Input.down && y < 768 - 20) {
    y += speed
  }

  ctx.save()
  ctx.fillStyle = '#000000'
  ctx.fillRect(0, 0, 1024, 768)

  ctx.fillStyle = '#0080FF'
  ctx.fillRect(x, y, 20, 20)
  ctx.restore()
}

export default Main