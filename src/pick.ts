export const pick = <T extends object>(object: T, paths: (keyof T)[]) => {
  const pickedObject: Partial<T> = {}

  for (const key of paths) {
    const value = object[key]
    pickedObject[key] = value
  }

  return pickedObject
}
