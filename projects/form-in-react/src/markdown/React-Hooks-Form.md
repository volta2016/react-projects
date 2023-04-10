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

Let´s to know other event sayed onSubmit this always is controled for react
"onSubmit"

## useRef

When create our reference not yet rendering our form

```jsx
const form = useRef(null);
```

here we manipulate the DOM through the virtual DOM which is done by react.

We have the property current and inside we have the form. This form is each one
of our fields

![current](../images/current-useref.png)

![current](../images/form.current.png)

## formData()

```jsx
const handleSubmit = (e) => {
  e.preventDefault();
  console.log(form.current);
  console.log(new FormData(form.current));
};
```

let´s click on process inside we have a prototype inside the prototype have many attributes, the property that that we are interested in

> entries

this entries in some way we have to go through them, because they are different fields.

let´s ocuppy spread operator of entries

```jsx
const handleSubmit = (e) => {
  e.preventDefault();
  const data = new FormData(form.current);
  console.log(...data.entries());
};
```

![current](../images/spread-newformdata.png)

this correpond each one our names.
right now if we fill in each of the forms, can see the value

![current](../images/fill-input.png)

we can apply the default value inside our input, is important pass the attribute name.
spread operator: allows an iterable element to be expanded
copy each of its elements

```jsx
const dataObject = object.fromEntries([...data.entries()]);
```

we can destructuring direct the value that we need

```jsx
import React, { useRef } from "react";

const NoControlado = () => {
  const form = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(form.current);

    const { title, description, state } = Object.fromEntries([
      ...data.entries(),
    ]);
    console.log(title, description, state);
  };

  return (
    <form onSubmit={handleSubmit} ref={form}>
      <input
        className="mb-2"
        type="text"
        placeholder="enter your data"
        name="title"
        defaultValue="todo #01"
      />
      <textarea
        className="mb-2"
        placeholder="enter description"
        name="description"
        defaultValue="description #01"
      ></textarea>
      <select className="mb-2" name="state" defaultValue="complete">
        <option value="request">request</option>
        <option value="complete">complete</option>
      </select>
      <button type="submit">Prosecute</button>
    </form>
  );
};

export default NoControlado;
```

is a process more length, remember that we are working with form no controlled

## Validate the data

```jsx
//validate the data
if (title.trim() === "") return console.log("llena este campo");

if (!title.trim()) return console.log("llena este campo");
```

is the same.
We are controled this form once the client processes this form.

each time that process the form, I clean it for viewing if are errors

```jsx
import React, { useRef, useState } from "react";

const NoControled = () => {
  const [error, setError] = useState("");
  const form = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    //catch the data
    const data = new FormData(form.current);

    const { title, description, state } = Object.fromEntries([
      ...data.entries(),
    ]);
    //validate the data
    if (!title.trim() || !description.trim() || !state.trim())
      return setError("fill the fields");

    console.log(title, description, state);
    //send the data
  };

  return (
    <form onSubmit={handleSubmit} ref={form}>
      <input
        className="mb-2"
        type="text"
        placeholder="enter your data"
        name="title"
        defaultValue="todo #01"
      />
      <textarea
        className="mb-2"
        placeholder="enter description"
        name="description"
        defaultValue="description #01"
      ></textarea>
      <select className="mb-2" name="state" defaultValue="complete">
        <option value="request">request</option>
        <option value="complete">complete</option>
      </select>
      <button type="submit">Prosecute</button>
      {error !== "" && error}
    </form>
  );
};

export default NoControled;
```

## Form controled

For now, let's create a state for each of our states

```jsx
const [title, setTitle] = useState("");
const [description, setDescription] = useState("");
const [state, setState] = useState("pending");
```

we have to do the association with each one of the inputs.
With the value we indicated it each one of states corresponding.
Let´s to save, we have a error. warning say:
you privided a value prop to a form field without an onChange.

The idea is each time I write on input is related to setTitle, remember that this setTitle do that is modified the state.
How we use this setTile the console give us the error is use oneChange

How we use this setTile the console give us the error to use oneChange, this onChange you pass like atributo, is other event that has React.
Similar how we to use onSubmit, always we can catch the event and use setTitle
