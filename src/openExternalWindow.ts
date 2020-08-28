export default function openExternalWindow(location: string): Window {
  let externalWindow = window.open()!
  externalWindow.opener = null
  externalWindow.location.href = location

  return externalWindow
}
