"use server";

import { wait } from "@/app/api/cache";
import { revalidatePath } from "next/cache";

export async function createTodo(formData: FormData) {
  const data = await fetch("http://localhost:3001/todos", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: formData.get("title"),
      completed: false,
    }),
  }).then((res) => res.json());
  console.log(data);
  revalidatePath("/server_actions/form");
}

export async function toggleTodo(id: number, completed: boolean) {
  await wait(2000);
  const data = await fetch(`http://localhost:3001/todos/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      completed,
    }),
  }).then((res) => res.json());
  console.log(data);
  revalidatePath("/server_actions/use_optimistic/use_optimistic_example");
}
