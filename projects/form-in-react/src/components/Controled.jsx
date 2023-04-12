import React, { useState } from "react";

const Controled = () => {
  const [todo, setTodo] = useState({
    title: "Todo #01",
    description: "Description #01",
    state: "pending",
    prority: false,
  });
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { title, description } = todo;
    // console.log(title, description, state, prority);

    // small validation
    if (!title.trim() || !description.trim()) {
      console.log("campos vacíos");
      setError(true);
      return;
    } else {
      setError(false);
    }
  };

  const handleChange = (e) => {
    // console.log((e.target.name, e.target.value));
    const { name, value, checked, type } = e.target;

    setTodo((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const PrintError = () => (
    <div className="alert alert-danger">Todos los campos obligatorios</div>
  );

  return (
    <form onSubmit={handleSubmit}>
      {error && <PrintError />}
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
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          id="inputCheck"
          checked={todo.prority}
          onChange={handleChange}
          name="prority"
        />
        <label className="form-check-label" htmlFor="inputCheck">
          Prioritize
        </label>
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
