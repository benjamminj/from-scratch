import { property } from './property'

test('created function should get the property configured', () => {
  const obj = {
    a: 1,
  }

  const getA = property('a')
  expect(getA(obj)).toEqual(1)
})

test('created function should support nested object paths', () => {
  const obj = {
    a: {
      b: {
        c: 14,
      },
    },
  }

  const getC = property('a.b.c')
  expect(getC(obj)).toEqual(14)
})

test('created function should support array object paths', () => {
  const obj = {
    a: {
      b: {
        c: 2,
      },
    },
  }

  const getC = property(['a', 'b', 'c'])
  expect(getC(obj)).toEqual(2)
})
