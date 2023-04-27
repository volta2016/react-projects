import React from "react";
import CrossIcon from "./components/icons/CrossIcon";

const App = () => {
  return (
    <div
      className="min-h-screen bg-gray-200 bg-[url('./assets/images/bg-mobile-light.jpg')] bg-contain 
    bg-center bg-no-repeat"
    >
      <header className="container mx-auto px-4 pt-8">
        <div className="flex justify-between">
          <h1 className="text-2xl uppercase tracking-[0.3em] text-white">
            Todo
          </h1>
          <button>luna</button>
        </div>

        <form className="mt-8 flex items-center  gap-4 overflow-hidden rounded-md bg-white px-4 py-4">
          <span className="inline-block  h-5 w-5  gap-4 rounded-full border-2"></span>
          <input
            className="w-full text-gray-400 outline-none"
            type="text"
            placeholder="Create new Todo..."
          />
        </form>
      </header>
      <main className="container mx-auto mt-8 px-4">
        <div className="rounded-md bg-white">
          <article className="flex gap-4 border-b px-4 py-4">
            <button className="inline-block  h-5 w-5  gap-4 rounded-full border-2"></button>
            <p className="grow text-gray-600">
              complete online JS course Front end mentor
            </p>
            <button>
              <CrossIcon />
            </button>
          </article>
          <article>
            <button className="inline-block  h-5 w-5  gap-4 rounded-full border-2"></button>
            <p className="text-gray-600">
              complete online JS course Front end mentor
            </p>
            <button>
              <CrossIcon />
            </button>
          </article>
          <article>
            <button className="inline-block  h-5 w-5  gap-4 rounded-full border-2"></button>
            <p className="text-gray-600">
              complete online JS course Front end mentor
            </p>
            <button>
              <CrossIcon />
            </button>
          </article>
          <article>
            <button className="inline-block  h-5 w-5  gap-4 rounded-full border-2"></button>
            <p className="text-gray-600">
              complete online JS course Front end mentor
            </p>
            <button>
              <CrossIcon />
            </button>
          </article>

          <section>
            <span>5 items left</span>
            <button>Clear Complete</button>
          </section>
        </div>

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
