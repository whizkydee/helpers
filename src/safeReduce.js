import { executeArrayMethodOrFailSafe } from '../internals'

const safeReduce = (...args) => executeArrayMethodOrFailSafe('reduce', ...args)

export default safeReduce
