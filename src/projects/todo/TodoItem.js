import React, { useState } from "react";
import "./todo.css";
import { Button } from "primereact/button";

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
            <div className="list_items">
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
              <Button icon="pi pi-pencil" onClick={handleUpdate} />
            </>
          )}
          <Button
            onClick={() => completeTodo(index)}
            icon={todo.isCompleted ? "pi pi-undo" : "pi pi-check"}
            className="p-button-rounded p-button-text"
          />
          <Button onClick={() => removeTodo(index)} icon="pi pi-eraser" />
        </div>
      </div>
    </>
  );
};

export default TodoItem;
