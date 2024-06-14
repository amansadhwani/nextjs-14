export default function RouteId({ params }: { params: { id: string } }) {
  console.log(params.id);
  return <h1>I will be re-rendered every time</h1>;
}
