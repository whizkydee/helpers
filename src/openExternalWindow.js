export default function openExternalWindow(location) {
  let externalWindow = window.open()
  externalWindow.opener = null
  externalWindow.location = location

  return externalWindow
}
