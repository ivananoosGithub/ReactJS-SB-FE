import logo from "./logo.svg";
import "./App.css";
import TodoTable from "./components/TodoTable";
import React, { useState } from "react";
import NewTodoFormComponent from "./components/NewTodoForm";

function App() {
  const [showAddTodoForm, setShowAddTodoForm] = useState(false);

  const [todos, setTodo] = useState([
    {
      rowNumber: 1,
      rowDescription: "Get haircut123",
      rowAssigned: "Kimoy",
    },
    {
      rowNumber: 2,
      rowDescription: "LOL123",
      rowAssigned: "Mercy123",
    },
  ]);

  const addTodo = (descriptionChanged, assignedChanged) => {
    let rowNo = 0;
    if (todos.length > 0) rowNo = todos[todos.length - 1].rowNumber + 1;
    else rowNo = 1;

    const newTodos = {
      rowNumber: rowNo,
      rowDescription: descriptionChanged,
      rowAssigned: assignedChanged,
    };
    setTodo((todos) => [...todos, newTodos]);

    console.log(rowNo);
  };

  const deleteTodo = (deleteRowNumber) => {
    let deletedRowNumber = todos.filter(function (value) {
      return value.rowNumber !== deleteRowNumber;
    });

    setTodo(deletedRowNumber);
  };

  return (
    <div className="mt-5 container">
      <div className="card">
        <div className="card-header">Your todo's</div>
        <div className="card-body">
          <TodoTable todos={todos} deleteTodo={deleteTodo} />
          <button
            className="btn btn-primary"
            onClick={() => setShowAddTodoForm(!showAddTodoForm)}
          >
            {showAddTodoForm ? "Close todo form!" : "Click to add new todo!"}
          </button>

          {showAddTodoForm && (
            <NewTodoFormComponent addTodo={addTodo}></NewTodoFormComponent>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
