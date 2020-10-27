export const matchesProperty = <T extends object>(
  path: string,
  srcValue: unknown
) => (obj: T): boolean => {
  const value = obj[path as keyof T]
  return value === srcValue
}
