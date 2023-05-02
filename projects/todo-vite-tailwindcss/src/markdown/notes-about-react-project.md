# Todo vite + Tailwind

## Instalation

Vite

```bash
npm create vite@latest
```

Tailwind CSS

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
tailwind.config.cjs
```

```bash
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,vue}"],
    theme: {
        extend: {},
    },
    plugins: [],
};
```

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## resource

[tailwind-cheat-sheet](https://nerdcave.com/tailwind-cheat-sheet)

## Todo star project

let´s working first one with mobile first

## Tailwind + React

this form we can pass a selector

```html
<div className="rounded-md bg-white [&>article]:p-4"></div>
```

in this component we have destructuring, rest operator, and spread operator

```jsx
import React from "react";

const Moon = ({ fill = "#fff", ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26">
    <path
      {...props}
      fill={fill}
      fillRule="evenodd"
      d="M13 0c.81 0 1.603.074 2.373.216C10.593 1.199 7 5.43 7 10.5 7 16.299 11.701 21 17.5 21c2.996 0 5.7-1.255 7.613-3.268C23.22 22.572 18.51 26 13 26 5.82 26 0 20.18 0 13S5.82 0 13 0z"
    />
  </svg>
);

export default Moon;
```

component:

```jsx
<Moon fill="#fff" />
```

## Update and Delete

```jsx
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

  function generateID() {
    return Math.random().toString(36).slice(2);
  }

  const createTodo = (title) => {
    const newTodo = {
      id: Date.now(),
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

  return (
    <div className="min-h-screen bg-gray-200 bg-[url('./assets/images/bg-mobile-light.jpg')] bg-contain bg-no-repeat">
      <Header />
      <main className="container mx-auto mt-8 px-4">
        <TodoCreate createTodo={createTodo} />

        <Todolist
          todos={todos}
          updateTodo={updateTodo}
          removeTodo={removeTodo}
        />

        <TodoComputed />
        {/* Todo Filter */}
        <TodoFilter />
        <footer className="mt-8 text-center">Drag and Drop</footer>
      </main>
    </div>
  );
};

export default App;
```

In the code you provided, {...todo} is a spread syntax. It creates a new object and spreads all the properties of the todo object into it. This is commonly used in React to create a new object with updated properties while preserving the original object's properties.

In the updateTodo function, the spread syntax is used to create a new object for each todo item in the todos array. The map method is used to iterate over each todo item and create a new array with the updated todo items.

In the map method, a ternary operator is used to check if the id of the current todo item matches the id passed to the updateTodo function. If the id matches, a new object is created using the spread syntax, with the completed property set to the opposite of its current value. This effectively toggles the completed property of the matched todo item.

If the id does not match, the original todo object is returned unchanged. This ensures that only the matched todo item is updated, and the rest of the todos array is preserved.

Finally, the updated array of todos is passed to the setTodos function, which updates the state of the component and causes it to re-render with the updated list of todos.
