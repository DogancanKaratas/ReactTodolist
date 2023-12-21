import React, { useState } from "react";

const Form = ({ inputText, setInputText, todos, setTodos, setStatus }) => {
  const [alertWarning, setAlertWarning] = useState(false);
  const [alertSucces, setAlertSucces] = useState(false);

  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };

  const submitTodoHandler = (e) => {
    e.preventDefault();
    const isEmpty = (str) => !str.trim().length;
    if (isEmpty(inputText)) {
      setAlertWarning(true);
      setTimeout(() => {
        setAlertWarning(false);
      }, 2000);
    } else {
      setAlertSucces(true);
      setTimeout(() => {
        setAlertSucces(false);
      }, 2000);
      setTodos([
        ...todos,
        { text: inputText, completed: false, id: Math.random() },
      ]);
    }

    setInputText("");
  };

  const statusHandler = (e) => {
    setStatus(e.target.value);
  };

  return (
    <form>
      <div className="search">
        <input
          value={inputText}
          type="text"
          className="todo-input"
          placeholder="Add..."
          onChange={inputTextHandler}
        />
        <button
          className="todo-button"
          type="submit"
          onClick={submitTodoHandler}
        >
          <i className="fas fa-plus-circle"></i>
        </button>
      </div>

      <div className="select">
        <select name="todos" className="filter-todo" onChange={statusHandler}>
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
      <div className="alert-wrapper">
        {alertWarning ? (
          <div className="alert-warning">
            <div>Input alanı boş geçilemez!</div>
          </div>
        ) : (
          ""
        )}
        {alertSucces ? (
          <div className="alert-success">
            <div>Ekleme Başarılı.</div>
          </div>
        ) : (
          ""
        )}
      </div>
    </form>
  );
};

export default Form;
