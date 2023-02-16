// anonymous function = function without name
// interview favourite topic 

var sum = function(a){
    var c = 3;
    return function (b){         // we can use function name also
        console.log('in anonymous function');
        return a + b + c ;
    }
}

var store = sum(2)
console.log(store(5));