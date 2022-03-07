


import React from 'react'
import'./tasks.css'

const Tasks_Perform = ({todos}) => {


  console.log(todos)


  const displayTodos = todos.map((todo)=> {


    return (
      <div key={todo.id} className='all__todos'>

        <input type='checkbox' />
        <p>{todo.data.todo}</p>
        <span className='delete__todo'><i class="fas fa-times"></i></span>
        
        
        </div>
    )

  })

    

  return (
    <div className='tasks__perform'> 

           
        {displayTodos}


        
        </div>
  )
}

export default Tasks_Perform