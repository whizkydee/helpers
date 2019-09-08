export default function toPx(n = 0) {
  return typeof n === 'number' && n + 'px'
}
