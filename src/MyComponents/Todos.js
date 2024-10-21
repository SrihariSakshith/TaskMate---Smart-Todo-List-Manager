import React from 'react';
import TodoItem from './TodoItem';

const Todos = (props) => {
  return (
    <div>
      <h2 align="center">Todos List</h2>
      {props.todos.length === 0 ? (
        <p align="center">No todos to display</p>
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
