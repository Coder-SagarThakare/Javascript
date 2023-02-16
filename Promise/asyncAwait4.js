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
      if (!error) resolve('doneee doneeee');
      else reject("something going wrong");
    }, 2000);
  });
}

async function start(){
  await createData({ name: "Prathmesh", profession: "soft engee" }).then((r)=>{console.log(r)})
          getDatas()
}

console.log(start());

start()
// await :  create data cha call purn hot nahi toprynt wait krnar nntrch getData() la call janar
            // without async we cannot use await  

            // async await mostly used for fetch data from api

// createData({ name: "Prathmesh", profession: "soft engee" })
//   .then(getDatas)
//   .catch((error) => console.log(error));

// synchronous : happening any execution step by step
// asynchronous : no decided sequence, never wait.
