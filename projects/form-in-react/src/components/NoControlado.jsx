import React from "react";

const NoControlado = () => {
  return (
    <form>
      <input
        className="mb-2"
        type="text"
        placeholder="enter your data"
        name="title"
      />
      <textarea
        className="mb-2"
        placeholder="enter description"
        name="description"
      ></textarea>
      <select className="mb-2" name="state">
        <option value="request">request</option>
        <option value="complete">complete</option>
      </select>
      <button type="submit">Procesar</button>
    </form>
  );
};

export default NoControlado;
