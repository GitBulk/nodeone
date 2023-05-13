import User from '@/components/User'
import { preloadUser } from '@/utils/UserRepository'

export default function UserDetails({ params: { id } }) {
  preloadUser(id)
  return (
    <User id={id} />
  )
}
