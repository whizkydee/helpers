const getAspectRatio = (a = screen.width, b = screen.height) =>
  b == 0 ? a : getAspectRatio(b, a % b)

export default getAspectRatio
