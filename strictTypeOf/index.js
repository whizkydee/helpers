const checkTypeName = (target, type) => {
   let typeName = ''
   if(target === "" || target === false || target === 0){
      typeName = (typeof target)
   }else{
      typeName = String(target && (target.constructor || {name:""}).name)
   }
   return !!(typeName.toLowerCase().indexOf(type) + 1)
}

const strictTypeOf = (value, type) => {
  let result = false
     
  type = type || []
  
  if(typeof type === 'object'){
    
    if(typeof type.length !== 'number'){
      return result
    }
    
    let bitPiece = 0
    type = [].slice.call(type)
    
    type.forEach( _type => {
      if(typeof _type === 'function'){
        _type = (_type.name || _type.displayName).toLowerCase()
      }
      bitPiece |= Number(checkTypeName(value, _type))
    })

    result = Boolean(bitPiece)
  }else{
    if(typeof type === 'function'){
      type = (type.name || type.displayName).toLowerCase()
    }
    
    result = checkTypeName(value, type)
  }
  
  return result
}

export default strictTypeOf
