

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


// How to convert dicemal number into binary number

// first write 2 multiple series 1 to your requiredment

//  1 2 4 6 8 16 32 64 128 256 ............. like these ok

// your input is 8 so you can do one thing find 8 number on above series and put 1 and rest will be 0 but one thing write this series in reverse order

// 64  32  16  8  4  2  1
// 0   0   0   1  0  0  0

// result of 8 is 0 0 0 1 0 0 0 and also write 1 0 0 0 

// now find 27 

// 64  32  16  8  4  2  1
// 0   0   1   1  0  1  1

// result of 8 is 0 0 1 1 0 1 1 and also write 1 1 0 1 1 



