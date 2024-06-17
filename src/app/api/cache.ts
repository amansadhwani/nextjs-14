const API_URL = "http://localhost:3001";

export async function getTodos() {
  // revalidate after 5 seconds use { next: { revalidate: 5 } }
  return fetch(`${API_URL}/todos`)
    .then((res) => res.json())
    .then((data) => data);
}

export async function getUsers() {
  //await wait(2000)
  return fetch(`${API_URL}/users`)
    .then((res) => res.json())
    .then((data) => data);
}

export async function getUser(userId: string | number) {
  //await wait(2000)
  return fetch(`${API_URL}/users/${userId}`)
    .then((res) => res.json())
    .then((data) => data);
}

export function wait(duration: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
}
