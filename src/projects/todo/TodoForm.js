import React, {useState} from 'react'
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';


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
        <InputText 
        value={value}
        onChange={(event) => setValue(event.target.value)}
        placeholder='Add a new todo item'
        />
          <Button onClick={handleSubmit} icon="pi pi-plus-circle" />
    </>
  )
}

export default TodoForm