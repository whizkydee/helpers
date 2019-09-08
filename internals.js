/**
 * Execute a method on an array or list-like object or fail safe to an empty one.
 *
 * @private
 * @param {String} methodName - Array method name which must be a part of `methodNames`.
 * @param {Array} array - An array or a list-like object.
 * @param {Function} callbackfn - The callback function that should be executed on the list.
 * @param {*=} initialValueOrThisArg - Initial value for reduce(Right)? or `thisArg` for other methods.
 * @returns {*}
 */

export function executeArrayMethodOrFailSafe(
  methodName,
  array,
  callbackfn,
  initialValueOrThisArg
) {
  array = typeof array === 'string' ? [] : array

  if (methodNames.indexOf(methodName) === -1) {
    throw new TypeError(
      'executeArrayMethodOrFailSafe: ' +
        '"' +
        methodName +
        '"' +
        ' is either not a valid array method or not supported by the function.'
    )
  }

  let isReduce = ['reduce', 'reduceRight'].indexOf(methodName) !== -1
  if (isReduce && initialValueOrThisArg === undefined) {
    initialValueOrThisArg =
      methodName === 'reduce'
        ? array[0]
        : methodName === 'reduceRight'
        ? array[array.length - 1]
        : initialValueOrThisArg
  }

  return Array.prototype[methodName].call(
    array || [],
    callbackfn,
    initialValueOrThisArg
  )
}

const methodNames = 'every filter find findIndex forEach map reduce reduceRight some sort'.split(
  ' '
)
