import { debounce } from './debounce'

jest.useFakeTimers()

beforeEach(() => {
  jest.clearAllTimers()
})

test('debounced function runs after the wait time is up', () => {
  const mock = jest.fn()
  const debounced = debounce(mock, 10)

  debounced(1, 2)

  jest.advanceTimersByTime(9)
  expect(mock).toHaveBeenCalledTimes(0)

  jest.advanceTimersByTime(1)
  expect(mock).toHaveBeenCalledTimes(1)
})

test('debounced function should only run 1x if called multiple times within the wait time', () => {
  const mock = jest.fn()
  const debounced = debounce(mock, 10)

  debounced(1, 2)
  debounced(3, 4)

  jest.advanceTimersByTime(9)
  expect(mock).toHaveBeenCalledTimes(0)

  jest.advanceTimersByTime(1)
  expect(mock).toHaveBeenCalledTimes(1)
})

test('should restart the timer every time the debounced function is called', () => {
  const add = (a: number, b: number) => a + b
  const mock = jest.fn(add)
  const debounced = debounce(mock, 10)

  debounced(1, 2)
  jest.advanceTimersByTime(9)
  expect(mock).toHaveBeenCalledTimes(0)

  debounced(3, 4)
  jest.advanceTimersByTime(9)
  expect(mock).toHaveBeenCalledTimes(0)

  jest.advanceTimersByTime(1)
  expect(mock).toHaveBeenCalledTimes(1)
  expect(mock).toHaveBeenCalledWith(3, 4)
})

test("should allow using the first invocation's arguments with the `leading` option", () => {
  const mock = jest.fn()
  const debounced = debounce(mock, 10, { leading: true })

  debounced(1, 2)
  debounced(3, 4)

  jest.advanceTimersByTime(10)
  expect(mock).toHaveBeenCalledWith(1, 2)
})

test('should invoke the function if the `maxWait` times out before the `wait` time', () => {
  const mock = jest.fn()
  const debounced = debounce(mock, 10, { maxWait: 15 })

  jest.advanceTimersByTime(100)

  debounced(1, 2)

  jest.advanceTimersByTime(9)
  debounced(3, 4)

  expect(mock).toBeCalledTimes(0)

  jest.advanceTimersByTime(6)

  expect(mock).toBeCalledTimes(1)
})

test('should only invoke the function 1x after `maxWait` times out', () => {
  const mock = jest.fn()
  const debounced = debounce(mock, 10, { maxWait: 15 })

  debounced(1, 2)
  jest.advanceTimersByTime(9)
  debounced(3, 4)
  jest.advanceTimersByTime(5)

  jest.advanceTimersByTime(6)
})

test('should cancel any pending invocations when "cancel" is called', () => {
  const mock = jest.fn()
  const debounced = debounce(mock, 10)

  debounced(1, 2)
  jest.advanceTimersByTime(9)
  debounced.cancel()
  jest.advanceTimersByTime(1)
  expect(mock).toBeCalledTimes(0)
})

test('should cancel any `maxWait` timers when `cancel` is called', () => {
  const mock = jest.fn()
  const debounced = debounce(mock, 10, { maxWait: 9 })

  debounced(1, 2)
  jest.advanceTimersByTime(5)
  debounced.cancel()
  jest.advanceTimersByTime(5)
  expect(mock).toBeCalledTimes(0)
})

test('should run any pending invocations when `flush` is called', () => {
  const mock = jest.fn()
  const debounced = debounce(mock, 10)

  debounced(1, 2)
  jest.advanceTimersByTime(5)
  debounced.flush()
  expect(mock).toBeCalledTimes(1)
  expect(mock).toBeCalledWith(1, 2)
})

test.todo('`flush` should respect the `leading` flag')
