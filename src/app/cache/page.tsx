import Link from "next/link";

export default function CacheTechniques() {
  return (
    <>
      <h1>This is Page for different caching techniques</h1>
      <ul>
        <Link href="/cache/request_memoization">
          <li>Requst Memoization</li>
        </Link>
      </ul>
    </>
  );
}
