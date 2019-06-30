import { executeArrayMethodOrFailSafe } from '../internals'

const safeSort = (...args) => executeArrayMethodOrFailSafe('sort', ...args)

export default safeSort
