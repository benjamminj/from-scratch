/**
 *
 *
 * @see https://lodash.com/docs/4.17.15#chunk
 */
export const chunk = <T extends any>(array: T[], size: number = 1) => {
  const chunkedArray: T[][] = []
  for (const value of array) {
    if (chunkedArray.length === 0) {
      chunkedArray.push([value])
      continue
    }

    const lastIndex = chunkedArray.length - 1
    const lastChunk = chunkedArray[lastIndex]

    if (lastChunk.length === size) {
      chunkedArray.push([value])
    } else {
      chunkedArray[lastIndex] = [...lastChunk, value]
    }
  }

  return chunkedArray
}
