export default function parseHTML<T extends string>(str: T): HTMLCollection {
  const mockDocument = document.implementation.createHTMLDocument()
  mockDocument.body.innerHTML = str
  return mockDocument.body.children
}
