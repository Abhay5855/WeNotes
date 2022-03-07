import React from "react";
import "./tasks.css";
import TasksAdd from "./TasksAdd";
import Tasks_Completed from "./Tasks_Completed";
import Tasks_Perform from "./Tasks_Perform";


const Tasks = () => {
  return (
    <div className="task__container">
      <div className="task__section">
             
             <div className="task_add">
             <TasksAdd />

               </div>
           

            {/* Added tasks */}
            <div className="performance">
              
            <Tasks_Perform/>
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
