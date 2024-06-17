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
      <h1>Use Optimistic</h1>
      <ul>
        <li>It kind of predicting the output</li>
        <li>
          if we update something and api might take some time to return data so
          kind of predict result and updates it quickly
        </li>
        <li>
          it can also happen that server send invalid resoponse so it will
          revert to original value
        </li>
        <li>
          Use Optimistic Example{" "}
          <Link href="/server_actions/use_optimistic/use_optimistic_example"> Click Here</Link>
        </li>
      </ul>
    </>
  );
}
