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
