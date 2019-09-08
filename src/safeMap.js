import { executeArrayMethodOrFailSafe } from '../internals'

export default function safeMap(...args)  {
  return executeArrayMethodOrFailSafe('map', ...args)
}
