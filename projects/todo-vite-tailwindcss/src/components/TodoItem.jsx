import React from "react";
import IconCheck from "./icons/IconCheck";
import IconCross from "./icons/IconCross";

const TodoItem = ({ todo, updateTodo, removeTodo }) => {
  const { id, title, completed } = todo;
  return (
    <article className="flex gap-4 border-b px-4 py-4">
      <button
        className={`h-5 w-5 flex-none rounded-full border-2 ${
          completed
            ? "grid place-items-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
            : "inline-block   "
        } `}
        onClick={() => updateTodo(id)}
      >
        {completed && <IconCheck />}
      </button>
      <p className={`grow text-gray-600 ${completed && "line-through"}`}>
        {title}
      </p>
      <button onClick={() => removeTodo(id)}>
        <IconCross />
      </button>
    </article>
  );
};

export default TodoItem;
