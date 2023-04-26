import { useFetch } from 'hooks/useFetch'

export default function Sample1() {
  const { data, loading, error } = useFetch('https://jsonplaceholder.typicode.com/users')
  if (error) {
    console.log('error', error)
  }
  return (
    <div>
      {loading && <div>Loading...</div>}
      {data && <div>{data.map(item => <div key={item.id}>{JSON.stringify(item)}</div>)}</div>}
    </div>
  )
}
