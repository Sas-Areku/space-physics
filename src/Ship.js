import {keyPress, Input} from './Inputs'

// Define ship attributes
let position = {
  x: 512 - 25,
  y: 384 - 45
}

let speed = {
  x: 512 - 25,
  y: 384 - 45,
  total: 0
}

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

let sas = false
let sasPermission = false
let sasStatus = "Off"

let animation = 0
let animationFPS = 4
let animationFrame = 0

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

  if (Input.t) {
    if (sasPermission === false) {
      sas = !sas
    }
    sasPermission = true
  } else {
    sasPermission = false
  }

  if (sas) {
    rotationSpeed = 0
    sasStatus = "On"
  } else {
    sasStatus = "Off"
  }

  document.getElementById('sas').innerHTML = sasStatus

  // Ship thrust
  if (Input.shift) thrust += 0.35
  if (Input.ctrl) thrust -= 0.35

  if (thrust < 0) thrust = 0
  if (thrust > 40) thrust = 40

  if (Input.x) thrust = 0
  if (Input.z) thrust = 40

  thrustPercent = Math.round(thrust * 2.5)
  document.getElementById('thrust-percent').innerHTML = thrustPercent

  speed.x = velocity.x
  speed.y = velocity.y

  if (speed.x < 0) speed.x *= -1
  if (speed.y < 0) speed.y *= -1

  speed.total = Math.round((Math.sqrt((speed.x * speed.x) + (speed.y * speed.y)) + Number.EPSILON) * 100) / 100
  document.getElementById('velocity').innerHTML = speed.total

  // Ship camera
  position.x = (512 - 25) + velocity.x
  position.y = (384 - 45) + velocity.y

  /* position.x += velocity.x / 300
  position.y += velocity.y / 300 */

  if (position.x < 200) position.x = 200
  if (position.x > (1024 - 200)) position.x = (1024 - 200)
  if (position.y < 200) position.y = 200
  if (position.y > (768 - 200)) position.y= (768 - 200)
}

let drawShip = (ctx) => {
  // Get ship sprite
  const ship = document.getElementById('ship')
  const thrust = document.getElementById('thrust')

  // Animation frame
  animation++

  if (animation % animationFPS === 0) {
    animationFrame += 239
    if (animationFrame >= 956) animationFrame = 0
  }

  // Rotate ship
  ctx.translate(position.x + (50 / 2), position.y + (90 / 2))
  ctx.rotate(direction + (Math.PI / 2))
  ctx.translate(-(position.x + (50 / 2)), -(position.y + (90 / 2)))

  // Draw ship
  ctx.drawImage(ship, position.x, position.y, 50, 90)

  if (thrustPercent > 0) {
    ctx.drawImage(
      thrust,
      0, animationFrame, // Coord of crop
      157, 239, // Size of crop
      position.x+25 + ((thrustPercent * -1) / 8.34), position.y+78, // Coord of displayed image
      thrustPercent / (100 / 25), thrustPercent / (100 / 38) // Size of displayed image
    )
  }
}

export {updateShip, drawShip, velocity}