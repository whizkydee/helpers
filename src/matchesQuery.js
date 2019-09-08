export default function matchesQuery(query) {
  return window.matchMedia(query).matches
}
