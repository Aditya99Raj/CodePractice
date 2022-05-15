

// start with a constructor function beacuse end of the day all are convert into constructor function in javascript 

// first create a function this not a normal function this a constructor

// function BankAccount (customerName,balance=0){
//     this.customerName=customerName;
//     this.AccountNumber=Date.now();
//     this.balance=balance;
// }

// this a blue print of the object all object created from this blueprint

// let DhruvAccount=new BankAccount("Dhruv Ambaliya",1000)


// let AnshAccount=new BankAccount("Ansh Ambaliya")




// this is called object creation show in this statement new keyword is used to create an object from the blueprint and store in spereate memory location beacuse we want to change the value of DhruvAccount object to not change all the object created from this blueprint

// we are able to change the value of DhruvAccount object 

// DhruvAccount.balance=2000;

// console.log(DhruvAccount);

// but in real life is not considered beacuse not every one change the value of DhruvAccount object so encapsulation is used to make the value of DhruvAccount object private and only accessible through the object method but we have learned in last in these prectice 


// 2) how to add method on the constructor function 

/*

function BankAccount (customerName,balance=0){

    // this is property of the constructor function
    this.customerName=customerName;
    this.AccountNumber=Date.now();
    this.balance=balance;

    // deposit and withdraw is method of BankAccount object

    this.deposit=function(amount){
        this.balance+=amount;
    }

    this.withdraw=function(amount){
        this.balance-=amount;
    }
}


let DhruvAccount=new BankAccount("Dhruv Ambaliya",1000)


let AnshAccount=new BankAccount("Ansh Ambaliya")
DhruvAccount.deposit(400)
DhruvAccount.withdraw(200)
console.log(DhruvAccount);

*/