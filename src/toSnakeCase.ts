export default function toSnakeCase(str: string): string {
  const universalCaseRE = /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g
  return String(
    str
      .match(universalCaseRE)!
      .map(x => x.toLowerCase())
      .join('_')
  )
}
