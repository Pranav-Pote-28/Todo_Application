"use client"

import axios from "axios";
import { useEffect, useState } from "react";

import TodoList from "../components/TodoList.jsx";
import TodoEditor from "../components/TodoEditor.jsx";
import "./styles.css"

export default function HomePage(){

  const [todos, setTodos] = useState([])
  const [selectedTodo, setSelectedTodo] = useState(null)
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [searchTerm, setSearchTerm] = useState("")
  const todosPerPage = 5;

  useEffect(()=>{
    fetchTodos()
  },[currentPage, searchTerm, selectedTodo])

  const fetchTodos = async (addedNewPage = false)=>{
    try{
      const responses = await axios.get(`http://localhost:3000/api/todos?page=${currentPage}&limit=${todosPerPage}&search=${searchTerm}`);
      setTodos(responses.data.todos);
      setTotalPages(responses.data.totalPages);

    }catch(err){
      console.error("error in fetchTodo", err);
    }
  };

  const handleSelectedTodo = (todo)=>{
    setSelectedTodo(todo);
  }

  const handleNewTodo = ()=>{
    console.log("clicked new todo")
    setSelectedTodo({title: "", description: ""})

  }

  const handlePrevPage= ()=>{

    if(currentPage>1){
      setCurrentPage((currPage)=>currPage-1)
    }

    // handleNewTodo();
  }

  const handleNextPage= ()=>{
    setCurrentPage((currPage)=>currPage+1)
    // handleNewTodo();
  }

  const handleSearch = (e)=>{
    setSearchTerm(e.target.value);
    setCurrentPage(1)
  }

  return(
    <div className="container">

      <div className="sidebar">

        <div className="search-bar">
          <button onClick={()=>handleNewTodo()} ><img src="/images/create_icon.png" /></button>
          <input placeholder="Search title" type="text" value={searchTerm} onChange={handleSearch}></input>
          <img src="/images/search_icon.png"></img>
        </div>

        <TodoList todos = {todos} onSelectedTodo={handleSelectedTodo}  />


        <div className="directions">
          <button onClick = {handlePrevPage} disabled={currentPage === 1}>prev page</button>
          {currentPage}
          <button onClick = {handleNextPage} disabled = {currentPage === totalPages}>next page</button>
        </div>

      </div>

    <div className="editor">
      {!selectedTodo?<div id="default-message">Your todo description appears here .</div>:selectedTodo && <TodoEditor todo={selectedTodo} onUpdate={(addedNewPage)=>{fetchTodos(addedNewPage)}} setCurrentPage = {setCurrentPage}  onClearSelected={()=>{setSelectedTodo(null)}}/>}
    </div>
       
    </div>
  )
}