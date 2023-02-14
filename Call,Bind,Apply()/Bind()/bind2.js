x = 9; // 'this' refers to the global object (e.g. 'window') in non-strict mode
const s = {
  x: 81,
  getX() {
    return this.x;
  },
};

console.log(s.getX()); // 81

const retrieveX = s.getX;

console.log(retrieveX()); // 9; the function gets invoked at the global scope
