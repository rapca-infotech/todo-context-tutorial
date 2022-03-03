import React, { useState } from "react";
import { useTodo } from "./Context/TodoContext";

function Todos() {
  const { todos, addTodo } = useTodo();
  const [inputTodos, setInputTodos] = useState("");

  // console.log(titles);
  return (
    <>
      <input
        className=""
        type="text"
        placeholder="Add Title....."
        value={inputTodos}
        onChange={(e) => setInputTodos(e.target.value)}
      />
      <button
        onClick={() =>
          addTodo({
            userId: 2,
            id: todos.length + 1,
            title: inputTodos,
            completed: false,
          })
        }
      >
        Add
      </button>

      <ol>
        {todos.map((u) => (
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
export default Todos;
