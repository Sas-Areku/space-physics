class Camera {
  constructor() {
    this.entities = []
  }

  add = (entity, plane) => {
    let object = {
      x: entity.x,
      y: entity.y,
      plane: plane
    }

    this.entities.push(object)
  }
}

export default Camera