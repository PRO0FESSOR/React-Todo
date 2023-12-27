import React, { useState } from 'react'


const EditTodoForm = ({task,editTodo}) => {
    const[value,setValue] = useState(task.task)

    const handSubmit = e => {
        e.preventDefault();
        editTodo(value,task.id)

        setValue("")
    }

  return (
    <form className='TodoForm'onSubmit={handSubmit}>
        <input type="text" className='todo-input' placeholder='Update Task' onChange={(e)=>setValue(e.target.value)} value={value} />
        <button type='submit' className='todo-btn'>Update Task</button>
    </form>
  )
}

export default EditTodoForm