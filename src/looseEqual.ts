import isObject from './isObject'

export default function looseEqual<T extends { [key: string]: any }>(
  a: any,
  b: any
): boolean {
  if (a === b) return true

  const isObjectA = isObject(a)
  const isObjectB = isObject(b)

  if (isObjectA && isObjectB) {
    try {
      const isArrayA = Array.isArray(a as any[] | T)
      const isArrayB = Array.isArray(b as any[] | T)

      if (isArrayA && isArrayB) {
        return (
          (a as any[]).length === (b as any[]).length &&
          (a as any[]).every((e: any, i: any) => looseEqual(e, (b as any[])[i]))
        )
      } else if (a instanceof Date && b instanceof Date) {
        return a.getTime() === b.getTime()
      } else if (!isArrayA && !isArrayB) {
        const keysA = Object.keys(a as T)
        const keysB = Object.keys(b as T)

        return (
          keysA.length === keysB.length &&
          keysA.every(key => looseEqual(a[key], b[key]))
        )
      } else {
        return false
      }
    } catch (e) {
      return false
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b)
  } else {
    return false
  }
}
