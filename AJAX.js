
// AJAX stand for Asynchronous Javascript And XML

// AJAX used to make request to server and get the response from server and we can use this response to do some thing 

// this request is send to asyncronous so it will not wait for the response from server.



document.querySelector("#ajaxbtn").addEventListener("click",request);

function request(){
    console.log("Hello I am click")

    let xhr=new XMLHttpRequest();

    // .open is open xhr object and define the whic type of request we want to make and url and third parameter is true or false means async or not

    xhr.open("GET","ajaxMy.txt",true);

    // .onprogress is data is not fetching yet

    xhr.onprogress=function(){
        console.log("I am onprogress fetching data")
    }

    // .onload is event is used to data is fetch scesfully 

    

    xhr.onload=function(){
        console.log(this.responseText);
    }

    // .send is used to send the request to server

   

    xhr.send();
}

