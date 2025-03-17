"use client"

import axios from "axios";
import { useEffect, useState } from "react";

import TodoList from "../components/TodoList.jsx";
import TodoEditor from "../components/TodoEditor.jsx";

export default function HomePage(){

  const [todos, setTodos] = useState([])
  const [selectedTodo, setSelectedTodo] = useState(null)
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const todosPerPage = 5;

  useEffect(()=>{
    fetchTodos()
  },[currentPage])

  const fetchTodos = async ()=>{
    try{
      const responses = await axios.get(`http://localhost:3000/api/todos?page=${currentPage}&limit=${todosPerPage}`);
      setTodos(responses.data.todos);
      setTotalPages(responses.data.totalPages)
    }catch(err){
      console.error("error in fetchTodo", err);
    }
  };

  const handleSelectedTodo = (todo)=>{
    setSelectedTodo(todo);
    console.log("selectedtodo: ",selectedTodo)
  }

  const handleNewTodo = ()=>{
    setSelectedTodo({title: "", description: ""})
  }

  const handlePrevPage= ()=>{

    if(currentPage>1){
      setCurrentPage((currPage)=>currPage-1)
    }

    handleNewTodo();
  }

  const handleNextPage= ()=>{
    setCurrentPage((currPage)=>currPage+1)

    handleNewTodo();
  }

  return(
    <div style={{display:"flex", border:"2px solid red"}}>

      <div style={{width:"30%",border:"2px solid blue"}}>
        <TodoList todos = {todos} onSelectedTodo={handleSelectedTodo} onUpdate={fetchTodos} onClearSelected={()=>{setSelectedTodo(null)}} />
        <button onClick={()=>handleNewTodo()}>
          +_create_todo
        </button>

        <div>
          <button onClick = {handlePrevPage} disabled={currentPage === 1}>prev</button>
          <button onClick = {handleNextPage} disabled = {currentPage === totalPages}>next</button>
        </div>
      </div>

      {selectedTodo && <TodoEditor todo={selectedTodo} onUpdate={fetchTodos} />}
       
    </div>
  )
}