import React, { useState , useEffect} from "react";
import "./tasks.css";
import TasksAdd from "./TasksAdd";
import Tasks_Perform from "./Tasks_Perform";
import { db } from "../../firebase/firebase";
import { query, onSnapshot , collection, orderBy} from "firebase/firestore";


const Tasks = () => {


  const [todos , setTodos] = useState([]);

  // state to store completed

  // Get All the tasks 
  useEffect(() => {
    const GetAllTodos = () => {
      
      const allTodos = query(collection(db, "todos"), orderBy('timestamp'))

      onSnapshot(allTodos, (QuerySnapshot) => {
       
        setTodos(
          QuerySnapshot.docs.map((doc) => ({
            id : doc.id,
            data: doc.data(),
          }))
        );
      });
    };

    GetAllTodos();
  }, []);

  // get all completed tasks

 

      


  return (
    <div className="task__container">
      <div className="task__section">
             
             <div className="task_add">
             <TasksAdd />

               </div>
           

            {/* Added tasks */}

          

            <div className="performance">
              
              <Tasks_Perform todos={todos}/>
                </div>
  
  
  
  
          

        
        </div>
    </div>
  );
};

export default Tasks;
