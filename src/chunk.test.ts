import { chunk } from './chunk'

test('should split the array by the amount', () => {
  expect(chunk([1, 2, 3, 4, 5, 6], 2)).toEqual([
    [1, 2],
    [3, 4],
    [5, 6],
  ])
})

test("if the array can't be split evenly, the last array should contain the rest", () => {
  expect(chunk([1, 2, 3, 4, 5, 6, 7, 8], 3)).toEqual([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8],
  ])
})
test('should default to a chunk size of 1', () => {
  expect(chunk([1, 2, 3, 4, 5, 6])).toEqual([[1], [2], [3], [4], [5], [6]])
})
