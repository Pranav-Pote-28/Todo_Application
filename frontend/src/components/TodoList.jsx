import React from "react";
import axios from "axios";

function TodoList({todos, onSelectedTodo, onUpdate, onClearSelected}){

    const handleDelete =async(id)=>{
        try {

            await axios.delete(`http://localhost:3000/api/todos/${id}`)
            onUpdate();
            onClearSelected();
            
        } catch (error) {
            console.error("error in handleDelete",error)
        }
    }

    return (
        <div style={{width:"100%", border:"2px solid green",padding:"20px",borderRight:"6px solid gray"}}>
            <h2>todo list</h2>

            {todos.length === 0 ?( <p>todolist is not present</p>):
                (
                <ul>
                    {todos.map((todo)=>(
                        <li key={todo._id} 
                            style={{cursor:"pointer", padding:"5px", border:"2px solid green", borderBottom: "1px solid #ccc"}}
                            onClick={()=>{onSelectedTodo(todo)}}>
                            {todo.title}
                            <button onClick={()=>handleDelete(todo._id)}>
                                X
                            </button>
                        </li>
                    ))}
                
                </ul>
                )}
        </div>
    );
}

export default TodoList;