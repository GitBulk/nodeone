export async function getUsers() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  const users = response.json()
  return users
}