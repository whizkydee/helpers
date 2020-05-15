import { slice } from './_internals'
import focusableSelectors from './focusableSelectors'

export default function getFocusableNodes(
  target: HTMLElement = document.documentElement
): HTMLElement[] | never[] {
  if (!(target instanceof HTMLElement)) return []
  const focusables = slice(
    target.querySelectorAll(focusableSelectors.join())
  ) as HTMLElement[]
  return focusables.filter(
    elem =>
      getComputedStyle(elem).display !== 'none' &&
      getComputedStyle(elem).visibility !== 'hidden'
  )
}
