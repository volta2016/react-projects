# React Hooks Formularios

## Planning

- Uncontrolled forms
- Controlled forms

- uncontrolled: In most cases, we recommend using Controlled Components to implement forms.
- In a controlled component, the form data is handled by a React component.
- The alternative is uncontrolled components, where the form data is handled by the DOM itself.
- To write an uncontrolled component, you can use a reference to get the form values from the DOM.

we have the base form

```jsx
import React from "react";

const NoControlado = () => {
  const handleSubmit = (first) => {
    console.log("click on me");
  };

  return (
    <form onSubmit={handleSubmit} action="">
      <input
        className="mb-2"
        type="text"
        placeholder="enter your data"
        name="title"
      />
      <textarea
        className="mb-2"
        placeholder="enter description"
        name="description"
      ></textarea>
      <select className="mb-2" name="state">
        <option value="request">request</option>
        <option value="complete">complete</option>
      </select>
      <button type="submit">Prosecute</button>
    </form>
  );
};

export default NoControlado;
```

we can se the url

```bash
http://127.0.0.1:5173/?title=pregunta&description=text&state=complete
```

with the name an value of our form, this is how the form is processed in HTML.
The browser try to send through the action method

```jsx
return (
  <form onSubmit={handleSubmit} action="">
    <input
      className="mb-2"
      type="text"
      placeholder="enter your data"
      name="title"
    />
    <textarea
      className="mb-2"
      placeholder="enter description"
      name="description"
    ></textarea>
    <select className="mb-2" name="state">
      <option value="request">request</option>
      <option value="complete">complete</option>
    </select>
    <button type="submit">Prosecute</button>
  </form>
);
```

with this avoid the behavior by default of the browser

```jsx
import React from "react";

const NoControlado = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("click on me");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="mb-2"
        type="text"
        placeholder="enter your data"
        name="title"
      />
      <textarea
        className="mb-2"
        placeholder="enter description"
        name="description"
      ></textarea>
      <select className="mb-2" name="state">
        <option value="request">request</option>
        <option value="complete">complete</option>
      </select>
      <button type="submit">Prosecute</button>
    </form>
  );
};

export default NoControlado;
```
