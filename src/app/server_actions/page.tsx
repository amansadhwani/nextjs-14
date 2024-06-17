import Link from "next/link";

export default function ServerActions() {
  return (
    <>
      <h1>Server Actions</h1>
      <ul>
        <li>If there is some simple form you can use server actions</li>
        <li>
          You can simply write your server function in action from of form
          element
        </li>
        <li>
          Note this function for form action should always be a server component
        </li>
        <li>
          There will be instance where you need to use client componenet like
          clear a form after api call
        </li>
        <li>
          So you need to move this server function in seprate file or pass it as
          prop from parent component
        </li>
        <li>
          Form Example <Link href="/server_actions/form"> Click Here</Link>
        </li>
      </ul>
    </>
  );
}
