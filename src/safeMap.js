import { executeArrayMethodOrFailSafe } from '../internals'

const safeMap = (...args) => executeArrayMethodOrFailSafe('map', ...args)

export default safeMap
