type DebounceOptions = {
  leading?: boolean
  maxWait?: number
}

// stretch goal:
// - flush method
export const debounce = <Fn extends (...args: any[]) => any>(
  fn: Fn,
  wait = 0,
  { leading = false, maxWait }: DebounceOptions = {}
) => {
  type SetTimeoutId = number | undefined

  let timeout: SetTimeoutId = undefined
  let storedArguments: Parameters<Fn> | undefined = undefined
  let maxWaitTimeout: SetTimeoutId = undefined

  const debouncedFn = (...args: Parameters<Fn>) => {
    // if there's no stored arguments, we need to store them
    // if leading !== true, we need to update the arguments
    if (storedArguments === undefined || !leading) {
      storedArguments = args
    }

    // on each run, check whether a timeout has been stored
    // if yes, clear it
    if (timeout !== undefined) {
      window.clearTimeout(timeout)
    }

    // store the timeout
    timeout = window.setTimeout(() => {
      fn(...storedArguments as Parameters<Fn>)
    }, wait)

    if (maxWait !== undefined && maxWaitTimeout === undefined) {
      maxWaitTimeout = window.setTimeout(() => {
        fn(...storedArguments as Parameters<Fn>)
      }, maxWait)
    }
  }

  debouncedFn.cancel = () => {
    // clear all of the timeouts
    window.clearTimeout(maxWaitTimeout)
    window.clearTimeout(timeout)
  }

  debouncedFn.flush = () => {
    // clear all of the timeouts
    window.clearTimeout(maxWaitTimeout)
    window.clearTimeout(timeout)
    fn(...storedArguments as Parameters<Fn>)
  }

  return debouncedFn
}
