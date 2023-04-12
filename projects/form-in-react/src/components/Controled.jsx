import React, { useState } from "react";

const Controled = () => {
  const [todo, setTodo] = useState({
    title: "Todo #01",
    description: "Description #01",
    state: "pending",
    prority: true,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(todo.title, todo.description, todo.state);
  };

  const handleChange = (e) => {
    // console.log((e.target.name, e.target.value));

    setTodo({
      ...todo,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="mb-2"
        type="text"
        placeholder="enter your data"
        name="title"
        value={todo.title}
        onChange={handleChange}
      />
      <textarea
        className="mb-2"
        placeholder="enter description"
        name="description"
        value={todo.description}
        onChange={handleChange}
      ></textarea>
      <div>
        <input
          type="checkbox"
          name="priority"
          className="form-input"
          id="inputCheck"
          checked={todo.prority}
          onChange={(e) => setTodo({ ...todo, prority: e.target.checked })}
        />
        <label htmlFor="inputCheck">Prioritize</label>
      </div>
      <select
        className="mb-2"
        name="state"
        value={todo.state}
        onChange={handleChange}
      >
        <option value="request">request</option>
        <option value="complete">complete</option>
      </select>
      <button type="submit">Prosecute</button>
    </form>
  );
};

export default Controled;
