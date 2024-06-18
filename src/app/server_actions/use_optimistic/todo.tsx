"use client";

import { useOptimistic, useTransition } from "react";
import { toggleTodo } from "../actions/todos";

export default function Todo({ id, title, completed }: any) {
  const [isPending, startTransition] = useTransition();
  const [optimisticCompleted, setOptimisticCompleted] =
    useOptimistic(completed);

  const onToogleTodo = async (e: any) => {
    startTransition(async () => {
      setOptimisticCompleted(e.target.checked);
      await toggleTodo(id, e.target.checked);
    });
  };
  return (
    <>
      <input
        type="checkbox"
        disabled={isPending}
        checked={optimisticCompleted}
        onChange={onToogleTodo}
      />
      {title}
      <br />
    </>
  );
}
