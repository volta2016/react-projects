## What happens if we omit 'else'?

We can use the logical operator AND (&&).
This logical operator compares two expressions.
If the first expression evaluates to "true", the statement will return the value of the second expression.
If the first expression evaluates to "false", the statement will return the value of the first expression, in our case false.

```jsx
{
  user && <UserMessage />;
}
```

## Listas y keys

## TIP

React uses the key prop to create a relationship between the component and the DOM element.
The library uses this relationship to determine whether or not the component should be re-rendered.
It is not recommended to use the array index as key if you know that the array will not be static.
If key is an index, reordering an element in the array changes it. Then React will get confused and re-render the wrong element.

for that problem we can use Math.random adding other methods

```js
let id = Math.random().toString(36).slice(2);
```

the recommended method today

```js
let uuid = self.crypto.randomUUID();
```

```jsx
const ItemFrut = (props) => {
  return <li>{props.frut}</li>;
};

function App() {
  const frutsList = [
    { name: "🍐", id: generateID() },
    { name: "🍌", id: generateID() },
    { name: "🍎", id: generateID() },
  ];
  function generateID() {
    return Math.random().toString(36).slice(2);
  }
  return (
    <div className="App">
      <ul>
        {frutsList.map((frut) => (
          <ItemFrut key={frut.id} frut={frut.name} />
        ))}
      </ul>
    </div>
  );
}

export default App;
```

is not a good idea re-order, delete o update my list with the index, because React will get confused and render the wrong element again.

## props

It is used to send information to the nested component.
The information you transmit in this way is called props.

## Managing events

React events are named using camelCase, instead of lowercase.
With JSX you pass a function as the event handler, instead of a string.

```jsx
const MyButton = () => {
  const handleClick = () => {
    console.log("you clicked me");
  };

  return <button onClick={handleClick}>i'am a button</button>;
};
```

With parameters:

```jsx
const MyButton = () => {
  const handleClick = (name) => {
    console.log("me diste click: ", name);
  };

  return <button onClick={() => handleClick("🍎")}>i'am a button</button>;
};
```

The difference between passing a direct function to onClick and passing the execution of the function with a parameter is that in the former case, the function is called without any arguments when the button is clicked, whereas in the latter case, the function is called with a specific argument that is passed at the time of rendering the button.

In your first example, you are passing a reference to the handleClick function directly to the onClick event handler of the button. When the button is clicked, the handleClick function is called without any arguments, and the console will log "you clicked me".

In your second example, you are passing an arrow function that calls the handleClick function with the argument "🍎" to the onClick event handler of the button. When the button is clicked, the arrow function is called, which in turn calls the handleClick function with the argument "🍎", and the console will log "me diste click: 🍎".

Passing a function with a parameter can be useful when you need to pass some specific data to the function at the time the button is clicked, based on some user interaction or other conditions. However, if the function doesn't need any additional data and can be called directly with its original parameters, it is generally better to pass a reference to the function directly to onClick, as it can help improve performance by reducing the number of unnecessary re-renders.

```jsx
const MyButton = () => {
  const handleClick = () => {
    console.log("you clicked me");
  };

  return <button onClick={handleClick}>i'am a button</button>;
};
```

we want when the client press click there execute the function

this is a wrong

```jsx
const MyButton = () => {
  const handleClick = () => {
    console.log("you clicked me");
  };

  // bad return <button onClick={handleClick()}>i'am a button</button>;
};
```
