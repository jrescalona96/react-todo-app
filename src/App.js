import React, { useState } from "react";

import "./App.css";
import Todo from "./components/Todo";
import TodoForm from "./components/TodoForm";

// Main Routine
function App() {
  // Todo initial state
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
  // Util to add new todos (CREATE)
  const addAndUpdateTodos = description => {
    const newTodos = [
      ...todos,
      { description: description, isCompleted: false }
    ];
    updateTodos(newTodos);
  };
  // Util to update completed todo (UPDATE)
  const toggleCompletedStatus = index => {
    const newTodos = [...todos];
    if (newTodos[index].isCompleted) newTodos[index].isCompleted = false;
    else newTodos[index].isCompleted = true;
    updateTodos(newTodos);
  };
  // Util to delete todo item (DELETE)
  const deleteTodoItem = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    updateTodos(newTodos);
  };

  return (
    <div className="app">
      {/* TODO: make Day Dynamic */}
      <h1>Tuesday Todo List</h1>
      <div className="todo-list">
        {/* (READ) */}
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
