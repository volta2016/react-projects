## Components modularize

We can modularize our components and separate the logic. The main app is our input

```jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

Practice components#.
Try to bring everything into modularized components.

our folder component
./components/MyButton.jsx
./components/UserMessage.jsx
./components/fruts/ListFruts.jsx
./components/fruts/ItemFrut.jsx

this is our component App

```jsx
import ListFruts from "./components/ListFruts";
import MyButton from "./components/MyButton";
import UserMessage from "./components/UserMessage";

function App() {
  return (
    <div className="App">
      <UserMessage />
      <ListFruts />
      <MyButton />
    </div>
  );
}

export default App;
```
