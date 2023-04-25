import React from "react";
import { TodoType } from "../types";

type Props = {
  todo: TodoType,
  deleteTodo: (id: number) => void,
  updateTodo: (id: number) => void,
};

const Todo = ({ todo, deleteTodo, updateTodo }: Props) => {
  const { title, description, state, priority, id } = todo;

  return (
    <li className="todo d-flex justify-content-between align-items-start p-2 mb-1">
      <div>
        <h5 className={`title-todo ${state && "text-decoration"}`}>{title}</h5>
        <p className={`text-todo ${state && "text-decoration"}`}>
          {description}
        </p>
        <div className="d-flex gap-2">
          <button onClick={() => deleteTodo(id)} className="btn-delete">
            Delete
          </button>
          <button onClick={() => updateTodo(id)} className="btn-update">
            Update
          </button>
        </div>
      </div>
      <span className={`${priority ? "badge" : ""}`}>
        {priority && "Priority"}
      </span>
    </li>
  );
};

export default Todo;
