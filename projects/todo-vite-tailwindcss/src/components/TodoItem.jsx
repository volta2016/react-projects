import React from "react";
import IconCheck from "./icons/IconCheck";
import IconCross from "./icons/IconCross";

const TodoItem = React.forwardRef(
  ({ todo, updateTodo, removeTodo, ...props }, ref) => {
    const { id, title, completed } = todo;
    return (
      <li
        {...props}
        ref={ref}
        className="flex gap-4 border-b px-4 py-4  dark:bg-gray-800"
      >
        <button
          className={`h-5 w-5 flex-none rounded-full border-2 ${
            completed
              ? "grid place-items-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
              : "inline-block"
          } `}
          onClick={() => updateTodo(id)}
        >
          {completed && <IconCheck />}
        </button>
        <p
          className={`grow text-gray-600  transition-all duration-700 dark:text-gray-400 ${
            completed && "line-through"
          }`}
        >
          {title}
        </p>
        <button onClick={() => removeTodo(id)}>
          <IconCross />
        </button>
      </li>
    );
  }
);

export default TodoItem;
