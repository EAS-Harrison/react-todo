import './App.css';
import React, { useState } from 'react';
import { Todos } from './todos';
// function addTodo(input) {
//   var todos = [{}]
//   var input = document.getElementById("myInput").value
//   todos = todos.push(input)
// }

export function App() {
  const [text, setText] = useState()
  const [todos, setTodos] = useState([])



  const handleAddButtonClick = () => {
    setTodos([...todos, { text, complete: false }])
    setText("")
  }
  const handleInputChange = (e) => {
    setText(e.target.value)
  }
  const toggleTodo = (index) => {
    setTodos(todos.map((todo, idx) => idx == index ? { ...todo, complete: !todo.complete } : todo))
    console.log(todos.map((todo, idx) => idx == index ? { ...todo, complete: !todo.complete } : todo))
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>To Do</h1>
        <input type="text" onChange={handleInputChange} value={text}></input>
        <button onClick={handleAddButtonClick}>Add Task</button>
        <Todos todos={todos} toggleTodo={toggleTodo} />
      </header>
    </div>
  );
}

export default App;
