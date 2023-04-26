import React, { useState } from "react";
import Swal from "sweetalert2";

type Todo = {
  id: string;
  title: string;
  description: string;
  state: "pending" | "complete";
  priority: boolean;
};

type Props = {
  addTodo: (todo: Todo) => void;
};

const Form: React.FC<Props> = ({ addTodo }) => {
  const [todo, setTodo] = useState<Todo>({
    id: "",
    title: "Title",
    description: "Description",
    state: "pending",
    priority: true,
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
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
      ...todo,
      id: generateID(),
      state: todo.state === "complete" ? "complete" : "pending",
    });

    Swal.fire({
      position: "center",
      icon: "success",
      title: "Taks added succesful!",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, checked, type } = e.target as HTMLInputElement;

    setTodo((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="enter your data"
        name="title"
        value={todo.title}
        onChange={handleChange}
      />
      <textarea
        placeholder="enter description"
        name="description"
        value={todo.description}
        onChange={handleChange}
      ></textarea>
      <div className="form-check">
        <input
          type="checkbox"
          id="inputCheck"
          checked={todo.priority}
          onChange={handleChange}
          name="priority"
        />
        <label htmlFor="inputCheck">Prioritize</label>
      </div>
      <select name="state" value={todo.state} onChange={handleChange}>
        <option value="pending">pending</option>
        <option value="complete">complete</option>
      </select>
      <button type="submit">Add Todos</button>
    </form>
  );
};

export default Form;
