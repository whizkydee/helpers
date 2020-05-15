// TODO: Fix/improve this type definition?
export default function dotAccess<T extends { [key: string]: any }>(
  obj: T,
  path: string
): T[keyof T] | undefined {
  let keyCollection: string[] = []
  if (path && path.split) keyCollection = path.split('.')
  for (let i = 0; i < keyCollection.length && obj; i++) {
    obj = obj[keyCollection[i]]
  }
  return obj as T[keyof T]
}
