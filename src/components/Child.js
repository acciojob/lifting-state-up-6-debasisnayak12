import React from "react";

const Child = ({todos , handleComplete}) => {

    return (
      <div>
        <h2>Child Component</h2>
        <ul>
          {todos.map((todo,index) => (
            <li key={index}>
              {todo.title}
              {!todo.completed && (
                <button onClick={() => handleComplete(index)}>
                  Complete
                </button>
              )}
            </li>
          ))}
        </ul>
      </div>
    );
}
export default Child;