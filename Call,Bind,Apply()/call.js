// global function
let getDetails = function (city) {
  console.log(this.fName + " " + this.lName);
  console.log("city : ", city);
};

// declared here variable function
let obj = {
  fName: "default",
  lName: "default",

  getDetailsFromObj: function (city) {
    console.log(this.fName + " " + this.lName);
    console.log("city : ", city);
  },
};

// persons object
var sagarObj = {
  fName: "sagar",
  lName: "THakare",
};

let sanketObj = {
  fName: "Sanket",
  lName: "Anandkar",
};
let nishantObj = {
  fName: "Nishant",
  lName: "Jarang",
};

getDetails.call(sagarObj, "Nashik");
console.log("------------------");
getDetails.call(sanketObj, "Bhosari"); // we changes this/object reference at runtime
console.log("------------------");

// ==============================================================
obj.getDetailsFromObj.call(nishantObj, "Pune");
console.log("------------------");
// obj.getDetailsFromObj(nishantObj);  // if we cant use call() then bydefault value from object will be selected
