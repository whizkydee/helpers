export default function matchesQuery(query, cb) {
  let mql = window.matchMedia(query)
  typeof cb === 'function' && mql.addListener(cb)
  return mql.matches
}
