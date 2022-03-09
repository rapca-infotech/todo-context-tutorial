import React, { useContext, useState, useEffect, createContext } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const TodoContext = createContext();

export function TodoContextProvider({ children }) {
  const [contextTodos, setContextTodos] = useState([]);

 
  
      
  useEffect(() => {
    async function fetchData() {

      try{
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/todos`
      );
      const data = await response.json();

      console.log(data);
      setContextTodos(data);
    }
    // res.status(402).json({message:"user created successfuly"});
   catch (error) {
    alertToast(`${error}`);
  }
}
    fetchData();
  }, []);
    

   const alertToast = (msg) => {
    toast.error(msg ,{
      position:"top-center",
      theme:"colored",
      // type:"error"
      autoClose: false,
    });
  }

 

  const deleteTodos = (id) => {
    setContextTodos((prev) => {
      let tempArr = [...prev];
      tempArr = tempArr.filter((x) => x.id !== id);
      return tempArr;
     
    });
  };

  return (
    <TodoContext.Provider
      value={{
        todos: contextTodos,
        setContextTodos ,
        deleteTodos,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}
<ToastContainer/>
export function useTodo() {
  const context = useContext(TodoContext);
  if (context === undefined) {
    throw new Error("Context must be used within a Provider");
  }
  return context;
}
