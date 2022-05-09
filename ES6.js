

// Let's learn about ES6

// ES6 is a new version of JavaScript

// first see how to opimize a function code and save to repated code in a function
// les's start with rest & spread operator

// this one way to print name in function 

let arr=["dhruv","maulik","raj","shivam","sachin"];

function printName(name1,name2,name3){
 console.log(name1,name2,name3);
}

printName(arr[0],arr[1],arr[2])

// another way to use rest operator;

function printName1(name1,name2,...rest){
    console.log(name1,name2,rest);
}

printName1(arr[0],arr[1],arr[2],arr[3],arr[4])


// also useing spread operator

function printName3(...arr){
    console.log(arr);
}

printName3(...arr);