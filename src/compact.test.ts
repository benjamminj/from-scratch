import { compact } from './compact'

test('should remove the falsey values', () => {
  const result = compact([0, 1, '', NaN, 2, false, undefined, 3, null, 4])
  expect(result).toEqual([1, 2, 3, 4])
})

test('should not mutate the original array', () => {
  const original = [0, 1, '', NaN, 2, false, undefined, 3, null, 4]
  compact(original)
  expect(original).toEqual([0, 1, '', NaN, 2, false, undefined, 3, null, 4])
})
