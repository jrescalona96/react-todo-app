import React, { useState } from "react";
import "../css/App.css";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

const getWeekdayName = () => {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];

  return days[new Date().getDay()];
};

function App() {
  // TODO: pulled from DB
  // TODO: add notes section
  const [todos, updateTodos] = useState([
    { description: "Laundry", isCompleted: false, notes: "" },
    {
      description: "React Todo List App",
      isCompleted: false,
      notes: ""
    },
    { description: "Add demo to website", isCompleted: false, notes: "" }
  ]);
  const addAndUpdateTodos = description => {
    const newTodos = [
      ...todos,
      { description: description, isCompleted: false }
    ];
    updateTodos(newTodos);
  };
  const toggleCompletedStatus = index => {
    const newTodos = [...todos];
    if (newTodos[index].isCompleted) newTodos[index].isCompleted = false;
    else newTodos[index].isCompleted = true;
    updateTodos(newTodos);
  };
  const deleteTodoItem = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    updateTodos(newTodos);
  };

  return (
    <div className="app">
      <h1>{getWeekdayName()}'s Todo List</h1>
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            toggleCompletedStatus={toggleCompletedStatus}
            deleteTodoItem={deleteTodoItem}
          />
        ))}
        <TodoForm addAndUpdateTodos={addAndUpdateTodos} />
      </div>
    </div>
  );
}

export default App;
