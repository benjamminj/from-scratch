/**
 * Creates a new array with all of the falsey values removed.
 *
 * The following values are considered to be "falsey" by this
 * function: `NaN`, `0`, `undefined`, `null`, `""`, `false`
 *
 * @see https://lodash.com/docs/4.17.15#compact
 */
export const compact = <T extends any[]>(array: T) => {
  return array.filter(x => Boolean(x) && !Number.isNaN(x))
}
