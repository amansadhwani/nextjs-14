import { getTodos, getUsers } from "@/app/api/cache";
import Link from "next/link";

// revalidate whole page after 5 seconds
// export const revalidate = 5;
//export const dynamic = "force-dynamic";

export default async function DataCache() {
  const data = await getTodos();
  const users = await getUsers();
  return (
    <>
      <h1>Data Cache</h1>
      <div>{data?.length}-- Api one</div>
      <div>{users?.length}-- Api two</div>
      This data is from api
      <ul>
        <li>
          To revalidate single api add next: revalidate:5 so after 5 second that
          api will be fired
        </li>
        <li>
          <b>
            To revalidate whole page we can ad export const revalidate=5 so
            after 5 seconds whole pag would be re-fetched
          </b>
        </li>

        <li>To get new data hard referesh page and api call will be made</li>
        <li>To opt out you can use cache:no-store in fetch request </li>
        <li>To opt out at component level use dynamic force-dynamic </li>
        <li>
          <h3>
            <Link href="/cache/data_cache/revalidate_path">
              Revalidate Path
            </Link>
          </h3>
        </li>
      </ul>
    </>
  );
}
