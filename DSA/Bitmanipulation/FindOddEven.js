

//   Find the odd and even numbers in an array without use arithmetic operators

// how can do this without using arithmetic operators

// In bitmanipulation one method is there to do these task

// Using Bit wise And operator (&)

// show below table to understand what is And operator in bit

// A          B        A & B
// 1          1        1
// 1          0        0
// 0          1        0
// 0          0        0


// show the pattern of And operator in bit
// any time 1 and 1 is coming then it will be 1 otherwise 0

// using bitwise operator we can solve this problem

// any even number to be compared with 1 using And operator result will be 0
// any odd number to be compared with 1 using And operator result will be 1

/*
example: 8 is odd ya even number

first convert in to binary number 

8=  1 0 0 0
&
1=  0 0 0 1
-----------
    0 0 0 0

convert result in to decimal number so answer is will be 0
*/

/*
example: 7 is odd ya even number

first convert in to binary number 

7=  0 1 1 1
&
1=  0 0 0 1
-----------
    0 0 0 1

convert result in to decimal number so answer is will be 1
*/


// look at the result any time you will get the 0 so number is even and other wise number is odd

// now solve this problem with bitwise AND(&) operator

// find even number in the array
let Input=[1,2,3,4,5,6,7,8,9,10];
let output=[];

for(let i=0 ; i<Input.length ; i++){
    
 if((Input[i]&1)===0){
    output.push(Input[i]);
 }
}

console.log(output);


// find odd number in the array
let Input1=[1,2,3,4,5,6,7,8,9,10];
let output1=[];

for(let i=0 ; i<Input1.length ; i++){
    
 if((Input1[i]&1)===1){
    output1.push(Input1[i]);
 }
}

console.log(output1);


