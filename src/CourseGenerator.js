import Obstacle from './Obstacle'
import { VariantGenerator } from './VariantGenerator'

let obstacles = []

let CourseGenerator = (length) => {
  // Determine starting obstacle
  const start = {
    position: {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
    },
    name: 'N',
    exit: 'N'
  }

  // Create starting obstacle
  obstacles.push(new Obstacle(start))

  // Generate obstacles in between starting and ending obstacles
  for(let i = 0; i < length; i++) {

    // Generate new variant based
    let nextObstacle = obstacles[i].next()

    let newVariant = VariantGenerator(nextObstacle.entrance)

    // Establish new variant object
    let newVariantObject = {
      position: nextObstacle.position,
      name: newVariant.variant,
      entrance: nextObstacle.entrance,
      exit: newVariant.exit
    }

    // Create new obstacle based on new variant object
    obstacles.push(new Obstacle(newVariantObject))
  }

  // Ending obstacle
  /* let lastNext = obstacles[length - 1].next()

  if (lastNext !== "over") {
    if (lastNext.entrance === 'N') {
      obstacles.push(new Obstacle(
        {
          position: lastNext.position,
          name: 'N',
          entrance: lastNext.entrance
        }
      ))

    } else if (lastNext.entrance === 'S') {
      obstacles.push(new Obstacle(
        {
          position: lastNext.position,
          name: 'N',
          entrance: lastNext.entrance
        }
      ))

    } else if (lastNext.entrance === 'E') {
      obstacles.push(new Obstacle(
        {
          position: lastNext.position,
          name: 'E',
          entrance: lastNext.entrance
        }
      ))

    } else if (lastNext.entrance === 'W') {
      obstacles.push(new Obstacle(
        {
          position: lastNext.position,
          name: 'W',
          entrance: lastNext.entrance
        }
      ))
    }
  } */
}

export { CourseGenerator, obstacles }