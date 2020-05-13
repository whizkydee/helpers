export default function sleep(ms: number = 0): Promise<unknown> {
  return new Promise(resolve => setTimeout(resolve, ms))
}
