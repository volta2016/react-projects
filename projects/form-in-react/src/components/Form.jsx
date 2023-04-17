import React, { useState } from "react";
import Swal from "sweetalert2";

const Form = ({ addTodo }) => {
  const [todo, setTodo] = useState({
    title: "Title",
    description: "Description",
    state: "pending",
    priority: true,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const { title, description, state } = todo;
    console.log(title, description, state);

    // small validation
    if (!title.trim() || !description.trim()) {
      console.log("campos vacíos");
      return Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Title and description is mandatory!",
      });
    }

    function generateID() {
      return Math.random().toString(36).slice(2);
    }

    addTodo({
      id: generateID(),
      ...todo,
      state: todo.state === "complete",
    });

    Swal.fire({
      position: "center",
      icon: "success",
      title: "Taks added succesful!",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  const handleChange = (e) => {
    // console.log((e.target.name, e.target.value));
    const { name, value, checked, type } = e.target;

    setTodo((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
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
      <div className="form-check mb-2">
        <input
          className="form-check-input"
          type="checkbox"
          id="inputCheck"
          checked={todo.priority}
          onChange={handleChange}
          name="priority"
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
        <option value="pending">pending</option>
        <option value="complete">complete</option>
      </select>
      <button type="submit">Add Todos</button>
    </form>
  );
};

export default Form;
