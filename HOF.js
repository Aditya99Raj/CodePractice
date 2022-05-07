
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


console.log(Area(radius));


// calculate diameter of circle

function Diameter(radius){
    let answer =[];
    for(let i=0 ; i<radius.length ; i++){
        answer.push(radius[i]*2);
    }
    return answer;
}

console.log(Diameter(radius));

// show in this code lot of code repated in a function so not good for DRY principle

// opimize code by using DRY principle

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

console.log(BluePrint(radius,area));

// logic for a diameter 

function diameter(radius){
    return radius*2;
}

console.log(BluePrint(radius,diameter));