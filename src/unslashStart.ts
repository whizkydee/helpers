export default function unslashStart(string: string): string {
  return string.replace(/^\/+/g, '')
}
