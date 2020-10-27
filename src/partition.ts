import { matchesProperty } from './matchesProperty'
import { property } from './property'

type PredicateFunction<T> = (value: T) => boolean
type PredicateArray = [string, unknown]
type PredicateString = string

type Predicate<T> = PredicateFunction<T> | PredicateArray | PredicateString

const determinePredicateFunction = <T>(predicate: Predicate<T>) => {
  if (Array.isArray(predicate)) return matchesProperty(...predicate)
  if (typeof predicate === 'string') return property(predicate)
  return predicate
}

export const partition = <T>(
  collection: T[] | { [key: string]: T },
  predicate: Predicate<T>
) => {
  const truthy: T[] = []
  const falsy: T[] = []

  const iterableCollection = Array.isArray(collection)
    ? collection
    : Object.values(collection)

  const testValue = determinePredicateFunction(predicate)

  for (const value of iterableCollection) {
    const isTruthy = testValue(value)
    const array = isTruthy ? truthy : falsy
    array.push(value)
  }

  return [truthy, falsy]
}
