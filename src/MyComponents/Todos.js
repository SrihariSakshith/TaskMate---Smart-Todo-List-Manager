import React from 'react';
import TodoItem from './TodoItem';
import './Todos.css'

const Todos = (props) => {
  return (
    <div className="todos">
      <h2>Todos List</h2>
      {props.todos.length === 0 ? (
        <p>No todos to display</p>
      ) : (
        props.todos.map((item) => (
          <div key={item.sno}>
            <TodoItem todo={item} onDelete={props.onDelete} />
            <hr />
          </div>
        ))
      )}
    </div>
  );
}

export default Todos;
