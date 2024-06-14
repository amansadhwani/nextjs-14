import Link from "next/link";

export default function FullRouteCache() {
  console.log("rendering");
  return (
    <>
      <h1>Hello</h1>
      <ul>
        <li>During build time this page will get prepared</li>
        <li>
          So if there is any static api it will be compiled during build time
        </li>
        <li>Saves time during rendering</li>
        <li>
          Example this rendering will be called only once during build time and
          not thereafter
        </li>
        <li>
          To achieve dybamic routes if static data changes you can always use{" "}
          <b>revalidatePath()</b>
        </li>
        <li>For dynamic routes it will alwys make new api call</li>
        <li>
          <b>
            <Link href={`/cache/full_route_cache/${Math.random()}}`}>This is dynamic route so it won;t be cached</Link>
          </b>
        </li>
      </ul>
    </>
  );
}
