import React from "react";

const TodoForm = props => {
    return (
        <form>
            <input 
                name="todo" 
                value={props.value} 
                type="text" 
                onChange={props.inputChangeHandler} 
                placeholder="Enter new task" />
            <button onClick={props.addTask}>Add Todo</button>
            <button onClick={props.clearCompleted}>Clear Completed</button>
        </form>
    )
}

export default TodoForm;