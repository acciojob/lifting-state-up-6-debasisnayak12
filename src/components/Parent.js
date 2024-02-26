import React, { useState } from "react";
import Child from "./Child";

const Parent = () => {
    const [todos,setTodos] = useState([
        {title: "Learn React"},
        {title: "Build a React app"},
        {title: "Deploy the React app"},
    ]);

    function handleComplete(index){
        setTodos(todos.map((todo, i) => {
            if(i === index){
                return {...todos, completed: true};
            }
            return todo;
        }));
    }

    return(
        <div>
            <h1>Parent Component</h1>
            <Child todos={todos} handleComplete={handleComplete}/>
        </div>
    )
}
export default Parent;