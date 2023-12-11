import './App.css';
import Form from './components/Form';
import { useState } from 'react';
import TodoLİst from './components/TodoLİst';

function App() {

  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([])
  const [status, setStatus] = useState("all")
  const [filteredTodos, setFilteredTodos] = useState([])


  


  const filterHandler = () => {
    switch(status){
      case 'completed':
        setFilteredTodos(todos.filter((todo) => todo.completed === true))
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter((todo) => todo.completed === false))
        break;
      default:
        setFilteredTodos(todos)
        break;
    }
  }
  


  return (
    <div className="App">
      <header>
        <h1>MY TODO LIST</h1>
      </header>
      <Form
      inputText={inputText}
      setInputText={setInputText}
      todos={todos}
      setTodos={setTodos}
      />
      <TodoLİst
      todos={todos}
      setTodos={setTodos}
      />
    </div>
  );
}

export default App;
