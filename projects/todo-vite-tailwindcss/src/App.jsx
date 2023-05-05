import React, { useState } from "react";

import Header from "./components/Header";
import TodoCreate from "./components/TodoCreate";
import Todolist from "./components/Todolist";
import TodoComputed from "./components/TodoComputed";
import TodoFilter from "./components/TodoFilter";

const initialStateTodos = [
  {
    id: 1,
    title: "Go to the gym",
    completed: true,
  },
  {
    id: 2,
    title: "Complete the online english course",
    completed: false,
  },
  {
    id: 3,
    title: "Go to the supermarket",
    completed: false,
  },

  {
    id: 4,
    title: "Pick up Groceries",
    completed: true,
  },

  {
    id: 5,
    title: "Complete Web App on frontend mentor",
    completed: false,
  },
];

const App = () => {
  const [todos, setTodos] = useState(initialStateTodos);
  const [filter, setFilter] = useState("completed");

  const changeFilter = (filter) => setFilter(filter);

  function generateID() {
    return Math.random().toString(36).slice(2);
  }

  const createTodo = (title) => {
    const newTodo = {
      id: generateID(),
      title,
      completed: false,
    };

    setTodos([...todos, newTodo]);
  };

  const updateTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }; //change the state of complete with ! in this case use spread sintax

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  }; // If the function returns true, the element is included in the new array; if it returns false, the element is excluded

  const computedItemsLeft = todos.filter((todo) => !todo.completed).length;

  const clearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.completed));
  };

  const filteredTodos = () => {
    switch (filter) {
      case "all":
        return todos;
      case "active":
        return todos.filter((todo) => !todo.completed);
      case "completed":
        return todos.filter((todo) => todo.completed);
      default:
        return todos;
    }
  };

  return (
    <div className="min-h-screen bg-gray-200 bg-[url('./assets/images/bg-mobile-light.jpg')] bg-contain bg-no-repeat dark:bg-gray-900 dark:bg-[url('./assets/images/bg-mobile-dark.jpg')] ">
      <Header />
      <main className="container mx-auto mt-8 px-4">
        <TodoCreate createTodo={createTodo} />

        <Todolist
          todos={filteredTodos()}
          updateTodo={updateTodo}
          removeTodo={removeTodo}
        />

        <TodoComputed
          computedItemsLeft={computedItemsLeft}
          clearCompleted={clearCompleted}
        />
        {/* Todo Filter */}
        <TodoFilter changeFilter={changeFilter} filter={filter} />
        <footer className="mt-8 text-center dark:text-gray-400">
          Drag and Drop
        </footer>
      </main>
    </div>
  );
};

export default App;
