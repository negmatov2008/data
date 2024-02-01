import { useEffect, useState } from "react";

function App() {
  const [post, setPost] = useState();
  async function getApi() {
    const res = await fetch("https://data-name.onrender.com/user");
    const data = await res.json();
    setPost(data);
  }
  useEffect(() => {
    getApi();
  }, []);
  return (
    <>
      <h1>{post && post[0].model}</h1>
    </>
  );
}

export default App;
