import React from 'react'

const TodoItem = ({todo, index, completeTodo, removeTodo}) => {
  return (
    <>
    <div className="todo">
        <span style={{textDecoration: todo.isCompleted ? 'line-through' : ''}}>
            {todo.text}
        </span>
        <div>
            <button onClick={() => completeTodo(index)}>
                {todo.isCompleted ? 'Undo' : 'Complete'}
            </button>
            <button onClick={() => removeTodo(index)}>Remove</button>
        </div>
    </div>
    </>
  )
}

export default TodoItem