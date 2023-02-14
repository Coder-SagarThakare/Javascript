// que. can we pass object as a second parameter

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


obj.printDetails.apply(person1,["nashik","secondPara"])


// { fName: 'sagar', lName: 'thakare' }
// nashik
// secondPara
// undefined
