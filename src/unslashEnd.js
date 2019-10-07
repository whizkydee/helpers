export default function unslashEnd(string) {
  return string.replace(/\/+$/g, '')
}
