export const get = (
  obj: object,
  path: string,
  defaultValue: unknown = undefined
) => {
  // split the path at every "."
  const pathSegments = path.split(/[\[\]\.]/).filter(x => x)
  let value

  try {
    for (let i = 0; i < pathSegments.length; i++) {
      const key = pathSegments[i]

      if (i === 0) {
        value = obj[key]
        continue
      }

      value = value[key]
    }
  } catch (error) {
    return defaultValue
  }

  return value === undefined ? defaultValue : value
}
