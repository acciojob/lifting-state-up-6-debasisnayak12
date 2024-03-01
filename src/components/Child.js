// import React from "react";

// const Child = ({todos , handleComplete}) => {

//     return (
//       <div className="child">
//         <h2>Child Component</h2>
//         <ul>
//           {todos.map((todo) => (
//               <li key={todo.id}>
//                {todo.text}
//                 { !todo.completed && (
//                 <button onClick={()=>{handleComplete(todo.id)}}>Complete</button>
//                 )}
//               </li>
//           ))}
//         </ul>
//       </div>
//     );
// }

// export default Child;


import React from "react";

const Child = ({ taskList, setTaskList }) => {
  function done(key) {
    setTaskList((taskList) =>
      taskList.filter((task) => {
        if (task.key === key) task.status = true;
        return task;
      })
    );
  }
  return (
    <div className="child">
      <h2>Child Component</h2>
      {taskList.map((taskTodo) => (
        <li key={taskTodo.key}>
          {taskTodo.task}
          {!taskTodo.status && (
            <button onClick={() => done(taskTodo.key)}>Complete</button>
          )}
        </li>
      ))}
    </div>
  );
};

export default Child;