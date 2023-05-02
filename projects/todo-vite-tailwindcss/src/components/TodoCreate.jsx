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
      className="mt-8 flex items-center  gap-4 overflow-hidden rounded-md bg-white px-4 py-4"
    >
      <span className="inline-block  h-5 w-5  gap-4 rounded-full border-2"></span>
      <input
        className="w-full text-gray-400 outline-none"
        type="text"
        placeholder="Create new Todo..."
        title={title}
        onChange={(e) => setTitle(e.target.value)}
      />
    </form>
  );
};

export default TodoCreate;