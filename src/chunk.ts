/**
 * Take an array and divide it into even subarrays. If the array
 * cannot be divided evenly, the last subarray will contain the
 * remainder of the items.
 *
 * @see https://lodash.com/docs/4.17.15#chunk
 */
export const chunk = <T extends any>(array: T[], size: number = 1) => {
  let index = 0
  const chunked: T[][] = []

  while (index < array.length) {
    // take an array slice from the start of the index to the end of the chunk,
    // or the end of the array
    const chunk = array.slice(index, index + size)
    index += size
    chunked.push(chunk)
  }

  return chunked
}
