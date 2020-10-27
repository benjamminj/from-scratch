const getPathSegments = (path: string | string[]) => {
  if (Array.isArray(path)) return path

  // split the path at every "."
  return path.split(/[\[\]\.]/).filter(x => x)
}

export const get = (
  obj: object,
  path: string | string[],
  defaultValue: unknown = undefined
) => {
  const pathSegments = getPathSegments(path)
  let value

  try {
    for (let i = 0; i < pathSegments.length; i++) {
      const key = pathSegments[i]

      if (i === 0) {
        value = (obj as any)[key]
        continue
      }

      value = value[key]
    }
  } catch (error) {
    return defaultValue
  }

  return value === undefined ? defaultValue : value
}
