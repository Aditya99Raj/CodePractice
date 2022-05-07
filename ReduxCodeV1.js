
class Store{
    constructor(reducer,initState){
        this.state=initState;
        this.reducer=reducer;
    }

    getState(){
        return this.state;
    }

    dispatch(action){
        this.state=this.reducer(this.state,action);
    }
}


const initState={
    count:0,
    todo:[]
    
}


const reducer=(state=initState,action)=>{
    switch (action.type){
        case "INCREMENT":return {
            ...state,count:state.count+action.payload
        }
        case "ADD_TODO":return {
            ...state,todo:[...state.todo,action.payload]
        }
        case "CHANGE_STATUS":return {
            ...state,todo:state.todo.map(item=>{
                if(item.title===action.payload){
                    item.status=!item.status
                }
                return item
            })
        }
        default :return state
    }
}


const Inccount={
    type:"INCREMENT",
    payload:1
}

const addTodo=(data)=>{
    return {
        type:"ADD_TODO",
        payload:data
    }
}

const changeStatus=(title)=>{
    return {
        type:"CHANGE_STATUS",
        payload:title
    }
}

const myStore=new Store(reducer,initState);

myStore.dispatch(Inccount);
myStore.dispatch(Inccount);
myStore.dispatch(Inccount);
myStore.dispatch(Inccount);
myStore.dispatch(addTodo({title:"Buy milk",status:false}));
myStore.dispatch(addTodo({title:"Buy chocalate",status:false}));
myStore.dispatch(changeStatus("Buy milk"))
myStore.dispatch(changeStatus("Buy chocalate"))
myStore.dispatch(changeStatus("Buy milk"))

console.log(myStore.getState())

