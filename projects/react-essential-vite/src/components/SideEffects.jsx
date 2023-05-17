import React, { useEffect, useState } from "react";

const SideEffects = () => {
  const [counter, setCounter] = useState(0);

  const [user, setUser] = useState([]);

  console.log("App");

  useEffect(() => {
    console.log("useEffect");
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUser(data));
  }, []);

  if (user === null) return <div>Cargando...</div>;

  return (
    <>
      <b>sideEffect</b>
      <b style={{ margin: "0 16px" }}>{counter}</b>
      <button onClick={() => setCounter(counter + 1)}>+</button>
    </>
  );
};

export default SideEffects;
