import React from "react";
import Counter from "../_components/Counter";

async function Page() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");

  const data = await res.json();

  console.log(data);

  return (
    <div>
      <ul>
        {data.map((user) => {
          return <li key={user.id}>{user.name}</li>;
        })}
      </ul>
      <Counter users={data} />
    </div>
  );
}

export default Page;
