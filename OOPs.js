

// start with a constructor function beacuse end of the day all are convert into constructor function in javascript 

// first create a function this not a normal function this a constructor

function BankAccount (customerName,balance=0){
    this.customerName=customerName;
    this.AccountNumber=Date.now();
    this.balance=balance;
}

// this a blue print of the object all object created from this blueprint

let DhruvAccount=new BankAccount("Dhruv Ambaliya",1000)


let AnshAccount=new BankAccount("Ansh Ambaliya")

console.log(AnshAccount);


// this is called object creation show in this statement new keyword is used to create an object from the blueprint and store in spereate memory location beacuse we want to change the value of DhruvAccount object to not change all the object created from this blueprint

