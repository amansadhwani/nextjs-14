import { getTodos } from "@/app/api/cache";
import Todo from "./todo";

export default async function UseOptimisticExample() {
  const todos = await getTodos();
  return (
    <>
      <h1>Use Optimistic Example</h1>

      <ul>
        {todos.map((todo: any) => (
          <Todo
            title={todo.title}
            key={todo.id}
            id={todo.id}
            completed={todo.completed}
          />
        ))}
      </ul>
    </>
  );
}
