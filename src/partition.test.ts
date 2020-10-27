import { partition } from './partition'

test('should split an array into a "true" group and a "false" group', () => {
  const isOver5 = (x: number) => x >= 5
  const [over5, under5] = partition([1, 6, 5, 4, 9, 2, 1, 4, 6], isOver5)
  expect(over5).toEqual([6, 5, 9, 6])
  expect(under5).toEqual([1, 4, 2, 1, 4])
})

test('should split an object into a "true" group and a "false" group', () => {
  const obj = { a: 1, b: 5, c: 6, d: 3, e: 9, f: 2 }
  const isOver5 = (x: number) => x >= 5
  const [over5, under5] = partition(obj, isOver5)
  expect(over5).toEqual([5, 6, 9])
  expect(under5).toEqual([1, 3, 2])
})

test('should allow "matchesProperty" shorthand for 2nd argument', () => {
  const array = [
    { id: '1', value: 4 },
    { id: '2', value: 5 },
    { id: '3', value: 4 },
    { id: '4', value: 6 },
    { id: '5', value: 8 },
  ]

  const [is4, isNot4] = partition(array, ['value', 4])

  expect(is4).toEqual([
    { id: '1', value: 4 },
    { id: '3', value: 4 },
  ])

  expect(isNot4).toEqual([
    { id: '2', value: 5 },
    { id: '4', value: 6 },
    { id: '5', value: 8 },
  ])
})

test('should allow "property" shorthand for 2nd argument', () => {
  const array = [
    { id: '1', value: false },
    { id: '2', value: true },
    { id: '3', value: false },
    { id: '4', value: true },
    { id: '5', value: false },
  ]

  const [truthy, falsy] = partition(array, 'value')
  expect(truthy).toEqual([
    { id: '2', value: true },
    { id: '4', value: true },
  ])

  expect(falsy).toEqual([
    { id: '1', value: false },
    { id: '3', value: false },
    { id: '5', value: false },
  ])
})
