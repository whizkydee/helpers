export default function openExternalWindow<T extends string>(
  location: T
): Window {
  let externalWindow = window.open()!
  externalWindow.opener = null
  externalWindow.location.href = location

  return externalWindow
}
