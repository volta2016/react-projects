# State

State allows React components to change their output over time in response to user actions, network responses, and anything else.

- Change of state through interactions in the UI

To make changes we will use a hook

## HOOKS IN REACT

What happens if I do this?
import CounterExample from "./components/CounterExample";

```jsx
export default () => {
  let counter = 0;

  const handleClickIncrement = () => {
    counter++;
    console.log(counter);
  };

  return <button onClick={handleClickIncrement}>Counter: {counter}</button>;
};
```

We need a Hook that modifies the state (now with hooks it is easier).

## hooks

- Hooks are functions that allow you to "hook" React state and lifecycle from function components.
- Hooks do not work inside classes - they allow you to use React without classes.
- React provides some built-in Hooks such as useState.
- You can also create your own Hooks to reuse stateful behavior between different components.

```jsx
import { useState } from "react";

export default () => {
  const [counter, setCounter] = useState(0);

  const handleClickIncrement = () => {
    setCounter(counter + 1);
    //setCounter((prevCounter) => prevCounter + 1);
  };

  return <button onClick={handleClickIncrement}>Counter: {counter}</button>;
};
```

source [useState](https://beta.es.reactjs.org/reference/react/useState)

## What does the call to useState do?

- Declares a "state variable".
- useState is a new way to use exactly the same functions that - this.state gives us in a class.
- Normally, variables "disappear" when the function is exited, but state variables are retained by React.

## What do we pass to useState as an argument?

The only argument to the Hook useState() is the initial state

## What does useState return?

Returns a pair of values (array): the current state and a function that updates it.

## Practice

```jsx
import { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const handleIncrement = () => {
    setCounter(counter + 1);
    //setCounter((prevCounter) => prevCounter + 1);
  };

  const handleDecrement = () => {
    setCounter(counter - 1);
  };
  return (
    <div>
      <span style={{ marginRight: "16px" }}>Counter: {counter}</span>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>
      <button onClick={() => setCounter(0)}>reset</button>
    </div>
  );
};

export default Counter;
```

## Other example with bootstrap

## Option 01 ActionButton:

```jsx
const ActionButton = ({ count = 0, color = "secondary", action }) => {
  return (
    <button className={`btn btn-outline-${color}`} onClick={action}>
      Decrement {count}
    </button>
  );
};

export default ActionButton;
```

```jsx
<ActionButton count={count} color="danger" action={handleClickDecrement} />
```

## Option 02 ActionButton:

```jsx
jsx;
const ActionButton = ({ count = 0, ...props }) => {
  return <button {...props}>Decrement {count}</button>;
};

export default ActionButton;
```

```jsx
<ActionButton
  count={count}
  className="btn btn-outline-danger"
  onClick={handleClickDecrement}
  disabled={count === 0 && true}
/>
```

React.StrictMode#
Maybe you noticed the strict mode in React, this helps us to detect possible errors in development mode.
Verify that the internal components are following some of the recommended practices and warn you if it is not in the console.
Verify that disused methods are not being used and, if they are used, strict mode will warn you in the console.
Help you prevent some side effects by identifying potential risks.
