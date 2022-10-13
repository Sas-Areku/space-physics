import { velocityX, velocityY } from './Ship'

// Initialize background position
let x1 = 0
let y1 = 0

let x2 = -1024
let y2 = -1024

let x3 = -1024
let y3 = 0

let x4 = 0
let y4 = -1024

// Draw background
let drawBackground = (ctx) => {
  let background = document.getElementById('background')

  ctx.drawImage(background, x1, y1)
  ctx.drawImage(background, x2, y2)
  ctx.drawImage(background, x3, y3)
  ctx.drawImage(background, x4, y4)
}

// Update background position
let updateBackground = (updateShip) => {

  // Move background based on ship velocity
  x1 += velocityX
  x2 += velocityX
  x3 += velocityX
  x4 += velocityX

  y1 += velocityY
  y2 += velocityY
  y3 += velocityY
  y4 += velocityY

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
}

export {drawBackground, updateBackground}