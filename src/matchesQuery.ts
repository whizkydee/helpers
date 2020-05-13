export default function matchesQuery(
  query: string,
  cb?: MediaQueryListEvent
): boolean {
  let mql = window.matchMedia(query)
  if (typeof cb === 'function') {
    if ('onchange' in mql) mql.onchange = cb
    else (mql as MediaQueryList).addListener(cb)
  }
  return mql.matches
}
