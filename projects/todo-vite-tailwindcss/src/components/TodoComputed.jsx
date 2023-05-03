import React from "react";

const TodoComputed = ({ computedItemsLeft, clearCompleted }) => {
  return (
    <section className="flex justify-between px-4 py-4">
      <span className="text-gray-400">{computedItemsLeft} items left</span>
      <button className="text-gray-400" onClick={clearCompleted}>
        Clear Complete
      </button>
    </section>
  );
};

export default TodoComputed;
