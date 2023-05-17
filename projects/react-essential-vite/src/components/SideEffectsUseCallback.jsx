import { useEffect, useState, useCallback } from "react";

const App = () => {
  const [data, setData] = useState([]);

  const fetchData = useCallback(async () => {
    console.log("fetchData - useCallback");
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
  }, []); //this is created only time

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <h1>useEffect & useCallback</h1>
      <ul>
        {data.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  );
};

export default App;
