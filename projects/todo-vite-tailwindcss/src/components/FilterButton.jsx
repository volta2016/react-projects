import React from "react";

const getClassForFilter = (filter) => {
  return filter === "all"
    ? "text-blue-500 hover:text-gray-400"
    : "text-gray-400 hover:text-blue-500";
};

const FilterButton = ({ filter, onClick, children }) => {
  return (
    <button className={getClassForFilter(filter)} onClick={onClick}>
      {children}
    </button>
  );
};

export default FilterButton;
