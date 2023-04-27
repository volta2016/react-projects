import React from "react";
import CrossIcon from "./components/icons/CrossIcon";
import Moon from "./components/icons/Moon";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-200 bg-[url('./assets/images/bg-mobile-light.jpg')] bg-contain bg-no-repeat">
      <header className="container mx-auto px-4 pt-8">
        <div className="flex justify-between">
          <h1 className="text-2xl uppercase tracking-[0.3em] text-white">
            Todo
          </h1>
          <button>
            <Moon fill="#fff" />
          </button>
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
        <div className="rounded-md bg-white [&>article]:p-4">
          <article className="flex gap-4 border-b px-4 py-4">
            <button className="inline-block  h-5 w-5  gap-4 rounded-full border-2"></button>
            <p className="grow text-gray-600">
              complete online JS course Front end mentor
            </p>
            <button>
              <CrossIcon />
            </button>
          </article>
          <article className="flex gap-4 border-b px-4 py-4">
            <button className="inline-block  h-5 w-5  gap-4 rounded-full border-2"></button>
            <p className="grow text-gray-600">
              complete online JS course Front end mentor
            </p>
            <button>
              <CrossIcon />
            </button>
          </article>
          <article className="flex gap-4 border-b px-4 py-4">
            <button className="inline-block  h-5 w-5  gap-4 rounded-full border-2"></button>
            <p className="grow text-gray-600">
              complete online JS course Front end mentor
            </p>
            <button>
              <CrossIcon />
            </button>
          </article>
          <article className="flex gap-4 border-b px-4 py-4">
            <button className="inline-block  h-5 w-5  gap-4 rounded-full border-2"></button>
            <p className="grow text-gray-600">
              complete online JS course Front end mentor
            </p>
            <button>
              <CrossIcon />
            </button>
          </article>

          <section className="flex justify-between px-4 py-4">
            <span className="text-gray-400">5 items left</span>
            <button className="text-gray-400">Clear Complete</button>
          </section>
        </div>

        <section className="container mx-auto mt-8 bg-white px-4">
          <div className="flex justify-center gap-4 bg-white p-4">
            <button className="text-blue-600">All</button>
            <button className="hover:text-blue-600">Active</button>
            <button className="hover:text-blue-600">Completed</button>
          </div>
        </section>
        <p className="mt-8 text-center">Drag and Drop</p>
      </main>
    </div>
  );
};

export default App;
