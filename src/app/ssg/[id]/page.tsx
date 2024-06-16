async function getTodosByID(id: number | string) {
  return fetch(`https://jsonplaceholder.typicode.com/todos/${id}`).then(
    (response) => response.json()
  );
}

export async function generateStaticParams() {
  return [{ id: "1" }, { id: "2" }];
}

export default async function SSG({ params }: { params: { id: string } }) {
  const getTodoId: any = await getTodosByID(params.id);
  console.log(getTodoId);
  return (
    <>
      <h1> This is Static site generated page </h1>
      <div>{getTodoId.title}</div>
    </>
  );
}
