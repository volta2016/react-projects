import React, { useState } from "react";

const Cat = () => {
  const [cat, setCat] = useState({
    name: "Felix",
    year: 3,
  });

  const hancleClick = () => {
    // setCat({ ...cat, year: cat.year + 1 });
    setCat((prev) => ({ ...prev, year: cat.year + 1 }));
  };

  return (
    <>
      <h2>
        {cat.name} - {cat.year}
      </h2>
      <button onClick={hancleClick}>update year</button>
      <hr />
    </>
  );
};

export default Cat;
