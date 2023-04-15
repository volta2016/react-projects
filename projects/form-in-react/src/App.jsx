import { useState } from "react";
import Form from "./components/Form";
import Todos from "./components/Todos";

const initialState = [];

function App() {
  const [todos, setTodo] = useState(initialState);

  const addTodo = (todo) => {
    setTodo([...todos, todo]);
  };

  const deleteTodo = (id) => {
    const newArray = todos.filter((todo) => todo.id !== id);
    setTodo(newArray);
  };

  const updateTodo = (id) => {
    const newTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, state: !todo.state } : todo
    );
    setTodo(newTodos);
  };

  const orderTodo = (arrayTodo) => {
    return arrayTodo.sort((a, b) => {
      if (a.priority === b.priority) return 0;
      if (a.priority) return -1; //more priority
      if (!a.priority) return 1;
    });
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
      <Todos
        todos={orderTodo(todos)}
        deleteTodo={deleteTodo}
        updateTodo={updateTodo}
      />
    </div>
  );
}

export default App;
