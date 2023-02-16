
var button = document.querySelector("button")

var div = document.querySelector("div")
var body = document.querySelector("body")
var html = document.querySelector("html")

div.addEventListener("click",()=>{
    console.log('div');
},)

button.addEventListener("click",()=>{
    console.log("button");
})

body.addEventListener("click",()=>{
    console.log("body");
},)

html.addEventListener("click",()=>{
    console.log('html');
})



