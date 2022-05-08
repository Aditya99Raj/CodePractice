
// what is polyfill for bind?
// bind method is not support in older browsers so that why someone ask how to implement bind method for this browser so need to use polyfill for bind this is a custom method for bind method to implement owen bind method

// let start 

const user={
    firstname:"Dhruv",
    lastname:"ambaliya",
}

function fullname(state,age){
    return this.firstname+" "+this.lastname+" "+state+" "+age;
}


const result =fullname.bind(user,"Gujarat","Male");
console.log(result(24));


// above code is inbulit bind method in javascript

// let bulid by owe method

Function.prototype.mybind=function(...argument){
    let obj=this; /* this  is pointing to fullname function */
    let params=argument.slice(1) /* argument.slice(1) is remove first element and return array that is why a passing multiple argument at time */
    return function(...argu2){  /* argu2 is I am pass argument to a invoke time like result1(26) */
        return obj.apply(argument[0],[...params,...argu2]); /* I am use apply beacuse params is a array and in the apply method I am able to pass array as argument and also make one array useing es6 concat method */
    }
}

const result1=fullname.mybind(user,"Gujarat","Male");
console.log(result1(26));



