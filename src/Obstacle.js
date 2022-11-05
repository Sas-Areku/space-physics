import { velocity, position } from './Ship'
import { GetVariantExit, RandomVariant, history, variants } from './VariantGenerator'
import { obstacles } from './CourseGenerator.js'

class Obstacle {
  constructor(variant) {
    this.position = variant.position
    this.variant = variant.name
    this.entrance = variant.entrance
    this.exit = variant.exit
    this.id = variant.id

    this.alreadyTried = ""
    this.tries = 0

    this.size = 2048

    history.push({position: variant.position, name: this.variant})
  }

  display = (ctx) => {
    // Get background texture
    let texture = document.getElementById(this.variant)

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

    // Test for collision
    this.collision()
  }

  next = () => {
    let next
    let exit = this.exit

    if (exit === 'N') {
      next = {
        position: {
          x: this.position.x,
          y: this.position.y - this.size + 1,
        },
        entrance: 'S'
      }

    } else if (exit === 'S') {
      next = {
        position: {
          x: this.position.x,
          y: this.position.y + this.size - 1,
        },
        entrance: 'N'
      }

    } else if (exit === 'W') {
      next = {
        position: {
          x: this.position.x - this.size + 1,
          y: this.position.y,
        },
        entrance: 'E'
      }

    } else if (exit === 'E') {
      next = {
        position: {
          x: this.position.x + this.size - 1,
          y: this.position.y,
        },
        entrance: 'W'
      }
    }

    for (let i = 0; i < history.length; i++) {
      if (history[i].position.x > next.position.x - (this.size / 5) &&
          history[i].position.x < next.position.x + (this.size / 5) &&
          history[i].position.y > next.position.y - (this.size / 5) &&
          history[i].position.y < next.position.y + (this.size / 5)) {
        this.tries += 1

        let newVariant = []
        let newVariants

        if (this.entrance === 'N') newVariants = variants.N
        if (this.entrance === 'S') newVariants = variants.S
        if (this.entrance === 'E') newVariants = variants.E
        if (this.entrance === 'W') newVariants = variants.W

        newVariant = newVariants.filter(
          variant => 
            variant !== this.variant 
            && variant !== this.alreadyTried
        )

        if (this.tries > 3) {
          this.variant = this.entrance
          next = "over"
          break
        }

        // Save the variant we already tried
        this.alreadyTried = this.variant

        // Randomly pick a new possible variant
        this.variant = newVariant[RandomVariant(newVariant.length)]

        // Get the exit of the new variant
        this.exit = GetVariantExit(this.variant, this.entrance)

        // Re-run next function
        next = this.next()
        if (next === "over") break
      }
    }

    return next
  }

  collision = () => {
    let size = this.size
    let side = (this.size / 3) - 30
    let tilePosX = this.position.x - (this.size / 2)
    let tilePosY = this.position.y - (this.size / 2)

    if (position.x < tilePosX + size &&
        position.x > tilePosX &&
        position.y < tilePosY + size &&
        position.y > tilePosY
    ) {
      // Update next turn UI
      const currentTurn = document.getElementById("current-turn")
      const nextTurn = document.getElementById("next-turn")
      let nextId = this.id + 1
      if (nextId >= obstacles.length - 1) nextId = obstacles.length - 1
      currentTurn.innerText = obstacles[this.id].variant
      nextTurn.innerText = obstacles[nextId].variant

      // Collision for NS variant
      if (this.variant === "NS") {
        // Right side
        if (position.x > tilePosX + (size - side)) {
          velocity.x = 0
          position.x = tilePosX + (size - side)

        // Left side
        } else if (position.x < tilePosX + side) {
          velocity.x = 0
          position.x = tilePosX + side
        }
      }

      // Collision for WE variant
      if (this.variant === "WE") {
        // Bottom side
        if (position.y > tilePosY + (size - side)) {
          velocity.y = 0
          position.y = tilePosY + (size - side)

        // Top side
        } else if (position.y < tilePosY + side) {
          velocity.y = 0
          position.y = tilePosY + side
        }
      }

      // Collision for NW variant
      if (this.variant === "NW") {
        // Left side
        if (position.x < tilePosX + side) {
          velocity.x = 0
          position.x = tilePosX + side
        }

        // Top side
        if (position.y < tilePosY + side) {
          velocity.y = 0
          position.y = tilePosY + side
        }

        // Bottom-right corner tile
        // Left side of tile
        if (position.x > tilePosX + (size - side) && 
            position.y > tilePosY + (size - side)) {
          velocity.x = 0
          position.x = tilePosX + (size - side)

        // Top of tile
        } else if (position.y > tilePosY + (size - side) && 
                   position.x > tilePosX + (size - side)) {
          velocity.y = 0
          position.y = tilePosY + (size - side)
        }
      }

      // Collision for NE variant
      if (this.variant === "NE") {
        // Right wall
        if (position.x > tilePosX + (size - side)) {
          velocity.x = 0
          position.x = tilePosX + (size - side)
        }

        // Top wall
        if (position.y < tilePosY + side) {
          velocity.y = 0
          position.y = tilePosY + side
        }

        // Bottom-left corner tile
        // Right of tile
        if (position.x < tilePosX + side && 
            position.y > tilePosY + (size - side)) {
          velocity.x = 0
          position.x = tilePosX + side

        // Top of tile
        } else if (position.y > tilePosY + (size - side) && 
                   position.x < tilePosX + side) {
          velocity.y = 0
          position.y = tilePosY + (size - side)
        }
      }

      // Collision for SW variant
      if (this.variant === "SW") {
        // Left wall
        if (position.x < tilePosX + side) {
          velocity.x = 0
          position.x = tilePosX + side
        }

        // Bottom wall
        if (position.y > tilePosY + (size - side)) {
          velocity.y = 0
          position.y = tilePosY + (size - side)
        }

        // Top-right corner tile
        // Left of tile
        if (position.x > tilePosX + (size - side) && 
            position.y < tilePosY + side) {
          velocity.x = 0
          position.x = tilePosX + (size - side)

        // Bottom of tile
        } else if (position.y < tilePosY + side && 
                   position.x > tilePosX + (size - side)) {
          velocity.y = 0
          position.y = tilePosY + side
        }
      }

      // Collision for SE variant
      if (this.variant === "SE") {
        // Right wall
        if (position.x > tilePosX + (size - side)) {
          velocity.x = 0
          position.x = tilePosX + (size - side)
        }

        // Bottom wall
        if (position.y > tilePosY + (size - side)) {
          velocity.y = 0
          position.y = tilePosY + (size - side)
        }

        // Top-left corner tile
        // Right of tile
        if (position.x < tilePosX + side && 
            position.y < tilePosY + side) {
          velocity.x = 0
          position.x = tilePosX + side

        // Bottom of tile
        } else if (position.y < tilePosY + side && 
                   position.x < tilePosX + side) {
          velocity.y = 0
          position.y = tilePosY + side
        }
      }

      // Collision for N variant
      if (this.variant === "N") {
        // Right side
        if (position.x > tilePosX + (size - side)) {
          velocity.x = 0
          position.x = tilePosX + (size - side)

        // Left side
        } else if (position.x < tilePosX + side) {
          velocity.x = 0
          position.x = tilePosX + side
        }

        // Bottom side
        if (position.y > tilePosY + (size - side)) {
          velocity.y = 0
          position.y = tilePosY + (size - side)
        }
      }

      // Collision for W variant
      if (this.variant === "W") {
        // Bottom side
        if (position.y > tilePosY + (size - side)) {
          velocity.y = 0
          position.y = tilePosY + (size - side)

        // Top side
        } else if (position.y < tilePosY + side) {
          velocity.y = 0
          position.y = tilePosY + side
        }

        // Right side
        if (position.x > tilePosX + (size - side)) {
          velocity.x = 0
          position.x = tilePosX + (size - side)
        }
      }

      // Collision for S variant
      if (this.variant === "S") {
        // Right side
        if (position.x > tilePosX + (size - side)) {
          velocity.x = 0
          position.x = tilePosX + (size - side)

        // Left side
        } else if (position.x < tilePosX + side) {
          velocity.x = 0
          position.x = tilePosX + side
        }

        // Top side
        if (position.y < tilePosY + side) {
          velocity.y = 0
          position.y = tilePosY + side
        }
      }

      // Collision for E variant
      if (this.variant === "E") {
        // Bottom side
        if (position.y > tilePosY + (size - side)) {
          velocity.y = 0
          position.y = tilePosY + (size - side)

        // Top side
        } else if (position.y < tilePosY + side) {
          velocity.y = 0
          position.y = tilePosY + side
        }

        // Left side
        if (position.x < tilePosX + side) {
          velocity.x = 0
          position.x = tilePosX + side
        }
      }
    }
  }
}

export default Obstacle