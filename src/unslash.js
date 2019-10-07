export default function unslash(string) {
  return string.replace(/^\/+|\/+$/g, '')
}
