import React from "react";

const Todo = ({ todos, handleDeleteTodo, handleCompleted }) => {
  return (
    <div className="app">
      {todos.map((todo) => (
        <div key={todo.index} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", background: "blue", width: "200px" }} onClick={() => handleCompleted(todo.index)}>
          <p style={{textDecoration: todo.isCompleted ? "line-through" : ""}}>{todo.text}</p>
          <span style={{ marginLeft: "10px", cursor: "pointer" }} onClick={(e) => handleDeleteTodo(todo.index, e)}>X</span>
        </div>
      ))}
    </div>
  );
};

export default Todo;
