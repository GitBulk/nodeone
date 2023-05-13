import { cache } from 'react'
import 'server-only'

export const getUser = cache(async (id) => {
  console.log('getUser', id)
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
  return res.json()
})

export const preloadUser = (id) => {
  void getUser(id)
}
