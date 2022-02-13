import React from "react";
import { TodoContext } from "../TodoContext";
import "./TodoForm.css";

function TodoForm() {
  const [newTodoValue, setNewTodoValue] = React.useState("");
  const { addTodo, setOpenModal } = React.useContext(TodoContext);

  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  };

  const onCancel = () => {
    setOpenModal(false);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    addTodo(newTodoValue);
    setOpenModal(false);
  };

  return (
    <form onSubmit={onSubmit}>
      <label>Write your new task</label>
      <textarea
        value={newTodoValue}
        onChange={onChange}
        placeholder="Enter a new task"
      />
      <div>
        <button
          className="TodoForm-buttonContainer"
          type="button"
          onClick={onCancel}
          className="TodoForm-button TodoForm-button--cancel"
        >
          Cancel
        </button>

        <button className="TodoForm-button TodoForm-button--add" type="submit">
          Add
        </button>
      </div>
    </form>
  );
}

export { TodoForm };
