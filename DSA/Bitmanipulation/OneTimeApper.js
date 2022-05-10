
// Q. Except one Element, All element appear twice find that element 

// input
let arr=[7,3,5,4,5,3,4]
// output:7

// first try to solve with brute force

let flag=0;
for(let i=0 ; i<arr.length ; i++){
    for(let j=i+1 ; j<arr.length ; j++){
        if(arr[i]===arr[j]){
            flag++;
        }
    }
    if(flag===0){
        console.log(arr[i]);
        break;
    }
}

// this is brute force sloution but it is not efficientc and time complexity is O(n^2) and space complexity is O(1) 

// let's optimize it
// also solve with useing object or key value pair but it is time complexity is O(n) and space complexity is O(n) 

// how to optimize space complexity so we use bitwise operator

// move forward on this  solution to required to understand XOR operator 

// XOR operator represents "^" with this sign 

// first take two number and this number is binary number

//  A          B        A XOR B
//  1          1        0
//  1          0        1
//  0          1        1
//  0          0        0
//  1          1        0

// this is property of XOR operator
// two same number XOR will be 0
// two different number XOR will be 1


// now solve this problem with XOR operator

// In the given array any two element come so convert to zero and cancel the number and left out element will be the answer

let resultNum=arr[0];

for(let i=1 ; i<arr.length ; i++){
    resultNum=resultNum^arr[i];
}

console.log(resultNum);

// In this solution time complexity is O(n) and space complexity is O(1) this is the best and optimal solution






