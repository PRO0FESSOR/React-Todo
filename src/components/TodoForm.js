import React, { useState } from 'react'


const TodoForm = ({addTodo}) => {
    const[value,setValue] = useState("")

    const handSubmit = e => {
        e.preventDefault();
        addTodo(value)

        setValue("")
    }

  return (
    <form className='TodoForm'onSubmit={handSubmit}>
        <input type="text" className='todo-input' placeholder='What is the task today ?' onChange={(e)=>setValue(e.target.value)} value={value} />
        <button type='submit' className='todo-btn'>Add Task</button>
    </form>
  )
}

export default TodoForm