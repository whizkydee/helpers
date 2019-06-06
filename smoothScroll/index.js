const smoothScroll = (element, options) =>
  document.querySelector(element).scrollIntoView({
    behavior: 'smooth',
    ...options,
  })

export default smoothScroll
