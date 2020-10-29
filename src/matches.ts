type Object = { [key: string]: any }

/**
 * Creates a "matcher" function that returns "true" if the source object
 * matches the partial object configured.
 *
 * @see https://lodash.com/docs/4.17.15#matches
 *
 * @note In Lodash's version, a shallow value equality check is used instead of
 * a _referential equality check_ (used here). This means that nested objects inside
 * of the `partialSrc` argument will result in a "false" response. A future enhancement
 * may be to update the equality check to validate 1 level of nested objects.
 */
export const matches = (partialSrc: Object) => (src: Object): boolean => {
  for (const key in partialSrc) {
    const valueFromPartialSrc = partialSrc[key]
    const valueFromSrc = src[key]

    if (valueFromPartialSrc !== valueFromSrc) return false
  }

  return true
}
