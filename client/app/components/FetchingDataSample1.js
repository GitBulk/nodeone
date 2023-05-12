// use async and await to fetch data in Server Components.

export default async function FetchingDataSample1() {
  const data = await getSampleUser()
  return (
    <div>{JSON.stringify(data)}</div>
  )
}

async function getSampleUser() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  if (!response.ok) throw new Error('failed to fetch data')

  return response.json()
}
