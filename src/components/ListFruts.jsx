import React from "react";
import ItemFrut from "./ItemFrut";

const ListFruts = () => {
  const frutsList = [
    { name: "🍐", id: generateID() },
    { name: "🍌", id: generateID() },
    { name: "🍎", id: generateID() },
  ];
  function generateID() {
    return Math.random().toString(36).slice(2);
  }
  return (
    <ul>
      {frutsList.map((frut) => (
        <ItemFrut key={frut.id} frut={frut.name} />
      ))}
    </ul>
  );
};

export default ListFruts;
