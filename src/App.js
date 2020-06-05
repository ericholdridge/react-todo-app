import React, { useState } from "react"
import TodoInput from "./components/TodoInput"
import Todo from "./components/Todo"
import { v4 as uuidv4 } from 'uuid';

const App = () => {
  const [value, setValue] = useState("")
  const [todos, setTodos] = useState([])
  const [user, setUser] = useState({name: 'test', age: 30});

  const handleSubmit = (e) => {
    e.preventDefault()
    setUser({...user, name: "eric"})
    if(value.trim() !== "") {
      setTodos([...todos, {text: value, index: uuidv4(), isCompleted: false}])
    }
    setValue("")
  }

  const handleDeleteTodo = (id, e) => {
    e.stopPropagation()
    setTodos(todos.filter(todo => todo.index !== id))
  }

  const handleCompleted = (id) => {
    const updatedTodo = todos.map(todo => {
      if (todo.index === id) {
        todo.isCompleted = !todo.isCompleted;
      }
      return todo;
    });
    setTodos(updatedTodo);
    console.log("Clicked")
  };
 

  return(
    <div className="app">
      <TodoInput value={value} setValue={setValue} handleSubmit={handleSubmit}/>
      <Todo todos={todos} handleDeleteTodo={handleDeleteTodo} handleCompleted={handleCompleted}/>
    </div>
  )
}

export default App;