import React, { useState } from "react";

const TodoCreate = ({ createTodo }) => {
  //The State state corresponds to the follow-up of the input which is a text
  const [title, setTitle] = useState("");

  const handleSubmitAddTodo = (e) => {
    e.preventDefault();
    if (!title.trim()) {
      return setTitle("");
    }

    createTodo(title);
    setTitle("");
  };

  return (
    <form
      onSubmit={handleSubmitAddTodo}
      className="mb-6 mt-8 flex items-center gap-4  overflow-hidden rounded-md bg-white px-4 py-4 transition-all duration-1000 dark:bg-gray-800"
    >
      <span className="inline-block  h-5 w-5  gap-4 rounded-full border-2"></span>
      <input
        className="w-full text-gray-400 outline-none transition-all duration-1000 dark:bg-gray-800"
        type="text"
        placeholder="Create new Todo..."
        title={title}
        onChange={(e) => setTitle(e.target.value)}
      />
    </form>
  );
};

export default TodoCreate;
