const datas = [
  { name: "sagar", profession: "soft engee" },
  { name: "keshav", profession: "soft engee" },
];

function getDatas() {
  console.log("in get");
  document.body.innerHTML = " wait 1 second  ";

  setTimeout(() => {
    let output = "";
    datas.forEach((element) => {
      output += `<li>${element.name}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

function createData(newData) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      datas.push(newData);

      let error = false;
      if (!error) resolve();
      else reject("something going wrong");
    }, 2000);
  });
}


createData({ name: "Prathmesh", profession: "soft engee" })
  .then(getDatas)
  .catch((error) => console.log(error));

// now we are using promise then we dont need use callback here

// .then(getDatas()) => parenthisis detoy yacha aarth hoto ki yanna immediately invoke kr
// jr aapn getDatas() aas kel tr te immidiately invoke function mhnun treat kel jat .
// yaveli te .then cha response yaychi vat bght nahi tr directely run hot
// getDatas() is same like (function(){})()
// mhnun aas vaprl tr doghanch behaviour same aahe

//.then(getDatas)    => jr aapn getDatas la console.log() kel tr aaplyala function bhett .
//  mhnje ekprakare getDatas chya aivji tithe purn functionch aahe.
// function (){}  aani ()=>{} same ch tr aahet mhnun aapn
// .then chya parameter la arrow function vapral tri doghanch behaviour samech aasty
