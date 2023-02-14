let obj = {
    printDetails : function (a,b){
        console.log(this);
        console.log(a);
        console.log(b);
    }
}

var person1 = {
    fName : 'sagar',
    lName : 'thakare'
}

obj.printDetails.apply(person1,"nashik")


// we have need to pass second para as a array []
// thats why error comes
// TypeError: CreateListFromArrayLike called on non-object
