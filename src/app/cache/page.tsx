import Link from "next/link";

export default function CacheTechniques() {
  return (
    <>
      <h1>This is Page for different caching techniques</h1>
      <ul>
        <Link href="/cache/request_memoization">
          <li>Requst Memoization</li>
        </Link>
        <Link href="/cache/data_cache">
          <li>Data Cache</li>
        </Link>
        <Link href="/cache/full_route_cache">
          <li>Full route cache</li>
        </Link>
      </ul>
    </>
  );
}
