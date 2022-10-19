import Obstacle from './Obstacle'

let obstacles = []
let variants = {
  up: [
    'straightUp',
    'leftUp',
    'rightUp',
    'terminateUp'
  ],
  down: [
    'straightDown',
    'leftDown',
    'rightDown',
    'terminateDown'
  ],
  left: [
    'straightLeft',
    'leftLeft',
    'rightLeft',
    'terminateLeft'
  ],
  right: [
    'straightRight',
    'leftRight',
    'rightRight',
    'terminateRight'
  ]
}

let history = []

let ObstacleGenerator = (length) => {
  const startPosition = {
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
    direction: 'up'
  }

  let randomVariant = (x) => {
    return Math.floor(Math.random() * x)
  }

  // Starting obstacle
  obstacles.push(new Obstacle(startPosition, variants.down[3]))

  // Obstacles in between start and end
  for(let i = 1; i < length; i++) {
    console.log(history)

    // Get direction of previous obstacle
    let direction = obstacles[i-1].next().direction

    // Generate new obstacle based on previous direction
    if (direction === 'up') {
      obstacles.push(new Obstacle(
        obstacles[i-1].next(), 
        variants.up[randomVariant(3)]
      ))

    } else if (direction === 'down') {
      obstacles.push(new Obstacle(
        obstacles[i-1].next(), 
        variants.down[randomVariant(3)]
      ))

    } else if (direction === 'left') {
      obstacles.push(new Obstacle(
        obstacles[i-1].next(), 
        variants.left[randomVariant(3)]
      ))

    } else if (direction === 'right') {
      obstacles.push(new Obstacle(
        obstacles[i-1].next(), 
        variants.right[randomVariant(3)]
      ))
    }
  }

  // Ending Obstacle
  if (obstacles[length-1].next().direction === 'up') {
    obstacles.push(new Obstacle(
      obstacles[length-1].next(), 
      variants.up[3]
    ))

  } else if (obstacles[length-1].next().direction === 'down') {
    obstacles.push(new Obstacle(
      obstacles[length-1].next(), 
      variants.down[3]
    ))

  } else if (obstacles[length-1].next().direction === 'left') {
    obstacles.push(new Obstacle(
      obstacles[length-1].next(), 
      variants.left[3]
    ))

  } else if (obstacles[length-1].next().direction === 'right') {
    obstacles.push(new Obstacle(
      obstacles[length-1].next(), 
      variants.right[3]
    ))
  }
}

export { ObstacleGenerator, obstacles, history }