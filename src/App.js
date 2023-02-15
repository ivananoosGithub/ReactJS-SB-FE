import logo from "./logo.svg";
import "./App.css";
import TodoTable from "./components/TodoTable";
import React, { useState } from "react";

function App() {
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

  const addTodo = () => {
    if (todos.length > 0) {
      const newTodos = {
        rowNumber: todos.length + 1,
        rowDescription: "HAHAHAHXDD",
        rowAssigned: "LOLHAHXDD",
      };
      setTodo((todos) => [...todos, newTodos]);
    }
  };

  return (
    <div className="mt-5 container">
      <div className="card">
        <div className="card-header">Your todo's</div>
        <div className="card-body">
          <TodoTable todos={todos} />
          <a
            name=""
            id=""
            className="btn btn-primary"
            href="#"
            role="button"
            onClick={addTodo}
          >
            Add new todo
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
