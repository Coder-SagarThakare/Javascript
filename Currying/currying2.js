
// we can access currying using this 2 way
userObj = {
    name : 'sagar',
    age : 22
}

function userInfo(obj){
    return function (userProperty){
        return obj[userProperty]
    }
}

let result1 = userInfo(userObj)('name')
console.log(result1);

let result2 = userInfo(userObj)
console.log(result2('age'));
