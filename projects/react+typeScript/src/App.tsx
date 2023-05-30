import "./App.css";
import Counter from "./components/Counter";
import TimerParent from "./components/TimerParent";
import User from "./components/User";

function App() {
  return (
    <>
      <h1>React TS</h1>
      <hr />
      <Counter />
      <User />
      <h2>useEffect - useRef</h2>
      <hr />
      <TimerParent />
    </>
  );
}

export default App;
