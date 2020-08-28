import { slice } from './_internals'
import focusableSelectors from './focusableSelectors'

export default function getFocusableNodes(
  target: HTMLElement = document.documentElement
): HTMLElement[] | never[] {
  if (!(target instanceof HTMLElement)) return []
  const potentialCandidates: HTMLElement[] = slice(
    target.querySelectorAll(focusableSelectors.join())
  )

  return potentialCandidates.filter(
    elem =>
      elem instanceof HTMLElement &&
      window.getComputedStyle(elem).display !== 'none'
  )
}
