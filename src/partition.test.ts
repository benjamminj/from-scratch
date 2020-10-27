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
