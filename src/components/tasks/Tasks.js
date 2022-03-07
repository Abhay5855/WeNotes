import React, { useState , useEffect} from "react";
import "./tasks.css";
import TasksAdd from "./TasksAdd";
import Tasks_Completed from "./Tasks_Completed";
import Tasks_Perform from "./Tasks_Perform";
import { db } from "../../firebase/firebase";
import { query, onSnapshot , collection, orderBy} from "firebase/firestore";


const Tasks = () => {


  const [todos , setTodos] = useState([]);


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




            {/* Completed tasks */}
            <div className="completed__section">

              <Tasks_Completed />
              
              </div>

        
        </div>
    </div>
  );
};

export default Tasks;
