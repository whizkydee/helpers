import getFocusableNodes from './getFocusableNodes'

export default function getLastFocusableNode(
  target: HTMLElement = document.documentElement
): HTMLElement | null {
  if (!(target instanceof HTMLElement)) return null
  const focusables = getFocusableNodes(target)
  return focusables[focusables.length - 1] || null
}
