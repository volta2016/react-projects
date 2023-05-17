## useCallBack

No need to useCallback!

These examples are to explain the concept, but it is not necessary to use useCallback in this case, as it does not have a big impact on performance. But it's good to know for when you need it.

useCallback is a hook that allows us to memorize a function. This means that if the function we pass it as an argument has not changed, useCallback will not recreate it.

You need to pass two things to useCallback:

A function definition that you want to cache between renderings.
A dependency list that includes each value within your component that is used within your function.

```jsx
import { useEffect, useState, useCallback } from "react";

const App = () => {
  const [data, setData] = useState([]);

  const fetchData = useCallback(async () => {
    console.log("fetchData");
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      if (!response.ok) {
        throw "Error al conectar la API";
      }
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.log(error);
      setData([]);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <>
      <h1>useEffect</h1>
      <ul>
        {data.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  );
};

export default App;
```

## other solution

```jsx
import { useEffect, useState } from "react";

const fetchData = async (setData) => {
  console.log("fetchData");
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!response.ok) {
      throw "Error al conectar la API";
    }
    const data = await response.json();
    setData(data);
  } catch (error) {
    console.log(error);
    setData([]);
  }
};

const App = () => {
  console.log("App");

  const [data, setData] = useState([]);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    fetchData(setData);
  }, []);

  return (
    <>
      <h1>useEffect</h1>
      <button onClick={() => setCounter(counter + 1)}>
        Increment {counter}
      </button>
      <ul>
        {data.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  );
};

export default App;
```
