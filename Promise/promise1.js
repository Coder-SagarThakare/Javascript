
// problem statement

const datas = [
    {name:'sagar', profession : 'soft engee'},
    {name:'keshav', profession : 'soft engee'},
]

function getDatas (){
    document.body.innerHTML = " wait 1 second setTimeout(1000) in getDatas"

    setTimeout(()=>{
            let output ='';
            datas.forEach((element,index)=>{
                // console.log(element.name);
                output += `<li>${element.name}</li>`
            })
            document.body.innerHTML = output
    }, 1000)
}

function createData (newData){
    setTimeout(()=>{
    document.body.innerHTML = " wait 2 second setTimeout(1000) in createData"

        datas.push(newData)
    },2000)
}

createData ({name:'Prathmesh', profession : 'soft engee'})
getDatas()


// getDatas will takes only 1 second to run perticular code. and createData takes 2 second for run code 
// i.e. output 
    // sagar
    // keshav

    // ith getData 1 second ghetoy aani data update/refresh krtoy
    //  createData 2 second ghetoy toprynt page load hoty mhnun data update hot nahiye

    // for solving this issue asynchronous programming came
    // ith dependent hote function 

 
// scenario 2 
    // if we increase the time of getDatas setTimeout then ans like
    //
    // sagar
    // keshav
    // prathmesh

