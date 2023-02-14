var person = {
  fname: "rohit",
  lname: "sharma",
  fullname: function (strikerate) {
    console.log(strikerate);
    console.log(this.fname + " " + this.lname);
  },
};

var batsmen = {
  fname: "sachin",
  lname: "Tendulkar",
};

person.fullname()

// var s = person.fullname.bind(batsmen, 155);
// console.log(s);
// s();

// bind ek function chi copy return krt . te fun chi copy aapn pahije tvha use kru shakto
