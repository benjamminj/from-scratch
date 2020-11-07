import { get } from './get'

/**
 * Takes a path string and creates a new function. The generated function will take
 * an object as an argument and return the value of the object at the path.
 *
 * @see https://lodash.com/docs/4.17.15#get
 */
export const property = (path: string | string[]) => (obj: unknown) => {
  return get(obj as object, path)
}
