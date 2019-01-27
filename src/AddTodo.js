import React, { Component } from 'react';

class AddTodo extends Component {

  state = {
    content: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state);
    this.setState({
      content: ''
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="my-5">
        <input onChange={this.handleChange} type="text" className="form-control mb-2" id="content" placeholder="Add Todo" value={this.state.content} />
        <button type="submit" className="btn btn-primary btn-block">Add Todo</button>
      </form>
    )
  }
}

export default AddTodo;