import React from "react";

const Todos = ({ todos }) => {
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
          <Todo key={todo.id} todo={todo} />
        ))}
      </ul>
    </>
  );
};

export default Todos;
