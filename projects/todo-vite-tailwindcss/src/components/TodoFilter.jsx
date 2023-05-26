import React from "react";
import FilterButton from "./FilterButton";

const TodoFilter = ({ changeFilter, filter }) => {
  return (
    <section className="container mx-auto mt-8 bg-white  ">
      <div className="flex justify-center gap-4 bg-white p-4 transition-all duration-1000 dark:bg-gray-800">
        <FilterButton onClick={() => changeFilter("all")} filter={filter}>
          All
        </FilterButton>
        <FilterButton onClick={() => changeFilter("active")} filter={filter}>
          Active
        </FilterButton>
        <FilterButton onClick={() => changeFilter("completed")} filter={filter}>
          Completed
        </FilterButton>
      </div>
    </section>
  );
};

export default TodoFilter;
