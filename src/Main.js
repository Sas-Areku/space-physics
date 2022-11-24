import { updateBackground, drawBackground } from './Background'
import { updateSpeed, drawSpeed } from './Speed'
import { updateShip, drawShip } from './Ship'

let Setup = () => {
  // Setup here
}

let Update = () => {
  const ctx = document.getElementById("ctx").getContext("2d")
  ctx.canvas.width  = window.innerWidth
  ctx.canvas.height = window.innerHeight

  // Update functions
  updateBackground()
  updateSpeed()
  updateShip()

  // Render canvas
  ctx.save()

  // Draw functions
  drawBackground(ctx)
  drawSpeed(ctx)
  drawShip(ctx)

  // Refresh Canvas
  ctx.restore()
}

export { Setup, Update }