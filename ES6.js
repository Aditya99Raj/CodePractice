

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

// printName1(arr[0],arr[1],arr[2],arr[3],arr[4])


// also useing spread operator

function printName3(...arr){
    console.log(arr);
}

// printName3(...arr);


// also spread operator use in object and override object property

let originalObj={
    name:"Dhruv",
    age:24,
    hobbies:["coding","reading"],
}

// on we have override age property and add one more hobbies

let newObj={
    ...originalObj,
    age:25,
    hobbies:[...originalObj.hobbies,"cycle"]
}



// console.log(originalObj);
// console.log(newObj);



// -----------------------------------------------------------------------------------------------------------------------------

// what is Promise ,aysnc/await and callback function 

// let's create a problem statement

const users=[
    {firstname:"Dhruv",lastname:"Ambaliya",hobbies:"coding"},
    {firstname:"Maulik",lastname:"Ambaliya",hobbies:"reading"},
    {firstname:"Raj",lastname:"Ambaliya",hobbies:"coding"},
]

function getData(){
    setTimeout(()=>{
      users.forEach((user)=>{
          console.log(user.firstname);
      })
    },1000)
}


/*
function createData(newData,callback){
    setTimeout(()=>{
        users.push(newData)
         callback();
    },2000)
}
*/

// before callback function code is not working properly not show shivam as output
/*
getData()
createData({firstname:"Shivam",lastname:"Ambaliya",hobbies:"cycle"});
*/

// In this example I call function getData and createData and I want to result in "Dhruv" "Maulik" "Raj" "Shivam" but my give result is "Dhruv" "Maulik" "Raj" why is apend shivam is not show in console because my createdata settimeout it take 2s and getdata take 1s so that is way so how to resolve this problem
// so simple answer is increase getdata time but these not right way to solve right way is using callback function in createData function

// let's see code


// after use callback function in createData function

// I use getData as a callback function in createData function

// createData({firstname:"Shivam",lastname:"Ambaliya",hobbies:"cycle"},getData);

// now look in output it is show "Dhruv" "Maulik" "Raj" "Shivam"



// also one more method to solve this problem is using Promise

function createData(newData){
    return new Promise((resolve,reject)=>{
       setTimeout(()=>{
             users.push(newData);
             let error=false;
                if(!error){
                    resolve();
                }else{  
                    reject("error");
                }
       },3000)
    })
}


// createData({firstname:"Shivam",lastname:"Ambaliya",hobbies:"cycle"}).then(()=>{getData()}).catch((erorr)=>{console.log("error")})


// also use async await method

/*

async function start(){
    try {
      await createData({firstname:"Shivam",lastname:"Ambaliya",hobbies:"cycle"});
        getData();
    } catch (error) {
        console.log("error");
    }
 
}

start();

*/
// bounch knowledge

// one more method to call function without any call and name

(async function(){
    try {
        await createData({firstname:"Shivam",lastname:"Ambaliya",hobbies:"cycle"});
          getData();
      } catch (error) {
          console.log("error");
      }
   
})();

//  also refer this like to know more function expression "https://stackabuse.com/javascripts-immediately-invoked-function-expressions/"


// ---------------------------------------------------------------------------------------------------------------------------------
