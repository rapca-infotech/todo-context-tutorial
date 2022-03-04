import React, { useContext, useState, useEffect, createContext } from "react";

const TodoContext = createContext();

export function TodoContextProvider({ children }) {
  const [contextTodos, setContextTodos] = useState([]);
  
      
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/todos`
      );
      const data = await response.json();

      console.log(data);
      setContextTodos(data);
    }
    fetchData();
  }, []);
    

   

  const addTodos = (  { userId, id, title, completed }) => {
      
      setContextTodos((prev) => [...prev, { userId, id, title, completed }]);
      //  setContextTodos('');
  };

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
        addTodos,
        deleteTodos,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}
export function useTodo() {
  const context = useContext(TodoContext);
  if (context === undefined) {
    throw new Error("Context must be used within a Provider");
  }
  return context;
}
