import isObject from './isObject'

export default function objectIsEmpty<T extends { [key: string]: any }>(
  obj: T
): boolean | TypeError {
  if (!isObject(obj)) throw new TypeError('Expected first argument of "objectIsEmpty" to be an actual object.')

  for (const prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      return false
    }
  }
  return JSON.stringify(obj) === JSON.stringify({})
}
