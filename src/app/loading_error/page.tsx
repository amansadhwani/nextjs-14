import { Suspense } from "react";


async function getTodos() {
  await wait(3000);
 // throw new Error("custom error")
  return fetch("https://jsonplaceholder.typicode.com/todos").then((response) =>
    response.json()
  );
}

export default async function Api() {

  return <><h1> I am not being blocked by api call </h1> 
  <Suspense fallback={'loading..'}>
    <TodoLength/>
  </Suspense>
  </>
}

function wait(duration: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
}


async function TodoLength (){
  const todos = await getTodos();
  return <h1>length {todos?.length}</h1>
}