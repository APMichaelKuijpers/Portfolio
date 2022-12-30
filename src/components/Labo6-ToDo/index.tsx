import React, {useState} from "react";
import {ToDoItem} from "../../types";
import ToDoInput from "./components/ToDoInput";
import ToDoList from "./components/ToDoList";
import styles from "./ToDo.module.css";


const ToDo = () => {
    const [todos, setTodos] = useState<ToDoItem[]>([]);

    const addTodo = (todo: string) => {
        setTodos([...todos, { name: todo, completed: false }]);   
    };

    const markCompleted = (index: number, completed: boolean) => {
        setTodos(todos.map((todo, i) => i === index ? {...todo, completed: completed} : todo));
    };

    return (
        <div className={styles.App}>
           <ToDoInput addToDo={addTodo}/>
           <ToDoList todos={todos} markCompleted={markCompleted}/>
        </div>
    );
}

export default ToDo;

//npm start