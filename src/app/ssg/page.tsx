import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/default-highlight";

export default function SSG() {
  return (
    <>
      <ul>
        <li>
          Here we have statically called route 1 and 2 and cached it during
          build time so data will be pre-fetched during build time
        </li>
        <li>So no api is being made on build</li>
        <li>
          use this <i>generateStaticParams</i>
        </li>
        <li>Anything other than 1&2 will make an api call once</li>
      </ul>
      <SyntaxHighlighter language="react">
        {`
export async function generateStaticParams() {
  return [{ id: "1" }, { id: "2" }];
}
  `}
      </SyntaxHighlighter>
    </>
  );
}
