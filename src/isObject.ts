export default function isObject<T extends { [key: string]: any }>(
  payload: any
): payload is T {
  return payload !== null && typeof payload === 'object'
}
