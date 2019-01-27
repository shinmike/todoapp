import React from 'react';

const Todos = ({ todos, deleteTodo }) => {

  let todosList;

  if (todos.length) {
    todosList = todos.map(todo => {
      return (
        <ul className="list-group" key={todo.id} onClick={() => { deleteTodo(todo.id) }}>
          <li className="list-group-item my-1 text-center">{todo.content}</li>
        </ul>
      )
    })
  } else {
    return (
      <ul className="list-group">
        <li className="list-group-item my-1 text-center">You have no todos left, yay!</li>
      </ul>
    )

  }


  return (
    <div className="row">
      <div className="col">
        {todosList}
      </div>
    </div>
  )
}

export default Todos;