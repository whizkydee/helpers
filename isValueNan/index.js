const isValueNaN = value => {

    //[ECMA-262] 15.1.2.4

    //NOTE A reliable way for ECMAScript code to test if a value X is a NaN is an expression of the form X !== X. The 

    //result will be true if and only if X is a NaN

    return value !== value;
}

export default isValueNaN
