import React from "react";

const Todo = props => {
    return (
            <li 
                className="todos"
                style={{textDecoration: props.todo.completed ? 'line-through' : 'none'}}
                key={props.todo.id}
                onClick={() => {
                    props.toggleComplete(props.todo.id)
                }}
            >
                {props.todo.task}
            </li>
    )
}

export default Todo;