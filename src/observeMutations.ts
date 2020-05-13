/**
 * Runs the provided callback for each mutation on the specified element and returns the
 * MutationObserver instance.
 *
 * @param element - The element to watch for mutations.
 * @param callback - The function that should be executed on mutation.
 * @param options - Additional MuationRecord options.
 */

export default function observeMutations(
  element: HTMLElement,
  callback: Function,
  options?: MutationObserverInit
): MutationObserver {
  const observer = new MutationObserver(mutations => {
    for (let mutation of mutations) callback(mutation)
  })

  observer.observe(element, {
    subtree: true,
    childList: true,
    attributes: true,
    ...options,
  })
  return observer
}
