

function first(){
    console.log("first")
}

function second(){
    setTimeout(()=>{
        console.log("second")
    },2000)

}

function third(){
    console.log("third")
}


first();
second();
third();