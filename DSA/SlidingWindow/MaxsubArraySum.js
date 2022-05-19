// find a maximum subarray sum in an array of integers

let arr=[1,5,3,4,5,9]
let sizeofsubarray=3;

// find maximum sum of given size subarray

// first approch is brute force take two array and find the sum of each subarray


let max=-Infinity
for(let i=0 ; i<=arr.length-sizeofsubarray;i++){
    let sum=0
    for(let j=i ; j<i+3 ; j++){
        sum+=arr[j]
    }

    if(sum>max){
        max=sum
    }
}

console.log(max)

// time complexity is O(n^2) 

// Also you have not know about the time complexity is reduce ya not so simple check on code any repetative work is there or not

// In this approach we can find first sum of index 0+1+2 and after 1+2+3 show now look the 1+2 is repeated so we can do in optimized way so 
// one thing first sum given window and after reduce 1 number on front and add one index of realside of window like these
// first sum = arr[0]+arr[1]+arr[2]
// add 1 number back on window like these=arr+[0]+arr[1]+arr[2]+arr[3]
// reduce 1 number on front like these=arr[1]+arr[2]+arr[3]

// this way to optimize the time complexity is O(n) 

// also one more thing how to identify the these question is sliding window or not so first check the any operation is releated to subarray or subString and after check in the question ask about maximum or minmum result and probebly given window size 


