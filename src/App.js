import './App.css';
import Form from './components/Form';
import { useState } from 'react';
import TodoLİst from './components/TodoLİst';

function App() {

  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([])
  


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
