import React, { useEffect, useState } from "react";
import axios from "axios";


export default function Todoeditor({todo, onUpdate, setCurrentPage, onClearSelected}){

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

                onUpdate(false);

            }else{
                const response = await axios.post("http://localhost:3000/api/todos",{title,description})
                const lastPage = response.data.totalPages;
                console.log("lastpage",lastPage);

                setCurrentPage(lastPage);
                
                onUpdate(true)
            }
        } catch (error) {
            console.error("error in handleUpdate",error)
        }
    };

    const handleDelete =async(id)=>{
        try {

            await axios.delete(`http://localhost:3000/api/todos/${id}`)
            onUpdate(false);
            onClearSelected();
            
        } catch (error) {
            console.error("error in handleDelete",error)
        }
    }

    return(
        <div className="editor-container">

            <div className="editor-header">
                <input 
                    type="text" 
                    value = {title}
                    onChange={(e)=>setTitle(e.target.value)}
                    placeholder = "Title"
                    className="editor-title"
                />
                <button onClick={()=>handleDelete(todo._id)} className="delete-btn">
                    <img src="/images/bin_icon.png"></img>
                </button>
            </div>

            <div className="editor-tools">
                <img src="/images/image.png"></img>
            </div>

            

            <textarea 
                value = {description}    
                onChange = {((e)=>setDescription(e.target.value))}
                placeholder = "Description"
                className="editor-description"
            />
            <button onClick={handleUpdate} id="save-btn">Save</button>

        </div>
    )
}