
// higher order function is a function that takes a function as an argument and return a function

// first see how to opimize a function code and save to repated code in a function

const radius=[2,4,5,6,7,8,9];


// calculate area of circle
function Area(radius){
    let answer=[];
    for(let i=0 ; i<radius.length ; i++){
        answer.push(Math.PI*radius[i]*radius[i]);
    }
    return answer;
}


// console.log(Area(radius));


// calculate diameter of circle

function Diameter(radius){
    let answer =[];
    for(let i=0 ; i<radius.length ; i++){
        answer.push(radius[i]*2);
    }
    return answer;
}

// console.log(Diameter(radius));

// show in this code lot of code repated in a function so not good for DRY principle

// optimize code by using DRY principle

// this a blue print of function

function BluePrint(radius,logic){
    let answer=[];
    for (let i=0 ; i<radius.length ; i++){
        answer.push(logic(radius[i]));
    }

    return answer;
}


// logic for a area

function area(radius){
    return Math.PI*radius*radius;
}

// console.log(BluePrint(radius,area));

// logic for a diameter 

function diameter(radius){
    return radius*2;
}

// console.log(BluePrint(radius,diameter));

// --------------------------------------------------------------------------------------------------------------------------------------

// task is write a own map function 

// original map function is 

// console.log(radius.map(area));

// console.log(BluePrint(radius,area));

// above code is give me same output but not look like similar 

// let make similar code look like this

Array.prototype.BluePrint=function(logic){
    let answer=[];
    for(let i=0 ; i<this.length ;i++){
        answer.push(logic(this[i]));
    }
    return answer ; 
}

// console.log(radius.BluePrint(area));

// now we can use this code as map function in our code 


// ----------------------------------------------------------------------------------------------------------------------------------------

// let understand how to use map and where to use iton code 

// let one array is given and we want to transformation to this array to we use map 

// ex= let arr=[1,2,3,4,5,6]  and I want to transform to [2,4,6,8,10,12] this type array so I used map function

// let Arraymap=[1,2,3,4,5,6]; 

// console.log(Arraymap.map(item=>item*2));

// also i convert into binary number
// way of write map code
// normal anomyous function


// console.log(Arraymap.map(function(item){
//     return item.toString(2);
// }));


// arrow function


// console.log(Arraymap.map((item)=>{
//     return item.toString(2);
// }))

// without return statement beacuse only one line of code

// console.log(Arraymap.map((item)=>item.toString(2)));

// function declaration sperate from function expression

// function binary(item){
//     return item.toString(2);
// }

// console.log(Arraymap.map(binary));

// this is usecase of map function

// -------------------------------------------------------------------------------------------------------------------------------

// filter function

// filter function is used to filter out the data from array

// let take a exmple of array 

// let Arrayfilter=[1,2,3,4,5,6];

// I want to find all the odd number from this array

// console.log(Arrayfilter.filter(isOdd))

// function isOdd(item){
//     return item%2 ;
// }

// show is above code i am not write item%2==1 beacuse any even number are come to my result is 0 and 0 is falsely value so it will not show in my result

// I want to find all the even number from this array

// console.log(Arrayfilter.filter(function(item){
//   return item%2==0;
// }))


// ----------------------------------------------------------------------------------------------------------------------

// Reduce function 

// what is reduce function do ?
// just like name suggest to reduce function is used to reduce the data from array to single value like find sum of all the number in array and alos find the max, min number of the array ;


let arr=[1,2,3,4,5,6];

// before understand what is reduce function do first write a function to return sum of all the number in array

// lets write 

function sumFun(arr){
    let sum=0
    for(let i=0 ; i<arr.length ; i++){
        sum=sum+arr[i];
    }
    return sum ;
}

// console.log(sumFun(arr)); 
// this is sum of all the number in array output is 21

// now lets write a reducer function

const sumReducer=arr.reduce(function(acc,cur){
    acc=acc+cur;
    return acc;
},0)

// console.log(sumReducer);

// look in this reducer function code is very simple call back function take two argument first is accumulator and second is current value

// what is accumulator ?
// accumulator is a variable that hold the value of previous value and current value I will simplefy it accumulator is nothing but is similar like sum variable in above sumFun function to I am take to hold value of my result

// what is current value ?
// current value is a variable that hold the value of current value in array let simplefy this also current value is nothing but is similar like arr[i] it take in above sumFun function to I am take to current value in over array or loop 

// also reducer function take two argument first is callback function and second is initial value of accumulator is similar like sum=0 in above sumFun function


// write one more example for better understand

// this time we find max number in array

// first write a normal function to achieve this 


function maxFun(arr){
    let max=-Infinity;
    for(let i=0 ; i<arr.length ; i++){
        if(arr[i]>max){
            max=arr[i];
        }
    }
    return max;
}

// console.log(maxFun(arr));

// let write a reducer function to achieve this

let output=arr.reduce(function(acc,cur){
 if(cur>acc){
     acc=cur;
 }
 return acc;
},-Infinity)

// console.log(output);


// ---------------------------------------------------------------------------------------------------------------------