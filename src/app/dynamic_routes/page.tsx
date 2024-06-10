import Link from "next/link";
import { Suspense } from "react";

async function getTodos() {
  return fetch("https://jsonplaceholder.typicode.com/todos").then((response) =>
    response.json()
  );
}

export default async function DynamicRoutes() {
  return (
    <>
      <h1> This is page for dynamic routes </h1>
      <Suspense fallback={"loading.."}>
        <Todos />
      </Suspense>
    </>
  );
}

async function Todos() {
  const todos = await getTodos();
  return (
    <>
      {todos.map((item:any) => {
        return <div key={item.id}><Link href={`dynamic_routes/${item.id.toString()}`} >{item.title}</Link></div>
      })}
    </>
  );
}
