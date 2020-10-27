type Object = { [key: string]: any }

export const matches = (partialSrc: Object) => (src: Object): boolean => {
  for (const key in partialSrc) {
    const valueFromPartialSrc = partialSrc[key]
    const valueFromSrc = src[key]

    if (valueFromPartialSrc !== valueFromSrc) return false
  }

  return true
}
