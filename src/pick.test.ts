import { pick } from './pick'

test('should return an object with only the picked properties', () => {
  const obj = { a: 1, b: 2, c: 3 }
  const value = pick(obj, ['a', 'c'])
  expect(value).toEqual({ a: 1, c: 3 })
})
