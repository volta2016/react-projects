import React from "react";
import TodoItem from "./TodoItem";

const Todolist = ({ todos, removeTodo, updateTodo }) => {
  return (
    <div className="overflow-hidden rounded-t-md bg-white transition-all duration-700 [&>article]:p-4">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          updateTodo={updateTodo}
          removeTodo={removeTodo}
        />
      ))}
    </div>
  );
};

export default Todolist;
