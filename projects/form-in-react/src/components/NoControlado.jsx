import React, { useRef, useState } from "react";

const NoControlado = () => {
  const [error, setError] = useState("");
  const form = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    //catch the data
    const data = new FormData(form.current);

    const { title, description, state } = Object.fromEntries([
      ...data.entries(),
    ]);
    //validate the data
    if (!title.trim() || !description.trim() || !state.trim())
      return setError("fill the fields");

    console.log(title, description, state);
    //send the data
  };

  return (
    <form onSubmit={handleSubmit} ref={form}>
      <input
        className="mb-2"
        type="text"
        placeholder="enter your data"
        name="title"
        defaultValue="todo #01"
      />
      <textarea
        className="mb-2"
        placeholder="enter description"
        name="description"
        defaultValue="description #01"
      ></textarea>
      <select className="mb-2" name="state" defaultValue="complete">
        <option value="request">request</option>
        <option value="complete">complete</option>
      </select>
      <button type="submit">Prosecute</button>
      {error !== "" && error}
    </form>
  );
};

export default NoControlado;
