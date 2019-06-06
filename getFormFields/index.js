const getFormFields = (elem, selector = 'input[name]') => {
  if (!(elem instanceof HTMLElement)) return null
  const fields = [...elem.querySelectorAll(selector)]

  if (!selector) {
    return { ...new FormData(elem), $fields: fields }
  } else {
    return Object.assign(
      { $fields: fields },
      ...fields.map(({ name, value }) => ({
        [name]: value,
      }))
    )
  }
}

export default getFormFields
