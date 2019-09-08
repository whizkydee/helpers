export default function smoothScroll(element, options) {
  document.querySelector(element).scrollIntoView({
    behavior: 'smooth',
    ...options,
  })
}
