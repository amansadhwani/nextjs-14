const API_URL = "http://localhost:3001";

export async function getTodos() {
  //await wait(2000);
  return fetch(`${API_URL}/todos`)
    .then((res) => res.json())
    .then((data) => data);
}

function wait(duration: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
}
