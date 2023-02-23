function getThis() {
  return this;
}

const obj1 = { name: "obj1" };
const obj2 = { name: "obj2" };

obj1.getThis = getThis;
obj2.getThis = getThis;

console.log(obj1.getThis()); 
console.log(obj2.getThis()); 


/*
output 
{ name: 'obj1', getThis: [Function: getThis] }
{ name: 'obj2', getThis: [Function: getThis] }
*/

const obj3 = {
    __proto__: obj1,
    name: "obj3",
  };
  
  console.log(obj3.getThis()); 