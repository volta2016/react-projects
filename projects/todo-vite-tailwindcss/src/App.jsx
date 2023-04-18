import React from "react";

const App = () => {
  return (
    <div
      className="bg-[url('./assets/images/bg-mobile-light.jpg')] bg-contain 
    bg-center bg-no-repeat"
    >
      <header className="container mx-auto px-4">
        <h1 className="uppercase">Todo</h1>
        <button>luna</button>
        <form>
          <input type="text" placeholder="Create new Todo..." />
        </form>
      </header>
      <main className="container mx-auto px-4">
        <article>
          <button>circle</button>
          <p>complete online JS course Front end mentor</p>
          <button>X</button>
        </article>
        <article>
          <button>circle</button>
          <p>complete online JS course Frontend mentor 2</p>
          <button>X</button>
        </article>
        <article>
          <button>circle</button>
          <p>complete online JS course Front end mentor 3</p>
          <button>X</button>
        </article>
        <article>
          <button>circle</button>
          <p>complete online JS course Front end mentor 4</p>
          <button>X</button>
        </article>

        <section>
          <span>5 items left</span>
          <button>Clear Complete</button>
        </section>
        <section className="container mx-auto px-4">
          <button>All</button>
          <button>Active</button>
          <button>Completed</button>
        </section>
        <p>Drag and Drop</p>
      </main>
    </div>
  );
};

export default App;
