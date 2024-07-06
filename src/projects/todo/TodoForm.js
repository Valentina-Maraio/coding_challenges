import React, {useState} from 'react'

const TodoForm = ({addTodo}) => {
    const [value, setValue] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        if(!value) return;
        addTodo(value);
        setValue('')
    }
  return (
    <>
    <form onSubmit={handleSubmit}>
        <input 
        type="text"
        className="input"
        value={value}
        onChange={(event) => setValue(event.target.value)}
        placeholder='Add a new todo item'
        />
        <button type="submit">Add</button>
    </form>
    </>
  )
}

export default TodoForm