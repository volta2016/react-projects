import React, { useEffect, useState } from "react";
import Form from "./components/Form";
import Todos from "./components/Todos";
import { Todo, TodosProps } from "./components/types";

const initialState: Todo[] = JSON.parse(localStorage.getItem("todos") || "[]");

function App() {
  const [todos, setTodos] = useState<Todo[]>(initialState);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (todo: Todo) => {
    setTodos([...todos, todo]);
  };

  const deleteTodo = (id: string) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  const updateTodo = (id: string) => {
    const newTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, state: !todo.state } : todo
    );
    setTodos(newTodos);
  };

  const orderTodo = (arrayTodo: Todo[]) => {
    return arrayTodo.sort((a: Todo, b: Todo) => {
      if (a.priority === b.priority) return 0;
      if (a.priority) return -1; //more priority
      if (!a.priority) return 1;
      return 0;
    });
  };

  const todosProps: TodosProps = {
    todos: orderTodo(todos),
    deleteTodo,
    updateTodo,
  };

  return (
    <div className="container">
      <h1 className="mb-h1">
        Hi react app + vite! Form Todo List
        <span role="img" aria-label="form">
          ⚛️
        </span>
      </h1>

      <Form addTodo={addTodo} />
      <Todos {...todosProps} />
    </div>
  );
}

export default App;
