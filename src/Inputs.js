let Input = {
  left: false,
  up: false,
  right: false,
  down: false,
  shift: false,
  ctrl: false,
  space: false,
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
    }
  }, {once: true})
}

export {keyPress, Input}