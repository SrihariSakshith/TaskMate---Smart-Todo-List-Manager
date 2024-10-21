import React from 'react';

const TodoItem = ({ todo,onDelete }) => {
  return (
    <div style={{ margin: '10px 0' }}>
      <h4 style={{ textAlign: 'left' }}>{todo.title}</h4>
      <p style={{ textAlign: 'left' }}>{todo.desc}</p>
      <div style={{ textAlign: 'center'}}>
        <button style={{ color: 'white', backgroundColor: 'red', cursor: 'pointer', padding: '5px 10px' }} onClick={()=>{onDelete(todo)}}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default TodoItem;
