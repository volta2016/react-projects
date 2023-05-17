import Counter from "./components/Counter";
import ListFruts from "./components/ListFruts";
import MyButton from "./components/MyButton";
import UserMessage from "./components/UserMessage";
import MyHook from "./components/MyHook";

function App() {
  console.log("App");
  return (
    <div className="App">
      <UserMessage />
      <ListFruts />
      <MyButton />
      <Counter />
      <MyHook />
    </div>
  );
}

export default App;
