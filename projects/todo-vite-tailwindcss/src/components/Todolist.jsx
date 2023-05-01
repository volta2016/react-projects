import React from "react";
import TodoItem from "./TodoItem";

const Todolist = ({ todos }) => {
  return (
    <div className="rounded-md bg-white [&>article]:p-4">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default Todolist;
