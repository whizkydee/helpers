export default function cookiesToObject(cookie) {
  return cookie.split(/\s*;\s*/).reduce((acc, cur) => {
    cur = cur.split(/\s*=\s*/)
    return {
      ...acc,
      [cur[0]]: cur.splice(1).join('='),
    }
  }, {})
}
