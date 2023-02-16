// we can return multiple functions using closure

function sum (a,b,c){
    return {
        getTwoSum(){
            return a+b;
        },
        getSumThree(){
            return a +b+c;
        }
    }
}

var store = sum(2,3,4)
console.log(store.getTwoSum());
console.log(store.getSumThree(30));

console.log('=======================');

var store2 = sum(10,20,30)
console.log(store2.getTwoSum());
console.log(store2.getSumThree(30));