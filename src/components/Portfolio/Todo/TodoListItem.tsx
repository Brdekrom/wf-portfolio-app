import React, { useState } from "react";

interface TodoItem {
    name: string;
    completed: boolean;
}
interface TodoListItemProps {
    todo: TodoItem
    markCompleted: (completed: boolean) => void
}

const TodoListItem = ({ todo, markCompleted}: TodoListItemProps) => {

    return (
        <div>

           <div>
                <input type="checkbox" checked={todo.completed} onChange={(event) => 
                    markCompleted(event.target.checked)}/>
                <span style={{textDecoration: todo.completed ? "line-through" : "none"}}>{todo.name}</span>
            </div>
            
        </div>)
}

export default TodoListItem