const types = {
  'string':String,
  'array':Array,
  'function':Function,
  'object':Object,
  'date':Date,
  'boolean':Boolean,
  'number':Number,
  'null':null,
  'undefined':undefined
}

const strictTypeOf = (_value, type) => {
  let value = Object(_value)
  
  type = types[type]

  if(typeof type !== 'function'){
    if(!type || typeof type.length !== 'number'){
      
      if(_value === type){
        return true
      }
      
      return false
    }

    let bitPiece = 0
    
    type.forEach( _type => {
      bitPiece |= Number((typeof _type === 'function' ?  (value.constructor === _type) : (_value === _type)))
    })

    return Boolean(bitPiece)
  }else{
    return (value.constructor === type)
  }
}

export default strictTypeOf
