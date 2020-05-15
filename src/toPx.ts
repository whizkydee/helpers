export default function toPx(n: number | string = 0): string {
  if (typeof n !== 'number' && typeof n !== 'string') n = 0
  return n + 'px'
}
