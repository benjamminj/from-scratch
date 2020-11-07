/**
 * For a given object and an array object paths, creates a new object containing
 * only the listed object paths.
 *
 * @see https://lodash.com/docs/4.17.15#pick
 * @todo The behavior in lodash seems to be to allow deep-picking through
 * an object. This could be a future enhancement.
 */
export const pick = <T extends object>(object: T, paths: (keyof T)[]) => {
  const pickedObject: Partial<T> = {}

  for (const key of paths) {
    const value = object[key]
    pickedObject[key] = value
  }

  return pickedObject
}
