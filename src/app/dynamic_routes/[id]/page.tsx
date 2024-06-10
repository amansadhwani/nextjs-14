import { notFound } from "next/navigation";

async function getTodos(id: string) {
  return fetch(`https://jsonplaceholder.typicode.com/todos/${id}`).then(
    (response) => response.json()
  );
}

export default async function DynamicRoutes({
  params,
}: {
  params: { id: string };
}) {
  const todo = await getTodos(params.id);

  if (todo.title == null) return notFound();

  return (
    <h1>
      {todo.id}-{todo.title}
    </h1>
  );
}
