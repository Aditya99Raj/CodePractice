

// how many way to swap two numbers?

//  let's see

let a=10;
let b=20;

// 1) using ES6 method but this is only usefull in javascript

/*
[a,b]=[b,a];

console.log("a = "+a,"b = "+b)
*/

// 2) using third variable

/*
let temp=a;
a=b;
b=temp;

console.log("a = "+a,"b = "+b)
*/

// 3) using arithmetic operator 


/*

a=a+b;
b=a-b;
a=a-b;

varibles |  a |  b | 
a=a+b    | 30 | 20 |
b=a-b    | 30 | 10 |
a=a-b    | 20 | 10 |  this is answer

*/ 

// console.log("a = "+a,"b = "+b);


// 4) using bitwise XOR(^) operator

/*
a=a^b;
b=a^b;
a=a^b;

varibles |  a          |  b          | 
a=a^b    | 10^20       | 20          |
b=a^b    | 10^20       | 10^20^20=10 |
a=a^b    | 10^20^10=20 | 10          |  this is answer

*/
// console.log("a = "+a,"b = "+b);