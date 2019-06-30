/**
 * Runs the provided callback for each mutation on the specified element and returns the
 * MutationObserver instance.
 *
 * @param {HTMLElement} element - The element to watch for mutations.
 * @param {Function} callback - The function that should be executed on mutation.
 * @param {Object=} options - Additional MuationRecord options.
 */

const observeMutations = (element, callback, options) => {
  const observer = new MutationObserver(mutations =>
    mutations.forEach(m => callback(m))
  )
  observer.observe(element, {
    subtree: true,
    childList: true,
    attributes: true,
    ...options,
  })
  return observer
}

export default observeMutations
