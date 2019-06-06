export const objectIsEmpty = obj => {
  for (let prop in obj) if (obj.hasOwnProperty(prop)) return false
  return JSON.stringify(obj) === JSON.stringify({})
}

export default objectIsEmpty
