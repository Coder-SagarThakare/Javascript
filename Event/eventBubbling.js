
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

// output

// button
// div
// body
// html

// let us first know about what an event listener is? 
// An event listener is basically a function that waits for an event to occur. 
// That event can be anything like a mouse click event, submitting a form, pressing keys of a keyboard, etc.

{/* <element>.addEventListener(<eventName>,  */}
    {/* <callbackFunction>, {capture : boolean}); */}

    // <element>: The element to which an event listener is attached.
{/* <eventName>: It can be ‘click’,’key up’,’key down’ etc. events. */}
{/* <callbackFunction>: This function fires after the event happened. */}
// {capture: boolean}: It tells whether the event will be in the capture phase or in the bubbling phase (optional)


// ithe child pasun parent kde priority aaste . tyanusar pratekachya addlistener la call gele.

// Event Bubbling is a concept in the DOM (Document Object Model).
// It happens when an element receives an event, 
// and that event bubbles up (or you can say is transmitted or propagated) 
// to its parent and ancestor elements in the DOM tree until it gets to the root element.

// In event bubbling, the event is first captured and handled by the innermost element
//  and then propagated to outer elements.

// type: Use to refer to the type of event.
// listener: Function we want to call when the event of the specified type occurs.
// userCapture: Boolean value. The boolean value indicates the event phase. 
//              By Default useCapture is false. It means it is in the bubbling phase.
