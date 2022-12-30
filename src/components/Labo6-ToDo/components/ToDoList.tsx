import React, {useState} from "react";
import {ToDoItem} from "../../../types";
import ToDoListItem from "./ToDoListItem";


interface ToDoListProps{
    todos: ToDoItem[];
    markCompleted: (index: number, completed: boolean) => void;
  }
   
const ToDoList = ({todos, markCompleted} : ToDoListProps)  => {
    return(
              <div>
                  {todos.map((todo, index) => (
                   <ToDoListItem todo={todo} markCompleted={(completed: boolean) => markCompleted(index, completed)}/>   
                  ))}
              </div>
    )
  }

export default ToDoList;