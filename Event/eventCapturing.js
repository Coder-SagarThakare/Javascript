
var button = document.querySelector("button")

var div = document.querySelector("div")
var body = document.querySelector("body")
var html = document.querySelector("html")

console.log('in event capture');    

div.addEventListener("click",()=>{
    console.log('div');
},true)

button.addEventListener("click",()=>{
    console.log("button");
},true)

body.addEventListener("click",()=>{
    console.log("body");
},true)

html.addEventListener("click",()=>{
    console.log('html');
},true)

//output

// html
// body
// div
// button

// ith parent to child addEventListener la call jato.


// Event capturing is one of two ways to do event propagation in the HTML DOM. 
// In event capturing, an event propagates from the outermost element to the target element. 
// It is the opposite of event bubbling, where events propagate outwards from the target to the outer elements.