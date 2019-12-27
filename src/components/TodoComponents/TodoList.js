import React from "react";
import Todo from "./Todo";

const TodoList = props => {
    return (
        <ul className="todo-list">
            {props.todos.map((todo, id) => (
                    <Todo 
                        todo={todo} 
                        key={id} 
                        toggleComplete={props.toggleComplete} 
                    />
            ))}
        </ul>
    )
}

export default TodoList;