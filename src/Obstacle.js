import { velocity } from './Ship'
import { GetVariantExit, RandomVariant, history, variants } from './VariantGenerator'

class Obstacle {
  constructor(variant) {
    this.position = variant.position
    this.variant = variant.name
    this.entrance = variant.entrance
    this.exit = variant.exit

    this.alreadyTried = ""
    this.finalTry = ""

    this.size = 50

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
      if (/* next.position.x === history[i].x && next.position.y === history[i].y */
        history[i].position.x > next.position.x - (this.size / 5) &&
        history[i].position.x < next.position.x + (this.size / 5) &&
        history[i].position.y > next.position.y - (this.size / 5) &&
        history[i].position.y < next.position.y + (this.size / 5)
        // Can revert this code to above function once everything works
      ) {
        let newVariant = []
        let newVariants

        console.log("Histor-key: " + i)
        console.log("History variant: " + history[i].name)

        console.log("Entrance: " + this.entrance)
        if (this.entrance === 'N') newVariants = variants.N
        if (this.entrance === 'S') newVariants = variants.S
        if (this.entrance === 'E') newVariants = variants.E
        if (this.entrance === 'W') newVariants = variants.W

        newVariant = newVariants.filter(
          variant => 
            variant !== this.variant 
            && variant !== this.alreadyTried
        )

        if (this.finalTry !== "") {
          this.variant = this.entrance
          break
        }

        // Save the variant we already tried
        this.finalTry = this.alreadyTried
        this.alreadyTried = this.variant 

        console.log("Already tried: " + this.variant)

        // Randomly pick a new possible variant
        this.variant = newVariant[RandomVariant(newVariant.length)]
        console.log("Variant: " + this.variant)

        // Get the exit of the new variant
        this.exit = GetVariantExit(this.variant, this.entrance)
        console.log("Exit: " + this.exit)

        // Re-run next function
        next = this.next()
      }
    }

    if(this.alreadyTried !== "") console.log(next)
    return next
  }
}

export default Obstacle