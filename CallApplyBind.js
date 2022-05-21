
// what is call apply bind ?

// let's create problem statement first 

// This lesson will focus on the bind, call and apply functions, which are all used to change the scope of what this is equal to inside of a function or a method.



const user1={
    firstname:"Dhruv",
    lastname:"Ambaliya",
    fullname:function(){
      return  this.firstname+" "+this.lastname;
    }
}

const user2={
    firstname:"Maulik",
    lastname:"kanani",
}

// I want to print fullname of user1

const data=user1.fullname.call(user2);
console.log(data);

// that is fine but we want to print fullname of user2 so
// onething you do copy paste fullname code to user1 to user2 but these is not right method to solve this problem so how can do that ?

// let's see code

// first declare a function sparetely 

// function fullname(){
//     return this.firstname+" "+this.lastname;
// }

// const data1=fullname.call(user2);
// console.log(data1);

// look in output we do that 

// what is apply then ?

// apply is nothing but you are able to pass array as argument 


// bind is nothing but is similar like call and apply but it is return function 


