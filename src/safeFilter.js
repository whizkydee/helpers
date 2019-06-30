import { executeArrayMethodOrFailSafe } from '../internals'

const safeFilter = (...args) => executeArrayMethodOrFailSafe('filter', ...args)

export default safeFilter
