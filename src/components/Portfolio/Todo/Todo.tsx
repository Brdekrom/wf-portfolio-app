import React, { useState } from "react";
import TodoList from "./TodoList";
import TodoInput from "./TodoInput";
import styles from "./Todo.module.css"

interface TodoItem {
    name: string;
    completed: boolean;
}

const Todo = () => {
    const [todos, setTodos] = useState<TodoItem[]>([]);
    const [todo, setTodo] = useState("");

    const addTodo = (todo: string) => {
        setTodos([...todos, { name: todo, completed: false }]);
        setTodo("");
    };

    const markCompleted = (index: number, completed: boolean) => {
        setTodos(todos.map((todo, i) => i === index ? { ...todo, completed: completed } : todo));
    };

    return (
        <div className={styles.todoContainer}>
            <TodoInput todo={todo} setTodo={setTodo} addTodo={addTodo} />
            <TodoList todos={todos} markCompleted={markCompleted} />
        </div>
    );

}

export default Todo;