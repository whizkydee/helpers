export default function flattenStr(str) {
  const regex = /([ ]+)|(\n+)/gm
  return str.replace(regex, (match, p1) => (p1 ? ' ' : '')).trim()
}
