const getPathSegments = (path: string | string[]) => {
  if (Array.isArray(path)) return path

  // split the path at every "."
  return path.split(/[\[\]\.]/).filter(x => x)
}

/**
 * Fetches a property out of a source object. Optionally, takes a default value
 * that will be returned if (and only if) the source object does not have a value
 * at the specified path, or if the value is `undefined`.
 *
 * @see https://lodash.com/docs/4.17.15#get
 */
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
