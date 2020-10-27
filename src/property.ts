import { get } from './get'

export const property = (path: string | string[]) => (obj: unknown) => {
  return get(obj as object, path)
}
