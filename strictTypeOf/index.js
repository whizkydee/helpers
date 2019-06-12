const strictTypeOf = (_value, type) => {
  let value = Object(_value)

  if(typeof type !== 'function'){
    if(!Array.isArray(type)){
      return false
    }

    let bitPiece = 0
    
    type.forEach( _type => {
      bitPiece |= Number((value instanceof _type))
    })

    return Boolean(bitPiece)
  }else{
    return (value instanceof type)
  }
}

export default strictTypeOf
