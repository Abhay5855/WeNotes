import React, { useState } from "react";
import {db} from '../../firebase/firebase'
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import './tasks.css'

const TasksAdd = () => {
  const [todo, setTodo] = useState("");

    const disable = !todo;

  const handleSubmit = async (e) => {
    e.preventDefault();

    await addDoc(collection(db, "todos"), {
      todo: todo,
      timestamp: serverTimestamp(),
    })
      .then((res) => {
        console.log(res);
      })

      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="addtask__container">
      <form onSubmit={handleSubmit} className='addtask__form'>
        <input
          type="text"
          placeholder="What's on your list today ?"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button disabled={disable} type="submit" className="todo__btn">Add</button>
      </form>
    </div>
  );
};

export default TasksAdd;
