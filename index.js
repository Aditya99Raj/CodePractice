
// const reducer=(state,{type,payload})=>{
//    switch (type){
//        case "ADD_TODO":return {
//            ...state,todo:[...state.todo,payload]
//        }
//      default:return state
//    }
// }
// // initial state
// const initState={
//     todo:[]
// }
// class Store{
//    constructor(reducer,initState){
//     this.reducer=reducer;
//     this.state=initState;
//    }

//    getState(){
//        return this.state;
//    }

//    dispatch(action){
//        this.state=this.reducer(this.state,action);
//    }
// }

// var store=new Store(reducer,initState);

// store.dispatch({type:"ADD_TODO",payload:{title:"Buy milk",status:false}});
// store.dispatch({type:"ADD_TODO",payload:{title:"Buy Pen",status:false}});
// console.log(store.getState());


let div=document.createElement("div")
div.innerHTML="<h1>Color change</h1>"
div.style.textAlign="center";

let colorArr=["red","green","blue","yellow","orange"];
let index=0;
setInterval(()=>{
    if(index==colorArr.length){
        index=0;
    }
    div.style.color=colorArr[index];
    index++;
},1000)


document.querySelector("#root").append(div);


