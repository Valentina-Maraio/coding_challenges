import React, { useState } from "react";
import './todo.css'

const TodoItem = ({ todo, index, updateTodo, completeTodo, removeTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(todo.text);

  const handleUpdate = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    updateTodo(index, editedText);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditedText(todo.text);
  };

  return (
    <>
      <div className="todo">
        <div className={`todo-item ${todo.isCompleted ? "completed" : ""}`}>
          {isEditing ? (
            <div>
              <input
                type="text"
                value={editedText}
                onChange={(e) => setEditedText(e.target.value)}
              />
              <button onClick={handleSave}>Save</button>
              <button onClick={handleCancel}>Cancel</button>
            </div>
          ) : (
            <>
              <span>{todo.text}</span>
              <button onClick={handleUpdate}>Update</button>
            </>
          )}
          <button onClick={() => completeTodo(index)}>
            {todo.isCompleted ? "Undo" : "Complete"}
          </button>
          <button onClick={() => removeTodo(index)}>Delete</button>
        </div>
      </div>
    </>
  );
};

export default TodoItem;
