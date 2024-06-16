export const dynamic = "force-dynamic"; // here we explicitly say to nextjs not to pre-render this page since it would be dynamic

export default function Contact() {
  return <h1>This is Contact us {Math.random()}</h1>;
}
