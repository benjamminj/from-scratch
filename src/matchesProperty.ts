export const matchesProperty = (path: string, srcValue: unknown) => (
  src: unknown
): boolean => {
  if (src !== null && typeof src === 'object') {
    const srcObject = src as { [key: string]: unknown }
    const value = srcObject[path]
    return value === srcValue
  }

  return false
}
