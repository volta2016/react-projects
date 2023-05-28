import { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const increment = (num = 1): void => {
    setCounter(counter + num);
  };

  return (
    <div style={{ marginTop: "16px" }}>
      <h2>Counter: useState</h2>
      <span>valor: {counter}</span>
      <br />
      <button onClick={() => increment()}>+1</button>
      <button onClick={() => increment(2)}>+2</button>
      <button style={{ color: "red" }} onClick={() => setCounter(0)}>
        +2
      </button>
    </div>
  );
};

export default Counter;
