// que.

let obj = {
    printDetails: function (a, b, c) {
      console.log(this);
      console.log(a);
      console.log(b);
      console.log(c);
    },
  };
  
  var person1 = {
    fName: "sagar",
    lName: "thakare",
  };
  
  let myObj = { 'length': 3, '0': 'eat', '1': 'bananas', '2': 'apple' }
  
  obj.printDetails.apply(person1,{...myObj});       // With the rest parameters and parameter spread syntax, this can be rewritten as

// { fName: 'sagar', lName: 'thakare' }
// eat
// bananas
// apple

// In general, fn.apply(null, args) is equivalent to fn(...args) with the parameter spread syntax,
//  except args is expected to be an array-like object in the former case with apply(), 
//  and an iterable object in the latter case with spread syntax.
