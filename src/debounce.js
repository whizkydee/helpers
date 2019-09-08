export default function debounce(func, ms = 0) {
  let timeoutId
  return function(...args) {
    clearTimeout(timeoutId)
    timeoutId = setTimeout(() => func.apply(this, args), ms)
  }
}
