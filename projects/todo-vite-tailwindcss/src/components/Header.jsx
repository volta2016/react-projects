import React, { useEffect, useState } from "react";
import IconMoon from "./icons/IconMoon";

const initialDarkToggle = document.documentElement.className.includes("dark");

const Header = () => {
  const [darkToggle, setDarkToggle] = useState(initialDarkToggle);

  useEffect(() => {
    if (darkToggle) {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
    }
  }, [darkToggle]);

  return (
    <header className="container mx-auto px-4 pt-8">
      <div className="flex justify-between">
        <h1 className="text-2xl uppercase tracking-[0.3em] text-white">Todo</h1>
        <button>
          <IconMoon fill="#fff" />
        </button>
      </div>
    </header>
  );
};

export default Header;
