import React, {useState} from "react";
import { useTodo } from "./Context/TodoContext";



 function Todos() {

  const { todos } = useTodo();
  const [inputTodos, setInputTodos]= useState('');
  const [titles, setTitles] = useState([]);
    
   const addTitle =() => { 
     if (!inputTodos) {
   }  else {
     setTitles([...titles, inputTodos]);
     setInputTodos('')
   }   
   }
    

  // console.log(titles);
  return (
<>
    <input className="" type= "text" placeholder="Add Title....." value={inputTodos}
    onChange={(e) => setInputTodos (e.target.value) }
    />  
    <button onClick={addTitle}>Add</button>
  
    <ol>
      {todos.map(u => (
        <div className="card" key={u.id}>
            <div className="card-body">
                   {u.title}
                   {/* {u}  */}

            </div>
        </div>
      ))}
    </ol>
    </>
  );
}
export default Todos
