import { func } from "prop-types";
import { useEffect, useState } from "react";

function App() {
  const [user, setUser] = useState();
  async function getApi() {
    const res = await fetch("http://localhost:3000/user");
    const data = await res.json();
    console.log(data);
    setUser(data[0]);
  }
  useEffect(() => {
    getApi();
    console.log(user);
  }, []);

  return (
    <>
      <h1>{user && user.name}</h1>
    </>
  );
}

export default App;
