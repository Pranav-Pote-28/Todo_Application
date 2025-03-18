import React from "react";

function TodoList({ todos, onSelectedTodo }) {
    return (
        <div className="todos-container">
            {todos.length === 0 ? (
                <p>Todo list is not present</p>
            ) : (
                <ul className="todo-list">
                    {todos.map((todo) => {

                        let formattedDate = "No date available";
                        if (todo.date) {
                            const dateObj = new Date(todo.date);
                            formattedDate = dateObj.toLocaleDateString("en-US", {
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                            });
                        }

                        return (
                            <li key={todo._id} onClick={() => onSelectedTodo(todo)} className="todo-item">
                                <div className="todo-heading">{todo.title}</div>
                                <div className="todo-content">
                                    <div className="todo-description">
                                        {todo.description.length >45 ? todo.description.slice(0,42)+" ...":todo.description
                                        }
                                    </div>
                                    <div className="todo-date">{formattedDate}</div> {/* Display formatted date */}
                                </div>
                            </li>
                        );
                    })}
                </ul>
            )}
        </div>
    );
}

export default TodoList;
