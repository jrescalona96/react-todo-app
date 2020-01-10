import React from "react";

// Placeholder for Todo item (READ)
function Todo({ todo, index, toggleCompletedStatus, deleteTodoItem }) {
  return (
    <div className={"todo " + (todo.isCompleted ? "completed" : "")}>
      {todo.description}
      <div>
        <button
          className={
            "m-1 btn btn-sm btn-" +
            (todo.isCompleted ? "outline-primary" : "primary")
          }
          onClick={() => toggleCompletedStatus(index)}
        >
          {todo.isCompleted ? "Undo" : "Complete"}
        </button>

        <button
          className=" m-1 btn btn-sm btn-danger"
          onClick={() => deleteTodoItem(index)}
        >
          X
        </button>
      </div>
    </div>
  );
}

export default Todo;
