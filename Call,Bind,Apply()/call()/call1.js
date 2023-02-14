let obj = {
  name: "sagar",
  fun1: function (name) {

    console.log(this.name);
    console.log(name);
  },
};

obj.fun1()
console.log('-------');
obj.fun1("thakare")


// output : 

// sagar
// undefined
// -------
// sagar
// thakare