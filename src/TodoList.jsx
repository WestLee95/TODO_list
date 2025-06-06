import React from "react";
import TodoItem from "./TodoItem";

function TodoList({ todos, removeTodo }) {
  return (
    <div>
      {todos.map((todo, index) => (
        <TodoItem
          key={index}
          index={index}
          todo={todo}
          removeTodo={removeTodo}
        />
      ))}
    </div>
  );
}

export default TodoList;
