import React from 'react';
import "./App.css";

// components
import TodoForm from "./components/TodoComponents/TodoForm";
import TodoList from "./components/TodoComponents/TodoList";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [
        {
          task: "learn how to fly drone",
          id: 1,
          completed: false
        }, 
        {
          task: "learn React class components",
          id: 2,
          completed: false
        },
        {
          task: "practice editing videos",
          id: 3,
          completed: false
        },
        {
          task: "read Ten Years A Nomad",
          id: 4,
          completed: false
        }
    ],
      todo: ''
    }
  }

  inputChangeHandler = event => {
    this.setState({[event.target.name]: event.target.value})
  }

  addTask = event => {
    event.preventDefault();
    let newTask = {
      task: this.state.todo,
      id: Date.now(),
      completed: false
    };
    this.setState({
      todos: [...this.state.todos, newTask],
      todo: ''
    })
  }

  toggleComplete = itemId => {
    const todos = this.state.todos.map(todo => {
      if (todo.id === itemId) {
        todo.completed = !todo.completed
      }
      return todo
    });
    this.setState({todos, todo: ''})
  }

  clearCompleted = e => {
    e.preventDefault();
    const todos = this.state.todos.filter(item => !item.completed);
    this.setState({
      ...this.state,
      todos
    })
  }

  render() {
    return (
      <div className="App">
        <h2 className="title">Welcome to your Todo App!</h2>
        <TodoList 
          todos={this.state.todos} 
          toggleComplete={this.toggleComplete} />
        <TodoForm todos={this.state.todos} value={this.state.todo} inputChangeHandler={this.inputChangeHandler} addTask={this.addTask} clearCompleted={this.clearCompleted}/>
      </div>
    );
  }
}

export default App;
