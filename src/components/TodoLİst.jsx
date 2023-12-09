import React from "react";
import Todo from "./Todo";

const TodoLİst = ({ todos, setTodos }) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {todos.map((todo) => (
          <Todo text={todo.text} key={todo.id} />
        ))}
      </ul>
    </div>
  );
};

export default TodoLİst;
