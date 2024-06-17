"use client";

import { useRef } from "react";
import { createTodo } from "../actions/todos";

export default function Form() {
  const inputRef = useRef<HTMLInputElement>(null);

  const onFormAction = async (formData: FormData) => {
    if (inputRef.current != null) {
      inputRef.current.value = "";
    }
    await createTodo(formData);
  };
  return (
    <>
      <h1>Add Todo</h1>

      <form name="add todo" action={onFormAction}>
        <input placeholder="add todo" name="title" ref={inputRef} />
      </form>
    </>
  );
}
