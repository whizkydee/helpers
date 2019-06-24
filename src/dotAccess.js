function dotAccess(obj, key) {
  key.split && (key = key.split('.'))
  for (let i = 0; i < key.length && obj; i++) obj = obj[key[i]]
  return obj
}

export default dotAccess
