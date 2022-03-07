


import React, { useState } from 'react'
import'./tasks.css'
import { db } from '../../firebase/firebase'
import { deleteDoc, doc} from "firebase/firestore";

const Tasks_Perform = ({todos}) => {

  const [isChecked, setIsChecked] = useState(false);

   
  

  // Display all the dos using map method
  const displayTodos = todos.map((todo)=> {

     
    return (
      <div key={todo.id} className='all__todos'>

        <input type='checkbox' className='strikethrough'/>
        <p className='todo__name'>{todo.data.todo}</p>
        <span className='delete__todo' onClick={() => handleRemove(todo.id)}><i class="fas fa-times"></i></span>
        </div>
    )

  })


  // Delete function to remove todo
  const handleRemove = async (id) => {
    const movieDocRef = doc(db, "todos", id);
    try {
      await deleteDoc(movieDocRef);
    } catch (err) {
      alert(err);
    }
  };

  

  return (
    <div className='tasks__perform'> 

           
        {

          todos.length > 0  ?  displayTodos : ''
        
}


        
        </div>
  )
}

export default Tasks_Perform