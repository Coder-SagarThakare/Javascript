// for solving issue  now we are going to use  callback
// callback

const datas = [
  { name: "sagar", profession: "soft engee" },
  { name: "keshav", profession: "soft engee" },
];

function getDatas() {
  document.body.innerHTML = " wait 1 second  ";

  setTimeout(() => {
    let output = "";
    datas.forEach((element, index) => {
      // console.log(element.name);
      output += `<li>${element.name}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

function createData(newData, callback) {
  //
  setTimeout(() => {
    datas.push(newData);
    callback();
  }, 2000);
}
console.log(getDatas);

createData({ name: "Prathmesh", profession: "soft engee" }, getDatas); // we are pasing getDatas function as a callback
// getDatas()
