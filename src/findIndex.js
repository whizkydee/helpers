export default function findIndex(array, predicate) {
  if (array == null) {
    throw new TypeError('"array" is null or not defined')
  }
  
  var o = Object(array)

  var len = o.length >>> 0

  if (typeof predicate !== 'function') {
    throw new TypeError('predicate must be a function')
  }

  var thisArg = arguments[1]

  var k = 0

  while (k < len) {
    var kValue = o[k]
    if (predicate.call(thisArg, kValue, k, o)) {
      return k
    }
    k++
  }

  return -1
}
