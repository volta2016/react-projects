import React from "react";
import CrossIcon from "./icons/CrossIcon";

const TodoItem = ({ todo }) => {
  const { id, title, complete } = todo;
  return (
    <article className="flex gap-4 border-b px-4 py-4">
      <button className="inline-block  h-5 w-5  gap-4 rounded-full border-2"></button>
      <p className="grow text-gray-600">{title}</p>
      <button>
        <CrossIcon />
      </button>
    </article>
  );
};

export default TodoItem;
