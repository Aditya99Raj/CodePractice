

// class Store{
//     constructor(initstate,reducer){
//         this.state=initstate;
//         this.reducer=reducer;
//     }

//     getstate(){
//         return this.state;
//     }

//     dispatch(action){
//         this.state=this.reducer(this.state,action);
//     }
// }

// let initstate={
//     todo:[],
//     count:0
// }

// let reducer=(state,{type,payload})=>{
//       switch (type){
//           case "ADD_TODO" : return {
//              ...state,todo:[...state.todo,payload]
//           }
//           case "COUNT": return {
//               ...state,count:state.count+payload
//           }
//           default:return state
//       }
// }

// const store=new Store(initstate,reducer);

// console.log(store.getstate());

// store.dispatch({type:"ADD_TODO",payload:{title:"buy milk",status:false}});
// store.dispatch({type:"ADD_TODO",payload:{title:"buy vagetable",status:true}});
// store.dispatch({type:"COUNT",})
// console.log(store.getstate());



let arr=[1,2,3]

let ans=[]
let index=0;

subset(arr,ans,index);

function subset(arr,ans,index){
    console.log(ans);
    if(index==arr.length){
        return;
    }
    for(let i=index ; i<arr.length ; i++){
        ans.push(arr[i]);
        subset(arr,ans,i+1);
        ans.pop();
    }
}