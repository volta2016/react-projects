import React from "react";
import { Todo } from "./types";

type Props = {
  todo: Todo;
  deleteTodo: (id: string) => number;
  updateTodo: (id: string) => number;
};

const TodoItem = ({ todo, deleteTodo, updateTodo }: Props) => {
  const { title, description, state, priority, id } = todo;

  return (
    <li className="todo">
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

export default TodoItem;
