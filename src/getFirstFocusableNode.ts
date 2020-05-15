import focusableSelectors from './focusableSelectors'

export default function getFirstFocusableNode(
  target: HTMLElement = document.documentElement
): HTMLElement | null {
  if (!(target instanceof HTMLElement)) return null
  return target.querySelector(focusableSelectors.join())
}
