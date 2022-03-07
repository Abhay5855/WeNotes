


import React from 'react'
import'./tasks.css'
import { db } from '../../firebase/firebase'
import { deleteDoc, doc, addDoc , collection} from "firebase/firestore";

const Tasks_Perform = ({todos}) => {




  

  // Display all the dos using map method
  const displayTodos = todos.map((todo)=> {

     
    return (
      <div key={todo.id} className='all__todos'>

        <input type='checkbox' className='strikethrough' onClick={() => handleClicked(todo.id , todo.data.todo )}/>
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

  const handleClicked = async(id , todo) => {

    await addDoc(collection(db, "completed"), {
      id : id,
      completed : todo,
    })
      .then((res) => {
        console.log(res);
        const movieDocRef = doc(db, "todos", id);
        try {
          deleteDoc(movieDocRef);
        } catch (err) {
          alert(err);
        }
      })

      .catch((err) => {
        console.log(err);
      });
        
         
  }
    

  return (
    <div className='tasks__perform'> 

           
        {

          todos.length > 0  ?  displayTodos : ''
        
}


        
        </div>
  )
}

export default Tasks_Perform