export const partition = <T>(
  collection: T[] | { [key: string]: T },
  predicate: (value: T) => boolean
) => {
  const truthy: T[] = []
  const falsy: T[] = []

  const iterableCollection = Array.isArray(collection)
    ? collection
    : Object.values(collection)

  for (const value of iterableCollection) {
    const isTruthy = predicate(value)
    const array = isTruthy ? truthy : falsy
    array.push(value)
  }

  return [truthy, falsy]
}
