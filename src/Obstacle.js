import { velocity } from './Ship'
import { history } from './ObstacleGenerator'

class Obstacle {
  constructor(position, variant) {
    this.position = position
    this.variant = variant
    this.size = 50
    history.push(position)
  }

  display = (ctx) => {
    // Get background texture
    const texture = document.getElementById(this.variant)

    // Display background grid
    ctx.drawImage(
      texture, 
      (this.position.x - (this.size / 2)), 
      (this.position.y - (this.size / 2)),
      this.size,
      this.size
    )
  }

  update = () => {
    // Update position
    this.position.x += velocity.x / 10 * -1
    this.position.y += velocity.y / 10 * -1
  }

  next = () => {
    let next
    let direction

    // Variants resulting in an 'up' next direction
    if (this.variant === 'terminateDown') direction = 'up'
    if (this.variant === 'straightUp') direction = 'up'
    if (this.variant === 'rightLeft') direction = 'up'
    if (this.variant === 'leftRight') direction = 'up'

    // Variants resulting in a 'down' next direction
    if (this.variant === 'terminateUp') direction = 'down'
    if (this.variant === 'straightDown') direction = 'down'
    if (this.variant === 'leftLeft') direction = 'down'
    if (this.variant === 'rightRight') direction = 'down'

    // Variants resulting in a 'left' next direction
    if (this.variant === 'terminateRight') direction = 'left'
    if (this.variant === 'straightLeft') direction = 'left'
    if (this.variant === 'leftUp') direction = 'left'
    if (this.variant === 'leftDown') direction = 'left'

    // Variants resulting in a 'right' next direction
    if (this.variant === 'terminateLeft') direction = 'right'
    if (this.variant === 'straightRight') direction = 'right'
    if (this.variant === 'rightUp') direction = 'right'
    if (this.variant === 'rightDown') direction = 'right'

    if (direction === 'up') {
      next = {
        x: this.position.x,
        y: this.position.y - this.size + 1,
        direction: 'up'
      }
      return next

    } else if (direction === 'down') {
      next = {
        x: this.position.x,
        y: this.position.y + this.size - 1,
        direction: 'down'
      }
      return next

    } else if (direction === 'left') {
      next = {
        x: this.position.x - this.size + 1,
        y: this.position.y,
        direction: 'left'
      }
      return next

    } else if (direction === 'right') {
      next = {
        x: this.position.x + this.size - 1,
        y: this.position.y,
        direction: 'right'
      }
      return next

    }

  }
}

export default Obstacle