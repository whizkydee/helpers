import isObject from './isObject'

export default function getFormFields(elem, selector = 'input[name]') {
  if (!(elem instanceof HTMLFormElement)) return

  const fields = Array.from(elem.querySelectorAll(selector) || [])
  if (!selector) return { ...new FormData(elem), $fields: fields }

  return Object.assign(
    { $fields: fields },
    ...fields.map(field => {
      return isObject(field) && field.name && { [field.name]: field.value }
    })
  )
}
