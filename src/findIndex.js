export default function findIndex(array, predicate, thisArg) {
  if (array === null) throw new TypeError('"array" is null or undefined')

  if (typeof predicate !== 'function') {
    throw new TypeError('"predicate" must be a function')
  }

  var o = Object(this)
  var len = o.length >>> 0
  for (var i = 0; i < len; i++) {
    if (predicate.call(thisArg, o[i], i, o)) {
      return i
    }
  }
  return -1
}
