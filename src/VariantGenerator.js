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

export { VariantGenerator, GetVariantExit, RandomVariant, history, variants }