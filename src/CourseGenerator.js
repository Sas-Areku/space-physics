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
    exit: 'N',
    id: 0
  }

  // Create starting obstacle
  obstacles.push(new Obstacle(start))

  // Generate obstacles in between starting and ending obstacles
  let nextObstacle

  for(let i = 0; i < length; i++) {

    // Generate next obstacle
    nextObstacle = obstacles[i].next()

    if (nextObstacle === "over") break // If over, stop generating more obstacles

    let newVariant = VariantGenerator(nextObstacle.entrance)

    // Establish new variant object
    let newVariantObject = {
      position: nextObstacle.position,
      name: newVariant.variant,
      entrance: nextObstacle.entrance,
      exit: newVariant.exit,
      id: obstacles.length
    }

    // Create new obstacle based on new variant object
    obstacles.push(new Obstacle(newVariantObject))
  }

  // Ending obstacle
  if (nextObstacle === "over") return // Don't generate last obstacle if over

  obstacles.push(new Obstacle(
    {
      position: nextObstacle.position,
      name: nextObstacle.entrance,
      entrance: nextObstacle.entrance,
      id: obstacles.length
    }
  ))
}

export { CourseGenerator, obstacles }