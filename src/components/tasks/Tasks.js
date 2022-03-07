import React from "react";
import "./tasks.css";
import TasksAdd from "./TasksAdd";
import Tasksperform from "./Tasksperform";

const Tasks = () => {
  return (
    <div className="task__container">
      <div className="task__section">
             
             <div className="task_add">
             <TasksAdd />

               </div>
           

            {/* Added tasks */}
            <div className="performance">
              
            <Tasksperform />
              </div>




            {/* Completed tasks */}

        
        </div>
    </div>
  );
};

export default Tasks;
