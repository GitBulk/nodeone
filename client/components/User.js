import { getUser } from '@/utils/UserRepository'

export default async function User({ id }) {
  const user = await getUser(id)
  return (
    <div>{JSON.stringify(user)}</div>
  )
}
