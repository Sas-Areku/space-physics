import {keyPress, Input} from './Inputs'

// Define ship attributes
let velocity = {
  x: 0,
  y: 0
}

let acceleration = {
  x: 0,
  y: 0
}

let force = {
  x: 0,
  y: 0
}

let thrust = 0
let thrustPercent = 0
let mass = 100

let direction = -(Math.PI / 2) // North
let rotationSpeed = 0


let updateShip = () => {
  // Accept keyboard input
  keyPress()

  // Ship physics
  force.x = Math.cos(direction) * thrust
  force.y = Math.sin(direction) * thrust
  acceleration.x = force.x / mass
  acceleration.y = force.y / mass
  velocity.x += acceleration.x
  velocity.y += acceleration.y

  // Rotate ship
  direction += rotationSpeed

  if (Input.right) rotationSpeed += thrust / 1000 / mass
  if (Input.left) rotationSpeed -= thrust / 1000 / mass

  if (rotationSpeed > 0.05) rotationSpeed = 0.05
  if (rotationSpeed < -0.05) rotationSpeed = -0.05

  //Ship thrust
  if (Input.shift) thrust += 0.35
  if (Input.ctrl) thrust -= 0.35

  if (thrust < 0) thrust = 0
  if (thrust > 40) thrust = 40

  if (Input.x) thrust = 0
  if (Input.z) thrust = 40

  thrustPercent = Math.round(thrust * 2.5)
  document.getElementById('thrust-percent').innerHTML = thrustPercent
}

let drawShip = (ctx) => {
  // Get ship sprite
  const ship = document.getElementById('ship')

  // Rotate ship
  ctx.translate((512 - 25) + (50 / 2), (384 - 45) + (90 / 2))
  ctx.rotate(direction + (Math.PI / 2))
  ctx.translate(-((512 - 25) + (50 / 2)), -((384 - 45) + (90 / 2)))

  // Draw ship
  ctx.fillStyle = "hsl(0,50%,100%)"
  ctx.drawImage(ship, 512 - 25, 384 - 45, 50, 90)
}

export {updateShip, drawShip, velocity, thrustPercent}