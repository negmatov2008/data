import { promises as fs } from "fs";
import { useEffect, useState } from "react";
function Page() {
  const [post, setPost] = useState();
  //...
  async function getApi() {
    const file = await fs.readFile(process.cwd() + "db.json");
    const data = JSON.parse(file);
    setPost(data);
  }
  useEffect(() => {
    getApi();
  }, []);
  return (
    <div>
      <h1>{post && post[0]?.title}</h1>
      <p>{post && post[0]?.content}</p>
    </div>
  );
}

export default Page;
