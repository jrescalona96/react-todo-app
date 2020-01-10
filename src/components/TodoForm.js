import React, { useState } from "react";

// Add new Todo (CREATE)
function TodoForm({ addAndUpdateTodos }) {
  const [description, resetFormFieldTo] = useState("");

  const newItemExists = () => {
    if (!description) return false;
    else return true;
  };

  const handleFormSubmitThenReset = e => {
    e.preventDefault();
    if (newItemExists()) {
      addAndUpdateTodos(description);
      resetFormFieldTo("");
    }
  };

  return (
    <form
      className="d-flex align-items-center justify-content-between"
      onSubmit={e => handleFormSubmitThenReset(e)}
    >
      <input
        className="input"
        type="text"
        value={description} // used to reset field after submit calling resetFormFieldTo("")
        onChange={e => resetFormFieldTo(e.target.value)}
      />
      <button className="btn btn-sm btn-primary">Add</button>
    </form>
  );
}

export default TodoForm;
