import React, { useContext, useState } from "react";
import { MyContext } from "./App";
import ToDoItem from "./ToDoItem";


export default function ToDosContainer() {
  const {dispatch, items} = useContext(MyContext);

  const [inputText, setInputText] = useState("");

  const formSubmitted = (e) => {
    e.preventDefault();
    if (inputText.trim() !== "") {
      dispatch({type: "addItem", payload: inputText});
      setInputText("");
    }
  };

  const toDos = items.filter(item => item.done===false)

  const todosItem = toDos.map((task) => {
    return (
      <ToDoItem
        key={task.id}
        taskProps={task}
      />
    );
  });

  return (
    <div className="todos-container">
      {/* onSubmit use in form!not in input */}
      <form className="todo-form" onSubmit={formSubmitted}>
        <label className="input-item">
          <input
            type="text"
            name="todo"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          />
        </label>
        <input className="btn" type="submit" value="ADD" />
      </form>
      <div className="todos">
        <h3>TO DO</h3>
        {todosItem}
      </div>
    </div>
  );
}
