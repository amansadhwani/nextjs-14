import { getTodos } from "@/app/api/cache";

export default async function RequestMemoization() {
  const data = await getTodos();
  const data1 = await getTodos();
  return (
    <>
      <h1>Requst Memoizations</h1>
      <div>{data?.length}-- Api one</div>
      <div>{data1?.length}-- Api two</div>
      This data is from api
      <ul>
        <li>
          Here we are calling api two times but if you notice nextjs makes only
          one api call
        </li>
        <li>
          now Even when you navigate between pages it would not make api call
          since data returned from that function is cache
        </li>
        <li>To get new data hard referesh page and api call will be made</li>
        <li>Note this will only work on return values of functions</li>
        <li>To opt out you can use abort controller </li>
        <li>
          To cache anything else manually you can import `&apos;`cache`&apos;`
          from react
        </li>
      </ul>
    </>
  );
}
