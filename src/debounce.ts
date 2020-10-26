type DebounceOptions = {
  leading?: boolean
  maxWait?: number
}

/**
 * Implementation of lodash.debounce from scratch.
 *
 * Returns a debounced function which will only be invoked after `wait` milliseconds
 * have passed since the last invocation of the original function.
 *
 * One notable difference from lodash.debounce is that the `trailing`
 * option is _not_ supported by this function. By default the debounced
 * function will be invoked with the last set of arguments (`trailing` behavior).
 *
 * @see https://lodash.com/docs/4.17.15#debounce
 */
export const debounce = <Fn extends (...args: any[]) => any>(
  fn: Fn,
  wait = 0,
  { leading = false, maxWait }: DebounceOptions = {}
) => {
  type SetTimeoutId = number | undefined

  let timeout: SetTimeoutId = undefined
  let storedArguments: Parameters<Fn> | undefined = undefined
  let maxWaitTimeout: SetTimeoutId = undefined

  const clearTimeouts = () => {
    window.clearTimeout(maxWaitTimeout)
    window.clearTimeout(timeout)
  }

  const invokeFunction = () => {
    // Since we're dealing with timers and timeouts, it's possible that this
    // can get run 2x in close succession. If the stored argument state has
    // been cleared by another run of the function, do nothing.
    if (!storedArguments) return

    fn(...storedArguments)

    // reset the state inside of the closure before the next function call.
    storedArguments = undefined
    timeout = undefined
    maxWaitTimeout = undefined
  }

  const debouncedFn = (...args: Parameters<Fn>) => {
    // if there's no stored arguments, we need to store them
    // if leading !== true, we need to update the arguments
    if (storedArguments === undefined || !leading) {
      storedArguments = args
    }

    if (timeout !== undefined) {
      window.clearTimeout(timeout)
    }

    // store the timeout
    timeout = window.setTimeout(invokeFunction, wait)

    if (maxWait !== undefined && maxWaitTimeout === undefined) {
      maxWaitTimeout = window.setTimeout(invokeFunction, maxWait)
    }
  }

  debouncedFn.cancel = clearTimeouts

  debouncedFn.flush = () => {
    // clear all of the timeouts
    clearTimeouts()
    invokeFunction()
  }

  return debouncedFn
}
