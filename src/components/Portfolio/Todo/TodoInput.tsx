import React, { useState } from "react";

interface TodoInputProps {
    todo:string
    setTodo: (data:string) => void
    addTodo: (data: string) => void
}

const TodoInput = ({todo, setTodo,addTodo}:TodoInputProps) => {

    return(
        <div>
                <input id="todo" type="text" value={todo} onChange={(event) => 
                    setTodo(event.target.value)}/>
                <button onClick={() => addTodo(todo)}>Add</button>
            </div>
    )
}

export default TodoInput