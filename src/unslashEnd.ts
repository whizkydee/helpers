export default function unslashEnd(string: string): string {
  return string.replace(/\/+$/g, '')
}
