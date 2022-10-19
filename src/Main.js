import { updateBackground, drawBackground } from './Background'
import { updateSpeed, drawSpeed } from './Speed'
import { updateShip, drawShip } from './Ship'
import {ObstacleGenerator, obstacles} from './ObstacleGenerator.js'

let Setup = () => {
  ObstacleGenerator(20)
}

let Update = () => {
  const ctx = document.getElementById("ctx").getContext("2d")
  ctx.canvas.width  = window.innerWidth
  ctx.canvas.height = window.innerHeight

  // Update functions
  updateBackground()
  updateSpeed()
  updateShip()

  for (let i = 0; i < obstacles.length; i++) {
    obstacles[i].update()
  }

  // Render canvas
  ctx.save()

  // Draw functions
  drawBackground(ctx)
  drawSpeed(ctx)
  //drawShip(ctx)

  for (let i = 0; i < obstacles.length; i++) {
    obstacles[i].display(ctx)
  }

  // Refresh Canvas
  ctx.restore()
}

export { Setup, Update }