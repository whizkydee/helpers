import { executeArrayMethodOrFailSafe } from '../internals'

const safeForEach = (...args) =>
  executeArrayMethodOrFailSafe('forEach', ...args)

export default safeForEach
