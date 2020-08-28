export default function flattenStr(str: string): string {
  const templateRE = /([ ]+)|(\n+)/gm
  return str.replace(templateRE, (match, p1) => (p1 ? ' ' : '')).trim()
}
