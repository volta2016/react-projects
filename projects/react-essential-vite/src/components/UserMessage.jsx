import { useState } from "react";

const MyButton = ({ setUser, user }) => (
  <button onClick={() => setUser(!user)}>click me!</button>
);
const WelcomeUser = () => <h2>Welcome new user!</h2>;

export default function UserMessage() {
  const [user, setUser] = useState(true);
  const title = "check app vite!";

  return (
    <div className="App">
      <h1>{title}</h1>
      <MyButton setUser={setUser} user={user} />
      {user ? <WelcomeUser /> : <h2>offline</h2>}
    </div>
  );
}
