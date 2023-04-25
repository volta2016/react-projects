import React from "react";
import Todo from "./Todo";
import { TodosProps } from "./types";

const Todos = ({ todos, deleteTodo, updateTodo }: TodosProps) => {
  return (
    <>
      <h2 className="text-center">
        Todos{" "}
        <span role="img" aria-label="todo">
          📚
        </span>
      </h2>
      <ul>
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            deleteTodo={deleteTodo}
            updateTodo={updateTodo}
          />
        ))}
        {todos.length === 0 && <li className="text-center">without Todo!</li>}
      </ul>
    </>
  );
};

export default Todos;
