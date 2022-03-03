import React, { useContext, useState, useEffect, createContext } from "react";


const TodoContext = createContext();

export function TodoContextProvider({ children }) {
  const [todos, setTodos] = useState([]);
 
  useEffect(() => {
    async function fetchData() {
        
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/todos`
      );
      const data = await response.json();

      console.log(data);
      setTodos(data);
    }
    fetchData();
  }, []);
  
  return (
    <TodoContext.Provider
      value={{
        todos
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}
export function  useTodo() {
  const context = useContext(TodoContext);
  if (context === undefined) {
    throw new Error("Context must be used within a Provider");
  }
  return context;
}
