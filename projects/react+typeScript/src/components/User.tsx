import { useState } from "react";

interface User {
  uid: string;
  name: string;
}

const temUser: User = {
  uid: "avbcxx",
  name: "",
};

const User = () => {
  const [user, setUser] = useState<User>(temUser);

  const login = () => {
    setUser({
      uid: "abc123",
      name: " Kyo",
    });
  };

  return (
    <>
      <h2>User: useState</h2>
      <button onClick={login}>login</button>
      {!user ? <pre>No user</pre> : <pre> {JSON.stringify(user)}</pre>}
    </>
  );
};

export default User;
