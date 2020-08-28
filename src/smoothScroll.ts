export default function smoothScroll(
  target: HTMLElement | string,
  options?: ScrollIntoViewOptions
): void {
  if (!(target instanceof HTMLElement) && typeof target !== 'string') return

  if (typeof target === 'string') {
    target = document.querySelector(target) as HTMLElement
  }

  if (target == null) return
  target.scrollIntoView({
    behavior: 'smooth',
    ...options,
  })
}
