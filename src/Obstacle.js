import { velocity } from './Ship'
import { variants, history } from './ObstacleGenerator'

class Obstacle {
  constructor(position, variant) {
    this.position = position
    this.variant = variant
    this.size = 50
    this.alreadyTried = ""
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

    } else if (direction === 'down') {
      next = {
        x: this.position.x,
        y: this.position.y + this.size - 1,
        direction: 'down'
      }

    } else if (direction === 'left') {
      next = {
        x: this.position.x - this.size + 1,
        y: this.position.y,
        direction: 'left'
      }

    } else if (direction === 'right') {
      next = {
        x: this.position.x + this.size - 1,
        y: this.position.y,
        direction: 'right'
      }

    }

    let randomVariant = (x) => {
      return Math.floor(Math.random() * x)
    }

    for (let i = 0; i < history.length; i++) {
      if (next.x === history[i].x && next.y === history[i].y) {
        let newVariant = []

        if (this.position.direction === 'up') {
          newVariant = variants.up.filter(
            variant => 
              variant !== this.variant
              && variant !== 'terminateUp' 
              && variant !== this.alreadyTried
          )
        } else if (this.position.direction === 'down') {
          newVariant = variants.down.filter(
            variant => 
              variant !== this.variant 
              && variant !== 'terminateDown' 
              && variant !== this.alreadyTried
          )
        } else if (this.position.direction === 'left') {
          newVariant = variants.left.filter(
            variant => 
              variant !== this.variant 
              && variant !== 'terminateLeft' 
              && variant !== this.alreadyTried
          )
        } else if (this.position.direction === 'right') {
          newVariant = variants.right.filter(
            variant => 
              variant !== this.variant 
              && variant !== 'terminateRight' 
              && variant !== this.alreadyTried
          )
        }

        this.alreadyTried = this.variant
        // console.log(this.alreadyTried)
        this.variant = newVariant[randomVariant(newVariant.length)]
        this.next()
      }
    }

    return next
  }
}

export default Obstacle