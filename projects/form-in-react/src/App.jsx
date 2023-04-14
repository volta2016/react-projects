import { useState } from "react";
import Form from "./components/Form";
import Todos from "./components/Todos";

const initialState = [
  {
    id: 1,
    title: "Todo #01",
    description: "Description #01",
    state: true,
    priority: false,
  },
  {
    id: 2,
    title: "Todo #02",
    description: "Description #02",
    state: false,
    priority: false,
  },
  {
    id: 3,
    title: "Todo #03",
    description: "Description #03",
    state: false,
    priority: true,
  },
];

function App() {
  const [todos, setTodo] = useState(initialState);

  const addTodo = (todo) => {
    setTodo([...todos, todo]);
  };

  return (
    <div className="container">
      <h1 className="my-5">
        hi react app + vite! Form
        <span role="img" aria-label="form">
          ⚛️
        </span>
      </h1>

      <Form addTodo={addTodo} />
      <Todos todos={todos} />
    </div>
  );
}

export default App;
