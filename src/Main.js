import { updateBackground, drawBackground } from './Background'
import { updateShip, drawShip } from './Ship'

let Main = () => {
  const ctx = document.getElementById("ctx").getContext("2d")
  ctx.canvas.width  = window.innerWidth
  ctx.canvas.height = window.innerHeight

  // Update functions
  updateBackground()
  updateShip()

  // Render canvas
  ctx.save()

  // Background
  drawBackground(ctx)

  // Ship
  drawShip(ctx)

  // Refresh Canvas
  ctx.restore()
}

export default Main