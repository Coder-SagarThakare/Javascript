console.log(fun)
console.log(fun())

function fun (){
    console.log('in function');
    return ;
}

// [Function: fun]
// in function
// undefined

// beacause functions are hoisted