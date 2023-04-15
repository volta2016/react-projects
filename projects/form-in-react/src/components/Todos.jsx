import React from "react";
import Todo from "./Todo";

const Todos = ({ todos, deleteTodo, updateTodo }) => {
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
        {todos.length === 0 && (
          <li className="list-gruop-item text-center">without Todo!</li>
        )}
      </ul>
    </>
  );
};

export default Todos;
