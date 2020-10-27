import { matchesProperty } from './matchesProperty'

test('created function should return "true" if the object has the property and matches the value', () => {
  const obj = { a: 5 }
  const hasA5 = matchesProperty('a', 5)
  expect(hasA5(obj)).toEqual(true)
})

test('created function should return "false" if the object has the property and does not match the value', () => {
  const obj = { a: 5 }
  const hasA6 = matchesProperty('a', 6)
  expect(hasA6(obj)).toEqual(false)
})

test('created function should return "false" if the object does not have the property', () => {
  const obj = { a: 5 }
  const hasB6 = matchesProperty('b', 6)
  expect(hasB6(obj)).toEqual(false)
})
