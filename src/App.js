import React, { Component } from 'react';
import Todos from './Todos';
import AddTodo from './AddTodo';

class App extends Component {

  state = {
    todos: [
      {id: 1, content: 'buy some milk'},
      {id: 2, content: 'play mario kart'}
    ]
  }

  addTodo = (todo) => {
    todo.id = Math.random();
    let todos = [...this.state.todos, todo];
    this.setState({
      todos
    })
  }

  deleteTodo = (id) => {
    let todos = this.state.todos.filter(todo => {
      return todo.id !== id
    })
    this.setState({
      todos
    })
  }

  render() {
    return (
      <div className="App container">
        <h1 className="my-3 text-center text-primary">Todo App</h1>
        <Todos deleteTodo={this.deleteTodo} todos={this.state.todos} />
        <AddTodo addTodo={this.addTodo} />
      </div>
    );
  }
}

export default App;
