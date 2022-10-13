import {keyPress, Input} from './Inputs'

let velocityX = 0
let velocityY = 0

let acceleration = 0.01

let updateShip = () => {
  // Accept keyboard input
  keyPress()

  // Move ship
  if (Input.left) velocityX += acceleration
  if (Input.right) velocityX -= acceleration
  if (Input.up) velocityY += acceleration
  if (Input.down) velocityY -= acceleration
}

let drawShip = (ctx) => {
  ctx.fillStyle = '#0080FF'
  ctx.fillRect(512, 384, 20, 20)
}

export {updateShip, drawShip, velocityX, velocityY}