import React from 'react';

function TodoItem({ todo, index, removeTodo }) {
  return (
    <div className="todo">
      <span>{todo.text}</span>
      <span className="category">({todo.category})</span>
      <button onClick={() => removeTodo(index)}>Remove</button>
    </div>
  );
}

export default TodoItem;
