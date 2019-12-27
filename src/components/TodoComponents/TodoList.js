import React from "react";
import Todo from "./Todo";

const TodoList = props => {
    return (
        <div>
            {props.todos.map((todo, id) => (
                <ul className="todo-list">
                    <Todo 
                        todo={todo} 
                        key={id} 
                        toggleComplete={props.toggleComplete} 
                    />
                </ul>
            ))}
        </div>
    )
}

export default TodoList;