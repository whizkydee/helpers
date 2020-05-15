export default function cookiesToObject(
  cookies: string
): { [key: string]: any } {
  return cookies.split(/\s*;\s*/).reduce((acc, cur) => {
    let curSplitted = cur.split(/\s*=\s*/)
    return {
      ...acc,
      [curSplitted[0]]: curSplitted.splice(1).join('='),
    }
  }, {})
}
