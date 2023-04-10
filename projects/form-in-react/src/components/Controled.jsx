import React, { useState } from "react";

const Controled = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [state, setState] = useState("pending");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(title, description, state);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="mb-2"
        type="text"
        placeholder="enter your data"
        name="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        className="mb-2"
        placeholder="enter description"
        name="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>
      <select
        className="mb-2"
        name="state"
        value={state}
        onChange={(e) => setState(e.target.value)}
      >
        <option value="request">request</option>
        <option value="complete">complete</option>
      </select>
      <button type="submit">Prosecute</button>
    </form>
  );
};

export default Controled;
