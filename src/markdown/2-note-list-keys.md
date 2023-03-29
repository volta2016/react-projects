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
