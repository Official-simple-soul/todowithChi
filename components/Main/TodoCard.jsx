import React from 'react'

function TodoCard({todoArr}) {
  return (
    <ul>
      {
        todoArr.map(todos => {
            const {title, id, status} = todos
            return (
                <li key={id} className='flex justify-between'>
                    <input type="checkbox" />
                    <h1>{title}</h1>
                    <h1>{status}</h1>
                </li>
            )
        })
      }
    </ul>
  )
}

export default TodoCard
