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
    id: 3,
    title: "Pick up Groceries",
    completed: false,
  },

  {
    id: 3,
    title: "Complete Web App on frontend mentor",
    completed: false,
  },
];

const App = () => {
  const [todos, setTodos] = useState(initialStateTodos);

  return (
    <div className="min-h-screen bg-gray-200 bg-[url('./assets/images/bg-mobile-light.jpg')] bg-contain bg-no-repeat">
      <Header />
      <main className="container mx-auto mt-8 px-4">
        <TodoCreate />

        <Todolist todos={todos} />

        <TodoComputed />
        {/* Todo Filter */}
        <TodoFilter />
        <footer className="mt-8 text-center">Drag and Drop</footer>
      </main>
    </div>
  );
};

export default App;
