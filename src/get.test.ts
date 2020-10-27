import { get } from './get'

test('should allow fetching a property off the object', () => {
  const obj = { a: 1 }
  const value = get(obj, 'a')
  expect(value).toEqual(1)
})

test('should allow fetching a nested property off the object', () => {
  const obj = {
    a: {
      b: {
        c: {
          d: 2,
        },
      },
    },
  }

  const value = get(obj, 'a.b.c.d')
  expect(value).toEqual(2)
})

test('should return the default value if the property is not present', () => {
  const obj = { a: 1 }
  const value = get(obj, 'b', 4)
  expect(value).toEqual(4)
})

test('should return the default value if the nested property is not present', () => {
  const obj = { a: { b: { c: { d: 1 } } } }
  const value = get(obj, 'a.b.potato.d.e', 4)
  expect(value).toEqual(4)
})

test('should allow accessing array indexes', () => {
  const obj = {
    a: {
      b: [{ value: 1 }, { value: 2 }, { value: 3 }],
    },
  }

  const value = get(obj, 'a.b[1].value')
  expect(value).toEqual(2)
})
