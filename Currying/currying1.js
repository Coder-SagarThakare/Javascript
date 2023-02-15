function add(a){
    return (b)=>{
        return (c)=>{
            return a + b + c;
        }
    }
}

//  i think internally happens this things
let res = add(2)
console.log(res);

let data = res(4)
console.log(data);

let data1 = data(7)
console.log(data1);

let result = add(2)(4)(7)           // currying
console.log(result);
// console.log(add(10,20,30));