export default function queryFilter(array, query) {
  if (!Array.isArray(array) || typeof query !== 'object') return

  return array.filter(obj =>
    Object.keys(query).every(key => query[key] === obj[key])
  )
}
