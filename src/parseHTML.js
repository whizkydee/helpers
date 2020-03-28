export default function parseHTML(str) {
  const mockDocument = document.implementation.createHTMLDocument()
  mockDocument.body.innerHTML = str
  return mockDocument.body.children
}
