let history = []
let variants = {
  N: [
    "SW",
    "SE",
    "NS"
  ],
  E: [
    "NW",
    "SW",
    "WE"
  ],
  S: [
    "NW",
    "NE",
    "NS"
  ],
  W: [
    "NE",
    "SE",
    "WE"
  ],
  terminate: {
    N: "N",
    E: "E",
    S: "S",
    W: "W"
  }
}

let RandomVariant = (x) => {
  return Math.floor(Math.random() * x)
}

let VariantGenerator = (entrance) => {
  let variant

  // Generate new variant based on current entrance
  if (entrance === 'S') {
    variant = variants.S[RandomVariant(3)]

  } else if (entrance === 'N') {
    variant = variants.N[RandomVariant(3)]

  } else if (entrance === 'E') {
    variant = variants.E[RandomVariant(3)]

  } else if (entrance === 'W') {
    variant = variants.W[RandomVariant(3)]
  }

  // Return new variant with new exit
  return {
    variant: variant,
    exit: GetVariantExit(variant, entrance)
  }
}

let GetVariantExit = (variant, entrance) => {
  let exit = ""

  if (entrance === 'S') {
    switch(variant) {
      case 'NW':
        exit = 'E'
        break
      case 'NE':
        exit = 'W'
        break
      case 'NS':
        exit = 'N'
        break
    }

  } else if (entrance === 'N') {
    switch(variant) {
      case 'SW':
        exit = 'E'
        break
      case 'SE':
        exit = 'W'
        break
      case 'NS':
        exit = 'N'
        break
    }

  } else if (entrance === 'E') {
    switch(variant) {
      case 'NW':
        exit = 'S'
        break
      case 'SW':
        exit = 'N'
        break
      case 'WE':
        exit = 'W'
        break
    }

  } else if (entrance === 'W') {
    switch(variant) {
      case 'NE':
        exit = 'S'
        break
      case 'SE':
        exit = 'N'
        break
      case 'WE':
        exit = 'E'
        break
    }
  }

  return exit
}

let TurnGenerator = (object) => {
  let variant = object.variant
  let exit = object.exit
  if (variant === "N" && exit === "N") return "Straight"
  if (variant === "S" && exit === "S") return "Straight"
  if (variant === "E" && exit === "E") return "Straight"
  if (variant === "W" && exit === "W") return "Straight"

  if (variant === "NS" && exit === "N") return "Straight"
  if (variant === "NS" && exit === "S") return "Straight"
  if (variant === "WE" && exit === "W") return "Straight"
  if (variant === "WE" && exit === "E") return "Straight"

  if (variant === "NE" && exit === "W") return "Left"
  if (variant === "NE" && exit === "S") return "Right"

  if (variant === "NW" && exit === "E") return "Right"
  if (variant === "NW" && exit === "S") return "Left"

  if (variant === "SE" && exit === "N") return "Left"
  if (variant === "SE" && exit === "W") return "Right"

  if (variant === "SW" && exit === "E") return "Left"
  if (variant === "SW" && exit === "N") return "Right"
}

export { VariantGenerator, GetVariantExit, RandomVariant, TurnGenerator, history, variants }