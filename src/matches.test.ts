import { matches } from './matches'

test('created function should return "true" if the partial object matches the source object', () => {
  const object = {
    a: 1,
    b: 2,
    c: 3,
  }

  const isMatch = matches({ a: 1, b: 2 })(object)
  expect(isMatch).toEqual(true)
})

test('created function should return "false" if the partial object does not match the source object', () => {
  const object = {
    a: 1,
    b: 2,
    c: 3,
  }

  const isMatch = matches({ a: 1, b: 5 })(object)
  expect(isMatch).toEqual(false)
})

test('created function should return "false" if any properties do not match the source object', () => {
  const object = {
    a: 1,
    b: 2,
    c: 3,
  }

  const isMatch = matches({ a: 1, d: 5 })(object)
  expect(isMatch).toEqual(false)
})
