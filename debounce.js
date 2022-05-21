
document.querySelector("#input").addEventListener("click",debounce(searchMovie,1000))


async function searchMovie(){
    try {

        let URL="https://example.com/api/serach"

        let res=await fetch(URL)

        let data=await res.json()

        // map all data on screen

        display(data)
        
    } catch (error) {
        console.log(error)
    }
}

let something;
function debounce(searchMovie,dealy){
    if(something){
        clearTimeout(something)
    }

    something=setTimeout(()=>{
      searchMovie()
    },dealy)
}


