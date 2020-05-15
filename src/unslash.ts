export default function unslash(string: string): string {
  return string.replace(/^\/+|\/+$/g, '')
}
