import { velocity } from './Ship'

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
  // Get background texture
  const background = document.getElementById('background')

  // Draw background grid
  ctx.drawImage(background, x1, y1)
  ctx.drawImage(background, x2, y2)
  ctx.drawImage(background, x3, y3)
  ctx.drawImage(background, x4, y4)
}

// Update background position
let updateBackground = () => {

  // Move background based on ship velocity
  x1 += velocity.x / 10 * -1
  x2 += velocity.x / 10 * -1
  x3 += velocity.x / 10 * -1
  x4 += velocity.x / 10 * -1

  y1 += velocity.y / 10 * -1
  y2 += velocity.y / 10 * -1
  y3 += velocity.y / 10 * -1
  y4 += velocity.y / 10 * -1

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