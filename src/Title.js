import React, { useState } from "react";
import { useTodo  } from "./Context/TodoContext";
import { v4 as uuidv4} from "uuid";
import {VscTrash} from 'react-icons/vsc';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Todos() {
  const { todos,setContextTodos ,  deleteTodos} = useTodo();
  const [inputTodos, setInputTodos  ] = useState("");

  const addToast = () => {
    toast('Add Title successfully ', {
      position:"top-center",
      theme:"colored",
      type:"success"
    });
  }

  const delToast = () => {
    toast.error(' delete Title  successfully', {
      position:"top-center",
      theme:"colored",
      // type:"warn"
    });
  }
  

  const addTodos = (  { userId, id, title, completed }) => {
    if (! inputTodos) {
    } 
    else
     {
      setContextTodos((prev) => [...prev, { userId, id, title, completed }]);
      setInputTodos('');
    }
};


  // console.log(titles);
  return (
    <>
      <input

        className="input"
        type="text"
        placeholder="Add Title....."
        value={inputTodos}
        onChange={(e) => setInputTodos(e.target.value)}
        />

      <button 
      className="addbtn"
      onClick={() => { addToast()
        addTodos({
          userId: 2,
          id: uuidv4(),
          title: inputTodos,
          completed: false,
          
        })
        
      }}
    
  
      >
        Add
      </button>

        <ToastContainer/>

      <ul>
        {todos.map((u) => (
          <div className="card1" key={u.id}>
            <div className="card-body">
              {u.title}
              
      <VscTrash  className="trashbtn" 
       onClick= {() => {delToast()
         deleteTodos
         (u.id)
        } }
         />
              
            </div>
          </div>
        ))}
      </ul>
    </>
  );
}
export default Todos;
