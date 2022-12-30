import React, {useState} from "react";

interface ToDoInputProps {
    addToDo: (todo: string) => void;
  }
const ToDoInput = ({addToDo} : ToDoInputProps) => {
    const [todo, setTodo] = useState("");
    const addButtonClicked = () => {
      setTodo("");
      addToDo(todo);
    }
    return(
              <div>
                  <input id="todo" type="text" value={todo} onChange={(event) => setTodo(event.target.value)}/>
                  <button onClick={addButtonClicked}>Add</button>
              </div>
    )
  }

export default ToDoInput;