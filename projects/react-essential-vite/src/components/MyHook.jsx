import React, { useState } from "react";
import { useFetch } from "../hooks/useFetch";

const SideEffects = () => {
  const [counter, setCounter] = useState(0);

  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );

  if (loading) return <div>Cargando...</div>;
  if (error) return <p>{error}</p>;
  return (
    <>
      <b>sideEffect</b>
      <b style={{ margin: "0 16px" }}>{counter}</b>
      <button onClick={() => setCounter(counter + 1)}>+</button>
      <ul>
        {data.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  );
};

export default SideEffects;
