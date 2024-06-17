import { getTodos } from "@/app/api/cache";
import Form from "./form";

export default async function FormExample() {
  const todos = await getTodos();
  return (
    <>
      <Form />
      <ul>
        {todos.map((todo: any) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </>
  );
}
