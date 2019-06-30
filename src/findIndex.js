export default function findIndex(array, predicate) {
  if (array == null) {
    throw new TypeError('"array" is null or not defined')
  }

  let o = Object(array)

  let len = o.length >>> 0

  if (typeof predicate !== 'function') {
    throw new TypeError('predicate must be a function')
  }

  let thisArg = arguments[2]

  let k = 0

  while (k < len) {
    let kValue = o[k]
    if (predicate.call(thisArg, kValue, k, o)) {
      return k
    }
    k++
  }

  return -1
}
