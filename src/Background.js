import { velocity } from './Ship'

let size = 2048
let originX = 0
let originY = 0

// Initialize background position
let position1 = { x: originX, y: originY}
let position2 = { x: originX-size, y: originY-size}
let position3 = { x: originX-size, y: originY}
let position4 = { x: originX, y: originY-size}

/* let x1 = 0
let y1 = 0

let x2 = -size
let y2 = -size

let x3 = -size
let y3 = 0

let x4 = 0
let y4 = -size */

// Draw background
let drawBackground = (ctx) => {
  // Get background texture
  const background = document.getElementById('background')

  // Draw background grid
  ctx.drawImage(background, position1.x, position1.y)
  ctx.drawImage(background, position2.x, position2.y)
  ctx.drawImage(background, position3.x, position3.y)
  ctx.drawImage(background, position4.x, position4.y)
}

// Update background position
let updateBackground = () => {

  // Move background based on ship velocity
  position1.x += velocity.x / 20 * -1
  position2.x += velocity.x / 20 * -1
  position3.x += velocity.x / 20 * -1
  position4.x += velocity.x / 20 * -1

  position1.y += velocity.y / 20 * -1
  position2.y += velocity.y / 20 * -1
  position3.y += velocity.y / 20 * -1
  position4.y += velocity.y / 20 * -1

  // Repeat background
  // Cell 1
  if (position1.x <= originX-size) position1.x = position2.x + size
  if (position1.x >= originX+size) position1.x = position2.x - size
  if (position1.y <= originY-size) position1.y = position4.y + size
  if (position1.y >= originY+size) position1.y = position4.y - size

  // Cell 2
  if (position2.x <= originX-size) position2.x = position1.x + size
  if (position2.x >= originX+size) position2.x = position1.x - size
  if (position2.y <= originY-size) position2.y = position3.y + size
  if (position2.y >= originY+size) position2.y = position3.y - size

  // Cell 3
  if (position3.x <= originX-size) position3.x = position4.x + size
  if (position3.x >= originX+size) position3.x = position4.x - size
  if (position3.y <= originY-size) position3.y = position2.y + size
  if (position3.y >= originY+size) position3.y = position2.y - size

  // Cell 4
  if (position4.x <= originX-size) position4.x = position3.x + size
  if (position4.x >= originX+size) position4.x = position3.x - size
  if (position4.y <= originY-size) position4.y = position1.y + size
  if (position4.y >= originY+size) position4.y = position1.y - size
}

export {drawBackground, updateBackground}