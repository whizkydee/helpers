export default function swapKeyVal(object) {
  let swaped = {}
  for (let key in object) swaped[object[key]] = key
  return swaped
}
