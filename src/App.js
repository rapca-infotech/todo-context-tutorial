import React from "react";
import "./App.css";
import { TodoContextProvider } from "./Context/TodoContext";
import Todos from "./Title";
import  "../node_modules/bootstrap/dist/css/bootstrap.min.css";


function App() {
  return (
    <TodoContextProvider>
      <div className="App">
        <Todos/>
      </div>
    </TodoContextProvider>
  );
};
export default App