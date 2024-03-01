// import React, { useState } from "react";
// import Child from "./Child";

// const Parent = () => {
//     const [todos,setTodos] = useState([
//         {id:1, text:"Learn React", completed:false},
//         {id:2, text:"Build a React app", completed:false},
//         {id:3, text:"Deploy the React app", completed:false}
//     ]);

//     function handleComplete(id){
//         setTodos(todos.map(todo => {
//             if(todo.id === id){
//                 return {...todos,completed: true};
//             }
//             return todo;
//         }));
//     }

//     return(
//         <div className="parent">
//             <h1>Parent Component</h1>
//             <Child todos={todos} handleComplete={handleComplete}/>
//         </div>
//     )
// }
// export default Parent;


import React, { useState } from "react";
import Child from "./Child";
const Parent = () => {
  const [taskList, setTaskList] = useState([
    { key: 0, task: "Learn React", status: false },
    { key: 1, task: "Build a React app", status: false },
    { key: 2, task: "Deploy the React app", status: false },
  ]);

  return (
    <div className="parent">
      <h1>Parent Component</h1>
      <Child taskList={taskList} setTaskList={setTaskList} />
    </div>
  );
};

export default Parent;