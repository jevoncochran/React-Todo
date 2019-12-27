import React from "react";

const TodoForm = props => {
    return (
        <form className="add-form">
            <input 
                className="add-input"
                name="todo" 
                value={props.value} 
                type="text" 
                onChange={props.inputChangeHandler} 
                placeholder="Enter new task" />
            <button className="add-button" onClick={props.addTask}>Add Todo</button>
            <button className="clear-button" onClick={props.clearCompleted}>Clear Completed</button>
        </form>
    )
}

export default TodoForm;