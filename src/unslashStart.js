export default function unslashStart(string) {
  return string.replace(/^\/+/g, '')
}
