const checkTypeName = (target, type) => {
   let typeName = String(target && (target.constructor || {name:(typeof target)}).name)
   return !!(typeName.toLowerCase().indexOf(type) + 1)
}

const strictTypeOf = (value, type = []) => {
  
  if(typeof type === 'function'){
    type = (type.name || type.displayName)
  }
 
  if(typeof type !== 'string'){
    
    if(typeof type.length !== 'number'){
      return false
    }
    
    let bitPiece = 0
    type = [].slice.call(type)
    
    type.forEach( _type => {
      if(typeof _type === 'function'){
        _type = (type.name || type.displayName)
      }
      bitPiece |= Number(checkTypeName(value, type))
    })

    return Boolean(bitPiece)
  }else{
    return checkTypeName(value, type)
  }
}

export default strictTypeOf
