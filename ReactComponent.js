

// What is component in react?

// let spilt UI into small part this small part is called component

// component is reusable code and also handle independentaly so that why over code is very clean and easy to maintain 

// mainly two type of component in a react 
// 1)functional component (also called stateless component but after react version 16.7.0 we are use state in functional component also called Hooks)
// 2)class component


// Functional component :-

// 1)functional component is nothing but javascript function and most of time declare with es6 arrow function
// 2) react lifecycle method like componentdidmount,componentdidupdate,componentwillunmount this method not use in functional component
// 3)also in funcational component we not use render method
// 4)there are mainly used in UI design 
// 5)functional component can accept props and return some html code

const App=()=>{
    return (
        <div>
            <h1>Hello World</h1>
            <h3>this my first funcational component</h3>
        </div>
    )
}


// class component :-

// 1)class component is nothing but javascript class and most of time declare with es6 class
// 2) react lifecycle method like componentdidmount,componentdidupdate,componentwillunmount this method use in class component
// 3)also same time we called "smart component" and "stateful component"
// 4)also your able to pass props and access to useing this.props
// 5)class component is extends of React.Component 
// 6)you want to return something to use render method and inside`render` method you can use return statement

class AppClass extends React.Component{
    constructor(){
        super();
        this.state={
            todo:[]
        }
    }

    rander(){
        return ( <div>  <h1>Hello World</h1>    <h3>this my first class component</h3> </div> )     // this is use to return some html code
    }
}