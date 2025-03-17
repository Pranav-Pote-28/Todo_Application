import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Todoeditor({todo, onUpdate}){

    const [title, setTitle] = useState(todo.title||"")
    const [description, setDescription] = useState(todo.description||"")

    useEffect(()=>{
        setTitle(todo.title);
        setDescription(todo.description)
    },[todo])

    const handleUpdate = async()=>{
        try {

            if(todo._id){
                await axios.put(`http://localhost:3000/api/todos/${todo._id}`,{title, description})
            }else{
                await axios.post("http://localhost:3000/api/todos",{title,description})
            }

           onUpdate()
            
        } catch (error) {
            console.error("error in handleUpdate",error)
        }
    };

    return(
        <div style={{padding:"20px", borderLeft:"1px solid gray"}}>
            <h2>edit todo</h2>
            <input 
                type="text" 
                value = {title}
                onChange={(e)=>setTitle(e.target.value)}
                placeholder = "Title"
            />
            <textarea 
                value = {description}    
                onChange = {((e)=>setDescription(e.target.value))}
                placeholder = "Description"
            />
            <button onClick={handleUpdate}>Save</button>

        </div>
    )
}