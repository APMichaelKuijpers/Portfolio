import React, {useState} from "react";
import {ToDoItem} from "../../../types";

interface ToDoListItemProps{
    todo: ToDoItem;
    markCompleted: (completed: boolean) => void;
  }
  
const ToDoListItem = ({todo, markCompleted} : ToDoListItemProps)  => {
    return(
      <div>
         <input type="checkbox" checked={todo.completed} onChange={(event) => markCompleted(event.target.checked)}/>
         <span style={{textDecoration: todo.completed ? "line-through" : "none"}}>{todo.name}</span>
      </div>
      )
    }

export default ToDoListItem;