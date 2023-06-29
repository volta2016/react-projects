import "./App.css";
import Counter from "./components/Counter";
import TimerParent from "./components/TimerParent";
import User from "./components/User";
import Reducer from "./components/Reducer";
import Formulario from "./components/Formulario";

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
      <h2>useReducer</h2>
      <hr />
      <Reducer />
      <h2>Custom hooks</h2>
      <hr />
      <Formulario />
    </>
  );
}

export default App;
