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
