export default function pxToRem(
  px: number = 16,
  rootPx: number = 16
): string | void {
  if (typeof px !== 'number' || typeof rootPx !== 'number') return
  return (px / rootPx).toPrecision(2) + 'rem'
}
