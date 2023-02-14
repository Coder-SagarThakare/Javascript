// que.can we use object like this

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

obj.printDetails.apply(person1, {
  length: 2,
  0: "eat",
  1: "bananas",
  2: "apple",
});


//  output
//  { fName: 'sagar', lName: 'thakare' }
// eat
// bananas
// undefined

// we can use object also . but we need to specify the length . otherwise undefined will print. according to the length property data will passed.
// ith length 2ch dili aahe mhnun 3rd position cha data pass kela gela nahi.

// You can also use any kind of object which is array-like as the second parameter. 
// In practice, this means that it needs to have a length property, 
// and integer ("index") properties in the range (0..length - 1).
//  For example, you could use a NodeList, or a custom object like { 'length': 2, '0': 'eat', '1': 'bananas' }.