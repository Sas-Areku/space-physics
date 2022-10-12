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
      console.log("Key pressed: ", Input.left)

    } else if (event.code === 'ArrowUp') {
      Input.up = true
      console.log("Key pressed: ", Input.up)

    } else if (event.code === 'ArrowRight') {
      Input.right = true
      console.log("Key pressed: ", Input.right)

    } else if (event.code === 'ArrowDown') {
      Input.down = true
      console.log("Key pressed: ", Input.down)
    }
  }, {once: true})

  // Key up
  window.addEventListener('keyup', (event) => {
    if (event.code === 'ArrowLeft') {
      Input.left = false
      console.log("Key released: ", Input.left)

    } else if (event.code === 'ArrowUp') {
      Input.up = false
      console.log("Key released: ", Input.up)

    } else if (event.code === 'ArrowRight') {
      Input.right = false
      console.log("Key released: ", Input.right)

    } else if (event.code === 'ArrowDown') {
      Input.down = false
      console.log("Key released: ", Input.down)
    }
  }, {once: true})
}

export {keyPress, Input}