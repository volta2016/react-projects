import ListFruts from "./components/ListFruts";
import MyButton from "./components/MyButton";
import UserMessage from "./components/UserMessage";

function App() {
  return (
    <div className="App">
      <UserMessage />
      <ListFruts />
      <MyButton />
    </div>
  );
}

export default App;
