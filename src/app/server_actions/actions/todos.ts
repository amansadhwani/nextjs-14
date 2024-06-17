"use server";

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
