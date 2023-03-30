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
