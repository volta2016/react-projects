I have created two components MyButton and UserMessage, then I created a state for
apply a render with ternary operator

```jsx
import { useState } from "react";

import "./App.css";

const MyButton = ({ setUser, user }) => (
  <button onClick={() => setUser(!user)}>click me!</button>
);
const UserMessage = () => <h2>Welcome new user!</h2>;

function App() {
  const [user, setUser] = useState(true);
  const title = "check app vite!";

  return (
    <div className="App">
      <h1>{title}</h1>
      <MyButton setUser={setUser} user={user} />
      {user ? <UserMessage /> : <h2>offline</h2>}
    </div>
  );
}

export default App;
```

for see, mount this code inside App.jsx
