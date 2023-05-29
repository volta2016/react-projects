# react + TS

In Typescript if apply :void the means, is that not return anything

```tsx
const increment = (): void => {
  setCounter(counter + 1);
};
```

```tsx
const increment = (number): void => {
  setCounter(counter + 1);
};
```

TS show us this message Parameter 'number' implicitly has an 'any' type.

```json
"strict": true,
```

in the .json file we have strict as true, the strict mode tells typescript that we should always have a type

here typescript show me an error

```tsx
import { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const increment = (num: number): void => {
    setCounter(counter + 1);
  };

  return (
    <div style={{ marginTop: "16px" }}>
      <h2>Counter: useState</h2>
      <span>valor: {counter}</span>
      <br />
      <button onClick={increment}>+1</button>
    </div>
  );
};

export default Counter;
```

```tsx
const increment = (ev: any): void => {
  console.log(any);
};
```

with any I can tell it what number is going to be anything

it was an event that we received, not a number or a plus 1

![event](./event.png)

note that this question mark is optional

![question-mark](./question-mark.png)

```tsx
const increment = (num: number = 1): void => {
  setCounter(counter + num);
};
```

Type number trivially inferred from a number literal, remove type annotation.

delete -> number in this case

![question-mark](./number.png)

setCounter is the type number, this means that what is between curly brackets is a number, in genneral TS this <> it means that is of generic type, any type of data can be set manually.

let´s continue with another component User, let´s see a different example.

```bash
const user: undefined
```

# User Component

```jsx
import { useState } from "react";

const User = () => {
  const [user, setUser] = useState();

  const login = () => {
    setUser({
      uid: "abc123",
      name: " Kyo",
    });
  };

  return (
    <>
      <h2>User: useState</h2>
      <button>click</button>
    </>
  );
};

export default User;
```

We have saw that typescript mark an error, because I´m assign undefines to useState.

I need to establish in the login the information of the user, here it is already convenient to work with classes or interfaces to put the typing, interface is compiled and it is equal to zero lines of code.

Internally, to the useState we are going to say to him that it handles a user.

this Hook the useState going to manage an User, and the value of the setState is perfectly valid, besides I can set it to a default value
