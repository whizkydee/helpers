import getTabbableNodes from './getTabbableNodes'

export default function getLastTabbableNode(
  target: HTMLElement = document.documentElement
): HTMLElement | null {
  if (!(target instanceof HTMLElement)) return null
  const tabbables = getTabbableNodes(target)
  return tabbables[tabbables.length - 1] || null
}
