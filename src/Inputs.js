let Input = {
  left: false,
  up: false,
  right: false,
  down: false,
  shift: false,
  ctrl: false,
  space: false,
  x: false,
  z: false,
}

let keyPress = () => {

  // Key down
  window.addEventListener('keydown', (event) => {
    if (event.code === 'ArrowLeft') {
      Input.left = true

    } else if (event.code === 'ArrowUp') {
      Input.up = true

    } else if (event.code === 'ArrowRight') {
      Input.right = true

    } else if (event.code === 'ArrowDown') {
      Input.down = true

    } else if (event.code === 'ShiftLeft') {
      Input.shift = true

    } else if (event.code === 'ControlLeft') {
      Input.ctrl = true

    } else if (event.code === 'Space') {
      Input.space = true
    
    } else if (event.code === 'KeyX') {
      Input.x = true

    } else if (event.code === 'KeyZ') {
      Input.z = true
    }
  }, {once: true})

  // Key up
  window.addEventListener('keyup', (event) => {
    if (event.code === 'ArrowLeft') {
      Input.left = false

    } else if (event.code === 'ArrowUp') {
      Input.up = false

    } else if (event.code === 'ArrowRight') {
      Input.right = false

    } else if (event.code === 'ArrowDown') {
      Input.down = false

    } else if (event.code === 'ShiftLeft') {
      Input.shift = false

    } else if (event.code === 'ControlLeft') {
      Input.ctrl = false

    } else if (event.code === 'Space') {
      Input.space = false

    } else if (event.code === 'KeyX') {
      Input.x = false

    } else if (event.code === 'KeyZ') {
      Input.z = false
    }
  }, {once: true})
}

export {keyPress, Input}