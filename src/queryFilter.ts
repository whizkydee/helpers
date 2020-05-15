// TODO: Fix/improve this type definition
export default function queryFilter<
  T extends any[],
  S extends { [key: string]: any }
>(array: T, query: Partial<S>): S[] | void {
  if (!Array.isArray(array) || typeof query !== 'object') return

  return array.filter((obj: S) =>
    Object.keys(query).every(key => query[key] === obj[key])
  )
}
