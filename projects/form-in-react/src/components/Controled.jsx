import React, { useState } from "react";

const Controled = () => {
  const [todo, setTodo] = useState({
    title: "Todo #01",
    description: "Description #01",
    state: "pending",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(todo.title, todo.description, todo.state);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="mb-2"
        type="text"
        placeholder="enter your data"
        name="title"
        value={todo.title}
        onChange={(e) => setTodo({ ...todo, title: e.target.value })}
      />
      <textarea
        className="mb-2"
        placeholder="enter description"
        name="description"
        value={todo.description}
        onChange={(e) => setTodo(e.target.value)}
      ></textarea>
      <select
        className="mb-2"
        name="state"
        value={todo.state}
        onChange={(e) => setTodo(e.target.value)}
      >
        <option value="request">request</option>
        <option value="complete">complete</option>
      </select>
      <button type="submit">Prosecute</button>
    </form>
  );
};

export default Controled;
